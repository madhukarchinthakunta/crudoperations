import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { deleteUsers, loadUsers } from "../redux/action";
import { useNavigate } from "react-router-dom";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

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

const Home = () => {
  let dispatch = useDispatch();
  let history = useNavigate();
  const { users } = useSelector((state) => state.users);
  
  const handleDelete = (id) => {
    if (window.confirm("Are you You Wanted to Delete The User?")) {
      dispatch(deleteUsers(id));
      dispatch(loadUsers());
    }
  };

  useEffect(() => {
    dispatch(loadUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 900, marginTop: 4 }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>FirstName</StyledTableCell>
              <StyledTableCell align="center">LastName</StyledTableCell>
              <StyledTableCell align="center">MaidenName</StyledTableCell>
              <StyledTableCell align="center">Age</StyledTableCell>
              <StyledTableCell align="center">Gender</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Phone</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user) => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell component="th" scope="row">
                    {user.firstName}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.lastName}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.maidenName}
                  </StyledTableCell>
                  <StyledTableCell align="center">{user.age}</StyledTableCell>
                  <StyledTableCell align="center">
                    {user.gender}
                  </StyledTableCell>
                  <StyledTableCell align="center">{user.email}</StyledTableCell>
                  <StyledTableCell align="center">{user.phone}</StyledTableCell>
                  <StyledTableCell align="center">
                    <ModeEditOutlineOutlinedIcon
                      style={{ marginRight: "10px" }}
                      onClick={() => history(`/editUser/${user.id}`)}
                    ></ModeEditOutlineOutlinedIcon>
                    <AddCircleOutlineOutlinedIcon
                      color="primary"
                      style={{ marginRight: "10px" }}
                      onClick={() => history("./addUser")}
                    ></AddCircleOutlineOutlinedIcon>
                    <DeleteOutlinedIcon
                      onClick={() => handleDelete(user.id)}
                    ></DeleteOutlinedIcon>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Home;
