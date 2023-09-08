// import PropTypes from "prop-types";
import img from "../../img/folder.png";
// import { List } from "./Navbar.styled";

const Services = () => {
  return (
    <>
      <h2>My Services</h2>
      <h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor{" "}
      </h4>
      <ul>
        <li>
          <a href="">UI/UX Design
            <img src={`${img}`}></img>
            <button></button>
          </a>
          
        </li>
        <li>
          Web Design
          <img src={`${img}`}></img>
          <button type="button"></button>
        </li>
        <li>
          Landing Page
          <img src={`${img}`}></img>
          <button></button>
        </li>
      </ul>
    </>
  );
};

export default Services;
