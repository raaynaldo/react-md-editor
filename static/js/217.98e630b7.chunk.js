(this["webpackJsonp@uiw/react-md-editor"]=this["webpackJsonp@uiw/react-md-editor"]||[]).push([[217],{259:function(e,n){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,r,o){if(t.language===a){var i=t.tokenStack=[];t.code=t.code.replace(r,(function(e){if("function"===typeof o&&!o(e))return e;for(var r,c=i.length;-1!==t.code.indexOf(r=n(a,c));)++c;return i[c]=e,r})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var r=0,o=Object.keys(t.tokenStack);!function i(c){for(var u=0;u<c.length&&!(r>=o.length);u++){var s=c[u];if("string"===typeof s||s.content&&"string"===typeof s.content){var p=o[r],g=t.tokenStack[p],l="string"===typeof s?s:s.content,f=n(a,p),k=l.indexOf(f);if(k>-1){++r;var d=l.substring(0,k),h=new e.Token(a,e.tokenize(g,t.grammar),"language-"+a,g),m=l.substring(k+f.length),v=[];d&&v.push.apply(v,i([d])),v.push(h),m&&v.push.apply(v,i([m])),"string"===typeof s?c.splice.apply(c,[u,1].concat(v)):s.content=v}}else s.content&&i(s.content)}return c}(t.tokens)}}}})}(Prism)}}]);
//# sourceMappingURL=217.98e630b7.chunk.js.map