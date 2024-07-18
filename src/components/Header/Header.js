import React from "react";
import { Box, Grid, IconButton, styled, TextField, Typography, Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../../assets/logo.webp";

const Header = () => {
  const { cart } = useSelector((state) => state.cart);
  const quantity = cart.length > 0 ? cart.reduce((total, item) => total + item.quantity, 0) : 0;

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 1,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <Grid
      container
      sx={{
        backgroundColor: "white",
        padding: "10px 20px",
        marginBottom: "10px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid
        item
        md={3}
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "flex-start",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{
            width: "50px",
            height: "40px",
            objectFit: "contain",
            borderRadius: "10px",
          }}
        />
      </Grid>
      <Grid item md={4}>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h4" style={{ fontSize: "18px" }}>
            Home
          </Typography>
          <Typography variant="h4" style={{ fontSize: "18px" }}>
            About
          </Typography>
          <Typography variant="h4" style={{ fontSize: "18px" }}>
            Contact
          </Typography>
          <Typography variant="h4" style={{ fontSize: "18px" }}>
            Service
          </Typography>
          <Link to="/addproduct" style={{ textDecoration: "none", color: "black" }}>
            <Typography variant="h4" style={{ fontSize: "18px" }}>
              Add Product
            </Typography>
          </Link>
        </Box>
      </Grid>
      <Grid
        item
        md={5}
        sx={{ display: "flex", justifyContent: "end", alignItems: "center" }}
      >
        <Box>
          <TextField
            fullWidth
            variant="outlined"
            InputProps={{ style: { height: "40px" } }}
            style={{ width: "280px" }}
          />
        </Box>
        <Box ml={3} style={{ display: "flex", gap: "10px", cursor: "pointer" }}>
          <AccountCircleIcon />
          <Link to="/cartpage">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={quantity ? quantity : 0} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
