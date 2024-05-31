import{A as z,C as G,D as A,U as V,b as F,d as u,f as w,g as I,j as P,k as E,l as L,m as O,o as k,p as N,r as B,s as q,t as j,x as T,y as D}from"./chunk-MC7JH63Y.js";import{j as S,m as c}from"./chunk-NS5ZYWFP.js";import"./chunk-AESYL7IM.js";import{Ib as o,Ob as b,Pb as C,Qa as l,Ra as d,fa as x,fb as h,hb as m,lc as y,qb as r,rb as e,sb as v,yb as M}from"./chunk-JLLD364E.js";function R(t,i){t&1&&(r(0,"mat-error"),o(1,"Please enter a valid email"),e())}function J(t,i){t&1&&(r(0,"mat-error"),o(1,"Email is required"),e())}function U(t,i){t&1&&(r(0,"mat-error"),o(1,"Password must be at least 6 characters"),e())}function $(t,i){t&1&&(r(0,"mat-error"),o(1,"Password is required"),e())}var me=(()=>{let i=class i{constructor(p,n,a,s){this.fb=p,this.service=n,this.router=a,this.snackBar=s}ngOnInit(){this.loginForm=this.fb.group({email:["",[u.required,u.email]],password:["",[u.required,u.minLength(6)]]})}onLogin(){if(this.loginForm.valid){let p={Email:this.loginForm.get("email")?.value,Password:this.loginForm.get("password")?.value};this.service.login(p).subscribe({next:n=>{n.token&&(this.router.navigateByUrl("/todo"),this.snackBar.open("Logged in Succesfully","Close",{duration:3e3}))},error:n=>{this.snackBar.open(`Something wrong:${JSON.stringify(n.error)}`,"Close",{duration:3e3})}})}}};i.\u0275fac=function(n){return new(n||i)(d(O),d(c),d(S),d(V))},i.\u0275cmp=x({type:i,selectors:[["app-login"]],standalone:!0,features:[b([c]),C],decls:21,vars:6,consts:[[1,"login-container"],[3,"ngSubmit","formGroup"],[1,"login-title"],["appearance","outline"],["matInput","","formControlName","email","type","email"],[4,"ngIf"],["matInput","","formControlName","password","type","password"],[1,"actions"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],["href","/register",1,"register-link"]],template:function(n,a){if(n&1&&(r(0,"div",0)(1,"form",1),M("ngSubmit",function(){return a.onLogin()}),r(2,"h2",2),o(3,"Login"),e(),r(4,"mat-form-field",3)(5,"mat-label"),o(6,"Email"),e(),v(7,"input",4),h(8,R,2,0,"mat-error",5)(9,J,2,0,"mat-error",5),e(),r(10,"mat-form-field",3)(11,"mat-label"),o(12,"Password"),e(),v(13,"input",6),h(14,U,2,0,"mat-error",5)(15,$,2,0,"mat-error",5),e(),r(16,"div",7)(17,"button",8),o(18," Login "),e(),r(19,"a",9),o(20,"Don't have account?"),e()()()()),n&2){let s,g,f,_;l(),m("formGroup",a.loginForm),l(7),m("ngIf",(s=a.loginForm.get("email"))==null||s.errors==null?null:s.errors.email),l(),m("ngIf",(g=a.loginForm.get("email"))==null||g.errors==null?null:g.errors.required),l(5),m("ngIf",(f=a.loginForm.get("password"))==null||f.errors==null?null:f.errors.minLength),l(),m("ngIf",(_=a.loginForm.get("password"))==null||_.errors==null?null:_.errors.required),l(2),m("disabled",!a.loginForm.valid)}},dependencies:[y,k,P,F,w,I,E,L,A,G,T,q,j,B,N,D,z],styles:[".login-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;background-color:#f5f5f5}.login-title[_ngcontent-%COMP%]{margin-bottom:1rem;font-size:1.5rem;font-weight:500;text-align:center;color:#333}.register-link[_ngcontent-%COMP%]{font-size:16px;text-decoration:none;color:#1976d2;margin-left:16px;margin-top:15px}.register-link[_ngcontent-%COMP%]:hover{text-decoration:underline}.actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-top:16px}form[_ngcontent-%COMP%]{display:flex;flex-direction:column;background:#fff;padding:2rem;border-radius:8px;box-shadow:0 2px 10px #0000001a;width:100%;max-width:400px}mat-form-field[_ngcontent-%COMP%]{margin-bottom:16px}button[_ngcontent-%COMP%]{margin-top:16px;padding:10px 0;font-size:16px}input[matInput][_ngcontent-%COMP%]{background-color:#fefefe}mat-error[_ngcontent-%COMP%]{font-size:12px;color:red}"]});let t=i;return t})();export{me as LoginComponent};
