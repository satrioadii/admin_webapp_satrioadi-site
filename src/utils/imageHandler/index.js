export const imageToUpload = (obj, target) => {
	target.forEach((key) => {
		if (typeof obj[key] === "undefined" || typeof obj[key] === "string") return;
		else {
			obj = { ...obj, [key]: obj[key].file };
		}
	});
	return obj;
};

export const imageToLocal = (obj, target) => {
	target.forEach((key) => {
		obj[key] = {
			file: undefined,
			url: `${process.env.REACT_APP_FILE_SERVER_API}/${obj[key]}`,
		};
	});
	return obj;
};
