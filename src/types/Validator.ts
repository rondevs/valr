export interface Validator {
	type: string;
	validate: (value: any, object?: any) => boolean | Promise<boolean>;
	message: string;
}
