import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography, Button, Grid } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  console.log(cart)

  return (
    <Grid container>
    <Grid item md={6}>

    <Typography variant="h4" mb={3}>
        Cart
      </Typography>
      {cart.map((item, index) => (
        <Box key={index} mb={2} p={2} sx={{ border: "1px solid #ccc" }}>
          <Typography variant="h6">{item.product.name}</Typography>
          <img src={item.product.avatar} height="200px" width="200px"/>
          <Typography>{item.product.description}</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CurrencyRupeeIcon />
            <Typography>{item.product.price}</Typography>
          </Box>
          <Typography>
            <strong>Quantity:</strong> {item.quantity}
          </Typography>
          <Button variant="contained" color="secondary">
            Remove
          </Button>
        </Box>
      ))}
    </Grid>
    <Grid item md={6}>
        Checkout
    </Grid>
    </Grid>
  );
};

export default Cart;
