import React from "react";
import styled, { css, ThemeProvider } from "@wigxel/react-components";
import { HomePageHeader } from "../components/Header";
import NavItem from "../components/NavItem";
import { NotificationBar } from '../components/NotificationBar'
import { IconLinks } from '../components/Icons';
import { useLayout } from '../libs/LayoutStore';
import { Light, Dark } from '../libs/Theme';
import { navLinks } from '../libs/data/navigation';

const GridOne = require("../assets/images/repeat-grid-1.svg")

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
    <main className="pt-5 pb-0 relative min-h-screen" style={{ zIndex: 3 }}>
      {children}
    </main>
  );
};

const StyledLayout = styled.section`
  background-color: ${props => props.theme.whitesmoke};
  color: ${props => props.theme.textColor || "#333"};
  font-family: sans-serif;

  .invert-bg {
    background-color: ${props => props.theme.invertBg};
  }

  input:hover,
  input:focus {
    background-color: ${props => props.theme.whitesmoke};
  }

  .bg-grid {
    background-size: 25% 25%;
    
  }
`

const HomePageLayout = ({ children }) => {
	const { store } = useLayout();

  return (
  	<ThemeProvider theme={store.isDarkMode ? Dark : Light }>
	    <StyledLayout className="min-h-screen ">
	      <HomePageHeader />
	      <section className="">
			      <MainArea>{children}</MainArea>
	      </section>
	    </StyledLayout>
    </ThemeProvider>
  );
};

export default HomePageLayout;
