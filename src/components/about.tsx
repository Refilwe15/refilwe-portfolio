const About = () => {
  return (
    <div className="container">
      <div className="name">
        <p>Hey</p>
        <p>I'm Refilwe!</p>
      </div>
      <div className="intro">
        <p>
          <b>
            I build{" "}
            <i style={{ fontStyle: "italic", fontWeight: "lighter" }}>
              full-stack
            </i>{" "}
            stuff <br></br>that actually works!
          </b>
        </p>
      </div>
      <div className="description">
        <p>
          Code, bugs, and late-night coffee keep it all running, <br></br> I
          turn complex problems into clean, working solutions.
        </p>
      </div>
      <div className="btn-con">
        <button className="btn">Contact me</button>
      </div>
    </div>
  );
};

export default About;
