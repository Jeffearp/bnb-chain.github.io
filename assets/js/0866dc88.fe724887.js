"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[2980],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},87157:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={},l="How to use Ledger with Binance Extension Wallet",i={unversionedId:"wallet/extension/ledger",id:"wallet/extension/ledger",title:"How to use Ledger with Binance Extension Wallet",description:"Binance Extension Wallet v1.121.1 is released and verified on Firefox and Chrome with Ledger Nano S",source:"@site/docs/wallet/extension/ledger.md",sourceDirName:"wallet/extension",slug:"/wallet/extension/ledger",permalink:"/docs/wallet/extension/ledger",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/wallet/extension/ledger.md",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Connect to Ledger Nano S Hardware Wallet</strong>",id:"connect-to-ledger-nano-s-hardware-wallet",level:2},{value:"Sign Transaction with Ledger",id:"sign-transaction-with-ledger",level:2},{value:"Interact with dApp",id:"interact-with-dapp",level:2},{value:"Have Connection Issues?",id:"have-connection-issues",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-use-ledger-with-binance-extension-wallet"},"How to use Ledger with Binance Extension Wallet"),(0,o.kt)("p",null,"Binance Extension Wallet v1.121.1 is released and verified on ",(0,o.kt)("strong",{parentName:"p"},"Firefox and Chrome")," with Ledger Nano S"),(0,o.kt)("h2",{id:"connect-to-ledger-nano-s-hardware-wallet"},(0,o.kt)("strong",{parentName:"h2"},"Connect to Ledger Nano S Hardware Wallet")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What you need:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://shop.ledger.com/products/ledger-nano-s"},"Ledger Nano S")," or ",(0,o.kt)("a",{parentName:"li",href:"https://shop.ledger.com/pages/ledger-nano-x"},"Ledger nano X")),(0,o.kt)("li",{parentName:"ul"},"Up to date Chrome or Firefox installed"),(0,o.kt)("li",{parentName:"ul"},"Binance Extension wallet v1.21.1 installed")),(0,o.kt)("p",null,"Next:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Your first step is to plug your",(0,o.kt)("a",{parentName:"li",href:"https://shop.ledger.com/pages/back-to-school?r=da6d9b98e517"}," Ledger")," into your computer. Ensure it powers on and then input the pin you chose when setting up your ledger."),(0,o.kt)("li",{parentName:"ol"},"Select and open the Ethereum Application. If you haven't installed Ethereum Application, please read this ",(0,o.kt)("a",{parentName:"li",href:"https://docs.bnbchain.org/smart-chain/wallet/ledger.html#app-installation-instructions"},"guide")),(0,o.kt)("li",{parentName:"ol"},"Enabling contract data for BEP20. The first item in the settings menu is \u201cContract Data\u201d. Push down both buttons to select it. Once you have set your ledger up like this the first time, you won\u2019t have to do it again each time you want to use it with Binance Extension wallet."),(0,o.kt)("li",{parentName:"ol"},'Open BNB Chain Extension Wallet and select "BNB Smart Chain" network'),(0,o.kt)("li",{parentName:"ol"},'Choose "Hardware Wallet" in Settings. Then, click on "Connect"')),(0,o.kt)("img",{src:"https://lh3.googleusercontent.com/cl6u_s0KmvaoDLGOgGRAOZAdRWBVEqwVVBqJyuKWfj5qe6mFoaOkJj0RBUr3lGCfyTbl-LGMtSsGGZeDmXZEZriKzhmJeTgAIxMVXDV-9eL8LdMEZoElvDJxBkRv_eCQXFK2U0g_"}),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},'Choose HD Path. Use "Legacy" by default')),(0,o.kt)("img",{src:"https://lh3.googleusercontent.com/3a6U0ixzPh7ONtHBxmwqak1zDW3oCMOHRs4b8yFbg3yONP1wwzwM4nNpLeRVPkrgTEospxBobHkfxohq4WaHnBtnbVnX4pEJdEk-pQ26hm5NlxYe6ER_wAi9TEWy2I9a9kr7K80U",alt:"img",style:{zoom:"50%"}}),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Finally, you can see a new account with ",(0,o.kt)("inlineCode",{parentName:"li"},"LEDGER")," tag")),(0,o.kt)("img",{src:"https://lh6.googleusercontent.com/AVcK7gB6q8NC68wme8jJokOxtc5RuZVVm7nhp_Om6255reIrR51OvKm559n6-xZ-Bg6vUhlZHhySjdovhwVwx8ZS0LpJWXwbIIQYWvUKdddEFntQbJNK0qHRUGM13fUrDoAdGiTY",alt:"img",style:{zoom:"50%"}}),(0,o.kt)("p",null,"!!! Warning\nPlease note you cannot use Ledger account for BNB Chain network. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You are connected!")),(0,o.kt)("h2",{id:"sign-transaction-with-ledger"},"Sign Transaction with Ledger"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Connect Ledger and open the Ethereum Application")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Submit a transaction"))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://binance.ghost.io/content/images/2020/12/image-5.png",alt:"img"})),(0,o.kt)("p",null,"3.Review and sign this transaction on Ledger"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/WLMkvp9OjNtrGtAljcMdHc-zoSbE6OIdI8N6promMcUvDo4xnAdLlz2PQVPY3vCuu06tWwB6hgzxQfSJnOtM1qfXEmbrkBW9Mjmf8z5Xdq7E5D-AhKROGvijf0oAm3U3kP42Y4zg",alt:"img"})),(0,o.kt)("h2",{id:"interact-with-dapp"},"Interact with dApp"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/4XlT70gWJvCQ-mtiDQIkjc3p4kdwSnAz4FDyCRWfFkaUqq7KqT65rQR7Tm72MkjA8tT4_9LXnduh0ZVsAlsWtLkU84QqreEnnmEhVzZGPsRn4dFdJJzXsnYoTFDubn2Ulc4xeF8B",alt:"img"})),(0,o.kt)("h2",{id:"have-connection-issues"},"Have Connection Issues?"),(0,o.kt)("p",null,"Please read this FAQ: ",(0,o.kt)("a",{parentName:"p",href:"https://support.ledger.com/hc/en-us/articles/115005165269-Connection-issues-with-Windows-or-Linux"},"https://support.ledger.com/hc/en-us/articles/115005165269-Connection-issues-with-Windows-or-Linux")))}d.isMDXComponent=!0}}]);