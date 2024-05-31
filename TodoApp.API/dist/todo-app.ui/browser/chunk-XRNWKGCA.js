import{d as A}from"./chunk-Q5AMLAYL.js";import{B as V,C as z,T as L,b as w,d as a,f as F,g as N,i as y,j as P,k as S,l as E,n as I,o as k,q as O,r as R,s as B,w as j,x as q,z as D}from"./chunk-S2EPUUD6.js";import{T as _,i as b,l as C}from"./chunk-5VEGFZBR.js";import"./chunk-AESYL7IM.js";import{Ib as i,Pb as M,Qa as p,Ra as d,fa as u,fb as g,hb as c,lc as v,oc as x,qb as t,rb as e,sb as s,yb as h}from"./chunk-JLLD364E.js";function G(l,m){l&1&&(t(0,"mat-error"),i(1," Passwords do not match. "),e())}var ae=(()=>{let m=class m{constructor(n,o,r,f){this.fb=n,this.service=o,this.router=r,this.snackBar=f}ngOnInit(){this.registerForm=this.fb.group({firstName:["",a.required],lastName:["",a.required],email:["",[a.required,a.email]],password:["",[a.required,a.minLength(6)]],confirmPassword:["",a.required]},{validators:[this.passwordMatchingValidator]})}onRegister(){if(this.registerForm.valid){console.log(this.registerForm.value);let n={FirstName:this.registerForm.get("firstName")?.value,LastName:this.registerForm.get("lastName")?.value,Email:this.registerForm.get("email")?.value,Password:this.registerForm.get("password")?.value};this.service.register(n).subscribe({next:o=>{this.snackBar.open("Registered Succesfully","Close",{duration:3e3}),this.router.navigateByUrl("/login")},error:()=>{this.snackBar.open("Error","Close",{duration:3e3})}})}}passwordMatchingValidator(n){let o=n.get("password")?.value,r=n.get("confirmPassword")?.value;return o===r?!1:{notMatching:!0}}};m.\u0275fac=function(o){return new(o||m)(d(E),d(C),d(b),d(L))},m.\u0275cmp=u({type:m,selectors:[["app-register"]],standalone:!0,features:[M],decls:30,vars:3,consts:[[1,"register-container"],[3,"ngSubmit","formGroup"],[1,"register-title"],["appearance","outline"],["matInput","","formControlName","firstName"],["matInput","","formControlName","lastName"],["matInput","","formControlName","email","type","email"],["matInput","","formControlName","password","type","password"],["matInput","","formControlName","confirmPassword","type","password"],[4,"ngIf"],[1,"actions"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],["href","/login",1,"login-link"]],template:function(o,r){o&1&&(t(0,"div",0)(1,"form",1),h("ngSubmit",function(){return r.onRegister()}),t(2,"h2",2),i(3,"Register"),e(),t(4,"mat-form-field",3)(5,"mat-label"),i(6,"First Name"),e(),s(7,"input",4),e(),t(8,"mat-form-field",3)(9,"mat-label"),i(10,"Last Name"),e(),s(11,"input",5),e(),t(12,"mat-form-field",3)(13,"mat-label"),i(14,"Email"),e(),s(15,"input",6),e(),t(16,"mat-form-field",3)(17,"mat-label"),i(18,"Password"),e(),s(19,"input",7),e(),t(20,"mat-form-field",3)(21,"mat-label"),i(22,"Confirm Password"),e(),s(23,"input",8),g(24,G,2,0,"mat-error",9),e(),t(25,"div",10)(26,"button",11),i(27," Register "),e(),t(28,"a",12),i(29,"Already have account?"),e()()()()),o&2&&(p(),c("formGroup",r.registerForm),p(23),c("ngIf",(r.registerForm.errors==null?null:r.registerForm.errors.notMatching)&&r.registerForm.get("confirmPassword").touched),p(2),c("disabled",!r.registerForm.valid))},dependencies:[x,v,z,V,j,R,B,O,k,q,D,A,_,I,y,w,F,N,P,S],styles:[".register-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;background-color:#f5f5f5}.register-title[_ngcontent-%COMP%]{margin-bottom:1rem;font-size:1.5rem;font-weight:500;text-align:center;color:#333}.login-link[_ngcontent-%COMP%]{font-size:16px;text-decoration:none;color:#1976d2;margin-left:16px;margin-top:15px}.login-link[_ngcontent-%COMP%]:hover{text-decoration:underline}.actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-top:16px}form[_ngcontent-%COMP%]{display:flex;flex-direction:column;background:#fff;padding:2rem;border-radius:8px;box-shadow:0 2px 10px #0000001a;width:100%;max-width:400px}mat-form-field[_ngcontent-%COMP%]{margin-bottom:16px}button[_ngcontent-%COMP%]{margin-top:16px;padding:10px 0;font-size:16px}input[matInput][_ngcontent-%COMP%]{background-color:#fefefe}mat-error[_ngcontent-%COMP%]{font-size:12px;color:red}"]});let l=m;return l})();export{ae as RegisterComponent};