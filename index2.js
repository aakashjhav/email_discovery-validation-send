// // require("dotenv").config();
// // const BASE_URL = process.env.BASE_URL;
// // const API_TOKEN = process.env.API_TOKEN;
// // const BASE_URL2 = process.env.BASE_URL2;
// // import config from "./config.js";
// // Install with: npm install neverbounce
// import NeverBounce from "neverbounce";
// // async function getCountry() {
// //   try {
// //     //#1.make the call
// //     const response = await fetch("https://www.apicountries.com/countries", {
// //       method: "GET",
// //       headers: {
// //         Authorization: `Bearer ${config.API_TOKEN}`,
// //         Accept: "application/json",
// //       },
// //     });
// //     //#2. Error handling
// //     if (!response.ok) {
// //       throw new error(response.status);
// //     }
// //     // #3. Data storing
// //     const data = await response.json();
// //     console.log(data);
// //   } catch (err) {
// //     console.error("request failed:", err.message);
// //   }
// // }

// /////////////===>>>>> #2 <<<<<<<<========/////////////

// // const tickets = await getTickets();

// //here we will have the tickets

// // function ticketsFilter(tickets, status) {
// //   tickets.filter((item) => item.status === status);
// // // }
// // const openTickets = ticketsFilter(tickets, "open");

// //Q2
// // we will have an base url,empty array, paramter=currentPage=1->try catch block-> create param-currentPage  -> create a while loop->fetch the value, error handling->  and then add it to the array -> check if  nextPage === null if  yes then break or currentPage ++ ==>>new function which is going to filter isActive as true and then we will return that value.

// // async function getEmployees2() {
// //   const BASE_URL = "https://api.example.com/users";
// //   let CURRENT_PAGE = 1;
// //   const getAllEmployeeArray = [];

// //   try {
// //     while (true) {
// //       const params = new URLSearchParams();
// //       params.append("page", CURRENT_PAGE);

// //       let URL = `${BASE_URL}?${params}`;
// //       const response = await fetch(URL, {
// //         method: "GET",
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //           Accept: "application/json",
// //         },
// //       });

// //       if (!response.ok) {
// //         throw new Error(`This is the http error: ${response.status}`);
// //       }

// //       const result = await response.json();
// //       const employeeArray = result.users || [];
// //       getAllEmployeeArray.push(...employeeArray);

// //       if (!result.nextPage) break;
// //       CURRENT_PAGE++;
// //     }
// //     return getAllEmployeeArray;
// //   } catch (error) {
// //     console.error(`this is the http error: ${error.message}`);
// //   }
// // }

// // async function isActiveEmployee() {
// //   const allEmployees = await getEmployees2();
// //   const activeEmployees = allEmployees.filter((item) => item.isActive);
// //   return activeEmployees;
// // }

// //Q3-
// /* >Business requirement=>
//     > have an api and two paramters status and page. and we will have to keep calling the api until next Page is null
//     >
// >resppnse
//     ids of open tickets [102,101,...]
// >approach
//     >two functions. for #1- define the variables-base url, current page=1, empty array->try...catch block->under the try block we will have while loop-> while loop create parameter, call the api,  check the response, we will add it to the array,  check if next page is null if yes break or  we will currect page ++ ==> #2-  we use that array to tto map out the id and that creates a new array
// */

// // async function getOpenTickets (token){
// //     const BASE_URL='https://api.example.com/tickets'
// //     let CURRENT_PAGE=1
// //     const openTicketArray=[]

// //     try{
// //         while (CURRENT_PAGE){

// //         }

// //     }
// //     catch(error){console.error(`this is the http error:${error.message}`)}
// // }

// // async function openTicketIdArray(){
// //     const openTickets = await getOpenTickets();
// //     return openTickets.tickets.map(item=>item.id)
// // }

// // openTicketIdArray()

// // async function getOpenTickets(token) {
// //   const BASE_URL = "https://api.example.com/tickets";
// //   let CURRENT_PAGE = 1;
// //   const openTicketArray = [];

// //   try {
// //     while (CURRENT_PAGE) {
// //       const params = new URLSearchParams();
// //       params.append("status", "open");
// //       params.append("page", string(CURRENT_PAGE));

