(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{404:function(t,e,n){var content=n(480);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("7c46fa92",content,!0,{sourceMap:!1})},479:function(t,e,n){"use strict";n(404)},480:function(t,e,n){var o=n(10)(!1);o.push([t.i,"p[data-v-6bc451b4]{margin-bottom:0;margin-top:0}.choose-homepage[data-v-6bc451b4]{position:relative;top:50%;left:50%;transform:translate(-50%,-50%);width:80%;max-width:580px}.choose-homepage h2[data-v-6bc451b4]{font-family:Nunito;font-style:normal;font-weight:800;font-size:44px;line-height:54px;max-width:516px;color:#3c3c3c}.meal-selector[data-v-6bc451b4]{width:516px;padding:40px 16px 24px;background:#f6f9fc;border-radius:8px}.little-header[data-v-6bc451b4]{font-weight:800;font-size:20px;line-height:27px;color:#3c3c3c;margin-bottom:4px}.small-header[data-v-6bc451b4]{font-size:14px;line-height:19px;letter-spacing:.2px;color:#3c3c3c}.meal-input[data-v-6bc451b4]{margin-top:16px}.meal-input input[data-v-6bc451b4]{width:100%}.other-option[data-v-6bc451b4]{margin-top:35px;margin-left:12px}.meal-btn[data-v-6bc451b4]{background:#fff;box-shadow:0 4px 8px rgba(164,182,192,.18);color:#3c3c3c;border-radius:4px;border:none;text-transform:none;letter-spacing:.2px;transition:.18s ease;margin-right:8px}.meal-btn[data-v-6bc451b4]:last-child{margin-right:0}.meal-btn[data-v-6bc451b4]:hover{box-shadow:0 4px 8px rgba(164,182,192,.3)}.wide-btn[data-v-6bc451b4]{width:145px;margin-left:-4px}.button-row[data-v-6bc451b4]{width:-webkit-max-content;width:-moz-max-content;width:max-content;display:block;margin-left:auto;margin-right:auto;align-items:center;flex-wrap:wrap;justify-content:space-between;margin-top:8px}.meal-active[data-v-6bc451b4]{background:#34bc89;color:#fff}.total-count[data-v-6bc451b4]{width:516px;background:#f6f9fc;border-radius:8px;padding-left:16px;padding-right:16px;margin-top:8px}.total-count p[data-v-6bc451b4]{font-weight:800;font-size:18px;line-height:18px;letter-spacing:.289412px;color:#3c3c3c;text-align:center;padding-bottom:12px;padding-top:12px}.meal-button[data-v-6bc451b4]{margin-top:8px}.meal-count-error[data-v-6bc451b4],.meal-count-error[data-v-6bc451b4]:focus{border:2px solid #fc7f7f}.meal-p-error[data-v-6bc451b4]{color:#fc7f7f}#second-p[data-v-6bc451b4]{font-weight:700;transition:.25s ease}@media only screen and (max-width:1282px){.choose-homepage h2[data-v-6bc451b4]{font-size:24px;line-height:32px;margin-top:0;margin-bottom:4px}.long-btn-wide[data-v-6bc451b4]{width:100%;padding:12px}.right-arrow[data-v-6bc451b4]{display:none}.choose-homepage[data-v-6bc451b4]{position:relative;top:0;left:0;transform:none;width:calc(100% - 48px);display:block;margin-left:auto;margin-right:auto;z-index:20;margin-top:24vh}.text-wrapper p[data-v-6bc451b4]:nth-child(2){font-size:12px;line-height:16px}.fruit-icon[data-v-6bc451b4]{border-radius:50%}.fruit-icon[data-v-6bc451b4],.text-wrapper[data-v-6bc451b4]{vertical-align:middle}.meal-selector[data-v-6bc451b4]{width:100%;padding-top:24px}.mobile-small[data-v-6bc451b4]{font-size:12px;line-height:16px}.other-option[data-v-6bc451b4]{margin-top:16px}.wide-btn[data-v-6bc451b4]{width:30%}.meal-btn[data-v-6bc451b4]{padding:6px 0;font-size:14px;line-height:19px}.total-count[data-v-6bc451b4]{width:100%}.meal-button[data-v-6bc451b4]{width:100%;padding-top:8px;padding-bottom:8px}.button-row[data-v-6bc451b4]{width:100%}.wide-btn[data-v-6bc451b4]{margin-left:0}}",""]),t.exports=o},525:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{mealCount:5,mealPrice:0}},mounted:function(){this.calculatePrice()},methods:{setMealCount:function(t){this.$store.commit("wizard/setMealsCount",t),this.mealCount=t,this.calculatePrice()},setMealCountStandalone:function(){this.$store.commit("wizard/setMealsCount",this.mealCount),this.calculatePrice()},calculatePrice:function(){var t;this.mealPrice=this.$store.getters.getPriceByMealCount(this.mealCount);var e=this.mealCount;e<=30&&e%5==0&&(t=document.getElementById("button-meal-"+e),this.setActiveButton("meal-btn","meal-active",t)),this.checkMealInputError()},checkMealInputError:function(){this.mealCount<5?(document.getElementById("meal-count").classList.add("meal-count-error"),document.getElementById("second-p").classList.add("meal-p-error"),document.getElementById("nxt-stp").setAttribute("disabled",!0)):(document.getElementById("meal-count").classList.remove("meal-count-error"),document.getElementById("second-p").classList.remove("meal-p-error"),document.getElementById("nxt-stp").removeAttribute("disabled"))},previousStep:function(){this.$store.commit("wizard/setStep",1),this.$store.commit("wizard/setMealsCount",this.mealCount)},setMealCountFromDOM:function(){var t=document.getElementById("meal-count").value;this.mealCount=t,this.$store.commit("wizard/setMealsCount",t)},nextStep:function(){this.mealCount>=5&&(this.$store.commit("cart/generateMealItems",this.mealCount),this.$store.commit("cart/generateSideDishes",this.mealCount),this.$store.commit("wizard/refreshPrice",this.$store),$nuxt.$emit("base-back-nav-toggle",!1),this.$store.state.logedIn,this.$router.push({path:"/wizard"}))},setActiveButton:function(t,e,n){for(var o=document.getElementsByClassName(t),i=0;i<o.length;i++)o[i].classList.remove(e);n.classList.add(e)}}},r=(n(479),n(5)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"choose-homepage"},[n("h2",[t._v("How many meals would you like to order?")]),t._v(" "),n("div",{staticClass:"meal-selector"},[t._m(0),t._v(" "),n("p",{staticClass:"mobile-small",attrs:{id:"second-p"}},[t._v("5 is a minimum amount you can order")]),t._v(" "),n("div",{staticClass:"ext-input-wrp meal-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.mealCount,expression:"mealCount"}],attrs:{id:"meal-count",type:"number",min:"5",max:"999"},domProps:{value:t.mealCount},on:{change:function(e){return t.calculatePrice()},keyup:function(e){return t.checkMealInputError()},input:function(e){e.target.composing||(t.mealCount=e.target.value)}}})]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"button-row"},[n("button",{staticClass:"meal-btn wide-btn",attrs:{id:"button-meal-5"},on:{click:function(e){return t.setMealCount(5)}}},[t._v("\n        5 meals\n      ")]),t._v(" "),n("button",{staticClass:"meal-btn wide-btn",attrs:{id:"button-meal-10"},on:{click:function(e){return t.setMealCount(10)}}},[t._v("\n        10 meals\n      ")]),t._v(" "),n("button",{staticClass:"meal-btn wide-btn",attrs:{id:"button-meal-15"},on:{click:function(e){return t.setMealCount(15)}}},[t._v("\n        15 meals\n      ")])]),t._v(" "),n("div",{staticClass:"button-row"},[n("button",{staticClass:"meal-btn wide-btn",attrs:{id:"button-meal-20"},on:{click:function(e){return t.setMealCount(20)}}},[t._v("\n        20 meals\n      ")]),t._v(" "),n("button",{staticClass:"meal-btn wide-btn",attrs:{id:"button-meal-25"},on:{click:function(e){return t.setMealCount(25)}}},[t._v("\n        25 meals\n      ")]),t._v(" "),n("button",{staticClass:"meal-btn wide-btn",attrs:{id:"button-meal-30"},on:{click:function(e){return t.setMealCount(30)}}},[t._v("\n        30 meals\n      ")])])]),t._v(" "),n("div",{staticClass:"total-count"},[n("p",[t._v("Total: $"+t._s(t.mealPrice))])]),t._v(" "),n("button",{staticClass:"ms-button-wide ms-outlined-button meal-button ms-button–arrow ms-button-arrow-left mobile-hidden",on:{click:t.previousStep}},[t._v("\n    Back\n  ")]),t._v(" "),n("button",{staticClass:"ms-button-wide ms-filled-button meal-button ms-button–arrow ms-button-arrow-right",attrs:{id:"nxt-stp"},on:{click:t.nextStep}},[t._v("\n    Proceed\n  ")])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"little-header"},[n("strong",[t._v("Enter the amount of meals")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"little-header other-option"},[n("strong",[t._v("Or use a shortcut")])])}],!1,null,"6bc451b4",null);e.default=component.exports}}]);