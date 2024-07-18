import { Box, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import Loading from "../components/Loading";
import Sidebar from "../components/Sidebar";

const ProductPage = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchProductData();
  }, []);
  const fetchProductData = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/product/getproduct"
    );
    setLoading(false);
    console.log(response);
    setProductData(response.data.productData);
  };
  return (
   <Box display="flex">
    <Box position="fixed" width='20%'  height="100vh" overflow="auto">
      <Sidebar/>

    </Box>
    <Box flexGrow={1} ml="20%" overflow="auto" height="100vh">
      {loading?(
        <Loading/>
      ):(
        <Grid container spacing={3} padding={3}>
          {productData.map((product)=>(
            <Grid item md={4} key={product._id}>
              <ProductItem product={product}/>

            </Grid>
          )
          )}

        </Grid>
      )}

    </Box>

   </Box>
  );
};

export default ProductPage;
