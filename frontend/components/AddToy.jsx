import React from "react";
// import PriceField from "./PriceField";
import Box from "@mui/material/Box";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";



// axios POST request

const AddToy = () => {
  // const options = {
  //   url: 'http://localhost:3000/api/home',
  //   method: 'POST',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json;charset=UTF-8'
  //   },
  //   data: {
  //     name: 'David',
  //     age: 45
  //   }
  // };

  // axios(options)
  //   .then(response => {
  //     console.log(response.status);
  //   });

  return (
    <div>
      <h1>add a new toy</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl>
          <InputLabel htmlFor="toy-name">Name</InputLabel>
          <OutlinedInput
            id="toy-name"
            //   defaultValue="Composed TextField"
            label="Name"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="toy-description">Description</InputLabel>
          <OutlinedInput
            id="toy-description"
            //   defaultValue="Composed TextField"
            label="Description"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="toy-categories">Catégories</InputLabel>
          <OutlinedInput
            id="toy-categories"
            //   defaultValue="Composed TextField"
            label="Catégories"
          />
        </FormControl> 
        <FormControl>
          <InputLabel htmlFor="toy-price">Price</InputLabel>
          <OutlinedInput
            id="toy-price"
            //   defaultValue="Composed TextField"
            label="Price"
          />
        </FormControl> 
        {/* <PriceField />        */}
      </Box>
    </div>
  );
};

export default AddToy;
