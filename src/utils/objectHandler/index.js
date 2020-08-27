export const objToString = (obj, target) => {
	target.forEach((key) => {
		obj[key] = JSON.stringify(obj[key]);
	});

	return obj;
};

export const stringToObj = (obj, target) => {
	target.forEach((key) => {
		obj[key] = JSON.parse(obj[key]);
	});

	return obj;
};
