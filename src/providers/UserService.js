import axios from "axios";

export default  {
  // Gets all activities
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves an user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  }
};