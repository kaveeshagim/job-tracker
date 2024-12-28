const express = require("express");
const {
  getJobs,
  addJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobController");
const router = express.Router();

router
  .route("/")
  .get(getJobs) // Get all jobs
  .post(addJob); // Add a new job

router
  .route("/:id")
  .put(updateJob) // Update a job
  .delete(deleteJob); // Delete a job

module.exports = router;
