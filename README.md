# CRM API

An Express-based CRM API that manages leads and campaigns, featuring ETL data processing, metrics generation, report creation, and email notifications. Built with MongoDB for data storage and Nodemailer for sending emails. Ideal for tracking marketing performance and customer interactions.

## Features
- **Lead Management**: Add, view, and manage CRM leads.
- **Campaign Management**: Fetch dummy campaign data for marketing analysis.
- **ETL Processing**: Transform lead data to generate useful metrics.
- **Report Generation**: Export lead data as a CSV report.
- **Email Notifications**: Send email alerts for important events.

## Technologies Used
- **Node.js** and **Express** for server-side functionality.
- **MongoDB** for database management.
- **Mongoose** as the MongoDB object modeling tool.
- **Nodemailer** for sending email notifications.

## Prerequisites
- **Node.js** installed on your system.
- **MongoDB Atlas** or a local MongoDB server.
- **Git** for version control.

## Getting Started

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd <repository-folder>

2. Install Dependencies
     npm install

   
3. Set Up Environment Variables
   Create a .env file in the root directory and add the following:
    MONGO_URI=<your-mongodb-connection-string>
    EMAIL_USER=<your-email-address>
    EMAIL_PASS=<your-email-password>

4. Start the Server
    node server.js
    The server will run on http://localhost:5000

# API Endpoints

1. Leads Management
  GET /api/crm/leads
  Retrieve all leads in the system.

  POST /api/crm/leads
  Add a new lead.
  Request Body:
    {
  "name": "Lead Name",
  "email": "lead@example.com",
  "status": "new"
}


2. Campaigns Management
   GET /api/marketing/campaigns
   Retrieve dummy campaign data.

3. Metrics Generation
  GET /api/crm/metrics
  Trigger ETL processing to fetch CRM metrics.

4. Report Generation
   GET /api/crm/report
   Download a CSV report of the leads.

5. Email Notifications
   POST /api/send-email
   Trigger sending an email notification.
   Request Body:
     {
  "to": "recipient@example.com",
  "subject": "Test Email",
  "text": "This is a test email"
}


# Usage Instructions

1. Ensure MongoDB is running and the MONGO_URI in the .env file is correctly set.
2. Use Postman or a similar tool to interact with the API endpoints.
3. Monitor server logs for email notifications and ETL metrics.


# License
  This project is licensed under the MIT License.
   
Replace `https://github.com/Sarthaknagarjii/Ezymetrics` and `Ezymetrics/edit` with your actual repository details.


     

