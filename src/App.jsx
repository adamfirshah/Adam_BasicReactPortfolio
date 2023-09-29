import LayoutContainer from "./components/layout-container";
import Transition from "./components/transitions";
import TextImage from "./components/text-images";
import Image from "./../public/images/ekko.png";
import Image2 from "./../public/images/kolorize.png";
import Image3 from "./../public/images/internal.png";
import Image4 from "./../public/images/tender.png";
import ScrollingText from "./components/scrollvelocity";
import Button from "./components/button";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Swal from 'sweetalert2';
import "./App.scss";
import {
  Input,
  // Radio,
  // RadioGroup,
  // FormControlLabel,
  TextareaAutosize,
  // Checkbox,
} from "@mui/material";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState ({
    fullname: '',
    phone: '',
    email: '',
    message: ''
  })
  
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData ({
        ...formData, [name] : value 
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}
    if(!formData.fullname.trim()) {
        validationErrors.fullname = "Fullname is required"
    }

  
    if(!formData.phone.trim()) {
      validationErrors.phone = "Phone number is required"
  // } else if(!/^\(\d{3}\) \d{3}-\d{4}$/.test(formData.phone)){
  //   validationErrors.phone = "Phone number is not valid"
  }

    if(!formData.email.trim()) {
        validationErrors.email = "Email is required"
    // } else if(!/\S+@\S\.\S+/.test(formData.email)){
    //   validationErrors.email = "Email is not valid"
    }

    if (!formData.message.trim()) {
      validationErrors.message = "Message is required";
    } else if (formData.message.length > 100) {
      validationErrors.message = "Message must not exceed 100 characters";
    } 


    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0) {
      Swal.fire('Thank You!', 'Your messages has been sent!', 'success');
    }

  }

// const options = [
//   "Become a client",
//   "Join the team",
//   "Investor enquiry",
//   "Others",
// ];

