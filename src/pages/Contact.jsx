import React, { useState } from "react";
import { SlCallOut } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import "../components/contact/Contact.css"
import Footer from "../components/Footer/Footer";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const api = import.meta.env.VITE_API_URL;
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch(`${api}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setStatus(data.message);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("Failed to send message.");
    }
  };

  return (
  <>
    <div className="container-contact mx-auto p-4">

        <section className="contact-hero mb-10">
            <h1 className="contact-h1 text-4xl font-bold text-center mb-6">Contact Us</h1>
            <p className="contact-p text-center text-gray-600 mb-4">
                We would love to hear from you! Please fill out the form below.
            </p>


            <section className="contact-info mb-10">
                <div className="contact-box">
                    <SlCallOut className="contact-icon" />
                    <div className="infoli">
                        <p className="C-P">CALL US</p>
                        <p className="contact-text">+1 234 567 890</p>
                    </div>

                   
                    
                </div>
                <div className="contact-box">
                    <CiMail className="contact-icon" />
                    <div className="infoli">
                        <p className="C-P">EMAIL US</p>
                    <p className="contact-text">cryptous@gmail.com</p>
                    </div>
                    
                </div>
                <div className="contact-box">
                    <CiLocationOn className="contact-icon" />
                    <div className="infoli">
                        <p className="C-P"> HEADQUARTERS</p>
                    <p className="contact-text">123 Main St, City, Country</p>
                    </div>
                    
                </div>
          
            </section>



        </section>


       



        <section className="contact-form mb-10">
            <div className="INFO-IDEAS">
                <h1>What is your Question</h1>
                <p>We would love to hear from you! Please fill out the form below.</p>
            </div>
      <form onSubmit={handleSubmit} className="form-spas space-y-5">
        <div>
          <label className="block font-semibold mb-2">Name</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="inputs w-full p-3 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="inputs w-full p-3 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Subject</label>
          <input
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            required
            className="inputs w-full p-3 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Message</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="contact-btn "
        >
          Send Message
        </button>
        {status && <p className="green1 mt-4 text-green-600">{status}</p>}
      </form>
    </section>

        
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
