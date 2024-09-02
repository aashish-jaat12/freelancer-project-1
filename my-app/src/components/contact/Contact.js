import React, { useState } from "react";
import "./contact.css";
import axios from "axios";

import { toast } from 'react-toastify'

function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [subject, setsubjet] = useState("");
  const [message, setmessage] = useState("");

  const formdata = {
    name: name,
    email: email,
    number: number,
    subject: subject,
    message: message,
  };
  const submitdata = async (e) => {
    e.preventDefault();
    try {
      const responce = await axios.post(
        "http://localhost:3000/api/contact",
        formdata
      );
      if (responce.data.success) {
        setname('')
        setemail('')
        setmessage('')
        setnumber('')
        setsubjet('')
        toast.success(responce.data.message)
        console.log(responce.data)
      } 
    } catch (error) {
      toast(error.response.data.errors.map((e) => e.msg).join(','));
      console.log(error.response)
      
    }
  };

  return (
    <div className="contact-container">
      <div className="profile-card">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.9945047754186!2d75.7969969!3d26.998723599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db21a5939c137%3A0xf5a1f161633b7cae!2sSarweshwar%20industries!5e0!3m2!1sen!2sin!4v1725263486685!5m2!1sen!2sin" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="google map"></iframe>
      </div>

      <div className="contact-form">
        <h2>Contact Me </h2>

        <form onSubmit={submitdata}>
          <div>
            <label>Name</label>
            <input
              type="text"
            
              required
              name="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div>
            <label>E-Mail</label>
            <input
              type="text"
           
              required
              name="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div>
            <label>Number</label>
            <input
              type="number"
            
              required
              name="numbar"
              value={number}
              onChange={(e) => setnumber(e.target.value)}
            />
          </div>
          <div>
            <label>Subject</label>
            <input
              type="text"
            
              required
              name="subject"
              value={subject}
              onChange={(e) => setsubjet(e.target.value)}
            />
          </div>
          <div>
            <label>Message</label>
            <textarea
              name="message"
              required
              placeholder="Write message"
              value={message}
              onChange={(e) => setmessage(e.target.value)}
            ></textarea>
          </div>
          <input type="submit" value="send message" className="btns" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
