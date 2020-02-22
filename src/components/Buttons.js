import React from "react";
import styled, { css } from "styled-components";

const ToggleButtonStyle = styled.button`
  span {
    height: 2px;
    width: 35px;
    display: block;
    border-radius: 30px;
    margin-bottom: 5px;
    background: white;
    transition: 0.2s ease-in;
    transform-origin: center center;
  }

  ${props =>
    props.state &&
    css`
      span {
        margin: 0;
      }
      span:not(:last-child):not(:first-child) {
        opacity: 0;
      }
      span:first-child {
        transform: rotate(45deg);
      }
      span:last-child {
        margin-: 10px;
        transform-origin: bottom left;
        transform: rotate(-45deg) translate(-3px, 9px);
      }
    `}
`;

export const ToggleButton = ({ state, onClick }) => (
  <ToggleButtonStyle state={state} className="ml-3 w-12 h-12" onClick={onClick}>
    <span></span>
    <span></span>
    <span></span>
  </ToggleButtonStyle>
);

const TabStyle = styled.div`
  span:last-child {
    color: white;
    border-radius: 30px;
    background-color: var(--red-color);
  }

  ${prop =>
    prop.isActive &&
    css`
      border-bottom: solid 4px var(--primary-color);

      span:first-child {
        font-weight: bold;
        color: var(--primary-color);
      }

      span:last-child {
        color: gray;
        background-color: transparent;
        opacity: 0.5;
      }
    `}
`;

export function Tab(props) {
  return (
    <TabStyle
      isActive={props.isActive}
      className="p-4 border-gray-200 border-r flex items-center text-sm"
    >
      <span className="mr-2">{props.children}</span>
      <span className="px-2 text-xs">{props.count}</span>
    </TabStyle>
  );
}
