(function(){"use strict";var e={1678:function(e,t,n){var r=n(5471),o=n(8505),a=n(5972),i=n(980),s=n(7954),l=n(2137),c=function(){var e=this,t=e._self._c;return t(o.A,[t(a.A,{attrs:{app:"",color:"white",dark:""}},[t("div",{staticClass:"d-flex align-center"},[t(i.A,{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:e.logoUrl,transition:"scale-transition",width:"140"}})],1),t(l.A)],1),t(s.A,[t("router-view")],1)],1)},u=[],g={name:"App",data:()=>({logoUrl:n(3153)})},h=g,d=n(1656),p=(0,d.A)(h,c,u,!1,null,null,null),m=p.exports,f=n(792);r.Ay.use(f.A);var x,v,A=new f.A({}),w=n(173),z=n(6521),b=n(8450),_=n(8834),y=n(5961),k=n(4510),D=n(2424),N=n(9509),O=n(9456),T=function(){var e=this,t=e._self._c;return t(o.A,[t(b.A,{staticClass:"mx-auto",attrs:{"max-width":"400"}},[t(y.A,{attrs:{"hide-delimiters":"","show-arrows":!1,height:"700px",cycle:"",interval:3e3}},e._l(e.items,(function(n,r){return t(k.A,{key:r,attrs:{src:n.src,height:"200px","reverse-transition":"fade-transition",transition:"fade-transition"}},[t(_.ri,{staticClass:"white--text",staticStyle:{position:"absolute",top:"80px","font-size":"40px","font-family":"'Arial Black', sans-serif","text-shadow":"2px 2px 4px #000"}},[e._v(" "+e._s(n.text)+" ")])],1)})),1),t("br"),t("br"),t(_.SL,{staticClass:"d-flex justify-end"},[t("div",[t(z.A,{attrs:{"x-large":"",icon:"",text:"",color:"orange"},on:{click:e.openDialog}},[e._v(" Next "),t(O.A,[e._v("mdi-chevron-right")])],1)],1)]),t("br")],1),t(N.A,{attrs:{"max-width":"400"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(b.A,[t(_.ri,{staticClass:"headline"},[e._v("確認操作")]),t(_.OQ,[t(D.A,{attrs:{"input-value":!!e.agreed||!e.Noagreed&&null,label:"我同意幸福下去"},on:{change:function(t){return e.handleAgreementChange("agree")}},model:{value:e.agreed,callback:function(t){e.agreed=t},expression:"agreed"}}),t(D.A,{attrs:{"input-value":!!e.Noagreed||!e.agreed&&null,label:"不同意幸福"},on:{change:function(t){return e.handleAgreementChange("disagree")}},model:{value:e.Noagreed,callback:function(t){e.Noagreed=t},expression:"Noagreed"}})],1),t(_.SL,[t(l.A),t(z.A,{attrs:{color:"green darken-1",text:""},on:{click:e.confirmAgreement}},[e._v("確認")])],1)],1)],1),t(N.A,{attrs:{"max-width":"400"},model:{value:e.disagreeDialog,callback:function(t){e.disagreeDialog=t},expression:"disagreeDialog"}},[t(b.A,[t(_.ri,{staticClass:"headline"},[e._v("提示")]),t(_.OQ,[e._v(" 妳只能同意 夠霸道嗎 ")]),t(_.SL,[t(l.A),t(z.A,{attrs:{color:"red darken-1",text:""},on:{click:e.closeDisagreeDialog}},[e._v("確認")])],1)],1)],1)],1)},Z=[],C=(n(4114),{data(){return{items:[{src:"https://lh3.googleusercontent.com/pw/AP1GczMxG94Ty-ZZqRUtDQokuQbFAArAXV-aBLXxjaW9Ew_cFuhTPbzeRLWj1v1G6YXK7_mdAVp3ItaJg69YZ-4I6gy2s57QJtEcOR34IZhcbRo6IwnEmH897a4EbXlS0-zfS0MR8kktzObi4FW_Hg5pY0JB=w1950-h1462-s-no-gm?authuser=0",text:"想和妳一直走下去"},{src:"https://lh3.googleusercontent.com/pw/AP1GczPI0tyXdaY1IcrDhgw9Rr1e6INBGBf1QRDE-HOZ_Jwws7ZwedhRNoOYbwwngBZ9gKRGgc01mt5CsBDJI-V6L89ziHpdH5abwrw1p6QzvpshYbQYoBd9dClckI31dfOrzUesjRkvuhzbs3fLGeVjIZB8=w1479-h1109-s-no-gm?authuser=0",text:"去所有想去的地方"},{src:"https://lh3.googleusercontent.com/pw/AP1GczMbDeCiTYAhypLeunBXeR18egZiuYChUriZqT_MFqqwcxU7XWfwIoeZUzgn_YasRi7lqsLT-3YQXFHURDd_1jBRo2kaZZT8oUqN4rI8BvUdaX-CiiBc1B5rkxZV5NL4rIXc6miuXES_zHBBcZVdsU4E=w1096-h1462-s-no-gm?authuser=0",text:"養一堆可愛大狗狗"},{src:"https://lh3.googleusercontent.com/pw/AP1GczMa8vpfkgH7xv9y-R8hVWo8qjcFgDeGTPPcGNQLIAP1j9d-ExP7YGeem8SaFIBu-TIdaJdDQaz74njNxEfDB4tkmGfJBZ5RrL4RNFryJpTob_m73a4_G1FFroB8nl3q60DFeeIipATj0sceTFOokGAY=w1096-h1462-s-no-gm?authuser=0",text:"吃遍所有的美食"},{src:"https://lh3.googleusercontent.com/pw/AP1GczOGeYdIs9U1yutiCp_K18aRXAU7O4gt1EHZUThdQSR0-sAzDDPZ0z6OMcmak-yspfCJ09XfV-t8yeMnuKQex8zQcaQTwy47rwsHQU2eU8H2j6ecKEJvWFyLfEmzqgM_6LYhlHNyXDetGwYs-yQpeR0a=w1102-h1462-s-no-gm?authuser=0",text:"快快樂樂的過每一天"}],dialog:!1,disagreeDialog:!1,agreed:!1,Noagreed:!1}},methods:{openDialog(){this.dialog=!0},handleAgreementChange(e){"agree"===e?this.Noagreed=!1:"disagree"===e&&(this.agreed=!1,this.dialog=!1,this.disagreeDialog=!0)},confirmAgreement(){this.agreed?(this.dialog=!1,this.$router.push("/about")):alert('請先勾選 "我同意"')},closeDisagreeDialog(){this.disagreeDialog=!1,this.dialog=!0}}}),G=C,P=(0,d.A)(G,T,Z,!1,null,null,null),I=P.exports,M=function(){var e=this,t=e._self._c;return t(o.A,[t("div",{staticClass:"lucky-draw",attrs:{id:"app"}},[t("div",{staticClass:"lucky-draw-container"},[t("h1",{staticClass:"title"},[e._v("運氣拚輸贏")]),t("div",{staticClass:"prize-grid"},e._l(e.items,(function(n,r){return t("div",{key:r,class:["prize-item",{active:e.activeIndex===n.index}],attrs:{"data-index":n.index}},[t("div",{staticClass:"prize-content"},[n.img?t("img",{attrs:{src:n.img,alt:n.name}}):e._e()])])})),0),t("div",{staticClass:"control-area"},[t(z.A,{attrs:{color:"deep-orange",dark:"",rounded:"",elevation:"2"},on:{click:e.run}},[e._v("開始抽獎")])],1)]),t(N.A,{attrs:{"max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(b.A,[t(_.ri,{staticClass:"headline"},[e._v("恭喜曾小姐！")]),t(_.OQ,[t("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[t("div",[e._v(" 獲得了"),t("strong",[e._v(e._s(e.prizeName))])]),t("img",{staticStyle:{"margin-left":"15px","border-radius":"8px"},attrs:{width:"100px",height:"150px",src:"https://lh3.googleusercontent.com/pw/AP1GczOpVS7gekLhywMXd_D4Sxh-DRg4HeK1dmlmxdKOboxEWozoI_ygkpYE_A-izCh1gUZcMt3PtXjDPzIzRrx1zaljvqrMkSc9YvNYx2sYWzWhNQsztZCxnx5dsqS8AZ-iWVo2JyPbc2BWS3WMWBvLzZVt=w822-h1460-s-no-gm?authuser=0",alt:"prize image"}})])]),t(_.SL,[t(l.A),t(z.A,{attrs:{color:"black",text:""},on:{click:function(t){return e.backhome()}}},[e._v("確認")])],1)],1)],1)],1)])},q=[],U={data(){return{items:[{index:1,img:"https://lh3.googleusercontent.com/pw/AP1GczMKfCk2Hc8DMmuooeM_DdcqQkf7ZHzxiYab1it130TIKMZH6_Hijh6ToIT6_2JL2HbD1cTRU3vnJwykhErutlbkdl9C72eX7WsCEoNoM9CL7EDNptJUrL3nO0XUJ9kz4HSt7hSCfjanWFk2qMC8HUKs=w822-h1460-s-no-gm?authuser=0",name:""},{index:2,img:"https://lh3.googleusercontent.com/pw/AP1GczNOTGMagoea_OJ7cx8HOUdhlN1gCryt8vxPb0dqiF6TeXuzsXqkhvZWD49m6f748lHGlisUDLP2J0eOxOTn81YV_Apz7Fw4fY_GrQbqB4ZAGYywIc4l0F0khZfAp7s81_by0TjL_80dMjYBKhfEacHq=w822-h1460-s-no-gm?authuser=0",name:""},{index:3,img:"https://lh3.googleusercontent.com/pw/AP1GczMq37yzyubhScoCkfyw-cp-SGNRFCON0eMr1UI-5KuloC4OCPdaDTpZIlL6Cvqq9hPbd20PlAfGrQzN6ON0x07DR1QqxmBDwFxxqppGy0TjphqLfExMVXr_vqlg65ZeMpiP7V9tpLXsL9LuxTwI82Z_=w822-h1460-s-no-gm?authuser=0",name:""},{index:4,img:"https://lh3.googleusercontent.com/pw/AP1GczNozy0Y_tG1AywmLkZVWqSD4qDljqn_Zr0u5l9FQE5xoT01-S8OlUpr99drycuYGqWJpa91DgxOPaqQzy8C-dzgSSCZZq_HuHJNHbz7ghQvaOklj72kzrb4iTYIzD1cBZDEb4973PcWh4Z3jf0jjpb7=w822-h1460-s-no-gm?authuser=0",name:""},{index:5,img:"https://lh3.googleusercontent.com/pw/AP1GczOpVS7gekLhywMXd_D4Sxh-DRg4HeK1dmlmxdKOboxEWozoI_ygkpYE_A-izCh1gUZcMt3PtXjDPzIzRrx1zaljvqrMkSc9YvNYx2sYWzWhNQsztZCxnx5dsqS8AZ-iWVo2JyPbc2BWS3WMWBvLzZVt=w822-h1460-s-no-gm?authuser=0",name:"日本來回機票"},{index:6,img:"https://lh3.googleusercontent.com/pw/AP1GczNJno_wgGl11XoPX4KdGqd4bxshD_vj5zOzU3TVgLplq10B7yJMYQgSfhe18VJrHAcnRG2nLuxaQYx2_zeQJE-AKLNPhiWrZnqVPuuWEaHt7IM-HhubeGF-VUZPF6pz6PLnyZMz-ww7A9WgW9qH03AF=w822-h1460-s-no-gm?authuser=0",name:""},{index:7,img:"https://lh3.googleusercontent.com/pw/AP1GczN1cpgGR97GXpXUgZk45gR8xkruNT_vzEWx3Dl-3eHly8c47gambGmQTGpXbc4WNvcAyl1YqFy5gveWZxA1fcKVrgIAg7UlzalAXeT8qqUdx08zbVXLNqqe57Rlk7ZD1mYRjzEZ4l3GXFVHTFvZFQJQ=w822-h1460-s-no-gm?authuser=0",name:""},{index:8,img:"https://lh3.googleusercontent.com/pw/AP1GczM1gx5S1CaT1pjbeBXMQWbFAIkqj6MfGSHrM5uE_w7iJ6vIeknFrtc06-0RZYYOXARDTqanJnH3kWO-rmF6ehrgQFJz7A7J9qkpCWCkCkcVpQyjhnVUEQojzAbE2X1e-dvTl40eWJAaRD3Y4bSu7Z-E=w822-h1460-s-no-gm?authuser=0",name:""},{index:9,img:"https://lh3.googleusercontent.com/pw/AP1GczNr3aeh_eNvZv_s_w8ldMtRTgcSRlVExQTl9ZQyjt7I9CfvJYrym1bq0uKuwOdH1QeLvIuYFyR1svTk5DBbsdro141ffneFqm9xkPNWJCAOzB0XKnlpelWV3duRQc5rmVumfNeG0FT6rXksv6a9ctYa=w822-h1460-s-no-gm?authuser=0",name:""}],activeIndex:1,prize:"",prizeName:"",dialog:!1,LOOP_NUM:5,UNIT_NUM:8,DURATION:6e3,start:0,end:0}},methods:{backhome(){this.dialog=!1,this.$router.push("/")},move(e){e%=this.UNIT_NUM,this.activeIndex=e+1},run(){let e=new Date;this.start=this.start%this.UNIT_NUM,this.end=4+this.LOOP_NUM*this.UNIT_NUM,this.prize=5;let t=setInterval((()=>{let n=new Date,r=n.getTime()-e.getTime(),o=r/this.DURATION;o=1-Math.pow(1-o,1.4),r>=this.DURATION&&(clearInterval(t),o=1,this.prizeName=this.items[this.prize-1].name,this.dialog=!0),this.start=Math.floor(this.end*o),this.move(this.start)}),1e3/60)}}},j=U,R=(0,d.A)(j,M,q,!1,null,"c3a47ad2",null),Y=R.exports,Q={},S=(0,d.A)(Q,x,v,!1,null,null,null),L=S.exports;r.Ay.use(w.A);const W=[{path:"/",name:"Home",component:I},{path:"/about",name:"About",component:Y},{path:"/user",name:"User",component:L}],H=new w.A({mode:"hash",routes:W});var X=H;r.Ay.config.productionTip=!1,new r.Ay({vuetify:A,router:X,render:e=>e(m)}).$mount("#app")},3153:function(e,t,n){e.exports=n.p+"img/logo.4d3e774b.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],a=e[u][2];for(var s=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/testvue2/"}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],s=r[1],l=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var u=l(n)}for(t&&t(r);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},r=self["webpackChunkbirthday_project"]=self["webpackChunkbirthday_project"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(1678)}));r=n.O(r)})();
//# sourceMappingURL=app.4087c795.js.map