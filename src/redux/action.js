import * as types from "./actionType";
import axios from "axios";
const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});
const userdeleted = () => ({
  type: types.DELETE_USERS,
});

const userAdded = () => ({
  type: types.ADD_USERS,
});

const singleuserAdded = (user) => ({
  type: types.GET_SINGLE_USER,
  payload:user
});
const updateuser = () => ({
  type: types.UPDATE_USERS,
});

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(getUsers(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const deleteUsers = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(userdeleted(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const addUsers = (user) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}`, user)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(userAdded());
      })
      .catch((error) => console.log(error));
  };
};

export const singleUser = (id) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(singleuserAdded(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const udateUsers = (user,id) => {
  return function (dispatch) {
    axios
      .put(`${process.env.REACT_APP_API}/${id}`, user)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(updateuser());
      })
      .catch((error) => console.log(error));
  };
};


