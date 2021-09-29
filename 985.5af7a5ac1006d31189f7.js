"use strict";(self.webpackChunkmessenger=self.webpackChunkmessenger||[]).push([[985],{4985:(J,h,c)=>{c.r(h),c.d(h,{HomeModule:()=>S});var g=c(8583),d=c(5528),_=c(5639),p=c(2340),u=c(2329),f=c(3128),t=c(639),v=c(384),m=c(6945);let C=(()=>{class n{constructor(e,o){this.authService=e,this.storageService=o}logout(){this.authService.logout()}ngOnInit(){this.your=this.storageService.localActiveUser(!0)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(v.e),t.Y36(m.V))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-user"]],decls:9,vars:2,consts:[[1,"user-holder"],[1,"leave"],[1,"fas","fa-sign-out-alt",3,"click"],[1,"img-holder"],[1,"img-sits-here"],[3,"src"],[1,"name-holder"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"i",2),t.NdJ("click",function(){return o.logout()}),t.qZA(),t.qZA(),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t._UZ(5,"img",5),t.qZA(),t.qZA(),t.TgZ(6,"div",6),t.TgZ(7,"h1"),t._uU(8),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(5),t.Q6J("src",o.your.img,t.LSH),t.xp6(3),t.Oqu(o.your.name))},styles:['@import"https://fonts.googleapis.com/css2?family=Slabo+27px&display=swap";.user-holder[_ngcontent-%COMP%]{width:100%;height:30%;display:flex;align-items:center;justify-content:center;background:linear-gradient(90deg,rgba(2,0,36,.6449930313922444) 0%,rgba(9,9,121,.692612079011292) 35%,rgba(0,212,255,.7654412106639531) 100%)}.img-holder[_ngcontent-%COMP%]{width:40%;height:100%;display:flex;justify-content:center;align-items:center}.img-sits-here[_ngcontent-%COMP%]{width:40%;height:80%;overflow:hidden;border-radius:40%;padding:0;border:5px solid rgba(255,255,255,.849)}.img-sits-here[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;padding:0;object-fit:cover;object-position:20% 10%;border-radius:40%;border:5px solid rgba(177,138,248,.858)}.leave[_ngcontent-%COMP%]{width:30%;height:100%;display:flex;justify-content:flex-start;align-items:center}.leave[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-left:10px;font-size:5vw;transform:rotate(180deg);color:#fff}.leave[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{cursor:pointer;color:#a7a6a2}.name-holder[_ngcontent-%COMP%]{width:30%;height:100%;display:flex;justify-content:center;align-items:center;cursor:context-menu}.name-holder[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:"Slabo 27px",serif;font-size:3vw;color:azure}@media only screen and (max-width: 450px){.img-sits-here[_ngcontent-%COMP%]{width:80%}}@media only screen and (max-width: 200px){.img-sits-here[_ngcontent-%COMP%]{width:100%}.img-sits-here[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border:none}}']}),n})();const x=function(n){return[n]};function O(n,s){if(1&n&&t._UZ(0,"li",2),2&n){const e=s.$implicit;t.Tol(e.last),t.Q6J("routerLink",t.VKq(6,x,e.route))("routerLinkActiveOptions",e.routeActOpt)("routerLinkActive",t.VKq(8,x,e.actClass))("innerHTML",e.icon,t.oJD)}}let M=(()=>{class n{constructor(){this.navigation=[{route:"./",routeActOpt:{exact:!0},actClass:"active",icon:'<i class="fas fa-newspaper" ></i>',last:""},{route:"users",routeActOpt:"",actClass:"active",icon:'<i class="fas fa-user-friends"></i>',last:""},{route:"/chat",routeActOpt:"",actClass:"active",icon:'<i class="far fa-comment-alt"></i>',last:"last"}]}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-nav"]],decls:2,vars:1,consts:[[1,"navHome"],[3,"class","routerLink","routerLinkActiveOptions","routerLinkActive","innerHTML",4,"ngFor","ngForOf"],[3,"routerLink","routerLinkActiveOptions","routerLinkActive","innerHTML"]],template:function(e,o){1&e&&(t.TgZ(0,"nav",0),t.YNc(1,O,1,10,"li",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",o.navigation))},directives:[g.sg,d.rH,d.Od],styles:["ul[_ngcontent-%COMP%]{margin:0;padding:0}.navHome[_ngcontent-%COMP%]{width:100%;height:5%;display:flex;justify-content:center;margin-top:2px;margin-bottom:30px;box-shadow:#091e4240 0 4px 8px -2px,#091e4214 0 0 0 1px;background-color:#fff;top:10%}.navHome[_ngcontent-%COMP%]   .last[_ngcontent-%COMP%]{background-color:#7da0ff}li[_ngcontent-%COMP%]{list-style-type:none;width:50%;height:100%;display:flex;justify-content:center;align-items:center;cursor:pointer}.active[_ngcontent-%COMP%]{background-color:wheat}@media only screen and (max-height: 386px){li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:3vh}}"]}),n})(),P=(()=>{class n{constructor(){this.fireApp=(0,u.ZF)(p.N.firebaseConfig),this.Auth=(0,f.v0)()}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],decls:3,vars:0,template:function(e,o){1&e&&(t._UZ(0,"app-user"),t._UZ(1,"app-nav"),t._UZ(2,"router-outlet"))},directives:[C,M,d.lC],styles:[""]}),n})();class y{constructor(s,e,o,i,r){this.author=s,this.authorUid=e,this.img=o,this.text=i,this.likes=r}}var l=c(4963);const w=["input"];function Z(n,s){1&n&&(t.TgZ(0,"div",7),t.TgZ(1,"div",8),t._UZ(2,"span",9),t.qZA(),t.qZA())}const b=function(n,s){return{liked:n,notLiked:s}};function A(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",12),t.TgZ(1,"div",13),t.TgZ(2,"img",14),t.NdJ("click",function(i){const a=t.CHM(e).$implicit;return t.oxw(2).textHim(a.post.authorUid,i)}),t.qZA(),t.qZA(),t.TgZ(3,"div",15),t.TgZ(4,"div",16),t.TgZ(5,"h3"),t._uU(6),t.qZA(),t.qZA(),t.TgZ(7,"div",17),t.NdJ("click",function(){const r=t.CHM(e).$implicit;return t.oxw(2).giveLike(r.key)}),t.TgZ(8,"div",18,19),t.TgZ(10,"p"),t._uU(11),t.qZA(),t.qZA(),t.TgZ(12,"div",20),t.TgZ(13,"p"),t._uU(14),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=s.$implicit;t.xp6(2),t.Q6J("src",e.post.img,t.LSH),t.xp6(4),t.Oqu(e.post.text),t.xp6(2),t.Q6J("ngClass",t.WLB(5,b,e.liked,!e.liked)),t.xp6(3),t.Oqu(e.liked?"Unlike":"Like"),t.xp6(3),t.Oqu(e.post.likes.num)}}function k(n,s){if(1&n&&(t.TgZ(0,"div",10),t.YNc(1,A,15,8,"div",11),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.postsArr)}}let T=(()=>{class n{constructor(e,o){this.storageService=e,this.router=o,this.fireApp=(0,u.ZF)(p.N.firebaseConfig),this.database=(0,l.N8)(),this.dbRef=(0,l.iH)(this.database),this.postsArr=[],this.currentUser=this.storageService.localActiveUser(!0),this.loading=!1}ngOnInit(){this.loading=!0,this.getPosts()}addPost(e){if(e){const o=new y(this.currentUser.name,this.storageService.localActiveUser(!0).uid,this.currentUser.img,e,{num:0,auth:["user"]});this.postsArr.unshift(o),this.storageService.saveAndPost(o),this.inputEl.nativeElement.value=""}}textHim(e,o){return e!==this.storageService.localActiveUser(!0).uid&&this.router.navigate(["chat",e])}getPosts(){(0,l.jM)((0,l.iH)(this.database,"posts"),e=>{const o=e.val();let i=[];for(let r in o)i.push({post:o[r].post,key:r,liked:o[r].post.likes.auth.find(a=>a===this.currentUser.uid)});i.reverse(),this.postsArr=i,this.loading=!1})}giveLike(e){(0,l.i3)((0,l.iH)(this.database,`posts/${e}`),o=>{if(o&&o.post.likes.num>=0)if(o.post.likes.auth.find(r=>r===this.currentUser.uid)){o.post.likes.num--;let r=o.post.likes.auth.filter(a=>a!==this.currentUser.uid);o.post.likes.auth=r}else o.post.likes.num++,o.post.likes.auth.push(this.currentUser.uid);return o})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.V),t.Y36(d.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-posts"]],viewQuery:function(e,o){if(1&e&&t.Gf(w,5),2&e){let i;t.iGM(i=t.CRH())&&(o.inputEl=i.first)}},decls:9,vars:2,consts:[[1,"post-holder"],[1,"post-writer"],["maxlength","300","type","text","placeholder","Post"],["input",""],[3,"click"],["class","d-flex justify-content-center mt-3",4,"ngIf","ngIfElse"],["postsContainer",""],[1,"d-flex","justify-content-center","mt-3"],["role","status",1,"spinner-border","text-secondary"],[1,"sr-only"],[1,"posts"],["class","post",4,"ngFor","ngForOf"],[1,"post"],[1,"person"],[3,"src","click"],[1,"post-content"],[1,"text-content"],[1,"like-holder",3,"click"],[1,"like",3,"ngClass"],["like",""],[1,"likes"]],template:function(e,o){if(1&e){const i=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._UZ(2,"textarea",2,3),t.TgZ(4,"button",4),t.NdJ("click",function(){t.CHM(i);const a=t.MAs(3);return o.addPost(a.value)}),t._uU(5,"POST"),t.qZA(),t.qZA(),t.YNc(6,Z,3,0,"div",5),t.YNc(7,k,2,1,"ng-template",null,6,t.W1O),t.qZA()}if(2&e){const i=t.MAs(8);t.xp6(6),t.Q6J("ngIf",o.loading)("ngIfElse",i)}},directives:[g.O5,g.sg,g.mk],styles:['@import"https://fonts.googleapis.com/css2?family=Prompt&display=swap";.post-holder[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;align-items:center;background-color:var(--posts-background)}.post-writer[_ngcontent-%COMP%]{width:50%;height:20%;display:flex;justify-content:center;align-items:center;flex-direction:column}.post-writer[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:90%;height:80%;padding:10px;border:none;border-top:2px solid rgba(126,40,206,.301);resize:none}.post-writer[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{outline:none;border-top:2px solid rgba(126,40,206,.7)}.post-writer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:90%;height:20%;border:none;background-color:#3657eb;font-size:85%;color:#faebd7;font-family:"Prompt",sans-serif;display:flex;justify-content:center;align-items:center;padding:0;overflow:hidden}.post-writer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#3657ebb3}.posts[_ngcontent-%COMP%]{height:70%;width:100%;display:flex;align-items:center;margin-top:20px;margin-bottom:20px;overflow:auto;flex-direction:column}.post[_ngcontent-%COMP%]{height:40vh;width:55%;box-shadow:#32325d40 0 2px 5px -1px,#0000004d 0 1px 3px -1px;display:flex;justify-content:center;align-items:center;margin-top:20px}.person[_ngcontent-%COMP%]{width:30%;height:100%}.person[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;cursor:pointer}.post-content[_ngcontent-%COMP%]{width:70%;height:100%;display:flex;justify-content:space-between;align-items:center;flex-direction:column;font-size:90%}.text-content[_ngcontent-%COMP%]{width:100%;height:65%;padding:10px;overflow:auto}[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.like-holder[_ngcontent-%COMP%]{width:100%;font-weight:bold;height:20%;display:flex;justify-content:center;align-items:center;box-shadow:#091e4240 0 1px 1px,#091e4221 0 0 1px 1px}.like[_ngcontent-%COMP%]{width:80%;height:100%;display:flex;justify-content:center;align-items:center;cursor:pointer;font-family:"Prompt",sans-serif;color:#259fd8}.like[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding:0}.likes[_ngcontent-%COMP%]{box-shadow:#00000029 0 1px 4px;width:20%;height:100%;display:flex;justify-content:center;align-items:center;font-size:90%;padding:5px;overflow:hidden;font-family:"Prompt",sans-serif}.likes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding:0;cursor:context-menu}@media only screen and (max-width: 500px){.likes[_ngcontent-%COMP%]{width:20%}}']}),n})();var U=c(1841);function H(n,s){1&n&&(t.TgZ(0,"div",2),t.TgZ(1,"div",3),t._UZ(2,"span",4),t.qZA(),t.qZA())}function q(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",9),t._UZ(1,"img",10),t.TgZ(2,"div",11),t.TgZ(3,"h2"),t._uU(4),t.qZA(),t.qZA(),t.TgZ(5,"div",12),t.TgZ(6,"button",13),t.NdJ("click",function(){const r=t.CHM(e).$implicit;return t.oxw(2).route(r.id)}),t._UZ(7,"i",14),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=s.$implicit;t.xp6(1),t.Q6J("src",e.img,t.LSH),t.xp6(3),t.Oqu(e.name)}}function j(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",5),t.TgZ(1,"div",6),t.TgZ(2,"input",7),t.NdJ("input",function(i){return t.CHM(e),t.oxw().search(i)})("change",function(i){return t.CHM(e),t.oxw().search(i)}),t.qZA(),t.qZA(),t.YNc(3,q,8,2,"div",8),t.qZA()}if(2&n){const e=t.oxw();t.xp6(3),t.Q6J("ngForOf",e.registratedUsers)}}const L=[{path:"",component:P,canActivate:[_.a],children:[{path:"",component:T},{path:"users",component:(()=>{class n{constructor(e,o,i){this.router=e,this.storageService=o,this.http=i,this.fireApp=(0,u.ZF)(p.N.firebaseConfig),this.database=(0,l.N8)(),this.Auth=(0,f.v0)(),this.currentUser=this.storageService.localActiveUser(!0)}ngOnInit(){this.loading=!0,(0,l.jM)((0,l.iH)(this.database,"users"),e=>{const o=[];for(let i in e.val())i!==this.currentUser.uid&&(o.push({name:e.val()[i].name,img:e.val()[i].img,reg:e.val()[i].regTime,id:i}),this.sorting(o));this.loading=!1,this.regUsers=o,this.registratedUsers=o})}route(e){this.router.navigate(["/chat",e])}sorting(e){e.sort((o,i)=>{let r=o.reg,a=i.reg;return r===a?0:r>a?-1:1})}search(e){this.registratedUsers=this.regUsers.filter(i=>i.name.toLowerCase().includes(e.target.value.toLowerCase()))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d.F0),t.Y36(m.V),t.Y36(U.eN))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-users"]],decls:3,vars:2,consts:[["class","d-flex justify-content-center",4,"ngIf","ngIfElse"],["usersBlock",""],[1,"d-flex","justify-content-center"],["role","status",1,"spinner-border","text-secondary"],[1,"sr-only"],[1,"cards-holder"],[1,"search"],["type","text","placeholder","Search",3,"input","change"],["class","registrated-user",4,"ngFor","ngForOf"],[1,"registrated-user"],[3,"src"],[1,"text"],[1,"button"],[3,"click"],[1,"far","fa-comments"]],template:function(e,o){if(1&e&&(t.YNc(0,H,3,0,"div",0),t.YNc(1,j,4,1,"ng-template",null,1,t.W1O)),2&e){const i=t.MAs(2);t.Q6J("ngIf",o.loading)("ngIfElse",i)}},directives:[g.O5,g.sg],styles:['@import"https://fonts.googleapis.com/css?family=Montserrat:400,400i,700";@import"https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap";.cards-holder[_ngcontent-%COMP%]{display:flex;width:100%;flex-wrap:wrap;justify-content:center;padding-right:50px;padding-left:50px;padding-bottom:50px;margin-top:5px;background-color:var(--users-cards-holder-background-color)}.registrated-user[_ngcontent-%COMP%]{width:50vw;height:20vh;box-shadow:#32325d40 0 6px 12px -2px,#0000004d 0 3px 7px -3px;border-radius:20px;display:flex;margin-bottom:20px;overflow:hidden;align-items:center;justify-content:space-between}.registrated-user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30%;height:100%;box-shadow:#3c40434d 0 1px 2px,#3c404326 0 1px 3px 1px}.registrated-user[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-family:"ZCOOL KuaiLe",cursive;width:2vw;margin:0!important;display:flex;width:55%;justify-content:center;align-items:center;word-break:break-all;cursor:context-menu;color:var(--users-registrated-user-text-color)}.registrated-user[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center;width:15%;box-shadow:#3c40434d 0 1px 2px,#3c404326 0 1px 3px 1px}.registrated-user[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:100%;border:none;width:100%;font-size:5vw;background-color:var(--users-registrated-user-background-color);color:var(--users-registrated-user-color)}.registrated-user[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{background-color:#71c0f5;color:#fff}.search[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;margin-bottom:20px;margin-top:20px}.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;border-bottom:2px solid grey;padding:5px;background-color:transparent;width:50%;color:var(--searchInputColor)}.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none;border-bottom:2px solid rgb(175,52,247)}@media only screen and (max-width: 700px){.registrated-user[_ngcontent-%COMP%]{width:70vw}}@media only screen and (max-width: 430px){.registrated-user[_ngcontent-%COMP%]{width:100vw}.cards-holder[_ngcontent-%COMP%]{padding:20px}}@media only screen and (max-width: 200px){.registrated-user[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{display:none}.registrated-user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80%}.registrated-user[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{width:20%}}']}),n})()}]}];let N=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[d.Bz.forChild(L)],d.Bz]}),n})(),S=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.ez,N]]}),n})()}}]);