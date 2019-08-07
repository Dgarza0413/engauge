import axios from "axios";

export default {
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  // get all well info
  getAllWells: function () {
    return axios.get("/api/wells");
  },
  // get specific well info
  getWell: function (id) {
    return axios.get("/api/well" + id);
  },
  // insert well info
  addWell: function (wellData) {
    return axios.post("/api/addWell", wellData);
  },
  postWellProd: function (wellData) {
    return axios.post("/api/welltable/:id/prod", wellData)
  },
  // get well data
  getWellId: function (wellId) {
    return axios.get("/api/well/" + wellId)
    // add data to the well
  },
  addToWell: function (id) {
    return axios.post("/api/well/" + id)
  }
};
