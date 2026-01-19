import {
  SampleService,
  init_sample_service
} from "./chunk-XKLZVJCQ.js";
import {
  TestBed,
  init_testing
} from "./chunk-OTKZFVFY.js";
import "./chunk-TTULUY32.js";

// src/app/modules/sample-module/services/sample.service.spec.ts
init_testing();
init_sample_service();
describe("SampleService", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-app-modules-sample-module-services-sample.service.spec.js.map
