const EFN = new Map([
 [1112305322,async function t(n){}],
 [57643803,async function t(n){}],
 [30357034,async function t(n){}],
 [1850647022,async function l(t){this.fnPre(t),await this.usePI("fluentref",{latest:!0});let i=EPI.fluentref;t.t1=this.vmIv(t.t1);let f;t.t1?f=i.filter(e=>e.type==="o"&&e.cat===t.t1):f=i.filter(e=>e.type==="o"),this.fnPost(t,f,85)}],
 [3393422804,async function t(n){}],
 [3038173567,async function a(t){console.log({nav:1,s:t}),EE.pim.aIcons(),EE.elFo(t);let i=EE.de(t,1,5,.7,.1),c=EE.sizer(t.s,1,5,32,10),n=this.vmIv(t.t1),o=`i${this.id}_s0_2706198880`,e=document.getElementById(o);if(!e)return this.opErr(t,"cannot find footer section");e.style.display="flex",e.style.justifyContent="space-between",e.style.alignItems="center",e.style.flexDirection="row",e.style.paddingBottom="10px";let s=`
  .e${t.o} {
    display:flex;
    font-family: Arial;
    flex-direction:column;
    align-items:center;
    color: var(--nav-color);
    background-color:  var(--nav-background);
    margin-left: 10px;
    margin-right: 10px;
    padding: 5px;
  }
  `;EE.rec(t,s),this.st.lastel!==3038173567&&(e.innerHTML=""),t.bc&&(e.style.backgroundColor=t.bc);let l=this.rict(t.i1);t.html=`<div class="${i.cl}" style="${i.sty}${i.fs}" 
  onclick="EE.E['${this.id}'].goto(${t.fc})">
  <div>${EE.icfy(l,c)}</div>
  <div>${n}</div></div>`;let r=this.st.targetsec;this.st.targetsec=o,this.out(t),this.st.targetsec=r}
],
 [666966202,async function n(e){let o=window.location.host;console.log({value:o}),o!=="engagedev"&&!o.endsWith(".engage.run")&&(console.log("NOT AUTHORIZED"),this.st.halt=!0),console.log("AUTHORIZED")}
],
 [3422056671,async function o(t){console.log("string literal"),console.log({s:t});let s=this.st.noreplace?t.t1:this.vmIv(t.t1);this.st.noreplace=!1,this.st.val=[[s,17]],this.vmAss()}
],
 [2953359897,async function t({t1:n}){return"<div></div>"}
],
 [2109251500,async function t({t1:n}){return"<div></div>"}
],
 [1561187204,async function t({t1:n}){return"<div></div>"}
],
 [570177393,async function o(t){let n=this.fnPre(t);console.log({vr:n}),this.fnPost(t,typeof n.v=="string",49)}],
 [1949159049,async function u(t){let n=EE.de(t,1,6,16,2),o=EE.sizer(t.s,1,6,10,2),a=EE.sizer(t.s,1,6,150,25),f=this.dinp(t),i="";t.t1&&(i=this.vmIv(t.t1));let e="text";t.password?(e="password",i===""&&(i="Password")):t.email?(e="email",i===""&&(i="email address")):t.phone?(e="tel",i===""&&(i="phone number")):t.date?e="date":t.time&&(e="time");let s=t.pill?"border-radius: 999px;":"",l="";t.V1&&(l=this.vmGv(t.V1),l===null&&(l=""));let d=`
  :root {
    --text-font: Arial;
  }
  .e${t.o} {
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .e${t.o}-input {
    font-family: var(--text-font,Arial);
    border:none;
    border: 1px solid #333;
    background-color: white;
    border-radius:0.25rem;
    min-width: 200px;
  }
  `;EE.rec(t,d);let r=t.clear?`clear: "${t.id}-input",`:"",c=this.st.var[0]?this.st.var[0]:"result",p=t.vto;if(t.html=`
    <div class="${n.cl}" style="width:100%; align-text:center">
    <input id="${t.id}-input" class="${n.cl}-input" 
        placeholder="${i}"
        value="${l}" 
        style="box-sizing: border-box;font-size: ${n.sz}px; padding: ${o}px;min-width:${a}px;${s};${n.sty}"
        onchange="EE.E['${this.id}'].input({ ${r}vn: '${c}',vto:${p},value : this.value})" 
        type='${e}'></input>
    </div>`,this.out(t),this.st.wait){let h=function(){this.st.halt=!1,this.exe()};document.getElementById(t.id+"-input").addEventListener("change",h.bind(this)),this.st.halt=!0,this.st.wait=!1,console.log("wait input forced halt")}}
],
 [950757249,async function n(t){let c=t.c===1?t.t1:this.vmGv(t.V1);EE.SRC[t.n1]=c}
],
 [4058971069,async function t(e){return typeof e=="boolean"}],
 [48232400,async function r(e){console.log("use.stripe - here...");let t=`${e.local?"https://engagedev/ops/use.stripe/plugin/distribution":"https://xpec.run/use"}/use.${e.o}.js`;console.log({s:e,url:t});try{if(e.nowait){import(t).then(async i=>{EE.PI.set(e.o,i.default),EE.E[this.id].PII.stripe=new(EE.PI.get(e.o))(e.t1),await EE.E[this.id].PII.stripe.initialize(),console.log(`use.stripe - loaded (nowait) ${e.o} from ${t}`)});return}let o=await import(t);EE.PI.set(e.o,o.default),EE.E[this.id].PII.stripe=new(EE.PI.get(e.o))(e.t1),await EE.E[this.id].PII.stripe.initialize(),console.log(`use.stripe - loaded ${e.o} from ${t}`)}catch(o){console.log(`use.stripe - failed to load ${e.o} from ${t}`),console.log(o),this.opErr(e,`use.stripe - failed to load: ${o.message}`);return}}
],
 [2204144635,async function e(n){let t=this.fnPRe(n)?.v?.size||0;this.fnPost(n,t,33)}],
 [256483229,async function t(n){}],
 [920682956,async function s(i){let r=EE.de(i),a={0:"free?",1:"free",2:"personal",3:"pro",4:"business",5:"agency",6:"enterprise"},d=this.vmGv(i.V1);if(!d)return this.opErr(i,"cannot resolve document variable");let e="";d.usage.forEach(t=>{e+='<div style="width:100%;display:flex;justify-content:space-between">',e+=`<div>${t.name}</div>`,t.args.forEach(o=>{e+=`<div>${o.t}</div>`}),e+=`<div style="flex-grow:1">${t.description}</div>`,e+="</div>"});let v="";d.tags.forEach(t=>{v+=`<div>${t.tag}</div>`});let n=`
    .e${i.o} {
        margin: 10px;
        padding:3px;
        width: 100%;
        background-color: lightgray;
    }`;EE.rec(i,n),i.html=`<div id="${i.id}" class="e${i.o}">
  <div>${d.name}</div>
  <div>${d.description}</div>
  <div>${a[d.planid]}</div>
  <div>${e}</div>
  <div>-------</div>
<div>${v}</div>
  </div>`,this.out(i)}
],
 [1127738249,async function e(o){console.log("demode user"),console.log({s:o}),this.stOpSet(o.o,null,o.R1,o.c)}],
 [2866744926,async function c(t){let n=this.vmIv(t.t1);if(!n)return this.opErr(t,"no path can be resolved");console.log({kv:1,path:n});let r=this.vmGv(t.V1);if(!r)return this.opErr(t,"no content can be resolved");try{let e=await EE?.EA?.sb?.auth.getSession();if(!e)return this.opErr(t,"not logged in");if(e.error)return this.opErr(t,`getting session: ${e.error.message}`);let s=e.data?.session?.access_token;console.log({access_token:s});let o=await(await fetch(`https://o${t.o}.deno.dev/${n}`,{method:"POST",headers:{"xpe-op-auth":t.o,"xpe-client-id":"clientidhere","Content-Type":"text/plain",Authorization:`Bearer ${s}`},body:r})).json();if(!o.success)return this.opErr(t,o.error);this.opResult(t,o),console.log(o)}catch(e){this.opErr(t,"catch:"+e.message)}}
],
 [637252934,async function i(t){try{this.fnPre(t),console.log({s:t});let{access_token:e,sberror:r}=await this.sbctx();if(r)return this.opErr(t,`cant resolve sb ${r}. logged in?`);let{error:o,result:s}=await this.ddexe(t.o,{},e);if(o)return this.opErr(t,`dd.exe ${o}`);this.fnPost(t,s,85)}catch(e){this.opErr(t,`su.accounts failed ${e.message}`),this.fnPost(t,{error:e.message},65)}}],
 [289348541,async function t(n){}],
 [1915637009,async function i(t){console.log({s:t}),this.lastoperr=0;try{if(!this.sb?.userid)return this.opErr(t,"not logged in");let o=this.vmGv(t.V1);if(!o){this.opErr(t,"no content data");return}let e={path:t.t1,content:o};t.ttl&&(e.ttl=t.ttl);let{data:n,error:r}=await EE.EA.sb.functions.invoke(`o${t.o}`,{body:e});console.log({data:n,error:r}),r&&this.opErr(t,`remote:${r.message}`);return}catch(o){this.opErr(t,`remote:${o.message}`)}}
],
 [3015954730,async function n(e){let l=`xpe/${this.id}/appidhere/${e.kw}`,o=localStorage.getItem(l);if(console.log(o),!o)return console.log("variable not found to load!!!!!...no value set");let t=JSON.parse(o);console.log({V:t}),this.VM[e.kw]=t}
],
 [664452807,async function d(t){EE.pim.aIcons(),t.t1=this.vmIv(t.t1);let i=EE.de(t,1,20,40,10),o=EE.sizer(t.s,1,9,5,2),n=EE.sizer(t.s,1,5,20,2);console.log({here:1,s:t,d:i});let e=t.t2?`<div>${this.vmIv(t.t2)}</div>`:"",c=`.e${t.o} { display:flex;justify-content:center;align-items:center;color:var(--text-color);font-family:var(--text-font,Arial);border-radius:5px;}
        .a${t.o} {
          text-decoration:none;
        }
        `;EE.rec(t,c),t.html=`<a class="a${t.o}" href="https://www.linkedin.com/in/${t.t1}/"><div class="${i.cl}" style="${i.sty};font-size:${n}px;padding:2px ${o}px;"><div><iconify-icon width="${i.sz}" icon="mdi:linkedin"></iconify-icon></div>
        ${e}</div></a>`,this.out(t)}
],
 [1729719761,async function n(t){this.fnPost(t,[],82)}],
 [4102738831,async function t({t1:n}){return"<div></div>"}
],
 [382785001,async function t(n){}
],
 [1932917794,async function r(e){try{if(this.fnPre(e),console.log({s:e}),!this.stripe)return this.opErr(e,"stripe not initialized? stripe.initialize first!");if(!this.st?.stripe?.elementsinstance)return this.opErr(e,"no elements instance detected?");let t=await this.stripe.confirmPayment({elements:this.st.stripe.elementsinstance,confirmParams:{return_url:"https://example.com"},redirect:"if_required"});if(console.log({R:t}),t.error)return this.opErr(e,`stripe.confirm.payment ${t.error.message}`);this.fnPost(e,t,65)}catch(t){this.opErr(e,`stripe.confirm.payment failed: ${t.message}`)}}],
 [272859700,async function t(n){}
],
 [345354157,async function c(e){switch(e.c){case 1:case 255:let t=new TextDecoder("utf-8").decode(e.pl);e.html=`<script>window.eeboot = function() { ${t} }; window.eeboot();<\/script>`,this.out(e);return;case 2:break}}
],
 [540396273,async function E(n){if(!EE.E[n.n1])return this.opErr(n,`evm ${n.n1} not found`);let t=EE.E[n.n1]?.FM?.bin;this.fnPost(n,t,99)}],
 [1479128449,async function t({t1:n}){return"<div></div>"}
],
 [2735545136,async function t(n){}
],
 [1966407126,async function d(t){let o=this.fnPre(t).v.domain;if(!o)return this.opErr(t,"missing domain");let e=this.vmIv(t.t1);if(!e)return this.opErr(t,"missing name");let s=`${o}/${e}`,r=this.vmGv(t.V1);if(!r)return this.opErr(t,"no content can be resolved");if(!await this.eali())return this.opErr(t,"not logged in");let i=(await this.sbctx()).access_token,a=`https://o1966407126.xpes.workers.dev/${s}`,n=await(await fetch(a,{method:"POST",body:r,headers:{Authorization:i,"Content-Type":"text/html"}})).json();if(console.log({result:n}),n.error)return this.opErr(t,n.error);this.fnPost(t,n,65)}],
 [3184741569,async function e(t){switch(this.fnPre(t),t.c){case 1:this.st.app.key=t.t1,this.fnPost(t,t.t1,17);return;case 255:this.fnPost(t,this.st.app.key,17);return}}],
 [2530432918,async function o(t){let n=this.fnPre(t),e=new Date(n.v).getDay()===1;this.fnPost(t,e,49)}],
 [4026678818,async function o(t){let n=this.fnPre(t);this.fnPost(t,n.v.toLowerCase(),17)}],
 [1528956007,async function o(t){EE.pim.aIcons(),EE.pim.aPico();let e=EE.de(t,1,5,1,.2),l=document.getElementById(`${this.id}_7`);t.t1=this.vmIv(t.t1);let d=`
        <style>
        .e${t.o} {
          font-family: Arial;
          width:100%;
        }
        </style>
        `;this.uicl(7),t.bc&&(l.style.backgroundColor=t.bc),t.sec=7,t.html=`${d}
  <table>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="col">#</th>
      <td scope="col">Total</td>
      <td scope="col">Total</td>
      <td scope="col">Total</td>
      <td scope="col">Total</td>
      <td scope="col">Total</td>
    </tr>
  </tfoot>
</table>
    `,this.out(t)}
],
 [4038438967,async function i(e){let r,t;switch(e.c){case 1:r=e.n1,t=1;break;case 2:r=this.vmGv(e.V1),t=1;break;case 3:r=e.n1,t=e.n2;break;case 4:r=this.vmGv(e.V1),t=e.n1;break}if(!this.sb.token)return this.terr(":logged in user not found!");let a=EE.SRC[t];if(!a)return this.terr(`source for instance ${t} not found!`);let{error:n}=await EE.EA.sb.from("apps").update({source:a}).eq("id",r);if(n)return this.opErr(e,`saveapp failed - ${n.message}`),this.terr(n)}
],
 [2735289259,async function e(t){this.st.editable=!0}
],
 [3474354857,async function n(t){this.fnPre(t),this.log("app.authorize..."),this.fnPost(t,"authtoken",33)}],
 [3650224654,async function r(t){switch(console.log({appver:1,s:t}),t.c){case 1:case 2:let n=this.fnGetArg(t,"n1",160);this.st.app.version=n;return;case 255:let e=this.st.app.version||1;this.fnPost(t,e,33);return;default:return this.opErr(t,"invalid command")}}],
 [4202241172,async function t(n){}],
 [1077875147,async function l(t){let r=this.fnPre(t),a,i,e;switch(t.c){case 1:e=this.vmIv(t.t1),i=r.v.filter(v=>v===e);break;case 2:e=this.vmIv(t.n1),i=r.v.filter(v=>v===e);break;case 3:e=this.vmGv(t.V1),i=r.v.filter(v=>v===e);break;case 4:a=this.vmIv(t.t1),e=this.vmIv(t.t2),i=r.v.filter(v=>v[a]===e);break;case 5:a=this.vmIv(t.t1),e=this.vmGv(t.V1),i=r.v.filter(v=>v[a]===e);break;case 6:e=this.vmGv(t.V1),i=r.v.filter(v=>v.startsWith(e));break;default:return this.opError(t,"invalid filter command")}this.fnPost(t,i,85)}],
 [2592345506,async function t(n){}],
 [1651970952,async function c(t){let n=this.fnPre(t),e=new RegExp("^(1|2)[0-9]{3}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$"),s=n.v.trim(),o=e.test(s);this.fnPost(t,o,49)}],
 [4037554543,async function t(n){}
],
 [1903974779,async function n(t){this.st.not=!0}],
 [518841638,async function d(t){let n=EE.de(t);t.html="<div>input range</div>",this.out(t)}
],
 [3691498624,async function t({t1:n}){return"<div></div>"}
],
 [186174476,async function r(t){let o=this.fnPre(t),c=this.st.app.locale||"en-US",n={style:"currency",currency:"USD"};t.t1&&(n.currency=t.t1.toUpperCase());let e=new Intl.NumberFormat(c,n).format(o.v);this.fnPost(t,e,17)}],
 [1847387544,async function n(t){let i=`.e${t.o} {
        width:100%;
        font-family: var(--heading-font);
        font-weight: var(--heading-weight);
        color: var(--heading-color);
        text-align: center;
        margin: 5px 10px;
        padding: 0px;
      }`;EE.rec(t,i);let e=EE.de(t,1,9,1.3,.2);t.t1=this.vmIv(t.t1),EE.elFo(t),t.html=`<div class="${e.cl}" style="${e.sty}${e.fs}">${t.t1}</div>`,this.out(t)}
],
 [44073362,async function n(e){console.log("new app"),console.log({s:e}),this.lastoperr=0;try{if(!this.sb?.userid){this.opErr(e,"e.newapp failed - not logged in");return}let r={user_id:this.sb.userid};e.n1&&(r.parent=e.n1);let{data:o,error:t}=await EE.EA.sb.from("engageapps").insert([r]);if(console.log({data:o,error:t}),t){this.opErr(e,`e.newapp failed - ${t.message}`);return}let{data:a,error:s}=await EE.EA.sb.storage.from("app-prv").upload(`${this.sb.userid}/xxxx/test.html`,o,{cacheControl:"3600",upsert:!1});console.log({data2:a,error2:s})}catch(r){this.opErr(e,`e.newapp failed - ${r.message}`)}}
],
 [3001976466,async function t(n){}
],
 [4118713424,async function n(a){EE.pim.aLnk("animation","https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"),EE.elanim=EE.anim.fadeIn?EE.anim.fadeIn:"animate__animated animate__fadeIn"}
],
 [3030669948,async function s(t){this.st.var=["_FOREACH"],this.st.val=[]}],
 [979990681,async function t(n){}
],
 [233738664,async function s(o){console.log({ok:1,s:o});let t=this.lastoperr===0;this.fnPost(o,t,49),this.lastoperr=0}],
 [3578572535,async function i(t){if(console.log({s:t}),t.html="",!this.stOpGet(t.o,"inlined")){console.log("INLINE EDITOR INJECTED");let e=new TextDecoder("utf-8").decode(t.pl);t.html=`<script>${e}<\/script>`,this.stOpSet(t.o,null,"inlined",!0)}t.html+="<div>EDITOR...GOES...HERE</div>",this.out(t),console.log(`INLINED ${t.c}`)}
],
 [1837384932,async function t(n){}],
 [2566976107,async function i(t){if(t.c===1)return this.fnPost(t,this.VM[t.V1]?this.VM[t.V1]:0,33);{let n=this.fnPre(t);this.fnPost(t,n.t,33)}}],
 [2579558550,async function s(t){this.st.halt=!0,this.st.wait=!0}
],
 [4117866713,async function s(t){let n=this.fnPre(t),e=new Date(n.v);this.fnPost(t,e.getMinutes(),33)}],
 [4271951155,async function t({t1:n}){return"<div></div>"}
],
 [2691851613,async function m(s){let r=`
  <style>
  .e${s.o}{
    font-family: sans-serif;
    font-weight: 100;
  }
  
  h1{
    color: #396;
    font-weight: 100;
    font-size: 40px;
    margin: 40px 0px 20px;
  }
  
  #clockdiv{
      font-family: sans-serif;
      color: #fff;
      display: inline-block;
      font-weight: 100;
      text-align: center;
      font-size: 30px;
  }
  
  #clockdiv > div{
      padding: 10px;
      border-radius: 3px;
      background: #00BF96;
      display: inline-block;
  }
  
  #clockdiv div > span{
      padding: 15px;
      border-radius: 3px;
      background: #00816A;
      display: inline-block;
  }
  
  .smalltext{
      padding-top: 5px;
      font-size: 16px;
  }
}</style>
  `;function p(t){let n=Date.parse(t)-Date.parse(new Date),i=Math.floor(n/1e3%60),e=Math.floor(n/1e3/60%60),l=Math.floor(n/(1e3*60*60)%24),a=Math.floor(n/(1e3*60*60*24));return{total:n,days:a,hours:l,minutes:e,seconds:i}}function u(t,n,i=1e3){let e=document.getElementById(t);console.log({id:t,endtime:n});let l=e.querySelector(".days"),a=e.querySelector(".hours"),f=e.querySelector(".minutes"),g=e.querySelector(".seconds");function d(){console.log("update clock....");let o=p(n);l.innerHTML=o.days,a.innerHTML=("0"+o.hours).slice(-2),f.innerHTML=("0"+o.minutes).slice(-2),g.innerHTML=("0"+o.seconds).slice(-2),o.total<=0&&clearInterval(y)}console.log("initial..."),d(),console.log("updating...");let y=setInterval(d,i)}let v=EE.de(s,1,5,1,.2),c=new Date(Date.parse(new Date)+15*24*60*60*1e3);console.log({s,deadline:c}),s.html=`${r(s)}
  <div class="${v.cl}" id="${s.id}-clockdiv">
  <div>
    <span class="days"></span>
    <div class="smalltext">Days</div>
  </div>
  <div>
    <span class="hours"></span>
    <div class="smalltext">Hours</div>
  </div>
  <div>
    <span class="minutes"></span>
    <div class="smalltext">Minutes</div>
  </div>
  <div>
    <span class="seconds"></span>
    <div class="smalltext">Seconds</div>
  </div>
</div>
`,this.out(s),u(`${s.id}-clockdiv`,c)}
],
 [1000258177,async function i(t){let n=this.VM[t.V1];if(n.t!=33)throw"not a number";let e;if(t.c===1)e=Number(t.n1);else{let o=this.VM[t.V2];if(o.t!=33)throw"not a number";e=o.v}this.vmSetType(t.V1,33,n.v-e)}],
 [1560877683,async function o(t){console.log({s:t});let n=new Date(t.v).toISOString();this.st.val=[[n,114]],this.vmAss()}],
 [4105906722,async function e(t){document.getElementById(this.st.lastid).onblur=()=>{console.log(blur)}}],
 [3089779982,async function s(t){console.log({s:t});let e=`
      .e${t.o} {
        display: flex;
        justify-content:flex-end;
        align-items:center;
        flex-wrap: wrap;
        width:100%;
      }
      .e${t.o} > div {
        margin: 2px;
      }
      `;EE.rec(e),t.html=`<div id="${t.id}" class="e${t.o}" style="justify-content:${justify}"></div>`,this.out(t);let i=this.st.targetsec;this.st.targetsec=t.id,this.st.rowid=t.id,await this.rbonce(t),this.st.targetsec=i,this.st.rowid=null}
],
 [1806066166,async function t(s){this.st.var=s.v.split(","),this.st.ifmissing&&this.VM[this.st.var[0]]&&(this.st.havevv=!0),this.st.ifmissing=!1}
],
 [3781247977,async function n(t){this.lastoperr=0;try{if(!this.sb?.userid)return this.opErr(t,"e.newfile failed - not logged in");let r=this.fnPre(t),i=r.v.id,e=this.fnGetArg(t,"t1",144);if(!i)return this.opErr(t,"could not resolve appid");if(!e)return this.opErr(t,"could not resolve path");let{error:o}=await EE.EA.sb.from("engageapps").update({path:e}).eq("id",i);if(console.log({error:o}),o)return this.opErr(t,o.message);r.v.path=e,this.fnPost(t,r.v,67);return}catch(r){this.opErr(t,r.message)}}],
 [2219725944,async function t(e,n){return e.slice(-n[0])}],
 [2971894547,async function l(s){console.log("url.decode"),console.log({s});let t=this.fnPre(s),o=new URL(t.v),[e,...h]=o.host.split("."),a=h.join("."),n=o.pathname.split("/").pop(),[i,c]=n.split(".");this.fnPost(s,{subhost:e,domain:a,filename:n,base:i,ext:c,host:o.host,hash:o.hash,search:o.search,pathname:o.pathname,href:o.href,origin:o.origin},65)}],
 [551358335,async function r(e){if(!EE.flcc)return this.terr("require :use compiler!");if(console.log("compile here...."),console.log({s:e}),!this?.sb?.userid)return this.terr(":logged in user not found!");let n=this?.sb?.token,t,o;switch(e.c){case 1:if(o=EE.SRC[e.n1],this.opErr(e,`source for instance ${e.n1} not found!`),!o)return this.terr(`source for instance ${e.n1} not found!`);t=await FLCC.parse(o),console.log({R:t}),console.log(EE.flcc),EE.BIN[e.n1]=FLCC.flcbin;return;case 2:o=this.vmGv(e.V1),t=await FLCC.parse(o),console.log({R:t}),console.log(EE.flcc),this.fnPost(e,FLCC.flcbin,99);return;case 3:o=e.t1,t=await FLCC.parse(o),this.fnPost(e,FLCC.flcbin,99);return}}
],
 [2277169455,async function s(t){this.st.prod=!0}
],
 [725729243,async function t(n){}],
 [1316995933,async function t({t1:n}){return"<div></div>"}
],
 [84879777,async function o(t){let e=this.fnPre(t),n=this.fnGetTarg(t);console.log({a1:n}),this.fnPost(t,!!e.v.includes(n),49)}],
 [3879523716,async function l(t){this.fnPre(t),await this.usePI("fluentref",{latest:!0});let i=EPI.fluentref;t.t1=this.vmIv(t.t1);let f;t.t1?f=i.filter(e=>e.type==="e"&&e.cat===t.t1):f=i.filter(e=>e.type==="e"),this.fnPost(t,f,85)}],
 [4213345976,async function c(r){await this.usePI("search");let s=this.fnPre(r),n=r.t1||"name",t=s.v;if(console.log({searchobj:t}),!Array.isArray(t))return this.opErr(r,"searchobj is not an array");let o=r.t2?this.vmIv(r.t2):this.vmGv(r.V1);if(!o)return this.opErr(r,"no searchfor");let e=EPI.search.ffsearch(o,t,{keySelector:a=>a[n]});console.log({results:e}),this.fnPost(r,e,85)}],
 [939178168,async function r(t){try{if(console.log("GOTO"),console.log({s:t}),t.fc){this.goto(t.fc,t.a);return}else if(t.V1){let o=this.vmGv(t.V1);if(!o)return this.opErr(`could not resolve flowname ${t.V1}`);let e=EE.crc32(o);this.goto(e)}else if(t.kw){let o=this.vmIv(t.kw);if(!o)throw"mark name not resolved";console.log(`--> goto ${o}----`);let e=this.st.CF.MD[o];if(e)console.log("found backward offset"),this.st.CF.os=e,this.FM.os=e;else if(console.log("FORWARD REFERENCE for mark!"),!this.sm(o))throw`coulld not find foward ref mark ${o}!`}else return this.opErr("fatal: goto command f'ed up!")}catch(o){this.opErr(o.message)}}
],
 [2361403748,async function f(t){let a=this.st.lastVarref,s=this.st.lastVarref.slice(1,-1);if(!s)return this.opErr("age.over: no variable reference found");let o=this.VM[s]?.ts;if(!o)return this.opErr(`age.over: variable ${s} ts not found`);console.log({s:t,lastref:a});let e=this.ts(),n=Math.floor(t.du1/1e3),r=o+n;console.log({durInSeconds:n,exp:r,now:e}),e>r?this.fnPost(t,!0,49):this.fnPost(t,!1,49)}],
 [3730673229,async function p(t){let e=this.fnPre(t).v.domain;if(!e)return this.opErr(t,"missing domain");let o=this.vmIv(t.t1);if(!o)return this.opErr(t,"missing kvname");let i=this.vmIv(t.t2);if(!i)return this.opErr(t,"missing name");let c=`${o}/${e}/${i}`,r=this.vmGv(t.V1);if(!r)return this.opErr(t,"no content can be resolved");try{if(!await this.eali())return this.opErr(t,"not logged in");let a=(await this.sbctx()).access_token;console.log({access_token:a});let n=await(await fetch(`https://o${t.o}.deno.dev/${c}`,{method:"POST",headers:{"xpe-op-auth":t.o,"xpe-client-id":"clientidhere","Content-Type":"text/plain",Authorization:`Bearer ${a}`},body:r})).json();if(!n.success)return this.opErr(t,n.error);console.log(n),this.fnPost(t,n,65)}catch(s){this.opErr(t,s.message)}}],
 [947633689,async function t(n){}
],
 [327328869,async function t(i){console.log({seticon:1,s:i}),EE.pim.aIcons();let[c,o="mdi"]=i.i2.split(".");this.st.ic[i.i1]=`${o}:${c}`}
],
 [1213576842,async function o(t){switch(this.fnPre(t),t.c){case 1:this.st.app.icon=this.vmIv(t.u1);break;case 2:this.st.app.icon=this.vmGv(t.V1);break;case 3:let i=this.vmIv(t.i1),c=this.vmIv(t.c1).replace("#","%23"),s=`https://api.iconify.design/mdi/${i}.svg?height=64&color=${c}`;this.st.app.icon=s;break;case 255:}this.fnPost(t,this.st.app.icon,17)}],
 [4036650975,async function o(e){console.log({s:e}),this.lastoperr=0;try{if(!this.sb?.userid)return this.opErr(e,"not logged in");let{data:r,error:t}=await EE.EA.sb.from("appgroups").select("id,name").order("name",{ascending:!0});if(console.log({data:r,error:t}),t){this.opErr(e,t.message);return}this.fnPost(e,r,85)}catch(r){this.opErr(e,`failed: ${r.message}`)}}],
 [3557264155,async function n(o){console.log(":link"),console.log(o),EE.pim.aLnk("stuff",o.u1)}
],
 [2481696346,async function c(o){switch(console.log(":mock"),o.c){case 3:this.opErr(o,":mock a runtime error!");break;case 4:console.log(":mock ok"),this.lastoperr=0;break}}
],
 [4020937801,async function i(t){switch(t.c){case 1:case 2:let s=this.fnGetArg(t,"t1",144);if(!s)return this.opErr(t,"missing description");this.st.app.description=s,this.fnPost(t,s,17);break;case 255:this.fnPost(t,this.st.app.description,17);break}}],
 [604677706,async function t(n){}],
 [3918941670,async function t(n){}],
 [3361211884,async function o(t){let n=this.fnPre(t),f=this.fnGetNarg(t);this.fnPost(t,n.v/f,n.t)}],
 [1598805133,async function a(t){let n=this.fnGetDTarg(t),e=new Date;this.fnPost(t,e>n,49)}],
 [3651230616,async function r(t){if(this.fnPre(t),!this.isG(t.v1))return console.log("error -- not array");let n=this.VM[t.v1].v.length,o=EE.rnd(0,n-1);this.fnPost(t,this.VM[t.v1].v[o],null)}],
 [1479300585,async function n(e){let o=new Date,t=new Date(o);t.setDate(t.getDate()+1),this.fnPost(e,t.toISOString(),113)}],
 [838489188,async function d(C){let t=EE.de(C,1,9,90,20),e=EE.sizer(C.s,1,9,14,2),i=t.sz*211/620,n=C.t1?C.t1:"",c=C.u1?C.u1:"https://www.wikipedia.org",l=`
    .e${C.o} {
        padding: 5px;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Roboto', sans-serif;
        width: 100%;
    }
    .e${C.o} .text {
        padding-right: 7px;
        font-weight: bold;
    }
    .a${C.o} {
        text-decoration: none;
        width: 100%;
        cursor: hand;
        color: inherit;
    }

    `;EE.rec(C,l);let o=C.c1?C.c1:"#000000";C.html=`<a class="a${C.o}" href="${c}"><div class="${t.cl}" style="${t.sty}">
  <div class="text" style="font-size:${e}px">${n}</div>
  <svg width="${t.sz}" height="${i}" viewBox="0 0 620 211" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M155.158 71.9023L155.51 88.1621C159.084 82.3027 163.537 77.8496 168.869 74.8027C174.201 71.6973 180.09 70.1445 186.535 70.1445C196.73 70.1445 204.318 73.0156 209.299 78.7578C214.279 84.5 216.799 93.1133 216.857 104.598V167H206.398V104.51C206.34 96.0137 204.523 89.6855 200.949 85.5254C197.434 81.3652 191.779 79.2852 183.986 79.2852C177.482 79.2852 171.711 81.3359 166.672 85.4375C161.691 89.4805 158 94.959 155.598 101.873V167H145.139V71.9023H155.158ZM239.885 118.572C239.885 103.689 243.166 91.9121 249.729 83.2402C256.35 74.5098 265.314 70.1445 276.623 70.1445C289.572 70.1445 299.416 75.3008 306.154 85.6133L306.682 71.9023H316.525V165.066C316.525 177.312 313.098 187.01 306.242 194.158C299.387 201.307 290.1 204.881 278.381 204.881C271.76 204.881 265.432 203.387 259.396 200.398C253.42 197.469 248.703 193.543 245.246 188.621L251.135 182.293C258.576 191.434 267.424 196.004 277.678 196.004C286.467 196.004 293.322 193.396 298.244 188.182C303.166 183.025 305.715 175.848 305.891 166.648V154.695C299.152 164.07 289.338 168.758 276.447 168.758C265.432 168.758 256.584 164.363 249.904 155.574C243.225 146.785 239.885 134.92 239.885 119.979V118.572ZM250.52 120.418C250.52 132.547 252.951 142.127 257.814 149.158C262.678 156.131 269.533 159.617 278.381 159.617C291.33 159.617 300.5 153.816 305.891 142.215V98.0059C303.43 91.9121 299.885 87.2832 295.256 84.1191C290.627 80.8965 285.061 79.2852 278.557 79.2852C269.709 79.2852 262.824 82.7715 257.902 89.7441C252.98 96.6582 250.52 106.883 250.52 120.418ZM403.977 167C402.922 164.012 402.248 159.588 401.955 153.729C398.264 158.533 393.547 162.254 387.805 164.891C382.121 167.469 376.086 168.758 369.699 168.758C360.559 168.758 353.146 166.209 347.463 161.111C341.838 156.014 339.025 149.568 339.025 141.775C339.025 132.518 342.863 125.193 350.539 119.803C358.273 114.412 369.025 111.717 382.795 111.717H401.867V100.906C401.867 94.1094 399.758 88.7773 395.539 84.9102C391.379 80.9844 385.285 79.0215 377.258 79.0215C369.934 79.0215 363.869 80.8965 359.064 84.6465C354.26 88.3965 351.857 92.9082 351.857 98.1816L341.311 98.0938C341.311 90.5352 344.826 84.002 351.857 78.4941C358.889 72.9277 367.531 70.1445 377.785 70.1445C388.391 70.1445 396.74 72.8105 402.834 78.1426C408.986 83.416 412.15 90.7988 412.326 100.291V145.291C412.326 154.49 413.293 161.375 415.227 165.945V167H403.977ZM370.93 159.441C377.961 159.441 384.23 157.742 389.738 154.344C395.305 150.945 399.348 146.404 401.867 140.721V119.803H383.059C372.57 119.92 364.367 121.854 358.449 125.604C352.531 129.295 349.572 134.393 349.572 140.896C349.572 146.229 351.535 150.652 355.461 154.168C359.445 157.684 364.602 159.441 370.93 159.441ZM436.232 118.572C436.232 103.689 439.514 91.9121 446.076 83.2402C452.697 74.5098 461.662 70.1445 472.971 70.1445C485.92 70.1445 495.764 75.3008 502.502 85.6133L503.029 71.9023H512.873V165.066C512.873 177.312 509.445 187.01 502.59 194.158C495.734 201.307 486.447 204.881 474.729 204.881C468.107 204.881 461.779 203.387 455.744 200.398C449.768 197.469 445.051 193.543 441.594 188.621L447.482 182.293C454.924 191.434 463.771 196.004 474.025 196.004C482.814 196.004 489.67 193.396 494.592 188.182C499.514 183.025 502.062 175.848 502.238 166.648V154.695C495.5 164.07 485.686 168.758 472.795 168.758C461.779 168.758 452.932 164.363 446.252 155.574C439.572 146.785 436.232 134.92 436.232 119.979V118.572ZM446.867 120.418C446.867 132.547 449.299 142.127 454.162 149.158C459.025 156.131 465.881 159.617 474.729 159.617C487.678 159.617 496.848 153.816 502.238 142.215V98.0059C499.777 91.9121 496.232 87.2832 491.604 84.1191C486.975 80.8965 481.408 79.2852 474.904 79.2852C466.057 79.2852 459.172 82.7715 454.25 89.7441C449.328 96.6582 446.867 106.883 446.867 120.418ZM577.121 168.758C569.035 168.758 561.711 166.766 555.148 162.781C548.645 158.797 543.576 153.26 539.943 146.17C536.311 139.021 534.494 131.023 534.494 122.176V118.396C534.494 109.256 536.252 101.023 539.768 93.6992C543.342 86.375 548.293 80.6328 554.621 76.4727C560.949 72.2539 567.805 70.1445 575.188 70.1445C586.73 70.1445 595.871 74.0996 602.609 82.0098C609.406 89.8613 612.805 100.613 612.805 114.266V120.154H544.953V122.176C544.953 132.957 548.029 141.951 554.182 149.158C560.393 156.307 568.186 159.881 577.561 159.881C583.186 159.881 588.137 158.855 592.414 156.805C596.75 154.754 600.676 151.473 604.191 146.961L610.783 151.971C603.049 163.162 591.828 168.758 577.121 168.758ZM575.188 79.1094C567.277 79.1094 560.598 82.0098 555.148 87.8105C549.758 93.6113 546.477 101.404 545.305 111.189H602.346V110.047C602.053 100.906 599.445 93.4648 594.523 87.7227C589.602 81.9805 583.156 79.1094 575.188 79.1094Z" fill="${o}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M41 105C53.1503 105 63 95.1503 63 83C63 77.2909 60.8253 72.0897 57.2592 68.1796C60.719 67.4071 64.3129 67 68 67C95.6142 67 118 89.8335 118 118C118 121.071 117.734 124.079 117.224 127H104H100.872H35.1276C39.0126 142.131 52.4594 153 68 153C80.2404 153 91.1818 146.257 97.1752 136H114.797C107.664 155.284 89.4022 169 68 169C40.3858 169 18 146.167 18 118C18 109.999 19.8064 102.428 23.0258 95.6889C27.0099 101.322 33.5754 105 41 105Z" fill="${o}"/>
<circle cx="67.5" cy="118.5" r="62.5" stroke="${o}" stroke-width="10"/>
</svg>

  
  </div></a>`,this.out(C)}
],
 [3598724185,async function n(o){console.log(o)}
],
 [572070823,async function e(t){let n=this.fnPre(t);this.fnPost(t,Number(n.v),33)}],
 [688340857,async function t(o){await this.usePI("sound");let n=o.V1?this.vmGv(o.V1):o.kw;if(!n)return this.opErr(o,":sound - the sound name is not defined");try{EPI.sound.loadSound(n)}catch(e){console.log(`error loading sound ${o.v}!`),console.log({e})}}
],
 [1462324648,async function i(t){let n=this.VM[t.V1];if(n.t!=33)throw"not a number";let e;if(t.c===1)e=Number(t.n1);else{let o=this.VM[t.V2];if(o.t!=33)throw"not a number";e=o.v}this.vmSetType(t.V1,33,n.v+e)}],
 [3241798860,async function s(t){if(!this.st.app.user)return this.opErr(t,"app user key not set");let{error:e,result:r}=await this.ddexe(t.o,{})}],
 [2662267513,async function o(t){t.html="<div>:logout</div>",this.out(t)}
],
 [3938702394,async function n(c){console.log({dirsection:1,s:c});let o=document.getElementById(`i${this.id}_s0_1970145754`);if(!o){console.log("section 0 1970145754 not found!"),this.terr("section 0 1970145754 not found!");return}let e;switch(c.c){case 1:e=4254961657;break;case 2:e=171242398;break;case 3:e=2719185556;break;case 4:e=2186722472;break;case 5:e=3247543757;break;case 6:e=3078735382;break}let t=document.createElement("div");t.id=`i${this.id}_s${c.c}_${c.fc}`,t.style.backgroundColor="red",t.style.border="1px solid black",t.innerHTML=`section ${c.c} ${e}`,o.appendChild(t)}
],
 [2910133225,async function t(n){}
],
 [28736965,async function t(n){}
],
 [40873562,async function n(o){let e=`${o.local?"https://engagedev/ops/use.stripe/plugin/distribution":"https://xpec.run/use"}/use.${o.o}.js`;try{if(o.nowait){import(e).then(async l=>{EE.PI.set(o.o,l.default),EE.E[this.id].PII.imagetools=new(EE.PI.get(o.o)),console.log(`use.${o.o} - loaded (nowait) from ${e}`)});return}let t=await import(e);EE.PI.set(o.o,t.default),EE.E[this.id].PII.imagetools=new(EE.PI.get(o.o)),console.log(`use.${o.o} load from ${e}`)}catch(t){console.log(`use.${o.o} - failed to load from ${e}`),console.log(t),this.opErr(o,`use.${o.o} - failed to load: ${t.message}`);return}}
],
 [1779225771,async function s(t){try{let e=this.fnGetArg(t,"n1",160);if(!e)return this.opErr(t,"empty/missing appid");let r=await EE?.EA?.sb?.auth.getUser();if(!r)return this.opErr(t,"must be logged into engage account!");if(r.error)return this.opErr(t,`getting user: ${r.error.message}`);let a=r.data?.user?.id;if(!a)return this.opErr(t,"no userid found!");let i=r.data?.user?.app_metadata?.pl||1,n=`${a}/${e}/${i}`;this.fnPost(t,n,17)}catch{}}],
 [1429960136,async function o(t){try{if(this.fnPre(t),await this.use(1,{dev:!0}),!EE.EA)return this.opErr(t,"EE.EA not initialized..need this!");let e=this.vmGv(t.V1),i=this.vmGv(t.V2);console.log({s:t,email:e,password:i});let{error:r,result:n}=await this.ddexe(t.o,{email:e,password:i,test:t.test});if(r)return this.opErr(t,`dd.exe ${r}`);this.fnPost(t,n,65)}catch(e){this.opErr(t,`engage.signup failed: ${e.message}`)}}],
 [99780899,async function e(t){let o=this.fnPre(t),n=new Date(o.v);console.log({DATE:n}),this.fnPost(t,n.getDay(),117)}],
 [753405644,async function t(n){}],
 [2270629351,async function t(n){}],
 [4124328248,async function t(n){}],
 [775826815,async function a(c){let s="https://placeimg.com/160/160/arch";return EE.pim.aPiCss("shapemasks"),`<img class="mask mask-hexagon" src="${s}" />`}
],
 [2985927310,async function f(t){let n=this.fnPre(t),e=this.fnGetNarg(t);this.fnPost(t,n.v<=e,49)}],
 [1970646571,async function o(t){let n=this.fnPre(t),e=new Date(n.v).getDay()===6;this.fnPost(t,e,49)}],
 [1098303385,async function t(n){}
],
 [1653244559,async function o(t){console.log({s:t}),this.st.CF.MD[t.t1]=this.st.CF.os,console.log(this.st.CF)}],
 [152204580,async function n(r){this.lastoperr=0;let i=this.fnPre(r);try{if(!await this.eali())return this.opErr(r,"not logged in");let e=await this.sbctx(),s=i.v.id,o=this.fnGetArg(r,"t1",144),a=`${e.userid}/${s}/${o}`,t;switch(r.c){case 1:if(t=EPI.engageaccount.sb.storage.from("apps-pub").getPublicUrl(a),t.error)return this.opErr(r,t.error.message);console.log("puvlic url: "),this.fnPost(r,t?.data?.publicUrl,17);return;case 2:if(t=await EPI.engageaccount.sb.storage.from("apps-prv").createSignedUrl(a,60),t.error)return this.opErr(r,t.error.message);this.fnPost(r,t?.data?.signedUrl,17);return;default:return this.opErr(r,`invalid c=${r.c}`)}}catch(e){this.opErr(r,e.message)}}],
 [3130671094,async function t(n){}],
 [3471489531,async function r(t){try{this.fnPre(t);let{error:e}=await EPI.engageaccount.sb.auth.signOut();if(e)return this.fnPost(t,!1,49),this.opErr(t,e.message);this.fnPost(t,!0,49)}catch(e){this.opErr(t,`Error in engage.logout: ${e.message}`),this.fnPost(t,!1,49)}}],
 [2115227629,async function e(t){let n=this.fnPre(t),o=this.fnGetArg(t,"t1",144);if(console.log({s:t,vr:n,field:o}),!n.v[0][o])return this.opError(t,"field not found in group variable!");let r=n.v.map(i=>i[o]);this.fnPost(t,r,82)}],
 [746434556,async function c(o){console.log(":script"),console.log({s:o}),EE.pim.aScr("script",o.u1)}
],
 [3633365089,async function n(t){if(!EE.sb)return this.terr(":inline supabase not found!!!");if(!this?.sb?.userid)return this.terr("not :logged in!")}
],
 [2912505540,async function t(n){}
],
 [351550761,async function i(t){console.log(`LOOP ${t.c}...`),console.log({s:t});let l;switch(t.c){case 1:this.st.CF.blktype=4,this.st.var=["_WHILE"],this.st.val=[];break;case 2:let s=this.vmGv(t.V1);if(!s)return this.opErr(t,"no such variable");if(!Array.isArray(s))return this.opErr(t,"${s.V1} is not a group. Cannot loop over it.");this.st.lv=this.vmGv(t.V1),this.st.ll=s.length,this.st.lc=1,this.st.lt=5;break;case 3:this.st.idx=t.V1;break;case 4:l=this.vmGv(t.V1),this.st.ll=l,this.st.lc=1,this.st.lt=6;break;case 5:this.st.ll=t.n1,this.st.lc=1,this.st.lt=6;break;default:throw"fatal loop error"}await this.rbloop(t)}
],
 [357066783,async function s(a){let t=new Date;var e=new Date(t.getTime());e.setDate(t.getDate()+(7+1-t.getDay())%7),this.fnPost(a,e,113)}],
 [517405562,async function t({t1:n}){return"<div></div>"}
],
 [3069707319,async function t({t1:n}){return"<div></div>"}
],
 [568064722,async function e(t){let d=EE.de(t);t.html="<div></div>",this.out(t)}
],
 [3720630330,async function i(e){let r=this.vmIv(e.t1);if(!r)return this.opErr(e,"no path can be resolved");try{let{error:t,data:s}=await EE.EA.sb.auth.getSession();if(t)return this.opErr(e,`e.edge.put - getting session: ${t.message}`);let n=s?.session?.access_token,o=await(await fetch(`https://o${e.o}.deno.dev/${r}`,{method:"POST",headers:{"Content-Type":"text/plain",Authorization:`Bearer ${n}`}})).json();if(o.error){this.opErr(e,`e.edge.delete - ${o.error}`);return}console.log(o)}catch(t){this.opErr(e,`e.edge.delete - failed: ${t.message}`)}}
],
 [4093059519,async function i(e){console.log("new name"),console.log({s:e}),this.lastoperr=0;try{if(!this.sb?.userid)return this.opErr(e,"e.nameregister failed - not logged in");let r=this.fnGetTarg(e),o={user_id:this.sb.userid,name:r},{data:s,error:t}=await EE.EA.sb.from("appgroups").insert([o]);if(console.log({data:s,error:t}),t){this.opErr(e,`e.nameregister failed - ${t.message}`);return}this.fnPost(e,s,65)}catch(r){this.opErr(e,`e.newapp failed - ${r.message}`)}}
],
 [1680999960,async function t({t1:n}){return"<div></div>"}
],
 [2332113067,async function i(t){let e=`.e${t.o} {
    color: var(--text-color,black);
    font-family: var(--text-font,Arial);
    font-size: var(--text-size,16px);
  }`;EE.rec(t,e);let o=EE.de(t,1,9,1,.2);t.t1=this.vmIv(t.t1);let c=this.rfo(t);t.html=`<div class="${o.cl}" style="text-align:center;width:100%;${o.sty}${o.fs};${c}">${t.t1}</div>`,this.out(t)}
],
 [2499835910,async function e(t){let n=this.fnPre(t),o=this.fnGetDTarg(t);console.log({vr:n,a1:o}),this.fnPost(t,!0,49)}],
 [2972114268,async function t({t1:n}){return"<div></div>"}
],
 [3209692633,async function r(t){let i,e;switch(t.c){case 1:if(!this.stOpGet(t.o,t.fc)){t.html=`<div> ${t.I1} = ${t.u1} - ${t.fc} </div>`,this.stOpSet(t.o,null,t.fc,t.u1),t.html=`<div> ${t.I1} = ${t.u1} - ${t.fc} loaded</div>`,this.out(t);return}t.html=`<div> ${t.I1} = ${t.u1} - ${t.fc} already loaded</div>`,this.out(t);return;case 2:if(!this.stOpGet(t.o,t.fc)){i=new window.Image,e=`https://picsum.photos/userid/appid/${t.fc}.jpg`,console.log("PRELOADING",e),i.src=e,t.html=`<div> ${t.I1} - ${t.fc} </div>`,this.stOpSet(t.o,null,t.fc,e),this.out(t);return}t.html=`<div> ${t.I1} = ${t.url} already loaded</div>`,this.out(t);return;case 3:t.html=`<div>add ${t.I1} - ${t.fc}</div>`,this.out(t);break;case 4:t.html="<div>list images for app....</div>",this.out(t);break;case 5:t.html=`<div>delete ${t.I1} - ${t.fc}</div>`,this.out(t);break;case 6:t.html=`<div>detail ${t.I1} - ${t.fc}</div>`,console.log({CT:EE.ColorThief,URLfn:URL.createObjectURL});let o=await fetch("https://picsum.photos/200/300");if(o.status===200){let c=await o.blob();console.log({imageblob:c});let a=document.getElementById(`${this.id}_${this.st.SEC}`);console.log(a.id);let l=URL.createObjectURL(c),d=document.createElement("img");d.src=l,a.append(d)}else console.log("error"),this.terr("error getting image from remote URL");break;case 7:t.html="<div>cdn images</div>",this.out(t);break}}
],
 [1548741090,async function a(t){try{if(!await this.eali())return this.opErr(t,"not logged in");let e=this.fnGetArg(t,"t1",144);if(console.log({s:t,name:e}),this.log(`deleting domain ${e}`),!e)return this.opErr(t,"missing name");let{error:i,data:n}=await EPI.engageaccount.sb.from("domains").delete().eq("name",e);if(i){this.opErr(t,i.message),this.fnPost(t,fasle,49);return}this.fnPost(t,!0,49)}catch(e){this.opErr(t,`domain delete failed: ${e.message}`),this.fnPost(t,!1,65)}}],
 [3096218445,async function h(i){try{let n=this.vmIv(i.it);if(!n)return this.opErr(i,"cannot resolve formula");let o=t=>Number(t),u=t=>{let e;return t.split("*").forEach(r=>{f.test(r)?e=l(r):e=e?e*o(r):o(r)}),e},c=t=>{let e;return t.split("-").forEach(r=>e=e?e-o(r):o(r)),e},l=t=>{console.log("divide");let e;return t.split("/").forEach(r=>e=e?e/o(r):o(r)),e},a=new RegExp("[\*\/]"),f=new RegExp("\/"),p=new RegExp("-"),s;if(n.split("+").forEach(t=>{a.test(t)?s=s?s+u(t):u(t):p.test(t)?s=s?s-c(t):c(t):s=s?s+o(t):o(t)}),isNaN(s))return this.opErr(i,"cannot resolve formula "+i.it);this.fnPost(i,s,33)}catch(n){this.opErr(i,n.message)}}],
 [869507692,async function t(n){}],
 [3748028784,async function e(o){console.log({s:o});let a;switch(o.c){case 1:case 255:a=window.location.host;break;case 2:a=window.location.pathname;break;case 3:a=window.location.hash;break;case 4:a=window.location.href;break}this.fnPost(o,a,17)}],
 [3760623407,async function $(t){let e=EE.de(t,1,7,4,.8),o=EE.sizer(t.s,1,7,1.2,.2);console.log({s:t,d:e,labelsize:o});let l=`
  .e${t.o} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin:5px;
    
  }
  .e${t.o}-stat {
    font-size: 4rem;
    font-weight: bold;
  }
    .e${t.o}-label {
    font-size: 1rem;
    font-weight: light;
    }
  `;EE.rec(t,l);let i=`font-size: ${o}rem;`;t.f2&&(EE.pim.aFo(t.f2),i+=`font-family:${EE.ff(t.f2)};`),t.c2&&(i+=`color:${t.c2};`);let f=`font-size: ${e.sz}rem;`,n=t.n1?t.n1:t.t1?this.vmIv(t.t1):t.vmGv(t.V1),c=t.t2?t.t2:t.t1,a=t.ff2||"font-family:sans-serif";t.html=`<div class="${e.cl}" style="${e.sty}${e.ff};${e.fs}">
  <div class="e${t.o}-stat" style="${f}">${n}</div>
  <div class="e${t.o}-label" style="${i}">${c}</div>
  </div>`,this.out(t)}
],
 [1842351594,async function c(t){console.log({every:1,s:t}),console.log(`cancel handle = ${t.id}`);let e=1e3;t.du1&&(e=t.du1),console.log(e);function i(){this.rbonce(t).then(()=>{setTimeout(i.bind(this),e)})}i.bind(this)()}
],
 [1081353459,async function e(i){this.vmGv(i.kw)||this.opErr(i,`A value for <b>${i.kw}</b> is required and it is not defined`)}
],
 [475716439,async function h(a){console.log(`app.build: ${a.c}`);let{user_id:r,plan:o,access_token:c,sberror:l}=await this.sbctx();if(l)return this.opErr(a,`sb error ${l}`);console.log({s:a,user_id:r,plan:o}),await this.usePI("typecheck",{latest:!0}),await this.usePI("apptemplates",{latest:!0});let p=this.fnPre(a).v;p.user_id=r,p.plan=o;let e;try{e=EPI.typecheck.validateApp(p)}catch(s){return this.opErr(a,`zod error ${s.message}`)}console.log({app:e});let t,n;switch(a.c){case 1:t=EPI.apptemplates.gen_admin({app:e});break;case 2:t=EPI.apptemplates.gen_app({app:e}),e.app_html=`https://direct/${e.user_id}/${e.id}/app.html`,n=await EE.EA.stUpload("apps-pub",`${e.id}/app.html`,t,"text/html",10);break;case 3:t=EPI.apptemplates.gen_guide({app:e});break;case 4:t=EPI.apptemplates.gen_info({app:e}),e.info_html=`https://direct/${e.user_id}/${e.id}/info.html`,console.log({output:t,app:e});let{data:s,error:i}=await EE.EA.sb.storage.from("apps-pub").upload(`${e.user_id}/${e.id}/info.html`,t,{cacheControl:"3600",upsert:!0});if(i)return this.opErr(a,`supabase error ${i.message}`);e.result=s;break;case 5:t=EPI.apptemplates.gen_local({app:e});break;case 6:t=EPI.apptemplates.gen_manifest({app:e});break;case 7:t=EPI.apptemplates.gen_preview({app:e});break;case 8:t=EPI.apptemplates.gen_version({app:e});break}console.log({output:t}),console.log("done..."),this.fnPost(a,e,67)}],
 [3144162158,async function e(s){let t=!!this.sb?.userid;this.fnPost(s,t,49)}],
 [3298945618,async function t(o){switch(console.log({s:o}),this.st.lastblk=o.c,o.c){case 1:if(console.log("IF BLOCK START"),this.st.CF.lastvto!==49)throw"if block without adjacent boolean expression";this.VM._IFRES&&this.VM._IFRES.v===!0&&(console.log("executing true if!"),this.st.CF.IF.branch=1,await this.rbonce(o));break;case 2:if(console.log("ELSEIF BLOCK START"),this.st.CF.lastvto!==49)throw"if block without adjacent boolean expression";if(this.st.CF.IF.branch!==0)break;this.VM._ELSEIFRES&&this.VM._ELSEIFRES.v===!0&&(console.log("execute elseif block!"),this.st.CF.IF.branch=2,await this.rbonce(o));break;case 3:if(console.log("ELSE BLOCK START"),this.st.CF.IF.branch!==0)break;this.st.CF.IF.branch=3,await this.rbonce(o);break;case 4:if(console.log("WHILE BLOCK START"),console.log({whileloop:o.pl}),this.st.CF.lastvto!==49)throw"if block without adjacent boolean expression";await this.rbloop(o),console.log("dont with while loop");break;case 5:console.log("LOOP OVER/FOREACH BLOCK START"),console.log({foreach:o.pl});break;case 6:console.log("LOOP TIMES BLOCK START"),await this.rbloop(o);break;default:throw`invalid Block start c= ${o.c}`}console.log({s:o}),delete this.VM._IFRES,delete this.VM._ELSEIFRES}],
 [2982255421,async function t(n){}
],
 [3653731688,async function i(e){let n=e.V1?this.vmIv(e.V1):e.n1,o=this.vmIv(e.t1),a="EngageApp";try{let s=await(await fetch("https://xpesfemail.deno.dev",{method:"POST",headers:{"xpe-op-auth":"xpesfemail","xpe-client-id":"clientidhere"},body:JSON.stringify({From:a,To:`${n}@txt.att.net`,Subject:"",Body:o})})).json();console.log({here:1,result:s,sendResult:s.result.sendResult})}catch(t){this.opErr(e,`sendtext.att send failed: ${t.message}`)}}
],
 [3661967970,async function t(n){}
],
 [1395979437,async function n(t){if(!!!this.st.app?.user?.key)return this.goto(t.fc)}
],
 [2691185611,async function o(t){await this.usePI("engageaccount"),this.fnPre(t);let n=!!localStorage.getItem("sb-rsmnbknzmnakgqjbglqd-auth-token");this.fnPost(t,n,49)}],
 [2549536911,async function t(s){this.st.val=[[Math.random(),33]],this.vmAss()}],
 [2884528215,async function e(t,n){return n}],
 [1730217224,async function a(t){let e;switch(t.c){case 1:e=this.vmIv(t.t1);break;case 2:e=this.vmGv(t.V1);break;case 3:e=this.vmGv(t.R1).email}if(!e)return this.terr("could not resolve email!");this.stOpSet(2149574313,"email","cc",e)}
],
 [1988905540,async function e(t){try{await this.usePI("stripe"),this.stripe=await EPI.stripe.loadStripe(t.t1)}catch(i){this.opErr(t,`stripe.initialize failed: ${i.message}`)}}
],
 [294235903,async function s(t){try{console.log({s:t});let{access_token:e,sberror:i}=await this.sbctx();if(i)return this.opErr(t,`cant resolve sb ${i}. logged in?`);let r=this.fnGetArg(t,"t1",144);if(!r)return this.opErr(t,"missing name");this.log(`creating domain ${r}`);let{error:o,result:n}=await this.ddexe(t.o,{name:r},e);if(o)return this.opErr(t,`dd.exe ${o}`);this.fnPost(t,n,65)}catch(e){this.opErr(t,`domain create failed: ${e.message}`),this.fnPost(t,{},65)}}],
 [3060225175,async function l(e){console.log({s:e}),this.lastoperr=0;try{if(!this.sb?.userid){this.opErr(e,"e.appstorage failed - not logged in");return}let t=`${this.sb.userid}/${e.n1}`,r="apps-pub",{data:i,error:s}=await EE.EA.sb.storage.from(r).list(t,{limit:100,offset:0});if(console.log({data:i,error:s}),s){this.opErr(e,`e.numapps failed - ${s.message}`);return}let o=0;i.forEach(a=>{console.log({d:a}),a?.metadata?.size&&(o+=a.metadata.size)}),this.fnPost(e,o,33)}catch(t){this.opErr(e,`e.newapp failed - ${t.message}`)}}],
 [1092340758,async function o(t){let n=this.fnPre(t),e=new Date(n.v);this.fnPost(t,e.getUTCFullYear(),33)}],
 [3088866029,async function t(n){let o=new Date(`${n.da1} ${n.ti1}`),e=new Date;console.log({s:n,golive:o,now:e})}
],
 [942594827,async function l(o){console.log({s:o});let t=o.v.split(",");t=t.sort(),this.fnPost(o,t,82)}],
 [342814174,async function l(t){try{if(!await this.eali())return this.opErr(t,"not logged in");let a=await this.sbctx();console.log({val:this.st.val});let e=this.fnPre(t).v.id;if(!e)return this.opErr(t,"missing appid");let r=`${a.user_id}/${e}`,{data:i,error:o}=await EPI.engageaccount.sb.storage.from("apps-prv").list(r,{limit:100,offset:0,sortBy:{column:"name",order:"asc"}});console.log({data:i,error:o}),o&&this.opErr(t,o.message),t.onlydirs&&(i=i.filter(s=>s.metadata===null)),t.onlyfiles&&(i=i.filter(s=>s.metadata!==null)),this.fnPost(t,i,85)}catch(a){this.opErr(t,a.message)}}],
 [1819794366,async function s(o){console.log({s:o});let n=this.fnPre(o).v.trim(),t=Uint8Array.from(atob(n),r=>r.charCodeAt(0));console.log({bin:t}),this.fnPost(o,t,99)}],
 [1457600826,async function s(e){console.log({s:e}),this.lastoperr=0;try{await this.use(1,{dev:!0});let{data:t,error:r}=await EE.EA.sb.from("plans").select("*").order("id",{ascending:!0});if(console.log({data:t,error:r}),r){this.opErr(e,r.message);return}this.fnPost(e,t,85)}catch(t){this.opErr(e,`failed: ${t.message}`)}}],
 [3730743191,async function n(t){let[s="result"]=this.st.var,e=!!this.VM[s];this.fnPost(t,e,49)}],
 [587004246,async function f(t){this.fnPost(t,!1,49)}],
 [3140236934,async function l(o){try{this.fnPre(o),console.log("get image"),console.log({s:o});let e=await(await fetch(o.u1)).blob();console.log({result:e}),this.fnPost(o,e,98)}catch(t){console.log({e:t}),this.opErr(o,`failed: ${t.message}`)}}],
 [1554504605,async function t(n){}],
 [3311440032,async function s(e){console.log({s:e});let t=e.fc?this.redirect:2677007441;switch(e.kw){case"loggedin":if(!!!this.st.app?.user?.key)return this.goto(t);default:if(!(e.kw===this.st.app?.user?.role))return this.goto(t)}}
],
 [1727397330,async function t(i){this.uiout("<div>not implemented</div>")}
],
 [2649971845,async function e(t,n){return n}],
 [3947088970,async function r(t){let e=EE.de(t),o=t.c1?t.c1:"black",l=t.bc?t.bc:"white",i=t.oc?t.oc:"darkgray",c=`
  .e${t.o} {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 5px;
    padding: 20px;
    color: ${o};
    font-family: monospace;
    background-color: ${l};
    border: 5px solid ${i};
    border-radius: 10px;
  } 
 .e${t.o}-code {
    width: 100%;
    flex-grow: 1;
  }
    .fluentline {
        width: 100%;
        text-align: left;
        white-space: pre-wrap;
    }

    .flowdef {
        color: blue;
        font-weight: 900;
      }
      
      .flowref {
        color: red;
      }
      
      .flag {
        color: gray;
        font-weight: 300;
      }
      
      .datetime {
        color: steelblue;
        font-weight: 400;
      }
      
      .literal {
        color: steelblue;
        font-weight: 400;
      }
      
      .boolean {
        color: steelblue;
        font-weight: 400;
      }
      
      .tag {
        color: steelblue;
        font-style: italic;
      }
      
      .eltag {
        color: purple;
        font-weight: 900;
        font-style: italic;
      }
      
      .linecomment {
        color: lightgray;
        font-weight: 300;
      }
      
      .element {
        font-weight: 900;
        color: purple;
      }
      
      .section {
        font-weight: 900;
        color: purple;
      }
      .event {
        color: darkcyan;
        font-weight: 900;
      }
      .variable {
        color: slateblue;
        font-weight: 400;
      }
      
      .text {
        color: steelblue;
      }
      .kw {
        font-weight: 900;
      }
      
      .block {
        color: darkcyan;
      }

`;EE.rec(t,c),await this.usePI("highlight",{latest:!0});let n=t.t1.split(`
`);t.html=`<div class="${e.cl}" style="${e.sty}">
  <div id="${t.id}-code" class="${t.o}-code"></div>
  </div>`,this.out(t),console.log({s:t}),EPI.highlight.fluent(`${t.id}-code`,n)}
],
 [3309719638,async function t(n){}],
 [935284613,async function e(t){let r=this.fnPre(t),n=this.fnGetNarg(t);if(!n)throw"non numeric arg!";this.fnPost(t,r.v>=n,49)}],
 [3657617003,async function o(e){let t=e.kw;if(window.EPI||(window.EPI={}),!e.forcereload&&EPI[t]){this.log(`${t} already loaded`);return}let i=e.latest;if(e.wait){await this.usePI(t,{latest:i}),this.log(`${t} loaded`);return}this.usePI(t,{latest:i}).then(()=>{this.log(`${t} loaded`)})}
],
 [767292915,async function n(o){console.log("when.error"),console.log({s:o}),this.stOpSet(o.o,null,"action",o.c)}
],
 [3434888777,async function i(n){let t=this.fnPre(n);if(!t)throw"invar missing/not group";this.fnPost(n,t.v[0],t.t)}],
 [3730660521,async function s(a){let t=new Date;var e=new Date(t.getTime());e.setDate(t.getDate()+(7+5-t.getDay())%7),this.fnPost(a,e,113)}],
 [289322516,async function t(n){}],
 [3645892698,async function t(e){let i=`
    .e${e.o}-screen {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }

    .e${e.o}-main {
      flex-grow: 1;
      width: 100%;
    }
    `;EE.rec(e,i);let n=document.getElementById(`i${this.id}`);n.innerHTML=`
    <div id="i${this.id}_s0" class="e${e.o}-screen">
      <div id="i${this.id}_s0_1970145754" class="e${e.o}-main"></div>
    </div>
    `}
],
 [73895143,async function a(t){let e;switch(t.c){case 1:e=this.vmIv(t.t1);break;case 2:e=this.vmGv(t.V1);break;case 3:e=this.vmGv(t.R1).email}if(!e)return this.terr("could not resolve email!");this.stOpSet(2149574313,"email","from",e)}
],
 [236100868,async function c(t){EE.setcss(t.t1,t.t2)}],
 [1344952928,async function s(e){try{let t="app@engage.run",n=this.fnGetArg(e,"n1",160),o=this.vmIv(e.t1);if(!o)return this.opErr(e,"empty/missing message text");if(!n)return this.opErr(e,"empty/missing phone number");let r=await(await fetch(`https://o${e.o}.deno.dev`,{method:"POST",headers:{"xpe-op-auth":e.o,"xpe-client-id":"clientidhere"},body:JSON.stringify({number:n,text:o})})).json();console.log({here:1,result:r})}catch(t){this.opErr(e,`sms send failed: ${t.message}`)}}
],
 [2992574536,async function i(t){let o=EE.elFs(t.s,1,9,16,2),n=EE.elCo(t),e=EE.elFo(t),l="";t.disabled&&(l+=" disabled"),t.pill&&(l+=" btn-pill"),this.uiout(`<button style="${o}${n}" class="btn btn-primary ${l}">${t.t1}</button>`),t.F1&&console.log("FLOW GOTO!")}
],
 [1240892680,async function t({t1:n}){return"<div></div>"}
],
 [3647688301,async function o(t){let e=EE.de(t),i=`
  .group {
    position: relative;
   }
   
   .input {
    font-size: 16px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 200px;
    border: none;
    border-bottom: 1px solid #515151;
    background: transparent;
   }
   
   .input:focus {
    outline: none;
   }
   
   label {
    color: #999;
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
   }
   
   .input:focus ~ label, .input:valid ~ label {
    top: -20px;
    font-size: 14px;
    color: #5264AE;
   }
   
   .bar {
    position: relative;
    display: block;
    width: 200px;
   }
   
   .bar:before, .bar:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #5264AE;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
   }
   
   .bar:before {
    left: 50%;
   }
   
   .bar:after {
    right: 50%;
   }
   
   .input:focus ~ .bar:before, .input:focus ~ .bar:after {
    width: 50%;
   }
   
   .highlight {
    position: absolute;
    height: 60%;
    width: 100px;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
   }
   
   .input:focus ~ .highlight {
    animation: inputHighlighter 0.3s ease;
   }
   
   @keyframes inputHighlighter {
    from {
     background: #5264AE;
    }
   
    to {
     width: 0;
     background: transparent;
    }
   }
  `;EE.rec(t,i),t.html=`
  <div class="group">
  <input required="" type="text" class="input">
  <span class="highlight"></span>
  <span class="bar"></span>
  <label>Name</label>
    </div>
  
  `,this.out(t)}
],
 [1902124132,async function i(t){let e=EE.de(t,1,5,16,2),l=this.vmChkGet(t.V1,208);if(!l)return-1;t.html=`<ul style="text-align:left;${e.sty}">`,l.forEach(h=>t.html+=`<li>${h}</li>`),t.html+="</ul>",this.out(t)}
],
 [2909819128,async function t(o){console.log({APPUSER:1,s:o}),this.st.au[o.id]=o.pl}
],
 [3886214520,async function r(t){switch(console.log({s:t}),t.c){case 1:let o=this.stOpGet(t.o,"appname")||"defaultname",s=this.stOpGet(t.o,"source")||`[start]
.text "Welcome to app ${o}!"
`;if(console.log({appname:o,source:s}),!this.sb.token)return this.terr(":logged in user not found!");let{error:e}=await EE.EA.sb.from("apps").insert({name});if(e)return this.opErr(t,`createapp failed - ${e.message}`),this.terr(e);break;case 2:t.t1=this.vmIv(t.t1),this.stOpSet(t.o,null,"appname",t.t1);break;case 3:let a=this.vmGv(t.V1);this.stOpSet(t.o,null,"source",a);break}}
],
 [3131281747,async function o(t){let a=EE.de(t,1,20,4,.5);console.log({s:t}),await EE.usePI("maps",{latest:!0});let d=`
  el-map {
    background-color: red;
    padding:10px;
  }
  `;EE.rec(t,d),t.html=`<div id="${t.id}">map!</div>`,this.out(t)}
],
 [3894252756,async function o(e){if(EE.inl[e.c]){console.log(`INLINE ${e.c} DUPLICATE PREVENTED`);return}let c=new TextDecoder("utf-8").decode(e.pl),n=document.createElement("script");n.innerText=c,document.head.appendChild(n),console.log(`INLINED ${e.c}`)}
],
 [2972726132,async function t(n){}
],
 [1040835234,async function t(n){}
],
 [237044130,async function f(t){this.fnPost(t,!1,49)}],
 [3457413217,async function t(n){}],
 [3668615296,async function l(o){console.log("BLOCK END"),console.log({s:o})}
],
 [3067396664,async function e(t){let n=this.VM[t.V1];if(n.t!=33)throw"not a number";this.vmSetType(t.V1,33,n.v-1)}],
 [12996001,async function e(t){try{let r=this.fnPre(t);if(!r)return this.opErr(t,"no input");let n=JSON.parse(r.v),o=Array.isArray(n)?85:65;this.fnPost(t,n,o)}catch(r){this.opErr(t,r.message),console.error(r)}}],
 [3202993218,async function n(t){if(!this.timer){this.opErr(t,"timer.elapsed - no timer set"),this.fnPost(t,0,33);return}let e=performance.now()-this.timer;this.fnPost(t,e,33)}],
 [1834776899,async function t({t1:n}){return"<div></div>"}
],
 [3356434120,async function t({t1:n}){return"<div></div>"}
],
 [1118728175,async function a(t){try{if(!await this.eali())return this.opErr(t,"not logged in");let r=await this.sbctx(),o=this.fnPre(t).v.id;if(!o)return this.opErr(t,"missing appid");let s=`${r.user_id}/${o}`,{data:e,error:i}=await EPI.engageaccount.sb.storage.from("apps-prv").remove([`${s}/${t.t1}`]);if(console.log({data:e,error:i}),i)return this.opErr(t,i.message);this.fnPost(t,e,65)}catch(r){this.opErr(t,r.message),this.fnPost(t,{error:!0},65)}}],
 [3826747632,async function o(t){let n=this.fnPre(t),f=this.fnGetNarg(t);this.fnPost(t,n.v/f,n.t)}],
 [708664682,async function o(n){let t=this.fnPre(n);this.fnPost(n,t.v.join(","),17)}],
 [3901605937,async function t({t1:n}){return"<div></div>"}
],
 [1140045163,async function s(e){let t=EE.de(e,1,5,1.6,.2);console.log({s:e,d:t});let r=e.c1?e.c1:"#47da99",o=e.c2?e.c2:"#ccc",h=`
  /* Hide the default checkbox */
.e${e.o} input {
 position: absolute;
 opacity: 0;
 cursor: pointer;
 height: 0;
 width: 0;
}

.e${e.o} {
    display: flex;
    align-items: center;
    justify-content: center;
}

.e${e.o}-container {
 display: block;
 position: relative;
 cursor: pointer;
 font-size: 20px;
 user-select: none;
}

/* Create a custom checkbox */
.checkmark {
 position: relative;
 top: 0;
 left: 0;
 height: 1.3em;
 width: 1.3em;
 background-color: ${o};
 transition: all 0.3s;
 border-radius: 5px;
}

/* When the checkbox is checked, add a blue background */
.e${e.o} input:checked ~ .checkmark {
 background-color: ${r};
 animation: pop 0.5s;
 animation-direction: alternate;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
 content: "";
 position: absolute;
 display: none;
}

/* Show the checkmark when checked */
.e${e.o} input:checked ~ .checkmark:after {
 display: block;
}

/* Style the checkmark/indicator */
.e${e.o} .checkmark:after {
 left: 0.45em;
 top: 0.25em;
 width: 0.25em;
 height: 0.5em;
 border: solid white;
 border-width: 0 0.15em 0.15em 0;
 transform: rotate(45deg);
}

@keyframes pop {
 0% {
  transform: scale(1);
 }

 50% {
  transform: scale(0.9);
 }

 100% {
  transform: scale(1);
 }
}
  
  `;EE.rec(e,h),this.fnPre(e);let i=this.st.var[0]?this.st.var[0]:"result",n=e.vto;console.log({vn:i,vto:n});let a="";if(e.t1){let c=this.vmIv(e.t1);a=`<div style="${t.ff}">${c}</div>`}if(e.html=`
    <div class="${t.cl}" style="${t.sty}">
  <label class="${e.o}-container">
  <input id="${e.id}-input" type="checkbox"  onchange="EE.E['${this.id}'].input({ vn: '${i}',vto:${n},value : this.checked?true:false})" checked="checked">
    <div class="checkmark" style="background-color:${o}"></div>
  </label>
  </div>
    ${a}
`,this.out(e),this.st.wait){let c=function(){this.st.halt=!1,this.exe()};document.getElementById(e.id+"-input").addEventListener("change",c.bind(this)),this.st.halt=!0,this.st.wait=!1,console.log("wait input forced halt")}}
],
 [3248920837,async function a(t){let e=document.getElementById(`i${this.id}_s0`),i=`#i${this.id}_s0`,o;if(t.I1?o=o=this.rit(t.I1):t.u1&&(o=t.u1),o){t.u1&&(o=this.vmIv(t.u1)),e.style.backgroundSize="cover",e.style.backgroundPosition="center",e.style.backgroundRepeat="no-repeat",e.style.backgroundImage=`url(${o})`;return}if(t.fog){let c=function(){VANTA.FOG({el:i,mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,...r})},r={};t.c1&&(r.baseColor=t.c1),t.c2&&(r.lowlightColor=t.c2),t.c3&&(r.midtoneColor=t.c3),t.c4&&(r.highlightColor=t.c4),EE.pim.aScr("d3","https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"),EE.pim.aScr("fog","https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.fog.min.js",c);return}if(t.clouds){let r=function(){VANTA.CLOUDS({el:i,mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200})};EE.pim.aScr("d3","https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"),EE.pim.aScr("clouds","https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.clouds.min.js",r);return}let n;if(t.radial)n="radial-gradient(";else{let r="to bottom";t.horizontal?r="to right":t.diagonal&&(r="to bottom right"),n=`linear-gradient(${r},`}if(t.c4){e.style.backgroundColor="transparent",e.style.backgroundImage=`${n}${t.c1}, ${t.c2},${t.c3},${t.c4},${t.c5})`;return}if(t.c4){e.style.backgroundColor="transparent",e.style.backgroundImage=`${n}${t.c1}, ${t.c2},${t.c3},${t.c4})`;return}if(t.c3){e.style.backgroundColor="transparent",e.style.backgroundImage=`${n}${t.c1}, ${t.c2},${t.c3})`;return}if(t.c2){e.style.backgroundColor="transparent",e.style.backgroundImage=`${n}${t.c1}, ${t.c2})`;return}EE.setcss("screen-color",t.c1),e.style.background="",e.style.backgroundColor=t.c1,t.html="<div>screen222!</div>",this.out(t)}
],
 [482826512,async function t(n){}],
 [1284506988,async function l(t){this.fnPre(t),await this.usePI("fluentref",{latest:!0});let i=EPI.fluentref;t.t1=this.vmIv(t.t1);let f;t.t1?f=i.filter(e=>e.type==="d"&&e.cat===t.t1):f=i.filter(e=>e.type==="d"),this.fnPost(t,f,85)}],
 [436128402,async function e(t){let o=this.vmIv(`${t.t1}`);console.log(`::::: ${o}`),t.html=`<pre>${o}</pre>`,this.out(t)}
],
 [709371716,async function i(t){if(console.log({s:t}),!document.getElementById(`i${this.id}`)){this.opErr(t,"instance root not found!"),this.terr("instance root not found!");return}let e=`i${this.id}_s${t.c}`;if(document.getElementById(e)){console.log(`screen ${e} already exists!!!!`);return}let o=t.t1.replace(/INST/g,this.id);console.log({screendef:o});let n=document.createElement("template");n.innerHTML=o,document.body.appendChild(n.content.cloneNode(!0)),this.st.SCR=t.c,this.vlo.set(t.c,{def:t.t1})}
],
 [420910154,async function t(n){}
],
 [1149921006,async function w(e){try{let E=function(l,i){if(l)return this.opErr(e,l.message);console.log("image added",i);let a={size:i.fileSize,extension:i.fileExtension,name:i.filename,status:i.status},P=this.st.var[0]?this.st.var[0]:"result",n=new FileReader;n.onloadend=()=>{let s=n.result;console.log({img_data:s}),a.bin=s,this.input({vn:P,vto:98,value:a}),this.st.halt&&(this.st.halt=!1,this.exe())},n.readAsDataURL(i.file)};EE.pim.aIcons(),await this.usePI("filepond",{latest:!0}),EE.pim.aLnk("fppreview","https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css"),EE.pim.aLnk("filepond","https://unpkg.com/filepond@^4/dist/filepond.css");let t=`
  .e${e.o} {
    width: 50%;
    margin: 5px;
  }
  .filepond--panel-root {
    background-color: ${e.bc?e.bc:"#eee"};
    }
  .filepond--file {
    color: ${e.c1||"#555"};
   }
   .filepond--drop-label {
    color: ${e.c1||"#555"};
}
  `;EE.rec(e,t);let d=EE.de(e,1,5,150,25),c=e.i1?`<iconify-icon width="36" icon="${this.rict(e.i1)}"></iconify-icon>`:"",p=e.t1?`${c}<br/>${e.t1}`:"Drag & Drop your files or <span class='filepond--label-action'>Browse</span>";e.html=`<div class="${d.cl}"><input id="${e.id}-input" class="filepond" name="filepond" type="file"/></div>`,this.out(e);let{Filepond:o,FilePondPluginFileEncode:r,FilePondPluginFileValidateSize:u,FilePondPluginFileValidateType:f,FilePondPluginImagePreview:g,FilePondPluginImageTransform:h}=EPI.filepond;o.registerPlugin(r,u,f,g,h);let m=document.getElementById(`${e.id}-input`);o.create(m,{acceptedFileTypes:["image/*"],imagePreviewHeight:200,checkValidity:!0,credits:!1,labelIdle:p}).on("addfile",E.bind(this)),this.st.wait&&(this.st.halt=!0,this.st.wait=!1)}catch(t){this.opErr(e,t.message),console.error(t)}}
],
 [3461968472,async function t({t1:n}){return"<div></div>"}
],
 [2472845810,async function d(o){let t=EE.de(o,1,5,300,50),c=t.sz*(2/3),s=`
  .e${o.o} {
    background-color: black;
    border-radius: 10px;
    margin: 2px;
  }
  `;EE.rec(o,s);let e=this.vmIv(o.u1);o.html=`<div class="${t.cl}" style="${t.sty}"><video width="${t.sz}" height="${c}" controls>
        <source src="${e}" type="video/mp4">
        </video></div>`,this.out(o)}
],
 [3679898674,async function s(a){let[t,...e]=a.pl.split(";~");this.p({ask:"ask",phrase:t,extvars:e}),await this.execute({op:112,cmd:31,pl:`t1|${t}`}),await this.execute({op:112,cmd:19,pl:`t1|${t}`})}],
 [376415461,async function t(n){}],
 [2943047084,async function e(t,n){return n}],
 [548300475,async function i(t){try{let n=this.fnGetArg(t,"n1",33);await this.usePI("typecheck",{latest:!0}),this.fnPre(t);let r="usd";t.usd&&(r="usd");let{result:e}=await this.ddexe(t.o,{amount:n,currency:r,test:t.test});if(console.log({result:e}),!e.success)return this.opErr(t,`dd.exe ${e.error}`);let a=e?.result?.paymentIntent;if(!a)return this.opErr(t,"stripe.create.paymentintent : no paymentIntent");let s=EPI.typecheck.validateStripePaymentIntent(a);this.fnPost(t,s,65)}catch(n){this.opErr(t,`stripe.create.paymentintent failed: ${n.message}`)}}],
 [2352714889,async function c(t){switch(t.c){case 1:this.st.app.color=t.c1,document.body.style.backgroundImage="",document.body.style.backgroundColor=t.c1;return;case 2:let o="linear-gradient(to bottom,";document.body.style.backgroundColor="transparent",document.body.style.backgroundImage=`${o}${t.c1}, ${t.c2})`;return;case 3:let n="linear-gradient(to bottom,";document.body.style.backgroundColor="transparent",document.body.style.backgroundImage=`${n}${t.c1}, ${t.c2},${t.c3})`;return;case 4:case 5:let e;t.I1?e=e=this.rit(t.I1):t.u1&&(e=t.u1),t.u1&&(e=this.vmIv(t.u1)),document.body.style.backgroundSize="cover",document.body.style.backgroundPosition="center",document.body.style.backgroundRepeat="no-repeat",document.body.style.backgroundImage=`url(${e})`,this.st.app.image=e;return;default:this.opError("invalid input type to app.background")}}
],
 [2185638690,async function t(s){if(console.log("else exec!"),!this.st.CF.IF)throw"standalone ELSE..this is bad dude";this.st.CF.blktype=3,this.st.CF.IF.branch=3}],
 [217269789,async function i(t){let e=EE.de(t);EE.pim.aLnk("shoelace","https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0/dist/themes/light.css"),await this.usePI("shoelace",{latest:!0}),await this.usePI("editor",{latest:!0});let l=t.n1?t.n1:1,s=`
  .e${t.o} {
    width: 100%;
  }
  `;EE.rec(t,s),t.html=`<div class="${e.cl}" style="${e.sty}">
  <sl-split-panel>
  <div
    slot="start"
    style="height: 200px; background: var(--sl-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Editor
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--sl-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Render
  </div>
</sl-split-panel>

  </div>`,this.out(t)}
],
 [2786201083,async function e(t){switch(console.log({s:t}),t.c){case 1:this.stOpSet(t.o,null,"set",t.t1);break;case 2:EE.setcss("icon-size",t.n1),this.stOpSet(t.o,null,"size",t.n1);break;case 3:EE.setcss("icon-color",t.c1),this.stOpSet(t.o,null,"color",t.c1);break;default:this.terr(`fatal :icon error - ${t.c}?`)}}
],
 [848426702,async function n(a){EE.pim.aLnk("animation","https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"),EE.elanim=EE.anim.zoomIn?EE.anim.zoomIn:"animate__animated animate__zoomIn"}
],
 [123830045,async function t({t1:n}){return"<div></div>"}
],
 [2280667419,async function c(o){await this.usePI("flcc"),console.log({s:o}),console.log(window.EPI)}
],
 [1953958444,async function l(t){try{if(!await this.eali())return this.opErr(t,"not logged in");let a=await this.sbctx();console.log({val:this.st.val});let e=this.fnPre(t).v.id;if(!e)return this.opErr(t,"missing appid");let r=`${a.user_id}/${e}`,{data:i,error:o}=await EPI.engageaccount.sb.storage.from("apps-pub").list(r,{limit:100,offset:0,sortBy:{column:"name",order:"asc"}});console.log({data:i,error:o}),o&&this.opErr(t,o.message),t.onlydirs&&(i=i.filter(s=>s.metadata===null)),t.onlyfiles&&(i=i.filter(s=>s.metadata!==null)),this.fnPost(t,i,85)}catch(a){this.opErr(t,a.message)}}],
 [2149167613,async function r(t){await this.usePI("engageaccount");let e=this.fnPre(t).v;if(!e)return this.opErr(t,"can't find app");let{data:n,error:a}=await EPI.engageaccount.sb.from("appsecrets").select().eq("id",e.id);if(a)return this.opErr(t,`supabase ${a.message}`);this.fnPost(t,n,85)}],
 [209431440,async function n(s){this.fnPre(s),await this.usePI("sounds",{latest:!0});let t;switch(s.c){case 1:this.fnPost(s,EPI.sounds.types,82);return;case 2:t=EPI.sounds.sounds.filter(e=>e.t==="tap"),this.fnPost(s,t,82);return;case 3:t=EPI.sounds.sounds.filter(e=>e.t==="beep"),this.fnPost(s,t,82);return;case 4:t=EPI.sounds.sounds.filter(e=>e.t==="event"),this.fnPost(s,t,82);return;case 5:t=EPI.sounds.sounds.filter(e=>e.t==="slide"),this.fnPost(s,t,82);return;case 255:default:this.fnPost(s,EPI.sounds.sounds,82);return}}],
 [2777836032,async function e(t){this.st.noreplace=!0}
],
 [1318540850,async function e(o){console.log("run secure"),console.log({s:o})}],
 [3059005648,async function t(a){this.fnPre(a);let i={arabic:1,english:3,french:5,german:2,italian:6,japanese:7,korean:8,mandarin:11,portuguese:9,russian:10,spanish:4,ar:1,de:2,en:3,es:4,fr:5,it:6,jp:7,ko:8,pt:9,ru:10,zh:11};if(a.kw){let n=i[a.kw];if(!n){this.opErr(a,`invalid language ${a.kw}`);return}this.st.app.lang=n,this.st.app.langname=a.kw}this.fnPost(a,this.st.app.langname,17)}],
 [3526169920,async function h(e){let c=EE.de(e,1,5,32,6),a=EE.sizer(e.s,1,5,32,6),i=this.dinp(e);e=this.de(e,!1),console.log({s:e,S:a,d:c,dinp:i});let t="";e.t1&&(t=`<div>${this.vmIv(e.t1)}</div>`);let r=e.c1?e.c1:"#47da99",o=e.c2?e.c2:"#ccc",n=`
  /* Hide the default checkbox */
.e${e.o} input {
 position: absolute;
 opacity: 0;
 cursor: pointer;
 height: 0;
 width: 0;
}

.e${e.o} {
 display: block;
 position: relative;
 cursor: pointer;
 font-size: 20px;
 user-select: none;
}

/* Create a custom checkbox */
.checkmark {
 position: relative;
 top: 0;
 left: 0;
 height: 1.3em;
 width: 1.3em;
 background-color: ${o};
 transition: all 0.3s;
 border-radius: 5px;
}

/* When the checkbox is checked, add a blue background */
.e${e.o} input:checked ~ .checkmark {
 background-color: ${r};
 animation: pop 0.5s;
 animation-direction: alternate;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
 content: "";
 position: absolute;
 display: none;
}

/* Show the checkmark when checked */
.e${e.o} input:checked ~ .checkmark:after {
 display: block;
}

/* Style the checkmark/indicator */
.e${e.o} .checkmark:after {
 left: 0.45em;
 top: 0.25em;
 width: 0.25em;
 height: 0.5em;
 border: solid white;
 border-width: 0 0.15em 0.15em 0;
 transform: rotate(45deg);
}

@keyframes pop {
 0% {
  transform: scale(1);
 }

 50% {
  transform: scale(0.9);
 }

 100% {
  transform: scale(1);
 }
}
  
  
  `;EE.rec(e,n),e.html=`
  <label class="${c.cl}">
  <input type="checkbox" checked="checked">
    <div class="checkmark" style="background-color:${o}"></div>
    ${t}
  </label>
`,this.out(e)}
],
 [3741839480,async function a(t){let l=EE.de(t);t.html=`<div class="${l.cl}" style="${l.sty}">variables for ${t.n1}</div>`,this.out(t)}
],
 [3856342336,async function r(t){try{if(!this.fnGetTarg(t))return this.opErr(t,"value not cannot be resolved");let e=await(await fetch(`https://o${t.o}.xpes.workers.dev/api/inbox/list`)).json();console.log({result:e})}catch(o){console.log(o),this.opErr(t,o.message)}}
],
 [877315399,async function l(t){if(!this.st?.app?.key)return this.opErr(t,"login requires an app key not set");this.fnPre(t);let r=this.fnGetArg(t,"t1",144),o=t.V2?this.vmGv(t.V2):t.t2?t.t2:this.vmGv(t.V1);if(!r||!o){this.opError(t,"username and passcode required",144);return}console.log({s:t,username:r,passcode:o});async function a(h){let c=new TextEncoder().encode(h),p=await crypto.subtle.digest("SHA-256",c);return Array.from(new Uint8Array(p)).map(u=>u.toString(16).padStart(2,"0")).join("")}let s=await a(o);console.log({hashpw:s});let i=35,{error:n,result:e}=await this.ddexe(t.o,{appkey:this.st.app.key,app_id:i,username:r,hashpw:s});if(this.st.app.user={key:e.result.usertoken,...e.result.usertokendecode},n)return this.fnPost(t,e,65),this.opErr(t,`dd.exe ${n}`);console.log({result:e}),this.fnPost(t,e,65)}
],
 [3722596985,async function t({t1:n}){return"<div></div>"}
],
 [2737282855,async function $(t){console.log({s:t}),EE.pim.aIcons();let o=EE.de(t,1,7,1,.2),e=EE.sizer(t.s,1,7,30,10),r=this.stOpGet(t.o,"style")||"";t.i1&&(t.i1=this.rict(t.i1));let a=EE.icfy(t.i1,e),c=this.dbut(t),n={},d;t.fc&&(n.goto=t.fc),t.value&&(n.value=this.vmIv(t.value),n.vn=this.st.var[0]||"result",n.vto=17,this.st.clickctx=this.coV(n.value)[0]),d=`onclick='EE.E["${this.id}"].input(${JSON.stringify(n)})'`,console.log({s:t,decode:o,dbut:c});let v=`
  .e${t.o} {
    display:flex;
    color: var(--button-color,#292929);
    background-color: var(--button-background,#dddddd);
    border-radius: var(--button-rounded,5px);
    font-family: var(--button-font,Arial);
    align-items: center;
    jutify-content: space-between;
    border: 1px solid transparent;
    text-align:center;
    margin:1px;
    padding: 20px 10px;
  }
  `;EE.rec(t,v);let s="",u="";t.square&&(s+=`padding:10px;width:${e}px;height:${e}px;font-size:${e/5}px;`),t.round&&(s+=`padding:10px;width:${e}px;height:${e}px;font-size:${e/5}px;border-radius:9999px`);let i;switch(t.c){case 1:case 2:case 3:i=`<div>${c.text}</div>`;break;case 4:case 5:i=`<div>${a}</div>`;break;case 6:case 8:i=`<div>${a}</div><div class="m2">${c.text}</div>`;break;case 7:case 9:i=`<div class="m2">${c.text}</div><div>${a}</div>`;break;case 10:case 11:i=`<div class="m2">${t.t1?t.t1:t.V1}</div>`,d=`onclick="EE.E['${this.id}'].vnToggle('${t.V1}')"`;break;default:i=`<div>${a}</div><div class="m2">${c.text}</div>`}if(t.html=`<button id="${t.id}-event" class="${o.cl}" style="${r}${o.fs}${o.sty};${s}${u}" ${d}>${i}</button>`,this.out(t),this.st.wait){let l=function(){this.st.halt=!1,this.st.wait=!1,this.exe()};document.getElementById(t.id+"-event").addEventListener("click",l.bind(this)),this.st.halt=!0,console.log("wait button forced halt!")}}
],
 [2137000782,async function i(e){let d=EE.de(e,1,5,200,20),a=`
  .e${e.o} {}
   
  `;EE.rec(e,a),await this.usePI("signaturepad",{latest:!0}),e.html=`<div id="${e.id}" class="${d.cl}" style="${d.sty}"></div>`,this.out(e);let t=document.createElement("canvas");t.id=`${e.id}-canvas`,t.height=80,t.width=400,t.style.backgroundColor="blue",t.style.borderRadius="5px",document.getElementById(`${e.id}`).appendChild(t);let n=new EPI.signaturepad(t,{penColor:"red"})}
],
 [2001199716,async function o(i){if(!this.PII.twilio){this.opErr(i,"twilio.send - no twilio plugin");return}console.log({s:i})}
],
 [684341294,async function o(n){let t=this.fnPre(n);this.fnPost(n,t.v.join(" "),17)}],
 [1703373537,async function h(t){let{user_id:p,access_token:l,sberror:n}=await this.sbctx();if(n)return this.opErr(t,`cant resolve sb ${n}`);let e=this.fnPre(t);if(!e.v.id)return this.opErr(t,"app is missing id field...");let i=t.t1,s=this.vmGv(t.V1);if(!i)return this.opErr(t,"no path can be resolved");if(!s)return this.opErr(t,"no content can be resolved");let[o,...a]=i.split("/"),c=a.join("/"),r;switch(o){case"public":r=await EE.EA.stUpload("apps-pub",`${e.id}/${c}`,s,"text/plain",300);case"private":}console.log({R:r}),e.v.newfield="newvalue"}],
 [1947096648,async function s(t){let a=await(await fetch("https://api.ipify.org/")).text();this.fnPost(t,a,17)}],
 [1108918600,async function n(e,t){return t[0]===e}],
 [3346553026,async function l(t){this.fnPre(t),await this.usePI("fluentref",{latest:!0});let i=EPI.fluentref;t.t1=this.vmIv(t.t1);let f;t.t1?f=i.filter(e=>e.type==="ev"&&e.cat===t.t1):f=i.filter(e=>e.type==="ev"),this.fnPost(t,f,85)}],
 [1129142620,async function c(t){let n=this.fnPre(t),o=this.VM[t.v1]?this.VM[t.v1].v:null;console.log({s:t,vr:n,a1:o}),this.fnPost(t,n.v||o,49)}],
 [976034582,async function t({t1:n}){return"<div></div>"}
],
 [1494109696,async function t(s){if(console.log("elseif exec..."),!this.st.CF.IF)throw"standalone ELSEIF..this is bad dude";this.st.var=["_ELSEIFRES"],this.st.val=[]}],
 [1312587681,async function n(t){console.log(`section set to ${t.fc}`),console.log({s:t}),this.st.singlesection=!!(t.c&240);let o=t.c&15,c=o===0?this.st.SCR:o,e=`i${this.id}_s${c}_${t.fc}`,s=document.getElementById(e);s||console.log(`target section ${e} not found!`),this.st.SEC=t.fc,console.log(`target section: ${e}`),this.st.targetsec=e,this.domptr=s}
],
 [810432197,async function o(t){await this.use(2,{dev:!0});let n=t.n1;if(!EE.ED[n])return this.opErr(t,`editor instance ${n} not found`);let e=EE.ED[n].getSource();this.fnPost(t,e,17)}],
 [1736786937,async function t({t1:n}){return"<div></div>"}
],
 [1107177570,async function c(t){let n=t.n1?Number(t.n1):t.t1;this.stOpSet(t.o,null,t.c,n)}
],
 [279096510,async function a(t){this.st.halt=!1,await this.exe()}
],
 [3031867354,async function c(t){switch(t.c){case 255:this.fnPost(t,t.v,17);break;case 1:this.fnPost(t,`source for instance ${t.n1}`,17);break}}],
 [2106461346,async function t(n){}],
 [1558936360,async function i(t){let e=this.vmGv(t.V1),o;if(!this.stOpGet(t.o,"loaded")){let a=await import("https://cdn.jsdelivr.net/npm/mermaid@9/dist/mermaid.esm.min.mjs");this.stOpSet(t.o,!1,"loaded",!0),console.log({ff:a}),o=a.default}if(!e)return this.terr("no markdown!");console.log({markdown:e}),t.html=`
  <pre class="mermaid">${e}</pre>`,this.out(t),o.initialize({startOnLoad:!0})}
],
 [371079684,async function o(e){this.fnPre(e),EE.pim.aScr("d3","https://d3js.org/d3.v3.min.js");let s=this.vmGv(e.V1);var t=[{label:"Dell LAPTOP",value:1,question:"What CSS property is used for specifying the area between the content and its border?"},{label:"IMAC PRO",value:2,question:"What CSS property is used for changing the font?"},{label:"SUZUKI",value:3,question:"What CSS property is used for changing the color of text?"},{label:"HONDA",value:4,question:"What CSS property is used for changing the boldness of text?"},{label:"FERRARI",value:5,question:"What CSS property is used for changing the size of text?"},{label:"APARTMENT",value:6,question:"What CSS property is used for changing the background color of a box?"},{label:"IPAD PRO",value:7,question:"Which word is used for specifying an HTML tag that is inside another tag?"},{label:"LAND",value:8,question:"Which side of the box is the third number in: margin:1px 1px 1px 1px; ?"},{label:"MOTOROLLA",value:9,question:"What are the fonts that don't have serifs at the ends of letters called?"},{label:"BMW",value:10,question:"With CSS selectors, what character prefix should one use to specify a class?"}];await this.usePI("spinwheel",{latest:!0});let i=`
    .e${e.o} {
        width:100%;
        height:200px;
    }
    `;EE.rec(e,i);let a=EE.de(e);e.html=`<div id="${e.id}" class="${a.cl}"><div id="${e.id}-spin"></div></div>`,this.out(e),EPI.spinwheel.spin(`${e.id}-spin`,t),this.fnPost(e,44,17)}
],
 [967411707,async function s(t){let c=EE.de(t);console.log({s:t});let d=t.n1?t.n1:1,a=t.n1?`xpe${d}`:"xpe1";if(t.c>8){t.html=`<div>run sim ${d} with ${t.V1} value</div>`,this.out(t);return}let l=new Map([[1,[360,640,.8]],[2,[360,640,.8]],[3,[640,320,.25]],[4,[640,320,.25]],[5,[1200,600,.2]],[6,[1200,600,.2]],[7,[360,320,.8]],[8,[360,320,.8]]]),[e,o,i]=l.get(t.c);console.log({s:t,w:e,h:o,scale:i});let h=`
<style>
/* The device with borders */
#${t.id} .smartphone {
  --md-border: black;
  --md-width: ${e}px;
  --md-height: ${o}px;
  --md-scale: ${i};
}

#${t.id}-device {
  scale: ${i};
  position: relative;
  width:  ${e}px;
  height: ${o}px;
  margin: auto;
  border: 16px var(--md-border) solid;
  border-top-width: 60px;
  border-bottom-width: 60px;
  border-radius: 36px;
  background-color: blue;
}

/* The horizontal line on the top of the device */
.smartphone:before {
  content: "";
  display: block;
  width: 60px;
  height: 5px;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #333;
  border-radius: 10px;
}

/* The circle on the bottom of the device */
.smartphone:after {
  content: "";
  display: block;
  width: 35px;
  height: 35px;
  position: absolute;
  left: 50%;
  bottom: -65px;
  transform: translate(-50%, -50%);
  background: #333;
  border-radius: 50%;
}

/* The screen (or content) of the device */
#${t.id}-content {
  background: white;
}

#${t.id} .id {
    background-color:gray;
    font-size:0.5rem;
    color: white;
}
</style>
`;t.html=`${h}
  <div id="${t.id}-container" style="background-color:pink;">
    <div id="${t.id}-device" class="${c.cl} smartphone" style="width:${e};height:${o};">
        <div id="${t.id}-content" class="content" style="width:${e};height:${o};">
            <div
            style="
                width: 100%;
                border: none;
                height: 100%;
            "
            >
                <div style="font-size:4rem;font-family:Arial;text-align:center;">${d}</div>
            </div>
        </div>
    </div>
    </div>
  `,this.out(t);let n=e*i,r=o*i;console.log({scw:n,sch:r}),document.getElementById(`${t.id}-container`).style.width=n,document.getElementById(`${t.id}-container`).style.height=r}
],
 [4164497830,async function a(t){this.fnPre(t),await this.usePI("engageaccount");let s=await this.sbctx();this.fnPost(t,s.user_id,17)}],
 [889639487,async function o(t){this.fnPre(t),this.lastoperr=0;try{if(!await this.eali())return this.opErr(t,"not logged in");let r="id",e;switch(t.c){case 1:e=this.vmIv(t.t1),r="name";break;case 2:e=t.n1;break;case 3:e=this.vmGv(t.V1),r=typeof e=="string"?"name":"id";break;default:return this.opErr(t,`invalid command ${t.c}`)}if(!e)return this.opErr(t,"missing argument");if(!this.fnGetArg(t,"n1",160))return this.opErr(t,"could not resolve appid");let{data:a,error:i}=await EPI.engageaccount.sb.from("apps").select("*").eq(r,e).single();if(console.log({data:a,error:i}),i)throw Error(i.message);this.fnPost(t,a,67)}catch(r){this.fnPost={},this.opErr(t,r.message)}}],
 [1310212717,async function r(o){let t=EE.de(o,1,5,5,2),e=`
  .loader {
    --loader-color: ${o.c1?o.c1:"#0071e2"};
    width: 60%;
    border-radius: 30px;
    background-color: rgba(0,0,0,0.2);
    position: relative;
    margin: 1px;
   }
   
   .loader::before {
    content: "";
    position: absolute;
    background: var(--loader-color);
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    border-radius: 30px;
    animation: moving 1s ease-in-out infinite;
    ;
   }
   
   @keyframes moving {
    50% {
     width: 100%;
    }
   
    100% {
     width: 0;
     right: 0;
     left: unset;
    }
   }
  `;EE.rec(o,e),o.html=`<div class="loader" style="height:${t.sz}px"></div>`,this.out(o)}
],
 [2373850683,async function t(n){}
],
 [2313622946,async function t(n){}
],
 [4172052876,async function t(n){}],
 [949961452,async function t({t1:n}){return"<div></div>"}
],
 [2015862539,async function s(t){if(this.st.CF.K.length===0)return console.log("not in block..continue ignored");this.st.CF=this.st.K.pop(),this.VM._IFRES=this.st._IFRES,this.VM._ELSEIFRES=this.st._ELSEIFRES,this.FM.D=this.st.CF.bin,this.FM.os=this.st.CF.os,console.log(`continue out of loop back to ${this.D.os}..`)}],
 [2725930539,async function r(i){let{n1:t,du1:s,v1:f}=i,e;t?e=t:s?e=s:f&&(e=this.vmIv(f)),e||this.terr("http.refresh: no value"),this.stOpSet(538813128,"cfg","refresh",e)}],
 [1210969023,async function i(t){this._d&&this.pdb(`eval for inject ${t.pl}`)}],
 [1625744302,async function t(n){}],
 [3119707666,async function l(t){this.lastoperr=0;try{if(!this.sb?.userid){this.opErr(t,"e.files failed - not logged in");return}let i=this.fnGetTarg(t),a=i?`${this.sb.userid}/${i}`:`${this.sb.userid}`,{data:e,error:r}=await EE.EA.sb.storage.from("apps-pub").list(a,{limit:100,offset:0,sortBy:{column:"name",order:"asc"}});console.log({data:e,error:r}),t.onlydirs&&(e=e.filter(s=>s.metadata===null)),t.onlyfiles&&(e=e.filter(s=>s.metadata!==null)),r&&this.opErr(t,r.message),this.fnPost(t,e,85)}catch(i){this.opErr(t,i.message)}}],
 [2410542463,async function t(n){}],
 [3772090497,async function s(a){let t=new Date;var e=new Date(t.getTime());e.setDate(t.getDate()+(7+0-t.getDay())%7),this.fnPost(a,e,113)}],
 [3539427418,async function t(n){}],
 [493467689,async function t(n){}
],
 [1695208439,async function t(n){}],
 [1534342055,async function l(t){let o=EE.de(t,1,5,1.1,.2);console.log({s:t,d:o}),t.t1=this.vmIv(t.t1),t.sec=2;let e=`
  <style>
  .e${t.o} {
    width:100%;
    color: var(--text-color);
    background-color: var(--secondary-color);
  }
  </style>
  `;t.html=`${e}<div class="flx w100 ${o.cl}" style="${o.sty}${o.fs}">
  <div style="flex-grow:1">${t.t1}</div>
  ${t.close?`<div onclick="document.getElementById('${t.id}').style.display='none'">&times;</div>`:""}
  </div>`,this.out(t)}
],
 [1155390742,async function r(t){EE.pim.aIcons(),t.t1=this.vmIv(t.t1);let i=EE.de(t,1,20,40,10),o=EE.sizer(t.s,1,9,5,2),e=EE.sizer(t.s,1,5,20,2);console.log({here:1,s:t,d:i});let n=t.t2?`<div>${this.vmIv(t.t2)}</div>`:"",c=`.e${t.o} { display:flex;justify-content:center;align-items:center;color:var(--text-color);font-family:var(--text-font,Arial);border-radius:5px;}
          .a${t.o} {
            text-decoration:none;
          }
          `;EE.rec(t,c),t.html=`<a class="a${t.o}" href="https://www.twitter.com/${t.t1}/"><div class="${i.cl}" style="${i.sty};font-size:${e}px;padding:2px ${o}px;"><div><iconify-icon width="${i.sz}" icon="mdi:twitter"></iconify-icon></div>
          ${n}</div></a>`,this.out(t)}
],
 [169969916,async function c(t){EE.elFo(t),t.t1=this.vmIv(t.t1);let o=EE.de(t,1,9,1,.2),a=t.fancy?`
  .e${t.o}::first-letter {
    font-size: 3em;
    text-shadow: 5px 5px 5px #555;
    font-family: var(--paragraph-font,Impact);
  }
  `:"",e=`
    .e${t.o} {
      width:100%;
      color: var(--text-color);
      text-align: left;
      margin: 5px 10px;
      padding: 0px;
    }
    ${a}
  `;EE.rec(t,e),t.html=`<p class="${o.cl}" style="${o.sty}${o.fs}">${t.t1}</p>`,this.out(t)}
],
 [106698423,async function c(t){let o=this.vmGv(t.V1),n="";this.fnPost(t,n,17)}],
 [2666477224,async function e(t){let o=this.fnPre(t);if(!o)return this.opErr(t,"account not found");console.log("open portal..."),console.log({s:t,account:o});let n=await this.ddexe(t.o,{account:o.v,test:t.test,return_url:document.location.href});document.location.href=n.result.result.sessionUrl,this.fnPost(t,result,65)}],
 [1912314795,async function t(n){}
],
 [4159571575,async function s(t){console.log({s:t});let e=`
    .e${t.o} {
      display: flex;
      justify-content:space-between;
      align-items:center;
      flex-wrap: wrap;
      width:100%;
    }
    .e${t.o} > div {
      margin: 2px;
    }
    `;EE.rec(e),t.html=`<div id="${t.id}" class="e${t.o}" style="justify-content:${justify}"></div>`,this.out(t);let i=this.st.targetsec;this.st.targetsec=t.id,this.st.rowid=t.id,await this.rbonce(t),this.st.targetsec=i,this.st.rowid=null}
],
 [1265235977,async function f(t){let a=this.st.lastVarref,s=this.st.lastVarref.slice(1,-1);if(!s)return this.opErr("age.under: no variable reference found");let e=this.VM[s]?.ts;if(!e)return this.opErr(`age.under: variable ${s} ts not found`);let n=this.ts(),r=Math.floor(t.du1/1e3),o=e+r;n<o?this.fnPost(t,!0,49):this.fnPost(t,!1,49)}],
 [1502219549,async function o(n){let t=this.fnPre(n).v[0],s=Object.keys(t);this.fnPost(n,s,82)}],
 [2122388183,async function t(n){}],
 [3662886349,async function o(e){console.log("devmode secret"),console.log({s:e}),this.stOpSet(e.o,null,e.kw,!0)}],
 [3905839052,async function t(n){}],
 [2762111308,async function a(n){let t=Math.ceil(Math.random()*(n.n2-n.n1))+n.n1;this.fnPost(n,t,33)}],
 [3293014056,async function i(o){let t=EE.sizer(o.s,1,5,16,2),e=EE.elCo(o);this.uiout(`
    <style>
    a[href^=mailto] {
      font-family: Arial;
      border: 1px solid #eee;
      border-radius: 5px;
      color: black;
      display: inline-block;
      font-style: normal;
      margin-top: 10px;
      padding: 3px 5px;
      text-decoration: none;
    }
    a[href^=mailto]:before {
      content: 'Email: ';
      font-weight: bold;
    }
    </style>
    <a href="mailto:${o.t1}" style="font-size:${t}px;${e}">${o.t1}</a>`)}
],
 [919153131,async function s(t){switch(t.c){case 1:case 255:this.st.latest=!0;return;case 2:this.st.latest=!1;return}}
],
 [562899441,async function s(e){let o=`${e.local?"https://engagedev/ops/use.templates/plugin/distribution":"https://xpec.run/use"}/use.${e.o}.js`;try{if(e.nowait){import(o).then(async a=>{EE.PI.set(e.o,a.default),EE.E[this.id].PII.templates=new(EE.PI.get(e.o)),console.log(`use.${e.o} - loaded (nowait) from ${o}`)});return}let t=await import(o);EE.PI.set(e.o,t.default);let l=new(EE.PI.get(e.o));EE.E[this.id].PII.templates=l.templates,console.log(`use.${e.o} load from ${o}`)}catch(t){console.log(`use.${e.o} - failed to load from ${o}`),console.log(t),this.opErr(e,`use.${e.o} - failed to load: ${t.message}`);return}}
],
 [474233454,async function a(e){this.lastoperr=0;try{}catch(t){this.opErr(e,`e.appdelete failed - ${t.message}`)}}
],
 [1609651502,async function t(n){}],
 [1435724967,async function n(t){await this.usePI("sound",{latest:!0}),console.log({s:t}),this.stOpSet(t.o,null,"last",t.kw);let o=t.V1?this.vmGv(t.V1):t.kw;if(!o)return this.opErr(t,"no sound can be resolved");if(typeof o!="string")return this.opErr(t,"sound must be a string");console.log(`play sound ${o}`),EPI.sound.playSound(o)}
],
 [3388080893,async function h(t){let i=EE.de(t,1,6,16,2),n=EE.sizer(t.s,1,6,10,2),o=EE.sizer(t.s,1,6,150,25),e="";t.t1&&(e=this.vmIv(t.t1));let s="search",l=t.pill?"border-radius: 999px;":"",d=`
    :root {
      --text-font: Arial;
    }
    .e${t.o} {
      width:100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .e${t.o}-input {
      font-family: var(--text-font,Arial);
      border:none;
      border: 1px solid #333;
      background-color: white;
      border-radius:0.25rem;
      min-width: 200px;
    }
    `;EE.rec(t,d);let r=this.st.var[0]?this.st.var[0]:"result",a=t.vto;if(t.html=`
      <div class="${i.cl}" style="width:100%; align-text:center">
      <input id="${t.id}-input" class="${i.cl}-input" 
          placeholder="${e}"
          style="box-sizing: border-box;font-size: ${i.sz}px; padding: ${n}px;min-width:${o}px;${l};${i.sty}"
          onchange="EE.E['${this.id}'].input({ vn: '${r}',vto:${a},value : this.value})" 
          type='${s}'></input>
      </div>`,this.out(t),this.st.wait){let c=function(){this.st.halt=!1,this.exe()};document.getElementById(t.id+"-input").addEventListener("change",c.bind(this)),this.st.halt=!0,this.st.wait=!1,console.log("wait input forced halt")}}
],
 [3032378952,async function c(e){if(console.log({s:e}),e.c==255){let o=document.getElementById(`i${this.id}_s${this.st.SCR}_${e.fc}`);if(!o){console.log(`section ${e.fc} not found!`),this.terr(`section ${e.fc} not found!`);return}o.innerHTML="";return}let n=document.getElementById(`i${this.id}_s${e.c}`);if(!n){console.log(`screen ${e.c} not defined!`),this.terr(`screen ${e.c} not defined!`);return}let t=this.vlo.get(e.c).def;if(!t){console.log(`screen ${e.c} not defined!`),this.terr(`screen ${e.c} not defined!`);return}n.innerHTML=t}
],
 [1261653889,async function e(t){this.st.profile=t}],
 [4256065407,async function c(t){let o=this.fnPre(t),i={},n="en-US";t.t1&&(n=t.t1),t.digits&&(i.maximumSignificantDigits=t.digits),console.log({s:t,vn:o,options:i,locale:n});let e=new Intl.NumberFormat(n,i).format(o.v);this.fnPost(t,e,17)}],
 [2305325629,async function n(t){let o=this.fnPre(t),e=this.fnGetTarg(t);this.fnPost(t,e+o.v,17)}],
 [2484823993,async function o(t){let n=this.dtNow();this.fnPost(t,n,113)}],
 [237606234,async function m(e){try{let u=function(l,t){if(l)return this.opErr(e,l.message);console.log("File added",t),console.log({file:t}),console.log({filesize:t.fileSize,status:t.status,extension:t.fileExtension}),console.log(t.getMetadata());let h=this.st.var[0]?this.st.var[0]:"result",i=new FileReader;i.onloadend=()=>{let f=i.result,E=!!e.header,{Papa:g}=window.EPI.csvtools,{data:a}=g.parse(f,{skipEmptyLines:!0,header:E});console.log({data:a}),this.input({vn:h,vto:85,value:a}),this.st.halt&&(this.st.halt=!1,this.exe())},i.readAsText(t.file)};EE.pim.aIcons(),await this.usePI("filepond",{latest:!0}),await this.usePI("csvtools",{latest:!0}),EE.pim.aLnk("filepond","https://unpkg.com/filepond@^4/dist/filepond.css");let o=`
    .e${e.o} {
      width: 50%;
      color: white;
    }
    .filepond--panel-root {
      background-color: ${e.bc?e.bc:"#eee"};
      }
    .filepond--file {
      color: ${e.c1||"#eee"};
     }
     .filepond--drop-label {
      color: ${e.c1||"#eee"};
  }
    `;EE.rec(e,o);let c=EE.de(e,1,5,150,25),n='<iconify-icon width="36" icon="teenyicons:csv-outline"></iconify-icon>',d=e.t1?`${n}<br/>${e.t1}`:`${n}<br/>Drop your CSV file or <span class='filepond--label-action'>Browse</span>`;e.html=`<div class="${c.cl}"><input id="${e.id}-input" class="filepond" name="filepond" type="file"/></div>`,this.out(e);let{Filepond:s,FilePondPluginFileValidateType:r}=EPI.filepond;s.registerPlugin(r);let p=document.getElementById(`${e.id}-input`);s.create(p,{acceptedFileTypes:["text/csv"],checkValidity:!0,credits:!1,labelIdle:d}).on("addfile",u.bind(this)),this.st.wait&&(this.st.halt=!0,this.st.wait=!1)}catch(o){this.opErr(e,o.message),console.error(o)}}
],
 [481907711,async function t({t1:n}){return"<div></div>"}
],
 [2911256030,async function d(e){if(console.log({s:e}),!EE.EPI[4])return this.terr(":use core not found!!!");let o=EE.de(e,1,5,400,100),i=EE.sizer(e.s,1,5,75,10);e.c1=e.c1||"#cbd5e1";let l=`
  <svg opacity="0.4" width="${i}" height="${i}" viewBox="0 0 175 175" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M61 74C73.1503 74 83 64.1503 83 52C83 46.2909 80.8253 41.0897 77.2592 37.1796C80.719 36.4071 84.3129 36 88 36C115.614 36 138 58.8335 138 87C138 90.071 137.734 93.0785 137.224 96H124H120.872H55.1276C59.0126 111.131 72.4594 122 88 122C100.24 122 111.182 115.257 117.175 105H134.797C127.664 124.284 109.402 138 88 138C60.3858 138 38 115.167 38 87C38 78.9989 39.8064 71.4282 43.0258 64.6889C47.0099 70.3221 53.5754 74 61 74Z" fill="${e.c1}"/>
<circle cx="87.5" cy="87.5" r="62.5" stroke="${e.c1}" stroke-width="10"/>
</svg>`;console.log(EE.E);let n=`
  .e${e.o} {
    background-color: #white;
    margin: 5px;
    width: 100%;
    border: 1px solid #000000;
  }

  .splashbody {
    border-radius: 5px;
    width: 100%;
    margin: auto;
    text-align: center;
  }
  .footer {
    border-radius: 5px;
    margin-top: 5px;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: monospace;
    font-size: 10px;
    width: 100%;
    padding: 2px;
}
  `;EE.rec(e,n);let c=new EE.EPI[4]({id:e.n1});EE.E[e.n1]=c;let a="";switch(e.html=`
  <div id="i${e.n1}" class="${o.cl}" style="${o.sty};max-height:600px;flex-grow:1;">
    <div id="i${e.n1}_s0">
        <div style="overflow-y:scroll; overflow-x: auto;" id="i${e.n1}_s0_1970145754"></div>
    </div>
  </div>`,this.out(e),e.liveupdate&&EE.livebin.subscribe(async t=>{EE.E[e.n1].reset(),console.log("\u{1F7E2}\u{1F7E2}\u{1F7E2}\u{1F7E2}\u{1F7E2}\u{1F7E2}\u{1F7E2}\u{1F7E2}\u{1F7E7} liveupdate state:",t),EE.E[e.n1].FM.dflc(t),await EE.E[e.n1].start()}),e.c){case 1:break;case 2:console.log("heree.....base64");let t=e.t1;EE.E[e.n1].FM.db64(t),await EE.E[e.n1].start();break;case 3:console.log("heree.....bin workds...");let r=this.vmGv(e.V1);EE.E[e.n1].FM.dflc(r),await EE.E[e.n1].start();break;case 4:}}
],
 [197385124,async function n(o){console.log(o)}],
 [806082046,async function s(t){let c=new Map([[1,["color","c1"]],[2,["font","t1"]],[3,["size","t1"]]]);console.log({s:t});let o=c.get(t.c);if(!o)throw"fatal :button";EE.setcss(`title-${o[0]}`,t[o[1]])}],
 [1898650395,async function n(o){console.log({s:o}),o.vti=255,this.fnPre(o),console.log("\u2705 varref!");let t=this.vmGvt(o.v);if(!t)return this.opErr(o,"could not resolve varref");let{value:e,type:r}=t;console.log({s:o,value:e,type:r}),this.fnPost(o,e,r),this.st.lastVarref=o.v}
],
 [442651518,async function d(e){console.log({s:e});let t=EE.de(e),a={en:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],es:["domingo","lunes","martes","mi\xE9rcoles","jueves","viernes","s\xE1bado"]},o="",n=`
  .e${e.o} { display:flex; flex-wrap:wrap; justify-content:flex-start; }
  .e${e.o} button { margin:1px;padding:10px;}`;EE.rec(e,n),a.es.forEach(s=>o+=`<button>${s}</button>`),e.html=`<div class="${t.cl}" style="${t.sty}">${o}</div>`,this.out(e)}
],
 [2383839339,async function i(t){let e=t.V1?this.vmGv(t.V1):this.vmIv(t.t1);this.stOpSet(2149574313,"email","subject",e)}
],
 [1912254627,async function c(t){let v=t.v1?this.vmIv(t.v1):this.vmIv(t.t1);this.stOpSet(538813128,"cfg","body",v)}],
 [4064153459,async function t(o){console.log({s:o});let s=this.vmIv(o.t1);if(!s)return this.opError("no sound specified can be resolved!");await this.usePI("sound");try{switch(EPI.sound.loadSound(s),o.c){case 1:return this.st.navsound=s;case 2:return this.st.clicksound=s;case 3:return this.st.errorsound=s;case 4:return this.st.keypress=s}}catch(r){this.opError(`error loading sound ${s}!`),console.log({e:r})}}
],
 [962403583,async function n(t){if(t.c==255){if(!document.getElementById(`s${this.id}${this.st.SCR}_${t.fc}`)){console.log(`section ${t.fc} not found!`),this.terr(`section ${t.fc} not found!`);return}document.getElementById(`${this.id}_${t.c}`).style.display="flex";return}document.getElementById(`i${this.id}_s${this.st.SCR}`).style.display="none",document.getElementById(`i${this.id}_s${t.n1}`).style.display="grid",this.st.SCR=t.n1}
],
 [3584025704,async function c(r){try{let e=this.fnPre(r),{error:i,access_token:n}=await this.sbctx(),o=this.fnGetNarg(r);if(!o)return this.opErr(r,"no appid can be resolved");let{error:s,result:t}=await this.ddexe(r.o,{appid:o},n);if(s)return this.opErr(r,`dd.exe ${s}`);if(!t.success)return this.opErr(r,`deno - ${t.result.error}`);console.log(t),this.fnPost(r,t?.result?.jwt,17)}catch(e){this.opErr(r,e.message)}}],
 [3523749339,async function o(s){try{if(this.lastoperr=0,console.log({s}),await this.usePI("engageaccount",{latest:!0}),this.sb?.userid)return this.opErr(s,`already logged in as ${this.sb.userid}`);let e=this.fnGetArg(s,"t1",144),i=s.V2?this.vmGv(s.V2):s.t2;if(!e||!i)return this.opErr(s,"missing userid or password");let{data:r,error:a}=await EPI.engageaccount.sb.auth.signInWithPassword({email:e,password:i});if(console.log("here..."),console.log({data:r,error:a}),a)return this.opErr(s,a.message);let{session:t}=r;this.opResult(s,r),this.fnPost(s,{userid:t.user.id,access_token:t.access_token,stripeid:t.user.app_metadata.stripeid,plan:t.user.app_metadata.plan||1},65)}catch(e){return console.log(e),this.opErr(s,`login failed - ${e.message}`)}}],
 [1247932145,async function o(e){console.log({s:e});let r=EE.de(e,1,5,1.1,.2),l=EE.sizer(e.s,1,5,100,30),a=EE.sizer(e.s,1,5,6,2),d=`
    .e${e.o} {
      vertical-align: middle;
      cursor: inherit;
      margin:1px;
    }
    `;EE.rec(e,d);let t=`${r.sty};width:${l}px; height:${l}px`;e.circle&&(t+=";border-radius:50%;"),e.border&&(t+=`;border-style:solid;border-color:${e.c1||"black"};border-width:${a}px;`);let c,i;if(e.u1)i=this.vmIv(e.u1),e.html=`<img id="${e.id}" class="${r.cl}" style="${t}" src="${i}"/></div>`;else switch(e.c){case 1:i=this.rit(e.I1),e.html=`<img id="${e.id}" class="${r.cl}" style="${t}" src="${i}"/></div>`;break;case 2:break;case 3:if(c=this.vmGv(e.R1),!c)return this.terr(`${e.R1} does not have a value!`);i=c.image,e.html=`<img id="${e.id}" class="${r.cl}" style="${t}" src="${i}"/></div>`;break;case 4:if(c=this.vmGv(e.V1),!c)return this.terr(`${e.V1} does not have a value!`);i=c.image,e.html=`<img id="${e.id}" class="${r.cl}" style="${t}" src="${i}"/></div>`;break;case 5:case 6:}this.out(e)}
],
 [1074749279,async function t(n){}],
 [1305077849,async function e(t){this.st.noclear=!0}
],
 [3176484354,async function t(o){console.log({s:o}),EE.pim.aIcons();let n=EE.de(o);window.Iconify=customElements.get("iconify-icon");let i=await(await fetch("https://api.iconify.design/collections")).json();console.log({collections:i}),o.html=`<div>findicons
  <iconify-icon icon="mdi:home"></iconify-icon>
  </div>`,this.out(o)}
],
 [2336320446,async function e(t){let r=this.fnPre(t),n=this.fnGetNarg(t);if(!n)throw"non numeric arg!";this.fnPost(t,r.v>n,49)}],
 [1208326676,async function o(t){EE.pim.aPico();let e=EE.de(t,1,5,1,1);console.log({s:t,decode:e}),t.t1=this.vmIv(t.t1),t.t2=this.vmIv(t.t2);let l="";t.button&&(l="button"),t.html=`<details id="${t.id}-detail" class="${e.cl}" style="flex-grow:1;text-align:left;${e.sty};${e.fs}">
  <summary role="${l}">${t.t1}</summary>${t.t2}
  </details>`,this.out(t)}
],
 [4211919238,async function o(n){let t="geolocation"in navigator;this.fnPost(n,t,49)}],
 [1827341588,async function c(n){let t;switch(n.c){case 255:t="xpe";break;case 1:t=n.n1;break}let e=EE.E[t];if(!e){this.opErr(n,`core instance ${t} not found!`),this.fnPost(n,new Uint8Array,99);return}this.fnPost(n,e.FM.bin)}],
 [3743410845,async function i(e){await this.use(10,{dev:!0});let t=EE.de(e,1,20,1,.2);e.html=`<div>${e.t1}</div>
  <em-emoji id="${e.t1}" size="${t.sz}rem"></em-emoji>
  `,this.out(e)}
],
 [221796398,async function n(t){await this.usePI("typewriter");let e=EE.de(t,1,9,1,.2);t.t1=this.vmIv(t.t1);let o=this.rfo(t);console.log({s:t,d:e,ff:o});let l=`.e${t.o} {
    color: black;
    width: 100%;
    text-align: left;
    font-family: monospace;
    margin: 5px 50px;
  }`;EE.rec(t,l),t.html=`<div id="${t.id}" class="${e.cl}" style="${e.sty};${e.fs}">
  <div id="${t.id}-type"></div>
  </div>`,this.out(t);let d=!!t.loop,a=t.speed?t.speed:50,i=new EPI.Typewriter(`#${t.id}-type`,{loop:d,delay:a});t.delay?i.pauseFor(t.delay).typeString(t.t1).start():i.typeString(t.t1).start()}
],
 [3681717105,async function a(n){EE.pim.aLnk("animation","https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"),EE.elanim=EE.anim.bounceIn?EE.anim.bounceIn:"animate__animated animate__bounceIn"}
],
 [1787227059,async function n(t){this.fnPost(t,[],82)}],
 [1295302365,async function n(e){this.timer=performance.now()}
],
 [3300393761,async function i(t){try{let{access_token:e,sberror:s}=await this.sbctx();if(s)return this.opErr(t,`cant resolve sb ${s}`);let a=this.fnGetArg(t,"t1",144),{error:o,result:r}=await this.ddexe(t.o,{name:a},e);if(o)return this.fnPost(t,{},67),this.opErr(t,`dd.exe ${o}`);if(!r.success)return this.opErr(t,`dd.exe failed ${r.error}`);this.fnPost(t,r.result.data,67)}catch(e){this.fnPost(t,{},67),this.opErr(t,`account.app.create failed: ${e.message}`)}}],
 [4209483262,async function a(t){let e=EE.de(t);await this.usePI("inpututils",{latest:this.latest}),t.html='<div><input class="input-element" placeholder="YYYY-MM-DD"></div>',this.out(t);var i=new EPI.inpututils.Cleave(".input-element",{date:!0,delimiter:"-",datePattern:["Y","m","d"]})}
],
 [1045796320,async function t(n){}],
 [1103699221,async function t(n){}
],
 [3096165215,async function a(t){this.lastoperr=0;try{if(!this.sb?.userid)return this.opErr(t,"e.newfile failed - not logged in");let o=this.fnPre(t).v.id,i=`${this.sb.userid}/${o}/source.flu`,{data:e,error:r}=await EE.EA.sb.storage.from("apps-prv").download(i);console.log({data:e,error:r});let n=await e.text();if(r)return this.opErr(t,r.message);this.fnPost(t,n,85);return}catch(s){this.opErr(t,s.message)}}],
 [2046862771,async function t({t1:n}){return"<div></div>"}
],
 [1371518574,async function t(o){console.log("custom element..."),console.log({s:o});let e=EE.de(o);o.html="<div>custom element</div>",this.out(o)}
],
 [3282550742,async function o(e){console.log({s:e,golive,now:t});let n=new Date(`${e.da1} ${e.ti1}`),t=new Date;this.st.expired=t>n}
],
 [3051626909,async function t(n){}
],
 [3002619194,async function n(e){console.log("generate"),console.log({s:e});let t=await EE?.EA?.sb?.auth?.getSession();if(!t)return this.opErr(e,"not logged in/could not get session");let{data:s,error:o}=t;if(o||!s)return this.opErr(e,"not logged in/could not get session");let r=s?.session?.user_id,a=s?.session?.access_token;if(!EE.E[this.id].PII.templates)return this.opErr(e,"use.templates required");switch(e.c){case 1:break;case 2:break;case 3:break;case 4:break;case 5:break;case 6:break;case 7:break;case 8:break}}],
 [2370454676,async function n(e){let c=this.fnPre(e),s=new Date(c.v),t=s.getDay();console.log({s:e,D:s,n:t});let a;switch(t){case 0:a="Sunday";break;case 1:a="Monday";break;case 2:a="Tuseday";break;case 3:a="Wednesday";break;case 4:a="Thursday";break;case 5:a="Friday";break;case 6:a="Saturday";break;default:break}this.fnPost(e,a,17)}],
 [513357302,async function o(t){let n=this.fnPre(t),e=new Date(n.v);this.fnPost(t,e.getMonth()+1,33)}],
 [903167156,async function e(t,n){return n}],
 [1963859797,async function t({t1:n}){return"<div></div>"}
],
 [3831650890,async function l(t){try{let e=t.local?`https://engagedev/fluent/applib/thisapp-${t.kw}/distribution/lib.bin`:`https://xpec.run/applib/${t.kw}/lib.bin`,o=await(await fetch(e)).arrayBuffer();console.log(o),console.log("here...")}catch(e){console.log({error:e}),this.opErr(t,`:applib failed - ${e.message}`)}}
],
 [1700218147,async function i(e){let o;switch(e.c){case 1:o=e.n1;break;case 2:o=e.t1;break;case 3:o=this.vmGv(e.V1);break;case 4:o=this.paIt(e.it);break}let t=this.fnPre(e);if(console.log({s:e,vr:t,a1:o}),this.typeCheck(t.t,160))console.log("‼️ number"),this.fnPost(e,t.v+o,t.t);else if(this.typeCheck(t.t,208))console.log("‼️ group add"),this.fnPost(e,[...t.v,o],t.t);else if(this.typeCheck(t.t,144))console.log("‼️ text"),this.fnPost(e,t.v+o,t.t);else if(this.typeCheck(t.t,192))console.log("‼️ item"),this.fnPost(e,[t.v,o],t.t);else throw"invalid input type to add!"}],
 [530942600,async function n(o){let e=`${o.local?"https://engagedev/ops/use.twilio/plugin/distribution":"https://xpec.run/use"}/use.${o.o}.js`;try{if(o.nowait){import(e).then(async l=>{EE.PI.set(o.o,l.default),EE.E[this.id].PII.twilio=new(EE.PI.get(o.o)),console.log(`use.${o.o} - loaded (nowait) from ${e}`)});return}let t=await import(e);EE.PI.set(o.o,t.default),EE.E[this.id].PII.twilio=new(EE.PI.get(o.o)),console.log(`use.${o.o} load from ${e}`)}catch(t){console.log(`use.${o.o} - failed to load from ${e}`),console.log(t),this.opErr(o,`use.${o.o} - failed to load: ${t.message}`);return}}
],
 [89125268,async function s(e){console.log({s:e});let c=this.fnPre(e),a;switch(e.c){case 1:a=e.t1;break;case 2:a=e.n1;break;case 3:a=this.VM[e.V1]?this.VM[e.V1].v:null;break;case 4:case 5:case 6:a=!0;break;case 7:case 8:case 9:a=!1;break}let t=c.v===a;this.fnPost(e,t,65)}],
 [1626751528,async function e(t){let d=EE.de(t);t.html="<div></div>",this.out(t)}
],
 [1941842171,async function t({t1:n}){return"<div></div>"}
],
 [428804669,async function e(a){await this.usePI("engageaccount"),console.log({s:a})}
],
 [3839917922,async function a(t){console.log("duration literal"),this.st.val.push([t.va,116])}],
 [2807576760,async function n(e){console.log(`\u{1F4BE} SAVE ${e.kw} \u{1F4BE}`),console.log({s:e});let t=this.VM[e.kw];if(!t)return this.terr(`variable ${e.kw} not found!`);let o=`xpe/${this.id}/appidhere/${e.kw}`;localStorage.setItem(o,JSON.stringify(t))}
],
 [1515194857,async function t(n){}],
 [4154004564,async function t(r){console.log({error:1,s:r});let o=this.lastoperr!==0;this.fnPost(r,o,49),this.lastoperr=0}],
 [1858479735,async function t(n){}],
 [1992170416,async function n(t){let e;t.v1?e=this.vmIv(t.v1):t.t2?e=t.t2:t.n1&&(e=t.n1);let[i,a]=this.coV(e);e||this.terr("http.header: no value"),this.stOpSet(538813128,"param",t.t1,i)}],
 [1078823985,async function t(n){}],
 [481801700,async function d(o){let n=EE.de(o),t=o.n1?o.n1:1;o.html=`<div>log for ${t}</div>`,this.out(o)}
],
 [1724461929,async function a(t){EE.pim.aIcons(),t.u1=this.vmIv(t.u1);let o=EE.de(t,1,20,40,10),i=EE.sizer(t.s,1,9,5,2),n=EE.sizer(t.s,1,5,20,2);console.log({here:1,s:t,d:o});let e=t.t1?`<div>${this.vmIv(t.t1)}</div>`:"",c=`.e${t.o} { display:flex;justify-content:center;align-items:center;color:var(--text-color);font-family:var(--text-font,Arial);border-radius:5px;}
  .a${t.o} {
    text-decoration:none;
  }
  `;EE.rec(t,c),t.html=`<a class="a${t.o}" href="${t.u1}"><div class="${o.cl}" style="${o.sty};font-size:${n}px;padding:2px ${i}px;"><div><iconify-icon width="${o.sz}" icon="mdi:mastodon"></iconify-icon></div>
  ${e}</div></a>`,this.out(t)}
],
 [3097939994,async function t(n){}
],
 [4191115300,async function s(t){console.log("speak");let e=this.fnGetTarg(t);if(!e)return this.opErr(t,"cannot resolve speech text");e=this.vmIv(e),console.log({s:t,text:e});let n=new SpeechSynthesisUtterance(e);speechSynthesis.speak(n)}
],
 [1573282592,async function o(t){let n=this.fnPre(t),e=new Date(n.v).getDay()===5;this.fnPost(t,e,49)}],
 [2466580646,async function l(o){let e=o.v1?this.vmIv(o.v1):o.du1;console.log("delay ms = ",e),await this.sl(Number(e)),console.log("delay complete")}],
 [2842184877,async function n(e){await this.usePI("engageaccount"),console.log({s:e});let{access_token:a,plan:o,su:c}=await this.sbctx();if(!a)return this.goto(e.fc);console.log({access_token:a,plan:o});let t=!1;switch(e.c){case 7:t=!!c;break;case 8:a&&(t=!0);break;default:if(e.c>9)return this.opError(e,"invalid plan number");o===e.c&&(t=!0)}if(!t)return this.goto(e.fc);console.log("\u{1F44D} engage.require: passed")}
],
 [4169051770,async function n(t){return v.trim()}],
 [3086041010,async function e(t){let n=this.fnPre(t);this.fnPost(t,n.v.toUpperCase(),17)}],
 [3386990164,async function s(t){let e=EE.de(t,1,5,50,10),i=`
  .e${t.o} {
    width: 100%;
  }
  `;EE.rec(t,i),EE.pim.aIcons(),EE.pim.aLnk("shoelace","https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0/dist/themes/light.css"),await this.usePI("shoelace",{latest:!0});let c=t.i1?`<iconify-icon slot="icon" icon="${this.rict(t.i1)}"></iconify-icon>`:"";t.t1=this.vmIv(t.t1),t.html=`<div class="${e.cl}" style="${e.sty}">
  <sl-alert variant="primary" open closable class="alert-closable">
    ${c}
  ${t.t1}
  </sl-alert>
  </div>`,this.out(t)}
],
 [428199233,async function d(t){if(!this.isG(t.V1))return this.opErr(t,"invalid choices variable value");EE.pim.aIcons();let c=EE.de(t,1,7,1,.2),r=EE.sizer(t.s,1,15,30,10),i=this.vmGv(t.V1);if(console.log({s:t,choices:i}),!i)return this.opErr(t,"cannot resolve choices variable");let a=this.getTy(i[0]),s=i;if(typeof i[0]=="object"){let e=t.show?t.show:"text";s=i.map(n=>n[e])}let l="";this.st.wait&&(this.st.wait=!1,this.st.halt=!0,l="resume: true,");let o=`<div class="${c.cl}" style="">`;for(let e=0;e<s.length;e++){let n=s[e];o+=`<div style="${c.sty}" onclick="EE.E['${this.id}'].input({ ${l}vto:${a}, sel:{base:'${t.V1}',i:${e}}})">`,t.i1&&(o+=`<iconify-icon icon="${this.rict(t.i1)}" width="${r}"></iconify-icon>`),o+=`<div>${n}</div></div>`}o+="</div>";let h=`
  .e${t.o} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }
  .e${t.o} > div {
    padding:20px;
    margin: 2px;
    background-color: #eeeeee;
  }
  .e${t.o} div {
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  `;if(EE.rec(t,h),t.html=o,this.out(t),this.st.wait){this.st.wait=!1,this.st.halt=!0,this.opErr(t,"wait operation forced halt---choose");return}}
],
 [1495723654,async function i(t){this.fnPre(t);function n(e){this.fnPost(t,e,17)}navigator.clipboard.readText().then(n.bind(this))}],
 [472842782,async function f(t){let n=this.fnPre(t),e=this.fnGetNarg(t);this.fnPost(t,n.v<e,49)}],
 [3323347342,async function o(n){let t=this.fnPre(n).v[0],s=Object.keys(t).length;this.fnPost(n,s,33)}],
 [3316552598,async function o(t){let e=this.fnPre(t),f=this.fnGetArg(t,"t1",144),n=e.v.map(i=>i[f]);t.unique&&(n=[...new Set(n)]),this.fnPost(t,n,82)}],
 [1765978694,async function r(t,e){return new Date().getDay(e[0])===n}],
 [4161568764,async function o(f){let{n1:e,du1:i,v1:n}=f,t;e?t=e:i&&(t=i),t||this.terr("http.timeout: no value"),this.stOpSet(538813128,"cfg","timeout",t)}],
 [528780991,async function o(t){let n=this.fnPre(t),f=this.fnGetTarg(t);this.fnPost(t,n.v+" "+f,17)}],
 [4253114891,async function e(t){switch(this.fnPre(t),t.c){case 1:let s=this.vmIv(t.t1);this.log(s);return;case 255:this.fnPost(t,this.elog,85);return}}],
 [3505069939,async function e(t,n){return n}],
 [1316572043,async function t({t1:e}){if(!this.vmChkGet(s.V1,208))return-1;s.html=`<div>element ${s.o}/${s.c}</div>`,this.out(s)}
],
 [2537426696,async function d(c){let i;switch(c.c){case 255:i="https://xpec.run/flcc/flcc.js";break;case 1:i=`https://engagedev/flcc/distribution/flcc-${c.n1}.esm.js`;break;case 2:i="https://engagedev/flcc/distribution/flcc.esm.js";break;default:return this.terr(`fatal: invalid :flcc cmd ${c.c}`)}console.log({s:c,url:i});function I(){window.FluentCompiler=FluentCompiler;let l="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjYwMzI3NjA1LCJzdWIiOiIwNTZjMmIxZC1lMzdhLTRhMGItODhhZC1iMGMwMDA3Yzk5YzgiLCJlbWFpbCI6ImdsZW5uQHhwZXJ0YW5hLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7ImEiOnsiZGVmIjowLCJpZCI6NDExLCJuIjoiZ2xlbm4vZmxhdGJyZWFkZnJpZGF5In0sIm8iOnsiZGVmIjoxLCJpZCI6MjQ4LCJuIjoiZ2xlbm4ifSwicGwiOjIsInByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiLCJnaXRodWIiLCJnb29nbGUiXSwic3UiOjF9LCJ1c2VyX21ldGFkYXRhIjp7ImF2YXRhcl91cmwiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQUZkWnVjcFdadno1UF9lWE9fSlBfckpZdk9pc19FTzZWN0pHRDVDTlNYaV89czk2LWMiLCJjd2EiOjk5OSwiY3dvIjoyNTAsImVtYWlsIjoiZ2xlbm5AeHBlcnRhbmEuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZ1bGxfbmFtZSI6IkdsZW5uIFNjaGxlaWNoZXIiLCJpc3MiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS91c2VyaW5mby92Mi9tZSIsIm5hbWUiOiJHbGVubiBTY2hsZWljaGVyIiwibm9kZSI6Im5ldyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQUZkWnVjcFdadno1UF9lWE9fSlBfckpZdk9pc19FTzZWN0pHRDVDTlNYaV89czk2LWMiLCJwbGFuX2lkIjoyLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ4cGVydGFuYSIsInByb3ZpZGVyX2lkIjoiMTA4ODIwOTE2NzE4MDk3MDc3MjgxIiwic3ViIjoiMTA4ODIwOTE2NzE4MDk3MDc3MjgxIiwic3VwZXJ1c2VyIjoxLCJzd28iOiIyNTAiLCJ1c2VyX25hbWUiOiJ4cGVydGFuYSJ9LCJyb2xlIjoiYXV0aGVudGljYXRlZCJ9.fitRCkPIHZu1w_wBFbdlls00D59gBAzeY_S6n5mzRIA";window.FLCC=new FluentCompiler({APIKEY:l})}EE.pim.aScr("flcc",i,I)}
],
 [2119606717,async function $(a){console.log(a);let p=EE.de(a);a.syn=a.syn||"";let t=a.t1.split("(")[0];if(/^dir\./.test(t)){let e=t.split(".");t=":"+e[1]}else if(/^event\./.test(t)){let e=t.split(".");t="@"+e[1]}let x=a.syn.split("$"),i="";x.forEach(e=>{let l=e.split("%"),n=l[0].split("\\");console.log({parts:n});let s="";n.forEach(g=>{switch(g){case"T":s+=' "<span class="arg">text</span>"';break;case"U":s+=' "<span class="arg">url</span>"';break;case"e":s+=' <span class="arg">.element</span>';break;case"N":s+=' <span class="arg">number</span>';break;case"R":s+=' <span class="arg">*resource</span>';break;case"V":s+=' {<span class="arg">variable</span>}';break;case"I":s+=' &#43;<span class="arg">imagetag</span>';break;case"C":s+=' <span class="arg">#color</span>';break;case"i":s+=' !<span class="arg">icontag</span>';break;case"da":s+=' <span class="arg">yyyy-mm-dd</span>';break;case"ti":s+=' <span class="arg">hh:mm</span>';break;case"du":s+=' <span class="arg">duration</span>';break;default:s+=` ${g}`}});let y=a.tags?'<span class="tag">tags...</span>':"";i+=`
    <tr>
    <td class="tda">${t} ${s} ${y}</td>
    <td class="tdb">${l[1]}</td>
    </tr>
    `}),i!==""&&(i=`
  <div class="syn">
  <h6>Syntax</h6>
    <table style="font-size:12px;width:100%">
    ${i}
    </table>
  </div>`);let o="";a.tags&&(a.tags.split("$").forEach(l=>{let n=l.split("%");o+=`
     <tr>
     <td class="tda"><span class="tag">${n[0]}</span></td>
     <td class="tdb">${n[1]}</td>
     </tr>
     `}),o!==""&&(o=`
   <div class="syn">
   <h6>Allowed Tags</h6>
     <table style="font-size:12px;width:100%">
     ${o}
     </table>
   </div>`));let c="";a.ex&&(a.ex.split("$").forEach(l=>{let n=l.split("%");c+=`
      <tr>
      <td class="tda">${n[0]}</td>
      <td class="tdb">${n[1]}</td>
      </tr>
      `}),c!==""&&(c=`
 <div class="syn">
 <h6>Examples</h6>
   <table style="font-size:12px;width:100%">
   ${c}
   </table>
 </div>`));let f=`
	<style>
    .e${a.o} {
      display: flex;
      flex-direction: column;
      margin: 5px;
      background-color: #f1f5f9;
      border: 1px solid #94a3b8;
      border-radius: 5px;
      width: 100%;
      font-family:Arial;

    }

    .e${a.o} .body {
        display: flex;
        flex-direction: column;
        margin: 1;
        padding: 20px;
        font-family:Arial;
  
      }

    .e${a.o} h6 {
        margin: 10px;
        color:#334155;
        text-transform:uppercase;
    }

    .head {
      display:flex;
      justify-content:space-between;
      align-items:center;
    }

    .name {
      color: #292929;
      font-weight:900;
      font-size:20px;
    }
    .type {
        font-size:12px;
        padding: 2px 10px;
        border-radius:3px;
        color: white;
        background-color: #64748b;
    }
    .desc {
      padding: 10px 10px;
      color: #64748b;
    }
    .syn {
      width:100%
      font-size: 14px;
    }
    .ex {
      color: red;
    }

    .tda {
        font-family:monospace;
    }
    .tag {
        font-size:10px;
        background-color: #dddddd;
        border-radius: 3px;
        color: gray;
        padding: 3px;
        margin:2px;
    }
    .arg {
        color:#94a3b8;
    }

    .vtio {
        color: white;
        background-color: gray;
        width: auto;
        padding: 2px;
        font-size: 10px;
        margin:1px;
    }

    .plan {
        color: white;
        background-color: #94a3b8;
        width: auto;
        padding: 10px;
        text-align: center;
        border-radius: 0px 0px 5px 5px;
    }

  </style>`,r="";a.in&&(r+=`<h6>In:<span class="vtio">${a.in}</span></h6>`),a.out&&(r+=`<h6>Out: <span class="vtio">${a.out}</span></h6>`);let b={el:"element",di:"directive",ev:"event",op:"operation",fn:"function"}[a.ty],d="";a.plan&&(d=`<div class="plan">requires ${{1:"personal",2:"pro",3:"business",4:"agency",5:"enterprise"}[a.plan]} plan</div>`),a.H=`
  <div class="${p.cl}" style="${p.sty}">
      <div class="body">
            <div class="head">
                <div class="name">${t}</div>
                <div class="type">${b}</div>
            </div>
            <div class="desc">${a.t2}</div>
            ${i}
            ${o}
            ${c}
            ${r}    
        </div>
        ${d}
    </div>
  `,a.html=`${f}${a.H}`,this.out(a)}
],
 [1431516581,async function o(t){this.fnPost(t,this.st.prod===!0?"production":"development",17)}],
 [3108057326,async function t(n){}],
 [1007533728,async function a(e){switch(this.fnPre(e),await this.usePI("colors",{latest:!0}),e.c){case 1:let c=this.vmIv(e.t1),r=EPI.colors.colors[c];if(!r)return this.opErr(e,"no such color family");let t=Object.keys(r).map(o=>({name:o,color:r[o]}));t=t.sort((o,l)=>o.name>l.name),console.log({colorlist:t}),this.fnPost(e,t,85);return;case 2:let s=Object.keys(EPI.colors.colors).sort().map(o=>o==="base"?{name:o,color:"#eeeeee"}:{name:o,color:EPI.colors.colors[o][`#${o}`]});this.fnPost(e,s,85);return}}],
 [4281562584,async function i(t){console.log({s:t});let n=[],o=[],u=[];t.html="<div class='flex items-center justify-between'>",t.c<6?(t.F1&&(t.html+=`<button>${t.t1?this.vmIv(t.t1):t.F1}</button>`),t.F2&&(t.html+=`<button>${t.t2?this.vmIv(t.t2):t.F2}</button>`),t.F3&&(t.html+=`<button>${t.t3?this.vmIv(t.t3):t.F3}</button>`),t.F4&&(t.html+=`<button>${t.t4?this.vmIv(t.t4):t.F4}</button>`)):(t.F1&&(t.html+=`<button>${t.i1?EE.icny(t.i1):t.F1}</button>`),t.F2&&(t.html+=`<button>${t.i2?EE.icny(t.i2):t.F2}</button>`),t.F3&&(t.html+=`<button>${t.i3?EE.icny(t.i3):t.F3}</button>`),t.F4&&(t.html+=`<button>${t.i4?EE.icny(t.i4):t.F4}</button>`)),t.html+="</div>",this.out(t)}
],
 [219990764,async function E(e){if(console.log({s:e}),EE.pim.aPico(),EE.pim.aIcons(),e.header)return this.stOpSet(e.o,null,"header",e);if(e.footer)return this.stOpSet(e.o,null,"footer",e);let i="",l="",t=this.stOpGet(e.o,"header");t&&(i=`<header>${EE.elIc(t.i1)}${EE.rifex(t.t1)}</header>`);let o=this.stOpGet(e.o,"footer");o&&(l=`<footer>${EE.elIc(o.i1)}${EE.rifex(o.t1)}</footer>`);let f=e.u1?`<img src="${e.u1}"/>`:"",r=EE.de(e,1,5,300,50);console.log({s:e,decode:r}),e.html=`<article style="width:${r.sz}px;${r.sty}">
  ${i}
  ${EE.rifex(e.t1)}
  ${f}
  ${l}
  </article>`,this.out(e)}
],
 [293014909,async function t({t1:n}){return"<div></div>"}
],
 [3362245785,async function t(n){}
],
 [1830323056,async function t(n){}
],
 [2118099614,async function o(e){console.log({s:e});let n=EE.de(e,1,5,16,2),t=this.dinp(e),r=this.vmChkGet(e.V1,208);if(!r)return-1;let c=`
  <style>
  .e${e.o} {
    margin:10px;
  }
  select {
    /* styling */
    background-color: white;
    border: thin solid blue;
    border-radius: 4px;
    display: inline-block;
    font: inherit;
    line-height: 1.5em;
    padding: 0.5em 3.5em 0.5em 1em;
  
    /* reset */
  
    margin: 0;      
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  
  
  /* arrows */
  
  select.classic {
    background-image:
      linear-gradient(45deg, transparent 50%, blue 50%),
      linear-gradient(135deg, blue 50%, transparent 50%),
      linear-gradient(to right, skyblue, skyblue);
    background-position:
      calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px),
      100% 0;
    background-size:
      5px 5px,
      5px 5px,
      2.5em 2.5em;
    background-repeat: no-repeat;
  }
  
  select.classic:focus {
    background-image:
      linear-gradient(45deg, white 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, white 50%),
      linear-gradient(to right, gray, gray);
    background-position:
      calc(100% - 15px) 1em,
      calc(100% - 20px) 1em,
      100% 0;
    background-size:
      5px 5px,
      5px 5px,
      2.5em 2.5em;
    background-repeat: no-repeat;
    border-color: grey;
    outline: 0;
  }
  
  select.round {
    background-image:
      linear-gradient(45deg, transparent 50%, gray 50%),
      linear-gradient(135deg, gray 50%, transparent 50%),
      radial-gradient(#ddd 70%, transparent 72%);
    background-position:
      calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px),
      calc(100% - .5em) .5em;
    background-size:
      5px 5px,
      5px 5px,
      1.5em 1.5em;
    background-repeat: no-repeat;
  }
  
  select.round:focus {
    background-image:
      linear-gradient(45deg, white 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, white 50%),
      radial-gradient(gray 70%, transparent 72%);
    background-position:
      calc(100% - 15px) 1em,
      calc(100% - 20px) 1em,
      calc(100% - .5em) .5em;
    background-size:
      5px 5px,
      5px 5px,
      1.5em 1.5em;
    background-repeat: no-repeat;
    border-color: green;
    outline: 0;
  }

  select.minimal {
    background-image:
      linear-gradient(45deg, transparent 50%, gray 50%),
      linear-gradient(135deg, gray 50%, transparent 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position:
      calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px),
      calc(100% - 2.5em) 0.5em;
    background-size:
      5px 5px,
      5px 5px,
      1px 1.5em;
    background-repeat: no-repeat;
  }
  
  select.minimal:focus {
    background-image:
      linear-gradient(45deg, green 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, green 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position:
      calc(100% - 15px) 1em,
      calc(100% - 20px) 1em,
      calc(100% - 2.5em) 0.5em;
    background-size:
      5px 5px,
      5px 5px,
      1px 1.5em;
    background-repeat: no-repeat;
    border-color: green;
    outline: 0;
  }
  
  select:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
  </style> 
  `,i=e.selected?this.vmIv(e.selected):null;e.html=`
  ${c}
  <select class="${n.cl}"
  onchange='EE.input({ ev: "${t.event}",value : this.value})'
  >
  `,e.t1&&(e.t1=this.vmIv(e.t1),e.html+=`<option value="${e.t1}">-- ${e.t1} --</option>`),r.forEach(a=>e.html+=`<option ${a===i?"selected":""} value="${a}">${a}</option>`),e.html+="</select>",this.out(e)}
],
 [980330576,async function s(t){try{console.log({s:t}),await this.usePI("stripe",{latest:!0}),await this.usePI("typecheck",{latest:!0});let r=`
    .e${t.o} {
        margin: 5px
    }`;EE.rec(t,r);let i=this.vmGv(t.V1);if(!i)return this.opErr(t,"no payment intent");i=EPI.typecheck.validateStripePaymentIntent(i);let e={variables:{}};if(t.theme&&(e.theme=t.theme),t.c1&&(e.variables.colorPrimary=t.c1),t.bc&&(e.variables.colorBackground=t.bc),t.f1&&(e.variables.fontFamily=t.f1),!this.stripe)return this.opErr(t,"stripe not initialized? stripe.initialize first!");this.st.stripe||(this.st.stripe={}),this.st.stripe.elementsinstance=this.stripe.elements({clientSecret:i.client_secret,appearance:e});let n=EE.de(t);t.html=`<div class="${n.cl}"><div id="${t.id}"></div></div>`,this.out(t);var a=this.st.stripe.elementsinstance.create("payment");a.mount(`#${t.id}`)}catch(r){this.opErr(t,`stripepayment.base failed: ${r.message}`)}}
],
 [350051405,async function t(n){}
],
 [230182444,async function n(t){if(console.log({s:t}),t.c===2){document.getElementById(this.st.lastid).style.display="none";return}if(t.c==255){let e=document.getElementById(`i_${this.id}_s${this.st.SCR}_${t.fc}`);if(!e){console.log(`section ${t.fc} not found!`),this.terr(`section ${t.fc} not found!`);return}e.style.display="none";return}document.getElementById(`i${this.id}_s${t.n1}`).style.display="none"}
],
 [3903329268,async function s(e){try{await this.usePI("engageaccount",{latest:!0});let r=this.fnPre(e);if(console.log("hereee"),!n)return this.opErr(e,"can't find app");let n=r?.v;console.log({s:e,vn:r,app:n});let t,a;switch(e.c){case 1:t=e.t1,a=e.t2,console.log("name",t,"value",a);break;case 2:t=this.vmGv(e.V1),a=this.vmGv(e.V2);break}if(console.log({app:n,name:t,value:a}),!t||!a)return this.opErr(e,"name and value required");let{error:o}=await EPI.engageaccount.sb.from("appsecrets").insert({app_id:n.id,name:t,value:a});if(o)return this.opErr(e,`supabase ${o.message}`)}catch(r){this.opErr(e,r.message),this.fnPost(e,{error:r.message},65)}this.fnPost(e,vn,65)}],
 [1789196024,async function t({t1:n}){return"<div></div>"}
],
 [887739466,async function f(t){let n=EE.de(t,1,20,4,.5),e=`
  .e${t.o} {
    font-family: var(--button-font,Arial);
    font-size: 2em;
    font-weight: 900;
  }
  `,o=t.n1?t.n1:t.t1;o=this.vmIv(o),EE.rec(t,e),t.html=`<div class="${n.cl}" style="${n.sty}${n.fs}">${o}</div>`,this.out(t)}
],
 [2317780205,async function e(o){console.log("APP.LAYOUT.MOBILE",o),this.uiLo("mobile",o)}
],
 [2512205615,async function a(o){navigator.clipboard.writeText("").then(()=>{console.log("clipboard cleared")},()=>{this.opErr(o.o,"clipboard clear failed")})}
],
 [744467015,async function t(n){}],
 [1266430077,async function t({t1:n}){return"<div></div>"}
],
 [2324972999,async function t(n){}],
 [4105266020,async function s(t){switch(this.fnPre(t),this.st.var=this.st.CF.retvars||["result"],t.c){case 1:return this.fnPost(t,this.vmGv(t.V1),65);case 2:return this.fnPost(t,this.vmIv(t.t1),17);case 3:return this.fnPost(t,t.n1,33);case 4:return this.fnPost(t,!0,49);case 5:return this.fnPost(t,!1,49)}}
],
 [1047770722,async function t(n){}
],
 [4195890977,async function t(n){}
],
 [2446868172,async function e(t){this.p("run.server")}],
 [1915518803,async function o(t){try{this.fnPre(t),console.log({s:t});let e=new Map([[1,"countries"],[2,"usstates"],[3,"months"]]).get(t.c);if(!e)return this.opError("dataset not found");let a=await(await fetch(`https://xpec.run/datasets/${e}.json`)).json();this.fnPost(t,a,85)}catch(s){this.opErr(t,`dataset failed: ${s.message}`)}}],
 [357287516,async function o(t){let n=this.fnPre(t),e=new Date(n.v).getDay()===3;this.fnPost(t,e,49)}],
 [1485709967,async function s(n){let t=this.fnPre(n),o=this.fnGetTarg(n);console.log({vr:t,a1:o}),this.fnPost(n,t.v.join(o),17)}],
 [3834389129,async function n(t){let a=this.fnGetArg(t,"t1",144);this.st.app.path=a}
],
 [2966525598,async function c(t){console.log({addsection:1,s:t});let n=document.getElementById(`i${this.id}_s${this.st.SCR}`),e=document.createElement("div");e.id=`i${this.id}_s${this.st.SCR}_${t.fc}`,e.style.backgroundColor=t.c1?t.c1:"transparent",e.style.border="1px solid black",e.innerHTML=`section ${this.st.SCR} ${t.fc}`,n.appendChild(e)}
],
 [425382388,async function e(t){let d=EE.de(t);t.html="<div></div>",this.out(t)}
],
 [2050774519,async function c(t){let n=this.fnPre(t),o=this.VM[t.v1]?this.VM[t.v1].v:null;console.log({s:t,vr:n,a1:o}),this.fnPost(t,n.v||o,49)}],
 [1861611387,async function f(t){let n=this.fnPre(t);this.fnPost(t,n.t,33)}],
 [1768193495,async function t(n){}
],
 [3404104126,async function s(e){let n=!(typeof speechSynthesis>"u");this.fnPost(e,n,49)}],
 [1557758346,async function i(s){let t=s.v!=="0";this.st.not&&(t=!t,this.st.not=!1),this.st.val=[[t,49]],this.st.CF.lastvto=49,this.vmAss()}],
 [2727624781,async function t(s){this.st.val=[[Number(s.v),33]],this.vmAss()}],
 [2091369487,async function t(n){}],
 [339592753,async function o(t){let n=this.fnPre(t);console.log({vr:n}),this.fnPost(t,Object.keys(n.v),82)}],
 [1569168927,async function n(o){console.log({s:o})}],
 [3939963576,async function o(t){EE.pim.aPico();let e=EE.de(t,1,5,1,.2),i=this.dinp(t);t=this.de(t,!1);let c=t.onleft||!t.onright,n=t.onright||!t.onleft;t.html=`
    <fieldset style="${e.sty}${e.fs}">
  <label for="switch">
    ${n?t.t1:""}
    <input type="checkbox" id="${t.id}-switch" name="switch"
    onchange='EE.input({ ev: "${i.event}",value : this.checked})' 
    role="switch"
    ${t.value?"checked":""}
    >
    ${c?t.t1:""}
  </label>
  
</fieldset>
    `,this.out(t)}
],
 [3079374069,async function h(t){try{let s=this.st.latest?"?latest":"";async function n(){let e=await(await fetch(c)).arrayBuffer(),o=new Uint8Array(e),a=new this.FLCManager;a.dflc(o),console.log(a.dec.fl);for(let[l,i]of a.dec.fl)this.FM.dec.fl.set(l,i);console.log({allflows:this.FM.dec.fl}),this.st.bundles[t.k1]=!0,this.st.nowait=!1}let c=`https://c.flu.run/bundle/${t.kw}.bin${s}`;this.st.nowait?n.bind(this)().then(()=>`:attach of ${t.kw} async`):await n.bind(this)()}catch(s){console.log({error:s}),this.opErr(t,`:attach failed - ${s.message}`)}}
],
 [706495305,async function c(e){let r=this.vmIv(e.t1);if(!r)return this.opErr(e,"no path can be resolved");let n=this.vmGv(e.V1);if(!n)return this.opErr(e,"no content can be resolved");try{let{error:t,data:s}=await EE.EA.sb.auth.getSession();if(t)return this.opErr(e,`e.edge.put - getting session: ${t.message}`);let a=s?.session?.access_token;console.log("e.edge.put");let o=await(await fetch(`https://o${e.o}.deno.dev/${r}`,{method:"POST",headers:{"Content-Type":"text/plain",Authorization:`Bearer ${a}`},body:n})).json();if(o.error){this.opErr(e,`e.edge.put - ${o.error}`);return}console.log(o)}catch(t){this.opErr(e,`e.edge.put - failed to load: ${t.message}`)}}
],
 [4222478199,async function t({t1:n}){return"<div></div>"}
],
 [515559575,async function n(e){EE.pim.aIcons();let c=EE.de(e,1,5,1,.2),i=EE.sizer(e.s,1,5,50,10),o=this.fnGetArg(e,"t1",144),t=`
    .e${e.o}  {
      display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px 10px;
        background-color: #eeeeee;
        border-radius: 5px;
        border: 1px solid #cccccc;
        font-family: monaco;
        margin: 2px;
     }
     `;EE.rec(e,t),e.html=`
  <div class="${c.cl}" style="${c.sty};${c.fs};width:${i}%">
  <div style="flex-grow:1">${o}</div>
  <iconify-icon icon="heroicons-outline:duplicate"></iconify-icon>
  </div>`,this.out(e)}
],
 [271599374,async function t(n){}
],
 [459627497,async function s(t){console.log({s:t});let i=`
      .e${t.o} {
        display: flex;
        justify-content:flex-start;
        align-items:center;
        flex-wrap: wrap;
        width:100%;
      }
      .e${t.o} > div {
        margin: 2px;
      }
      `;EE.rec(i),t.html=`<div id="${t.id}" class="e${t.o}" style="justify-content:${justify}"></div>`,this.out(t);let e=this.st.targetsec;this.st.targetsec=t.id,this.st.rowid=t.id,await this.rbonce(t),this.st.targetsec=e,this.st.rowid=null}
],
 [3324140310,async function i(t){this.fnPre(t),t.c===1&&(this.st.app.id=t.t1),this.fnPost(t,this.st.app.id,17)}],
 [1869335035,async function t(n){}],
 [2494860273,async function c(i){let s=this.fnPre(i).v.split("\n"),l=100,p=s.length>l?l:s.length,r=/\"(.*)\"$/,e={};for(let a=0;a<p;a++){let t=s[a].trim();if(t.startsWith("app.name")){let[,n]=t.split('"');e.appname=n}if(t.startsWith("app.path")){let[,n]=t.split('"');e.apppath=n}if(t.startsWith("engage.version")){let[,n]=t.split(" ");e.engageversion=n}}console.log({preparse:e}),this.fnPost(i,e,65)}],
 [1364252335,async function m(e){await this.usePI("editor",{latest:!0}),await this.use(8,{dev:!0}),console.log({s:e});let o=e.n1,t=this.vmGv(e.V1);t||(t="// fluent source code goes here");let r=e.t1?e.t1:"fluent editor",c=EE.de(e,1,5,400,100),f=EE.EPI[3]?"\u{1F539}":"\u{1F53A}",g=EE.E[o]?"\u{1F539}":"\u{1F53A}",i=e.c1?e.c1:"#121212",a=e.c2?e.c2:"white",l=e.bc?e.bc:"#eeeeee",n=e.oc?e.oc:"gray",d=e.ac?e.ac:"gray",h=`
  .e${e.o} { margin: 5px; width: 100%; padding: 5px;}
.cm-editor { height: inherit; width: 100%; border-radius: 5px; }
.cm-content { font-family: monaco, monospace; }
s.headerfooter { background-color: boc; color: white; }
  `;EE.rec(e,h),e.html=`<style>#${e.id} .headerfooter { color: ${a}; background-color: ${n};}</style><div class="${c.cl}" id="editor${o}" style="height: ${c.sz}px;"></div>`,this.out(e);let s=!e.noheader,u=!e.nofooter,E=!e.nolinenums;EE.ED[o]=new EPI.editor.Full(o,{title:r,co:i,bgc:l,boc:n,acc:d,showHeader:s,showFooter:u,showLineNumbers:E}),EE.ED[o].initialize(t)}
],
 [3779696957,async function t(n){}
],
 [2481681296,async function v(t){let i=t.V1?this.vmGv(t.V1):this.vmIv(t.t1);this.stOpSet(2149574313,"email","body",i)}
],
 [2698558069,async function r(o){console.log({s:o});let i=`.e${o.o} {
    border-radius: 5px;
    padding: 10px;
    margin: 1px;
  }
  .e${o.o}wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-family: monaco, monospace;
  `;if(o.c===3||o.c===4){let l=this.vmGv(o.V1);if(o.c1=EPI.colors.lookup[l],console.log("color lookup",o.c1),!o.c1)return this.opErr(o,`color ${o.V1} not found`)}EE.rec(o,i);let c=EE.de(o,1,5,60,20),n=o.c1,t=o.c1;o.t1&&(t=this.vmIv(o.t1));let a=o.ac?o.ac:o.c1;o.value&&this.fnPost(o,o.value,17);let e;if(o.fc){let l=`{ goto: ${o.fc}`;o.value&&(l+=`,value:'${o.value}'`),l+=" }",e=`onclick="EE.E['${this.id}'].input(${l})"`}o.html=`<div ${e} class="${c.cl}wrap"><div class="${c.cl}" style="background-color:${n};width:${c.sz}px;height:${c.sz}px;${c.sty};">&nbsp;</div><div style="color:${a}">${t}</div></div>`,this.out(o)}
],
 [2962545040,async function t(n){}
],
 [172823732,async function s(e){console.log("hover event...");let n=`${this.st.lastid}`,t=document.getElementById(`${n}-event`);if(!t)return this.terr("cannot find element to bind event to!");let o=this.id;t.addEventListener("mouseover",()=>EE.E[o].rbonce(e))}
],
 [90215598,async function t(n){}
],
 [1081791064,async function r(o){console.log({s:o});let n=EE.de(o,1,7,1,.2),t=o.t1?o.t1:`${o.n1} fluent...`,d=`
  .e${o.o} {
    margin: 5px;
    width: 100%;
    padding: 0.5rem;
    background: #eee;
    border-radius: 5px;
  }

  .e${o.o} input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    outline: none;
    font-family: monaco, monospace;
    border:none;
    background-color:transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }
  `;function c(e){console.log({e});let a=e.target.value;console.log({v:a}),console.log(EE.E[this.id]),e.target.value=""}let i=o.c1?o.c1:"#121212";EE.rec(o,d),o.html=`<div class="${n.cl}" style="${n.sty}"><input id="${o.id}input" type="text" style="${n.fs};color:${i}" placeholder="${t}" /></div>`,this.out(o),document.getElementById(`${o.id}input`).addEventListener("change",c.bind(this))}
],
 [2286062411,async function n(o){console.log({js:1,s:o})}
],
 [11235452,async function i(t){this.st.dt||(this.st.dt={}),this.st.dt.ti=t.ti1}],
 [1852389935,async function l(t){this.fnPre(t),await this.usePI("fluentref",{latest:!0});let i=EPI.fluentref;t.t1=this.vmIv(t.t1);let f;t.t1?f=i.filter(e=>e.type==="f"&&e.cat===t.t1):f=i.filter(e=>e.type==="f"),this.fnPost(t,f,85)}],
 [602932885,async function t({t1:n}){return"<div></div>"}
],
 [890739145,async function c(t){let n=this.fnPre(t),o=this.fnGetTarg(t);console.log({s:t,vr:n,a1:o}),this.fnPost(t,n.v+`\n${o}`,n.t)}],
 [3759296992,async function t(n){}],
 [1385554522,async function e(t,n){return n}],
 [1542289895,async function n(t){let e=EE.de(t,1,5,32,6),o=EE.sizer(t.s,1,9,2,.5),r=t.bsty||"solid",c=`.e${t.o} {
    width: 100%;
    text-align:center;
    color: var(--primary-color,black);
    background-color: transparent;

    font-size:4px;
  }
  .e${t.o} hr {
    margin:0px;
    padding:0px;
  }
  `;EE.rec(t,c),t.html=`<div style="width:100%;text-align:center">
  <hr class="${e.cl}" style="${e.sty}border-top:${r} ${o}px;"/>
  </div>

  `,this.out(t)}
],
 [1263503423,async function a(t){EE.pim.aIcons(),t.t1=this.vmIv(t.t1);let i=EE.de(t,1,20,40,10),o=EE.sizer(t.s,1,9,5,2),n=EE.sizer(t.s,1,5,20,2);console.log({here:1,s:t,d:i});let c=t.t2?`<div>${this.vmIv(t.t2)}</div>`:"",e=`.e${t.o} { display:flex;justify-content:center;align-items:center;color:var(--text-color);font-family:var(--text-font,Arial);border-radius:5px;}
      .a${t.o} {
        text-decoration:none;
      }
      `;EE.rec(t,e),t.html=`<a class="a${t.o}" href="https://www.instagram.com/${t.t1}/"><div class="${i.cl}" style="${i.sty};font-size:${n}px;padding:2px ${o}px;"><div><iconify-icon width="${i.sz}" icon="mdi:instagram"></iconify-icon></div>
      ${c}</div></a>`,this.out(t)}
],
 [2458738790,async function r(e){if(console.log({s:e}),await this.use(1,{dev:e.dev}),this.sb?.userid){e.html=`<div>:login already logged in as ${this.sb.userid}</div>`,this.out(e);return}let t,s;switch(e.c){case 1:t=this.vmGv(e.V1),s=this.vmGv(e.V2);break;case 2:t=e.t1,s=this.vmGv(e.V1);break;case 3:t=e.t1,s=e.t2;break}if(!t||!s)return this.terr(":login missing userid or password");try{let{data:a,error:i}=await EE.EA.sb.auth.signInWithPassword({email:t,password:s});if(console.log({data:a,error:i}),i)return this.opErr(e,`:login failed - ${i.message}`),this.terr(`:login failed - ${i.message}`);this.sb={userid:a.user.id,token:a.session.access_token,plan:a.user.app_metadata.pl,orgname:a.user.app_metadata.o.n,appid:a.user.app_metadata.a.id}}catch(a){return console.log(a),this.terr(`:login failed - ${a.message}`)}}
],
 [3224896831,async function t(n){}
],
 [444002456,async function l(t){let f=this.fnPre(t),e;t.c===255?e=Math.round(f.v):t.c===1?e=Math.ceil(f.v):e=Math.floor(f.v),this.fnPost(t,e,33)}],
 [3369892546,async function t({t1:n}){return"<div></div>"}
],
 [3191461850,async function e(t){switch(console.log({s:t}),t.c){case 1:this.stOpSet(t.o,null,"set",t.t1);break;default:this.terr(`fatal :element error - ${t.c}?`)}}],
 [4192016962,async function i(t){this.fnPre(t),await this.usePI("fluentref",{latest:!0});let e=EPI.fluentref;t.t1=this.vmIv(t.t1),t.t1&&(e=e.filter(f=>f.cat===t.t1)),this.fnPost(t,e,85)}],
 [3827374264,async function d(r){try{let t=this.fnPre(r),{error:o,access_token:i}=await this.sbctx();if(o)return this.opErr(r,`cant resolve sb ${o}`);let s=t.v.id;if(!s)return this.opErr(r,"no appid can be resolved");let{error:n,result:e}=await this.ddexe(r.o,{appid:s},i);if(n)return this.opErr(r,`dd.exe ${n}`);if(!e.success)return this.opErr(r,`deno - ${e.result.error}`);console.log(e);let c=e?.result?.jwt,a={...t.v,key:c};this.fnPost(r,a,67)}catch(t){this.opErr(r,t.message)}}],
 [1424287616,async function i(t){let n=this.fnPre(t);if(!n)throw"invar missing/not text";let o=this.fnGetTarg(t);console.log({vr:n,a1:o}),this.fnPost(t,n.v.endsWith(o),49)}],
 [1742389604,async function i(t){let e;switch(t.c){case 1:case 2:e=this.fnGetNarg(t);break;case 255:e=16;break;default:return this.opError(t,"invalid random text op?")}let a=this.uid(e);this.fnPost(t,a,28)}],
 [1484226684,async function n(t){await this.usePI("video"),console.log({VIDEOYOUTUBE:1,s:t});let o=EE.de(t,1,5,300,50),i=o.sz*(2/3),e=`
    .e${t.o} {
      width: 100%;
      background-color: black;
      border-radius: 10px;
      margin: 2px;
      padding: 5px
    }
    `;EE.rec(t,e);let a=this.fnGetArg(t,"t1",144);if(!a)return this.opErr("no youtube id found");let l=t.t2||"play video",d="",c=t.I1?this.rit(t.I1):"https://res.cloudinary.com/ops1/image/upload/v1597753300/apps/carolinaballet/background.jpg";t.html=`<div class="${o.cl}" style="${o.sty};width:${o.sz}px;height:${i}px;"><lite-youtube videoid="${a}" params="${d}" style="background-image:url('${c}');" playlabel="${l}"></lite-youtube></div>`,this.out(t)}
],
 [711834861,async function n(t){this.st.lang=t.c}
],
 [538813128,async function n(t){let e;t.v1?e=this.vmIv(t.v1):t.t2?e=t.t2:t.n1&&(e=t.n1);let[i,h]=this.coV(e);e||this.terr("http.header: no value"),this.stOpSet(538813128,"header",t.t1,i)}],
 [2633659607,async function t(n){}],
 [2386899618,async function o(n){let t=this.fnPre(n);this.fnPost(n,t.v.join("\n"),17)}],
 [2800700216,async function o(t){let n=this.fnPre(t),s=this.fnGetArg(t,"t1",144),c=n.v.split(s);this.fnPost(t,c,82)}],
 [3710357350,async function e(t){let r=this.fnPre(t),n=this.fnGetNarg(t);if(!n)throw"non numeric arg!";this.fnPost(t,r.v<n,49)}],
 [2841496012,async function t(n){}
],
 [1179841384,async function t(n){}
],
 [4115263711,async function n(t){this.st.nowait=!0}
],
 [988854901,async function a(t){let r=this.vmIv(t.t1);if(!r)return this.opErr(t,"no path can be resolved");let n=this.vmGv(t.V1);if(!n)return this.opErr(t,"no content can be resolved");try{let e=await EE?.EA?.sb?.auth.getSession();if(!e)return this.opErr(t,"not logged in");if(e.error)return this.opErr(t,`getting session: ${e.error.message}`);let s=e.data?.session?.access_token;console.log({access_token:s});let o=await(await fetch(`https://o${t.o}.deno.dev/${r}`,{method:"POST",headers:{"xpe-op-auth":t.o,"xpe-client-id":"clientidhere","Content-Type":"text/plain",Authorization:`Bearer ${s}`},body:n})).json();if(o.error)return this.opErr(t,o.error);this.opResult(t,o),console.log(o)}catch(e){this.opErr(t,"catch:"+e.message)}}
],
 [3410873591,async function o(t){if(console.log("row:"),t.c===4){this.st.rowmargin=t.n1;return}if(t.c===5){this.st.rowpadding=t.n1;return}if(t.c===6){this.st.rowjustify="space-between";return}if(t.c===7){this.st.rowjustify="left";return}let e=`
  .e${t.o} {
    display: flex;
    justify-content:center;
    align-items:center;
    flex-wrap: wrap;
    width:100%;
  }
  .e${t.o} > div {
    margin: 2px;
  }
  `;EE.rec(e);let r=this.st.rowjustify||"center",i="";t.c1&&(i+=`background-color:${t.c1};`),t.n1&&(i+=`border-radius:${t.n1}px;`),this.st.rowmargin&&(i+=`margin:${this.st.rowmargin}px;`),this.st.rowpadding&&(i+=`padding:${this.st.rowpadding}px;`),console.log({s:t,extrastyle:i}),t.html=`<div id="${t.id}row" class="e${t.o}" style="display:flex;flex-wrap:wrap;align-items:center;justify-content:${r};${i}"></div>`,this.out(t);let n=this.st.targetsec;this.st.targetsec=t.id,this.st.rowid=`${t.id}row`,console.log(`\u{1F17E}\uFE0F ROW ID is ${t.id}row`),await this.rbonce(t),this.st.targetsec=n,this.st.rowid=null}
],
 [4212673968,async function l(t){this.fnPre(t),console.log({s:t});let n=this.fnGetArg(t,"t1",144).split("\n").map(e=>e.trim());n=n.filter(e=>e.length>0),this.fnPost(t,n,82)}],
 [3459062218,async function r(t){let o=this.fnPre(t).v.toLowerCase().split(" ");this.fnPost(t,o.join("-"),49)}],
 [1205559363,async function i(t){this.fnPre(t);let n=this.FM.bin.length;this.fnPost(t,n,33)}],
 [2942222951,async function e(t){switch(t.c){case 1:return this.stOpSet(t.o,null,t.kw,t.v);case 2:return this.stOpSet(t.o,null,t.kw,Number(t.v));case 3:return this.stOpSet(t.o,null,t.kw,!0);case 4:return this.stOpSet(t.o,null,t.kw,!1)}}],
 [3419709504,async function c(e){console.log({s:e});let l=EE.de(e),s=`
  .e${e.o} {
    font-size: 0.6rem;
    width: 100%;
    text-align: center;
    padding: 5px;
    margin: 2px;
    background-color: lightgray;
    border-radius: 999px;   
  }
  `,a=this.vmGv(e.V1),r,t;switch(e.c){case 1:t=e.n1,r=a===e.n1;break;case 2:t=e.t1,r=a===e.t1;break;case 3:t=!0,r=a===!0;break;case 4:t=!1,r=a===!1;break;case 5:e.V1="error (op)",t=!0,r=this.lastoperr!==0;break;case 6:e.V1="ok (op)",t=!0,r=this.lastoperr===0;break;case 7:if(e.V1="_IFRES",t=!0,!this.VM._IFRES){r=!1;break}r=this.VM._IFRES.v===!0;break;case 8:if(e.V1="_IFRES",t=!0,!this.VM._IFRES){r=!1;break}r=this.VM._IFRES.v!==!0;break;case 9:t=e.n1,a=this.VM[e.V1].v.length,r=a===t;break;case 10:t=e.n1,a=this.VM[e.V1].t,r=a===t;break;case 11:t=e.F1,a=this.VM[e.V1].t,r=a===t;break}let i=r?`<div style="color:green">\u2714 ${e.V1} is ${t}</div>`:`<div style="color:red">\u2716\uFE0F ${e.V1} is ${a}, not ${t}</div>`;e.html=`<div class="${l.cl}">${i}</div>`,EE.rec(e,s),this.out(e)}
],
 [2580416362,async function n(t){await this.usePI("datagrid");let d=EE.de(t),e=`
  .e${t.o} {
    width: 100%;
  }
  `,r=t.c1?t.c1:"black",o=t.bc?t.bc:"white",a=t.ac?t.ac:"white",i=t.oc?`5px solid ${t.oc}`:null;EE.rec(t,e);let c=this.vmGv(t.V1);if(!c)return this.opErr(`no data found for datagrid in variable ${t.V1}`);t.html=`<div class="${d.cl}" style="${d.sty}"><div id="${t.id}-dg"></div></div>`,this.out(t),new EPI.datagrid.Grid({columns:["n","s"],data:c,style:{td:{color:r,border:"1px solid #ccc"},table:{"font-size":"12px",border:i},container:{"background-color":o},header:{"background-color":o},footer:{"background-color":o}},pagination:{limit:5,summary:!0},height:"400px",fixedHeader:!0,search:!0,sort:!0}).render(document.getElementById(`${t.id}-dg`))}
],
 [3226330269,async function a(e){console.log({s:e}),this.lastoperr=0;try{if(!this.sb?.userid){this.opErr(e,"e.files failed - not logged in");return}let t,r=`${this.sb.userid}`;switch(e.c){case 1:r+=`/${e.t1}`;case 2:t="apps-pub";break;case 3:r+=`/${e.t1}`;case 4:t="apps-prv";break;default:this.opErr(e,"e.files failed - invalid bucket");return}let{data:i,error:s}=await EE.EA.sb.storage.from(t).list(r,{limit:100,offset:0,sortBy:{column:"name",order:"asc"}});if(console.log({data:i,error:s}),s){this.opErr(e,`e.files failed - ${s.message}`);return}this.fnPost(e,i,85)}catch(t){this.opErr(e,`e.newapp failed - ${t.message}`)}}],
 [3200081944,async function n(r){let t=this.fnPre(r);this.fnPost(r,Array.isArray(t.v),49)}],
 [1339761666,async function t({t1:n}){return"<div></div>"}
],
 [961036656,async function o(t){console.log({s:t}),this.st.startRan=!0,await this.goto(t.fc)}
],
 [1528346059,async function t(s){this.st.app.domains||(this.st.app.domains=[]),s.kw&&(this.fnPre(s),this.st.app.domains.push(s.kw)),this.fnPost(s,this.st.app.domains,82)}],
 [2648475635,async function f(t){let e=this.fnPre(t);typeof e.v!="object"?this.fnPost(t,!1,49):this.fnPost(t,!Array.isArray(e.v),49)}],
 [4017992172,async function f(t){this.fnPost(t,!1,49)}],
 [4254098296,async function e(t){let r=this.fnPre(t),n=this.fnGetNarg(t);if(!n)throw"non numeric arg!";this.fnPost(t,r.v>n,49)}],
 [2329731327,async function l(t){t.t1=this.vmIv(t.t1);let c=EE.de(t,1,8,80,20),o="",e="",d="",r="",a,n="background-size:cover;background-repeat:no-repeat;background-position:center";switch(t.c){case 1:o=`${n};background-image: url(${this.rit(t.I1)});`;break;case 2:o=`${n};background-image: url(https://picsum.photos/200/300);`,e=`${t.t1}`;break;case 3:o=`${n};background-image: url(${this.rit(t.I1)});`,e=`${t.t1}`,e=`${t.t1}`,a=this.rft(t.F1),console.log(a),r=`<button onclick="console.log(111)">${a[1]}</button>`;break;case 4:o="background-color:var(--banner-background,gray);",e=`${t.t1}`;break;case 5:o="background-color:var(--banner-background,gray);",e=`${t.t1}`,a=this.rft(t.F1),console.log(a),r=`<button onclick="console.log(111)">${a[1]}</button>`;break;case 6:case 7:}let i=`
  .e${t.o} {
    padding: 10px;
    font-family: var(--text-font,Arial); 
  }
  .e${t.o} button {
    padding: 10px 20px;
    border-radius:5px;
    opacity:0.7;
    background-color:transparent;

  }

  `;EE.rec(t,i),t.html=`<style>#${t.id} {${o}}</style><div id="${t.id}" class="${c.cl}" style="width:100%; height: ${c.sz}px; ${c.sty}">${e}${r}</div>`,this.out(t)}
],
 [1414448552,async function o(s){let e=await fetch(`https://xpe${s.o}.deno.dev`,{method:"POST",body:JSON.stringify({chkp:this.st.chkp||null,hash:this.st.chkphash}),headers:{"Content-Type":"application/json","xpe-client-id":1234,"xpe-op-auth":stmt.op}}),{success:h,result:t}=await e.json();if(!h)throw new Error(`checkpoint failed: ${chkp}`);console.log({success:h,result:t}),this.st.chkp=t.chkp,this.st.chkphash=t.hash}
],
 [13105271,async function t(n){}
],
 [952765877,async function e(t){let n=this.VM[t.V1];if(n.t!=33)throw"not a number";this.vmSetType(t.V1,33,n.v+1)}],
 [3895546545,async function n(t){this.fnPost(t,this.VM,85)}],
 [4210385079,async function t(n){}],
 [1508318061,async function i(n){let e="SpeechRecognition"in window||"webkitSpeechRecognition"in window;this.fnPost(n,e,49)}],
 [482617670,async function t({t1:n}){return"<div></div>"}
],
 [4009178210,async function i(t){EE.pim.aIcons();let e=EE.de(t,1,5,1,.2),c=document.getElementById(`${this.id}_7`);t.t1=this.vmIv(t.t1);let o=`
    <style>
    .e${t.o} {
      display:flex;
      font-family: Arial;
      background-color:red;
      width:100%;
      text-align:center;
      padding:5px 20px;
    }
    </style>
    `;this.uicl(7),t.bc&&(c.style.backgroundColor=t.bc),t.sec=7,t.html=`${o}<div class="${e.cl}" style="${e.sty}${e.fs}">${t.t1}</div>`,this.out(t)}
],
 [3528147946,async function o(e){let i=`
    .e${e.o}-screen {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }

    .e${e.o}-header,
    .e${e.o}-footer {
      background-color: lightblue;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

      
    .e${e.o}-top,
    .e${e.o}-bottom {
      background-color: lightgreen;
      width: 100%;
    }

    .e${e.o}-center {
        flex-grow:8;
        width:100%;
        display:flex;
        justify-content:space-between;
        align-items: start;
    }


    .e${e.o}-right,
    .e${e.o}-left {
        background-color: pink;
        flex-grow:2;
        height:100%;
    }

  

    .e${e.o}-main {
      height:100%;
      background-color: yellow;
      flex-grow:8;
      overflow-y: scroll;
      overflow-x: hidden;
      display:flex;
      flex-direction:column;
      align-items: center;
      justify-content: flex-start;
    }

 
    `;EE.rec(e,i);let t=document.getElementById(`i${this.id}`);t.innerHTML=`
    <div id="i${this.id}_s0" class="e${e.o}-screen">
        <div id="i${this.id}_s0_3407041447" class="e${e.o}-header"></div>
        <div id="i${this.id}_s0_4254961657" class="e${e.o}-top"></div>
        <div class="e${e.o}-center">
            <div id="i${this.id}_s0_2719185556" class="e${e.o}-left"></div>
            <div id="i${this.id}_s0_1970145754" class="e${e.o}-main"></div>
            <div id="i${this.id}_s0_2186722472" class="e${e.o}-right"></div>
        </div>
        <div id="i${this.id}_s0_171242398" class="e${e.o}-bottom"></div>
        <div id="i${this.id}_s0_270619888" class="e${e.o}-footer"></div>
    </div>
    `}
],
 [2418501722,async function c(t){this.st.mode=t.c}
],
 [158162560,async function t({t1:n}){return"<div></div>"}
],
 [203486905,async function s(t){try{await this.usePI("engageaccount");let e=await this.sbctx();if(!e.user_id)return{sberror:"engageaccount/sb not initialized"};let a=this.vmGv(t.V1);if(!a)return this.opErr(t,"e.newfile failed - no data");let o=t.ttl?t.ttl:"3600",{data:n,error:r}=await EPI.engageaccount.sb.storage.from("apps-prv").upload(`${e.user_id}/${t.t1}`,a,{cacheControl:o,upsert:!0});if(console.log({data:n,error:r}),r)return this.opErr(t,r.message);this.fnPost(t,!0,49)}catch(e){this.opErr(t,e.message),this.fnPost(t,!1,49)}}],
 [637316154,async function a(t,r){let e;switch(r.c){case 1:e=this.vmGv(r.v1);break;case 2:e=r.t1;break;case 3:e=r.n1;break;default:return null}return Array.isArray(t)?[...t,e]:null}],
 [2492588513,async function o(t){let e=await EE?.EA?.sb?.auth?.getUser(),s=await EE?.EA?.sb?.auth?.getSession();if(!e||!s)return this.opErr(t,"not logged in");if(console.log({user:e,session:s}),!EE.E[this.id].PII.templates)return this.opErr(t,"use.templates required");let i=EE.E[this.id].PII.templates.indexhtml({});this.fnPost(t,i,17)}],
 [1397578733,async function c(e){console.log({s:e});let t=EE.de(e),i=e.c1||"#292929",o=this.vmIv(e.t1),l=`
    .e${e.o} {
        width: 100%;
        border-radius:5px;
        background-color:#eeeeee;
        color: #292929;
        padding:10px;
        margin: 2px 50px 2px 50px;
        display:flex;
        align-items:center;
        justify-content:space-between;
    }
    .e${e.o}-emsg {
        margin-left:20px;
        font-size: 10px;
        flex-grow:1;
        text-align:left;
    }
    `;EE.rec(e,l),e.html=`<div class="${t.cl}" style="${t.sty}">
  <div><svg fill="${i}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="16" height="16"><path d="M4.855.708c.5-.896 1.79-.896 2.29 0l4.675 8.351a1.312 1.312 0 0 1-1.146 1.954H1.33A1.313 1.313 0 0 1 .183 9.058ZM7 7V3H5v4Zm-1 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path></svg></div>
  <div class="e${e.o}-emsg">${o}</div></div>`,this.out(e)}
],
 [3791238623,async function a(t){EE.pim.aIcons(),t.t1=this.vmIv(t.t1);let o=EE.de(t,1,20,40,10),i=EE.sizer(t.s,1,9,5,2),c=EE.sizer(t.s,1,5,20,2);console.log({here:1,s:t,d:o});let e=t.t2?`<div>${this.vmIv(t.t2)}</div>`:"",n=`.e${t.o} { display:flex;justify-content:center;align-items:center;color:var(--text-color);font-family:var(--text-font,Arial);border-radius:5px;}
    .a${t.o} {
      text-decoration:none;
    }
    `;EE.rec(t,n),t.html=`<a class="a${t.o}" href="https://www.facebook.com/${t.t1}/"><div class="${o.cl}" style="${o.sty};font-size:${c}px;padding:2px ${i}px;"><div><iconify-icon width="${o.sz}" icon="mdi:facebook"></iconify-icon></div>
    ${e}</div></a>`,this.out(t)}
],
 [3801217920,async function s(e){await this.usePI("shoelace"),console.log({PROGRESS:1,s:e});let o=EE.de(e);e.html='<sl-progress-bar value="50"></sl-progress-bar>',this.out(e)}
],
 [1054508148,async function s(t){if(console.log("EXIT LOOP"),this.st.K.length===0)throw"not in block: exit loop invalid";this.st.CF=this.st.K.pop(),this.VM._IFRES=this.st._IFRES,this.VM._ELSEIFRES=this.st._ELSEIFRES,this.FM.D=this.st.CF.bin,this.FM.os=this.st.CF.os,console.log(`exit out of loop back to ${this.D.os}..`)}],
 [1736995210,async function t(s){this.p("send.sms")}],
 [4137576387,async function H(l){let t=EE.de(l,1,20,100,20),L=EE.sizer(l.s,1,9,20,2),r=t.sz*159/990,c=l.t1?l.t1:"",o=l.u1?l.u1:"https://www.wikipedia.org",i=`
        .e${l.o} {
            background-color: transparent;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Roboto', sans-serif;
            width: 100%;
        }
        .a${l.o} {
            text-decoration: none;
            width: 100%;
            cursor: hand;
            color: inherit;
        }
    
        `;EE.rec(l,i);let e=l.c1?l.c1:"#000000";l.html=`<a class="a${l.o}" href="${o}"><div class="${t.cl}" style="${t.sty}">



  <svg width="${t.sz}" height="${r}" viewBox="0 0 990 159" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="25.6657" cy="87.4893" rx="18.6651" ry="18.9675" transform="rotate(-30.1417 25.6657 87.4893)" fill="${e}"/>
<ellipse cx="122.334" cy="85.7081" rx="18.6651" ry="18.9675" transform="rotate(-30.1417 122.334 85.7081)" fill="${e}"/>
<ellipse cx="74.2906" cy="87.4776" rx="18.6651" ry="18.9675" transform="rotate(-30.1417 74.2906 87.4776)" fill="${e}"/>
<ellipse cx="48.9157" cy="43.7764" rx="18.6651" ry="18.9675" transform="rotate(-30.1417 48.9157 43.7764)" fill="${e}"/>
<ellipse cx="99.3297" cy="130.599" rx="18.6651" ry="18.9675" transform="rotate(-30.1417 99.3297 130.599)" fill="${e}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M37.1641 56.0977L65.3496 39.7317L67.5768 43.5673C67.5842 48.9807 68.9806 54.4831 71.9075 59.5237C74.8343 64.5643 78.9208 68.5047 83.6187 71.1947L87.1991 77.3608L59.0135 93.7268L55.425 87.5467C55.4171 82.1342 54.0206 76.633 51.0943 71.5933C48.168 66.5536 44.0825 62.6137 39.3857 59.9238L37.1641 56.0977Z" fill="${e}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M62.332 99.2988L90.5176 82.9328L92.7446 86.7681C92.752 92.1815 94.1485 97.6837 97.0753 102.724C100.002 107.765 104.088 111.705 108.786 114.395L112.367 120.562L84.1815 136.928L80.5944 130.75C80.587 125.337 79.1905 119.834 76.2637 114.794C73.3368 109.753 69.2503 105.813 64.5524 103.123L62.332 99.2988Z" fill="${e}"/>
<ellipse cx="74.1677" cy="85.7176" rx="18.6651" ry="18.9675" transform="rotate(-152.674 74.1677 85.7176)" fill="${e}"/>
<ellipse cx="50.9685" cy="130.614" rx="18.6651" ry="18.9675" transform="rotate(-152.674 50.9685 130.614)" fill="${e}"/>
<ellipse cx="97.0545" cy="41.4188" rx="18.6651" ry="18.9675" transform="rotate(-152.674 97.0545 41.4188)" fill="${e}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M67.6758 133.895L38.7203 118.933L58.6948 80.2758L87.6503 95.2374L67.6758 133.895ZM69.7044 129.965C69.4458 124.558 70.5703 118.994 73.246 113.815C75.9217 108.637 79.8097 104.501 84.3698 101.583L69.7044 129.965ZM51.8806 102.76C54.5563 97.5818 55.6808 92.0175 55.4222 86.6102L40.7568 114.992C45.3169 112.075 49.2049 107.939 51.8806 102.76Z" fill="${e}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M90.5664 89.4434L61.6109 74.4818L81.5854 35.8247L110.541 50.7863L90.5664 89.4434ZM92.5956 85.5158C92.337 80.1085 93.4615 74.5441 96.1372 69.3658C98.8129 64.1874 102.701 60.051 107.261 57.1335L92.5956 85.5158ZM74.7718 58.3098C77.4475 53.1314 78.5719 47.5671 78.3134 42.1598L63.648 70.542C68.2081 67.6245 72.0961 63.4881 74.7718 58.3098Z" fill="${e}"/>
<path d="M185.227 34.2727H153.318L184.409 86.6364L152.295 139H184.614L202.409 107.909H203.227L221.023 139H253.545L221.023 86.6364L252.318 34.2727H220.614L203.227 64.75H202.409L185.227 34.2727ZM264.578 139H293.01V107.909H308.76C332.641 107.909 348.646 93.8466 348.646 71.2955C348.646 49 333.05 34.2727 309.783 34.2727H264.578V139ZM293.01 85.8182V56.9773H303.033C313.004 56.9773 318.987 62.2954 318.987 71.2955C318.987 80.2443 313.004 85.8182 303.033 85.8182H293.01ZM359.078 139H434.351V116.091H387.51V98.0909H430.669V75.1818H387.51V57.1818H434.555V34.2727H359.078V139ZM448.656 139H477.088V104.432H486.906L505.315 139H536.202L514.929 99.9318C526.077 94.5625 532.724 84.3864 532.724 69.8636C532.724 47.5682 517.128 34.2727 493.861 34.2727H448.656V139ZM477.088 82.3409V56.9773H487.111C497.082 56.9773 503.065 60.8636 503.065 69.8636C503.065 78.8125 497.082 82.3409 487.111 82.3409H477.088ZM541.98 57.1818H573.48V139H601.503V57.1818H633.003V34.2727H541.98V57.1818ZM657.548 139L663.582 118.955H698.151L704.185 139H734.866L700.298 34.2727H661.435L626.866 139H657.548ZM670.026 97.6818L680.457 63.1136H681.276L691.707 97.6818H670.026ZM835.567 34.2727H807.135V89.0909H806.317L769.089 34.2727H744.953V139H773.385V83.9773H773.999L811.839 139H835.567V34.2727ZM876.22 139L882.254 118.955H916.822L922.857 139H953.538L918.97 34.2727H880.107L845.538 139H876.22ZM888.697 97.6818L899.129 63.1136H899.947L910.379 97.6818H888.697Z" fill="${e}"/>
</svg>


       
      </div></a>`,this.out(l)}
],
 [2248236347,async function e(t){let f=Array.from(this.FM.dec.fl.keys());this.fnPost(t,f,85)}],
 [441678697,async function n(o){console.log({s:o})}],
 [4051345588,async function o(t){let n=this.fnPre(t),e=new Date(n.v).getDay()===2;this.fnPost(t,e,49)}],
 [3630692045,async function n(t){this.fnPost(t,!0,49)}],
 [3243131379,async function i(e){let r;switch(e.c){case 1:r=e.n1;break;case 2:r=this.vmGv(e.V1);break}if(!r)return this.terr(":deleteapp requires appid!");if(!this.sb.token)return this.terr(":logged in user not found!");let{error:t}=await EE.EA.sb.from("apps").delete().eq("id",r);if(t)return this.opErr(e,`deleteapp failed - ${t.message}`),this.terr(t)}
],
 [2770824466,async function t(n){}],
 [1469817411,async function e(s){let t=this.fnPre(s).v.split("\n");console.log({lines:t});let n=[],l;t.forEach(c=>{let o=c.trim();o[0]==="["&&n.push(o.slice(1,-1))}),this.fnPost(s,n,82)}],
 [4033448608,async function e(o){let t=this.fnGetArg(o,"t1",144);navigator.clipboard.writeText(t).then(()=>{console.log("copied to clipboard")},()=>{this.opErr(o.o,"clipboard write failed")})}
],
 [2910911422,async function e(t){console.log("app.webvitals...."),this.fnPre(t),this.webvitals?this.fnPost(t,this.webvitals,65):this.fnPost(t,{error:"no metrics. use :webvitals to enable"},65)}],
 [4209637656,async function t(n){}],
 [3690796785,async function t(n){}],
 [2592658956,async function e(t){let n=this.fnPre(t);this.fnPost(t,"encrypted",17)}],
 [1545123081,async function f(t){let n=this.fnPre(t),e=this.fnGetNarg(t);this.fnPost(t,n.v<e,49)}],
 [750951040,async function t(n){}],
 [747893647,async function t(n){}],
 [3077885137,async function t(n){}],
 [3076318056,async function t({t1:n}){return"<div></div>"}
],
 [595761967,async function i(e){console.log("new name"),console.log({s:e}),this.lastoperr=0;try{if(!this.sb?.userid){this.opErr(e,"e.nameregister failed - not logged in");return}let r=this.fnGetTarg(e),o={user_id:this.sb.userid,name:r},{data:s,error:t}=await EE.EA.sb.from("appgroups").insert([o]);if(console.log({data:s,error:t}),t){this.opErr(e,`e.nameregister failed - ${t.message}`);return}this.fnPost(e,s,65)}catch(r){this.opErr(e,`e.newapp failed - ${r.message}`)}}
],
 [2043981341,async function n(t){this.fnPost(t,t.v,17)}],
 [1836552353,async function n(t){this.st.tz=t.kw}
],
 [1000451061,async function t(n){}
],
 [33004557,async function c(t){try{this.fnPre(t),await this.usePI("scraper");let s=this.vmIv(t.u1),a=await(await fetch(s)).text();console.log({html:a}),this.fnPost(t,a,65)}catch(s){this.opErr(t,s.message)}}],
 [259837287,async function i(o){console.log({VARVAL:1,s:o});let n=EE.de(o),t=`
    .e${o.o} {
        width:100%;
        background-color:blue;
    }
    `;EE.rec(o,t);let c=this.vmGv(o.v);o.html=`<div>${JSON.stringify(c,null,2)}</div>`,this.out(o)}
],
 [112117214,async function c(n){console.log("click event..."),this.st.halt=!1;let e=`${this.st.lastid}`,t=document.getElementById(`${e}-event`);if(!t)return this.terr("cannot find element to bind event to!");let s=this.id,i=this.st.clickctx;t.addEventListener("click",async()=>{this.st.clicksound&&await this.playSnd(),EE.E[s].rbonce(n,i)}),console.log({s:n,lastid:this.st.lastid,tgtid:e,html:t.innerHTML})}
],
 [2004535262,async function e(n){let t=this.fnPre(n);this.fnPost(n,t.v.length,33)}],
 [731635599,async function s(t){let n=this.fnPre(t);this.fnPost(t,"hashresult",17)}],
 [2349401736,async function o(t){let n=this.fnPre(t),e=new Date(n.v).getDay()===4;this.fnPost(t,e,49)}],
 [1501116451,async function t(n){}],
 [3361825392,async function t(n){}
],
 [756502894,async function n(t){this.fnPost(t,Date.now(),34)}],
 [3664386574,async function s(t){this.fnPre(t),await this.usePI("engageaccount");let a=await this.sbctx();this.fnPost(t,a.email,17)}],
 [2592501086,async function o(t){let n=this.fnPre(t),f=this.fnGetTarg(t);this.fnPost(t,n.v+f,n.t)}],
 [796891181,async function p(t){if(!await this.eali())return this.opErr(t,"not logged in");let o=this.fnPre(t),e=o.v.id,a=await this.sbctx();if(!e)return this.opErr(t,"could not resolve appid");switch(t.c){case 1:case 2:let r=this.fnGetArg(t,"t1",144);if(!r)return this.opErr(t,"missing source");let c=0,{data:i,error:s}=await EPI.engageaccout.sb.storage.from("apps-prv").upload(`${a.userid}/${e}/source.flu`,r,{cacheControl:c,upsert:!0});if(console.log({data:i,error:s}),s)return this.opErr(t,s.message);o.v.source=r,this.fnPost(t,o.v,67),this.fnPost(t,r,17);case 255:let{data:n,error:u}=await EPI.engageaccout.sb.storage.from("apps-prv").d}}],
 [1911387030,async function o(e){console.log({s:e}),this.lastoperr=0;try{if(!this.sb?.userid)return this.opErr(e,"not logged in");let{data:r,error:t}=await EE.EA.sb.from("appgroups").select("id,name").order("name",{ascending:!0});if(console.log({data:r,error:t}),t){this.opErr(e,t.message);return}this.fnPost(e,r,85)}catch(r){this.opErr(e,`failed: ${r.message}`)}}],
 [3674277422,async function t(n){}],
 [539664913,async function s(a){let t=new Date;var e=new Date(t.getTime());e.setDate(t.getDate()+(7+2-t.getDay())%7),this.fnPost(a,e,113)}],
 [3565438227,async function t(n){}],
 [730329936,async function o(t){try{if(!await this.eali())return this.opErr(t,"not logged in");let{error:a,data:e}=await EPI.engageaccount.sb.from("domains").select("name");if(a){this.opErr(t,a.message),this.fnPost(t,[],85);return}let n=e.map(i=>i.name);this.fnPost(t,n,82)}catch(a){this.opErr(t,`domain create failed: ${a.message}`),this.fnPost(t,{},65)}}],
 [2173094155,async function t(e){this.lastoperr=0;try{}catch(a){this.opErr(e,`e.imageadd failed - ${a.message}`)}}
],
 [603277892,async function e(t,n){return n}],
 [3002192050,async function i(n){let t=this.fnPre(n);if(!t)throw"invar missing/not group";this.fnPost(n,t.v.slice(-1)[0])}],
 [2898568798,async function s(t){await this.usePI("qrcode");let a=EE.de(t,1,5,200,50),o;switch(t.c){case 1:o=this.vmIv(t.t1);break;case 2:o=this.vmIv(t.u1);break}if(!o)throw"QRCode: no value to encode";let{c1:d="#000000",bc:c}=t,i=EE.sizer(t.s,1,5,200,50),l={dark:d+"ff",light:!c||c==="transparent"?`${d}00`:c+"ff"};console.log({s:t,color:l,S:i});let e=document.createElement("canvas");if(e.id=`${t.id}-canvas`,e.style.width="300px",e.style.height="300px",e.style.backgroundColor="transparent",t.rounded){let n=EE.sizer(t.s,1,5,8,2);e.style.borderRadius=`${n}px`}t.html=`<div id="${t.id}" class="${a.cl}" style="${a.sty}"></div>`,this.out(t),document.getElementById(`${t.id}`).appendChild(e),console.log({qrvalue:o}),EPI.qrcode.toCanvas(e,o,{width:i,color:l},n=>{console.log(n)})}
],
 [2501236706,async function t(n){}],
 [681215740,async function e(a){await this.usePI("webvitals",{latest:!0}),this.webvitals={};function t(i){this.webvitals.cls=i}function s(i){this.webvitals.fid=i}function n(i){this.webvitals.lcp=i}function l(i){this.webvitals.ttfb=i}function b(i){this.webvitals.fcp=i}function o(i){this.webvitals.inp=i}EPI.webvitals.onCLS(t.bind(this)),EPI.webvitals.onFID(s.bind(this)),EPI.webvitals.onLCP(n.bind(this)),EPI.webvitals.onTTFB(l.bind(this)),EPI.webvitals.onFCP(b.bind(this)),EPI.webvitals.onINP(o.bind(this))}
],
 [246897612,async function h(t){try{if(!await this.eali())return this.opErr(t,"not logged in");let r=await this.sbctx(),e=this.fnPre(t).v.id;if(!e)return this.opErr(t,"missing appid");let a=`${r.user_id}/${e}`,n=this.vmGv(t.V1);if(!n)return this.opErr(t,"could not resolve content - empty");let c=t.ttl?t.ttl:"3600",i=this.vmIv(t.t1);if(!i)return this.opErr(t,"could not resolve filename - empty");let{data:s,error:o}=await EPI.engageaccount.sb.storage.from("apps-pub").upload(`${a}/${i}`,n,{cacheControl:c,upsert:!0});if(console.log({data:s,error:o}),o)return this.opErr(t,o.message);this.fnPost(t,s,65)}catch(r){this.opErr(t,r.message),this.fnPost(t,{error:!0},65)}}],
 [806703605,async function i(t){switch(this.fnPre(t),t.c){case 1:case 2:let s=this.fnGetArg(t,"t1",144);if(!s)return this.opErr(t,"missing name");let n=s.toLowerCase().split(" ").join("-");this.st.app.name=s,this.st.app.urlname=n,this.fnPost(t,s,17);break;case 255:this.fnPost(t,this.st.app.name,17);break}}],
 [1841633518,async function s(o){let n=this.fnPre(o).v;if(!n)return this.opErr(o,"missing app");let t={short_name:n.short_name,name:n.name,description:n.description,start_url:"/",display:"standalone",theme_color:n.theme_color,background_color:n.background_color,icons:[{src:n.icon,type:"image/png",sizes:"192x192"}]};this.fnPost(o,JSON.stringify(t),17)}],
 [2425235809,async function o(t){this.lastoperr=0;try{if(!this.sb?.userid){this.opErr(t,"not logged in");return}let r=this.fnGetTarg(t),a=r?`${this.sb.userid}/${r}`:`${this.sb.userid}`,{data:e,error:i}=await EE.EA.sb.storage.from("apps-prv").list(a,{limit:100,offset:0,sortBy:{column:"name",order:"asc"}});console.log({data:e,error:i}),t.onlydirs&&(e=e.filter(s=>s.metadata===null)),t.onlyfiles&&(e=e.filter(s=>s.metadata!==null)),i&&this.opErr(t,i.message),this.fnPost(t,e,85)}catch(r){this.opErr(t,r.message)}}],
 [720298149,async function n(t){let{user_id:i,access_token:s,sberror:r}=await this.sbctx();if(r)return this.opErr(t,`cant resolve sb ${r}`);let{error:e,result:o}=await this.ddexe(t.o,{},s);if(e)return this.opErr(t,`dd.exe ${e}`);this.fnPost(t,o,67)}],
 [4226587843,async function a(t){let n=this.fnGetDTarg(t),e=new Date;this.fnPost(t,e<n,49)}],
 [2795881389,async function t(n){}],
 [1999843865,async function s(t){try{await this.usePI("engageaccount");let e=await this.sbctx();if(!e.user_id)return{sberror:"engageaccount/sb not initialized"};let r=this.vmGv(t.V1);if(!r)return this.opErr(t,"e.newfile failed - no data");let o=t.ttl?t.ttl:"3600",{data:n,error:a}=await EPI.engageaccount.sb.storage.from("apps-pub").upload(`${e.user_id}/${t.t1}`,r,{cacheControl:o,upsert:!0});if(console.log({data:n,error:a}),a)return this.opErr(t,a.message);this.fnPost(t,!0,49)}catch(e){this.opErr(t,e.message),this.fnPost(t,!1,49)}}],
 [421228727,async function t({t1:n}){if(!this.vmChkGet(s.V1,208))return-1;s.html="",this.out(s)}
],
 [2713007523,async function h(t){let n=EE.de(t,1,5,32,6),d=EE.sizer(t.s,1,5,32,6),s=this.dinp(t);t=this.de(t,!1);let e="Confirm";t.t2&&(e=this.vmIv(t.t2));let i="Cancel";t.t3&&(i=this.vmIv(t.t3));let E=this.st.var[0]||"result";console.log({s:t,S:d,decode:n,dinp:s});let r=`
    <style>
    :root {
        --text-font: Arial;
        --confirm-background:#eeeeee;
    }
    .e${t.o} {
      font-family: var(--text-font,Arial);
      margin: 2px;
      padding: 2px 20px;
      border-radius: 5px;
      background-color: var(--confirm-background);
    }
  
    .e${t.o} button {
      
      margin: 2px;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
    }
  
    </style>
    `;EE.rec(t,r);let o={vn:this.st.var[0]||"result",value:!0,vto:49};t.fc&&(o.goto=t.fc);let a=`onclick='EE.E["${this.id}"].input(${JSON.stringify(o)})'`,l={vn:this.st.var[0]||"result",value:!1,vto:49},f=`onclick='EE.E["${this.id}"].input(${JSON.stringify(l)})'`;t.html=`<div class="${n.cl}" style="display:flex; justify-content:space-between; align-items:center;${n.sty}">
      <div> 
      ${t.t1}
      <button id="${t.id}-y" ${a}>${e}</button>
      <button id="${t.id}-n" ${f}>${i}</button>
      </div>
      </div>
      `,this.out(t);function c(){this.st.halt=!1,this.st.wait=!1,this.exe()}let u=document.getElementById(t.id+"-y"),v=document.getElementById(t.id+"-n");u.addEventListener("click",c.bind(this)),v.addEventListener("click",c.bind(this)),this.st.halt=!0,console.log("confirm forced halt!")}
],
 [3115071939,async function i(e){console.log("\u{1F6A8} keypress event...");let n=`${this.st.lastid}`,t=document.getElementById(`${n}-input`);if(!t)return this.terr("cannot find input element to bind event to!");let s=this.id;t.addEventListener("keypress",async()=>{this.st.keypress&&await this.playSnd("keypress"),EE.E[s].rbonce(e)})}
],
 [1949376991,async function s(t){console.log("if..."),this.st.CF.blktype=1,this.st.CF.IF.active=!0,this.st.CF.IF.branch=0,this.st.var=["_IFRES"],this.st.val=[]}
],
 [3953979528,async function t(n){}
],
 [1077027075,async function e(t){t.html="<div>to be implemented</div>",this.out(t)}],
 [805351138,async function s(o){let t=o.c===255?this.lastoperr:o.fc;console.log({s:o,op:t});let r=this.operrs.has(t);this.fnPost(o,r,49)}],
 [3306615072,async function t({t1:n}){return"<div></div>"}
],
 [567473935,async function c(e){console.log({s:e}),EE.pim.aLnk("shoelace","https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0/dist/themes/light.css"),await this.usePI("shoelace",{latest:!0});let a=`.e${e.o} {
      margin: 1px;
    }
    `;EE.rec(e,a);let s=EE.de(e,1,5,60,20),t;switch(e.c){case 1:t=this.vmIv(e.t1);break;case 2:t=e.n1;break;case 3:t=e.i1;break;case 4:t=this.vmGv(e.V1);break}if(!t)return this.opErr(e,"no tag text!");e.html=`
  <div class="badge-pulse">
  <sl-badge variant="primary" pill pulse>${t}</sl-badge>
  </div>
  `,this.out(e)}
],
 [3484907446,async function n(a){console.log({s:a}),EE.anim[a.an]=`animate__animated animate__${a.an}${a.dir}`}
],
 [2891343239,async function c(e){let s=`
  .flxc {display: flex;flex-direction: column}
  .flxr {display: flex;flex-direction: row}
  .jcs {justify-content: flex-start}
  .jcsb {justify-content: space-between}
  .aic {align-items: center}
  .fg1 {flex-grow: 1}
  .fw {flex-wrap: wrap}
  .scry {overflow-y: scroll}
  .w100 {width: 100%}
  .h100 {height: 100%}
    `;EE.rec(e,s);let t=document.getElementById(`i${this.id}`),i=document.getElementById(`i${this.id}_s0`);switch(i||(i=document.createElement("div"),i.style.backgroundColor="red",i.style.width="100%",i.style.height="100%",i.setAttribute("id",`i${this.id}_s0`)),e.c){case 1:i.innerHTML=`
      <div class="flxr jcsb aic w100" id="i${this.id}_s0_4254961657">header</div>
      <div class="fg1 flxr jcsb" id="i${this.id}_s0_1970145754_wrap">
        <div class="flxc jcs aic" id="i${this.id}_s0_4254961657">left</div>
        <div class="fg1 flxc scry" id="i${this.id}_s0_1970145754">main</div>
        <div class="flxc jcs aic" id="i${this.id}_s0_4254961657">right</div>
      </div>
      <div class="flxr jcsb aic w100" id="i${this.id}_s0_4254961657">footer</div>
      `,t.appendChild(i);break;default:break}}
],
 [1976792050,async function l(o){console.log("\u{1F7E2}\u{1F7E2}\u{1F7E2}\u{1F7E2}\u{1F7E2}\u{1F7E2}\u{1F7E2}\u{1F7E2}"),console.log({run:1,s:o}),this.st.CF.retvars=this.st.var;let n;if(o.V1){let s=this.vmGv(o.V1);if(!s){console.log("run {V1} resolve silent fail....");return}let t=EE.crc32(s);if(console.log("\u{1F7E2}\u{1F7E2}\u{1F7E2}\u{1F7E2}\u{1F7E2}\u{1F7E2}\u{1F7E2}\u{1F7E2}",s,t),!this.FM.dec.fl.has(t)){console.log(`soft fail did not find flow ${s} (${t})`);return}n=this.FM.gf(t)}else n=this.FM.gf(o.fc),n||this.terr(`2 run: flow ${o.fc} not found`);if(o.c===254){let s=`
    console.log("running js flow");
    console.log("foo");
    `,t=`
    EE.E[${this.id}].jsfn["${o.f}"] = async function(${o.a}) {
        ${s}     
        console.log("body = ${o.b}");
        EE.E.xpe.vmSet("js", 666);
    }
`,e=document.createElement("script");e.innerHTML=t,document.head.appendChild(e),console.log("here..."),await EE.E[this.id].jsfn[o.f]();return}this.st.K.push({...this.st.CF}),this.stOpSet(o.o,null,"runblock",!0),this.st.CF.fc=o.fc,this.st.CF.os=0,this.FM.os=0,this.FM.D=n,await this.exe(),console.log("\u{1F603} END O RUN!"),this.st.CF=this.st.K.pop(),console.log("1 END O RUN!"),console.log(this.st.CF),this.FM.D=this.FM.gf(this.st.CF.fc),console.log("1 END O RUN!"),this.FM.os=this.st.CF.os,console.log("restart:"),console.log(this.FM.os),console.log(this.FM.D.length),console.log(this.st.CF),console.log(this.st.K),await this.exe(),this.stOpSet(o.o,null,"runblock",!1)}
],
 [2892297498,async function c(t){switch(t.c){case 1:let s=this.fnGetArg(t,"t1",144);this.st.app.locale=s,this.fnPost(t,s,17);return;case 255:this.fnPost(t,this.st.app.locale,17);return}}],
 [4184795776,async function e(t,n){return n}],
 [2570240000,async function o(n){let c=this.fnPre(n).v}],
 [1901058540,async function e(t){let d=EE.de(t);t.html="<div></div>",this.out(t)}
],
 [95768481,async function t(e){e.c==1?delete this.VM[e.V1]:this.VM={}}],
 [3424300182,async function l(e){console.log("livehelp...tbi")}
],
 [1349003171,async function r(o){let e=`${o.local?"https://engagedev/ops/use.stripe/plugin/distribution":"https://xpec.run/use"}/use.${o.o}.js`;try{if(o.nowait){import(e).then(async l=>{EE.PI.set(o.o,l.default),EE.E[this.id].PII.color=new(EE.PI.get(o.o)),console.log(`use.${o.o} - loaded (nowait) from ${e}`)});return}let t=await import(e);EE.PI.set(o.o,t.default),EE.E[this.id].PII.color=new(EE.PI.get(o.o)),console.log(`use.${o.o} load from ${e}`)}catch(t){console.log(`use.${o.o} - failed to load from ${e}`),console.log(t),this.opErr(o,`use.${o.o} - failed to load: ${t.message}`);return}}
],
 [2628948230,async function e(t,n){return n}],
 [1431380804,async function t(n){}],
 [252944039,async function n(t){this.fnPost(t,!0,49)}],
 [1489252887,async function h(r){console.log({s:r}),this.fnPre(r);let a,e;switch(r.c){case 1:let n=r.n1,s=r.n2;if(s<=n)return this.opErr(r,"end must be greater than start");let c=s-n+1,f=[...Array(c).keys()].map(t=>t+n);this.fnPost(r,f,83);return;case 2:a=Array.from(Array(26)).map((t,o)=>o+97),e=a.map(t=>String.fromCharCode(t)),this.fnPost(r,e,82);return;case 3:a=Array.from(Array(26)).map((t,o)=>o+65),e=a.map(t=>String.fromCharCode(t)),this.fnPost(r,e,82);return}}],
 [1396797379,async function o(s){console.log(s);let t=JSON.parse(s.v);this.st.val=[[t,81]],this.vmAss()}],
 [2377211583,async function o(t){this.p("logout"),await this.HD.userLogout()}],
 [687345862,async function s(a){let t=new Date;var e=new Date(t.getTime());e.setDate(t.getDate()+(7+6-t.getDay())%7),this.fnPost(a,e,113)}],
 [224685378,async function t({t1:n}){return"<div></div>"}
],
 [1859316612,async function t(n){}],
 [1001605542,async function t(n){}],
 [1666103048,async function o(t){let n=this.fnPre(t),e=new Date(n.v).getDay()===0;this.fnPost(t,e,49)}],
 [1862609005,async function a(t){switch(t.c){case 1:return this.stOpSet(811395329,null,"justify","flex-start");case 2:return this.stOpSet(811395329,null,"justify","space-between");case 4:return this.stOpSet(811395329,null,t.c,t.I1);case 5:return this.stOpSet(811395329,null,t.c,t.u1);default:let c=t.t1?t.t1:t.c1?t.c1:t.n1;this.stOpSet(811395329,null,t.c,c)}}
],
 [1008442628,async function o(){console.log("@@@@@@@@@noop")}],
 [4109766574,async function l(t){try{if(!await this.eali())return this.opErr(t,"not logged in");let o=await this.sbctx(),n=this.fnPre(t).v.id;if(!n)return this.opErr(t,"missing appid");let i=`${o.user_id}/${n}`,r=this.vmGv(t.V1);if(!r)return this.opErr(t,"could not resolve content - empty");let s=t.ttl?t.ttl:"3600";console.log({path:i,content:r,cacheControl:s});let a=this.vmIv(t.t1);if(!a)return this.opErr(t,"could not resolve filename - empty");let{data:c,error:e}=await EPI.engageaccount.sb.storage.from("apps-prv").upload(`${i}/${a}`,r,{cacheControl:s,upsert:!0});if(console.log({data:c,error:e}),e)return this.opErr(t,e.message);this.fnPost(t,c,65)}catch(o){this.opErr(t,o.message),this.fnPost(t,{error:!0},65)}}],
 [3622588444,async function t({t1:n}){return"<div></div>"}
],
 [3608662479,async function e(t){t.html="<div>image palette here</div>",this.out(t)}
],
 [1902914537,async function s(t){if(console.log(":halt"),!this.st.halt){this.st.halt=!0,this.terr("halt!");return}console.log("RESUME!!!!!!"),this.st.halt=!1}
],
 [513114393,async function t(c){switch(c.c){case 1:this.st.cc[c.c1]=c.c2;return;case 2:this.st.cc[c.c1]=c.t1;return;default:return this.opErr(c,"invalid color code")}}
],
 [2928613343,async function a(e,t){return Object.values(e)}],
 [3972948793,async function t({t1:n}){return"<div></div>"}
],
 [2550399111,async function r(t){if(this.lastoperr===0)return;let e=this.operrs.get(this.lastoperr);switch(t.c){case 1:t.html=`<div class="e${t.o}">Err ${this.lastoperr} : ${e.code} - ${e.text}</div>`,this.out(t);break;case 2:t.html=`<div class="e${t.o}">HALT: Err ${this.lastoperr} : ${e.code} - ${e.text}</div>`,this.out(t),this.st.halt=!0;break;case 3:break}}
],
 [704834423,async function r(e){console.log({s:e});let t=this.vmIv(e.R1);if(!t)return this.terr("could not resolve topic name");let c=`https://ntfy.sh/xpe${t}`,o=`https://ntfy.sh/xpe${t}/sse`;switch(this.eventSource=new EventSource(o),e.c){case 1:this.eventSource.onopen=()=>{console.log(`EventSource connected to ${o}`)},this.eventSource.onerror=n=>{console.log(`EventSource error: Failed to connect to ${o}`)},this.eventSource.onmessage=n=>{e.html=`<div>${n.data}</div>`,this.out(e)};break;case 2:let s=this.vmIv(e.t1);fetch(c,{method:"POST",body:s});break}}
],
 [2497314861,async function o(e){let i=EE.de(e,1,9,200,50);await this.usePI("imageload",{latest:!0}),console.log({s:e,d:i});let d=`
    .e${e.o}img {
        width: var(--image-basesize,200px);  
    }

    .e${e.o}.add {
      font-family:Arial;
      width: 60%;
      padding: 10px;
      border: 1px solid black;
      background-color: #eeeeee;
      text-align: center;
      border-radius: 5px;
      margin:1px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .imagetag {
      font-size: 20px;
      flex-grow: 1;
      text-align: left;
    }
    .imageaction {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      padding:10px;
      border-radius: 5px;
    }
    .imageaction div {
      padding: 10px;
    }
    .imageaction button {
      padding: 10px;
      font-size: 20px;
      border: none;
      border-radius: 5px;
    }

    .imagepaste {
     padding: 20px;
     border: 1px dashed black;
     border-radius: 5px;
    }
    `;EE.rec(e,d);let a;switch(e.c){case 1:case 2:a=e.u1?this.vmIv(e.u1):this.rit(e.I1);break;case 3:let r=this.vmGv(e.V1);if(!r)return this.opError(e,"image variable not found");if(!r.bin)return this.opError(e,"image variable has no image dataurl");a=r.bin}if(!a)return this.opErr(e,"image not found");let t="";e.square&&(t=`height:${i.sz};`),e.circle&&(t=`height:${i.sz};border-radius:9999px;`),e.heart&&(t=`height:${i.sz};border-radius:9999px;`),e.html=`<div id="${e.id}" style="${i.sty}">
  <img class="lazyload" style="${i.sty};${t}" width="${i.sz}" data-src="${a}" alt="${e.id}img" />
  </div>`,this.out(e)}
],
 [3979771542,async function a(e){this.lastoperr=0;try{}catch(t){this.opErr(e,`e.accountdelete failed - ${t.message}`)}}
],
 [3476770884,async function r(e){try{EE.E[e.n1]=new EngageCore({id:e.n1}),console.log(`created evm ${e.n1}`)}catch(n){this.opErr(e,`failed to create evm ${e.n1}: ${n.message}`)}}
],
 [4195941728,async function t(n){}],
 [2186531022,async function c(t){let n=this.vmIv(t.v);console.log({s:t,expr:n}),t.html=`<script>EE.jsfn[${t.id}] = async function() { ${n} }<\/script>`,this.out(t)}
],
 [4254961657,async function o(t){console.log({s:t}),this.st.SEC=2,await this.rbonce(t),this.st.SEC=1}
],
 [267405990,async function s(t){this.st.wait=!0}
],
 [2001526226,async function s(t){this.st.waitfor=!0}],
 [3176132487,async function t(n){this.fnPre(n),await this.usePI("engageaccount");let e=await this.sbctx(),s=new Map([[1,"free"],[2,"personal"],[3,"pro"],[4,"business"],[5,"agency"],[6,"enterprise"]]);this.fnPost(n,s.get(e.plan)||"unknown",17)}],
 [3914224782,async function n(t){try{if(this.fnPre(t),!this.st.app.key)return this.opErr(t,"app key not set");let a=await(await fetch(`https://rsmnbknzmnakgqjbglqd.supabase.co/storage/v1/object/public/apps-pub//35/${t.V1}.json`)).json();this.VM[t.V1]=a,this.fnPost(t,a,65)}catch(s){this.opErr(t,s.message)}}
],
 [2278073282,async function c(t){this.lmsg(t.c,this.vmIv(t.t1))}
],
 [3483483002,async function o(t){let n=this.fnPre(t),f=this.fnGetNarg(t);this.fnPost(t,n.v-f,n.t)}],
 [2792388580,async function i(t){if(!("geolocation"in navigator))return this.opErr(t,"geolocation not available");function a(o={}){return new Promise((n,e)=>navigator.geolocation.getCurrentPosition(n,e,o))}try{let o=await a();console.log({result:o});let n=o?.coords?.latitude,e=o?.coords?.longitude,c=o?.coords?.accuracy;this.fnPost(t,{latitude:n,longitude:e,accuracy:c},74)}catch(o){console.error(o.message),this.opErr(t,`failed to get location: ${o.message}`)}}],
 [3603162772,async function n(e){console.log({s:e}),this.lastoperr=0;try{if(!this.sb?.userid){this.opErr(e,"e.numapps failed - not logged in");return}let t=`${this.sb.userid}`;e.n1&&(t+=`/${e.n1}`);let a="apps-pub",{data:s,error:r}=await EE.EA.sb.storage.from(a).list(t,{limit:100,offset:0,sortBy:{column:"name",order:"asc"}});if(console.log({data:s,error:r}),r){this.opErr(e,`e.numapps failed - ${r.message}`);return}let o=s.filter(i=>!i.metadata);this.fnPost(e,o.length,33)}catch(t){this.opErr(e,`e.newapp failed - ${t.message}`)}}],
 [3727477604,async function c(e){switch(console.log({s:e}),e.c){case 1:this.redirect=e.fc;return;case 2:this.redirect=e.fc;break;case 255:this.redirect=this.redirect||2677007441}if(!!!this.st.app?.user?.key)return this.goto(e.fc);if(!(e.kw===this.st.app?.user?.role))return this.goto(this.redirect)}
],
 [3115561559,async function e(t,n){return n}],
 [4012890427,async function m(t){this.fnPre(t);let n=JSON.stringify(this.VM).length,e=JSON.stringify(this.st).length,s=this.FM.bin.length,i=document.documentElement.innerHTML.length;this.fnPost(t,e+n+s+i,33)}],
 [2452515149,async function c(e){try{EE.pim.aLnk("imagedit","https://xpec.run/plugins/imageedit.css"),await this.usePI("imageedit",{latest:!0});let i=this.vmGv(e.V1);if(!i){this.opErr(e,"failed: no imageblob");return}console.log({imageblob:i});let t=EE.de(e),o=`
    .e${e.o} {
        height: 600px;
        background-color: red;
    }
    `;EE.rec(e,o),e.html=`<div class="${t.cl}" id="${e.id}-imgedit"></div>`,this.out(e);let a=EPI.imageedit.appendDefaultEditor(`#${e.id}-imgedit`,{src:i,imageCropAspectRatio:1});console.log({pintura:a})}catch(i){this.opErr(e,i.message),console.error(i)}}
],
 [3698339294,async function s(t){this.fnPre(t);let u=EE.de(t),b=`
 .e${t.o} { 
    background-color: red;
 }
 `;EE.rec(t,b);let c=t.min?t.min:1,d=t.max?t.max:1e9;t.html=`<div id="${t.id}" class="${u.cl}" style="${u.sty}"></div>`,this.out(t);let e=document.createElement("input");e.setAttribute("id",`${t.id}input`),e.value=1,e.type="number",e.name="quantity",e.pattern="[0-9]+";function a(i){return button=document.createElement("button"),button.type="button",button.innerHTML=i,button.title=i,button}function l(i){let n=Number(e.value);isNaN(n)&&(n=1),n+=i,n>d&&(n=d),n<c&&(n=c),n=Math.max(n,1),e.value=n,this.fnPost(t,n,33)}let r=new a("-"),m=new a("+");r.addEventListener("click",()=>l.bind(this)(-1)),m.addEventListener("click",()=>l.bind(this)(1));let o=document.getElementById(t.id);o.appendChild(r),o.appendChild(e),o.appendChild(m),this.fnPost(t,64,33)}
],
 [2450199964,async function t(n){}],
 [1079272472,async function t(n){}
],
 [1684616659,async function e(t){console.log({setimage:1,s:t});let o=this.vmIv(t.u1);if(!o)return this.opErr(`cannot resolve ${t.u1} to a valid URL`);this.st.img[t.I1]=o}
],
 [452300716,async function a(t){try{if(!await this.eali())return this.opErr(t,"not logged in");let r=await this.sbctx(),o=this.fnPre(t).v.id;if(!o)return this.opErr(t,"missing appid");let s=`${r.user_id}/${o}`,{data:e,error:i}=await EPI.engageaccount.sb.storage.from("apps-pub").remove([`${s}/${t.t1}`]);if(console.log({data:e,error:i}),i)return this.opErr(t,i.message);this.fnPost(t,e,65)}catch(r){this.opErr(t,r.message),this.fnPost(t,{error:!0},65)}}],
 [3698708038,async function t(n){}],
 [3189799225,async function o(t){this.lastoperr=0;try{if(!this.sb?.userid)return this.opErr(t,"e.newfile failed - not logged in");let r=this.fnGetArg(t,"t1",144),i=`${this.sb.userid}/${r}`,{data:s,error:e}=await EE.EA.sb.storage.from("apps-prv").createSignedUrl(i,60);if(console.log({data:s,error:e}),e)return this.opErr(t,e.message);this.fnPost(t,s?.signedUrl,17);return}catch(r){this.opErr(t,r.message)}}],
 [535907256,async function r(t){this.fnPre(t),await this.usePI("engageaccount");let a=this.fnGetArg(t,"t1",144);if(!a)return this.opErr(t,"missing email");let{data:o,error:e}=await EPI.engageaccount.sb.auth.resetPasswordForEmail(a,{redirectTo:"https://account.engage.tools"});if(console.log({data:o,error:e}),e)return this.fnPost(t,!1,49),this.opErr(t,e.message);this.fnPost(t,!0,49)}],
 [458074396,async function t({t1:n}){return"<div></div>"}
],
 [4073804588,async function e(t){this.reset()}],
 [1638663613,async function n(t){console.log({s:t});let r=this.vmGv(t.V1);if(!r)return this.terr(`No value found for ${t.V1}`);switch(t.c){case 1:return typeof r!="string"?this.terr(`${t.V1} does not contain text`):void 0;case 2:return typeof r!="number"?this.terr(`${t.V1} does not contain a number`):void 0;case 3:return;case 4:return;case 5:return Array.isArray(r)?void 0:this.terr(`${t.V1} does not contain a group`);case 6:return typeof r!="object"?this.terr(`${t.V1} does not contain an item`):void 0;case 7:return new RegExp(t.t1).test(r)?void 0:this.terr(`${t.V1} does not match regexp ${t.t1}`)}}
],
 [2107343167,async function t(n){}
],
 [2789043736,async function n(o){console.log(o)}],
 [3634749967,async function i(t){let e;switch(t.c){case 1:e=this.vmIv(t.t1);break;case 2:e=this.vmGv(t.V1);break;case 3:e=this.vmGv(t.R1).email}if(console.log("here...."),!e)return this.terr("could not resolve email!");console.log("here...."),this.stOpSet(2149574313,"email","to",e)}
],
 [3221593933,async function o(t){let n=this.fnPre(t);this.fnPost(t,n.v.toString(),17)}],
 [198973613,async function t(n){}],
 [2324448549,async function e(t){let r=this.fnPre(t),n=this.fnGetNarg(t);if(!n)throw"non numeric arg!";this.fnPost(t,r.v>n,49)}],
 [798263034,async function g(t){switch(console.log({COLUMN:1,s:t}),t.c){case 255:this.st.col=t;return;case 2:this.st.colgo=t.fc,this.st.colgoargs=t.a;return}let e=this.st?.col?.m||5,s=this.st?.col?.p||5,l=this.st?.col?.br||10,o=this.st?.colgo,i="";if(o){let a={goto:o};i=`onclick='EE.E["${this.id}"].input(${JSON.stringify(a)})'`}let n="center",r=`
    .e${t.o} {
      display: flex;
      flex-direction: column;
      justify-content:center;
      align-items:center;
      width:100%;
    }
    .e${t.o} > div {
      margin: 2px;
    }
    `;EE.rec(r);let c="";t.c1&&(c+=`background-color:${t.c1};`),c+="background-color:red;",c+=`border-radius:${l}px;`,c+=`margin:${e}px;`,c+=`padding:${s}px;`,console.log({s:t,extrastyle:c}),t.html=`<div id="${t.id}col" class="e${t.o}" ${i} style="display:flex;flex-direction:column;justify-content:${n};${c}"></div>`,this.out(t);let d=this.st.targetsec;this.st.targetsec=t.id,this.st.colid=`${t.id}col`,console.log(`\u2705 COL ID is ${t.id}col`),await this.rbonce(t),this.st.targetsec=d,this.st.colid=null}
],
 [2292812169,async function n(e){if(console.log({s:e}),!this.st.SCR)return this.terr("No active screen in state!");let s=document.getElementById(`${this.id}_${this.st.SCR}`);if(!s)return this.terr("No screen rootdiv found!");s.style.flexDirection="row",this.st.sectgt=`${this.id}_${this.st.SCR}_${e.fc}`;let t=document.createElement("div");t.setAttribute("id",this.st.sectgt),t.style.display="flex",t.style.flexGrow=1,t.style.flexDirection="column",t.style.width="100%",t.innerHTML=`<div>column ${e.fc}</div>`,s.appendChild(t);let i=this.vlo.get(this.st.SCR)}
],
 [3515136101,async function s(a){let t=new Date;var e=new Date(t.getTime());e.setDate(t.getDate()+(7+4-t.getDay())%7),this.fnPost(a,e,113)}],
 [2276269998,async function d(o){let t=EE.de(o,1,5,1,.2);o.t1=this.vmIv(o.t1);let a=`
  <style>
  :root {
    --badge-font: Arial;
    --badge-color: white;
    --badge-background: #bbbbbb;
  }
  .e${o.o} {
    color: var(--badge-color);
    background-color: var(--badge-background);
    margin: 1px;
    border-radius:5px;
    padding: 2px 10px;
    font-family: var(--badge-font);
  }
  </style>
  `;o.html=`${a}<div class="${t.cl}" style="${t.sty}${t.fs}">${o.t1}</div>`,this.out(o)}
],
 [2371429737,async function l(t){let e=EE.de(t,1,5,.8,.1);t.t1=this.vmIv(t.t1);let o=`
    <style>
    :root {
        --text-font: Arial;
    }
    .e${t.o} {
      font-family: var(--text-font,Arial);
      margin: 2px;
      padding: 2px 20px;
    }
    </style>
    `;t.html=`${o}<div class="${e.cl}" style="${e.sty}${e.fs}">Copyright &copy; ${new Date().getFullYear()} ${t.t1}</div>`,this.out(t)}
],
 [3081504873,async function t({t1:n}){return"<div></div>"}
],
 [1893162110,async function o(t){let n=this.dtNow();this.fnPost(t,n,113)}],
 [775512390,async function o(t){console.log(t);let i=this.fnPre(t);if(!i)throw"invar missing/not text";if(t.t1)this.fnPost(t,i.v.startsWith(t.t1),49);else{if(!this.isT(t.v1))throw`argument variable ${t.v1} is not text!`;this.fnPost(t,i.v.startsWith(this.VM[t.v1].v),49)}}],
 [3086800257,async function d(e){EE.pim.aIcons();let r=EE.de(e,1,7,1,.2),n=EE.sizer(e.s,1,15,30,10),i=this.vmGv(e.V1);if(!i)return this.opErr(e,"could not resolve value");if(!Array.isArray(i))return this.opErr(e,"value is not a group (array) value");e.offset&&(i=i.slice(e.offset)),e.limit&&(i=i.slice(0,e.limit));let l=i;if(typeof i[0]=="object"){let o=e.show?e.show:"text";l=i.map(a=>a[o])}console.log({s:e,value:i});let t=`<div class="${r.cl}" style="">`;l.forEach(o=>{t+=`<div style="${r.sty}">`,e.i1&&(t+=`<iconify-icon icon="${this.rict(e.i1)}" width="${n}"></iconify-icon>`),t+=`<div>${o}</div></div>`}),t+="</div>";let c=`
  .e${e.o} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding:20px;
    border-radius:5px;
  }
  .e${e.o} > div {
    width:200px;
    margin: 2px;
    background-color: #eeeeee;
  }
  .e${e.o} div {
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  `;EE.rec(e,c),e.html=t,this.out(e)}
],
 [2460826309,async function f(o){EE.pim.aIcons();let t=EE.de(o),E=this.stOpGet(2786201083,"set")||"mdi",c=this.stOpGet(2786201083,"size")||30,l=this.stOpGet(2786201083,"color")||"black";console.log({baseSize:c,baseColor:l});let n=`
    .e${o.o}  {
      padding:3px;
    }
  `;EE.rec(o,n);let e="";o.flip&&(e=o.horizontal?"flip='horizontal'":"flip='vertical'");let i=o.V1?this.vmGv(o.V1):o.i1;if(i=this.rict(i),!i)return this.opErr(o,"icon variable could not resolve");console.log({icon:1,s:o,I:i});let r=o.fc?`onclick='EE.E["${this.id}"].goto(${o.fc})'`:"",a=EE.sizer(o.s,1,15,c,10),s=o.c1?o.c1:l,d=o.bc?`background-color: ${o.bc};`:"";o.html=`<div id="${o.id}" class="${t.cl}" style="${d};${t.sty}" ${r}><iconify-icon icon="${i}" ${e} width="${a}" style="color:${s}"></iconify-icon></div>`,this.out(o)}
],
 [1978693154,async function l(e){function t(n){console.log(n)}function i(n){console.log("clear..."),document.getElementById("PINbox").value=""}function c(){console.log("submit...");let n=document.getElementById("PINbox").value;n==""?alert("Enter a PIN"):(alert("Your PIN has been sent! - "+n),data={pin:n},document.getElementById("PINbox").value="")}console.log({s:e});let o=EE.de(e,2,4,280,10),d=e.c1||"#7e7e7e",a=e.ac||"#ededed",u=`
  <style>
  #PINform input:focus,
#PINform select:focus,
#PINform textarea:focus,
#PINform button:focus {
outline: none;
}
#PINform {
background: transparent;
width: ${o.sz}px; 
left: 50%;
top: 50%;
border-radius:10px;
padding: 30px;
  -webkit-box-shadow: 0px 5px 5px -0px rgba(0,0,0,0.3);
     -moz-box-shadow: 0px 5px 5px -0px rgba(0,0,0,0.3);
          box-shadow: 0px 5px 5px -0px rgba(0,0,0,0.3);
}
#PINbox {
color: ${d};
background:  ${a};
margin: 3.5%;
width: 92%;
font-size: 3em;
font-weight:200;
text-align: center;
border: 1px solid #d5d5d5;
border-radius:5px;
}
.PINbutton {
background: ${a};
color: ${d};
border: none;
/*background: linear-gradient(to bottom, #fafafa, #eaeaea);
  -webkit-box-shadow: 0px 2px 2px -0px rgba(0,0,0,0.3);
     -moz-box-shadow: 0px 2px 2px -0px rgba(0,0,0,0.3);
          box-shadow: 0px 2px 2px -0px rgba(0,0,0,0.3);*/
border-radius: 50%;
font-size: 1.5em;
text-align: center;
width: 50px;
height: 50px;
margin: 7px 5px;
padding: 0;
}
.clear, .enter {
font-size: 1em;
}
.PINbutton:hover {
 box-shadow: #506CE8 0 0 1px 1px;
}
.PINbutton:active {
 background: #506CE8;
color: #fff;
}
.clear:hover {
 box-shadow: #ff3c41 0 0 1px 1px;
}
.clear:active {
 background: #ff3c41;
color: #fff;
}
.enter:hover {
 box-shadow: #47cf73 0 0 1px 1px;
}
.enter:active {
 background: #47cf73;
color: #fff;
}
.shadow{
  -webkit-box-shadow: 0px 5px 5px -0px rgba(0,0,0,0.3);
     -moz-box-shadow: 0px 5px 5px -0px rgba(0,0,0,0.3);
          box-shadow: 0px 5px 5px -0px rgba(0,0,0,0.3);
}
</style>`;e.html=`${u}<div id="${e.id}" class="${o.cl}>
<div id="PINform" style="${o.sty}">
<input id="PINbox" contenteditable type="password" type="number" value="0" name="PINbox"  />
<br/>
<div type="button" class="PINbutton" name="1" value="1" id="${e.id}_1">1</div>
<input type="button" class="PINbutton" name="2" value="2" id="${e.id}_2" />
<input type="button" class="PINbutton" name="3" value="3" id="${e.id}_3" />
<br>
<input type="button" class="PINbutton" name="4" value="4" id="${e.id}_4" />
<input type="button" class="PINbutton" name="5" value="5" id="${e.id}_5" />
<input type="button" class="PINbutton" name="6" value="6" id="${e.id}_6" />
<br>
<input type="button" class="PINbutton" name="7" value="7" id="${e.id}_7" />
<input type="button" class="PINbutton" name="8" value="8" id="${e.id}_8" />
<input type="button" class="PINbutton" name="9" value="9" id="${e.id}_9" />
<br>
<input type="button" class="PINbutton clear" name="-" value="clear" id="${e.id}_clear" />
<input type="button" class="PINbutton" name="0" value="0" id="${e.id}_0"  />
<input type="button" class="PINbutton enter" name="+" value="enter" id="${e.id}_submit" />
</div>
</div>`,this.out(e),document.getElementById(`${e.id}_1`).addEventListener("click",t(1)),document.getElementById(`${e.id}_2`).addEventListener("click",()=>EE.E.xpe.terr("yoyoyo")),document.getElementById(`${e.id}_3`).addEventListener("click",()=>t(3)),document.getElementById(`${e.id}_4`).addEventListener("click",()=>t(4)),document.getElementById(`${e.id}_5`).addEventListener("click",()=>t(5)),document.getElementById(`${e.id}_6`).addEventListener("click",()=>t(6)),document.getElementById(`${e.id}_7`).addEventListener("click",()=>t(7)),document.getElementById(`${e.id}_8`).addEventListener("click",()=>t(8)),document.getElementById(`${e.id}_9`).addEventListener("click",()=>t(9)),document.getElementById(`${e.id}_0`).addEventListener("click",()=>t(0)),document.getElementById(`${e.id}_clear`).addEventListener("click",()=>i()),document.getElementById(`${e.id}_submit`).addEventListener("click",()=>c())}
],
 [531785621,async function l(t){let r=`<style>
      .e${t.o} {
        width:100%;
        color: var(--text-color,#64748b);
        font-family: Courier New;
        text-align: left;
        padding: 20px;
        border-radius: 8px;
        color: var(--text-color,#64748b);
        background-color: var(--pre-background,#f1f5f9);
      }
      </style>`,o=EE.de(t,1,9,1.1,.2),e=this.fnGetTarg(t);e=e.trim(),EE.elFo(t),t.html=`${r}<pre class="${o.cl}" style="${o.sty}${o.fs}">${e}</pre>`,this.out(t)}
],
 [4213799452,async function t(n){}],
 [2832531868,async function t(n){}],
 [3082560209,async function t(n){}],
 [3446399168,async function s(e){switch(console.log({s:e}),e.c){case 1:this.st.app.engageversion="latest";return;case 2:this.st.app.engageversion="beta";return;case 3:this.st.app.engageversion="dev";return;case 4:let t=this.vmIv(e.t1);if(!t)return this.opError(e,`version not cannot be resolved from ${e.t1}`);this.st.app.engageversion=t;return;case 255:let n=`${this.st.app.engageversion||""}(${this.version})`;this.fnPost(e,n,17);return;default:return this.opErr(e,"invalid command")}}],
 [1540242707,async function a(t){try{this.log(`---- patch ${t.fc}`);let{default:c}=await import(`https://xpec.run/patch/p${t.fc}.js`);console.log(c)}catch(c){this.opErr(t,`:patch ${eop} failed: ${c.message}`)}}
],
 [2694451847,async function i(n){console.log("\u{1F6A8} change event...");let e=`${this.st.lastid}`,t=document.getElementById(`${e}-input`);if(!t)return this.terr("cannot find element to bind event to!");let s=this.id;t.addEventListener("change",async()=>{this.st.keysound&&await this.playSnd("keysound"),EE.E[s].rbonce(n)})}
],
 [1634939629,async function r(e){this.lastoperr=0,console.log({HERE:1,s:e}),this.fnPre(e);try{if(!await this.eali())return this.opErr(e,"not logged in");let t;switch(e.c){case 1:case 2:let a=this.fnGetArg(e,"t1",144);if(!a)return this.opErr(e,"missing domain");console.log(`listing 2 apps for domain ${a}`),t=await EPI.engageaccount.sb.from("apps").select("id,name,version,domain,path").order("name",{ascending:!0}).eq("domain",a);break;case 255:t=await EPI.engageaccount.sb.from("apps").select("id,name,version,domain,path").order("name",{ascending:!0});break;default:return this.opErr(e,`invalid command ${e.c}`)}let{data:o,error:i}=t;if(console.log({apps:1,data:o}),i){this.fnPost(e,[],85),this.opErr(e,i.message);return}this.fnPost(e,o,85)}catch(n){this.opErr(e,`failed: ${n.message}`),this.fnPost(e,[],85)}}],
 [2607340949,async function t({t1:n}){return"<div></div>"}
],
 [2945774872,async function c(t){let e=document.getElementById("repl");switch(t.c){case 1:e.style.display="block";break;case 2:e.style.display="none";break}}],
 [275616040,async function t(n){}
],
 [2674219848,async function o(t){let n=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16));this.fnPost(t,n,28)}],
 [3499662640,async function n(t){this.fnPost(t,!0,49)}],
 [2979166422,async function o(i){console.log({s:i});let e=EE.de(i),t;switch(i.c){case 1:t="image url";break;case 2:t="image url";break;case 3:t=this.vmGv(i.V1);break}let l=`<style>
  .lightbox {
    opacity: 0;
    visibility: hidden;
    position: fixed;
    left:0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.15s ease-in;
} 

.lightbox.show {
    background-color: rgba(0,0,0, 0.85);
    opacity: 1;
    visibility: visible;
    z-index: 1000;
}
  </style>
  `;i.html=`${l}<div class="${e.cl} image-wrapper">lightbox</div>`,this.out(i)}
],
 [3833380043,async function t(s){console.log("break"),this.st.resume?(this.st.resume=!1,this.st.halt=!1):(this.st.halt=!0,this.opErr(s,"break operation"))}
],
 [314508072,async function t(n){}],
 [2843998078,async function o(n){if(console.log({s:n}),!("SpeechRecognition"in window||"webkitSpeechRecognition"in window))return this.opErr(n,"SpeechRecognition not supported")}
],
 [4255937325,async function t(s){console.log(s),this.st.val=[[s.v,115]],this.vmAss()}],
 [1954751211,async function l(o){console.log("FLCC BUILD"),console.log({s:o});let t=await EE?.EA?.sb?.auth?.getSession();if(!t)return this.opErr(o,"not logged in/could not get session");let{data:s,error:e}=t;if(e||!s)return this.opErr(o,"not logged in/could not get session");let c=s?.session?.user_id,r=s?.session?.access_token;console.log({userid:c,access_token:r});let n=this.fnGetTarg(o);if(console.log({source:n}),!n)return this.opErr("source not found!");let i=await FLCC.parse(n);console.log({R:i}),console.log(EE.flcc),this.fnPost(o,FLCC.flcbin,99)}],
 [1353343119,async function c(e){let o=`xpe/${this.id}/appidhere/${e.kw}`,t=localStorage.removeItem(o);console.log(t)}
],
 [3943079650,async function t(n){}
],
 [3715154125,async function t(n){}
],
 [1146435372,async function m(t){try{let{access_token:r,sberror:a}=await this.sbctx();if(a)return this.opErr(t,`cant resolve sb ${a}`);let n=this.fnPre(t).v;if(!n)return this.opErr(t,"can't find app");let e={name:this.fnGetArg(t,"t1",144),role:t.kw};async function i(h){let u=new TextEncoder().encode(h),p=await crypto.subtle.digest("SHA-256",u);return Array.from(new Uint8Array(p)).map(f=>f.toString(16).padStart(2,"0")).join("")}let c=t.n1?t.n1:t.t2?t.t2:this.vmGv(t.V2);if(e.hashpw=await i(c),t.publish&&(e.publish=!0),t.manage&&(e.manage=!0),t.update&&(e.update=!0),t.guide&&(e.guide=!0),t.access&&(e.access=!0),!e.name||!e.hashpw){this.opError(t,"username and passcode required",144);return}let{error:s,result:o}=await this.ddexe(t.o,{app:n,user:e},r);if(s)return this.opErr(t,`dd.exe ${s}`);console.log({result:o}),this.fnPost(t,o,65)}catch(r){this.opErr(t,r.message),this.fnPost(t,result,65)}}],
 [1586452385,async function t(n){}],
 [3262201967,async function t(n,e){return n.includes(e[0])}],
 [4062649834,async function a(e){let t=document.body,r;if(e.I1?r=r=this.rit(e.I1):e.u1&&(r=e.u1),r){e.u1&&(r=this.vmIv(e.u1)),t.style.backgroundSize="cover",t.style.backgroundPosition="center",t.style.backgroundRepeat="no-repeat",t.style.backgroundImage=`url(${r})`;return}let o;if(e.radial)o="radial-gradient(";else{let c="to bottom";e.horizontal?c="to right":e.diagonal&&(c="to bottom right"),o=`linear-gradient(${c},`}if(e.c4){t.style.backgroundColor="transparent",t.style.backgroundImage=`${o}${e.c1}, ${e.c2},${e.c3},${e.c4},${e.c5})`;return}if(e.c4){t.style.backgroundColor="transparent",t.style.backgroundImage=`${o}${e.c1}, ${e.c2},${e.c3},${e.c4})`;return}if(e.c3){t.style.backgroundColor="transparent",t.style.backgroundImage=`${o}${e.c1}, ${e.c2},${e.c3})`;return}if(e.c2){t.style.backgroundColor="transparent",t.style.backgroundImage=`${o}${e.c1}, ${e.c2})`;return}EE.setcss("screen-color",e.c1),t.style.background="",t.style.backgroundColor=e.c1}
],
 [2624157110,async function n(e){let t,r;switch(e.c){case 1:t=e.n1,r=1;break;case 2:t=this.vmGv(e.V1),r=1;break;case 3:t=e.n1,r=e.n2;break;case 4:t=this.vmGv(e.V1),r=e.n1;break}if(!this.sb.token)return this.terr(":logged in user not found!");let{data:a,error:i}=await EE.EA.sb.from("apps").select("id,source").eq("id",t).limit(1).single();if(console.log({data:a,error:i}),i){this.opErr(e,`loadapp failed - ${i.message}`);return}if(!a)return this.terr(`app ${t} not found!`);EE.SRC[r]=a.source}
],
 [2685278498,async function s(t){this.st.dt||(this.st.dt={}),this.st.dt.da=t.da1}],
 [3809037127,async function c(t){let e=this.fnPre(t);await this.usePI("csvtools",{latest:!0});let s=e?.v;if(!s)return this.opErr(t,"no csv");let n=!!t.header,{Papa:a}=window.EPI.csvtools,{data:o}=a.parse(s,{skipEmptyLines:!0,header:n});console.log({data:o}),this.fnPost(t,o,85)}],
 [3559861760,async function d(e){EE.pim.aIcons();let t=EE.de(e,1,5,32,6),r=EE.sizer(e.s,1,5,80,20);if(e.hide){let n=this.stOpGet(e.o,"id");if(n){let o=document.getElementById(n);o&&(o.style.display="none")}return}this.stOpSet(e.o,null,"id",e.id);let i="ei:spinner-2";e.i1?i=e.i1:e.gear?i="ph:gear-duotone":e.star?i="ei:spinner":e.dots?i="ei:spinner-2":e.segment?i="gg:spinner":e.refresh&&(i="ic:round-refresh");let s=`
  <style>
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
  
  #${e.id} {
    animation: rotation 4s infinite linear;
  }
  </style>
  `;e.html=`${s}<div id="${e.id}" class="${t.cl}" style="${t.sty}"><iconify-icon width="${r}" icon="${i}"></iconify-icon></div>`,this.out(e)}
],
 [2817129950,async function t(n){}],
 [3379848864,async function u(t){let i;switch(t.c){case 1:i=await fetch("https://api.iconify.design/collections");let c=await i.json(),a=Object.keys(c);this.fnPost(t,a,82);return;case 2:case 3:let o=this.fnGetArg(t,"t1",144);i=await fetch(`https://api.iconify.design/collection?prefix=${o}`);let r=await i.json();this.fnPost(t,r,82);return;case 4:let e=this.vmGv(t.V1);if(!e)return this.opErr(t,"no search term provided");i=await fetch(`https://api.iconify.design/search?query=${e}`);let s=(await i.json()).icons;t.limit&&(s=s.slice(0,t.limit));let f=s.map(n=>{let[h,l]=n.split(":");return{tag:`${l}.${h}`,name:n}});this.fnPost(t,f,85)}}],
 [3775813271,async function s(t){this.fnPre(t),await this.usePI("fonts",{latest:!0}),this.fnPost(t,EPI.fonts,82)}],
 [104556071,async function r(t){let s=this.fnPre(t).v.trim(),n=s.startsWith("http://")||s.startsWith("https://");this.fnPost(t,n,49)}],
 [1674646382,async function a(t){let n=this.fnPre(t);await this.usePI("hjson",{latest:!0});let s=EPI.hjson.parse(n.v),o=Array.isArray(s)?85:65;this.fnPost(t,s,o)}],
 [1186969217,async function a(t){EE.pim.aIcons(),t.t1=this.vmIv(t.t1);let o=EE.de(t,1,20,40,10),i=EE.sizer(t.s,1,9,5,2),e=EE.sizer(t.s,1,5,20,2);console.log({here:1,s:t,d:o});let n=t.t2?`<div>${this.vmIv(t.t2)}</div>`:"",c=`.e${t.o} { display:flex;justify-content:center;align-items:center;color:var(--text-color);font-family:var(--text-font,Arial);border-radius:5px;}
            .a${t.o} {
              text-decoration:none;
            }
            `;EE.rec(t,c),t.html=`<a class="a${t.o}" href="https://www.youtube.com/channel/${t.t1}"><div class="${o.cl}" style="${o.sty};font-size:${e}px;padding:2px ${i}px;"><div><iconify-icon width="${o.sz}" icon="mdi:youtube"></iconify-icon></div>
            ${n}</div></a>`,this.out(t)}
],
 [3907679311,async function t(s){this.st.prod=!1}],
 [3662851344,async function t(n){}
],
 [839845200,async function o(t){let n=this.fnPre(t),e=new Date(n.v);this.fnPost(t,e.getHours(),33)}],
 [299574289,async function r(o){let e=EE.de(o),t=`
  /* From uiverse.io by @satyamchaudharydev */
/* removing default style of button */

.form button {
  border: none;
  background: none;
  color: #8b8ba7;
}
/* styling of whole input container */
.form {
  --timing: 0.3s;
  --width-of-input: 200px;
  --height-of-input: 40px;
  --border-height: 2px;
  --input-bg: #fff;
  --border-color: #2f2ee9;
  --border-radius: 30px;
  --after-border-radius: 1px;
  position: relative;
  width: var(--width-of-input);
  height: var(--height-of-input);
  display: flex;
  align-items: center;
  padding-inline: 0.8em;
  border-radius: var(--border-radius);
  transition: border-radius 0.5s ease;
  background: var(--input-bg,#fff);
}
/* styling of Input */
.input {
  font-size: 0.9rem;
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding-inline: 0.5em;
  padding-block: 0.7em;
  border: none;
}
/* styling of animated border */
.form:before {
  content: "";
  position: absolute;
  background: var(--border-color);
  transform: scaleX(0);
  transform-origin: center;
  width: 100%;
  height: var(--border-height);
  left: 0;
  bottom: 0;
  border-radius: 1px;
  transition: transform var(--timing) ease;
}
/* Hover on Input */
.form:focus-within {
  border-radius: var(--after-border-radius);
}

input:focus {
  outline: none;
}
/* here is code of animated border */
.form:focus-within:before {
  transform: scale(1);
}
/* styling of close button */
/* == you can click the close button to remove text == */
.reset {
  border: none;
  background: none;
  opacity: 0;
  visibility: hidden;
}
/* close button shown when typing */
input:not(:placeholder-shown) ~ .reset {
  opacity: 1;
  visibility: visible;
}
/* sizing svg icons */
.form svg {
  width: 17px;
  margin-top: 3px;
}
  
  `;EE.rec(o,t),o.html=`
  <form class="form">
  <button>
      <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
          <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
  </button>
  <input class="input" placeholder="Type your text" required="" type="text">
  <button class="reset" type="reset">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
  </button>
</form>
  
  `,this.out(o)}
],
 [1728789277,async function t(n){}],
 [2060322766,async function f(t){let r=this.fnPre(t),n=this.fnGetArg(t,"t1",144),s=t.reverse?(o,e)=>o[n]<e[n]:(o,e)=>o[n]>e[n],c=r.v.sort(s);this.fnPost(t,c,85)}],
 [1092050133,async function n(t){let e;t.c===255?e=this.fnPre(t):e=this.VM[t.V1],console.log({s:t,vr:e}),this.fnPost(t,e.v.length,33)}],
 [3141877039,async function a(t){let e;switch(t.c){case 1:e=this.vmIv(t.t1);break;case 2:e=this.vmGv(t.V1);break;case 3:e=this.vmGv(t.R1).email}if(!e)return this.terr("could not resolve email!");this.stOpSet(2149574313,"email","bcc",e)}
],
 [1687099953,async function e(t){console.log("here...");let s=this.fnPre(t),o=s.v.split(" ").map(n=>n[0].toUpperCase()+n.substring(1));this.fnPost(t,o.join(" "),s.t)}],
 [87181277,async function e(t){t.html="<div>to be implemented</div>",this.out(t)}],
 [158719283,async function t(n){}],
 [1753367816,async function l(o){let t=o.V1;console.log({imagedata:t});let n=new Image;console.log("details"),console.log(n.naturalHeight),console.log(n.naturalWidth),this.fnPost(o,400,33)}],
 [1777566257,async function t(n){}],
 [1556394812,async function s(C){let t=EE.de(C,1,20,90,20),l=EE.sizer(C.s,1,9,20,2),o=t.sz*211/620,n=C.t1?C.t1:"",c=`
      .e${C.o} {
          background-color: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Roboto', sans-serif;
          width: 100%;
      }
      `;EE.rec(C,c);let e=C.c1?C.c1:"#000000";C.html=`<div class="${t.cl}" style="${t.sty}">
    <svg width="${t.sz}" height="${o}" viewBox="0 0 620 211" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M155.158 71.9023L155.51 88.1621C159.084 82.3027 163.537 77.8496 168.869 74.8027C174.201 71.6973 180.09 70.1445 186.535 70.1445C196.73 70.1445 204.318 73.0156 209.299 78.7578C214.279 84.5 216.799 93.1133 216.857 104.598V167H206.398V104.51C206.34 96.0137 204.523 89.6855 200.949 85.5254C197.434 81.3652 191.779 79.2852 183.986 79.2852C177.482 79.2852 171.711 81.3359 166.672 85.4375C161.691 89.4805 158 94.959 155.598 101.873V167H145.139V71.9023H155.158ZM239.885 118.572C239.885 103.689 243.166 91.9121 249.729 83.2402C256.35 74.5098 265.314 70.1445 276.623 70.1445C289.572 70.1445 299.416 75.3008 306.154 85.6133L306.682 71.9023H316.525V165.066C316.525 177.312 313.098 187.01 306.242 194.158C299.387 201.307 290.1 204.881 278.381 204.881C271.76 204.881 265.432 203.387 259.396 200.398C253.42 197.469 248.703 193.543 245.246 188.621L251.135 182.293C258.576 191.434 267.424 196.004 277.678 196.004C286.467 196.004 293.322 193.396 298.244 188.182C303.166 183.025 305.715 175.848 305.891 166.648V154.695C299.152 164.07 289.338 168.758 276.447 168.758C265.432 168.758 256.584 164.363 249.904 155.574C243.225 146.785 239.885 134.92 239.885 119.979V118.572ZM250.52 120.418C250.52 132.547 252.951 142.127 257.814 149.158C262.678 156.131 269.533 159.617 278.381 159.617C291.33 159.617 300.5 153.816 305.891 142.215V98.0059C303.43 91.9121 299.885 87.2832 295.256 84.1191C290.627 80.8965 285.061 79.2852 278.557 79.2852C269.709 79.2852 262.824 82.7715 257.902 89.7441C252.98 96.6582 250.52 106.883 250.52 120.418ZM403.977 167C402.922 164.012 402.248 159.588 401.955 153.729C398.264 158.533 393.547 162.254 387.805 164.891C382.121 167.469 376.086 168.758 369.699 168.758C360.559 168.758 353.146 166.209 347.463 161.111C341.838 156.014 339.025 149.568 339.025 141.775C339.025 132.518 342.863 125.193 350.539 119.803C358.273 114.412 369.025 111.717 382.795 111.717H401.867V100.906C401.867 94.1094 399.758 88.7773 395.539 84.9102C391.379 80.9844 385.285 79.0215 377.258 79.0215C369.934 79.0215 363.869 80.8965 359.064 84.6465C354.26 88.3965 351.857 92.9082 351.857 98.1816L341.311 98.0938C341.311 90.5352 344.826 84.002 351.857 78.4941C358.889 72.9277 367.531 70.1445 377.785 70.1445C388.391 70.1445 396.74 72.8105 402.834 78.1426C408.986 83.416 412.15 90.7988 412.326 100.291V145.291C412.326 154.49 413.293 161.375 415.227 165.945V167H403.977ZM370.93 159.441C377.961 159.441 384.23 157.742 389.738 154.344C395.305 150.945 399.348 146.404 401.867 140.721V119.803H383.059C372.57 119.92 364.367 121.854 358.449 125.604C352.531 129.295 349.572 134.393 349.572 140.896C349.572 146.229 351.535 150.652 355.461 154.168C359.445 157.684 364.602 159.441 370.93 159.441ZM436.232 118.572C436.232 103.689 439.514 91.9121 446.076 83.2402C452.697 74.5098 461.662 70.1445 472.971 70.1445C485.92 70.1445 495.764 75.3008 502.502 85.6133L503.029 71.9023H512.873V165.066C512.873 177.312 509.445 187.01 502.59 194.158C495.734 201.307 486.447 204.881 474.729 204.881C468.107 204.881 461.779 203.387 455.744 200.398C449.768 197.469 445.051 193.543 441.594 188.621L447.482 182.293C454.924 191.434 463.771 196.004 474.025 196.004C482.814 196.004 489.67 193.396 494.592 188.182C499.514 183.025 502.062 175.848 502.238 166.648V154.695C495.5 164.07 485.686 168.758 472.795 168.758C461.779 168.758 452.932 164.363 446.252 155.574C439.572 146.785 436.232 134.92 436.232 119.979V118.572ZM446.867 120.418C446.867 132.547 449.299 142.127 454.162 149.158C459.025 156.131 465.881 159.617 474.729 159.617C487.678 159.617 496.848 153.816 502.238 142.215V98.0059C499.777 91.9121 496.232 87.2832 491.604 84.1191C486.975 80.8965 481.408 79.2852 474.904 79.2852C466.057 79.2852 459.172 82.7715 454.25 89.7441C449.328 96.6582 446.867 106.883 446.867 120.418ZM577.121 168.758C569.035 168.758 561.711 166.766 555.148 162.781C548.645 158.797 543.576 153.26 539.943 146.17C536.311 139.021 534.494 131.023 534.494 122.176V118.396C534.494 109.256 536.252 101.023 539.768 93.6992C543.342 86.375 548.293 80.6328 554.621 76.4727C560.949 72.2539 567.805 70.1445 575.188 70.1445C586.73 70.1445 595.871 74.0996 602.609 82.0098C609.406 89.8613 612.805 100.613 612.805 114.266V120.154H544.953V122.176C544.953 132.957 548.029 141.951 554.182 149.158C560.393 156.307 568.186 159.881 577.561 159.881C583.186 159.881 588.137 158.855 592.414 156.805C596.75 154.754 600.676 151.473 604.191 146.961L610.783 151.971C603.049 163.162 591.828 168.758 577.121 168.758ZM575.188 79.1094C567.277 79.1094 560.598 82.0098 555.148 87.8105C549.758 93.6113 546.477 101.404 545.305 111.189H602.346V110.047C602.053 100.906 599.445 93.4648 594.523 87.7227C589.602 81.9805 583.156 79.1094 575.188 79.1094Z" fill="${e}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M41 105C53.1503 105 63 95.1503 63 83C63 77.2909 60.8253 72.0897 57.2592 68.1796C60.719 67.4071 64.3129 67 68 67C95.6142 67 118 89.8335 118 118C118 121.071 117.734 124.079 117.224 127H104H100.872H35.1276C39.0126 142.131 52.4594 153 68 153C80.2404 153 91.1818 146.257 97.1752 136H114.797C107.664 155.284 89.4022 169 68 169C40.3858 169 18 146.167 18 118C18 109.999 19.8064 102.428 23.0258 95.6889C27.0099 101.322 33.5754 105 41 105Z" fill="${e}"/>
  <circle cx="67.5" cy="118.5" r="62.5" stroke="${e}" stroke-width="10"/>
  </svg>
  
    
    </div>`,this.out(C)}
],
 [4056322176,async function d(t){EE.pim.aIcons();let a=`
  .e${t.o} {
    flex-grow:1;
    font-family: Arial;
    width:100%;
    display: flex;
    color: var(--header-color,white);
    background-color: var(--header-background,transparent);
    justify-content:space-between;
    align-items:center;
    text-align:center;
    padding: 10px;
  }

  .e${t.o} .backnav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: transparent;
  }


  `;EE.rec(t,a);let n=`i${this.id}_s0_3407041447`,e=document.getElementById(n);if(!e)return this.opErr(t,"No header section found for this element.  Please add a header section to your layout.");e.style.display="flex",e.style.justifyContent="space-between",e.style.alignItems="center",e.style.padding="5px 10px",e.style.fontFamily="Arial",e.style.flexDirection="row",this.st.lastel!==4056322176&&(e.innerHTML=""),t.bc&&(e.style.backgroundColor=t.bc);let i="",c;if(t.u1){let o=EE.de(t,1,5,30,10);t.html=`<div ${i}><img height="${o.sz}px" src="${t.u1}"/></div>`}else switch(t.c){case 1:i=`onclick="EE.E['${this.id}'].goto(${t.fc})"`;case 2:let o=this.rfo(t);t.t1=this.vmIv(t.t1),c=EE.de(t,1,5,1,.2),t.html=`<div ${i} style="flex-grow:1;${c.sty}${c.fs};${o}">${t.t1}</div>`;break;case 3:i=`onclick="EE.E['${this.id}'].goto(${t.fc})"`;case 4:c=EE.de(t,1,5,2,.2),t.html=`<div ${i}><iconify-icon style="${c.sty}${c.fs}" icon="${this.rict(t.i1)}"></iconify-icon></div>`;break;case 5:i=`onclick="EE.input({ ev: 'xpe|${t.xpe};~goto|${t.fc}'})"`;case 6:let l=EE.de(t,1,5,30,10),s=this.rit(t.I1);t.html=`<div ${i}><img height="${c.sz}px" src="${s}"/></div>`;break}let r=this.st.targetsec;this.st.targetsec=n,this.out(t),this.st.targetsec=r}
],
 [3796417811,async function n(a){EE.pim.aLnk("animation","https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"),EE.elanim=EE.anim.slideIn?EE.anim.slideIn:"animate__animated animate__zoomIn"}
],
 [3434156397,async function c(e){let t=this.fnPre(e);console.log({s:e,vr:t});let a;Array.isArray(t.v)?a=t.v:a=[t.v],console.log({initial:a});let l;switch(e.c){case 1:l=this.VM[e.v1]?this.VM[e.v1].v:null;break;case 2:l=this.vmIv(e.t1);break;case 3:l=Number(e.n1);break;case 4:case 5:l=!0;break;case 6:case 7:l=!1;break}a=[...a,l],console.log({addval:l,value:a}),this.fnPost(e,a,82)}],
 [3250965099,async function t({t1:n}){return"<div></div>"}
],
 [2855899088,async function e(t){let o=this.vmIv(t.t1);await this.usePI("shoelace"),t.html=`
    <sl-tooltip content="${o}">
    <button>Hover Me</button>
  </sl-tooltip>
  `,this.out(t)}
],
 [1601186833,async function c(t){let e=this.fnPre(t),o=this.fnGetArg(t,"n1",160),n=new Date(e.v);console.log({s:t,vn:e,years:o}),n.setFullYear(n.getFullYear()+o);let s=n.toISOString();this.fnPost(t,s,113)}],
 [2588326556,async function l(t){let i="open";EE.pim.aPico();let e,a;switch(t.c){case 1:e=this.vmIv(t.t1),a=this.vmIv(t.t2);break;case 2:e=this.vmGv(t.V1),a=this.vmGv(t.V2);break;case 3:e=this.vmIv(t.t1),a=this.vmGv(t.V1);break}t.t2=this.vmIv(t.t2),t.html=`
    <dialog id="${t.id}-modal" ${i}>
  <article>
    <header>
      <a onclick='document.getElementById("${t.id}-modal").close();' aria-label="Close" class="close"></a>
      ${e}
    </header>
    <p>
      ${a}
    </p>
  </article>
</dialog>`,this.out(t)}
],
 [2223598766,async function n(t){if(this.fnPre(t),!this.st.app.key)return this.opErr(t,"app key not set");if(!this.st.app?.user?.key)return this.opErr(t,"app user key not set");console.log({s:t});let e=this.VM[t.V1],o=t.V1;if(!e)return this.opErr(t,"no value to store");let{error:s,result:r}=await this.ddexe(t.o,{userkey:this.st.app.user.key,name:o,value:e});console.log({error:s,result:r}),this.fnPost(t,r,65)}
],
 [1343143093,async function t(s){this.st.ifmissing=!0}],
 [935272347,async function n(a){EE.pim.aLnk("animation","https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"),EE.elanim=EE.anim.flipIn?EE.anim.flipIn:"animate__animated animate__flipInY"}
],
 [1743947055,async function s(t){let i=this.fnGetNarg(t);console.log({s:t,count:i}),this.st.ll=i,this.st.lc=1,this.st.idx="index",t.c===3?this.st.idx=t.V1:t.c===4&&(this.st.idx=t.V2)}],
 [1791131093,async function s(a){let t=new Date;var e=new Date(t.getTime());e.setDate(t.getDate()+(7+3-t.getDay())%7),this.fnPost(a,e,113)}],
 [2166987499,async function t({t1:n}){return"<div></div>"}
],
 [1313517982,async function r(t){try{t.vti=255,this.fnPre(t);let i="Engage App",o=this.vmIv(t.t1),n=t.V1?this.vmGv(V1):this.vmIv(t.t2);if(!n)return this.opErr(t,"empty/missing body");if(!o)return this.opErr(t,"empty/missing emailto");let e=await(await fetch(`https://o${t.o}.deno.dev`,{method:"POST",headers:{"xpe-op-auth":t.o,"xpe-client-id":"clientidhere"},body:JSON.stringify({to:o,body:n})})).json();console.log({here:1,result:e,sendResult:e.result.sendResult}),this.fnPost(t,e,65)}catch(i){this.opErr(t,`email send failed: ${i.message}`)}}
],
 [2234815888,async function t(n){}
],
 [1758461148,async function t(n){}
],
 [650905443,async function r(t){try{await this.usePI("engageaccount");let s=this.vmGv(t.V1);if(!s)return this.opErr(t,"e.resetpassword missing email",3);let{data:a,error:e}=await EE.EA.sb.auth.resetPasswordForEmail(s,{});if(console.log({data:a,error:e}),e)return this.fnPost(t,!1,49),this.opErr(t,e.message);this.fnPost(t,!0,49)}catch(s){this.fnPost(t,!1,49),this.opErr(t,s.message)}}],
 [2842099456,async function a(t){await this.usePI("shoelace",{latest:!0}),console.log("rating!"),console.log({s:t});let l=EE.de(t);t.html='<sl-rating label="Rating"></sl-rating>',this.out(t)}
],
 [1682738622,async function d(t){t.bc=t.c1;let c=EE.de(t,1,9,40,10),n=t.n1?t.n1:c.sz,o=`.e${t.o} {
    background-color: transparent;
    width:100%;
  }`;EE.rec(t,o),t.html=`<div class="${c.cl}" style="height:${n}px;width:${n}px;${c.sty}">&nbsp;</div>`,this.out(t)}
],
 [68467777,async function a(e){this.lastoperr=0;try{}catch(t){this.opErr(e,`e.imagedelete failed - ${t.message}`)}}
],
 [3688453387,async function e(t){console.log("item literal"),console.log({s:t});let o=this.vmIv(t.it),i=this.paIt(o);this.fnPost(t,i,65)}
],
 [2474244961,async function o(t){try{this.fnPre(t),await this.usePI("templates",{latest:!0});let e=this.VM[t.V1].v;if(!e)return this.opErr(t,"missing template");let i=this.vmGv(t.V2);if(!i)return this.opErr(t,"missing fillin data");console.log({template:e,input:i});let s=EPI.templates.compile(e,{props:["input"]});console.log({render:s});let n=s({input:i});this.fnPost(t,n,17)}catch(e){this.opErr(t,e.message)}}],
 [2430796920,async function u(t){await this.usePI("pincode",{latest:!0});let n=this.st.var[0]?this.st.var[0]:"result";console.log({s:t}),this.fnPre(t);let i=EE.de(t,1,5,50,10),r=`
  .e${t.o} {
    color: red;
    background-color: yellow;
  }
  /* direct from package */
  .pincode-input {
    width: ${i.sz}px;
    height: ${i.sz}px;
    line-height: ${i.sz}px;
    border-radius: 3px;
    border: 2px solid gray;
    text-align: center;
    font-size: 1.5rem;
    text-transform: uppercase;
    color: ${t.c1?t.c1:"black"};
  }
  .pincode-input:not(:last-child) {
    margin-right: 0.5rem;
  }
  .pincode-input.pincode-input--focused {
    border-color: #000;
  }
  .pincode-input.pincode-input--filled {
    border-color: #1e90ff;
  }  
  `;EE.rec(t,r);let o=t.n1?t.n1:6,s=!t.nomask,d=!!t.numeric,p=!!t.uppercase;t.html=`<div id="${t.id}" class="${i.cl}" style="${i.sty}"><div id="${t.id}-pin"></div></div>`;let c=t.numeric?33:17;function l(e){console.log(e),!(e.toString().length<o)&&(console.log({input:1,vn:n,vto:c,value:e}),this.input({vn:n,vto:c,value:e}),this.st.halt&&(this.st.halt=!1,this.exe()))}this.out(t),new EPI.pincode.PincodeInput(`#${t.id}-pin`,{count:o,secure:s,previewDuration:200,numeric:d,uppercase:p,onInput:l.bind(this)}),this.st.wait&&(this.st.halt=!0,this.st.wait=!1)}
],
 [2364398556,async function t(n){}],
 [4068488809,async function o(t){let n=this.fnPre(t),f=this.fnGetNarg(t);this.fnPost(t,n.v*f,n.t)}],
 [245576076,async function t(n){}],
 [3134568508,async function t(n){}],
 [572670667,async function o(i){try{let I=await import(i.u1);if(console.log({R:I}),EE.EPI[i.c]=I.default,i.DB){let c=EE.EPI[i.c].version();i.html=`<div style="font-size:8px;">${c}`,this.out(i)}}catch(I){i.html=`<div style="font-size:8px;color:red;">:use - ${i.u1} failed to load`,this.out(i),console.log({e:I})}switch(i.c){case 1:EE.EA=new EE.EPI[1];break;case 2:break;case 3:let I="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjYwMzI3NjA1LCJzdWIiOiIwNTZjMmIxZC1lMzdhLTRhMGItODhhZC1iMGMwMDA3Yzk5YzgiLCJlbWFpbCI6ImdsZW5uQHhwZXJ0YW5hLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7ImEiOnsiZGVmIjowLCJpZCI6NDExLCJuIjoiZ2xlbm4vZmxhdGJyZWFkZnJpZGF5In0sIm8iOnsiZGVmIjoxLCJpZCI6MjQ4LCJuIjoiZ2xlbm4ifSwicGwiOjIsInByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiLCJnaXRodWIiLCJnb29nbGUiXSwic3UiOjF9LCJ1c2VyX21ldGFkYXRhIjp7ImF2YXRhcl91cmwiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQUZkWnVjcFdadno1UF9lWE9fSlBfckpZdk9pc19FTzZWN0pHRDVDTlNYaV89czk2LWMiLCJjd2EiOjk5OSwiY3dvIjoyNTAsImVtYWlsIjoiZ2xlbm5AeHBlcnRhbmEuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZ1bGxfbmFtZSI6IkdsZW5uIFNjaGxlaWNoZXIiLCJpc3MiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS91c2VyaW5mby92Mi9tZSIsIm5hbWUiOiJHbGVubiBTY2hsZWljaGVyIiwibm9kZSI6Im5ldyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQUZkWnVjcFdadno1UF9lWE9fSlBfckpZdk9pc19FTzZWN0pHRDVDTlNYaV89czk2LWMiLCJwbGFuX2lkIjoyLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ4cGVydGFuYSIsInByb3ZpZGVyX2lkIjoiMTA4ODIwOTE2NzE4MDk3MDc3MjgxIiwic3ViIjoiMTA4ODIwOTE2NzE4MDk3MDc3MjgxIiwic3VwZXJ1c2VyIjoxLCJzd28iOiIyNTAiLCJ1c2VyX25hbWUiOiJ4cGVydGFuYSJ9LCJyb2xlIjoiYXV0aGVudGljYXRlZCJ9.fitRCkPIHZu1w_wBFbdlls00D59gBAzeY_S6n5mzRIA";EE.flcc=new EE.EPI[3]({APIKEY:I});break;case 5:EE.snd=new EE.EPI[5];break;case 6:let c="pk_test_TYooMQauvdEDq54NiTphI7jx";EE.stripe=new EE.EPI[6](c),await EE.stripe.initialize();break;case 8:console.log(EE.EPI[8]);break}}
],
 [4049184835,async function t(n){}],
 [2999731880,async function s(t){let n=this.fnPre(t),o=new Date(n.v),e=this.st.app.locale||"en-US",a=new Intl.DateTimeFormat(e).format(o);this.fnPost(t,a,17)}],
 [4190859325,async function n(t){let c=EE.de(t,1,5,16,2),o=`
  <style>
  .e${t.o} {
    color: inherit;
    text-decoration: inherit;
  }
  </style>
  `,e;switch(t.c){case 1:case 2:case 3:}if(e=t.V1?this.vmGv(t.V1):this.vmIv(t.u1),!e)return this.opErr(t,"could not resolve url");let l=t.t1?this.vmIv(t.t1):e;t.html=`${o}<span class="${c.cl}" target="_blank" rel="noopener" style="${c.sty}"><a class="${c.cl}" href="${e}">${l}</a></span>`,this.out(t)}
],
 [8914503,async function p(e){console.log("\u{1F3AF} dedump!"),console.log({s:e});let f=EE.de(e),s,[t,n]=e.v.split(":");switch(t){case"ver":s=EngageCore.version();break;case"pc":s=JSON.stringify(this.st.K,null,2);break;case"au":s=JSON.stringify(this.st.au,null,2);break;case"lo":let g=document.getElementById(`i${this.id}_s0`);console.log({layout:g}),s="see console for layout...";break;case"fa":let a=this.st.CF.fc,b=this.FM.dec.fl.get(a)?.a;s=`flowargs for ${a}: ${b}`;break;case"flow":let l=this.st.CF.fc;s=`flow: ${l}:
`;let i={...this.FM.dec.fl.get(l)};delete i.bin,s+=JSON.stringify(i,null,2);break;case"bs":s=JSON.stringify(this.st.bs,null,2);break;case"cf":s=JSON.stringify(this.st.CF,null,2);break;case"plugins":s=`plugins:
`,s+=JSON.stringify(window.EPI,null,2);break;case"vm":s=JSON.stringify(this.VM,null,2);break;case"op":s=JSON.stringify(this.st.op,null,2);break;case"wf":s=JSON.stringify(this.st.wf,null,2);break;case"ea":await this.usePI("engageaccount");let{access_token:h,plan:y,su:k}=await this.sbctx();s=`plan: ${y}
su: ${k}
access_token: ${h}`;break;case"app/":await this.usePI("engageaccount"),s=JSON.stringify(this.st.app,null,2);break;case"st":s=JSON.stringify(this.st,null,2);break;case"fl":s=JSON.stringify(Object.keys(this.FM.dec.fl),null,2);break;case"fl":s=JSON.stringify(Object.keys(this.FM.dec.fl),null,2);break;case"rv":s=`${n} raw value:
`,s+=JSON.stringify(this.VM[n],null,2);break;default:s=`${t} value:
`;let c=this.vmGvt(t);if(!c){s+="not found / no value";break}let{value:o,type:r}=c;s+=`value of ${t} is type ${r}:
`,console.log({value:o,type:r}),s+=JSON.stringify(o,null,2)}let u=`
  <style>
  .e${e.o} {
    padding:10px;
    border-radius:5px;
    width:100%;
    flex-grow:1;
    background-color: white;
    font-size:10px;
  }</style>
  `;e.html=`${u}<pre class="${f.cl}">${s}</pre>`,this.out(e)}
],
 [2149574313,async function c(e){let t=this.stOpGet(e.o,"email");console.log({s:e,state:t});let u=t?t.from:"app@engage.run",i=t?t.to:null,s=t?t.subject:null,r=t?t.body:null;try{switch(e.c){case 1:if(!i||!s||!r)return this.opErr(e,"missing required info - 1");break;case 2:if(!s||!r)return this.terr("missing stuff");let l=this.vmGv(e.R1);if(!l)return this.terr("missing resource - 3");i=l.email;break;case 3:let a=this.vmGv(e.R1);if(!a)return this.terr("missing resource - 3");if(i=a.email,r=this.vmIv(e.t1),!i||!r)return this.terr("missing required info - 3");s=r.split(`
`)[0];break;case 4:return this.terr("not implemented yet");default:return this.terr(`fatal send ${e.c}`)}this.stOpSet(e.o,"email",{});let o=await(await fetch(`https://xpe${e.o}.deno.dev`,{method:"POST",headers:{"xpe-op-auth":e.o,"xpe-client-id":"clientidhere"},body:JSON.stringify({From:u,To:i,Subject:s,Body:r})})).json();console.log({here:1,result:o,sendResult:o.result.sendResult})}catch(n){this.opErr(e,`email send failed: ${n.message}`)}}
],
 [2033459553,async function c(t){console.log({s:t});let i=EE.de(t,1,5,16,2),n=this.dinp(t),l=this.vmChkGet(t.V1,208);if(!l)return-1;let a=null;t.selected&&initialVa;let o=`
    <style>
    .e${t.o} {
      margin:10px;
    }
    </style> 
    `;t.html=`
    ${o}
    <select class="${i.cl}"
    onchange='EE.input({ ev: "${n.event}",value : this.value})'
    >
    `,t.t1&&(t.t1=this.vmIv(t.t1),t.html+=`<option value="${t.t1}">-- ${t.t1} --</option>`),l.forEach(e=>t.html+=`<option ${e===t.selected?"selected":""} value="${e}">${e}</option>`),t.html+="</select>",this.out(t)}
],
 [3293302831,async function n(t){let e=this.fnPre(t);this.fnPost(t,typeof e.v=="number",49)}],
 [3616526435,async function a(t){await this.usePI("highlight"),await this.usePI("editor",{latest:!0});let e=EE.de(t),i;t.t1?i=t.t1:t.V1?i=this.vmGv(t.V1):i="empty";let o=`
  .e${t.o} {
    width: 100%;
    height: 200px;
    border: 4px solid gray;
    margin: 20px;
    padding: 20px;
  }
  .cm-editor { height: inherit; width: 100%;}
  .cm-content { font-family: monaco, monospace; }
  .e${t.o}-editor { 
    height: 80%;
  }
  `;EE.rec(t,o),t.html=`<div id="${t.id}" class="${e.cl}" style="${e.sty}">
  <div id="${t.id}-editor" class="${t.o}-editor"></div>
  </div>`,this.out(t);let d=t.c1?t.c1:"red",c=t.bc?t.bc:"white",n=document.getElementById(`${t.id}-editor`);new EPI.editor.Lite(n,{color:d,backgroundColor:c}).initialize(i)}
],
 [1603071571,async function t(n){}
],
 [2306753596,async function t(n){}],
]);

window.EFN = EFN;
