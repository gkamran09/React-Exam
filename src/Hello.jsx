import React, { useState } from "react";

export default function Hello() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">Enter your name:</label>
        <br />
        <input
          type="text"
          id="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
      {submitted && <p>Your name is: {name}</p>}
    </div>
  );
}
