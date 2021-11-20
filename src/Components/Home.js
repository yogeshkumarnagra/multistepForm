import React, { useState, useEffect } from "react";

const Home = () => {
  const [Case, setCase] = useState(1);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const submithandler = (num) => {
    return (e) => {
      e.preventDefault();
      setCase(Case + num);
      return console.log("passed", Case);
    };
  };

  const submitdatahandler = (e) => {
    e.preventDefault();
    // setCase(Case + 1);
    setNumber("");
    setEmail("");
    setName("");
  };

  useEffect(() => {}, []);
  return (
    <>
      <div className="home">
        <form onSubmit={submitdatahandler}>
          {Case === 1 && (
            <div>
              <h3>Personal Details</h3>
              <input
                type="email"
                id="email"
                name="Email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="text"
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}
          {Case === 2 && (
            <div>
              <h3>Contact</h3>
              <input
                type="text"
                placeholder="Phone Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
          )}
          {Case !== 1 && (
            <button type="submit" onClick={submithandler(-1)}>
              <span>{"<"}</span> Back
            </button>
          )}
          {Case <= 1 && (
            <button type="submit" onClick={email && name && submithandler(1)}>
              Next<span id="arrow">{">>"}</span>
            </button>
          )}
          {/* <br /> */}
          {Case === 2 && (
            <div>
              <div>{}</div>
              <button type="submit">Submit</button>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Home;
