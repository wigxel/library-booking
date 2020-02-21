import React, { useState } from "react";
import styled, { css } from "styled-components";
import { ToggleButton } from "../components/Buttons";
import NavItem, { SidebarCtx } from "../components/NavItem";

const SidebarStyle = styled.aside`
  top: 0;
  width: 80px;
  height: 100vh;
  display: flex;
  position: sticky;
  overflow: hidden;
  background-color: #007bff;
  flex-flow: column nowrap;
  justify-content: space-between;
  transition: width 0.3s cubic-bezier(0.23, 1, 0.32, 1);

  ${props =>
    props.expand &&
    css`
      width: 20rem;
      background: #196bd8;
    `}

  > div#toggle-area {
    min-height: calc(70px - 1rem);
    width: 100%;
  }
`;

const navLinks = [
  {
    icon: require("../assets/icons/time-left.svg"),
    text: "Operations",
    activity: 8
  },
  {
    icon: require("../assets/icons/file.svg"),
    text: "Records"
  },
  {
    icon: require("../assets/icons/shopping-cart.svg"),
    text: "Supply Store",
    activity: 30
  },
  {
    icon: require("../assets/icons/supply.svg"),
    text: "Market Place"
  },
  {
    icon: require("../assets/icons/chat.svg"),
    text: "Forums"
  }
];

export const SideBar = props => {
  const [showNav, setShowNav] = useState(false);

  return (
    <SidebarCtx.Provider value={{ expanded: showNav }}>
      <SidebarStyle expand={showNav} className="p-3">
        <div id="toggle-area">
          <ToggleButton state={showNav} onClick={() => setShowNav(!showNav)} />
          <div className="border-b border-black opacity-25 w-full"></div>
        </div>
        <nav className="-mx-3" style={{ minWidth: "15rem" }}>
          <NavItem active={true}>Dashboard</NavItem>
          {navLinks.map(e => {
            return (
              <NavItem
                activity={e.activity}
                icon={<img src={e.icon} alt={e.text} />}
              >
                {e.text}
              </NavItem>
            );
          })}
        </nav>
        <nav className="-mx-3" style={{ minWidth: "15rem" }}>
          <NavItem
            icon={
              <img
                src={require("../assets/icons/settings.svg")}
                alt="Settings"
              />
            }
          >
            Settings
          </NavItem>
        </nav>
      </SidebarStyle>
    </SidebarCtx.Provider>
  );
};

export const Header = () => {
  return (
    <header className="sticky p-5 bg-green-500" style={{ top: 0 }}>
      <nav>Hello John</nav>
    </header>
  );
};

const MainArea = ({ children }) => {
  return <main className="p-5 pb-0">{children}</main>;
};

const Layout = ({ children }) => {
  return (
    <section className="flex min-h-screen">
      <SideBar expand={true}></SideBar>
      <section className="flex-1" style={{ height: "500vh" }}>
        <Header></Header>
        <MainArea>{children}</MainArea>
      </section>
    </section>
  );
};

export default Layout;
