import PropTypes from "prop-types";
import { List } from "./Navbar.styled";

const Navbar = () => {
    return (
        <><List>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
        </List>
        <logo><a href='./'></a>Anastasiia Gvardiian</logo>
         <List>
                <li>Resume</li>
                <li>Project</li>
                <li>Contact Us</li>
        </List></>
        
    );
};



export default Navbar;