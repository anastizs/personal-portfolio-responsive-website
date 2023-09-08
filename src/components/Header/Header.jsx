import PropTypes from "prop-types";
import Navbar from "../Navbar/Navbar";
import { Container } from "./Header.styled";

const Section = () => {
    return (
        <Container>
            <Navbar/>
        </Container>
    );
};

Section.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
};

export default Section;