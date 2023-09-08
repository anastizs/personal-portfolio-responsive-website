import PropTypes from "prop-types";
import { Container } from "./Section.styled";

const Section = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Section;
