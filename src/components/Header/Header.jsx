// import PropTypes from "prop-types";
import Navbar from "../Navbar/Navbar";
import { Section } from "./Header.styled";

const Header = () => {
    return (
        <Section>
            <Navbar/>
        </Section>
    );
};

// Section.propTypes = {
//     children: PropTypes.node.isRequired,
//     title: PropTypes.string.isRequired,
// };

export default Header;