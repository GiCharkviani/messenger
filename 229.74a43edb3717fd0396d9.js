"use strict";(self.webpackChunkmessenger=self.webpackChunkmessenger||[]).push([[229],{3229:(R,f,r)=>{r.r(f),r.d(f,{ChatModule:()=>H});var m=r(8583),_=r(665),e=r(639),d=r(6945);let v=(()=>{class n{constructor(t,s,i){this.elRef=t,this.renderer=s,this.storageService=i,this.activeUer=this.storageService.localActiveUser(!0)}ngOnInit(){this.messageOwnerId===this.activeUer.uid?(this.renderer.addClass(this.elRef.nativeElement,"me"),this.renderer.addClass(this.elRef.nativeElement,"thisMe")):this.renderer.addClass(this.elRef.nativeElement,"this")}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(d.V))},n.\u0275dir=e.lG2({type:n,selectors:[["","me",""]],inputs:{messageOwnerId:"messageOwnerId"}}),n})(),x=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({}),n})();var g=r(5528),M=r(5639),p=r(7238),h=r(2340),u=r(2329),O=r(1952),l=r(4963);function y(n,o){1&n&&(e.TgZ(0,"div",6),e.TgZ(1,"div",7),e._UZ(2,"span",8),e.qZA(),e.qZA())}function U(n,o){if(1&n&&(e.TgZ(0,"span",14),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.hij(" ",t.lastMessage.substr(0,5)+"..."," ")}}function Z(n,o){if(1&n&&(e.TgZ(0,"span",14),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.hij(" ",t.lastMessage.substr(0,5)," ")}}const P=function(n,o){return{color:n,"font-weight":o}};function b(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"li",10),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw(2).selectedUser(a.id,a.name,a.img)}),e._UZ(1,"img",11),e.TgZ(2,"section"),e.TgZ(3,"h6",null,12),e._uU(5),e.qZA(),e.YNc(6,U,2,1,"span",13),e.YNc(7,Z,2,1,"span",13),e.qZA(),e.qZA()}if(2&n){const t=o.$implicit,s=e.oxw(2);e.Q6J("ngStyle",e.WLB(5,P,s.clickedPm===t.id?"lightblue":"grey",s.clickedPm===t.id?"bold":"normal")),e.xp6(1),e.Q6J("src",t.img,e.LSH),e.xp6(4),e.Oqu(t.name),e.xp6(1),e.Q6J("ngIf",t.lastMessage.length>5),e.xp6(1),e.Q6J("ngIf",t.lastMessage.length<=5)}}function w(n,o){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,b,8,8,"li",9),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.pmUsersList)}}const T=function(){return["../"]};let A=(()=>{class n{constructor(t,s,i){this.router=t,this.route=s,this.storageService=i,this.fireApp=(0,u.ZF)(h.N.firebaseConfig),this.database=(0,l.N8)(),this.dbRef=(0,l.iH)(this.database),this.pmUsersList=[],this.currentUser=this.storageService.localActiveUser(!0),this.markedUser=new e.vpe}ngOnInit(){this.loading=!0,this.updatePmUsers(),this.clickedPm=this.route.snapshot.params.id,this.route.firstChild&&this.styleFunc()}styleFunc(){this.route.firstChild.params.subscribe(t=>{this.clickedPm=t.id})}updatePmUsers(){(0,l.jM)((0,l.iH)(this.database,"users/"+this.currentUser.uid+"/pm"),t=>{const s=t.val();let i=[];for(let a in s){i.push({user:a,pm:[]});for(let c in s[a])for(let C in i)i[C].user===a&&(i[C].pm={timestamp:s[a][c].timeStamp,message:s[a][c].message})}i.sort((a,c)=>a.pm.timestamp-c.pm.timestamp),i.reverse(),i.length>=0?this.fetchUsers(i):this.storageService.getUser(this.route.firstChild.snapshot.params.id).then(a=>{this.markedUser.emit({name:a.name,img:a.img})}),this.loading=!1})}fetchUsers(t){const s=[];for(let i in t)(0,l.jM)((0,l.iH)(this.database,"users/"+t[i].user),a=>{s.push({email:a.val().email,id:t[i].user,img:a.val().img,name:a.val().name,lastMessage:t[i].pm.message}),this.pmUsersList=s,this.updateTopUser(this.pmUsersList)},{onlyOnce:!0})}selectedUser(t,s,i){this.router.navigate([t],{relativeTo:this.route}),this.markedUser.emit({name:s,img:i}),setTimeout(()=>{this.styleFunc()},500)}updateTopUser(t){for(let s in t)if(this.route.firstChild){if(t[s].id===this.route.firstChild.snapshot.params.id){this.markedUser.emit({name:t[s].name,img:t[s].img});break}this.storageService.getUser(this.route.firstChild.snapshot.params.id).then(i=>{this.markedUser.emit({name:i.name,img:i.img})});break}}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.F0),e.Y36(g.gz),e.Y36(d.V))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-user-list"]],outputs:{markedUser:"markedUser"},decls:8,vars:4,consts:[[1,"pm-users-list"],[1,"title"],[3,"routerLink"],[1,"fas","fa-undo"],["class","d-flex justify-content-center",4,"ngIf","ngIfElse"],["userListContainer",""],[1,"d-flex","justify-content-center"],["role","status",1,"spinner-border","text-secondary"],[1,"sr-only"],["class","pm-user",3,"ngStyle","click",4,"ngFor","ngForOf"],[1,"pm-user",3,"ngStyle","click"],[3,"src"],["userList",""],["class","text-muted",4,"ngIf"],[1,"text-muted"]],template:function(t,s){if(1&t&&(e.TgZ(0,"ul",0),e.TgZ(1,"h4",1),e.TgZ(2,"span",2),e._UZ(3,"i",3),e.qZA(),e._uU(4," Messages "),e.qZA(),e.YNc(5,y,3,0,"div",4),e.YNc(6,w,2,1,"ng-template",null,5,e.W1O),e.qZA()),2&t){const i=e.MAs(7);e.xp6(2),e.Q6J("routerLink",e.DdM(3,T)),e.xp6(3),e.Q6J("ngIf",s.loading)("ngIfElse",i)}},directives:[g.rH,m.O5,m.sg,m.PC],styles:[".pm-users-list[_ngcontent-%COMP%]{height:97%!important;padding:0!important;overflow:auto}.title[_ngcontent-%COMP%]{position:sticky;top:0;padding:10px 10px 10px 20px;height:5%;width:100%}.title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:10px;cursor:pointer}.title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{color:brown}.pm-user[_ngcontent-%COMP%]{list-style-type:none;margin:0 0 10px!important;display:flex;align-items:center;padding:10px 20px!important;cursor:pointer;background-color:var(--userListColor)!important}.pm-user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:50%;margin-right:10px}.pm-user[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{display:flex;flex-direction:column}.pm-user[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0}@media only screen and (max-width: 675px){.title[_ngcontent-%COMP%]{font-size:3vw;height:auto}}"]}),n})();function k(n,o){1&n&&e._UZ(0,"i",8)}function I(n,o){1&n&&e._UZ(0,"i",9)}function S(n,o){1&n&&(e.TgZ(0,"div",10),e.TgZ(1,"h2"),e._uU(2,"Select Chat"),e.qZA(),e.qZA())}function L(n,o){if(1&n&&(e.TgZ(0,"div",11),e.TgZ(1,"div",12),e._UZ(2,"img",13),e.TgZ(3,"h6"),e._uU(4),e.qZA(),e.qZA(),e._UZ(5,"router-outlet"),e.qZA()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("src",t.activeUser.img,e.LSH),e.xp6(2),e.Oqu(t.activeUser.name)}}let F=(()=>{class n{constructor(t){this.route=t,this.fireApp=(0,u.ZF)(h.N.firebaseConfig),this.Auth=(0,O.v0)(),this.state="normal",this.iconChange=!0,this.selectChat=!1,this.activeUser={name:"Loading...",img:"https://cdn.iconscout.com/icon/free/png-256/incognito-6-902117.png"}}show(){this.state="normal"===this.state?"move":"normal"}gotUser(t){t?(this.activeUser=t,this.selectChat=!1):(this.activeUser={name:"TextMeToSeeMe",img:"https://cdn.iconscout.com/icon/free/png-256/incognito-6-902117.png"},this.selectChat=!1)}ngOnInit(){var t;"Loading..."==this.activeUser.name&&(this.selectChat=!0),(null===(t=this.route.firstChild)||void 0===t?void 0:t.snapshot.params.id)&&this.gotUser(void 0)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-chat"]],decls:9,vars:5,consts:[[1,"main-holder"],[1,"users-list"],[3,"markedUser"],[1,"call",3,"click"],["class","fas fa-users",4,"ngIf"],["class","fas fa-long-arrow-alt-left",4,"ngIf"],["class","select-chat",4,"ngIf","ngIfElse"],["chatIsHere",""],[1,"fas","fa-users"],[1,"fas","fa-long-arrow-alt-left"],[1,"select-chat"],[1,"pm-route"],[1,"user-info"],["alt","Loading...",3,"src"]],template:function(t,s){if(1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"app-user-list",2),e.NdJ("markedUser",function(a){return s.gotUser(a)}),e.qZA(),e.qZA(),e.TgZ(3,"div",3),e.NdJ("click",function(){return s.show(),s.iconChange=!s.iconChange}),e.YNc(4,k,1,0,"i",4),e.YNc(5,I,1,0,"i",5),e.qZA(),e.YNc(6,S,3,0,"div",6),e.YNc(7,L,6,2,"ng-template",null,7,e.W1O),e.qZA()),2&t){const i=e.MAs(8);e.xp6(1),e.Q6J("@divState",s.state),e.xp6(3),e.Q6J("ngIf",s.iconChange),e.xp6(1),e.Q6J("ngIf",!s.iconChange),e.xp6(1),e.Q6J("ngIf",s.selectChat)("ngIfElse",i)}},directives:[A,m.O5,g.lC],styles:['@import"https://fonts.googleapis.com/css2?family=Gemunu+Libre&display=swap";.main-holder[_ngcontent-%COMP%]{display:grid;grid-template-columns:20% 80%;grid-template-rows:100%;height:100%!important;background-color:var(--chat-main-background-color);color:var(--chat-color)}.users-list[_ngcontent-%COMP%]{height:100%!important;background-color:var(--chat-user-list-background-color)!important;color:var(--chat-user-list-color)!important}.pm-route[_ngcontent-%COMP%]{height:100%!important}.select-chat[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;width:100%;font-family:"Gemunu Libre",sans-serif;cursor:context-menu;background-image:url(https://icon-library.com/images/chat-icon-png/chat-icon-png-22.jpg);background-repeat:no-repeat;background-size:contain}.user-info[_ngcontent-%COMP%]{height:10%;width:100%;display:flex;align-items:center;overflow:auto;padding-left:20px;padding-right:20px}.user-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:50%;margin-right:10px}h6[_ngcontent-%COMP%]{margin:0!important}@media only screen and (max-height: 530px) and (max-width: 400px){.user-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:10vw;height:10vw}}.call[_ngcontent-%COMP%]{position:absolute;top:2px;right:20px;display:none;cursor:pointer}@media only screen and (max-width: 850px){.users-list[_ngcontent-%COMP%]{display:none}.main-holder[_ngcontent-%COMP%]{grid-template-columns:100%}.call[_ngcontent-%COMP%]{display:inline;font-size:20px;color:#b6c8a9}}@media only screen and (max-width: 300px){.call[_ngcontent-%COMP%]{font-size:7vw;right:5px}}'],data:{animation:[(0,p.X$)("divState",[(0,p.SB)("move",(0,p.oB)({display:"inline-block",position:"absolute",width:"100%",backgroundColor:"white"}))])]}}),n})(),J=(()=>{class n{scroller(t,s,i){setTimeout(()=>{t.nativeElement.scroll({top:t.nativeElement.scrollHeight,behavior:i})},1e3*s)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Y=["chatContainer"];function N(n,o){1&n&&(e.TgZ(0,"div",8),e.TgZ(1,"div",9),e._UZ(2,"span",10),e.qZA(),e.qZA())}function q(n,o){if(1&n&&(e.TgZ(0,"li",14),e._uU(1),e._UZ(2,"br"),e.qZA()),2&n){const t=o.$implicit;e.Q6J("messageOwnerId",t.from),e.xp6(1),e.hij(" ",t.message," ")}}function j(n,o){if(1&n&&(e.TgZ(0,"ul",11,12),e.YNc(2,q,3,2,"li",13),e.qZA()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",t.PrivateMessages)}}const z=[{path:"",component:F,canActivate:[M.a],children:[{path:":id",component:(()=>{class n{constructor(t,s,i){this.route=t,this.storageService=s,this.scroller=i,this.fireApp=(0,u.ZF)(h.N.firebaseConfig),this.database=(0,l.N8)(),this.activeUser=this.storageService.localActiveUser(!0)}ngOnInit(){this.loading=!0,this.route.params.subscribe(t=>{this.valueChange(t.id)})}ngAfterViewInit(){this.scroller.scroller(this.chatContainer,1,"smooth")}valueChange(t){(0,l.jM)((0,l.iH)(this.database,"users/"+this.activeUser.uid+"/pm/"+t),s=>{let i=s.val(),a=[];for(let c in i)a.push(i[c]);this.PrivateMessages=a,this.loading=!1,this.route.params.subscribe(c=>{this.scroller.scroller(this.chatContainer,0,"auto")})})}sendMessage(t){return this.storageService.sendMessage(this.activeUser.uid,this.route.snapshot.params.id,t.value),t.value="",this.scroller.scroller(this.chatContainer,.5,"auto"),!1}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.gz),e.Y36(d.V),e.Y36(J))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-chatting"]],viewQuery:function(t,s){if(1&t&&e.Gf(Y,5),2&t){let i;e.iGM(i=e.CRH())&&(s.chatContainer=i.first)}},decls:9,vars:2,consts:[[1,"messages-field-holder"],["class","d-flex justify-content-center",4,"ngIf","ngIfElse"],["chattingContainer",""],[1,"send-message-field"],["type","text","placeholder","Reply",3,"keydown.enter"],["message",""],[3,"click"],[1,"fas","fa-paper-plane"],[1,"d-flex","justify-content-center"],["role","status",1,"spinner-border","text-secondary"],[1,"sr-only"],[1,"messages"],["chatContainer",""],["me","","class","message-item",3,"messageOwnerId",4,"ngFor","ngForOf"],["me","",1,"message-item",3,"messageOwnerId"]],template:function(t,s){if(1&t){const i=e.EpF();e.TgZ(0,"div",0),e.YNc(1,N,3,0,"div",1),e.YNc(2,j,3,1,"ng-template",null,2,e.W1O),e.TgZ(4,"div",3),e.TgZ(5,"textarea",4,5),e.NdJ("keydown.enter",function(){e.CHM(i);const c=e.MAs(6);return s.sendMessage(c)}),e.qZA(),e.TgZ(7,"button",6),e.NdJ("click",function(){e.CHM(i);const c=e.MAs(6);return s.sendMessage(c)}),e._UZ(8,"i",7),e.qZA(),e.qZA(),e.qZA()}if(2&t){const i=e.MAs(3);e.xp6(1),e.Q6J("ngIf",s.loading)("ngIfElse",i)}},directives:[m.O5,m.sg,v],styles:[".messages-field-holder[_ngcontent-%COMP%]{padding-left:20px;padding-right:20px;height:83%;width:100%}.messages[_ngcontent-%COMP%]{padding:0!important;display:flex;flex-direction:column;width:100%;height:94%;overflow:auto;margin:0!important}[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.message-item[_ngcontent-%COMP%]{list-style-type:none;background-color:#b1b1b1;margin-bottom:10px;padding:7px 15px 7px 7px;border-radius:5px;color:#fff;font-weight:400;width:auto;align-self:flex-start!important;display:inline;word-break:break-all}.me[_ngcontent-%COMP%]{align-self:flex-end!important;text-align:right!important;padding:7px 7px 7px 15px;background-color:#ed3a2e}.this[_ngcontent-%COMP%]{border-radius:15px 15px 15px 0}.thisMe[_ngcontent-%COMP%]{border-radius:15px 15px 0}.send-message-field[_ngcontent-%COMP%]{background-color:var(--chat-send-message-field);height:13%;width:100%;display:flex;align-items:center;justify-content:center;border-top:10px solid var(--chat-send-message-field);border-bottom:10px solid var(--chat-send-message-field)}.send-message-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border:none;background-color:#f5f1f2;width:90%;height:100%;padding:10px 30px;resize:none}.send-message-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{outline:none}.send-message-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;width:10%;height:100%}.send-message-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:silver}@media only screen and (max-width: 720px){.send-message-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:2vw;height:100%}.send-message-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{padding-left:40px}}@media only screen and (max-width: 270px){.send-message-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{padding-left:10px}}@media only screen and (max-height: 666px){.messages[_ngcontent-%COMP%]{margin-bottom:10px}.send-message-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{padding:2vh 6vh;font-size:2.5vh;height:100%}}"]}),n})()}]}];let E=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[g.Bz.forChild(z)],g.Bz]}),n})(),H=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[m.ez,_.u5,E,x]]}),n})()}}]);