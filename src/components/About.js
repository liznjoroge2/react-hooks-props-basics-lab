import React from "react";
import Links from "./Links"; // Import Links component

const image = "path_to_image"; // Define the image variable with the correct path to the image

function About({ bio, github, linkedin }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && <p>{bio}</p>}
      <img src={image} alt="I made this" />
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;
