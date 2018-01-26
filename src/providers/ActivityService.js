import axios from "axios";

export default  {
  // Gets all activities
  getActivities: function() {
    return axios.get("/api/activities");
  },
  // Gets the activity with the given id
  getActivity: function(id) {
    return axios.get("/api/activities/" + id);
  },
  // Deletes the activity with the given id
  deleteActivity: function(id) {
    return axios.delete("/api/activities/" + id);
  },
  // Saves a activity to the database
  saveActivity: function(activityData) {
    console.log(activityData);
    return axios.post("/api/activities", activityData);
  }
};