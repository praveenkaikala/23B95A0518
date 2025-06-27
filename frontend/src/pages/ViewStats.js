import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Paper,
  Box,
  CircularProgress,
  Link,
} from "@mui/material";
import axios from "axios";

const ShortURLStats = () => {
  const { url } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/shorturls/${url}`);
        setData(res.data.data);
      } catch (error) {
        setData({ error: "URL not found or expired." });
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, [url]);

  if (loading) return <CircularProgress sx={{ mt: 4 }} />;

  if (data?.error) {
    return (
      <Typography color="error" variant="h6" mt={4}>
        {data.error}
      </Typography>
    );
  }

  return (
    <Paper elevation={3} sx={{ p: 4, mt: 3, maxWidth: "700px", margin: "auto" }}>
      <Typography variant="h5" gutterBottom>
        Statistics for <code>{url}</code>
      </Typography>

      <Box mb={2}>
        <Typography><strong>Original URL:</strong></Typography>
        <Link href={data.originalUrl} target="_blank" rel="noreferrer">
          {data.originalUrl}
        </Link>
      </Box>

      <Typography><strong>Created At:</strong> {new Date(data.created).toLocaleString()}</Typography>
      <Typography><strong>Expires At:</strong> {new Date(data.expire).toLocaleString()}</Typography>
      <Typography><strong>Total Clicks:</strong> {data.clicks}</Typography>
    </Paper>
  );
};

export default ShortURLStats;
