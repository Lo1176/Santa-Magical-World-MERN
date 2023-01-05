import { useState, useEffect } from 'react'
import axios from "axios";
// MUI import
import { styled } from "@mui/material/styles";
// table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// Stack
import Stack from "@mui/material/Stack";
// btn
import Button from "@mui/material/Button";
import Toy from './Toy';
import { Link } from 'react-router-dom';

// import components

// import Routes



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));




export default function Home() {
  const [toys, setToys] = useState([]);

  const axiosToys = async () => {
    const result = await axios("http://127.0.0.1:3000/toys");
    setToys(result.data.toys)
    // console.log(toys);
  };

  useEffect(() => {
    axiosToys();
  }, []);

// console.log(toys);


  return (
    <>
      <div id="sidebar">
        <h1 align="center">Here is our Toys</h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Toy name</StyledTableCell>
                <StyledTableCell align="left">Calories</StyledTableCell>
                <StyledTableCell align="left">
                  Categories (have to link with cat)
                </StyledTableCell>
                <StyledTableCell align="left">Price</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {toys.map((toy) => (
                <StyledTableRow key={toy._id}>
                  <StyledTableCell component="th" scope="toy">
                    <Link to={`/details/${toy._id}`}>
                      <Button variant="text">{toy.name}</Button>
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {toy.description}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {toy.category_id}
                  </StyledTableCell>
                  <StyledTableCell align="left">{toy.price}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
