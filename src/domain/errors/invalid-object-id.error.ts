export class InvalidObjectIdError extends Error {
  constructor(message?: string) {
    super(message || 'ID must be a valid ObjectId');
    this.name = 'InvalidObjectIdError';
  }
}