// //       let URL = `${BASE_URL}?${params}`;

// //       const response = await fetch(URL, {
// //         method: "GET",
// //         headers: {
// //           Accept: "application/json",
// //           Authorization: `Bearer ${token}`,
// //         },
// //       });
// //       if (!response.ok) {
// //         throw new Error(`This is http error:${response.status}`);
// //       }

// //       const result = await response.json();

// //       const openTicketResult = result.tickets || [];
// //       openTicketArray.push(...openTicketResult);

// //       if (!result.nextPage) break;
// //       CURRENT_PAGE++;
// //     }
// //     return openTicketArray;
// //   } catch (error) {
// //     console.error(`this is the http error:${error.message}`);
// //   }
// // }

// // async function openTicketIdArray(token) {
// //   const openTickets = await getOpenTickets(token);
// //   const openTicketIdList = openTickets.map((item) => item.id);
// //   return openTicketIdList;
// // }

// // openTicketIdArray("abc123");

// /*
//     1.define the variables- baseUrl, currentPage, empty array
//     2.try catch block
//     3. while loop
//     4. define the paramter
//     5. define the url
//     6.fetch
//     7.check the reposnse
//     8.add to the array
//     9.increment the counter/ current page
//     10.filter and map to get the ids
// */

// async function getCustomers(token) {
//   const BASE_URL3 = "https://api.example.com/customers";
//   let CURRENT_PAGE = 1;
//   const allCustomersArray = [];
//   try {
//     while (CURRENT_PAGE) {
//       const params = new URLSearchParams();
//       params.append("page", String(CURRENT_PAGE));

//       let URL = `${BASE_URL3}?${params}`;

//       const response = await fetch(URL, {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           Accept: "application/json",
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`This is http error: ${response.status}`);
//       }
//       const result = await response.json();
//       const customersResult = result.customers || [];
//       allCustomersArray.push(...customersResult);
//       if (!result.nextPage) break;
//       CURRENT_PAGE++;
//     }

//     return allCustomersArray;
//   } catch (error) {
//     console.error(`this is the error ${error.message}`);
//     throw error;
//   }
// }

// async function canadianCustomersId(token) {
//   const allCustomers = await getCustomers(token);
//   const canadianCustomer = allCustomers.filter(
//     (item) => item.country === "Canada",
//   );
//   const canadianCustomerIdResult = canadianCustomer.map((item) => item.id);

//   return canadianCustomerIdResult;
// }

// // canadianCustomersId("abc123");

// const allEmployees = [
//   {
//     personId: 25,
//     name: "Philip Wagener",
//     supervisorId: 4,
//     department: "IT",
//     jobTitle: "Director of IT",
//     phone: "801-724-6600 Ext. 1287",
//     email: "philip@efficientoffice.com",
//     location: "Ontario, Canada",
//   },
//   {
//     personId: 52,
//     name: "Nate Walker",
//     supervisorId: 11,
//     department: "Sales",
//     jobTitle: "Sales Director",
//     phone: "801-724-6600 Ext. 1307",
//     email: "nate@efficientoffice.com",
//     location: "Ontario, Canada",
//   },
//   {
//     personId: 15,
//     name: "Trent Walsh",
//     supervisorId: 8,
//     department: "Marketing",
//     jobTitle: "VP of Marketing",
//     phone: "801-724-6600 Ext. 123",
//     email: "twalsh@efficientoffice.com",
//     location: "Ontario, Canada",
//   },
//   {
//     personId: 91,
//     name: "Will Woodward",
//     supervisorId: 16,
//     department: "Operations",
//     jobTitle: "Instructional Designer",
//     phone: "801-724-6600 Ext. 1333",
//     email: "will@efficientoffice.com",
//     location: "Ontario, Canada",
//   },
// ];

// console.log(allEmployees);

// function getEmployeeById(id, infoArray) {
//   const resultArray = [];
//   const employeeInfo = allEmployees.find((item) => item.personId == id);

//   for (const item of infoArray) {
//     resultArray.push(employeeInfo[item]);
//   }

//   return resultArray;
// }

// console.log(
//   getEmployeeById(15, ["name", "department", "jobTitle", "location"]),
// );

