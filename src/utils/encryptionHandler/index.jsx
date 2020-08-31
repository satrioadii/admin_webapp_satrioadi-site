import CryptoJS from "crypto-js";
import CryptoAES from "crypto-js/aes";
import CryptoBase64 from "crypto-js/enc-base64";
import CryptoHex from "crypto-js/enc-hex";
import CryptoEncoder from "crypto-js/enc-utf8";

const SecretWord = process.env.REACT_APP_RCESTE_DROW;

const JsonFormatter = {
	stringify: (cipherParams) => {
		// create json object with ciphertext
		let jsonObj = { ct: cipherParams.ciphertext.toString(CryptoBase64) };
		// optionally add iv or salt
		if (cipherParams.iv) {
			jsonObj.iv = cipherParams.iv.toString();
		}
		if (cipherParams.salt) {
			jsonObj.s = cipherParams.salt.toString();
		}
		// stringify json object
		return JSON.stringify(jsonObj);
	},
	parse: (jsonStr) => {
		// parse json string
		let jsonObj = JSON.parse(jsonStr);
		// extract ciphertext from json object, and create cipher params object
		let cipherParams = CryptoJS.lib.CipherParams.create({
			ciphertext: CryptoBase64.parse(jsonObj.ct),
		});

		// optionally extract iv or salt
		if (jsonObj.iv) {
			cipherParams.iv = CryptoHex.parse(jsonObj.iv);
		}
		if (jsonObj.s) {
			cipherParams.salt = CryptoHex.parse(jsonObj.s);
		}
		return cipherParams;
	},
};

export const EncryptData = (stringData) => {
	// Encrypt with Aes
	const ChipperText = CryptoAES.encrypt(stringData, SecretWord, {
		format: JsonFormatter,
	}).toString();
	return ChipperText;
};

export const DescryptData = (stringChipper) => {
	const bytes = CryptoAES.decrypt(stringChipper, SecretWord, {
		format: JsonFormatter,
	});
	const content = bytes.toString(CryptoEncoder);
	return content;
};
