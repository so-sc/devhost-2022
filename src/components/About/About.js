import "../../styles/variables.css";
import aboutImg from "../../assets/about.png";
import "./About.css";

function About() {
  return (
    <div className="AboutBody">
      <img className="About-img" alt="img-abt" src={aboutImg} />
      <div className="About-desc">
        <h1 className="About-heading">About</h1>
        <div className="About-content">
          <p>
            devhost is the annual flagship event of SOSC. Our prime goal is to
            bring young and skilled student developers from anywhere across the
            globe under the same umbrella. This event aims to create a platform
            to collaborate with various clubs and organizations, discuss the
            newest technologies and trends in the IT industry an also train
            students for the same. devhost:22 claims to be a tech extravaganza,
            and the biggest event under SOSC so far.
          </p>
        </div>
      </div>
    </div>
  );
}

function AboutBody() {
  return (
    // <div>
    <About />
    // </div>
  );
}

export default AboutBody;
