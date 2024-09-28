import React, { Component } from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";
import { Fade } from "react-reveal";
import styled from "styled-components";

const EducationsContainer = styled.div``;

const EducationsHeader = styled.div`
  font-size: 40px;
  line-height: 1.1;
  font-family: "Google Sans Regular";
  text-align: center;
`;

const Educations = (props) => {
  const theme = props.theme;
  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="educations-header" style={{ color: theme.text }}>
            Degrees Received
          </h1>
        </Fade>
      </div>
      <div className="educations-body-div">
        {degrees.degrees.map((degree) => {
          return <DegreeCard degree={degree} theme={theme} />;
        })}
      </div>
    </div>
  );
};

export default Educations;
