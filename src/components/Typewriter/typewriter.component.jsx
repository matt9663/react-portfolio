import React from "react";
import Typist from "react-typist";

const Typewriter = () => {
  return (
    <div className="typewriter">
      <Typist>
        <h2 className="typewriter-text">Hello!</h2>
        <h2 className="typewriter-text">My name is Matt Wood</h2>
        <Typist.Backspace count={27} delay={2000} />
        <h2 className="typewriter-text">
          I'm a web developer from Richmond, VA
        </h2>
        <Typist.Backspace count={37} delay={2000} />
        <h2 className="typerwriter-text">Let's build something together!</h2>
      </Typist>
    </div>
  );
};

export default Typewriter;
