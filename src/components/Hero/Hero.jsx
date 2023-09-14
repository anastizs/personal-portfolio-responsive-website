// import PropTypes from "prop-types";
import { Сaption, Span, Quote, QuoteTitle, Backgraund, ButtonList, ButtonItem1, ButtonItem2 } from "./Hero.styled";

const Hero = () => {
  return (
    <>
      <Сaption>
        I’m <Span>Anastasiia</Span>, FrontEnd Developer
      </Сaption>
      <Quote>
        Anastasiia's exceptional product design ensured our website's success.
        Highly recommended!
      </Quote>
      <QuoteTitle>450+</QuoteTitle>
      <Quote>Client Served</Quote>
      <QuoteTitle>10 Years</QuoteTitle>
      <Quote>Experts</Quote>
      <Backgraund><ButtonList>
        <li>
          <ButtonItem1>Portfolio</ButtonItem1>
        </li>
        <li>
          <ButtonItem2>Hire Me</ButtonItem2>
        </li>
      </ButtonList></Backgraund>
      
    </>
  );
};

export default Hero;
