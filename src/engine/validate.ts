import { metadataStorage } from '../metadata/metadataStorage';
import { ValidationError } from '../errors/ValidationError';

export async function validate(object: any): Promise<ValidationError[]> {
    const target = object.constructor;
    const validatorsMap = metadataStorage.getValidators(target);
    const errors: ValidationError[] = [];

    for (const [property, validators] of validatorsMap.entries()) {
        const value = object[property];
        for (const validator of validators) {
            const isValid = await validator.validate(value, object);
            if (!isValid) {
                errors.push(new ValidationError(property, validator.message));
            }
        }
    }

    return errors;
}