// const infoArray = ["name", "department", "jobTitle", "location"];

// function findByField(arr, field, value) {
//   return arr.filter((item) => item[field] === value);
// }
// const users = [
//   { id: 1, name: "Alice", role: "admin" },
//   { id: 2, name: "Bob", role: "user" },
//   { id: 3, name: "Charlie", role: "admin" },
// ];

// console.log(findByField(users, "name", "Bob"));

// const orders = [
//   { id: 1, amount: 600 },
//   { id: 2, amount: 250 },
//   { id: 3, amount: 100 },
// ];

// function addStatus(orderArray) {
//   for (const item of orderArray) {
//     item["status"] =
//       item.amount >= 500 ? "high" : item.amount >= 200 ? "mdedium" : "low";
//   }

//   return orderArray;
// }

// console.log(addStatus(orders));

// const inventoryManager = {
//   item: [],
//   addItem: function (value) {
//     return this.item.push(value);
//   },
//   removeItem: function (value) {
//     return this.item.filter((item) => item !== value);
//   },
//   countItem: function () {
//     return this.item.length;
//   },
// };

// inventoryManager.addItem("king");
// inventoryManager.addItem("Loo");
// console.log(inventoryManager);
// console.log(inventoryManager.countItem());

// /* You are processing payment records coming from multiple payment gateways.
// Some transactions are invalid and should be ignored. */
// const transactions = [
//   { id: 1, amount: 500, status: "completed" },
//   { id: 2, amount: 300, status: "failed" },
//   { id: 3, amount: null, status: "completed" },
//   { id: 4, amount: 700, status: "completed" },
//   { id: 5, amount: 200, status: "refunded" },
//   { id: 6, amount: 400, status: "completed" },
// ];

// /* so here first we will try to understand what is invalid transaction*/

// function transactionCleanUp(transactions) {
//   let validTotalRevenue = 0;
//   for (const item of transactions) {
//     if (
//       item.status === "failed" ||
//       item.amount === null ||
//       item.status === "refunded"
//     )
//       continue;
//     validTotalRevenue += item.amount;
//   }

//   return validTotalRevenue;
// }

// console.log(transactionCleanUp(transactions));

// const transactions2 = [
//   { id: 1, amount: 200 },
//   { id: 2, amount: 400 },
//   { id: 3, amount: 15000 },
//   { id: 4, amount: 300 },
// ];

// function suspiciousTransaction(transaction) {
//   for (const item of transaction) {
//     if (item.amount > 10000) {
//       console.log(
//         `the transaction id- ${item.id} looks suspicious because the transaction of amount ${item.amount} is greater than 10,000`,
//       );
//       break;
//     }
//   }
// }

// console.log(suspiciousTransaction(transactions2));

// const tickets = [
//   { id: 101, customer: "Acme", issue: "Login issue" },
//   { id: 102, customer: "Nova", issue: "Billing question" },
//   { id: 103, customer: "Delta", issue: "API error" },
//   { id: 104, customer: "Orion", issue: "Feature request" },
// ];

// function ticketsForSupportAgents(crmTickets) {
//   const supportAgentTckets = [];

//   for (let i = crmTickets.length - 1; i >= 0; i--) {
//     supportAgentTckets.push(crmTickets[i]);
//   }

//   return supportAgentTckets;
// }

// console.log(ticketsForSupportAgents(tickets));

// /* Q - From the array below, collect only active users. Skip inactive ones using continue.

// const users = [
//  {name:"Aakash", active:true},
//  {name:"Shreni", active:false},
//  {name:"Rahul", active:true}
// ];
// */

// /* I will say that assuming that the we will have to create a new array, we will also that there is an option to use .filter which will create a new array but we will use for...of loop and continue statement becoz its more scalable

// */
// const newUsers = [
//   { name: "Aakash", active: true },
//   { name: "Shreni", active: false },
//   { name: "Rahul", active: true },
// ];

// function getActiveUsers(users) {
//   const activeUserArray = [];
//   for (const item of users) {
//     if (!item.active) continue;
//     activeUserArray.push(item);
//   }
//   return activeUserArray;
// }

// console.log(getActiveUsers(newUsers));

