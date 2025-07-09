export default class FailApiResponse extends Error {
  constructor({ statusCode = 500, message = 'Something went wrong', error = null }) {
    super(message);
    this.success = false;
    this.statusCode = statusCode;
    this.message = message;
    this.error = error;
  }
}