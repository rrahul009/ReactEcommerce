import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, {  useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    avatar: "",
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };
  const handleFileChange = (e) => {
    setProductData({ ...productData, avatar: e.target.files[0] });
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("description", productData.description);
    formData.append("price", productData.price);
    formData.append("stock", productData.stock);
    formData.append("category", productData.category);
    formData.append("avatar", productData.avatar);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/product/addproduct",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 201) 
        {toast(response.data.message)}
     setProductData({
        name:'',
        description:'',
        price:'',
        stock:'',
        category:'',
        avatar:''
       
     })
     
     
      
    } catch (error) {
      console.error("Error", error);
    }
  };
  return (
    <Grid
      container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper elevation={3} style={{ padding: "20px", width: "400px" }}>
        <Typography textAlign="center" variant="h5">
          ADD PRODUCT
        </Typography>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <TextField
            fullWidth
            placeholder="Enter Product Name"
            name="name"
            value={productData.name}
            onChange={handleChange}
          />
          <TextField
            placeholder="Enter Product Description"
            name="description"
            value={productData.description}
            onChange={handleChange}
          />
          <TextField
            placeholder="price"
            name="price"
            value={productData.price}
            onChange={handleChange}
          />
          <TextField
            placeholder="stock"
            name="stock"
            value={productData.stock}
            onChange={handleChange}
          />
          <TextField
            placeholder="category"
            name="category"
            value={productData.category}
            onChange={handleChange}
          />
          <TextField type="file" onChange={handleFileChange} />
          <Button variant="contained" type="submit" onClick={handleSubmit}>
            Add Product
          </Button>
        </Box>
      </Paper>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        type="error"
        
      />
       
       
       
    </Grid>
  );
};

export default NewProduct;
