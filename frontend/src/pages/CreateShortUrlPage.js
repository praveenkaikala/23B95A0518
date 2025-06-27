import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  Box,
} from "@mui/material";
import toast from "react-hot-toast";

const URLShortenerForm = ({refresh,setRefresh}) => {
  const [urls, setUrls] = useState({ url: "", time: "", name: "" });
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setUrls((prev)=>{
        return{
            ...prev,
            [e.target.name]:e.target.value
        }
    });
  };

  

  const handleSubmit = async () => {
    try {
      const responses = await
          axios.post("http://localhost:5000/shorturls", {
            url: urls.url,
            time: urls.time,
            name: urls.name,
          })
      toast.success("URL Successfully Shorted ")
      setUrls({ url: "", time: "", name: "" })
      setRefresh(!refresh)
    } catch (err) {
      toast.error("Error shortening URLs");
    }
  };

  return (
  <Paper elevation={3} className="form-container" style={{ padding: "20px" }}>
  <Typography variant="h5" gutterBottom>
    URL Shortener
  </Typography>

 
    <Box
      mb={2}
      p={2}
      border={1}
      borderColor="#ddd"
      borderRadius={2}
      bgcolor="#f9f9f9"
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Original URL"
            value={urls.url}
            name="url"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <TextField
            fullWidth
            label="Validity (mins)"
            type="number"
            name="time"
            value={urls.time}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <TextField
          name="name"
            fullWidth
            label="Shortcode"
            value={urls.name}
          onChange={handleChange}
          />
        </Grid>
      </Grid>
    </Box>

  <Box display="flex" gap={2} mb={3}>
    <Button variant="contained" onClick={handleSubmit}>
      Shorten URLs
    </Button>
  </Box>

  {results.length > 0 && (
    <Box mt={4}>
      <Typography variant="h6" gutterBottom>
        Shortened Results:
      </Typography>
      <ul>
        {results.map((item, idx) => (
          <li key={idx}>
            <a href={item.shortLink} target="_blank" rel="noreferrer">
              {item.shortLink}
            </a>{" "}
            (expires: {item.expiry})
          </li>
        ))}
      </ul>
    </Box>
  )}
</Paper>

  );
};

export default URLShortenerForm;
