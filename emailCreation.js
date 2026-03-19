/////#1- Get the company name////
const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", submitCompanyName);
//
async function submitCompanyName() {
  const companyNameTextBox = document.getElementById("company");
  const companyName = companyNameTextBox.value;
  //   console.log(companyName);
  const body = { companyName: companyName };
  console.log(body);
  const response = await fetch("/generateGoogleGenAi", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const result = await response.json();
  console.log(result);
  const googleResponseTextBox = document.getElementById(
    "googleResponseMessage",
  );

  googleResponseTextBox.textContent = result.answer;
}

/////#2 - Employee name submission/////
//2.1- select the element
const employeeSubmitBtn = document.getElementById("employeeSubmitBtn");
//2.2 add an event listner
employeeSubmitBtn.addEventListener("click", submitEmployees);
//2.3 add a call back function
let employeeNameListArray = [];
async function submitEmployees() {
  const employeeNames = document.getElementById("employeeName");
  const employeeNameList = employeeNames.value;
  employeeNameListArray = employeeNameList
    .split("\n")
    .map((item) => item.trim())
    .filter((item) => item !== "");
  console.log(employeeNameListArray);
}

/////#2 - specifc thing  name submission/////

const generateSpecificThingBtn = document.getElementById(
  "generateSpecificThingBtn",
);
generateSpecificThingBtn.addEventListener("click", sendSpecificThing);

async function sendSpecificThing() {
  const specificThing = document.getElementById("specificThing");
  const specificThingValue = specificThing.value;
  console.log(specificThingValue);
  const body = {
    companyAbout: specificThingValue,
  };

  const response = await fetch("/generateSpecifcThingOpenAi", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const result = await response.json();
  console.log(result);
  let SpecificThingResponseMessagValue = document.getElementById(
    "SpecificThingResponseMessage",
  );
  SpecificThingResponseMessagValue.textContent = result;
}

/////#2 - email  name submission/////

const submiteemail = document.getElementById("submiteemail");
submiteemail.addEventListener("click", sendEmailFormat);

async function sendEmailFormat() {
  console.log(employeeNameListArray);
  const emailFormat = document.getElementById("emailFormat");
  const emailFormatValue = emailFormat.value;
  console.log(emailFormat.value);
  const body = {
    employeeList: employeeNameListArray,
    emailFormat: emailFormatValue,
  };
  console.log(`emailFormatBody`, body);
  const response = await fetch("/generateOpenAi", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const result = await response.json();
  console.log(result);
  const chatGptResponseTextBox = document.getElementById(
    "chatGptResponseMessage",
  );

  chatGptResponseTextBox.textContent = result;
}

/////#3 - Neverbounce validation/////

const validateEmailBtn = document.getElementById("validateEmailBtn");
validateEmailBtn.addEventListener("click", valiadteEmailFormat);

async function valiadteEmailFormat() {
  const emailToValidate = document.getElementById("validateEmailInput");
  const emailListToValiadte = emailToValidate.value;
  const emailListToValiadteArray = emailListToValiadte
    .split("\n")
    .map((item) => item.trim())
    .filter((item) => item !== "");
  const body = emailListToValiadteArray;

  console.log(emailListToValiadteArray);

  const response = await fetch("/validateNeverBounce", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const result = await response.json();
  console.log(result);
  const neverBounceResponseTextBox = document.getElementById(
    "neverBounceResponseMessage",
  );

  neverBounceResponseTextBox.textContent = result;
}

////Get first name from open Ai////////

const getFirstNameButton = document.getElementById("getFirstNameButton");
getFirstNameButton.addEventListener("click", getFirstName);

async function getFirstName() {
  const response = await fetch("/generateOpenAiFirstName", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify({ employeesList: employeeNameListArray }),
  });

  const result = await response.json();
  console.log(result);
  const firstNameResponseMessage = document.getElementById(
    "firstNameResponseMessage",
  );

  firstNameResponseMessage.textContent = result;
}

////Get Specicfic thing from open Ai////////