// /*
// Q-
// Add a property riskLevel using a ternary operator.

// Rules:

// score > 80 → "Low Risk"
// otherwise → "High Risk"

// const customers = [
//  {name:"Acme", score:90},
//  {name:"Nova", score:40},
//  {name:"Delta", score:85}
// ];
// */

// /*

// */

// const customers = [
//   { name: "Acme", score: 90 },
//   { name: "Nova", score: 40 },
//   { name: "Delta", score: 85 },
// ];

// function riskLevel(customerInfoArray) {
//   for (const item of customerInfoArray) {
//     item.riskLevel = item.score > 80 ? "low Risk" : "high risk";
//   }

//   return customerInfoArray;
// }

// console.log(riskLevel(customers));

// const emailQueue = {
//   emails: [],
//   addEmail: function (email) {
//     //we will first do if  the email is correct and then push
//     this.emails.push(email);

//     return `${email} added to the email list.`;
//   },
//   sendNextEmail: function () {},
//   getQueueLength: function () {
//     return this.emails.length;
//   },
//   showAllEmail: function () {
//     return this.emails;
//   },
// };

// emailQueue.addEmail("aakashjhav@gmail.com");

// console.log(emailQueue.addEmail("aakashjhav1@gmail.com"));

// console.log(emailQueue.getQueueLength());

// console.log(emailQueue.showAllEmail());

// const deployments = [
//   { version: "1.0", status: "success" },
//   { version: "1.1", status: "success" },
//   { version: "1.2", status: "success" },
//   { version: "1.3", status: "failed" },
//   { version: "1.4", status: "failed" },
// ];

// function restoreVersion(deployments) {
//   let restoreVersionId = "";
//   for (let i = deployments.length - 1; i >= 0; i--) {
//     if (deployments[i].status === "failed") continue;
//     restoreVersionId = deployments[i].version;
//     break;
//   }
//   return restoreVersionId;
// }

// console.log(restoreVersion(deployments));

// function getvalue(obj, key) {
//   return obj[key];
// }
// const product = {
//   name: "Laptop",
//   price: 1200,
//   brand: "Dell",
// };

// console.log(getvalue(product, "brand"));

// const allProducts = [
//   { name: "Phone", price: 800, category: "electronics" },
//   { name: "Tablet", price: null, category: "electronics" },
//   { name: "Laptop", price: 1200, category: "electronics" },
//   { name: "Chair", price: 150, category: "furniture" },
//   { name: "Desk", price: 400, category: "furniture" },
//   { name: "Headphones", price: 200, category: "electronics" },
//   { name: "Monitor", price: 300, category: "electronics" },
//   { name: "Lamp", price: null, category: "furniture" },
// ];

// function totalRevenueByCategory(allProductsArray, category) {
//   const totalRevenue = allProductsArray
//     .filter((item) => item.category === category)
//     .reduce((acc, item) => {
//       acc = acc + item.price;

//       return acc;
//     }, 0);

//   return totalRevenue;
// }

// console.log(totalRevenueByCategory(allProducts, "electronics"));
// const students = [
//   { name: "Alex", score: 95 },
//   { name: "Sam", score: 70 },
// ];

// function addGrade(studentinfo) {
//   return studentinfo.map((item) => ({
//     ...item,
//     grade: item.score >= 90 ? "A" : "B",
//   }));
// }

// console.log(addGrade(students));

// //Initialize NeverBounce client
// const client = new NeverBounce({
//   apiKey: "private_35fc477dde63ac7985490287128a0d13",
// });

// const emailList = [
//   "ben.pinkus@adverity.com",
//   "petra.ornigotti@adverity.com",
//   "darren.farbstein@adverity.com",
//   "keenan.james@adverity.com",
//   "cameron.benoit@adverity.com",
//   "kim.whittaker@adverity.com",
//   "nick.causton@adverity.com",
//   "joseph.caston@adverity.com",
// ];

// async function validateEmail(emailList) {
//   try {
//     // Verify an email
//     for (const item of emailList) {
//       const result1 = await client.single.check(item);
//       const {
//         response: { result },
//       } = result1;
//       console.log(`${item} - ${result}`);
//       // console.log(result);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }
