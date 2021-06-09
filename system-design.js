
//1. Why do we need URL shortening
//2. Requirements and Goals of the System
    //Functional Requirements:
    //Non-Functional Requirements:
    // Extended Requirements:Analytics; e.g., how many times a redirection happened?
  
//3. Capacity Estimation and Constraints
   // Traffic estimates
   // Storage estimates

//4. System APIs
  
    //api_dev_key (string): The API developer key of a registered account. 
    //original_url (string): Original URL to be shortened.
    //custom_alias (string): Optional custom key for the URL.
    //user_name (string): Optional user name to be used in the encoding.
    //expire_date (string): Optional expiration date for the shortened URL.

//5. Database Design -
    // we don’t need to use relationships between objects – a NoSQL store like DynamoDB, 
    //Cassandra or Riak is a better choice.

//6. Basic System Design and Algorithm
  //a. Encoding actual URL -Base64 encoding
  //b. Generating keys offline - Key Generation Service 

//7. Data Partitioning and Replication
  //a. Range Based Partitioning

//8. Cache - We can cache URLs that are frequently accessed.

//9. Load Balancer (LB)
    //Between Clients and Application servers
    //Between Application Servers and database servers
    //Between Application Servers and Cache servers

//10. DB cleanup
//11. Telemetry -Some statistics worth tracking
//12. Security and Permissions
  // If a user does not have permission and tries to access a URL, 
  // we can send an error (HTTP 401) back. 
