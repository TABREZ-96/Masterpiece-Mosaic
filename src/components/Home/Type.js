import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "C++, Java, Python",
          "Building Ai & Machine Learning",
          "Full-Stack Developer",
          "Google Cloud",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
