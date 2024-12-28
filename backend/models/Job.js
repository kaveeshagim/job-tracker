const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  status: {
    type: String,
    enum: ["Applied", "Interviewing", "Offer", "Rejected"],
    default: "Applied",
  },
  dateApplied: { type: Date, default: Date.now },
  notes: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // To link jobs to a user
});

module.exports = mongoose.model("Job", jobSchema);
