System.register(["./p-d6c22beb.system.js","./p-8b725fba.system.js"],(function(e){"use strict";var t,i,n,r;return{setters:[function(e){t=e.r;i=e.c;n=e.h},function(e){r=e.u}],execute:function(){var s=e("bds_radio",function(){function e(e){var n=this;t(this,e);this.checked=false;this.disabled=false;this.onClick=function(e){n.checked=!n.checked;e.target.checked=n.checked};this.refNativeInput=function(e){n.nativeInput=e};this.bdsChange=i(this,"bdsChange",7);this.bdsInput=i(this,"bdsInput",7)}e.prototype.checkedChanged=function(e){this.bdsChange.emit({checked:e})};e.prototype.getInputElement=function(){return Promise.resolve(this.nativeInput)};e.prototype.getValue=function(){return Promise.resolve(this.nativeInput.checked)};e.prototype.connectedCallback=function(){this.radioId=this.refer||"bds-radio-"+r()};e.prototype.render=function(){return n("label",{class:"radio",htmlFor:this.radioId},n("input",{class:"radio__input",type:"radio",ref:this.refNativeInput,id:this.radioId,onClick:this.onClick,disabled:this.disabled,checked:this.checked,value:this.value,name:this.name}),n("div",{class:"radio__circle"},n("div",{class:"radio__circle__pointer"})),n("bds-typo",{class:"radio__text",variant:"fs-14",tag:"span"},this.label))};Object.defineProperty(e,"watchers",{get:function(){return{checked:["checkedChanged"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"\@charset \"UTF-8\";.radio{cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.radio [type=radio]{display:none}.radio [type=radio]:focus{outline:0}.radio__circle{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:16px;height:16px;-ms-flex-negative:0;flex-shrink:0;border:1px solid #2cc3d5;border-radius:100%}.radio__circle,.radio__circle__pointer{-webkit-transition:all .3s;transition:all .3s;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-delay:0s;transition-delay:0s}.radio__circle__pointer{border-radius:100%;background-color:transparent;height:10px;width:10px}.radio__circle:hover{border-color:#2498a8}.radio__text{-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none;padding-left:8px;color:#738192}.radio__input[type=radio]:checked~.radio__circle{background-color:transparent}.radio__input[type=radio]:checked~.radio__circle:hover{border-color:#2cc3d5}.radio__input[type=radio]:checked~.radio__circle .radio__circle__pointer{background-color:#2cc3d5}.radio__input[type=radio]:disabled~.radio__circle{border-color:#76c1ca;background-color:#daf2f4}.radio__input[type=radio]:disabled~.radio__circle .radio__circle__pointer--checked{background-color:#76c1ca}.radio__input[type=radio]:disabled~.radio__circle,.radio__input[type=radio]:disabled~.radio__text{cursor:not-allowed}"},enumerable:true,configurable:true});return e}())}}}));