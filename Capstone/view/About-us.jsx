import React from "react"
import { AboutUs } from "../components";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
    <div className="container">
      <AboutUs/>
    </div>
    </Container>
  )
}
export default About

const Container = styled.section`
  .container{
    padding: 10% 0px 0px 0px;
  }
`