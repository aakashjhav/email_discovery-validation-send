///////////////////IMPORTS//////////////////

import express from "express";
import OpenAI from "openai";
import NeverBounce from "neverbounce";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;
// const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.use(cors());
app.use(express.static("."));
app.use(express.json());

////////////////////#1.Google Ai///////////////////////////

const genAI = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.post("/generateGoogleGenAi", async (req, res) => {
  try {
    const companyName = req.body.companyName;
    console.log(`req.body=`, req.body);
    console.log(`companyName=`, companyName);
    const prompt = `Give a short AI-style overview of the employee email format used by ${companyName}.
Only return the summary paragraph like Google's AI Overview. Also give the common email patters with the percentage.
Do not include explanations or suggestions.`;
    console.log(prompt);
    const result = await genAI.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: { tools: [{ googleSearch: {} }] },
    });
    console.log(result.text);
    res.json({ answer: result.text });
  } catch (error) {
    console.error(error.message);
  }
});

//////////////////#2. Chat gpt////////////////////////
const clientOpenAi = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/generateOpenAi", async (req, res) => {
  try {
    const employeeList = req.body.employeeList;
    const emailFormat = req.body.emailFormat;
    console.log(`employeeList`, employeeList);
    console.log(`emailFormat`, emailFormat);
    const prompt = `email format = ${emailFormat} based on this email format please create email for the following employees in the graphql window style.
    ${employeeList}
    Just give me their email no names and without quotes and without commmas`;
    const result = await clientOpenAi.responses.create({
      model: "gpt-4o-mini",
      input: prompt,
    });
    const data = result.output_text;
    res.json(result.output_text);
    console.log(`openAi response`, data);
  } catch (error) {
    console.error(error.message);
  }
});

//////////////////Never Bounce/////////////

const neverBounce = new NeverBounce({
  apiKey: process.env.NEVERBOUNCE_API_KEY,
});

app.post("/validateNeverBounce", async (req, res) => {
  try {
    const emailList = req.body;
    const resultArray = [];
    for (const item of emailList) {
      const answer = await neverBounce.single.check(item);
      const { result } = answer.response;
      resultArray.push(`[${item} - ${result}]  `);
    }

    res.json(resultArray);
  } catch (error) {
    error.message;
  }
});

///////////////////OpenAi - fristName///////////////

const clientOpenAi2 = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/generateOpenAiFirstName", async (req, res) => {
  try {
    const { employeesList } = req.body;

    console.log(`employeeList`, employeesList);
    const prompt = `For this employees- ${employeesList} please give me their First Name. Just the First Name nothing else, so its every easy to copy and paste`;
    const result = await clientOpenAi2.responses.create({
      model: "gpt-4o-mini",
      input: prompt,
    });
    const data = result.output_text;

    console.log(`openAi Frist Name response`, data);
    res.json(data);
  } catch (error) {
    console.error(error.message);
  }
});

///////////////////OpenAi - fristName///////////////

const clientOpenAi3 = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/generateOpenAiFirstName", async (req, res) => {
  try {
    const { employeesList } = req.body;

    console.log(`employeeList`, employeesList);
    const prompt = `For this employees- ${employeesList} please give me their First Name. Just the First Name nothing else, so its every easy to copy and paste`;
    const result = await clientOpenAi3.responses.create({
      model: "gpt-4o-mini",
      input: prompt,
    });
    const data = result.output_text;

    console.log(`openAi Frist Name response`, data);
    res.json(data);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(port, () => {
  //   console.log(`server running on ${port}`);
});
