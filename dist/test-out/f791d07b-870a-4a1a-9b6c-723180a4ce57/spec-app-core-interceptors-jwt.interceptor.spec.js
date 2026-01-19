import {
  AuthService
} from "./chunk-E7UFNO72.js";
import {
  TestBed,
  init_core,
  init_testing,
  inject
} from "./chunk-XTWPZ5GV.js";
import "./chunk-TTULUY32.js";

// src/app/core/interceptors/jwt.interceptor.spec.ts
init_testing();

// src/app/core/interceptors/jwt.interceptor.ts
init_core();
var jwtInterceptor = (req, next) => {
  const authService = inject(AuthService);
  if (authService.token) {
    const jwtRequest = req.clone({
      headers: req.headers.set("Authorization", authService.token)
    });
    return next(jwtRequest);
  }
  return next(req);
};

// src/app/core/interceptors/jwt.interceptor.spec.ts
describe("jwtInterceptor", () => {
  const interceptor = (req, next) => TestBed.runInInjectionContext(() => jwtInterceptor(req, next));
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });
  it("should be created", () => {
    expect(interceptor).toBeTruthy();
  });
});
//# sourceMappingURL=spec-app-core-interceptors-jwt.interceptor.spec.js.map
