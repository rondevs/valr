import { Validator } from '../types/Validator';

class MetadataStorage {
    private validators: Map<Function, Map<string, Validator[]>> = new Map();

    registerValidator(target: Function, property: string, validator: Validator) {
        if (!this.validators.has(target)) {
            this.validators.set(target, new Map());
        }
        const properties = this.validators.get(target)!;
        if (!properties.has(property)) {
            properties.set(property, []);
        }
        properties.get(property)!.push(validator);
    }

    getValidators(target: Function) {
        return this.validators.get(target) || new Map();
    }
}

export const metadataStorage = new MetadataStorage();

export function registerValidator(target: Function, property: string, validator: Validator) {
    metadataStorage.registerValidator(target, property, validator);
}

