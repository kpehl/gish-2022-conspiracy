const workProjects = [
    {
        "id": 1,
        "title": "Maintenance and Repair Application",
        "image": require("../assets/images/maintenance-and-repair.png").default,
        "description": "An organization providing maintenence and repair services can keep track of clients and contact information, information on technicians, and information on requested and completed service requests.",
        "tools": "MySQL / Laravel / Vue / Javascript / JWT Authentication"
    },
    {
        "id": 2,
        "title": "Data Access Request Application",
        "image": require("../assets/images/DataAccessAppScreenshots.png").default,
        "description": "A person requests access to a set of data and is sent a document to sign via HelloSign. A group of approvers is notified of the completed document and can approve or deny access. AWS credentials for the dataset are generated upon approval after a waiting period and sent to the user. Administrators can manage all user data.",
        "tools": "MySQL / Laravel / Vue / Javascript / AWS S3 / Mailgun / JWT Authentication"
    }
  ];
  
  export default workProjects;