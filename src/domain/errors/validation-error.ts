import { FieldsErrors } from '../validators';

export class ValidationError extends Error {}

export class EntityValidationError extends Error {
  constructor(public errors: FieldsErrors) {
    super(`Entity Validation Error: ${JSON.stringify(errors)}`);
    this.name = 'EntityValidationError';
  }
}
