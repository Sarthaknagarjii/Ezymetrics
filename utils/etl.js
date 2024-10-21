const Lead = require("../models/Lead");

const transformLeadData = async () => {
  try {
    const leads = await Lead.find();

    const totalLeads = leads.length;
    const statusCounts = leads.reduce((acc, lead) => {
      acc[lead.status] = (acc[lead.status] || 0) + 1;
      return acc;
    }, {});

    const metrics = {
      totalLeads,
      statusCounts,
    };

    return metrics;
  } catch (err) {
    throw new Error("Error in ETL process");
  }
};

module.exports = {
  transformLeadData,
};
