import {
  AuthService
} from "./chunk-PFSIZ7SM.js";
import {
  TestBed,
  init_core,
  init_testing,
  inject
} from "./chunk-OTKZFVFY.js";
import "./chunk-TTULUY32.js";

// src/app/core/guards/auth.guard.spec.ts
init_testing();

// src/app/core/guards/auth.guard.ts
init_core();
var authGuard = (route, state) => {
  const authService = inject(AuthService);
  return authService.userIsLogin();
};

// src/app/core/guards/auth.guard.spec.ts
describe("authGuard", () => {
  const executeGuard = (...guardParameters) => TestBed.runInInjectionContext(() => authGuard(...guardParameters));
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });
  it("should be created", () => {
    expect(executeGuard).toBeTruthy();
  });
});
//# sourceMappingURL=spec-app-core-guards-auth.guard.spec.js.map
