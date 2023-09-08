import PropTypes from "prop-types";
import { List, Item } from "./Navbar.styled";

const Navbar = () => {
  return (
    <>
      <List>
        <Item>Home</Item>
        <Item>About</Item>
        <Item>Service</Item>
      </List>
      <a href="./">Anastasiia Gvardiian</a>
      <List>
        <Item>Resume</Item>
        <Item>Project</Item>
        <Item>Contact Us</Item>
      </List>
    </>
  );
};

export default Navbar;
