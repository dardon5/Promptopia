import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1100,
      backSpeed: 100,
      strings: ["Software Engineer & Full-Stack Developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="top">
        <div className="wrapper">
          <h2 className="intro-text">Hello! I'm</h2>
          <h1 className="intro-text">Alejandro Dardon</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
          <div className="image-container">
            {/* <a href="https://www.flaticon.com/free-icons/html" title="html icons">Html icons created by Freepik - Flaticon</a> */}
            <img src="assets/react_logo.png" alt="React Logo" />
            <img src="assets/node_logo.png" alt="Node Logo" />
            <img src="assets/mongo_logo.png" alt="Mongo Logo" />
            <img src="assets/html_logo.png" alt="HTML Logo" />
            <img src="assets/css_logo.png" alt="CSS Logo" />
            <img src="assets/javascript_logo.png" alt="JavaScript Logo" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="bottom">
          <div className="wrapper">
            <h4 className="intro-text">
              I love building functional full stack applications from start to
              finish. Get to know more about my projects and me below!
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
