import{d as F,B as x,C as _,a as v,b as P,A as b,s as z,r as y,p as w,o as n,h as r,q as $,D as E,E as D,i as e,t as d,j as I,v as O,x as a,m,k as u,F as g,n as k,y as S,z as U,G as N}from"./index-96214b1b.js";const C="/user",L=F({id:"profile",state:()=>({peers:[],stats:{},statsEnabled:!1,user:{},filter:"",pageSize:10,pageOffset:0,pages:[],fetching:!1}),getters:{FindPeers:t=>l=>t.peers.find(i=>i.Identifier===l),CountPeers:t=>t.peers.length,FilteredPeerCount:t=>t.FilteredPeers.length,Peers:t=>t.peers,FilteredPeers:t=>t.filter?t.peers.filter(l=>l.DisplayName.includes(t.filter)||l.Identifier.includes(t.filter)):t.peers,FilteredAndPagedPeers:t=>t.FilteredPeers.slice(t.pageOffset,t.pageOffset+t.pageSize),isFetching:t=>t.fetching,hasNextPage:t=>t.pageOffset<t.FilteredPeerCount-t.pageSize,hasPrevPage:t=>t.pageOffset>0,currentPage:t=>t.pageOffset/t.pageSize+1,Statistics:t=>l=>t.statsEnabled&&l in t.stats?t.stats[l]:x(),hasStatistics:t=>t.statsEnabled},actions:{afterPageSizeChange(){this.pageOffset=0,this.calculatePages()},calculatePages(){let t=1;this.pages=[];for(let l=0;l<this.FilteredPeerCount;l+=this.pageSize)this.pages.push(t++)},gotoPage(t){this.pageOffset=(t-1)*this.pageSize,this.calculatePages()},nextPage(){this.pageOffset+=this.pageSize,this.calculatePages()},previousPage(){this.pageOffset-=this.pageSize,this.calculatePages()},setPeers(t){this.peers=t,this.fetching=!1},setUser(t){this.user=t,this.fetching=!1},setStats(t){t||(this.stats={},this.statsEnabled=!1),this.stats=t.Stats,this.statsEnabled=t.Enabled},async LoadPeers(){this.fetching=!0;let t=_().user.Identifier;return v.get(`${C}/${P(t)}/peers`).then(this.setPeers).catch(l=>{this.setPeers([]),console.log("Failed to load user peers for ",t,": ",l),b({title:"Backend Connection Failure",text:"Failed to load user peers!"})})},async LoadStats(){this.fetching=!0;let t=_().user.Identifier;return v.get(`${C}/${P(t)}/stats`).then(this.setStats).catch(l=>{this.setStats(void 0),console.log("Failed to load peer stats: ",l),b({title:"Backend Connection Failure",text:"Failed to load peer stats!"})})},async LoadUser(){this.fetching=!0;let t=_().user.Identifier;return v.get(`${C}/${P(t)}`).then(this.setUser).catch(l=>{this.setUser({}),console.log("Failed to load user for ",t,": ",l),b({title:"Backend Connection Failure",text:"Failed to load user!"})})}}}),A={class:"mt-4 row"},B={class:"col-12 col-lg-5"},V={class:"mt-2"},H={class:"col-12 col-lg-4 text-lg-end"},M={class:"form-group d-inline"},T={class:"input-group mb-3"},W=e("button",{class:"input-group-text btn btn-primary",title:"Search"},[e("i",{class:"fa-solid fa-search"})],-1),j={class:"col-12 col-lg-3 text-lg-end"},q=e("i",{class:"fa fa-plus me-1"},null,-1),G=e("i",{class:"fa fa-user"},null,-1),K=[q,G],J={class:"mt-2 table-responsive"},Q={key:0},X={key:1,id:"peerTable",class:"table table-sm"},Y=e("th",{scope:"col"},[e("input",{id:"flexCheckDefault",class:"form-check-input",title:"Select all",type:"checkbox",value:""})],-1),Z=e("th",{scope:"col"},null,-1),R={scope:"col"},ee={scope:"col"},te={key:0,scope:"col"},se={scope:"col"},ie=e("th",{scope:"col"},null,-1),ae=e("th",{scope:"row"},[e("input",{id:"flexCheckDefault",class:"form-check-input",type:"checkbox",value:""})],-1),le={class:"text-center"},oe={key:0,class:"text-danger"},ne=["title"],re={key:1,class:"text-warning"},de=["title"],ce=["title"],ue=["title"],he={key:0},fe={key:0},pe=e("span",{class:"badge rounded-pill bg-success"},[e("i",{class:"fa-solid fa-link"})],-1),ge=["title"],_e={key:1},ve=e("span",{class:"badge rounded-pill bg-light"},[e("i",{class:"fa-solid fa-link-slash"})],-1),Pe=[ve],be={class:"text-center"},me=["onClick"],ke=e("i",{class:"fas fa-eye me-2"},null,-1),Se=[ke],Ce=["onClick"],ye=e("i",{class:"fas fa-cog"},null,-1),$e=[ye],Ie=e("hr",null,null,-1),Fe={class:"mt-3"},xe={class:"row"},ze={class:"col-6"},we={class:"pagination pagination-sm"},Ee=["onClick"],De={class:"col-6"},Oe={class:"form-group row"},Ue={class:"col-sm-6 col-form-label text-end",for:"paginationSelector"},Ne={class:"col-sm-6"},Le=e("option",{value:"10"},"10",-1),Ae=e("option",{value:"25"},"25",-1),Be=e("option",{value:"50"},"50",-1),Ve=e("option",{value:"100"},"100",-1),He={value:"999999999"},Te={__name:"ProfileView",setup(t){const l=z(),i=L(),p=y(""),h=y("");return w(async()=>{await i.LoadUser(),await i.LoadPeers(),await i.LoadStats()}),(c,o)=>(n(),r(g,null,[$(E,{peerId:p.value,visible:p.value!=="",onClose:o[0]||(o[0]=s=>p.value="")},null,8,["peerId","visible"]),$(D,{peerId:h.value,visible:h.value!=="",onClose:o[1]||(o[1]=s=>h.value="")},null,8,["peerId","visible"]),e("div",A,[e("div",B,[e("h2",V,d(c.$t("profile.h2-clients")),1)]),e("div",H,[e("div",M,[e("div",T,[I(e("input",{"onUpdate:modelValue":o[2]||(o[2]=s=>a(i).filter=s),class:"form-control",placeholder:"Search...",type:"text",onKeyup:o[3]||(o[3]=(...s)=>a(i).afterPageSizeChange&&a(i).afterPageSizeChange(...s))},null,544),[[O,a(i).filter]]),W])])]),e("div",j,[a(l).Setting("SelfProvisioning")?(n(),r("a",{key:0,class:"btn btn-primary ms-2",href:"#",title:"Add a peer",onClick:o[4]||(o[4]=m(s=>h.value="#NEW#",["prevent"]))},K)):u("",!0)])]),e("div",J,[a(i).CountPeers===0?(n(),r("div",Q,[e("h4",null,d(c.$t("profile.noPeerSelect.h4")),1),e("p",null,d(c.$t("profile.noPeerSelect.message")),1)])):u("",!0),a(i).CountPeers!==0?(n(),r("table",X,[e("thead",null,[e("tr",null,[Y,Z,e("th",R,d(c.$t("profile.tableHeadings.name")),1),e("th",ee,d(c.$t("profile.tableHeadings.ip")),1),a(i).hasStatistics?(n(),r("th",te,d(c.$t("profile.tableHeadings.stats")),1)):u("",!0),e("th",se,d(c.$t("profile.tableHeadings.interface")),1),ie])]),e("tbody",null,[(n(!0),r(g,null,k(a(i).FilteredAndPagedPeers,s=>(n(),r("tr",{key:s.Identifier},[ae,e("td",le,[s.Disabled?(n(),r("span",oe,[e("i",{class:"fa fa-circle-xmark",title:s.DisabledReason},null,8,ne)])):u("",!0),!s.Disabled&&s.ExpiresAt?(n(),r("span",re,[e("i",{class:"fas fa-hourglass-end",title:s.ExpiresAt},null,8,de)])):u("",!0)]),e("td",null,[s.DisplayName?(n(),r("span",{key:0,title:s.Identifier},d(s.DisplayName),9,ce)):(n(),r("span",{key:1,title:s.Identifier},d(c.$filters.truncate(s.Identifier,10)),9,ue))]),e("td",null,[(n(!0),r(g,null,k(s.Addresses,f=>(n(),r("span",{key:f,class:"badge rounded-pill bg-light"},d(f),1))),128))]),a(i).hasStatistics?(n(),r("td",he,[a(i).Statistics(s.Identifier).IsConnected?(n(),r("div",fe,[pe,N(),e("span",{title:c.peers.Statistics(s.Identifier).LastHandshake},"Connected",8,ge)])):(n(),r("div",_e,Pe))])):u("",!0),e("td",null,d(s.InterfaceIdentifier),1),e("td",be,[e("a",{href:"#",title:"Show peer",onClick:m(f=>p.value=s.Identifier,["prevent"])},Se,8,me),e("a",{href:"#",title:"Edit peer",onClick:m(f=>h.value=s.Identifier,["prevent"])},$e,8,Ce)])]))),128))])])):u("",!0)]),Ie,e("div",Fe,[e("div",xe,[e("div",ze,[e("ul",we,[e("li",{class:S([{disabled:a(i).pageOffset===0},"page-item"])},[e("a",{class:"page-link",onClick:o[5]||(o[5]=(...s)=>a(i).previousPage&&a(i).previousPage(...s))},"«")],2),(n(!0),r(g,null,k(a(i).pages,s=>(n(),r("li",{key:s,class:S([{active:a(i).currentPage===s},"page-item"])},[e("a",{class:"page-link",onClick:f=>a(i).gotoPage(s)},d(s),9,Ee)],2))),128)),e("li",{class:S([{disabled:!a(i).hasNextPage},"page-item"])},[e("a",{class:"page-link",onClick:o[6]||(o[6]=(...s)=>a(i).nextPage&&a(i).nextPage(...s))},"»")],2)])]),e("div",De,[e("div",Oe,[e("label",Ue,d(c.$t("general.pagination.size"))+":",1),e("div",Ne,[I(e("select",{"onUpdate:modelValue":o[7]||(o[7]=s=>a(i).pageSize=s),class:"form-select",onClick:o[8]||(o[8]=s=>a(i).afterPageSizeChange())},[Le,Ae,Be,Ve,e("option",He,d(c.$t("general.pagination.all")),1)],512),[[U,a(i).pageSize,void 0,{number:!0}]])])])])])])],64))}};export{Te as default};
