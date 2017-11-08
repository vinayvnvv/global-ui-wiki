export class ColorsModel {
	name: string;
	value: string;
	hex_code: string;
	constructor(name, value, hex_code) {
		this.name = name;
		this.value = value;
		this.hex_code = hex_code;
	}
}