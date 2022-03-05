import React from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, age, course, batch) {
  return { name, age, course, batch };
}

const rows = [
  createData("Farhan", 25, "MERN", "October", 4.0),
  createData("Salman", 23, "MERN", "September", 4.3),
  createData("Sahil", 26, "MERN", "November", 6.0),
  createData("ayesha", 30, "MERN", "October", 4.3),
  createData("Kareena", 21, "MERN", "November", 3.9),
];

export default function DenseTable() {
  return (
    <>
      <div className="cont">
        <h1> Student Details</h1>
        <Link to="*" className="hom">
          <button>Add new student</button>
        </Link>
      </div>
      <TableContainer className="tabl" component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  color: "blue",
                }}
              >
                Name
              </TableCell>
              <TableCell
                align="right"
                style={{
                  color: "blue",
                }}
              >
                Age
              </TableCell>
              <TableCell
                align="right"
                style={{
                  color: "blue",
                }}
              >
                Course
              </TableCell>
              <TableCell
                align="right"
                style={{
                  color: "blue",
                }}
              >
                Batch
              </TableCell>
              <TableCell
                align="right"
                style={{
                  color: "blue",
                }}
              >
                Change
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.course}</TableCell>
                <TableCell align="right">{row.batch}</TableCell>

                <TableCell align="right">
                  <Link to="*">Edit</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