return (
  <>
    <Transition />
    <Navbar />
    <LayoutContainer>
      <div className="mainWrapper">
        <div className="overlayContainer">
          <div className="overlayBg">
            <div className="headerContainer">
              <h2 className="hero-1 text-right">JUST A MAN</h2>

              <span className="hero-1 txt-left">WHO LOVE</span>

              <h2 className="hero-1 flex flex-row ">
                CODING <div className="hero-2 ml-7">(not really...)</div>{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </LayoutContainer>

    <div className="section-2 block justify-center items-center text-center">
      <h3 className="text-center">
        I believe web design can be more <span>diverse,</span> <br />{" "}
        <span className="designCustom">inspiring</span> and{" "}
        <span> &lt;varied/&gt; </span>
        <br /> However, I'm experimenting this website <br /> for my portfolio
      </h3>

      <h3 className="my-24"> using </h3>

      <span className="section-2-name">React</span>
    </div>

    <div className="section-3">
      <h2 className="hero-1 text-center pt-60 pb-28">WHAT I'M DOING?</h2>

      <TextImage
        number="01"
        title="EKKO"
        description="Born out of a deep understanding of consumer frustrations, EKKO aims to revolutionise the shopping experience and revive the joy of physical buying."
        btnLink="https://ekko.my/"
        image={Image}
      ></TextImage>

      <TextImage
        number="02"
        title="KOLORIZE"
        description="Bringing the past to life in vibrant hues, our website transforms black and white memories into colorful masterpieces, rekindling nostalgia with a modern twist."
        btnLink="https://kolorize.trigontech.my/"
        image={Image2}
        reverse
      ></TextImage>

      <TextImage
        number="03"
        title="A lot of Internal Projects"
        items={[
          "Helpdesk System",
          "Access Management System",
          "HR Management System",
          "Task Management System",
        ]}
        btnLink="https://hrms.cara.com.my/#!"
        image={Image3}
      ></TextImage>

      <TextImage
        number="04"
        title="Mockup Tendering Purposes"
        description="These mockups serve as visual representations that help clients evaluate and select the most suitable supplier or contractor based on their proposed approach and quality of work."
        btnLink="https://www.behance.net/adam-firdaus"
        image={Image4}
        reverse
      ></TextImage>
    </div>

    {/* <div className="section-4">
        <h2 className="text-center pt-60 pb-28">
         <span>UNFORGETTABLE </span>  <br /> RESULTS
        </h2>

        <div className="section4Content">
          <Paragraph
            justifyContent="flex-start"
            number="400%"
            title="INCREASE IN ORGANIC PAGE VIEWS"
            description="Using our SEO services, it also resulted in a 109% increase in page visibility"
          ></Paragraph>

          <Paragraph
            justifyContent="flex-end"
            number="4.5%"
            title="INCREASE IN SALES"
            description="Through our creative services, a national automaker experienced a 4.5% increase in sales amidst a -4.6% market decline. They also had a 2% increase in market share, and a 5.6 point shift in brand perception"
          ></Paragraph>

          <Paragraph
            justifyContent="flex-start"
            number="96%"
            title="FASTER PAGE LAUNCHES"
            description="Using AEM, a leading Telco saw these results"
            image={ImagePara}
          ></Paragraph>

          <Paragraph
            justifyContent="flex-end"
            number="71%"
            title="REDUCTION IN CPL"
            description="After optimising the performance media funnel, a leading bank saw savings over AUD$300 in the first year"
          ></Paragraph>

          <Paragraph
            justifyContent="flex-start"
            number="38%"
            title="CONVERSION RATE IMPROVEMENT"
            description="Using Adobe Target to A/B test landing pages’ forms, we saw an increase in conversion rate"
          ></Paragraph>
        </div>
      </div> */}

    {/* <div className="section-5">
        <h2 className=" hero-1 text-center pt-60 pb-28">WHAT CLIENTS SAY</h2>
        <Tabs/>
      </div> */}

    <div className="section-6">
      <h2 className="hero-1 text-center pt-60 pb-28">
        <span> SUPER </span> PROUD TO <br /> HAVE THIS SKILLS
        <ScrollingText />
      </h2>
    </div>

    {/* <div className="section-7 pt-20 pb-60 text-center">
        <Button title="Let's chat" btnLink="/"></Button>
      </div>
       */}
    {/* <div className="section-8 text-center">
        <div className="footerContainer">
            <Footer/>
        </div>
      </div> */}

    <div className="section-9">
      <div className="">

        <div className="w-1/2">
          <p className="sectionContactPara sm:w-full">
            <h2 className=" text-left pt-20 pb-2">CONTACT ME</h2>
            <span>
              Let's create something awesome together!
            </span>
          </p>
        </div>

        <div className="w-1/2 sm:w-full">
          <form onSubmit={handleSubmit}
            className="form-container">
            <div className="fullname">
              <h6>Name</h6>
              <Input
                className="input-box half-width"
                id="name"
                name="fullname"
                variant="standard"
                placeholder="Enter your name here"
                onChange={handleChange}
              />
            </div>
            {errors.fullname && <span>{errors.fullname}</span>}


            <div className="contact">
              <div className="contact-field">
                <h6>Phone Number</h6>
                <div className="input-box phone-input">
                  <select
                    className="phone-format"
                  >
                    <option value="+60">+60</option>
                    <option value="+1">+1</option>
                  </select>
                  <Input
                    className="phone-input-field"
                    id="phone"
                    name="phone"
                    variant="standard"
                    onChange={handleChange}
                    placeholder=""
                  />
                </div>
                {errors.phone && <span>{errors.phone}</span>}

              </div>
              
              <div className="contact-field">
                <h6>Work Email</h6>
                <Input
                  className="input-box"
                  id="email"
                  name="email"
                  variant="standard"
                  placeholder="Enter your work email here"
                  onChange={handleChange}
                />
                {errors.email && <span>{errors.email}</span>}

              </div>
            </div>

            {/* <div className="radio-options pt-2">
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
                </div> */}

            <div className="textarea-field pt-2">
              <h6>Your Message</h6>
              <TextareaAutosize
                className="input-box"
                id="comments"
                name="message"
                minRows={7}
                placeholder="Briefly describe your message here"
                onChange={handleChange}
              />
                {errors.message && <span>{errors.message}</span>}

            </div>

            {/* <div className="checkbox-options">
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
                </div> */}

            {/* <Button title="Submit" type="submit" onClick={handleSubmit} className="mt-2"></Button> */}
            
            <button type="submit" className="mt-2 buttonSubmit">Submit</button>

          </form>
        </div>
      </div>
    </div>

  </>
);
}
export default App;
