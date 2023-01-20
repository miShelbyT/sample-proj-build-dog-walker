import React from "react";
import { Link } from 'react-router-dom' 
import styled from "styled-components";
import dogs from "../assets/alvan-nee-1VgfQdCuX-4-unsplash.jpg";

const Div = styled.main`
  background: url(${dogs}) repeat;
  height: 100%;
  opacity: 0.6;
  position: absolute;
  left: 0;
  top: 12;
  width: 100%;
  background-size: contain;
`;

function About({currentUser}) {

  
  return (
    <Div>
      <h2 style={{margin: 55}}>
        Got a dog? What a coincidence. We walk dogs! 🐾🐾🐾🐾 <hr></hr>{currentUser ? <Link to="/schedule">Click here</Link> : <Link to="/users/new">Create an account</Link>} to book a time with us!
      </h2>
      <p style={{ marginTop: 600, textAlign: "center" }}>
        Photo by{" "}
        <a href="https://unsplash.com/@alvannee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Alvan Nee
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/1VgfQdCuX-4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </p>
    </Div>
  );
}

export default About;
