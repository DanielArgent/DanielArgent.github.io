(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bf2ed9e2"],{"75f9":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"description-input"},[t.title?i("h4",[t._v(t._s(t.title))]):t._e(),i("textarea",{staticClass:"description-input__input",attrs:{placeholder:"Input book description"},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})])},s=[],a={name:"DescriptionInput",props:{value:String,title:String}},o=a,c=(i("cfc3"),i("2877")),r=Object(c["a"])(o,n,s,!1,null,"21514910",null);e["a"]=r.exports},"927c":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("h1",{staticClass:"page__title"},[t._v("Add book")]),i("form",{staticClass:"page-form"},[i("div",{staticClass:"page-form__row"},[i("title-input",{attrs:{title:"Title"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),i("isbn-input",{attrs:{title:"ISBN"},on:{"isbn-changed":t.isbnChanged}})],1),i("div",{staticClass:"page-form__row"},[i("autors-input",{attrs:{title:"Autors","allow-creation":!0},model:{value:t.selectedAutors,callback:function(e){t.selectedAutors=e},expression:"selectedAutors"}}),i("description-input",{attrs:{title:"Description"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),i("div",{staticClass:"page-form__row"},[i("button",{staticClass:"button button-recomended",on:{click:function(e){return e.preventDefault(),t.addItem(e)}}},[t._v(" Add ")]),i("button",{staticClass:"button",on:{click:function(e){return e.preventDefault(),t.cancel(e)}}},[t._v("Cancel")])])])])},s=[],a=(i("a4d3"),i("e01a"),i("5530")),o=i("2f62"),c=i("0875"),r=i("56bb"),u=i("3318"),l=i("75f9"),p={name:"AddBook",data:function(){return{title:"",isbn:{value:"",error:null},selectedAutors:[],description:""}},methods:Object(a["a"])(Object(a["a"])({},Object(o["d"])(["addTo"])),{},{isbnChanged:function(t){this.isbn=t},addItem:function(){this.addTo({id:this.$route.params.id,value:{type:"book",title:this.title,isbn:this.isbn.value,autors:this.selectedAutors,description:this.description}}),this.$router.push("/")},cancel:function(){this.$router.push("/")}}),components:{TitleInput:c["a"],IsbnInput:r["a"],AutorsInput:u["a"],DescriptionInput:l["a"]}},d=p,f=i("2877"),b=Object(f["a"])(d,n,s,!1,null,null,null);e["default"]=b.exports},c5c1:function(t,e,i){},cfc3:function(t,e,i){"use strict";i("c5c1")}}]);
//# sourceMappingURL=chunk-bf2ed9e2.071e5875.js.map