import React from "react";
import { Link } from "react-router-dom";
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

const H2 = styled.h2`
  margin: 55px;
`;


function About({ currentUser }) {
  return (
    <Div>
      <H2>
        Got a dog? What a coincidence. We walk dogs! 🐾🐾🐾🐾 </H2><hr></hr>
          <H2><Link to={currentUser ? "/schedule" : "/users/new"}>Click here</Link> to {currentUser ? "book a time with us!" : "create an account!" }</H2>
        
      
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
