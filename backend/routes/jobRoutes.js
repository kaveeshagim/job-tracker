const express = require("express");
const {
  getJobs,
  addJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router
  .route("/")
  .get(protect, getJobs) // Get all jobs
  .post(protect, addJob); // Add a new job

router
  .route("/:id")
  .put(protect, updateJob) // Update a job
  .delete(protect, deleteJob); // Delete a job

module.exports = router;
