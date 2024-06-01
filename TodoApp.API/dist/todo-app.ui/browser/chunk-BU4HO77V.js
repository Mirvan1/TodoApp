import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MatButton,
  MatButtonModule,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatIconModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatSnackBar,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-LH2DOZKJ.js";
import {
  AuthService,
  Router
} from "./chunk-MJBSMV32.js";
import "./chunk-CRXF4C5E.js";
import {
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-NPVGMRWK.js";

// src/app/components/login/login.component.ts
function LoginComponent_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Please enter a valid email");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_mat_error_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_mat_error_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Password must be at least 6 characters");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
var _LoginComponent = class _LoginComponent {
  constructor(fb, service, router, snackBar) {
    this.fb = fb;
    this.service = service;
    this.router = router;
    this.snackBar = snackBar;
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  onLogin() {
    if (this.loginForm.valid) {
      const request = {
        Email: this.loginForm.get("email")?.value,
        Password: this.loginForm.get("password")?.value
      };
      this.service.login(request).subscribe({
        next: (res) => {
          if (res.token) {
            this.router.navigateByUrl("/todo");
            this.snackBar.open("Logged in Succesfully", "Close", {
              duration: 3e3
            });
          }
        },
        error: (err) => {
          this.snackBar.open(`Something wrong:${JSON.stringify(err.error)}`, "Close", {
            duration: 3e3
          });
        }
      });
    }
  }
};
_LoginComponent.\u0275fac = function LoginComponent_Factory(t) {
  return new (t || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatSnackBar));
};
_LoginComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275ProvidersFeature([AuthService]), \u0275\u0275StandaloneFeature], decls: 21, vars: 6, consts: [[1, "login-container"], [3, "ngSubmit", "formGroup"], [1, "login-title"], ["appearance", "outline"], ["matInput", "", "formControlName", "email", "type", "email"], [4, "ngIf"], ["matInput", "", "formControlName", "password", "type", "password"], [1, "actions"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["href", "/register", 1, "register-link"]], template: function LoginComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "form", 1);
    \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() {
      return ctx.onLogin();
    });
    \u0275\u0275elementStart(2, "h2", 2);
    \u0275\u0275text(3, "Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 3)(5, "mat-label");
    \u0275\u0275text(6, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 4);
    \u0275\u0275template(8, LoginComponent_mat_error_8_Template, 2, 0, "mat-error", 5)(9, LoginComponent_mat_error_9_Template, 2, 0, "mat-error", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-form-field", 3)(11, "mat-label");
    \u0275\u0275text(12, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 6);
    \u0275\u0275template(14, LoginComponent_mat_error_14_Template, 2, 0, "mat-error", 5)(15, LoginComponent_mat_error_15_Template, 2, 0, "mat-error", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 7)(17, "button", 8);
    \u0275\u0275text(18, " Login ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "a", 9);
    \u0275\u0275text(20, "Don't have account?");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.loginForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", (tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["email"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx.loginForm.get("password")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["minLength"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx.loginForm.valid);
  }
}, dependencies: [
  NgIf,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  MatInputModule,
  MatInput,
  MatFormField,
  MatLabel,
  MatError,
  MatButtonModule,
  MatButton,
  MatFormFieldModule,
  MatIconModule
], styles: ["\n\n.login-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-color: #f5f5f5;\n}\n.login-title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  font-size: 1.5rem;\n  font-weight: 500;\n  text-align: center;\n  color: #333;\n}\n.register-link[_ngcontent-%COMP%] {\n  font-size: 16px;\n  text-decoration: none;\n  color: #1976d2;\n  margin-left: 16px;\n  margin-top: 15px;\n}\n.register-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 16px;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background: white;\n  padding: 2rem;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  max-width: 400px;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\nbutton[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 10px 0;\n  font-size: 16px;\n}\ninput[matInput][_ngcontent-%COMP%] {\n  background-color: #fefefe;\n}\nmat-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: red;\n}"] });
var LoginComponent = _LoginComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\components\\login\\login.component.ts", lineNumber: 33 });
})();
export {
  LoginComponent
};
