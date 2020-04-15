import React from 'react';
import styled, { css, Alert } from "@wigxel/react-components";
import { IconLinks } from '../components/Icons';
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

const helpIcon = <img src={IconLinks.Faq} alt="" className="w-5"/>;

export const NotificationBar = () => {
	const { store, action } = useLayout()

	return (
		<NotifStyle show={store.showNotif}>
			<div class="flex justify-between">
				<h3 className="text-2xl">Notifications</h3>
				<button onClick={action({ type: "TOGGLE_NOTIF" })}>
					Close
				</button>
			</div>
			<div className="mt-5 -mx-2">
			{Array(5).fill(0).map(e => <Alert type="success" className="mb-1"
					shadow={false} icon={helpIcon} 
					message="Account Created Successfully" fullwidth/>
			)}
			<Alert type="warning" className="mb-1"
					shadow={false} icon={helpIcon} fullwidth>
				<span className="text-xs">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
					Quae quas tenetur consequatur voluptatum molestiae adipisci, autem,
					perspiciatis architecto blanditiis porro neque, ullam vero aliquam non
					inventore perferendis. Nam veritatis, eveniet.
				</span>
			</Alert>
			</div>
		</NotifStyle>
	)
}