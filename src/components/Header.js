import React, { useState } from "react";
import styled, { css } from "@wigxel/react-components";
import { ToggleButton, ThemeToggle } from './Buttons'
import { useLayout } from '../libs/LayoutStore'

const HeaderStyle = styled.header`
  z-index: 6;
  display: flex;
  position: sticky;
  min-height: 60px;
  ${props => console.log("BG Color", props.theme.bgColor)};
  background-color: ${props => props.theme.bgColor || "#333"};
  box-shadow: 0px 1px 25px ${props => props.theme.shadowColor};

  .sec-nav {
    > * {
      // border-left: solid 1px rgba(0, 0, 0, 0.16);
    }
  }
`;

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
    margin-right: -160px;
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
	const { store, action } = useLayout()

  return (
    <HeaderStyle className="sticky p-3" style={{ top: 0 }}>
      <ToggleButton 
      	state={store.menuOpen} 
      	onClick={action({ type: 'TOGGLE' })} />
      <div className="flex justify-between container mx-auto pl-3">
        <embed
          src={require("../assets/icons/logo.svg")}
          className="w-20"
          alt="Logo"
        />
        <section className="sec-nav flex justify-end items-center">
          <div className="hidden">
            <SearchInput onChange={evt => console.log(evt)} />
          </div>
          <ThemeToggle isDarkMode={store.isDarkMode} onClick={action({ type: 'TOGGLE_DARK_MODE'})} />
          <div className="px-4 text-sm pr-0">
            <img
              className="w-8 h-8 bg-gray-200 rounded-full border border-blue-500"
              src={require("../assets/icons/settings.svg")}
              alt="Avatar"
            />
          </div>
	          <img
	            alt=""
	            className="w-8 h-8 text-blue-200"
	            src={require("../assets/icons/bell.svg")}
	            onClick={action({ type: 'TOGGLE_NOTIF' })}
	          />
        </section>
      </div>
    </HeaderStyle>
  );
};

export default Header;
