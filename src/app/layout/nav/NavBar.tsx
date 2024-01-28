//navbar.jsx
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import {  Menu, MenuItem } from "semantic-ui-react";
import NavbarMb from "./NavbarMb";
import NavbarLg from "./NavbarLg";
import {  NavLink } from "react-router-dom";
import SignedInMenu from "./SignedInMenu";
import { useAppSelector } from "../../store/store";
import SignedOutButton from "./SignedOutButton";

export default function Navbar() {
  const { authenticated } = useAppSelector((state) => state.auth);
  const [activeItem, setactiveItem] = useState("home");
  const handleItemClick = (e, { name }) => setactiveItem(name);
  const renderLinks = () => {
    return (
      <>
        <Menu.Item
          name="logo"
          active={activeItem === "logo"}
          onClick={handleItemClick}
          header
          as={NavLink}
          to="/"
        >
          <img
            src="logo.png"
            width="35px"
            height="35px"
            style={{ margin: "0 auto" }}
            alt=""
          />
        </Menu.Item>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
          header
          as={NavLink}
          to="/"
        />
        <Menu.Item
          name="activites"
          active={activeItem === "activities"}
          onClick={handleItemClick}
          header
          as={NavLink}
          to="/activities"
        />

        <Menu.Item
          name="blog"
          active={activeItem === "blog"}
          onClick={handleItemClick}
          header
          as={NavLink}
          to="/blog"
        />

        {/* <MenuItem name ='Scratch' as ={NavLink} to='/scratch'/> */}
        
        {/* <SignedOutButton/> */}
        {authenticated ? <SignedInMenu /> : <SignedOutButton />}

        {/* <Menu.Item
    name='login'
    active={activeItem === 'login'}
    onClick={handleItemClick}
    position="right"
  />
  <Menu.Item
    name='Register'
    active={activeItem === 'Register'}
    onClick={handleItemClick}
  /> */}
      </>
    );
  };

  const none = useMediaQuery({ query: "(max-width:576px)" });
  const sm = useMediaQuery({ query: "(min-width:576px)" });
  const md = useMediaQuery({ query: "(min-width:768px)" });
  const lg = useMediaQuery({ query: "(min-width:992px)" });
  const xl = useMediaQuery({ query: "(min-width:1200px)" });
  const xxl = useMediaQuery({ query: "(min-width:1400px)" });
  const size = { none, sm, md, lg, xl, xxl };
  return (
    <div>
      {size.sm ? (
        <NavbarLg renderLinks={renderLinks} />
      ) : (
        <NavbarMb renderLinks={renderLinks} />
      )}
    </div>
  );
}
