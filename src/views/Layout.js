import React, { useState } from "react";
import styled, { css } from "styled-components";
import { ToggleButton } from "../components/Buttons";
import NavItem, { SidebarCtx } from "../components/NavItem";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { IconLinks } from '../components/Icons';

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
    icon: IconLinks.FileGray,
    text: "Dashboard",
  },
  {
    icon: IconLinks.Clock,
    text: "Operations",
    activity: 8
  },
  {
    icon: IconLinks.File,
    text: "Records"
  },
  {
    icon: IconLinks.Cart,
    text: "Supply Store",
    activity: 30
  },
  {
    icon: IconLinks.Supply,
    text: "Market Place"
  },
  {
    icon: IconLinks.Chat,
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
          {navLinks.map((e, idx) => {
            return (
              <NavItem
                active={e.text === 'Operations'}
                key={idx}
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
                src={IconLinks.Settings}
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

const MainArea = ({ children }) => {
  return (
    <main className="p-5 pb-0 relative min-h-screen" style={{ zIndex: 3 }}>
      {children}
    </main>
  );
};

const Layout = ({ children }) => {
  return (
    <section
      className="flex min-h-screen"
      style={{ backgroundColor: "#FCFCFC" }}
    >
      <SideBar expand={true}></SideBar>
      <section className="flex-1">
        <Header />
        <MainArea>{children}</MainArea>
        <Footer />
      </section>
    </section>
  );
};

export default Layout;
