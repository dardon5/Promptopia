import * as React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useStyles from "../../styles";
import { useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";

export default function ShowItem() {
  const classes = useStyles();

  const [itemsList, setItemList] = useState([]);

  const deleteItem = (id) => {
    axios.delete(`http://localhost:5000/items/${id}`).then(() => {
      window.location.reload(false);
    });
  };

  useEffect(() => {
    axios.get("http://localhost:5000/items").then((allItems) => {
      setItemList(allItems.data);
    });
  }, []);

  return (
    <TableContainer className={classes.tableBody} component={Paper}>
      <h2>Items</h2>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell text-align="center">Name</TableCell>
            <TableCell text-align="center">Quantity</TableCell>
            <TableCell text-align="center">Price ($)</TableCell>
            <TableCell text-align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {itemsList.map((item, key) => (
            <TableRow
              key={key}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell text-align="center">{item.name}</TableCell>
              <TableCell text-align="center">{item.quantity}</TableCell>
              <TableCell text-align="center">{item.price}</TableCell>
              <TableCell text-align="center">
                <IconButton
                  aria-label="delete"
                  color="primary"
                  onClick={() => deleteItem(item._id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
