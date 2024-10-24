// src/decorators/IsNumber.ts
import { registerValidator } from '../metadata/metadataStorage';
import { Validator } from '../types/Validator';

export function IsNumber() {
	return function (target: any, propertyName: string) {
		const validator: Validator = {
			type: 'IsNumber',
			validate: (value: any) => typeof value === 'number',
			message: `${propertyName} must be a number`,
		};
		registerValidator(target.constructor, propertyName, validator);
	};
}
