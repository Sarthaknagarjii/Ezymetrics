const express = require("express");
const router = express.Router();
const Lead = require("../models/Lead");
const { transformLeadData } = require("../utils/etl");
const { generateReport } = require("../utils/report");
const { sendEmail } = require("../utils/email");

const LEAD_THRESHOLD = 5; // Define the threshold for sending alerts

// Route to fetch dummy lead data
router.get("/crm/leads", async (req, res) => {
  try {
    const leads = await Lead.find();
    res.json(leads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to create dummy leads
router.post("/crm/leads", async (req, res) => {
  const { name, email, status } = req.body;

  const lead = new Lead({
    name,
    email,
    status,
  });

  try {
    const savedLead = await lead.save();

    const totalLeads = await Lead.countDocuments();
    if (totalLeads >= LEAD_THRESHOLD) {
      sendEmail(
        "recipient@example.com", // Change to the actual recipient email
        "Lead Threshold Alert",
        `The number of leads has reached ${totalLeads}!`
      );
    }

    res.status(201).json(savedLead);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to fetch dummy campaign data
router.get("/marketing/campaigns", (req, res) => {
  const dummyCampaigns = [
    { id: 1, name: "Summer Sale", status: "active", budget: 5000 },
    { id: 2, name: "Winter Campaign", status: "completed", budget: 7000 },
  ];
  res.json(dummyCampaigns);
});

// Route to trigger the ETL process and get metrics
router.get("/crm/metrics", async (req, res) => {
  try {
    const metrics = await transformLeadData();
    res.json(metrics);
  } catch (err) {
    res.status(500).json({ message: "Error generating metrics" });
  }
});

// Route to generate reports in CSV format
router.get("/crm/report", async (req, res) => {
  try {
    const reportData = await Lead.find();
    const report = generateReport(reportData); // Ensure this function generates CSV correctly

    res.header("Content-Type", "text/csv");
    res.attachment("leads_report.csv");
    res.send(report);
  } catch (err) {
    res.status(500).json({ message: "Error generating report" });
  }
});

module.exports = router;
