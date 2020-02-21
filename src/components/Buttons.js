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
