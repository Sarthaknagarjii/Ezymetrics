const generateReport = (data) => {
  const headers = "Name,Email,Status\n";
  const rows = data
    .map((lead) => `${lead.name},${lead.email},${lead.status}`)
    .join("\n");
  return headers + rows;
};

module.exports = { generateReport };
