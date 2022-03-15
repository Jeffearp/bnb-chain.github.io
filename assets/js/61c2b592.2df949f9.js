"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[6128],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,f=u["".concat(s,".").concat(h)]||u[h]||p[h]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6939:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={sidebar_label:"Node Maintenance",hide_table_of_contents:!1,sidebar_position:2},s="Node Maintainence",c={unversionedId:"validator/node-maintenance",id:"validator/node-maintenance",isDocsHomePage:!1,title:"Node Maintainence",description:"Peer Discovery",source:"@site/docs/validator/node-maintenance.md",sourceDirName:"validator",slug:"/validator/node-maintenance",permalink:"/docs/validator/node-maintenance",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/docs/docs/validator/node-maintenance.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Node Maintenance",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"Best Practice",permalink:"/docs/validator/best-practice"},next:{title:"Common Problems With Connectivity",permalink:"/docs/validator/commonproblems"}},d=[{value:"Peer Discovery",id:"peer-discovery",children:[],level:3},{value:"Binary",id:"binary",children:[],level:3},{value:"Storage",id:"storage",children:[],level:3},{value:"Diff Sync",id:"diff-sync",children:[],level:3},{value:"Light Storage",id:"light-storage",children:[],level:3},{value:"Upgrade Geth",id:"upgrade-geth",children:[],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"node-maintainence"},"Node Maintainence"),(0,a.kt)("h3",{id:"peer-discovery"},"Peer Discovery"),(0,a.kt)("p",null,"The bootstrap nodes will be enhanced in the short future. So far, a discovery http service will provide some stable public p2p peers for syncing. Please visit ",(0,a.kt)("a",{parentName:"p",href:"https://api.binance.org/v1/discovery/peers"},"https://api.binance.org/v1/discovery/peers")," to get dynamic peer info. You can append the peer info to the ",(0,a.kt)("inlineCode",{parentName:"p"},"StaticNodes")," in the config.toml to enhance the networking of the full nodes. To avoid crowded networking, the discovery service will change the peer info from time to time, try fetch new ones if the connected peers of full node are too few."),(0,a.kt)("h3",{id:"binary"},"Binary"),(0,a.kt)("p",null,"All the clients are suggested to upgrade to the latest release. The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/binance-chain/bsc/releases/latest"},"latest version")," is supposed to be more stable and get better performance."),(0,a.kt)("h3",{id:"storage"},"Storage"),(0,a.kt)("p",null,"According to the test, the performance of a fullnode will degrade when the storage size exceeds 1.5T. We suggest the fullnode always keep light storage by pruning the storage. "),(0,a.kt)("p",null,"How to prune:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Stop the BSC node."),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"nohup geth snapshot prune-state --datadir {the data dir of your bsc node} &"),". It will take 3-5 hours to finish."),(0,a.kt)("li",{parentName:"ol"},"Start the node once it is done.")),(0,a.kt)("p",null,"The maintainers should always have a few backup nodes."),(0,a.kt)("p",null,"The hardware is also important, ",(0,a.kt)("strong",{parentName:"p"},"make sure the SSD meets: 2T GB of free disk space, solid-state drive(SSD), gp3, 8k IOPS, 250MB/S throughput, read latency <1ms"),"."),(0,a.kt)("h3",{id:"diff-sync"},"Diff Sync"),(0,a.kt)("p",null,"The diffsync protocol rolled out as a stable feature in release v1.1.5. Diff sync improves the syncing speed by 60%\uff5e70% approximately according to the test. All full nodes are suggested to enable it by adding ",(0,a.kt)("inlineCode",{parentName:"p"},"--diffsync")," in the starting command.  "),(0,a.kt)("h3",{id:"light-storage"},"Light Storage"),(0,a.kt)("p",null,"When the node crashes or been force killed, the node will sync from a block that was a few minutes or a few hours ago. This is because the state in memory is not persisted into the database in real time, and the node needs to replay blocks from the last checkpoint once it start. The replaying time dependents on the configuration ",(0,a.kt)("inlineCode",{parentName:"p"},"TrieTimeout")," in the config.toml.  We suggest you raise it if you can tolerate with long replaying time, so the node can keep light storage."),(0,a.kt)("h2",{id:"upgrade-geth"},"Upgrade Geth"),(0,a.kt)("p",null,"Please read ",(0,a.kt)("a",{parentName:"p",href:"/docs/validator/upgrade-fullnode"},"this guide")))}u.isMDXComponent=!0}}]);