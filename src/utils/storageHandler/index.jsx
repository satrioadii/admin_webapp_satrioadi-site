import { EncryptData, DescryptData } from "../encryptionHandler";

export const SetupStorageCheck = () => {
	// Check data and create if not exist
	let currentStorage = JSON.parse(localStorage.getItem("admin_app_satrioadi"));
	if (!currentStorage) {
		let emptyObject = JSON.stringify({ created: true });
		const encrypted = EncryptData(emptyObject);
		localStorage.setItem("admin_app_satrioadi", encrypted);
	}
};

export const SetStorage = (name, value) => {
	if (typeof value === "object") value = JSON.stringify(value);

	SetupStorageCheck();

	// Get all storage
	const currentData = localStorage.getItem("admin_app_satrioadi");
	const decrypted = DescryptData(currentData);
	const allStorage = JSON.parse(decrypted);

	// Join previous and new data
	let newData = { ...allStorage, [name]: value };

	// Insert new data
	const stringData = JSON.stringify(newData);
	const encrypted = EncryptData(stringData);
	localStorage.setItem("admin_app_satrioadi", encrypted);
	return newData;
};

export const GetStorage = (name) => {
	SetupStorageCheck();

	// Get all storage
	const currentData = localStorage.getItem("admin_app_satrioadi");
	const decrypted = DescryptData(currentData);
	const allStorage = JSON.parse(decrypted);

	// Export data
	if (!allStorage) return null;

	return allStorage[name];
};

export const RemoveStorage = (name) => {
	SetupStorageCheck();

	// Get all storage
	const currentData = localStorage.getItem("admin_app_satrioadi");
	const decrypted = DescryptData(currentData);
	const allStorage = JSON.parse(decrypted);

	// Delete property
	delete allStorage[name];

	// Insert new data
	const stringData = JSON.stringify(allStorage);
	const encrypted = EncryptData(stringData);
	localStorage.setItem("admin_app_satrioadi", encrypted);

	return allStorage;
};
