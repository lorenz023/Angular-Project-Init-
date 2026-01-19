import {
  Injectable,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-OTKZFVFY.js";

// src/app/core/services/auth.service.ts
init_tslib_es6();
init_core();
var AuthService = class AuthService2 {
  token = "";
  constructor() {
  }
  userIsLogin() {
    return true;
  }
  setToken(token) {
    this.token = token;
  }
  static ctorParameters = () => [];
};
AuthService = __decorate([
  Injectable({
    providedIn: "root"
  })
], AuthService);

export {
  AuthService
};
//# sourceMappingURL=chunk-PFSIZ7SM.js.map
