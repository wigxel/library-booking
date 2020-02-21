import React, { useContext } from "react";
import styled, { css } from "styled-components";
import t from "prop-types";

export const SidebarCtx = React.createContext({ expanded: false });

const NavItemStyle = styled.li`
  color: white;
  transition: background-color 0.2s ease;

  > div {
    border-bottom: solid 1px rgba(0, 0, 0, 0.16);
  }

  .icon {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .activity-badge {
      min-width: 20px;
      line-height: 20px;
      text-align: center;
      height: 20px;
      position: absolute;
      border: 0;
      font-size: 0.7rem;
      top: 0;
      background-color: #ff0000;
      right: 0;
      border-radius: 16px;
    }
    img {
      width: 30px;
      height: 30px;
    }
  }

  span {
    font: medium 1rem "Helvetica Neue";
  }

  ${props =>
    props.active &&
    css`
      color: #196bd8;
      .icon {
        background-color: #cee6ff;
      }

      ${props =>
        props.showBg &&
        css`
          background-color: #cee6ff;
        `}
    `}
`;

const NavItem = ({ icon, activity, active, children }) => {
  const ctx = useContext(SidebarCtx);

  return (
    <NavItemStyle
      showBg={ctx.expanded}
      active={active}
      className="nav-item w-full block px-3"
    >
      <div className="py-2 w-full flex items-center">
        <span className="icon mr-5">
          {activity && <span className="activity-badge">{activity}</span>}
          {icon}
        </span>
        <span>{children}</span>
      </div>
    </NavItemStyle>
  );
};

NavItem.propTypes = {
  activity: t.number,
  icon: t.element,
  active: t.bool
};

export default NavItem;
