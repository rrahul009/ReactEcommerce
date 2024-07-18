import { Box, Button, Grid, Rating, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/actions/cartActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const [productdetails, setProductDetails] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    const response = await axios.get(
      `http://localhost:8080/api/product/getsingleproduct/${id}`
    );
    setProductDetails(response.data.productDetail);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(productdetails, quantity));
    toast.success("Item added to cart!");
  };

  return (
    <Grid container spacing={2}>
      <Grid item md={6}>
        <Box sx={{ padding: "20px" }}>
          <img
            src={productdetails.avatar}
            alt={productdetails.name}
            height="300px"
            width="300px"
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ padding: "20px" }}>
            <img
              src={productdetails.avatar}
              alt={productdetails.name}
              height="50px"
              width="50px"
            />
          </Box>
          {/* Add more images if needed */}
        </Box>
      </Grid>
      <Grid item md={6}>
        <Box>
          <Typography variant="h5" mb={1}>
            {productdetails.name}
          </Typography>
          <Typography variant="body1" mb={1}>
            {productdetails.description}
          </Typography>
          <Typography mb={1}>
            <strong>Stock:</strong> {productdetails.stock}
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Typography>
              <strong>Price:</strong>
            </Typography>
            <Box sx={{ display: "flex" }}>
              <CurrencyRupeeIcon />
              <Typography>{productdetails.price}</Typography>
            </Box>
          </Box>
          <Box mt={1} sx={{ display: "flex" }}>
            <Typography>
              <strong>Rating:</strong>
            </Typography>
            <Rating defaultValue={3} />
          </Box>
          <Typography mt={2}>{/* Additional product details */}</Typography>
          <Box display="flex" alignItems="center">
            {/* <Box
              mt={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "7px",
                gap: "20px",
                border: "1px solid black",
                width: "120px",
              }}
            >
              <RemoveIcon
                onClick={handleDecrease}
                style={{
                  border: "1px solid black",
                  padding: "2px",
                  cursor: "pointer",
                }}
              />
              <Typography>{quantity}</Typography>
              <AddIcon
                onClick={handleIncrease}
                style={{
                  border: "1px solid black",
                  padding: "2px",
                  cursor: "pointer",
                }}
              />
            </Box> */}
           <Link to='/cartpage'>
           <Box>
              <Button variant="contained"
              color="secondary"
                style={{
                  marginTop: "30px",
                  padding: "10px",
                  marginLeft: "20px",
                }}
              >View Cart</Button>
            </Box></Link>
            <Box>
              <Button
                onClick={handleAddToCart}
                variant="contained"
                style={{
                  marginTop: "30px",
                  padding: "10px",
                  marginLeft: "20px",
                }}
              >
                Add to Cart
              </Button>
            </Box>
            <ToastContainer />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
