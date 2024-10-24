// src/errors/ValidationException.ts
import { ValidationError } from './ValidationError';

export class ValidationException extends Error {
	constructor(public errors: ValidationError[]) {
		super('Validation failed');
		Object.setPrototypeOf(this, ValidationException.prototype);
	}
}
