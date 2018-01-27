export class LoginModel {
    public email: string;
    public password: string;

    constructor(values: Object = {}) {
      Object.assign(this, values);
  }
}
