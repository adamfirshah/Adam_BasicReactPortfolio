import OurOffice from "../components/ouroffice";
import Navbar from "../components/navbar";
import Button from "../components/button";
import {
  Input,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextareaAutosize,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
import Footer from "../components/footer";

function ContactUs() {
  const [phoneNumberFormat, setPhoneNumberFormat] = useState("+60");

  const options = [
    "Become a client",
    "Join the team",
    "Investor enquiry",
    "Others",
  ];

  return (
    <>
      <Navbar />

      <div className="section-9">
        <h2 className="sectionContact text-left pt-20 pb-2">CONTACT US</h2>

        <p className="sectionContactPara">
          Let's create something awesome <br />
          together
        </p>

        <form className="form-container">
          <div className="fullname">
            <h6>Full name</h6>
            <Input
              className="input-box half-width"
              id="name"
              name="name"
              variant="standard"
              placeholder=""
            />
          </div>

          <div className="contact">
            <div className="contact-field">
              <h6>Phone Number</h6>
              <div className="input-box phone-input">
                <select
                  className="phone-format"
                  value={phoneNumberFormat}
                  onChange={(e) => setPhoneNumberFormat(e.target.value)}
                >
                  <option value="+60">+60</option>
                  <option value="+1">+1</option>
                  {/* tambah sini */}
                </select>
                <Input
                  className="phone-input-field"
                  id="phone"
                  name="phone"
                  variant="standard"
                  placeholder=""
                />
              </div>
            </div>
            <div className="contact-field">
              <h6>Work Email</h6>
              <Input
                className="input-box"
                id="email"
                name="email"
                variant="standard"
                placeholder=""
              />
            </div>
          </div>

          <div className="radio-options pt-2">
            <h6>I want to</h6>

            <RadioGroup row name="radio-options">
              {options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
          </div>

          <div className="textarea-field pt-2">
            <h6>Tell us more</h6>
            <TextareaAutosize
              className="input-box"
              id="comments"
              name="comments"
              minRows={7}
              placeholder="Briefly describe your message here"
            />
          </div>

          <div className="checkbox-options">
            <div className="checkbox-field">
              <FormControlLabel
                control={<Checkbox />}
                label="I want to subscribe to the occasional insightful materials from GrowthOps. (optional)"
              />
            </div>
            <div className="checkbox-field pb-10">
              <FormControlLabel
                control={<Checkbox />}
                label="I have read and agree to the website’s privacy policy."
              />
            </div>
          </div>

          <Button title="Submit" btnLink="/"></Button>
        </form>

        <div className="section-ouroffice">
          <h2 className="hero-contactus text-center pt-60 pb-28">
            OUR OFFICES
          </h2>
          <OurOffice />
        </div>

        <div className="section-8 text-center">
          <div className="footerContainer2">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
