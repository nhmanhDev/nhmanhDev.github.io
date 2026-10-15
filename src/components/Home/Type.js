import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI Engineer",
          "PM & Techlead",
          "LLM & Agentic AI Specialist",
          "Production RAG Architect",
          "Intelligent Systems Builder",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

export default Type;
