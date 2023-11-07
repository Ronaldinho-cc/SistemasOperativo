(()=>{"use strict";var t={229:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.$a=void 0,e.$a=class{get isRejected(){return 1===this.d?.outcome}get isResolved(){return 0===this.d?.outcome}get isSettled(){return!!this.d}get value(){return 0===this.d?.outcome?this.d?.value:void 0}constructor(){this.p=new Promise(((t,e)=>{this.a=t,this.b=e}))}complete(t){return new Promise((e=>{this.a(t),this.d={outcome:0,value:t},e()}))}error(t){return new Promise((e=>{this.b(t),this.d={outcome:1,value:t},e()}))}}},938:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.$c=e.$b=void 0;const r=s(781);e.$b=()=>new i("\n".charCodeAt(0));class i extends r.Transform{constructor(t){super(),this.b=t}_transform(t,e,s){this.a?this.a=Buffer.concat([this.a,t]):this.a=t;let r=0;for(;r<this.a.length;){const t=this.a.indexOf(this.b,r);if(-1===t)break;this.push(this.a.subarray(r,t)),r=t+1}this.a=r===this.a.length?void 0:this.a.subarray(r),s()}_flush(t){this.a&&this.push(this.a),t()}}e.$c=i},496:t=>{t.exports=require("vscode")},81:t=>{t.exports=require("child_process")},17:t=>{t.exports=require("path")},781:t=>{t.exports=require("stream")}},e={};function s(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,s),o.exports}var r={};(()=>{var t=r;Object.defineProperty(t,"__esModule",{value:!0}),t.deactivate=t.activate=void 0;const e=s(81),i=s(17),o=s(496),n=s(229),a=s(938),c=process.env.VSCODE_FORWARDING_IS_DEV?i.join(__dirname,"../../../cli/target/debug/code"):i.join(o.env.appRoot,"darwin"===process.platform?"bin":"../../bin","stable"===o.env.appQuality?"code-tunnel":"code-tunnel-insiders")+("win32"===process.platform?".exe":"");class h{constructor(t,e){this.remoteAddress=t,this.privacy=e,this.a=new o.EventEmitter,this.onDidDispose=this.a.event}setPortFormat(t){this.localAddress=t.replace("{port}",String(this.remoteAddress.port))}dispose(){this.a.fire()}}t.activate=async function(t){if(o.env.remoteAuthority)return;const e=new d(o.l10n.t("Port Forwarding")),s=new l(e,t);t.subscriptions.push(o.commands.registerCommand("tunnel-forwarding.showLog",(()=>e.show())),o.commands.registerCommand("tunnel-forwarding.restart",(()=>s.restart())),s.onDidStateChange((t=>{o.commands.executeCommand("setContext","tunnelForwardingIsRunning",2!==t.state)})),await o.workspace.registerTunnelProvider(s,{tunnelFeatures:{elevation:!1,privacyOptions:[{themeIcon:"globe",id:"public",label:o.l10n.t("Public")},{themeIcon:"lock",id:"private",label:o.l10n.t("Private")}]}}))},t.deactivate=function(){};class d{constructor(t){this.b=t}show(){return this.a?.show()}clear(){this.a?.clear()}log(t,e,...s){this.a||(this.a=o.window.createOutputChannel(this.b,{log:!0}),o.commands.executeCommand("setContext","tunnelForwardingHasLog",!0)),this.a[t](e,...s)}}const u="didWarnPublic";class l{get d(){return this.c}set d(t){this.c=t,this.b.fire(t)}constructor(t,e){this.f=t,this.g=e,this.a=new Set,this.b=new o.EventEmitter,this.c={state:2},this.onDidStateChange=this.b.event}async provideTunnel(t){if("public"===t.privacy&&!await this.h(t.remoteAddress.port))return;const e=new h(t.remoteAddress,t.privacy||"private");switch(this.a.add(e),e.onDidDispose((()=>{this.a.delete(e),this.k()})),this.d.state){case 3:case 2:await this.m();case 0:return this.k(),new Promise(((t,s)=>{const r=this.b.event((i=>{1===i.state?(e.setPortFormat(i.portFormat),r.dispose(),t(e)):3===i.state&&(r.dispose(),s(new Error(i.error)))}))}));case 1:return e.setPortFormat(this.d.portFormat),this.k(),e}}async restart(){this.j(),await this.m(),this.k()}async h(t){if(this.g.globalState.get(u,!1))return!0;const e=o.l10n.t("Continue"),s=o.l10n.t("Don't show again"),r=await o.window.showWarningMessage(o.l10n.t("You're about to create a publicly forwarded port. Anyone on the internet will be able to connect to the service listening on port {0}. You should only proceed if this service is secure and non-sensitive.",t),{modal:!0},e,s);if(r===e);else{if(r!==s)return!1;await this.g.globalState.update(u,!0)}return!0}i(t){return(0===this.d.state||1===this.d.state)&&this.d.process===t}j(){0!==this.d.state&&1!==this.d.state||(this.f.log("info","[forwarding] no more ports, stopping forwarding CLI"),this.d.process.kill(),this.d={state:2})}k(){if(0!==this.d.state&&1!==this.d.state)return;const t=[...this.a].map((t=>({number:t.remoteAddress.port,privacy:t.privacy})));this.d.process.stdin.write(`${JSON.stringify(t)}\n`),0!==t.length||this.d.cleanupTimeout?t.length>0&&this.d.cleanupTimeout&&(clearTimeout(this.d.cleanupTimeout),this.d.cleanupTimeout=void 0):this.d.cleanupTimeout=setTimeout((()=>this.j()),1e4)}async m(){const t=["--verbose","tunnel","forward-internal","--provider","github","--access-token",(await o.authentication.getSession("github",["user:email","read:org"],{createIfNone:!0})).accessToken];this.f.log("info","[forwarding] starting CLI");const s=(0,e.spawn)(c,t,{stdio:"pipe",env:{...process.env,NO_COLOR:"1"}});this.d={state:0,process:s};const r=new n.$a;o.window.withProgress({location:o.ProgressLocation.Notification,title:o.l10n.t({comment:['do not change link format [Show Log](command), only change the text "Show Log"'],message:"Starting port forwarding system ([Show Log]({0}))",args:["command:tunnel-forwarding.showLog"]})},(()=>r.p)),s.on("exit",(t=>{const e=`[forwarding] exited with code ${t}`;this.f.log("info",e),r.complete(),this.i(s)&&(this.d={state:3,error:e})})),s.on("error",(t=>{this.f.log("error",`[forwarding] ${t}`),r.complete(),this.i(s)&&(this.d={state:3,error:String(t)})})),s.stdout.pipe((0,a.$b)()).on("data",(t=>this.f.log("info",`[forwarding] ${t}`))).resume(),s.stderr.pipe((0,a.$b)()).on("data",(t=>{try{const e=JSON.parse(t);e.port_format&&void 0!==e.port_format&&(this.d={state:1,portFormat:e.port_format,process:s,cleanupTimeout:"cleanupTimeout"in this.d?this.d.cleanupTimeout:void 0},r.complete())}catch(e){this.f.log("error",`[forwarding] ${t}`)}})).resume(),await new Promise(((t,e)=>{s.on("spawn",t),s.on("error",e)}))}}})();var i=exports;for(var o in r)i[o]=r[o];r.__esModule&&Object.defineProperty(i,"__esModule",{value:!0})})();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/2b35e1e6d88f1ce073683991d1eff5284a32690f/extensions/tunnel-forwarding/dist/extension.js.map