export default class SuccessApiResponse {
  constructor({ message = 'Success', data = null, meta = null } = {}) {
    this.success = true;
    this.message = message;
    if (data !== null) this.data = data;
    if (meta !== null) this.meta = meta;
  }
}
