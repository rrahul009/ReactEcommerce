import React from "react";
import Carausel from "../../components/Carausel";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Carausel />
      <Box mt={3} ml={3}>
        <Link to="/product">
          <Button variant="contained">Shop Now</Button>
        </Link>
      </Box>
    </>
  );
};

export default Home;
