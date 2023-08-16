
import LayoutContainer from "../components/layout-container";
import Transition from "../components/transitions";
import TextImage from "../components/text-images";
import Image from "./../../public/images/Image1.png";
import Paragraph from "../components/paragraph";
import ScrollingText from "../components/scrollvelocity";
import Button from "../components/button";
import Tabs from "../components/tabs-content";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../App.scss";

function Home(){
    return (
            <>
              <Transition/>
              <Navbar/>
              <LayoutContainer>
                <div className="mainWrapper">
                  <div className="overlayContainer">
                    <div className="overlayBg">
                      <div className="headerContainer">
                        <h2 className="hero-1 text-right">YOUR NEW-BREED</h2>
        
                        <span className="hero-1 txt-left">END-TO-END</span>
        
                        <h2 className="hero-1">DIGITAL ALLY</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </LayoutContainer>
        
              <div className="section-2 block justify-center items-center text-center">
                <h3 className="text-center">
                  With a focus in fusing <span>strategy,</span> <br />{" "}
                  <span>design,</span> and <span> &lt;technology/&gt; </span>
                  <br /> to build and sustain market leaders
                </h3>
        
                <h3 className="my-24"> this is </h3>
        
                <span className="section-2-name">GrowthOps Asia</span>
              </div>
        
              <div className="section-3">
                <h2 className="hero-1 text-center pt-60 pb-28">WHAT WE DO?</h2>
        
                <TextImage
                  number="01"
                  title="Perfomance Marketing & Analytic"
                  items={[
                    "Perfomance Media",
                    "Search engine optimisation",
                    "Web & App analytic",
                    "Conversion rate optimisation through personalisation",
                  ]}
                  btnLink="/"
                  image={Image}
                ></TextImage>
        
                <TextImage
                  number="02"
                  title="Perfomance Marketing & Analytic"
                  items={[
                    "Perfomance Media",
                    "Search engine optimisation",
                    "Web & App analytic",
                    "Conversion rate optimisation through personalisation",
                  ]}
                  btnLink="/"
                  image={Image}
                  reverse
                ></TextImage>
        
                <TextImage
                  number="03"
                  title="Perfomance Marketing & Analytic"
                  items={[
                    "Perfomance Media",
                    "Search engine optimisation",
                    "Web & App analytic",
                    "Conversion rate optimisation through personalisation",
                  ]}
                  btnLink="/"
                  image={Image}
                ></TextImage>
        
                <TextImage
                  number="04"
                  title="Perfomance Marketing & Analytic"
                  items={[
                    "Perfomance Media",
                    "Search engine optimisation",
                    "Web & App analytic",
                    "Conversion rate optimisation through personalisation",
                  ]}
                  btnLink="/"
                  image={Image}
                  reverse
                ></TextImage>
              </div>
        
              <div className="section-4">
                <h2 className="text-center pt-60 pb-28">
                  UNFORGETTABLE <br /> RESULTS
                </h2>
                <Paragraph
                  floatAlign="left"
                  number="400%"
                  title="INCREASE IN ORGANIC PAGE VIEWS"
                  description="Using our SEO services, it also resulted in a 109% increase in page visibility"
                ></Paragraph>
        
                <Paragraph
                  floatAlign="right"
                  number="4.5%"
                  title="INCREASE IN SALES"
                  description="Through our creative services, a national automaker experienced a 4.5% increase in sales amidst a -4.6% market decline. They also had a 2% increase in market share, and a 5.6 point shift in brand perception"
                ></Paragraph>
        
                <Paragraph
                  floatAlign="left"
                  number="96%"
                  title="Perfomance Marketing & Analytic"
                  description="Using our SEO services, it also resulted in a 109% increase in page visibility"
                ></Paragraph>
        
                <Paragraph
                  floatAlign="left"
                  number="71%"
                  title="Perfomance Marketing & Analytic"
                  description="Using our SEO services, it also resulted in a 109% increase in page visibility"
                ></Paragraph>
        
                <Paragraph
                  floatAlign="right"
                  number="38%"
                  title="Perfomance Marketing & Analytic"
                  description="Using our SEO services, it also resulted in a 109% increase in page visibility"
                ></Paragraph>
              </div>
        
              <div className="section-5">
                <h2 className=" hero-1 text-center pt-60 pb-28">WHAT CLIENTS SAY</h2>
                <Tabs/>
              </div>
        
              <div className="section-6">
                <h2 className="hero-1 text-center pt-60 pb-28">
                  <span> SUPER </span> PROUD TO <br /> WORK WITH
                  <ScrollingText />
                </h2>
              </div>
        
              <div className="section-7 pt-20 pb-60 text-center">
                <Button title="Let's chat" btnLink="/"></Button>
              </div>
        
              <div className="section-8 text-center">
                <div className="footerContainer">
                    <Footer/>
                </div>
              </div>
            </>
          );
}

export default Home