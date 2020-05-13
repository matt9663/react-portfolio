import React from "react";
import "./bio-section.style.scss";

const BioSection = () => {
  return (
    <div className="about-section" id="bio">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <img
          className="headshot"
          alt="my head shot!"
          src="../../assets/images/croppedPic.jpg"
        />
        <p className="bio">
          I am a full stack Web Developer based in Richmond, VA. I love
          developing creative solutions to problems in the pursuit of
          efficiency.
          <br />
          <br />
          I came to coding from a background in E-commerce, where I was able to
          experience firsthand how critical intelligent design is to the success
          of a website. I want to leverage this passion for UI/UX optimization
          in order to improve the Web experience for all, and would love to join
          a team that shares these values. I am always striving to grow as a
          developer and want to work and collaborate with people that will push
          me to do better every day.
          <br />
          <br />
          When I'm not coding, I enjoy playing music 🎸, cooking 👨‍🍳, drinking
          coffee ☕, or hanging out with my dog Pawlie 🐕.
        </p>
      </div>
    </div>
  );
};

export default BioSection;
