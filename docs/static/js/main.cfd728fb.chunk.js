(this.webpackJsonpproductividad=this.webpackJsonpproductividad||[]).push([[0],{210:function(e,t,a){},212:function(e,t,a){},232:function(e,t,a){},342:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(33),r=a.n(s),i=(a(210),a(16)),o=a.n(i),l=a(26),d=a(17),u=(a(212),a(213),a(20)),j=a.n(u),h=a(357),b=a(354),x=a(188),p=a(364),m=a(361),O=a(112),f=a(34),v=a(358),g=a(360),T=a(351),N=a(352),k=a(353),C=(a(232),a(4)),w=function(e){var t=e.setduration,a=e.handleduration,c=e.duration,s=e.onSubmit,r=e.show,i=e.onHide,o=e.handlesubmit,l=e.register,d=e.errors,u=e.title,j=e.tarea,h=void 0===j?null:j;return Object(n.useEffect)((function(){if(null!==h){var e=~~(h.duracion/60),a=h.duracion%60;t({minutes:e,seconds:a}),console.log("duration",c)}}),[r]),Object(C.jsx)(v.a,{show:r,onHide:i,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"",children:Object(C.jsxs)(g.a,{onSubmit:o(s),children:[Object(C.jsx)(v.a.Header,{closeButton:!0,children:Object(C.jsx)(v.a.Title,{id:"contained-modal-title-vcenter",className:"col-12 text-center font-weight-bold",children:u})}),Object(C.jsxs)(v.a.Body,{children:[Object(C.jsxs)(g.a.Group,{controlId:"tituloTarea",children:[Object(C.jsx)(g.a.Label,{className:"font-weight-bold",children:"Titulo"}),Object(C.jsx)(g.a.Control,Object(f.a)(Object(f.a)({type:"text",placeholder:"Titulo de la tarea "},l("titulo",{required:!0})),{},{defaultValue:null!==h?h.titulo:"",readOnly:null!==h})),d.titulo&&Object(C.jsx)(T.a,{variant:"danger",children:" El t\xedtulo es lo m\xe1s importante"})]}),Object(C.jsxs)(g.a.Group,{controlId:"descripcionTarea",children:[Object(C.jsx)(g.a.Label,{className:"font-weight-bold",children:"Descripci\xf3n"}),Object(C.jsx)(g.a.Control,Object(f.a)(Object(f.a)({type:"text",placeholder:"Descripci\xf3n de la tarea "},l("descripcion",{required:!0})),{},{defaultValue:null!==h?h.descripcion:""})),d.descripcion&&Object(C.jsx)(T.a,{variant:"danger",children:"No olvides agregar la descripci\xf3n"})]}),Object(C.jsx)(g.a.Label,{className:"font-weight-bold",children:"Duraci\xf3n:"}),Object(C.jsxs)(g.a.Row,{className:"text-center",children:[Object(C.jsx)(x.a,{xs:4,className:"",children:Object(C.jsx)(N.a,{onClick:function(){return t({minutes:30,seconds:0})},variant:"secondary",children:"Corta"})}),Object(C.jsx)(x.a,{xs:4,className:"",children:Object(C.jsx)(N.a,{onClick:function(){return t({minutes:45,seconds:0})},variant:"info",children:"Media"})}),Object(C.jsx)(x.a,{xs:4,className:"",children:Object(C.jsx)(N.a,{onClick:function(){return t({minutes:60,seconds:0})},variant:"danger",children:"Larga"})})]}),Object(C.jsx)("br",{}),Object(C.jsxs)(g.a.Row,{className:"center",children:[Object(C.jsx)(x.a,{sm:6,className:"",children:Object(C.jsxs)(k.a,{children:[Object(C.jsx)(k.a.Prepend,{children:Object(C.jsx)(k.a.Text,{children:"Minutos:"})}),Object(C.jsx)(g.a.Control,{onChange:a,type:"decimal",id:"minutes",placeholder:"00",value:c.minutes})]})}),Object(C.jsx)(x.a,{sm:6,className:"",children:Object(C.jsxs)(k.a,{children:[Object(C.jsx)(k.a.Prepend,{children:Object(C.jsx)(k.a.Text,{children:"Segundos:"})}),Object(C.jsx)(g.a.Control,{onChange:a,type:"decimal",id:"seconds",placeholder:"00",value:c.seconds})]})})]})]}),Object(C.jsxs)(v.a.Footer,{children:[Object(C.jsx)(N.a,{onClick:e.onHide,children:"Cerrar"}),Object(C.jsx)(N.a,{variant:"success",type:"submit",children:"Guardar"})]})]})})},y=function(e){var t=Object(n.useState)({minutes:0,seconds:0}),a=Object(d.a)(t,2),c=a[0],s=a[1],r=Object(O.a)(),i=r.register,o=r.handleSubmit,l=r.formState.errors,u=r.reset;return Object(C.jsx)(w,{title:"REGISTRAR TAREA",show:e.show,onHide:e.onHide,setduration:s,handleduration:function(e){var t=e.target,a=t.id,n=t.value;if(""===n&&(n=0),function(e){return 0}){var r="minutes"===a?Math.abs(n):c.minutes,i="seconds"===a?Math.abs(n):c.seconds;i>59&&(r+=Math.round(i/60),i%=60),r>=120&&(r=120,i=0),s({minutes:r,seconds:i})}},duration:c,onSubmit:function(t){var a=t.titulo,n=t.descripcion;j.a.post("https://api-arkon.herokuapp.com/tareas",{titulo:a,descripcion:n,minutes:c.minutes,seconds:c.seconds}).then((function(t){e.onHide(),u(),s({minutes:0,seconds:0}),e.initTareas()})).catch((function(t){e.onHide(),u(),s({minutes:0,seconds:0})}))},handlesubmit:o,register:i,errors:l})},S=a(355),M=a(367),A=a(114),R=function(e){var t=e.show,a=e.onHide,c=e.tarea,s=e.initTareas,r=e.setTiempoRestante,i=Object(n.useState)({minutes:0,seconds:0}),o=Object(d.a)(i,2),l=o[0],u=o[1],h=Object(O.a)(),b=h.register,x=h.handleSubmit,p=h.formState.errors,m=h.reset;Object(n.useEffect)((function(){}),[]);return Object(C.jsx)(w,{title:"MODIFICAR TAREA",show:t,onHide:a,setduration:u,handleduration:function(e){var t=e.target,a=t.id,n=t.value;if(""===n&&(n=0),function(e){return 0}){var c="minutes"===a?Math.abs(n):l.minutes,s="seconds"===a?Math.abs(n):l.seconds;s>59&&(c+=Math.round(s/60),s%=60),c>=120&&(c=120,s=0),u({minutes:c,seconds:s})}},duration:l,onSubmit:function(e){var t=e.titulo,n=e.descripcion;j.a.put("https://api-arkon.herokuapp.com/tareas",{titulo:t,descripcion:n,minutes:l.minutes,seconds:l.seconds,idTarea:c.id}).then((function(e){a(),m(),u({minutes:0,seconds:0}),s(),r(60*l.minutes+l.seconds)})).catch((function(e){a(),m(),u({minutes:0,seconds:0}),s()}))},handlesubmit:x,register:b,errors:p,tarea:c})},E=a(35),I=function(e){var t=e.tarea,a=e.current,n=e.eliminarTarea,c=e.innRef,s=e.provided,r=(e.iniciarTarea,e.pausar),i=e.reanudar,o=e.finalizarTarea,l=e.setModalShow,d=e.tiempoRestante,u=t.titulo,j=t.descripcion,h=t.estatus;return Object(C.jsxs)(M.a,Object(f.a)(Object(f.a)(Object(f.a)({className:"col-12 py-2 mt-2 glassMorph",ref:c},s.draggableProps),s.dragHandleProps),{},{children:[Object(C.jsxs)(b.a,{className:"pt-3",children:[Object(C.jsx)("label",{className:"col-7 pl-4 font-weight-bold ".concat(h," "),children:h}),Object(C.jsxs)(x.a,{xs:5,sm:5,className:"float-right",children:[Object(C.jsxs)(S.a,{className:"d-flex justify-content-center",children:["Pausa"===t.estatus&&Object(C.jsx)(N.a,{size:"sm",className:"",variant:"outline-secondary",onClick:function(){return i(t.id)},children:Object(C.jsx)(E.e,{})}),"Activa"===t.estatus&&Object(C.jsx)(N.a,{size:"sm",className:"",variant:"secondary",onClick:function(){return r(t.id)},children:Object(C.jsx)(E.c,{})})]}),Object(C.jsx)("label",{className:"col-xs-6 col-sm-12 text-center",children:new Date(1e3*d).toISOString().substr(11,8)})]})]}),Object(C.jsxs)(M.a.Body,{className:"py-0",children:[Object(C.jsx)(M.a.Title,{className:"col-xs-12 text-center text-uppercase font-weight-bold mb-0",children:u}),Object(C.jsx)(M.a.Text,{className:"text-muted",children:j})]}),Object(C.jsxs)(x.a,{xs:12,className:"text-right",children:[!a&&Object(C.jsxs)(N.a,{variant:"outline-warning",onClick:function(){return l(!0)},children:[Object(C.jsx)(E.d,{})," Modificar"]}),!a&&Object(C.jsxs)(N.a,{className:"ml-3",variant:"outline-danger",onClick:function(){return n(t.id)},children:[Object(C.jsx)(E.f,{})," Eliminar"]}),"Pendiente"!==t.estatus&&"Finalizada"!==t.estatus&&Object(C.jsxs)(N.a,{className:"float-right",variant:"outline-success",onClick:function(){return o(t.id)},children:[Object(C.jsx)(E.a,{})," Finalizar"]}),a&&"Pendiente"===t.estatus&&Object(C.jsxs)(N.a,{className:"float-right",variant:"outline-success",onClick:function(){return i(t.id)},children:[Object(C.jsx)(E.e,{})," Iniciar"]})]})]}))},P=function(e){var t=e.tarea,a=e.current,c=e.innRef,s=e.provided,r=e.initTareas,i=e.initTareasCompletas,o=Object(n.useState)(!1),l=Object(d.a)(o,2),u=l[0],h=l[1],b=Object(n.useState)(t.restante),x=Object(d.a)(b,2),p=x[0],m=x[1],O=Object(n.useState)(t.estatus),f=Object(d.a)(O,2),v=f[0],g=f[1];Object(n.useEffect)((function(){var e=function(e){"Activa"===t.estatus&&j.a.put("https://api-arkon.herokuapp.com/tareas/toggle",{idTarea:t.id,action:"Pausa",tiempoRestante:p}).then((function(e){})).catch((function(e){}))};return window.addEventListener("beforeunload",e),function(){window.removeEventListener("beforeunload",e)}}),[]),Object(n.useEffect)((function(){var e=setInterval((function(){"Activa"===v&&(0===p?T(t.id):m((function(e){return e-1})))}),1e3);return function(){clearInterval(e)}}));var T=function(e){j.a.put("https://api-arkon.herokuapp.com/tareas/toggle",{idTarea:e,action:"Finalizada",tiempoRestante:p}).then((function(e){g("Finalizada"),r(),i()})).catch((function(e){console.log(e)}))};return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(I,{filtro:!1,current:a,innRef:c,provided:s,tarea:t,initTareas:r,eliminarTarea:function(e){j.a.delete("https://api-arkon.herokuapp.com/tareas/".concat(e)).then((function(e){r()})).catch((function(e){}))},iniciarTarea:function(e){j.a.put("https://api-arkon.herokuapp.com/tareas/iniciar",{idTarea:e}).then((function(e){r()})).catch((function(e){}))},setModalShow:h,tiempoRestante:p,pausar:function(e){j.a.put("https://api-arkon.herokuapp.com/tareas/toggle",{idTarea:e,action:"Pausa",tiempoRestante:p}).then((function(e){r(),g("Pausa")})).catch((function(e){console.log(e)}))},reanudar:function(e){j.a.put("https://api-arkon.herokuapp.com/tareas/toggle",{idTarea:e,action:"Activa",tiempoRestante:p}).then((function(e){g("Activa"),r()})).catch((function(e){console.log(e)}))},finalizarTarea:T}),Object(C.jsx)(R,{show:u,onHide:function(){return h(!1)},tarea:t,initTareas:r,setTiempoRestante:m})]})},D=function(e){var t=e.tareas,a=e.initTareas,c=e.initTareasCompletas,s=Object(n.useState)({min:0,max:120}),r=Object(d.a)(s,2),i=r[0],o=r[1];return Object(C.jsx)(A.a,{onDragEnd:function(e){var t=e.source.index,n=null!==e.destination?e.destination.index:0,c=e.draggableId.replace("draggable-","");0!==n&&j.a.put("https://api-arkon.herokuapp.com/tareas/posicion",{idTarea:c,posicionInicial:t,posicionFinal:n}).then((function(e){a()})).catch((function(e){console.log(e)}))},children:Object(C.jsx)(A.c,{droppableId:"droppable-1",children:function(e,n){return Object(C.jsxs)(x.a,Object(f.a)(Object(f.a)({ref:e.innerRef},e.droppableProps),{},{children:[Object(C.jsx)("h3",{className:"text-center",children:"TAREAS PENDIENTES:"}),Object(C.jsxs)(S.a,{className:"d-flex justify-content-center",children:[Object(C.jsxs)(N.a,{size:"sm",className:"newMorph px-4 mx-4",variant:"dark",onClick:function(){return o({min:0,max:30})},children:[" ",Object(C.jsx)(E.b,{})," ",Object(C.jsx)("b",{children:"-30''"})]}),Object(C.jsxs)(N.a,{size:"sm",className:"newMorph px-4 mx-4",variant:"dark",onClick:function(){return o({min:30,max:60})},children:[" ",Object(C.jsxs)("b",{children:[" ","30'' -"," "]})," ",Object(C.jsx)(E.b,{})," ",Object(C.jsxs)("b",{children:[" ","- 61''"]})]}),Object(C.jsxs)(N.a,{size:"sm",className:"newMorph px-4 mx-4",variant:"dark",onClick:function(){return o({min:60,max:120})},children:[" ",Object(C.jsx)(E.b,{}),Object(C.jsxs)("b",{children:[" ","+60''"," "]})]}),Object(C.jsxs)(N.a,{size:"sm",className:"newMorph px-4 mx-4",variant:"dark",onClick:function(){return o({min:0,max:120})},children:[Object(C.jsx)(E.b,{}),Object(C.jsxs)("b",{children:[" ","-120''"]})]})]}),t.length>0&&t.map((function(e,t){var n=e.duracion/60;return n>i.min&&n<=i.max?Object(C.jsx)(A.b,{draggableId:"draggable-".concat(e.id),index:e.posicion,isDragDisabled:"Activa"===e.estatus||"Pausa"===e.estatus,children:function(n,s){return Object(C.jsx)(P,{current:0===t,innRef:n.innerRef,provided:n,tarea:e,initTareas:a,initTareasCompletas:c},e.id)}},e.id):""})),0===t.length&&Object(C.jsxs)(M.a,{bg:"",className:"text-center my-5 py-3",children:[" ",Object(C.jsx)(M.a.Title,{children:"\xa1Felicidades! No tienes tareas pendientes"})]}),e.placeholder]}))}})})},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setTareas":return e=t.payload;default:return e}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setTareasCompletas":return e=t.payload;default:return e}},L=a(356),H=function(e){var t=e.tarea;return Object(C.jsxs)("tr",{className:"text-center",children:[Object(C.jsx)("td",{children:t.titulo}),Object(C.jsx)("td",{children:t.descripcion}),Object(C.jsx)("td",{children:t.create_at.split("T")[0]}),Object(C.jsxs)("td",{children:[new Date(1e3*(t.duracion-t.restante)).toISOString().substr(11,8)," de ",new Date(1e3*t.duracion).toISOString().substr(11,8)]})]})},G=function(e){e.initTareasCompletas;var t=e.tareasCompletas;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("h4",{className:"text-center",children:"TAREAS COMPLETADAS"}),Object(C.jsxs)(L.a,{striped:!0,bordered:!0,hover:!0,size:"sm",responsive:!0,id:"tableCompletadas",children:[Object(C.jsx)("thead",{className:"thead-dark",children:Object(C.jsxs)("tr",{className:"text-center",children:[Object(C.jsx)("th",{children:"Titulo"}),Object(C.jsx)("th",{children:"Descripci\xf3n"}),Object(C.jsx)("th",{children:"Registro"}),Object(C.jsx)("th",{children:"Tiempo"})]})}),Object(C.jsx)("tbody",{className:"",children:t.map((function(e,t){return Object(C.jsx)(H,{tarea:e},t)}))})]})]})},B=a(203),K=a(362),_=a(371),V=a(372),q=a(202),J=a(369),U=function(e){var t=e.dataGrafica;return Object(C.jsxs)("div",{className:"col-12 pt-5 text-center",children:[Object(C.jsx)("h5",{children:"TAREAS REALIZADAS EN LA ULTIMA SEMANA"}),Object(C.jsxs)(K.a,{height:200,width:400,domainPadding:{x:20,y:[0,10]},scale:{x:"linear",y:"linear"},children:[Object(C.jsx)(_.a,{labelComponent:Object(C.jsx)(V.a,{}),dataComponent:Object(C.jsx)(q.a,{}),data:t}),Object(C.jsx)(J.a,{label:"del  0".concat((new Date).getMonth()," de ").concat((new Date).getFullYear())}),Object(C.jsx)(J.a,{dependentAxis:!0,label:"Tareas realizadas"})]})]})},Y=function(e){var t=e.tareasCompletas,a=Object(n.useState)([]),c=Object(d.a)(a,2),s=c[0],r=c[1],i=Object(n.useState)([]),u=Object(d.a)(i,2),h=u[0],b=u[1],x=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,t){j.a.get("https://api-arkon.herokuapp.com/tareas/estadisticas").then((function(t){e(t.data.data)})).catch((function(e){t(e)}))}));case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){x()}),[t]),Object(n.useEffect)((function(){var e=s.map((function(e,t){var a=e.create_at.split("T")[0];return{x:a=a.split("-")[2],y:e.total,label:"".concat(e.total," Tareas realizadas")}}));e.sort((function(e,t){return e.x>t.x?1:e.x<t.x?-1:0})),b(e)}),[s]),Object(C.jsx)(U,{dataGrafica:h})},Z=[];var Q=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(n.useReducer)(z,Z),r=Object(d.a)(s,2),i=r[0],u=r[1],O=Object(n.useReducer)(F,Z),f=Object(d.a)(O,2),v=f[0],g=f[1],T=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,t){j.a.get("https://api-arkon.herokuapp.com/tareas").then((function(t){e(t.data.data)})).catch((function(e){t(e)}))}));case 2:t=e.sent,u({type:"setTareas",payload:t}),N();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,t){j.a.get("https://api-arkon.herokuapp.com/tareas/completas").then((function(t){e(t.data.data)})).catch((function(e){t(e)}))}));case 2:t=e.sent,g({type:"setTareasCompletas",payload:t});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){for(var e=function(e){var t=" Tarea ".concat(e,"-").concat(Math.floor(49*Math.random())+1," "),a="Descripcion de la tarea ".concat(t),n=60*(Math.floor(118*Math.random())+1)+(Math.floor(58*Math.random())+1),c=n*((Math.floor(20*Math.random())+80)/100),s={titulo:t,descripcion:a,duracion:n,restante:c=~~(n-c),create_at:function(e){var t=e.getFullYear(),a=e.getMonth()+1,n=e.getDate();return t+"-"+a+"-"+(Math.floor(Math.random()*(n-(n-7)))+(n-7))}(new Date)};j.a.post("https://api-arkon.herokuapp.com/tareas/masivo",s).then((function(t){49===e&&N()})).catch((function(e){}))},t=0;t<50;t++)e(t)};return Object(n.useEffect)((function(){T(),N()}),[]),Object(C.jsx)(B.a,{children:Object(C.jsxs)(h.a,{fluid:!0,className:"p-4",children:[Object(C.jsxs)(b.a,{children:[Object(C.jsx)("h1",{className:"text-center col-12 my-3",children:"APLICACI\xd3N DE PRODUCTIVIDAD"}),Object(C.jsxs)(x.a,{className:"px-5 py-3",xs:12,children:[Object(C.jsx)("button",{className:"float-left newMorph",variant:"primary",onClick:function(){return c(!0)},children:"Registar tarea"}),Object(C.jsxs)("button",{className:"float-right newMorph",onClick:function(){return k()},children:["Registar 50 tareas ",Object(C.jsx)("br",{}),"completadas"]})]})]}),Object(C.jsxs)(p.a.Container,{id:"menu-lateral",defaultActiveKey:"first",children:[Object(C.jsx)(b.a,{children:Object(C.jsx)(x.a,{sm:3,children:Object(C.jsxs)(m.a,{variant:"pills",className:"flex-column",children:[Object(C.jsx)(m.a.Item,{className:"verticaltext",children:Object(C.jsx)(m.a.Link,{eventKey:"first",className:"verticaltext_content",children:"Pendientes"})}),Object(C.jsx)(m.a.Item,{className:"verticaltext",children:Object(C.jsx)(m.a.Link,{eventKey:"second",className:"verticaltext_content",children:"Completadas"})})]})})}),Object(C.jsxs)(p.a.Content,{children:[Object(C.jsx)(p.a.Pane,{eventKey:"first",children:Object(C.jsx)(b.a,{className:"justify-content-center",id:"divTareasPendientes",children:Object(C.jsx)(x.a,{xs:12,sm:10,children:Object(C.jsx)(D,{tareas:i,initTareas:T,initTareasCompletas:N})})})}),Object(C.jsx)(p.a.Pane,{eventKey:"second",children:Object(C.jsxs)(b.a,{className:"justify-content-center",children:[Object(C.jsx)(x.a,{xs:12,sm:10,children:Object(C.jsx)(G,{tareasCompletas:v,initTareasCompletas:N})}),Object(C.jsx)(x.a,{xs:12,sm:10,children:Object(C.jsx)(Y,{tareasCompletas:v})})]})})]})]}),Object(C.jsx)(y,{show:a,onHide:function(){return c(!1)},initTareas:T})]})})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,373)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(Q,{})}),document.getElementById("root")),W()}},[[342,1,2]]]);
//# sourceMappingURL=main.cfd728fb.chunk.js.map