import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter 
      options={{
        strings: [
          "Desenvolvedor  Back-end",          
          "Desenvolvedor Web Front-end",
          "Desenvolvedor Web Full-Stack"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30
      }}
    />
  );
}

export default Type;
           