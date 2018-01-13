import axios from "axios";

export default  {
  // Gets all activities
  getActivities: function() {
    console.log("the getActivities function in the DB is bieng called");
    return axios.get("/api/activities");
  },
  // Gets the book with the given id
  getActivity: function(id) {
    return axios.get("/api/activities/" + id);
  },
  // Deletes the book with the given id
  deleteActivity: function(id) {
    return axios.delete("/api/activities/" + id);
  },
  // Saves a book to the database
  saveActivity: function(bookData) {
    return axios.post("/api/activities", bookData);
  }
};