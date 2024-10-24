// src/decorators/MinLength.ts
import { registerValidator } from '../metadata/metadataStorage';
import { Validator } from '../types/Validator';

export function MinLength(length: number) {
	return function (target: any, propertyName: string) {
		const validator: Validator = {
			type: 'MinLength',
			validate: (value: any) =>
				typeof value === 'string' && value.length >= length,
			message: `${propertyName} must be at least ${length} characters long`,
		};
		registerValidator(target.constructor, propertyName, validator);
	};
}
