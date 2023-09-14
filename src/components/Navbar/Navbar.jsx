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
      <List>
        <Item>
          <LogoLink>A</LogoLink>
        </Item>
        <Item>
          <Logo href="./">Anastasiia</Logo>
        </Item>
      </List>

      <List>
        <Item>Resume</Item>
        <Item>Project</Item>
        <Item>Contact</Item>
      </List>
    </>
  );
};

export default Navbar;
