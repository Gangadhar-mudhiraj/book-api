export default class SuccessResponse {
  constructor({ statusCode = 200, message = 'Success', data = {} }) {
    this.success = true;
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}