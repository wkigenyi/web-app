"use strict";(self.webpackChunkmifosx_web_app=self.webpackChunkmifosx_web_app||[]).push([["default-src_app_account-transfers_account-transfers_service_ts-src_app_savings_common-resolve-c4dc06","src_app_account-transfers_account-transfers_service_ts"],{35023:(s,O,_)=>{_.d(O,{o:()=>M});var n=_(80529),C=_(94650);let M=(()=>{class a{constructor(o){this.http=o}getStandingInstructionsData(o){return this.http.get(`/standinginstructions/${o}`)}getStandingInstructionsDataAndTemplate(o){const e=(new n.LE).set("associations","template");return this.http.get(`/standinginstructions/${o}`,{params:e})}updateStandingInstructionsData(o,e){const i=(new n.LE).set("command","update");return this.http.put(`/standinginstructions/${o}`,e,{params:i})}getStandingInstructionsTemplate(o,e,i,c){let r=(new n.LE).set("fromAccountType",i).set("fromClientId",o).set("fromOfficeId",e);if(c){const m=Object.getOwnPropertyNames(c);for(let P=0;P<m.length;P++){const x=m[P];r=r.set(x,c[x])}}return this.http.get("/standinginstructions/template",{params:r})}createStandingInstructions(o){return this.http.post("/standinginstructions",o)}newAccountTranferResource(o,e,i){let c=(new n.LE).set("fromAccountId",o).set("fromAccountType",e);if(i){const r=Object.getOwnPropertyNames(i);for(let m=0;m<r.length;m++){const P=r[m];c=c.set(P,i[P])}}return this.http.get("/accounttransfers/template",{params:c})}createAccountTransfer(o){return this.http.post("/accounttransfers",o)}getStandingInstructions(o){let e=new n.LE;const i=Object.getOwnPropertyNames(o);for(let c=0;c<i.length;c++){const r=i[c];""===o[r]||null==o[r]||(e=e.set(r,o[r]))}return this.http.get("/standinginstructions",{params:e})}deleteStandingInstrucions(o){const e=(new n.LE).set("command","delete");return this.http.delete(`/standinginstructions/${o}`,{params:e})}getStandingInstructionsTransactions(o,e,i){const c=(new n.LE).set("associations","transactions").set("dateFormat",e).set("limit","14").set("locale",i).set("offset","0");return this.http.get(`/standinginstructions/${o}`,{params:c})}getViewAccountTransferDetails(o){return this.http.get(`/accounttransfers/${o}`)}}return a.\u0275fac=function(o){return new(o||a)(C.LFG(n.eN))},a.\u0275prov=C.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},69749:(s,O,_)=>{_.d(O,{X:()=>M});var n=_(94650),C=_(59349);let M=(()=>{class a{constructor(o){this.savingsService=o}resolve(o){const e=o.paramMap.get("savingAccountId");return this.savingsService.getSavingsAccountData(e)}}return a.\u0275fac=function(o){return new(o||a)(n.LFG(C.d))},a.\u0275prov=n.Yz7({token:a,factory:a.\u0275fac}),a})()},9722:(s,O,_)=>{_.d(O,{B:()=>u});var n=_(94650),C=_(36895),M=_(1576),a=_(49274);function l(t,p){1&t&&(n.TgZ(0,"div",3),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&t&&(n.xp6(1),n.hij("\n    ",n.lcZ(2,1,"Payment Type"),"\n  "))}function o(t,p){if(1&t&&(n.TgZ(0,"div",4),n._uU(1),n.qZA()),2&t){const g=n.oxw();n.xp6(1),n.hij("\n    ",g.paymentDetailData.paymentType.name,"\n  ")}}function e(t,p){1&t&&(n.TgZ(0,"div",3),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&t&&(n.xp6(1),n.hij("\n    ",n.lcZ(2,1,"Account No."),"\n  "))}function i(t,p){if(1&t&&(n.TgZ(0,"div",4),n._uU(1),n.qZA()),2&t){const g=n.oxw();n.xp6(1),n.hij("\n    ",g.paymentDetailData.accountNumber,"\n  ")}}function c(t,p){1&t&&(n.TgZ(0,"div",3),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&t&&(n.xp6(1),n.hij("\n    ",n.lcZ(2,1,"Cheque Number"),"\n  "))}function r(t,p){if(1&t&&(n.TgZ(0,"div",4),n._uU(1),n.qZA()),2&t){const g=n.oxw();n.xp6(1),n.hij("\n    ",g.paymentDetailData.checkNumber,"\n  ")}}function m(t,p){1&t&&(n.TgZ(0,"div",3),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&t&&(n.xp6(1),n.hij("\n    ",n.lcZ(2,1,"Routing Code"),"\n  "))}function P(t,p){if(1&t&&(n.TgZ(0,"div",4),n._uU(1),n.qZA()),2&t){const g=n.oxw();n.xp6(1),n.hij("\n    ",g.paymentDetailData.routingCode,"\n  ")}}function x(t,p){1&t&&(n.TgZ(0,"div",3),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&t&&(n.xp6(1),n.hij("\n    ",n.lcZ(2,1,"Receipt No."),"\n  "))}function f(t,p){if(1&t&&(n.TgZ(0,"div",4),n._uU(1),n.qZA()),2&t){const g=n.oxw();n.xp6(1),n.hij("\n    ",g.paymentDetailData.receiptNumber,"\n  ")}}function b(t,p){1&t&&(n.TgZ(0,"div",3),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&t&&(n.xp6(1),n.hij("\n    ",n.lcZ(2,1,"Bank No."),"\n  "))}function h(t,p){if(1&t&&(n.TgZ(0,"div",4),n._uU(1),n.qZA()),2&t){const g=n.oxw();n.xp6(1),n.hij("\n    ",g.paymentDetailData.bankNumber,"\n  ")}}let u=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(g){return new(g||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["mifosx-transaction-payment-detail"]],inputs:{paymentDetailData:"paymentDetailData"},decls:27,vars:12,consts:[[1,"content"],["fxFlex","50%","class","attribute",4,"ngIf"],["fxFlex","50%",4,"ngIf"],["fxFlex","50%",1,"attribute"],["fxFlex","50%"]],template:function(g,d){1&g&&(n.ynx(0,0),n._uU(1,"\n  "),n.YNc(2,l,3,3,"div",1),n._uU(3,"\n\n  "),n.YNc(4,o,2,1,"div",2),n._uU(5,"\n\n  "),n.YNc(6,e,3,3,"div",1),n._uU(7,"\n\n  "),n.YNc(8,i,2,1,"div",2),n._uU(9,"\n\n  "),n.YNc(10,c,3,3,"div",1),n._uU(11,"\n\n  "),n.YNc(12,r,2,1,"div",2),n._uU(13,"\n\n  "),n.YNc(14,m,3,3,"div",1),n._uU(15,"\n\n  "),n.YNc(16,P,2,1,"div",2),n._uU(17,"\n\n  "),n.YNc(18,x,3,3,"div",1),n._uU(19,"\n\n  "),n.YNc(20,f,2,1,"div",2),n._uU(21,"\n\n  "),n.YNc(22,b,3,3,"div",1),n._uU(23,"\n\n  "),n.YNc(24,h,2,1,"div",2),n._uU(25,"\n"),n.BQk(),n._uU(26,"\n")),2&g&&(n.xp6(2),n.Q6J("ngIf",d.paymentDetailData.paymentType),n.xp6(2),n.Q6J("ngIf",d.paymentDetailData.paymentType),n.xp6(2),n.Q6J("ngIf",d.paymentDetailData.accountNumber),n.xp6(2),n.Q6J("ngIf",d.paymentDetailData.accountNumber),n.xp6(2),n.Q6J("ngIf",d.paymentDetailData.checkNumber),n.xp6(2),n.Q6J("ngIf",d.paymentDetailData.checkNumber),n.xp6(2),n.Q6J("ngIf",d.paymentDetailData.routingCode),n.xp6(2),n.Q6J("ngIf",d.paymentDetailData.routingCode),n.xp6(2),n.Q6J("ngIf",d.paymentDetailData.receiptNumber),n.xp6(2),n.Q6J("ngIf",d.paymentDetailData.receiptNumber),n.xp6(2),n.Q6J("ngIf",d.paymentDetailData.bankNumber),n.xp6(2),n.Q6J("ngIf",d.paymentDetailData.bankNumber))},dependencies:[C.O5,M.yH,a.X$],styles:["body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color:#f2f2f2}.bg-black[_ngcontent-%COMP%]{background-color:#000}.bg-light-grey[_ngcontent-%COMP%]{background-color:#e5e5e5}.bg-medium-grey[_ngcontent-%COMP%]{background-color:#ccc}.bg-grey[_ngcontent-%COMP%]{background-color:#999}.bg-dark-grey[_ngcontent-%COMP%]{background-color:#222}.bg-white[_ngcontent-%COMP%], .bg-fff[_ngcontent-%COMP%]{background-color:#fff}.bg-none[_ngcontent-%COMP%], .no-bg[_ngcontent-%COMP%]{background:none;background-image:none;background-color:transparent}.bg-facebook[_ngcontent-%COMP%]{background-color:#47639e}.bg-twitter[_ngcontent-%COMP%]{background-color:#02a8f3}body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.12)}.no-border[_ngcontent-%COMP%]{border:none}.no-border-t[_ngcontent-%COMP%]{border-top:none}.no-border-r[_ngcontent-%COMP%]{border-right:none}.no-border-b[_ngcontent-%COMP%]{border-bottom:none}.no-border-l[_ngcontent-%COMP%]{border-left:none}.no-border-lr[_ngcontent-%COMP%], .no-border-rl[_ngcontent-%COMP%]{border-left:none;border-right:none}.no-border-tb[_ngcontent-%COMP%], .no-border-bt[_ngcontent-%COMP%]{border-top:none;border-bottom:none}.no-border-tl[_ngcontent-%COMP%], .no-border-lt[_ngcontent-%COMP%]{border-top:none;border-left:none}.no-border-tr[_ngcontent-%COMP%], .no-border-rt[_ngcontent-%COMP%]{border-top:none;border-right:none}.no-border-bl[_ngcontent-%COMP%], .no-border-lb[_ngcontent-%COMP%]{border-bottom:none;border-left:none}.no-border-br[_ngcontent-%COMP%], .no-border-rb[_ngcontent-%COMP%]{border-bottom:none;border-right:none}.border-dashed[_ngcontent-%COMP%], .border-dotted[_ngcontent-%COMP%]{border-style:dashed}.border-black[_ngcontent-%COMP%]{border-color:#000}.border-light-grey[_ngcontent-%COMP%]{border-color:#e5e5e5}.border-medium-grey[_ngcontent-%COMP%]{border-color:#ccc}.border-grey[_ngcontent-%COMP%]{border-color:#999}.border-dark-grey[_ngcontent-%COMP%]{border-color:#2222}.border-white[_ngcontent-%COMP%], .border-fff[_ngcontent-%COMP%]{border-color:#fff}.no-border-radius[_ngcontent-%COMP%]{border-radius:0}.radius3[_ngcontent-%COMP%]{border-radius:3px}.radius5[_ngcontent-%COMP%]{border-radius:5px}.radius10[_ngcontent-%COMP%]{border-radius:10px}.column-mandatory[_ngcontent-%COMP%]{color:#00ce00;text-align:center}.not-column-mandatory[_ngcontent-%COMP%]{color:#666f73;text-align:center}.cdk-drag-placeholder[_ngcontent-%COMP%]{background:#3498db}.v-mid[_ngcontent-%COMP%], .v-m[_ngcontent-%COMP%]{vertical-align:middle}.v-top[_ngcontent-%COMP%], .v-t[_ngcontent-%COMP%]{vertical-align:top}.v-bottom[_ngcontent-%COMP%], .v-b[_ngcontent-%COMP%]{vertical-align:bottom}.v-super[_ngcontent-%COMP%]{vertical-align:super}.r-amount[_ngcontent-%COMP%]{text-align:right!important;padding-right:5px!important}.left[_ngcontent-%COMP%]{text-align:left!important}.right[_ngcontent-%COMP%]{text-align:right!important}.center[_ngcontent-%COMP%]{text-align:center!important}.amount-plus[_ngcontent-%COMP%]{color:#000}.amount-minus[_ngcontent-%COMP%]{color:#0f36e4}.block[_ngcontent-%COMP%]{display:block}.inline[_ngcontent-%COMP%]{display:inline}.in-block[_ngcontent-%COMP%]{display:inline-block;zoom:1}.d-none[_ngcontent-%COMP%], .hide[_ngcontent-%COMP%], .hidden[_ngcontent-%COMP%]{display:none}.t-0[_ngcontent-%COMP%]{top:0}.b-0[_ngcontent-%COMP%]{bottom:0}.l-0[_ngcontent-%COMP%]{left:0}.r-0[_ngcontent-%COMP%]{right:0}.tb-0[_ngcontent-%COMP%]{top:0;bottom:0}.lr-0[_ngcontent-%COMP%]{left:0;right:0}.f-left[_ngcontent-%COMP%]{float:left}.f-right[_ngcontent-%COMP%]{float:right}.f-none[_ngcontent-%COMP%]{float:none}textarea[_ngcontent-%COMP%]{resize:both}textarea.vertical[_ngcontent-%COMP%], textarea.horizontal[_ngcontent-%COMP%]{resize:vertical}textarea.noresize[_ngcontent-%COMP%]{resize:none}.full-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .full-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .full-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%}.normal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .normal[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .normal[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .full-input[_ngcontent-%COMP%]   [type=checkbox][_ngcontent-%COMP%], .full-input[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]{width:auto}.mat-tab-body-content[_ngcontent-%COMP%]{margin-bottom:20px}.mat-datepicker-input[_ngcontent-%COMP%]{margin-top:5px;margin-bottom:5px}.loader-wrapper[_ngcontent-%COMP%]{height:100vh;width:100vw}.loader-wrapper[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%]{width:0;height:0;border-style:solid;position:absolute;animation:rotate .8s infinite .2s}.loader-wrapper[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]{border-width:0 90px 90px 90px;border-color:transparent transparent #1fb050 transparent;bottom:calc(50% - 100px);left:calc(50% - 90px)}.loader-wrapper[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]{border-width:90px 90px 0 90px;border-color:#b4d575 transparent transparent transparent;top:calc(50% - 100px);left:calc(50% - 90px)}.loader-wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{border-width:90px 0 90px 90px;border-color:transparent transparent transparent #1074b9;top:calc(50% - 90px);left:calc(50% - 100px)}.loader-wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{border-width:90px 90px 90px 0;border-color:transparent #1daeec transparent transparent;top:calc(50% - 90px);right:calc(50% - 100px)}@keyframes rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}body[_ngcontent-%COMP%]{margin:0}.container[_ngcontent-%COMP%]{margin:0 auto}.mb-05[_ngcontent-%COMP%]{margin-bottom:.5rem}.mr-05[_ngcontent-%COMP%]{margin-right:.5rem}.mb-1[_ngcontent-%COMP%]{margin-bottom:1rem}.mt-1[_ngcontent-%COMP%]{margin-top:1rem}.m-5[_ngcontent-%COMP%]{margin:5px}.m-t-5[_ngcontent-%COMP%]{margin-top:5px}.m-r-5[_ngcontent-%COMP%]{margin-right:5px}.m-b-5[_ngcontent-%COMP%]{margin-bottom:5px}.m-l-5[_ngcontent-%COMP%]{margin-left:5px}.m-v-5[_ngcontent-%COMP%]{margin:5px 0}.m-h-5[_ngcontent-%COMP%]{margin:0 5px}.m-10[_ngcontent-%COMP%]{margin:10px}.m-t-10[_ngcontent-%COMP%]{margin-top:10px}.m-r-10[_ngcontent-%COMP%]{margin-right:10px}.m-b-10[_ngcontent-%COMP%]{margin-bottom:10px}.m-l-10[_ngcontent-%COMP%]{margin-left:10px}.m-v-10[_ngcontent-%COMP%]{margin:10px 0}.m-h-10[_ngcontent-%COMP%]{margin:0 10px}.m-15[_ngcontent-%COMP%]{margin:15px}.m-t-15[_ngcontent-%COMP%]{margin-top:15px}.m-r-15[_ngcontent-%COMP%]{margin-right:15px}.m-b-15[_ngcontent-%COMP%]{margin-bottom:15px}.m-l-15[_ngcontent-%COMP%]{margin-left:15px}.m-v-15[_ngcontent-%COMP%]{margin:15px 0}.m-h-15[_ngcontent-%COMP%]{margin:0 15px}.m-20[_ngcontent-%COMP%]{margin:20px}.m-t-20[_ngcontent-%COMP%]{margin-top:20px}.m-r-20[_ngcontent-%COMP%]{margin-right:20px}.m-b-20[_ngcontent-%COMP%]{margin-bottom:20px}.m-l-20[_ngcontent-%COMP%]{margin-left:20px}.m-v-20[_ngcontent-%COMP%]{margin:20px 0}.m-h-20[_ngcontent-%COMP%]{margin:0 20px}.m-25[_ngcontent-%COMP%]{margin:25px}.m-t-25[_ngcontent-%COMP%]{margin-top:25px}.m-r-25[_ngcontent-%COMP%]{margin-right:25px}.m-b-25[_ngcontent-%COMP%]{margin-bottom:25px}.m-l-25[_ngcontent-%COMP%]{margin-left:25px}.m-v-25[_ngcontent-%COMP%]{margin:25px 0}.m-h-25[_ngcontent-%COMP%]{margin:0 25px}.m-30[_ngcontent-%COMP%]{margin:30px}.m-t-30[_ngcontent-%COMP%]{margin-top:30px}.m-r-30[_ngcontent-%COMP%]{margin-right:30px}.m-b-30[_ngcontent-%COMP%]{margin-bottom:30px}.m-l-30[_ngcontent-%COMP%]{margin-left:30px}.m-v-30[_ngcontent-%COMP%]{margin:30px 0}.m-h-30[_ngcontent-%COMP%]{margin:0 30px}.m-35[_ngcontent-%COMP%]{margin:35px}.m-t-35[_ngcontent-%COMP%]{margin-top:35px}.m-r-35[_ngcontent-%COMP%]{margin-right:35px}.m-b-35[_ngcontent-%COMP%]{margin-bottom:35px}.m-l-35[_ngcontent-%COMP%]{margin-left:35px}.m-v-35[_ngcontent-%COMP%]{margin:35px 0}.m-h-35[_ngcontent-%COMP%]{margin:0 35px}.m-40[_ngcontent-%COMP%]{margin:40px}.m-t-40[_ngcontent-%COMP%]{margin-top:40px}.m-r-40[_ngcontent-%COMP%]{margin-right:40px}.m-b-40[_ngcontent-%COMP%]{margin-bottom:40px}.m-l-40[_ngcontent-%COMP%]{margin-left:40px}.m-v-40[_ngcontent-%COMP%]{margin:40px 0}.m-h-40[_ngcontent-%COMP%]{margin:0 40px}.m-45[_ngcontent-%COMP%]{margin:45px}.m-t-45[_ngcontent-%COMP%]{margin-top:45px}.m-r-45[_ngcontent-%COMP%]{margin-right:45px}.m-b-45[_ngcontent-%COMP%]{margin-bottom:45px}.m-l-45[_ngcontent-%COMP%]{margin-left:45px}.m-v-45[_ngcontent-%COMP%]{margin:45px 0}.m-h-45[_ngcontent-%COMP%]{margin:0 45px}.m-50[_ngcontent-%COMP%]{margin:50px}.m-t-50[_ngcontent-%COMP%]{margin-top:50px}.m-r-50[_ngcontent-%COMP%]{margin-right:50px}.m-b-50[_ngcontent-%COMP%]{margin-bottom:50px}.m-l-50[_ngcontent-%COMP%]{margin-left:50px}.m-v-50[_ngcontent-%COMP%]{margin:50px 0}.m-h-50[_ngcontent-%COMP%]{margin:0 50px}.m-55[_ngcontent-%COMP%]{margin:55px}.m-t-55[_ngcontent-%COMP%]{margin-top:55px}.m-r-55[_ngcontent-%COMP%]{margin-right:55px}.m-b-55[_ngcontent-%COMP%]{margin-bottom:55px}.m-l-55[_ngcontent-%COMP%]{margin-left:55px}.m-v-55[_ngcontent-%COMP%]{margin:55px 0}.m-h-55[_ngcontent-%COMP%]{margin:0 55px}.m-60[_ngcontent-%COMP%]{margin:60px}.m-t-60[_ngcontent-%COMP%]{margin-top:60px}.m-r-60[_ngcontent-%COMP%]{margin-right:60px}.m-b-60[_ngcontent-%COMP%]{margin-bottom:60px}.m-l-60[_ngcontent-%COMP%]{margin-left:60px}.m-v-60[_ngcontent-%COMP%]{margin:60px 0}.m-h-60[_ngcontent-%COMP%]{margin:0 60px}.m-65[_ngcontent-%COMP%]{margin:65px}.m-t-65[_ngcontent-%COMP%]{margin-top:65px}.m-r-65[_ngcontent-%COMP%]{margin-right:65px}.m-b-65[_ngcontent-%COMP%]{margin-bottom:65px}.m-l-65[_ngcontent-%COMP%]{margin-left:65px}.m-v-65[_ngcontent-%COMP%]{margin:65px 0}.m-h-65[_ngcontent-%COMP%]{margin:0 65px}.m-70[_ngcontent-%COMP%]{margin:70px}.m-t-70[_ngcontent-%COMP%]{margin-top:70px}.m-r-70[_ngcontent-%COMP%]{margin-right:70px}.m-b-70[_ngcontent-%COMP%]{margin-bottom:70px}.m-l-70[_ngcontent-%COMP%]{margin-left:70px}.m-v-70[_ngcontent-%COMP%]{margin:70px 0}.m-h-70[_ngcontent-%COMP%]{margin:0 70px}.m-75[_ngcontent-%COMP%]{margin:75px}.m-t-75[_ngcontent-%COMP%]{margin-top:75px}.m-r-75[_ngcontent-%COMP%]{margin-right:75px}.m-b-75[_ngcontent-%COMP%]{margin-bottom:75px}.m-l-75[_ngcontent-%COMP%]{margin-left:75px}.m-v-75[_ngcontent-%COMP%]{margin:75px 0}.m-h-75[_ngcontent-%COMP%]{margin:0 75px}.m-80[_ngcontent-%COMP%]{margin:80px}.m-t-80[_ngcontent-%COMP%]{margin-top:80px}.m-r-80[_ngcontent-%COMP%]{margin-right:80px}.m-b-80[_ngcontent-%COMP%]{margin-bottom:80px}.m-l-80[_ngcontent-%COMP%]{margin-left:80px}.m-v-80[_ngcontent-%COMP%]{margin:80px 0}.m-h-80[_ngcontent-%COMP%]{margin:0 80px}.no-m[_ngcontent-%COMP%]{margin:0}.no-m-t[_ngcontent-%COMP%]{margin-top:0}.no-m-r[_ngcontent-%COMP%]{margin-right:0}.no-m-b[_ngcontent-%COMP%]{margin-bottom:0}.no-m-l[_ngcontent-%COMP%]{margin-left:0}.no-m-v[_ngcontent-%COMP%], .no-m-h[_ngcontent-%COMP%], .no-margin[_ngcontent-%COMP%]{margin:0}.no-m-lr[_ngcontent-%COMP%], .no-m-rl[_ngcontent-%COMP%]{margin-left:0;margin-right:0}.no-m-tb[_ngcontent-%COMP%], .no-m-bt[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}.m-t-only[_ngcontent-%COMP%]{margin-left:0;margin-right:0;margin-bottom:0}.m-b-only[_ngcontent-%COMP%]{margin-left:0;margin-right:0;margin-top:0}.m-l-only[_ngcontent-%COMP%]{margin-right:0;margin-top:0;margin-bottom:0}.m-r-only[_ngcontent-%COMP%]{margin-left:0;margin-top:0;margin-bottom:0}.m-auto[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}.ls-0[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px}.column-mandatory[_ngcontent-%COMP%]{color:#00ce00;text-align:center}.not-column-mandatory[_ngcontent-%COMP%]{color:#666f73;text-align:center}.cdk-drag-placeholder[_ngcontent-%COMP%]{background:#3498db}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{-webkit-tap-highlight-color:transparent}div[_ngcontent-%COMP%]{box-sizing:border-box}.color-inherit[_ngcontent-%COMP%]{color:inherit}.no-shadow[_ngcontent-%COMP%]{box-shadow:none}.pointer[_ngcontent-%COMP%]{cursor:pointer}.nolist[_ngcontent-%COMP%]{list-style:none}.actions-menu[_ngcontent-%COMP%]{color:#fff}.alert[_ngcontent-%COMP%]{background-color:#e8f4fd;padding:6px 16px;font-size:.875rem;font-family:Roboto,Helvetica,Arial,sans-serif;font-weight:400;line-height:1.43;border-radius:4px;letter-spacing:.01071em;margin:10px}.alert[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{padding:8px 0;font-size:18px}.alert[_ngcontent-%COMP%]   .alert-check[_ngcontent-%COMP%]{color:#359ff4;margin-right:2px;font-size:1.4rem}  .mat-tooltip{font-size:15px;white-space:pre-wrap;color:#fff!important;background-color:#0f36e4b3;border:1px solid #091f84;max-width:400px!important;white-space:pre-line!important}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{overflow:hidden}.overflow-x-scroll[_ngcontent-%COMP%]{max-width:100%;overflow-x:auto}.overflow-no[_ngcontent-%COMP%]{overflow:hidden}.overflow-auto[_ngcontent-%COMP%]{overflow:auto}.overflow-scroll[_ngcontent-%COMP%]{overflow:scroll}body[_ngcontent-%COMP%], .no-p[_ngcontent-%COMP%]{padding:0}.no-p-t[_ngcontent-%COMP%]{padding-top:0}.no-p-r[_ngcontent-%COMP%]{padding-right:0}.no-p-b[_ngcontent-%COMP%]{padding-bottom:0}.no-p-l[_ngcontent-%COMP%]{padding-left:0}.no-p-v[_ngcontent-%COMP%], .no-p-h[_ngcontent-%COMP%]{padding:0}.p-5[_ngcontent-%COMP%]{padding:5px}.p-t-5[_ngcontent-%COMP%]{padding-top:5px}.p-r-5[_ngcontent-%COMP%]{padding-right:5px}.p-b-5[_ngcontent-%COMP%]{padding-bottom:5px}.p-l-5[_ngcontent-%COMP%]{padding-left:5px}.p-v-5[_ngcontent-%COMP%]{padding:5px 0}.p-h-5[_ngcontent-%COMP%]{padding:0 5px}.p-10[_ngcontent-%COMP%]{padding:10px}.p-t-10[_ngcontent-%COMP%]{padding-top:10px}.p-r-10[_ngcontent-%COMP%]{padding-right:10px}.p-b-10[_ngcontent-%COMP%]{padding-bottom:10px}.p-l-10[_ngcontent-%COMP%]{padding-left:10px}.p-v-10[_ngcontent-%COMP%]{padding:10px 0}.p-h-10[_ngcontent-%COMP%]{padding:0 10px}.p-15[_ngcontent-%COMP%]{padding:15px}.p-t-15[_ngcontent-%COMP%]{padding-top:15px}.p-r-15[_ngcontent-%COMP%]{padding-right:15px}.p-b-15[_ngcontent-%COMP%]{padding-bottom:15px}.p-l-15[_ngcontent-%COMP%]{padding-left:15px}.p-v-15[_ngcontent-%COMP%]{padding:15px 0}.p-h-15[_ngcontent-%COMP%]{padding:0 15px}.p-20[_ngcontent-%COMP%]{padding:20px}.p-t-20[_ngcontent-%COMP%]{padding-top:20px}.p-r-20[_ngcontent-%COMP%]{padding-right:20px}.p-b-20[_ngcontent-%COMP%]{padding-bottom:20px}.p-l-20[_ngcontent-%COMP%]{padding-left:20px}.p-v-20[_ngcontent-%COMP%]{padding:20px 0}.p-h-20[_ngcontent-%COMP%]{padding:0 20px}.p-25[_ngcontent-%COMP%]{padding:25px}.p-t-25[_ngcontent-%COMP%]{padding-top:25px}.p-r-25[_ngcontent-%COMP%]{padding-right:25px}.p-b-25[_ngcontent-%COMP%]{padding-bottom:25px}.p-l-25[_ngcontent-%COMP%]{padding-left:25px}.p-v-25[_ngcontent-%COMP%]{padding:25px 0}.p-h-25[_ngcontent-%COMP%]{padding:0 25px}.p-30[_ngcontent-%COMP%]{padding:30px}.p-t-30[_ngcontent-%COMP%]{padding-top:30px}.p-r-30[_ngcontent-%COMP%]{padding-right:30px}.p-b-30[_ngcontent-%COMP%]{padding-bottom:30px}.p-l-30[_ngcontent-%COMP%]{padding-left:30px}.p-v-30[_ngcontent-%COMP%]{padding:30px 0}.p-h-30[_ngcontent-%COMP%]{padding:0 30px}.p-35[_ngcontent-%COMP%]{padding:35px}.p-t-35[_ngcontent-%COMP%]{padding-top:35px}.p-r-35[_ngcontent-%COMP%]{padding-right:35px}.p-b-35[_ngcontent-%COMP%]{padding-bottom:35px}.p-l-35[_ngcontent-%COMP%]{padding-left:35px}.p-v-35[_ngcontent-%COMP%]{padding:35px 0}.p-h-35[_ngcontent-%COMP%]{padding:0 35px}.p-40[_ngcontent-%COMP%]{padding:40px}.p-t-40[_ngcontent-%COMP%]{padding-top:40px}.p-r-40[_ngcontent-%COMP%]{padding-right:40px}.p-b-40[_ngcontent-%COMP%]{padding-bottom:40px}.p-l-40[_ngcontent-%COMP%]{padding-left:40px}.p-v-40[_ngcontent-%COMP%]{padding-top:40px;padding-bottom:40px}.p-h-40[_ngcontent-%COMP%]{padding:0 40px}.p-45[_ngcontent-%COMP%]{padding:45px}.p-t-45[_ngcontent-%COMP%]{padding-top:45px}.p-r-45[_ngcontent-%COMP%]{padding-right:45px}.p-b-45[_ngcontent-%COMP%]{padding-bottom:45px}.p-l-45[_ngcontent-%COMP%]{padding-left:45px}.p-v-45[_ngcontent-%COMP%]{padding:45px 0}.p-h-45[_ngcontent-%COMP%]{padding:0 45px}.p-50[_ngcontent-%COMP%]{padding:50px}.p-t-50[_ngcontent-%COMP%]{padding-top:50px}.p-r-50[_ngcontent-%COMP%]{padding-right:50px}.p-b-50[_ngcontent-%COMP%]{padding-bottom:50px}.p-l-50[_ngcontent-%COMP%]{padding-left:50px}.p-v-50[_ngcontent-%COMP%]{padding:50px 0}.p-h-50[_ngcontent-%COMP%]{padding:0 50px}.p-55[_ngcontent-%COMP%]{padding:55px}.p-t-55[_ngcontent-%COMP%]{padding-top:55px}.p-r-55[_ngcontent-%COMP%]{padding-right:55px}.p-b-55[_ngcontent-%COMP%]{padding-bottom:55px}.p-l-55[_ngcontent-%COMP%]{padding-left:55px}.p-v-55[_ngcontent-%COMP%]{padding:55px 0}.p-h-55[_ngcontent-%COMP%]{padding:0 55px}.p-60[_ngcontent-%COMP%]{padding:60px}.p-t-60[_ngcontent-%COMP%]{padding-top:60px}.p-r-60[_ngcontent-%COMP%]{padding-right:60px}.p-b-60[_ngcontent-%COMP%]{padding-bottom:60px}.p-l-60[_ngcontent-%COMP%]{padding-left:60px}.p-v-60[_ngcontent-%COMP%]{padding:60px 0}.p-h-60[_ngcontent-%COMP%]{padding:0 60px}.p-65[_ngcontent-%COMP%]{padding:65px}.p-t-65[_ngcontent-%COMP%]{padding-top:65px}.p-r-65[_ngcontent-%COMP%]{padding-right:65px}.p-b-65[_ngcontent-%COMP%]{padding-bottom:65px}.p-l-65[_ngcontent-%COMP%]{padding-left:65px}.p-v-65[_ngcontent-%COMP%]{padding:65px 0}.p-h-65[_ngcontent-%COMP%]{padding:0 65px}.p-70[_ngcontent-%COMP%]{padding:70px}.p-t-70[_ngcontent-%COMP%]{padding-top:70px}.p-r-70[_ngcontent-%COMP%]{padding-right:70px}.p-b-70[_ngcontent-%COMP%]{padding-bottom:70px}.p-l-70[_ngcontent-%COMP%]{padding-left:70px}.p-v-70[_ngcontent-%COMP%]{padding:70px 0}.p-h-70[_ngcontent-%COMP%]{padding:0 70px}.p-75[_ngcontent-%COMP%]{padding:75px}.p-t-75[_ngcontent-%COMP%]{padding-top:75px}.p-r-75[_ngcontent-%COMP%]{padding-right:75px}.p-b-75[_ngcontent-%COMP%]{padding-bottom:75px}.p-l-75[_ngcontent-%COMP%]{padding-left:75px}.p-v-75[_ngcontent-%COMP%]{padding:75px 0}.p-h-75[_ngcontent-%COMP%]{padding:0 75px}.p-80[_ngcontent-%COMP%]{padding:80px}.p-t-80[_ngcontent-%COMP%]{padding-top:80px}.p-r-80[_ngcontent-%COMP%]{padding-right:80px}.p-b-80[_ngcontent-%COMP%]{padding-bottom:80px}.p-l-80[_ngcontent-%COMP%]{padding-left:80px}.p-v-80[_ngcontent-%COMP%]{padding:80px 0}.p-h-80[_ngcontent-%COMP%]{padding:0 80px}.no-padding[_ngcontent-%COMP%]{padding:0!important}.no-pad-lr[_ngcontent-%COMP%], .no-pad-rl[_ngcontent-%COMP%]{padding-left:0;padding-right:0}.no-pad-tb[_ngcontent-%COMP%], .no-pad-bt[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.pad-t-only[_ngcontent-%COMP%]{padding-left:0;padding-right:0;padding-bottom:0}.pad-b-only[_ngcontent-%COMP%]{padding-left:0;padding-right:0;padding-top:0}.pad-l-only[_ngcontent-%COMP%]{padding-right:0;padding-top:0;padding-bottom:0}.pad-r-only[_ngcontent-%COMP%]{padding-left:0;padding-top:0;padding-bottom:0}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], .rel[_ngcontent-%COMP%], .relative[_ngcontent-%COMP%]{position:relative}.abs[_ngcontent-%COMP%], .absolute[_ngcontent-%COMP%]{position:absolute}.fixed[_ngcontent-%COMP%]{position:fixed}.status-active[_ngcontent-%COMP%]{color:#00ce00}.status-inactive[_ngcontent-%COMP%]{color:#666f73}.status-deleted[_ngcontent-%COMP%]{color:#000}.status-pending[_ngcontent-%COMP%]{color:orange}.status-approved[_ngcontent-%COMP%]{color:#0f36e4}.status-overpaid[_ngcontent-%COMP%]{color:purple}.status-chargeoff[_ngcontent-%COMP%]{color:#f39c12}.status-active-overdue[_ngcontent-%COMP%], .status-block[_ngcontent-%COMP%]{color:red}.status-matured[_ngcontent-%COMP%]{color:#ff4000}.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%]{background-color:#00ce00}.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%]   .status-transfer-progress[_ngcontent-%COMP%]{color:#ff4000}.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%]   .status-transfer-hold[_ngcontent-%COMP%]{color:#df0101}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{-webkit-font-smoothing:antialiased}html[_ngcontent-%COMP%]{font-size:16px}body[_ngcontent-%COMP%]{font-weight:400;font-size:.875rem;color:#000000de;line-height:1.5;font-family:Roboto,Helvetica Neue,sans-serif}.lh-1[_ngcontent-%COMP%]{line-height:1}.lh-13[_ngcontent-%COMP%]{line-height:1.3}.lh-15[_ngcontent-%COMP%]{line-height:1.5}.bold[_ngcontent-%COMP%], .strong[_ngcontent-%COMP%]{font-weight:700}.no-bold[_ngcontent-%COMP%]{font-weight:400}.italic[_ngcontent-%COMP%], .em[_ngcontent-%COMP%]{font-style:italic}.strike[_ngcontent-%COMP%]{text-decoration:line-through}.normal[_ngcontent-%COMP%]{font-weight:400;font-style:normal}.uppercase[_ngcontent-%COMP%]{text-transform:uppercase}.text-left[_ngcontent-%COMP%]{text-align:left}.text-center[_ngcontent-%COMP%]{text-align:center}.text-right[_ngcontent-%COMP%]{text-align:right}.w100[_ngcontent-%COMP%]{font-weight:100}.w200[_ngcontent-%COMP%]{font-weight:200}.w300[_ngcontent-%COMP%]{font-weight:300}.w400[_ngcontent-%COMP%]{font-weight:400}.w500[_ngcontent-%COMP%]{font-weight:500}.w600[_ngcontent-%COMP%]{font-weight:600}.w700[_ngcontent-%COMP%]{font-weight:700}.w800[_ngcontent-%COMP%]{font-weight:800}.w900[_ngcontent-%COMP%]{font-weight:900}.f9[_ngcontent-%COMP%]{font-size:9px}.f10[_ngcontent-%COMP%]{font-size:10px}.f11[_ngcontent-%COMP%]{font-size:11px}.f12[_ngcontent-%COMP%]{font-size:12px}.f13[_ngcontent-%COMP%]{font-size:13px}.f14[_ngcontent-%COMP%]{font-size:14px}.f15[_ngcontent-%COMP%]{font-size:15px}.f16[_ngcontent-%COMP%]{font-size:16px}.f17[_ngcontent-%COMP%]{font-size:17px}.f18[_ngcontent-%COMP%]{font-size:18px;line-height:30px}.f19[_ngcontent-%COMP%]{font-size:19px}.f20[_ngcontent-%COMP%]{font-size:20px}.f30[_ngcontent-%COMP%]{font-size:30px}.f40[_ngcontent-%COMP%]{font-size:40px}.f50[_ngcontent-%COMP%]{font-size:50px}.f60[_ngcontent-%COMP%]{font-size:60px}.size-small[_ngcontent-%COMP%]{font-size:75%}.size-normal[_ngcontent-%COMP%]{font-size:100%}.size-medium[_ngcontent-%COMP%]{font-size:125%}.size-big[_ngcontent-%COMP%], .size-large[_ngcontent-%COMP%]{font-size:150%}.size-huge[_ngcontent-%COMP%]{font-size:200%}.inherit[_ngcontent-%COMP%]{font:inherit}.text-shadow[_ngcontent-%COMP%]{text-shadow:1px 1px 1px rgba(0,0,0,.4)}.text-rgb-2[_ngcontent-%COMP%]{color:#0003}.text-rgb-3[_ngcontent-%COMP%]{color:#0000004d}.text-rgb-4[_ngcontent-%COMP%]{color:#0006}.text-rgb-5[_ngcontent-%COMP%]{color:#00000080}.no-ul[_ngcontent-%COMP%], .no-ul[_ngcontent-%COMP%]:hover, .no-ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .no-ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none}.no-wrap[_ngcontent-%COMP%]{white-space:nowrap}.auto-cell-size[_ngcontent-%COMP%]{white-space:nowrap;width:1%}.ls-0[_ngcontent-%COMP%]{letter-spacing:-3px;white-space:nowrap}.fit[_ngcontent-%COMP%]{max-width:100%}.half-width[_ngcontent-%COMP%]{width:50%}.full-width[_ngcontent-%COMP%]{width:100%}.full-height[_ngcontent-%COMP%]{height:100%}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{width:100%;height:100%;min-height:100%}body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{max-width:74rem;width:90%}.mw300[_ngcontent-%COMP%]{max-width:300px}.mw400[_ngcontent-%COMP%]{max-width:400px}.mw500[_ngcontent-%COMP%]{max-width:500px}.mw600[_ngcontent-%COMP%]{max-width:600px}.fullwidth[_ngcontent-%COMP%]{width:100%}.zindex-1[_ngcontent-%COMP%]{z-index:1}.zindex-2[_ngcontent-%COMP%]{z-index:2}.zindex-3[_ngcontent-%COMP%]{z-index:3}.zindex-4[_ngcontent-%COMP%]{z-index:4}.content[_ngcontent-%COMP%]{width:100%;background-color:#95a5a6}.content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{text-align:left}.content[_ngcontent-%COMP%]   .attribute[_ngcontent-%COMP%]{font-weight:500}"]}),t})()}}]);