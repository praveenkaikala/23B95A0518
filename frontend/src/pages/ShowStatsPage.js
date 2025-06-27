import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import { useGetUrls } from "../hooks/useGetUrls";
import { Link } from "react-router-dom";

const ShowStatsPage = ({data}) => {
  if (!data || data.length === 0) {
    return (
      <Typography variant="body1" mt={3}>
        No shortened URLs to display.
      </Typography>
    );
  }

  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Short URL</strong></TableCell>
            <TableCell><strong>Original URL</strong></TableCell>
            <TableCell><strong>Created At</strong></TableCell>
            <TableCell><strong>Expires At</strong></TableCell>
            <TableCell><strong>Clicks</strong></TableCell>
            <TableCell><strong>View Stats</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <a href={`http://localhost:5000/${row.shortUrl}`} target="new" rel="noreferrer">
                  {row.shortUrl}
                </a>
              </TableCell>
              <TableCell>
                <Typography noWrap maxWidth={200} overflow="hidden" textOverflow="ellipsis">
                  {row.originalUrl}
                </Typography>
              </TableCell>
              <TableCell>{new Date(row.created).toLocaleString()}</TableCell>
              <TableCell>{new Date(row.expire).toLocaleString()}</TableCell>
              <TableCell>{row.clicks}</TableCell>
              <TableCell><Link to={`/stats/${row.shortUrl}`}>View Stats</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ShowStatsPage;
