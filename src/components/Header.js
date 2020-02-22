import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Icon } from "./NavItem";

const HeaderStyle = styled.header`
  z-index: 6;
  height: 80px;
  display: flex;
  position: sticky;
  box-shadow: 0px 1px 25px #1877ff1c;

  .sec-nav {
    > * {
      border-left: solid 1px rgba(0, 0, 0, 0.16);
    }
  }
`;

const topNav = [
  { text: "Message", icon: require("../assets/icons/mail.svg") },
  {
    text: "Market Place",
    icon: require("../assets/icons/shopping-cart-black.svg")
  },
  { text: "Notifications", icon: require("../assets/icons/mail.svg") }
];

const SearcInputStyle = styled.div`
  max-width: 250px;
  display: flex;
  flex: 1;
  overflow: hidden;
  ${props =>
    props.open &&
    css`
      border-bottom: solid 1px black;
    `}

  .icon {
    flex-shrink: 0;
    flex-basis: 50px;
  }

  input {
    flex: 1 1;
    margin-right: -222px;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
  }

  ${props =>
    props.open &&
    css`
      input {
        margin-right: 0;
      }
    `}
`;

const SearchInput = props => {
  const [open, setOpen] = useState(false);
  const [focus, setFocus] = useState(false);

  const handleOpen = bool => evt => {
    if (bool === false && focus === true) return;
    if (open !== bool) setOpen(bool);
  };

  return (
    <SearcInputStyle
      className="pl-3"
      open={open}
      onMouseEnter={handleOpen(true)}
      onMouseLeave={handleOpen(false)}
    >
      <Icon
        icon={
          <img
            src={require("../assets/icons/magnifying-glass.svg")}
            alt="search"
          />
        }
      />
      <input
        type="text"
        className="px-2"
        placeholder="Search Here"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={props.onChange}
      />
    </SearcInputStyle>
  );
};

const Header = () => {
  return (
    <HeaderStyle className="bg-white sticky p-3 px-5" style={{ top: 0 }}>
      <div className="flex justify-between container mx-auto">
        <embed
          src={require("../assets/icons/logo.svg")}
          className="w-48"
          alt="Logo"
        />
        <section className="sec-nav flex justify-end items-center">
          <div>
            <SearchInput onChange={evt => console.log(evt)} />
          </div>
          {topNav.map(({ icon, text }, idx) => (
            <div key={idx} className="pl-2 pr-4 flex items-center">
              <Icon
                small={true}
                activity="23"
                className="mr-2"
                bgColor="#007BFF"
                icon={<img src={icon} alt={text} />}
              />
              <span className="text-sm text-gray-500">{text}</span>
            </div>
          ))}
          <div className="px-4 text-sm pr-0">
            <img
              className="w-10 h-10 bg-gray-200 rounded-full border border-blue-500"
              src={require("../assets/icons/settings.svg")}
              alt="Avatar"
            />
          </div>
        </section>
      </div>
    </HeaderStyle>
  );
};

export default Header;
