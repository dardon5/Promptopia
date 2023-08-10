import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import useStyles from "../../styles";
import Button from "@material-ui/core/Button";
import { AppBar } from "@material-ui/core";
import axios from "axios";

export default function Create() {
  const classes = useStyles();

  const [item, setItem] = useState({
    name: "",
    quantity: "",
    price: "",
  });

  const createItem = () => {
    axios.post("http://localhost:5000/items", item).then(() => {
      window.location.reload(false);
    });
  };
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <h2>Create item</h2>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={item.name}
          onChange={(event) => {
            setItem({ ...item, name: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Quantity"
          variant="outlined"
          value={item.quantity}
          onChange={(event) => {
            setItem({ ...item, quantity: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Price"
          variant="outlined"
          value={item.price}
          onChange={(event) => {
            setItem({ ...item, price: event.target.value });
          }}
        />
        <Button variant="contained" color="primary" onClick={createItem}>
          Submit
        </Button>
      </Box>
    </AppBar>
  );
}
