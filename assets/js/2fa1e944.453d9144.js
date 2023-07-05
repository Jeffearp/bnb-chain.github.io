"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[3819],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>v});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,v=u["".concat(d,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(v,i(i({ref:t},s),{},{components:a})):n.createElement(v,i({ref:t},s))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},74115:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(83117),r=(a(67294),a(3905));const o={sidebar_label:"Create Validator",sidebar_position:2,hide_table_of_contents:!1},i="Create Validator",l={unversionedId:"validator/create-val",id:"validator/create-val",title:"Create Validator",description:"Create a mining account",source:"@site/docs/validator/create-val.md",sourceDirName:"validator",slug:"/validator/create-val",permalink:"/docs/validator/create-val",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/validator/create-val.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Create Validator",sidebar_position:2,hide_table_of_contents:!1},sidebar:"bscSideBar",previous:{title:"Overview",permalink:"/docs/validator/overview"},next:{title:"Run Validator",permalink:"/docs/validator/run-val"}},d={},c=[{value:"Create a mining account",id:"create-a-mining-account",level:2},{value:"Create a voting key",id:"create-a-voting-key",level:2},{value:"Become a Validator Candidate",id:"become-a-validator-candidate",level:3},{value:"Running a Validator",id:"running-a-validator",level:3}],s={toc:c},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-validator"},"Create Validator"),(0,r.kt)("h2",{id:"create-a-mining-account"},"Create a mining account"),(0,r.kt)("p",null,"You need to create an account that represents a key pair first. Use the following command to create a new account and set a password for that account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"geth account new --datadir ./node\n")),(0,r.kt)("p",null,"This command will return the public address and the path to your private key. BACKUP of the keyfile is necessary!"),(0,r.kt)("p",null,"If you already have an account, use the seed phrase to recover it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"geth account import --datadir ./node\n")),(0,r.kt)("h2",{id:"create-a-voting-key"},"Create a voting key"),(0,r.kt)("p",null,"You are incentivized to set a voting key which will be used for fast finality voting. Voters will receive due rewards."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"geth bls account new --datadir ./node\n")),(0,r.kt)("p",null,"This command will create a bls wallet and generate a voting key. During the process, you will need to set the wallet password and another password used to encrypt the voting key. The former is required when running the validator, and the latter is only used to import the voting key into the existing wallet. Do not disclose the voting key, otherwise it may be used for malicious voting!"),(0,r.kt)("p",null,"If you already have a voting key, create a bls wallet and use the keyfile to recover it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"geth bls wallet create --datadir ./node\ngeth bls account import <keyfile> --datadir ./node\n")),(0,r.kt)("h3",{id:"become-a-validator-candidate"},"Become a Validator Candidate"),(0,r.kt)("p",null,"You need use ",(0,r.kt)("strong",{parentName:"p"},"bnbcli")," binary to send ",(0,r.kt)("strong",{parentName:"p"},"create-validator")," transaction, thus to declare the candidacy."),(0,r.kt)("p",null,"Use ",(0,r.kt)("strong",{parentName:"p"},"bnbcli")," to create an account or recover an account, make sure the account get more than 10000 BNB."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"## Command for create validator on mainnet\nbnbcli staking bsc-create-validator \\\n--side-cons-addr {mining account} \\\n--side-vote-addr {validator vote pub key} \\\n--side-fee-addr {wallet address on BSC} \\\n--address-delegator {wallet address on BC} \\\n--side-chain-id bsc \\\n--amount 2000000000:BNB \\\n--commission-rate {10000000 represent 10%} \\\n--commission-max-rate {20000000 represent 20%} \\\n--commission-max-change-rate {500000000 represent 5%} \\\n--moniker {validator name} \\\n--details {validator detailed description} \\\n--identity {keybase identity} \\\n--website {website for validator} \\\n--from {key name} \\\n--chain-id Binance-Chain-Tigris \\\n--node https://dataseed5.defibit.io:443\n\n## Command for create validator on testnet\ntbnbcli staking bsc-create-validator \\\n--side-cons-addr {mining account} \\\n--side-vote-addr {validator vote pub key} \\\n--side-fee-addr {wallet address on BSC} \\\n--address-delegator {wallet address on BC} \\\n--side-chain-id chapel \\\n--amount 1000000000:BNB \\\n--commission-rate {10000000 represent 10%} \\\n--commission-max-rate {20000000 represent 20%} \\\n--commission-max-change-rate {10000000 represent 1%} \\\n--moniker {validator name} \\\n--details {validator detailed description} \\\n--identity {keybase identity} \\\n--website {website for validator} \\\n--from {key name} \\\n--chain-id Binance-Chain-Ganges \\\n--node=http://data-seed-pre-1-s3.bnbchain.org:80\n")),(0,r.kt)("p",null,"Please ensure that the newly created mining account\nin the above step is assigned as the ",(0,r.kt)("strong",{parentName:"p"},"side-cons-addr"),"."),(0,r.kt)("p",null,"Go to ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.bnbchain.org/"},"explorer")," to verify your transactions."),(0,r.kt)("h3",{id:"running-a-validator"},"Running a Validator"),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"run-val"},"Running as Validator")," to start a real running validator."))}p.isMDXComponent=!0}}]);