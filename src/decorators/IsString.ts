import { registerValidator } from '../metadata/metadataStorage';
import { Validator } from '../types/Validator';

export function IsString() {
    return function (target: any, propertyName: string) {
        const validator: Validator = {
            type: 'IsString',
            validate: (value: any) => typeof value === 'string',
            message: `${propertyName} must be a string`,
        };
        registerValidator(target.constructor, propertyName, validator);
    };
}

