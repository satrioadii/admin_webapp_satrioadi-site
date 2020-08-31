export const SetupCookieCheck = () => {
	// Check data and create if not exist
	let currentCookies = document.cookie;
	let emptyObject = JSON.stringify({ successCreated: true });
	if (currentCookies.search("dataFromWeb=") === -1) {
		currentCookies = `${emptyObject}`;

		// Set expires date 7 day
		let date = new Date();
		date.setDate(date.getDate() + 7);
		let expires = `expires=${date}`;

		// Set path
		let path = "path=/";

		// Setup new data - cookie
		document.cookie = `dataFromWeb=${currentCookies};${expires};${path}`;
	}
};

export const SetCookie = (name, value) => {
	if (typeof value === "object") value = JSON.stringify(value);

	SetupCookieCheck();

	// Set expires date 7 day
	let date = new Date();
	date.setDate(date.getDate() + 7);

	let expires = `expires=${date}`;

	// Set path
	let path = "path=/";

	// Get all cookie
	const allCookie = document.cookie;

	// Last data
	let firstSeparator = allCookie.search("dataFromWeb={");
	let lastSeparator = allCookie.length;
	let lastData = allCookie.slice(firstSeparator + 1, lastSeparator);
	lastData = JSON.parse(lastData);

	// Join previous and new data
	let newData = { ...lastData, [name]: value };

	// Insert new data
	const stringData = JSON.stringify(newData);
	document.cookie = `dataFromWeb=${stringData};${expires};${path}`;
	return newData;
};

export const GetCookie = (name) => {
	SetupCookieCheck();

	const allCookie = document.cookie;

	// Last data
	let firstSeparator = allCookie.search("dataFromWeb={");
	let lastSeparator = allCookie.length;
	let lastData = allCookie.slice(firstSeparator + 12, lastSeparator);

	console.log(lastData);

	// Export data
	lastData = JSON.parse(lastData);
	return lastData[name];
};

export const RemoveCookie = (name) => {
	SetupCookieCheck();

	// Set expires date 7 day
	let date = new Date();
	date.setDate(date.getDate() + 7);
	let expires = `expires=${date}`;

	// Set path
	let path = "path=/";

	const allCookie = document.cookie;

	// Last data
	let firstSeparator = allCookie.search("dataFromWeb={");
	let lastSeparator = allCookie.length;
	let lastData = allCookie.slice(firstSeparator + 1, lastSeparator);
	lastData = JSON.parse(lastData);

	// Delete property
	delete lastData[name];

	// Insert new data
	const stringData = JSON.stringify(lastData);
	document.cookie = `dataFromWeb=${stringData};${expires};${path}`;

	return lastData[name];
};
