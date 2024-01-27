/* Contact.jsx, Kenta Yamada, 301366037, 2024/01/27 */

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  grid,
  gridItem,
  form,
  input,
  downloadBtn,
  contact,
} from "./Contact.module.css";

export default function Contact() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <>
      <h1>Contact</h1>
      <div className={grid}>
        <div className={gridItem}>
          <div className={contact}>
            <i className="fa fa-phone" />
            <p>(212) 555-2368</p>
          </div>
          <div className={contact}>
            <i className="fa fa-envelope" />
            <p>kyamada@gmail.com</p>
          </div>
        </div>
        <div className={gridItem}>
          <form onSubmit={handleSubmit} className={form}>
            <input
              className={input}
              placeholder="First Name"
              type="text"
              name="firstName"
              value={inputs.firstName || ""}
              onChange={handleChange}
              required
            />
            <input
              className={input}
              placeholder="Last Name"
              type="text"
              name="lastName"
              value={inputs.lastName || ""}
              onChange={handleChange}
              required
            />
            <input
              className={input}
              placeholder="Contact Number"
              type="text"
              name="contactNumber"
              value={inputs.contactNumber || ""}
              onChange={handleChange}
              required
            />
            <input
              className={input}
              placeholder="Email"
              type="email"
              name="email"
              value={inputs.email || ""}
              onChange={handleChange}
              required
            />
            <textarea
              className={input}
              rows="10"
              placeholder="Message"
              name="message"
              value={inputs.message || ""}
              onChange={handleChange}
              required
            />
            <button type="submit" className={downloadBtn}>
              <i className="fa fa-paper-plane" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
