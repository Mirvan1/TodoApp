import {
  MatDatepickerModule
} from "./chunk-B7PZM5QH.js";
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
  MatNativeDateModule,
  Router
} from "./chunk-MJBSMV32.js";
import "./chunk-CRXF4C5E.js";
import {
  CommonModule,
  NgIf,
  ɵsetClassDebugInfo,
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

// src/app/components/register/register.component.ts
function RegisterComponent_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " First name is required. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Last name is required. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_mat_error_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Email is required. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Please enter a valid email. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_mat_error_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Password is required. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Password must be at least 6 characters long. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Confirm password is required. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_mat_error_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Passwords do not match. ");
    \u0275\u0275elementEnd();
  }
}
var _RegisterComponent = class _RegisterComponent {
  constructor(fb, service, router, snackBar) {
    this.fb = fb;
    this.service = service;
    this.router = router;
    this.snackBar = snackBar;
  }
  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", Validators.required]
    }, {
      validators: [this.passwordMatchingValidator]
    });
  }
  onRegister() {
    if (this.registerForm.valid) {
      const formRequest = {
        FirstName: this.registerForm.get("firstName")?.value,
        LastName: this.registerForm.get("lastName")?.value,
        Email: this.registerForm.get("email")?.value,
        Password: this.registerForm.get("password")?.value
      };
      this.service.register(formRequest).subscribe({
        next: (res) => {
          this.snackBar.open("Registered Succesfully", "Close", {
            duration: 3e3
          });
          this.router.navigateByUrl("/login");
        },
        error: () => {
          this.snackBar.open("Error", "Close", {
            duration: 3e3
          });
        }
      });
    }
  }
  passwordMatchingValidator(formGroup) {
    const password = formGroup.get("password")?.value;
    const confirmPassword = formGroup.get("confirmPassword")?.value;
    return password === confirmPassword ? false : { notMatching: true };
  }
};
_RegisterComponent.\u0275fac = function RegisterComponent_Factory(t) {
  return new (t || _RegisterComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatSnackBar));
};
_RegisterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 37, vars: 10, consts: [[1, "register-container"], [3, "ngSubmit", "formGroup"], [1, "register-title"], ["appearance", "outline"], ["matInput", "", "formControlName", "firstName"], [4, "ngIf"], ["matInput", "", "formControlName", "lastName"], ["matInput", "", "formControlName", "email", "type", "email"], ["matInput", "", "formControlName", "password", "type", "password"], ["matInput", "", "formControlName", "confirmPassword", "type", "password"], [1, "actions"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["href", "/login", 1, "login-link"]], template: function RegisterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "form", 1);
    \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_1_listener() {
      return ctx.onRegister();
    });
    \u0275\u0275elementStart(2, "h2", 2);
    \u0275\u0275text(3, "Register");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 3)(5, "mat-label");
    \u0275\u0275text(6, "First Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 4);
    \u0275\u0275template(8, RegisterComponent_mat_error_8_Template, 2, 0, "mat-error", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-form-field", 3)(10, "mat-label");
    \u0275\u0275text(11, "Last Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 6);
    \u0275\u0275template(13, RegisterComponent_mat_error_13_Template, 2, 0, "mat-error", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-form-field", 3)(15, "mat-label");
    \u0275\u0275text(16, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 7);
    \u0275\u0275template(18, RegisterComponent_mat_error_18_Template, 2, 0, "mat-error", 5)(19, RegisterComponent_mat_error_19_Template, 2, 0, "mat-error", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-form-field", 3)(21, "mat-label");
    \u0275\u0275text(22, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 8);
    \u0275\u0275template(24, RegisterComponent_mat_error_24_Template, 2, 0, "mat-error", 5)(25, RegisterComponent_mat_error_25_Template, 2, 0, "mat-error", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-form-field", 3)(27, "mat-label");
    \u0275\u0275text(28, "Confirm Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 9);
    \u0275\u0275template(30, RegisterComponent_mat_error_30_Template, 2, 0, "mat-error", 5)(31, RegisterComponent_mat_error_31_Template, 2, 0, "mat-error", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 10)(33, "button", 11);
    \u0275\u0275text(34, " Register ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "a", 12);
    \u0275\u0275text(36, "Already have account?");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.registerForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", (tmp_1_0 = ctx.registerForm.get("firstName")) == null ? null : tmp_1_0.hasError("required"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx.registerForm.get("lastName")) == null ? null : tmp_2_0.hasError("required"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx.registerForm.get("email")) == null ? null : tmp_3_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx.registerForm.get("email")) == null ? null : tmp_4_0.hasError("email"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx.registerForm.get("password")) == null ? null : tmp_5_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_6_0 = ctx.registerForm.get("password")) == null ? null : tmp_6_0.hasError("minlength"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", (tmp_7_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_7_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx.registerForm.errors == null ? null : ctx.registerForm.errors["notMatching"]) && ctx.registerForm.get("confirmPassword").touched);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx.registerForm.valid);
  }
}, dependencies: [
  CommonModule,
  NgIf,
  MatInputModule,
  MatInput,
  MatFormField,
  MatLabel,
  MatError,
  MatButtonModule,
  MatButton,
  MatFormFieldModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName
], styles: ["\n\n.register-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-color: #f5f5f5;\n}\n.register-title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  font-size: 1.5rem;\n  font-weight: 500;\n  text-align: center;\n  color: #333;\n}\n.login-link[_ngcontent-%COMP%] {\n  font-size: 16px;\n  text-decoration: none;\n  color: #1976d2;\n  margin-left: 16px;\n  margin-top: 15px;\n}\n.login-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 16px;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background: white;\n  padding: 2rem;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  max-width: 400px;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\nbutton[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 10px 0;\n  font-size: 16px;\n}\ninput[matInput][_ngcontent-%COMP%] {\n  background-color: #fefefe;\n}\nmat-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: red;\n}"] });
var RegisterComponent = _RegisterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src\\app\\components\\register\\register.component.ts", lineNumber: 37 });
})();
export {
  RegisterComponent
};
