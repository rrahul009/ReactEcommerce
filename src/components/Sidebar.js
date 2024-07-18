import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import React from "react";

const Sidebar = () => {
  const categories = ["Electronics", "Books", "Clothing", "Home Appliances"];
  const ratings = [1, 2, 3, 4, 5,6,7,8];
  const brands = ["Apple", "Samsung", "Sony", "LG", "Nike"];
  const colors = ["Red", "Blue", "Green", "Black", "White"];
  return (
    <Box p={2}>
      <Typography textAlign="end">filter By</Typography>
      <Typography>Categories</Typography>
      <FormGroup>
        {categories.map((cate) => (
          <Box key={cate}sx={{height:'28px'}}>
            <FormControlLabel control={<Checkbox />} label={cate} />
          </Box>
        ))}
      </FormGroup>
      <Typography mt={1}>Brand</Typography>
      <FormGroup>
        {brands.map((brand) => (
          <Box key={brand} sx={{height:'28px'}}>
            <FormControlLabel control={<Checkbox />} label={brand} />
          </Box>
        ))}
      </FormGroup>
      <Typography mt={1}>Colors</Typography>
      <FormGroup>
        {colors.map((colors) => (
          <Box key={colors} sx={{height:'28px'}}>
            <FormControlLabel control={<Checkbox />} label={colors} />
          </Box>
        ))}
      </FormGroup>
      <Typography mt={1}>Rating </Typography>
      <FormGroup>
        {ratings.map((ratings) => (
          <Box key={ratings} sx={{height:'28px'}}>
            <FormControlLabel control={<Checkbox />} label={ratings} />
          </Box>
        ))}
      </FormGroup>
    </Box>
  );
};

export default Sidebar;
