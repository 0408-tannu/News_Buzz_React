import { sendEmail } from "./algorithms/SendEmail.js";
import dotenv from "dotenv";
dotenv.config();

const testMail = async () => {
  console.log("Starting email test (App Password Method)...");
  console.log("Checking environment variables...");
  console.log("EMAIL_USER:", process.env.EMAIL_USER ? "FOUND" : "MISSING");
  console.log(
    "EMAIL_APP_PASS:",
    process.env.EMAIL_APP_PASS ? "FOUND" : "MISSING",
  );

  if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASS) {
    console.error("❌ Required environment variables are missing in .env");
    return;
  }

  try {
    const result = await sendEmail(
      "TestUser",
      process.env.EMAIL_USER, // testing by sending to yourself
      "123456",
      false,
    );
    if (result && result.accepted) {
      console.log("✅ Email sent successfully!");
      console.log("Result:", result);
    } else {
      console.log("❌ Email failed to send.");
      console.log("Result:", result);
    }
  } catch (error) {
    console.error("❌ An error occurred during the test:");
    console.error(error);
  }
};

testMail();
