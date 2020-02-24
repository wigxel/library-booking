import React from 'react';

export const IconLinks = {
	Apple: require("../assets/icons/apple.svg"),
	GooglePlayStore: require("../assets/icons/google-play-store.svg"),
	Twitter: require("../assets/icons/twitter.svg"),
	Facebook: require("../assets/icons/facebook.svg"),
	Instagram: require("../assets/icons/instagram.svg"),
	Package: require('../assets/icons/package.svg'),
	FileGray: require('../assets/icons/file-gray.svg'),
	File: require("../assets/icons/file.svg"),
	Clock: require("../assets/icons/time-left.svg"),
	Cart: require("../assets/icons/shopping-cart.svg"),
	Supply: require("../assets/icons/supply.svg"),
	Chat: require("../assets/icons/chat.svg"),
	Settings: require("../assets/icons/settings.svg"),
}

export default {
	Package: <img src={IconLinks.Package} className="inline-block w-8 mr-3" alt="Package" />,
	FileGray: <img src={IconLinks.FileGray} alt="file" className="w-3 mr-2 inline-block" />,
}