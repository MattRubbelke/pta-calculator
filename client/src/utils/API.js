import axios from "axios";

export default {
  // Gets all Patent Applications
  getApps: function() {
    return axios.get("/api/apps");
  },
  // Gets the Patent Application with the given id
  getApp: function(id) {
    return axios.get("/api/apps/" + id);
  },
  // Deletes the Application with the given id
  deleteApp: function(id) {
    return axios.delete("/api/apps/" + id);
  },
  // Saves an Application to the database
  saveApp: function(appData) {
    return axios.post("/api/apps", appData);
  }
};
