import { useState } from "react";
// import PriceField from "./PriceField";
import Box from "@mui/material/Box";
// import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
// import FormHelperText from "@mui/material/FormHelperText";
// import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import axios from "axios";

// axios POST request

const AddToy = () => {
  // needs to be empty
  const [newToy, setNewToy] = useState({});

  function getValues(event) {
    // console.log(event)
    const name = event.target.name
    const value = event.target.value
    console.log(name + " " + value + " id : " + event.target.id)
    setNewToy({
      ...newToy,
      name: value,
      creationDate: new Date(),
    });
  }
  const options = {
    url: `http://localhost:3000/toys/add`,
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    newToy,
  };

  axios(options).then((response) => {
    // console.log(response.status);
  });

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
        onSubmit={(e) => handleSubmit(e)}
      >
        <FormControl>
          <InputLabel htmlFor="toy-name">Name</InputLabel>
          <OutlinedInput
            id="toy-name"
            name="name"
            value={newToy.name}
            required
            onChange={(e) => getValues(e)}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="toy-description">Description</InputLabel>
          <OutlinedInput
            id="toy-description"
            name="description"
            value={newToy.description}
            required
            onChange={(e) => getValues(e)}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="toy-categories">Catégories</InputLabel>
          <OutlinedInput
            id="toy-categories"
            name="categories"
            value={newToy.category}
            required
            onChange={(e) => getValues(e)}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="toy-price">Price</InputLabel>
          <OutlinedInput
            id="price"
            name="price"
            value={newToy.price}
            required
            onChange={(e) => getValues(e)}
          />
        </FormControl>

        <Button variant="contained" type="submit">
          add toy
        </Button>
      </Box>
    </div>
  );
};

export default AddToy;
