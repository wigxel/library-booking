import React from 'react';
import styled, { css } from "styled-components";
import { useLayout } from "../libs/LayoutStore"

const NotifStyle = styled.aside`
	background-color: white;
	position: fixed;
	right: 0;
	top: 0;
	z-index: 50;
	width: 25vw;
	height: 100vh;
	padding: 1.5rem;
	box-shadow: -3px 0 12px -12px rgba(0,0,0, .25);
	transform: translateX(100%);
	transition: transform .3s ease-out;

	${props => props.show && css`
		transform: translateX(0%);
	`}
`

export const NotificationBar = () => {
	const { store, action } = useLayout()

	return (
		<NotifStyle show={store.showNotif}>
			<div class="flex justify-between">
				<h3>Notifications</h3> <button onClick={action({ type: "TOGGLE_NOTIF" })}>Close</button>
			</div>
		</NotifStyle>
	)
}