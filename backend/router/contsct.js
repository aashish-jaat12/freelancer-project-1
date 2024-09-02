import express from "express";
import { body, validationResult } from "express-validator";
import contactdata from "../models/contactmodel.js";
const Contactrouter = express.Router();

export default Contactrouter.post(
  "/contact",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("number").isMobilePhone().withMessage("Valid phone number is required"),
    body("subject").notEmpty().withMessage("Subject is required"),
    body("message").notEmpty().withMessage("Message is required"),
  ],

  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array({}) });
    }
    const { name, email, number, subject, message } = req.body;

    // Assuming contactdata is a Mongoose model
    const newContact = new contactdata({
      name,
      email,
      number,
      subject,
      message,
    });

    newContact.save()
      .then(() => res.json({ success: true, message: "your data recaved" }))
      .catch((error) =>
        res.status(500).json({ success: false, error: error.message })
      );
  }
);
