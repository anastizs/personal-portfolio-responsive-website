// import PropTypes from "prop-types";
import { List, Item, Logo, LogoLink } from "./Navbar.styled";

const Navbar = () => {
  return (
    <>
      <List>
        <Item>Home</Item>
        <Item>About</Item>
        <Item>Service</Item>
      </List>
      <LogoLink>A</LogoLink>
      <Logo href="./">Anastasiia Gvardiian</Logo>
      <List>
        <Item>Resume</Item>
        <Item>Project</Item>
        <Item>Contact Us</Item>
      </List>
    </>
  );
};

export default Navbar;
