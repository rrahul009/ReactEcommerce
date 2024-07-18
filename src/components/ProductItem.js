import { Box, Paper, Rating, Typography } from "@mui/material";
import React from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <Box>
      <Link
        to={`/detailspage/${product._id}`}
        style={{ textDecoration: "none" }}
      >
        <Paper sx={{ padding: "20px", height: "420px" }}>
          <img
            src={product.avatar}
            alt="avatar"
            style={{ width: "100%", objectFit: "contain", height: "200px" }}
          />
          <Typography
            textAlign="center"
            style={{ marginBottom: "10px", marginTop: "10px" }}
          >
            <strong>Name:</strong>
            {product.name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography>
              <strong>Price:</strong>
            </Typography>
            <CurrencyRupeeIcon />
            {product.price}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
              marginTop: "10px",
            }}
          >
            <Rating defaultValue={3} />
          </Box>
          <Typography variant="body2">{product.description}</Typography>
        </Paper>
      </Link>
    </Box>
  );
};

export default ProductItem;
