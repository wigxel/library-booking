import React from 'react';

const initial_state = {
	menuOpen: true,
	showNotif: false,
}

const ctx = React.createContext(initial_state)

const reducer = (state, action) => {
	console.log("REDUX ACTION:", action.type)
	switch (action.type) {
		case "TOGGLE": {
			return { ...state, menuOpen: !state.menuOpen }
		}
		case "TOGGLE_NOTIF": {
			return { ...state, showNotif: !state.showNotif }
		}
		default: {
			return state
		}
	}
}

export const LayoutProvider = ({ children }) => {
	const [store, dispatch] = React.useReducer(reducer, initial_state);
	const action = (a) => () => dispatch(a);
	
	return (
		<ctx.Provider value={{ action, store, dispatch }}>
			{children}
		</ctx.Provider>
	);
}

export const useLayout = () => React.useContext(ctx);