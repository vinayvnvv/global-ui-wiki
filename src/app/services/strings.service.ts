import { ColorsModel } from './../models/colors.model';

export class StringsService {
	primaryColors: Array<ColorsModel> = [];
	colors:Array<ColorsModel> = [];
	constructor() {
		this.initColors();
		this.initPrimaryColors();
	}

	initColors() {
		this.colors.push(new ColorsModel('Red', 'red', '#F44336'));
		this.colors.push(new ColorsModel('Pink', 'pink', '#E91E63'));
		this.colors.push(new ColorsModel('Purple', 'purple', '#9C27B0'));
		this.colors.push(new ColorsModel('Deep Purple', 'deep-purple', '#673AB7'));
		this.colors.push(new ColorsModel('Indigo', 'indigo', '#3F51B5'));
		this.colors.push(new ColorsModel('Blue', 'blue', '#2196F3'));
		this.colors.push(new ColorsModel('Light Blue', 'light-blue', '#03A9F4'));
		this.colors.push(new ColorsModel('Cyan', 'cyan', '#00BCD4'));
		this.colors.push(new ColorsModel('Teal', 'teal', '#009688'));
		this.colors.push(new ColorsModel('Green', 'green', '#4CAF50'));
		this.colors.push(new ColorsModel('Light Green', 'light-green', '#8BC34A'));
		this.colors.push(new ColorsModel('Lime', 'lime', '#CDDC39'));
		this.colors.push(new ColorsModel('Yellow', 'yellow', '#FFEB3B'));
		this.colors.push(new ColorsModel('Amber', 'amber', '#FFC107'));
		this.colors.push(new ColorsModel('Orange', 'orange', '#FF9800'));
		this.colors.push(new ColorsModel('Deep Orange', 'deep-orange', '#FF5722'));
		this.colors.push(new ColorsModel('Brown', 'brown', '#795548'));
		this.colors.push(new ColorsModel('Grey', 'grey', '#9E9E9E'));
		this.colors.push(new ColorsModel('Blue Grey', 'blue-grey', '#F44336'));
		this.colors.push(new ColorsModel('Black', 'black', '#000000'));
		this.colors.push(new ColorsModel('White', 'white', '#FFFFFF'));
	}

	initPrimaryColors() {
		this.primaryColors.push(new ColorsModel('Primary', 'primary', '#0483a9'));
		this.primaryColors.push(new ColorsModel('Info', 'info', '#3273dc'));
		this.primaryColors.push(new ColorsModel('Success', 'success', '#23d160'));
		this.primaryColors.push(new ColorsModel('Warning', 'warning', '#ffdd57'));
		this.primaryColors.push(new ColorsModel('Danger', 'danger', '#ff3860'));
		this.primaryColors.push(new ColorsModel('Light', 'light', '#f5f5f5'));
		this.primaryColors.push(new ColorsModel('Dark', 'dark', '#363636'));
	}
}