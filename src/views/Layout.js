import React from "react";
import styled, { css, ThemeProvider } from "@wigxel/react-components";
import Header from "../components/Header";
import NavItem from "../components/NavItem";
import { NotificationBar } from '../components/NotificationBar'
import { IconLinks } from '../components/Icons';
import { useLayout } from '../libs/LayoutStore';
import { Light, Dark } from '../libs/Theme';
import { navLinks } from '../libs/data/navigation';

const SidebarStyle = styled.aside`
  top: 60px;
  width: 60px;
  height: calc(100vh - 80px);
  display: flex;
  position: sticky;
  overflow: hidden;
  flex-flow: column nowrap;
  justify-content: space-between;
  transition: width 0.3s cubic-bezier(0.23, 1, 0.32, 1);

  ${props =>
    props.expand &&
    css`
      width: 20vw;
    `}

  > div#toggle-area {
    min-height: calc(70px - 1rem);
    width: 100%;
  }
`;

export const SideBar = props => {
	const { store } = useLayout()

  return (
    <SidebarStyle expand={store.menuOpen} className="p-3">
      <nav className="-mx-3" style={{ minWidth: "250px" }}>
        {navLinks.map((e, idx) => {
          return (
            <NavItem
              key={idx}
              activity={e.activity}
              active={e.text === 'Dashboard'}
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
	const { store } = useLayout();

  return (<ThemeProvider theme={store.isDark ? Dark : Light }>
    <section
      className="min-h-screen"
      style={{ backgroundColor: "#FCFCFC" }}
    >
      <Header />
      <section className="flex">
	      <SideBar expand={true}></SideBar>
	      <div className="flex-1">
		      <MainArea>{children}</MainArea>
	      </div>
	      <NotificationBar />
      </section>
    </section>
    </ThemeProvider>
  );
};

export default Layout;
