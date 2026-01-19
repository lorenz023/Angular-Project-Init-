import {
  SampleService,
  init_sample_service
} from "./chunk-XKLZVJCQ.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6,
  inject
} from "./chunk-OTKZFVFY.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/modules/sample-module/components/sample/sample.component.html
var sample_component_default;
var init_sample_component = __esm({
  "angular:jit:template:src/app/modules/sample-module/components/sample/sample.component.html"() {
    sample_component_default = "<p>sample Component works!</p>\n<div>\n    Sample service => {{sampleService.sample()}}\n</div>";
  }
});

// angular:jit:style:src/app/modules/sample-module/components/sample/sample.component.scss
var sample_component_default2;
var init_sample_component2 = __esm({
  "angular:jit:style:src/app/modules/sample-module/components/sample/sample.component.scss"() {
    sample_component_default2 = "/* src/app/modules/sample-module/components/sample/sample.component.scss */\n/*# sourceMappingURL=sample.component.css.map */\n";
  }
});

// src/app/modules/sample-module/components/sample/sample.component.ts
var SampleComponent, sample_component_default3;
var init_sample_component3 = __esm({
  "src/app/modules/sample-module/components/sample/sample.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_sample_component();
    init_sample_component2();
    init_core();
    init_sample_service();
    SampleComponent = class SampleComponent2 {
      sampleService = inject(SampleService);
    };
    SampleComponent = __decorate([
      Component({
        selector: "app-sample",
        standalone: true,
        imports: [],
        template: sample_component_default,
        styles: [sample_component_default2]
      })
    ], SampleComponent);
    sample_component_default3 = SampleComponent;
  }
});

// src/app/modules/sample-module/components/sample/sample.component.spec.ts
var require_sample_component_spec = __commonJS({
  "src/app/modules/sample-module/components/sample/sample.component.spec.ts"(exports) {
    init_testing();
    init_sample_component3();
    describe("SampleComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [sample_component_default3]
        }).compileComponents();
        fixture = TestBed.createComponent(sample_component_default3);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_sample_component_spec();
//# sourceMappingURL=spec-app-modules-sample-module-components-sample-sample.component.spec.js.map
