(window["webpackJsonpsocket-test"]=window["webpackJsonpsocket-test"]||[]).push([[4],{100:function(e,t){},103:function(e,t,a){},104:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(10),s=a(11),r=a(13),c=a(12),l=a(14),o=a(0),i=a.n(o),m=a(7),u=a(18),d=a(20),v=a.n(d),p=a(28),E=a(75),f=a.n(E),g=a(76),b=a.n(g),h=(a(103),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).startSocket=function(e){e!==a.state.socketUrl&&""!==a.state.socketUrl&&(a.socket.close(),a.setState({message:[]})),a.setState({socketUrl:e}),a.socket=b()(e,{transports:["websocket"]}),a.socket.on("connect",function(){var e=Object(p.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({status:!0,connectError:!1});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),a.socket.on("error",(function(e){console.log(e),a.setState({error:e,status:!1})})),a.socket.on("desconnect",(function(e){console.log(e),a.setState({error:e,status:!1})})),a.socket.on("connect_error",(function(e){console.log(e),a.setState({error:e,status:!1})})),a.connectEvent(a.state.data.event),a.saveSocket()},a.connectEvent=function(e){a.setState({sendEvError:!1}),e.map((function(e){return!0!==e.status||a.socket.on(e.name,function(){var t=Object(p.a)(v.a.mark((function t(n){var s,r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=a.isJson(n),(r=a.state.message).push({text:s?a.DataReturn(n):n,eventName:e.name,is_JSON:s,type:"receiver"}),a.setState({message:r}),a.scrollDown();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}))},a.isJson=function(e){try{return"object"===typeof e||"object"===typeof new Function("return ["+e+"];")()}catch(t){return!1}},a.addEvent=function(e){if(a.setState({message:[]}),!!a.socket&&(a.socket.connected||a.state.status||0!==a.state.message.length)){a.setState({connectError:!1});var t=a.state.data;if(t.event.find((function(t){return t.name===e})))return alert("event name already added");t.event.push({name:e,status:!0}),a.setState({data:t,newevent:""}),a.connectEvent(t.event)}else a.setState({connectError:!0})},a.handler=function(e){return a.setState(Object(u.a)({},e.target.name,e.target.value))},a.removeItem=function(e){var t=a.state.data,n=t.event.findIndex((function(t){return t.name===e.name}));t.event.splice(n,1),a.setState({data:t,message:[]}),a.socket.close(),a.startSocket(a.state.Url)},a.saveSocket=function(){var e=a.state.data;e.url=a.state.Url,a.props.update(e)},a.sendMesssage=function(){var e=!!a.socket&&(a.socket.connected||a.state.status||0!==a.state.message.length);if(a.state.sendEvent&&""!==a.state.messageText&&e){a.setState({sendEvError:!1,connectError:!1}),a.socket.emit(a.state.sendEvent,a.state.messageText);var t=a.isJson(a.state.messageText),n=a.state.message;n.push({text:t?a.DataReturn(a.state.messageText):a.state.messageText,sendEvent:a.state.sendEvent,is_JSON:t,type:"sender"}),a.setState({message:n}),a.scrollDown()}else e?a.setState({sendEvError:!0}):a.setState({connectError:!0})},a.clearAll=function(){a.setState({sendEvent:"",messageText:"",sendEvError:!1})},a.changeEventStatus=function(e,t){var n=a.state.data,s=n.event.findIndex((function(t){return t.name===e.name}));n.event[s].status=t.target.checked,a.setState({data:n,message:[]}),a.closeSocket(),a.startSocket(a.state.Url)},a.scrollDown=function(){setTimeout((function(){return document.getElementById("scroll").scrollIntoView(!1)}),100)},a.closeSocket=function(){!!a.socket&&(a.socket.connected||a.state.status||0!==a.state.message.length)&&a.socket.close(),a.setState({status:!1,message:[]})},a.state={data:{},status:!1,newevent:"",Url:"",error:"",sendEvent:"",messageText:"",message:[],socketUrl:"",sendEvError:!1,connectError:!1},a.socket=a.props.socketName,a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({data:this.props.data,Url:this.props.data.url})}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){return e.show!==this.state.data.id&&this.setState({status:!1}),!0}},{key:"DataReturn",value:function(e){return"object"===typeof e?e:new Function("return "+e)()}},{key:"componentWillUnmount",value:function(){this.closeSocket()}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.status,s=t.newevent,r=t.Url,c=t.error,l=t.sendEvent,o=t.messageText,m=t.message,u=t.sendEvError,d=t.connectError,v=this.props,p=v.show,E=v.socketName,g=a.event?a.event:[],b=!!this.socket&&(this.socket.connected||n||0!==m.length);return i.a.createElement("div",{className:(p===a.id?"":"d-none")+" tabitem"},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col"},i.a.createElement("label",{htmlFor:"socketurl"+E,className:"m-0 d-none"}),i.a.createElement("div",{className:"input-group mb-1"},i.a.createElement("div",{className:"input-group-prepend"},i.a.createElement("div",{className:(d?"border-danger":"")+" input-group-text",id:"btnGroupAddon"},i.a.createElement("i",{className:(b?"text-success":"text-gray")+" material-icons"},"signal_wifi_4_bar"))),i.a.createElement("input",{id:"socketurl"+E,type:"text",className:(d?"border-danger":"")+" form-control",placeholder:"Socket Url",value:r,name:"Url",onChange:this.handler}),i.a.createElement("div",{className:"input-group-append"},b?i.a.createElement("button",{className:"btn btn-silver",type:"button",id:"button-addon2",onClick:function(){return e.closeSocket()}},"Disconnect"):i.a.createElement("button",{className:"btn btn-primary",type:"button",id:"button-addon2",onClick:function(){return e.startSocket(r)}},"Connect"))))),i.a.createElement("div",{className:" row mx-n1"},i.a.createElement("div",{className:"col-sm-4 col-md-3 p-1"},i.a.createElement("div",{className:"p-2 bg-light leftside shadow-sm"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"senedvent"+E},"Send Message"),i.a.createElement("input",{id:"senedvent"+E,className:(u?"border-danger":"")+" form-control",placeholder:"Event Name",value:l,name:"sendEvent",onChange:this.handler,autoComplete:"false"})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"messagetxt"+E},"Message"),i.a.createElement("textarea",{id:"messagetxt"+E,className:(u?"border-danger":"")+" form-control",rows:"5",placeholder:"Message",name:"messageText",value:o,onChange:this.handler}),u&&i.a.createElement("div",{className:"invalid-feedback d-block"},"Please enter valid value in send event or message field")),i.a.createElement("div",{className:"row mx-n1 "},i.a.createElement("div",{className:"col-8 col-sm-7 mb-1 p-1"},i.a.createElement("button",{className:"btn btn-primary btn-block px-1",onClick:this.sendMesssage},"Send Message")),i.a.createElement("div",{className:"col-4 col-sm-5 mb-1 p-1"},i.a.createElement("button",{className:"btn btn-danger btn-block",onClick:this.clearAll},"Clear")),i.a.createElement("div",{className:"col-12 p-1"},i.a.createElement("button",{className:"btn btn-white text-danger p-0",onClick:function(){return e.setState({message:[]})}},"Clear all message"))),i.a.createElement("hr",{className:"my-1"}),i.a.createElement("label",{htmlFor:"recevent"+E},"Receiver Event"),i.a.createElement("div",{className:"input-group "},i.a.createElement("input",{id:"recevent"+E,type:"text",className:"form-control",value:s,name:"newevent",placeholder:"Event Name",onChange:this.handler}),i.a.createElement("div",{className:"input-group-append"},i.a.createElement("button",{className:"btn btn-silver",type:"button",onClick:function(){return e.addEvent(s)}},"Add"))),i.a.createElement("ul",{className:"list-group mt-2"},g.map((function(t,a){return i.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center p-2",key:a},i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement("label",{className:"m-0 checkboxItem"},i.a.createElement("input",{type:"checkbox",defaultChecked:t.status,onChange:function(a){return e.changeEventStatus(t,a)}}),i.a.createElement("i",{className:"material-icons"},"stop")),t.name),i.a.createElement("span",{className:"d-flex cursor"},i.a.createElement("i",{className:"material-icons",onClick:function(){return e.removeItem(t)}},"clear")))}))))),i.a.createElement("div",{className:"col-sm-8 col-md-9 p-1 "},i.a.createElement("div",{className:"p-2 bg-light shadow-sm h-100"},i.a.createElement("div",{className:"mesgs"},m.map((function(e,t){return"receiver"===e.type?i.a.createElement("div",{className:"incoming_msg",key:t},i.a.createElement("div",{className:"userImage"},i.a.createElement("span",null,"RE")),i.a.createElement("div",{className:"msgbox"},e.is_JSON?i.a.createElement("pre",null,i.a.createElement(f.a,{src:e.text,collapsed:!0})):i.a.createElement("pre",null,i.a.createElement("code",null,e.text)),i.a.createElement("span",{className:"info_data"},e.eventName)," ")):i.a.createElement("div",{className:"outgoing_msg",key:t},i.a.createElement("div",{className:"sent_msg"},e.is_JSON?i.a.createElement("pre",null,i.a.createElement(f.a,{src:e.text,collapsed:!0})):i.a.createElement("pre",null,i.a.createElement("code",null,e.text)),i.a.createElement("span",{className:"info_data"},e.sendEvent)," "),i.a.createElement("div",{className:"userImage"},i.a.createElement("span",null,"SE")))})),b?"":i.a.createElement("pre",{className:"alert alert-danger",role:"alert"},JSON.stringify(c||"Call Socket Url")),i.a.createElement("div",{id:"scroll"})))))))}}]),t}(o.Component));var k=Object(m.b)((function(e){return{global:e.Global}}))(h),N=(a(104),[{id:0,url:"https://socket-io-chat.now.sh/",event:[{name:"new message",status:!0}]}]),S=function(e){function t(){var e,a;Object(n.a)(this,t);for(var s=arguments.length,l=new Array(s),o=0;o<s;o++)l[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={DataVal:N,active:""},a.removeTab=function(e){var t=a.state.DataVal,n=t.findIndex((function(t){return t.id===e.id}));if(t.splice(n,1),a.setState({DataVal:t}),-1===t.findIndex((function(e){return e.id===a.state.active}))){var s=t.length>1?t[n-1].id:t[0].id;setTimeout((function(){return a.activeTab(s)}),100)}else{var r=t[t.findIndex((function(e){return e.id===a.state.active}))].id;setTimeout((function(){return a.activeTab(r)}),100)}},a.addNewTab=function(){var e=a.state.DataVal,t=Math.random();e.push({url:"",event:[],id:t}),a.setState({DataVal:e,active:t})},a.updateData=function(e){var t=a.state.DataVal,n=t.findIndex((function(t){return t.id===e.id}));t[n].url=e.url,a.setState({DataVal:t})},a.activeTab=function(e){return a.setState({active:e})},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.state.DataVal.lenght>0?this.setState({active:this.state.DataVal[0].id}):this.addNewTab()}},{key:"render",value:function(){var e=this,t=this.state,a=t.DataVal,n=t.active;return i.a.createElement("div",{className:"container-fluid pt-2 pb-2"},i.a.createElement("div",{className:"card border-0"},i.a.createElement("div",{className:"card-header p-0 shadow-none bg-light"},i.a.createElement("div",{className:"tabboxs d-flex flex-row justify-content-start align-items-stretch"},i.a.createElement("ul",{className:"tabs d-flex flex-nowrap m-0 p-0"},a.map((function(t,s){return i.a.createElement("li",{onClick:function(){return e.activeTab(t.id)},className:(n===t.id?"active":"")+" d-flex",key:t.id,title:t.url||"Socket Url"},i.a.createElement("span",null,t.url||"Socket Url"),a.length>1?i.a.createElement("i",{className:"material-icons",onClick:function(){return e.removeTab(t)}},"clear"):"")}))),i.a.createElement("div",{className:"addtabs"},i.a.createElement("i",{className:"bg-silver text-white material-icons",onClick:this.addNewTab},"add")))),i.a.createElement("div",{className:"card-body px-0 py-3"},a.map((function(t,a){return i.a.createElement(k,{data:t,show:n,update:e.updateData,key:t.id,className:"customshow",socketName:"socket"+t.id})})))))}}]),t}(o.Component);t.default=Object(m.b)((function(e){return{global:e.Global}}))(S)}}]);
//# sourceMappingURL=4.29d1056e.chunk.js.map