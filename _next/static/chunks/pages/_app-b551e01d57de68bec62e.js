(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2167:function(c,e,n){"use strict";var t=n(3038),r=n(862);e.default=void 0;var a=r(n(7294)),l=n(9414),o=n(4651),i=n(7426),u={};function s(c,e,n,t){if(c&&(0,l.isLocalURL)(e)){c.prefetch(e,n,t).catch((function(c){0}));var r=t&&"undefined"!==typeof t.locale?t.locale:c&&c.locale;u[e+"%"+n+(r?"%"+r:"")]=!0}}var f=function(c){var e,n=!1!==c.prefetch,r=(0,o.useRouter)(),f=a.default.useMemo((function(){var e=(0,l.resolveHref)(r,c.href,!0),n=t(e,2),a=n[0],o=n[1];return{href:a,as:c.as?(0,l.resolveHref)(r,c.as):o||a}}),[r,c.href,c.as]),v=f.href,h=f.as,p=c.children,m=c.replace,d=c.shallow,z=c.scroll,b=c.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var g=(e=a.Children.only(p))&&"object"===typeof e&&e.ref,y=(0,i.useIntersection)({rootMargin:"200px"}),j=t(y,2),w=j[0],O=j[1],E=a.default.useCallback((function(c){w(c),g&&("function"===typeof g?g(c):"object"===typeof g&&(g.current=c))}),[g,w]);(0,a.useEffect)((function(){var c=O&&n&&(0,l.isLocalURL)(v),e="undefined"!==typeof b?b:r&&r.locale,t=u[v+"%"+h+(e?"%"+e:"")];c&&!t&&s(r,v,h,{locale:e})}),[h,v,O,b,n,r]);var M={ref:E,onClick:function(c){e.props&&"function"===typeof e.props.onClick&&e.props.onClick(c),c.defaultPrevented||function(c,e,n,t,r,a,o,i){("A"!==c.currentTarget.nodeName||!function(c){var e=c.currentTarget.target;return e&&"_self"!==e||c.metaKey||c.ctrlKey||c.shiftKey||c.altKey||c.nativeEvent&&2===c.nativeEvent.which}(c)&&(0,l.isLocalURL)(n))&&(c.preventDefault(),null==o&&t.indexOf("#")>=0&&(o=!1),e[r?"replace":"push"](n,t,{shallow:a,locale:i,scroll:o}))}(c,r,v,h,m,d,z,b)},onMouseEnter:function(c){(0,l.isLocalURL)(v)&&(e.props&&"function"===typeof e.props.onMouseEnter&&e.props.onMouseEnter(c),s(r,v,h,{priority:!0}))}};if(c.passHref||"a"===e.type&&!("href"in e.props)){var x="undefined"!==typeof b?b:r&&r.locale,_=r&&r.isLocaleDomain&&(0,l.getDomainLocale)(h,x,r&&r.locales,r&&r.domainLocales);M.href=_||(0,l.addBasePath)((0,l.addLocale)(h,x,r&&r.defaultLocale))}return a.default.cloneElement(e,M)};e.default=f},7426:function(c,e,n){"use strict";var t=n(3038);e.__esModule=!0,e.useIntersection=function(c){var e=c.rootMargin,n=c.disabled||!l,i=(0,r.useRef)(),u=(0,r.useState)(!1),s=t(u,2),f=s[0],v=s[1],h=(0,r.useCallback)((function(c){i.current&&(i.current(),i.current=void 0),n||f||c&&c.tagName&&(i.current=function(c,e,n){var t=function(c){var e=c.rootMargin||"",n=o.get(e);if(n)return n;var t=new Map,r=new IntersectionObserver((function(c){c.forEach((function(c){var e=t.get(c.target),n=c.isIntersecting||c.intersectionRatio>0;e&&n&&e(n)}))}),c);return o.set(e,n={id:e,observer:r,elements:t}),n}(n),r=t.id,a=t.observer,l=t.elements;return l.set(c,e),a.observe(c),function(){l.delete(c),a.unobserve(c),0===l.size&&(a.disconnect(),o.delete(r))}}(c,(function(c){return c&&v(c)}),{rootMargin:e}))}),[n,e,f]);return(0,r.useEffect)((function(){if(!l&&!f){var c=(0,a.requestIdleCallback)((function(){return v(!0)}));return function(){return(0,a.cancelIdleCallback)(c)}}}),[f]),[h,f]};var r=n(7294),a=n(3447),l="undefined"!==typeof IntersectionObserver;var o=new Map},2732:function(c,e,n){"use strict";n.r(e),n.d(e,{default:function(){return s}});var t=n(5893);function r(c,e,n){return e in c?Object.defineProperty(c,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):c[e]=n,c}var a=n(1664),l=function(){return(0,t.jsxs)("svg",{width:"264",height:"53",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("path",{d:"M3.312 8.288c3.96 0 6.636.012 8.028.036 4.752.144 8.292 1.356 10.62 3.636 2.328 2.28 3.492 5.472 3.492 9.576 0 4.224-1.212 7.524-3.636 9.9C19.392 33.812 15.84 35 11.16 35H3.348c-.288 0-.504-.06-.648-.18-.12-.144-.18-.372-.18-.684V9.008c0-.264.06-.444.18-.54.12-.12.324-.18.612-.18zm5.832 4.464c-.216 0-.324.168-.324.504v16.812c0 .192.024.324.072.396.072.072.204.108.396.108h.684c3.024 0 5.256-.696 6.696-2.088 1.464-1.416 2.196-3.744 2.196-6.984 0-3-.612-5.16-1.836-6.48-1.224-1.32-3.12-2.052-5.688-2.196l-2.196-.072zm30.383 20.412c-1.584 1.464-3.468 2.196-5.652 2.196-1.8 0-3.228-.48-4.284-1.44-1.056-.984-1.584-2.256-1.584-3.816 0-2.016.924-3.636 2.772-4.86 1.848-1.224 4.392-1.872 7.632-1.944l1.296-.108a.583.583 0 00.36-.108.48.48 0 00.18-.396v-.756c0-.936-.264-1.656-.792-2.16-.528-.504-1.284-.756-2.268-.756-1.68 0-2.928.72-3.744 2.16-.096.24-.252.36-.468.36-.12 0-.228-.012-.324-.036l-3.6-.828c-.216-.048-.324-.18-.324-.396 0-.144.048-.324.144-.54.576-1.392 1.596-2.436 3.06-3.132 1.488-.696 3.324-1.044 5.508-1.044 2.856 0 4.92.528 6.192 1.584 1.272 1.032 1.908 2.508 1.908 4.428v12.636c0 .288-.048.492-.144.612-.096.12-.276.18-.54.18h-3.708c-.24 0-.42-.084-.54-.252-.096-.168-.168-.42-.216-.756l-.036-.792c-.024-.216-.12-.324-.288-.324-.096 0-.276.096-.54.288zm.72-6.66c0-.216-.036-.372-.108-.468-.072-.096-.216-.144-.432-.144l-1.008.072c-1.392.072-2.628.408-3.708 1.008-1.056.576-1.584 1.38-1.584 2.412 0 .72.252 1.296.756 1.728.504.408 1.2.612 2.088.612 1.104 0 2.04-.324 2.808-.972.792-.624 1.188-1.26 1.188-1.908v-2.34zM66.688 15.92c.216 0 .372.084.468.252.096.168.108.36.036.576l-7.128 17.496c-.216.504-.6.756-1.152.756h-2.556c-.552 0-.936-.252-1.152-.756l-7.092-17.46a1.178 1.178 0 01-.072-.288c0-.168.06-.3.18-.396a.59.59 0 01.432-.18h4.572c.408 0 .672.204.792.612l4.14 10.62c.12.216.216.324.288.324.096 0 .192-.12.288-.36l4.068-10.62c.168-.384.432-.576.792-.576h3.096zm8.865-3.204c0 .6-.324.9-.972.9h-3.888c-.288 0-.492-.06-.612-.18-.12-.144-.18-.36-.18-.648v-3.78c0-.48.204-.72.612-.72h4.464c.168 0 .3.06.396.18.12.12.18.288.18.504v3.744zm-.072 21.42c0 .312-.072.54-.216.684-.144.12-.396.18-.756.18h-3.78c-.288 0-.492-.06-.612-.18s-.18-.312-.18-.576v-17.64c0-.456.204-.684.612-.684h4.392c.36 0 .54.204.54.612v17.604zM92.712 35c-.504 0-.756-.24-.756-.72v-1.008c0-.192-.06-.288-.18-.288-.072 0-.18.048-.324.144a8.905 8.905 0 01-2.304 1.62c-.816.408-1.8.612-2.952.612-2.256 0-4.08-.84-5.472-2.52-1.368-1.68-2.052-4.092-2.052-7.236 0-1.968.348-3.708 1.044-5.22.72-1.536 1.68-2.724 2.88-3.564 1.2-.84 2.52-1.26 3.96-1.26.936 0 1.776.156 2.52.468.768.312 1.5.792 2.196 1.44.168.12.288.18.36.18.168 0 .252-.156.252-.468V8.936c0-.432.192-.648.576-.648h4.392c.168 0 .3.06.396.18.12.12.18.288.18.504v25.272c0 .264-.06.456-.18.576-.12.12-.336.18-.648.18h-3.888zm-.828-14.112c-.552-.6-1.104-1.044-1.656-1.332-.528-.288-1.128-.432-1.8-.432-1.272 0-2.28.528-3.024 1.584-.744 1.032-1.116 2.64-1.116 4.824 0 2.208.36 3.828 1.08 4.86.72 1.008 1.716 1.512 2.988 1.512.96 0 1.788-.312 2.484-.936.696-.648 1.044-1.392 1.044-2.232v-7.848zm39.616-12.6c.24 0 .408.084.504.252.12.168.132.36.036.576l-8.64 25.128c-.168.504-.54.756-1.116.756h-4.5c-.576 0-.96-.252-1.152-.756l-8.568-25.092-.072-.288c0-.168.06-.3.18-.396.12-.12.276-.18.468-.18h5.184c.384 0 .636.204.756.612l5.904 18.216c.024.168.084.252.18.252.096 0 .18-.096.252-.288L126.64 8.9c.12-.408.384-.612.792-.612h4.068zm5.77 18.792c0 1.344.444 2.436 1.332 3.276.912.816 2.04 1.224 3.384 1.224.864 0 1.656-.18 2.376-.54.744-.384 1.488-1.008 2.232-1.872.096-.096.192-.144.288-.144.072 0 .192.036.36.108l2.592 1.08c.168.072.252.192.252.36 0 .12-.048.24-.144.36-1.152 1.632-2.388 2.784-3.708 3.456-1.32.648-2.964.972-4.932.972-1.848 0-3.516-.408-5.004-1.224a8.935 8.935 0 01-3.492-3.384c-.84-1.464-1.26-3.132-1.26-5.004 0-2.016.432-3.792 1.296-5.328.864-1.56 2.028-2.76 3.492-3.6 1.488-.84 3.108-1.26 4.86-1.26 1.824 0 3.444.408 4.86 1.224 1.416.792 2.52 1.944 3.312 3.456.792 1.512 1.188 3.312 1.188 5.4 0 .312-.036.528-.108.648-.048.12-.216.192-.504.216h-12.24c-.288 0-.432.192-.432.576zm7.236-3.6c.264 0 .432-.024.504-.072.072-.072.108-.216.108-.432 0-.624-.144-1.248-.432-1.872a3.957 3.957 0 00-1.26-1.548c-.552-.408-1.224-.612-2.016-.612-1.2 0-2.184.42-2.952 1.26-.768.84-1.14 1.92-1.116 3.24l7.164.036zm14.577 10.656c0 .312-.072.54-.216.684-.144.12-.396.18-.756.18h-3.816c-.288 0-.492-.06-.612-.18s-.18-.312-.18-.576l.108-25.272c0-.456.192-.684.576-.684h4.356c.36 0 .54.216.54.648v25.2zm14.495-.972c-1.584 1.464-3.468 2.196-5.652 2.196-1.8 0-3.228-.48-4.284-1.44-1.056-.984-1.584-2.256-1.584-3.816 0-2.016.924-3.636 2.772-4.86 1.848-1.224 4.392-1.872 7.632-1.944l1.296-.108a.583.583 0 00.36-.108.48.48 0 00.18-.396v-.756c0-.936-.264-1.656-.792-2.16-.528-.504-1.284-.756-2.268-.756-1.68 0-2.928.72-3.744 2.16-.096.24-.252.36-.468.36-.12 0-.228-.012-.324-.036l-3.6-.828c-.216-.048-.324-.18-.324-.396 0-.144.048-.324.144-.54.576-1.392 1.596-2.436 3.06-3.132 1.488-.696 3.324-1.044 5.508-1.044 2.856 0 4.92.528 6.192 1.584 1.272 1.032 1.908 2.508 1.908 4.428v12.636c0 .288-.048.492-.144.612-.096.12-.276.18-.54.18h-3.708c-.24 0-.42-.084-.54-.252-.096-.168-.168-.42-.216-.756l-.036-.792c-.024-.216-.12-.324-.288-.324-.096 0-.276.096-.54.288zm.72-6.66c0-.216-.036-.372-.108-.468-.072-.096-.216-.144-.432-.144l-1.008.072c-1.392.072-2.628.408-3.708 1.008-1.056.576-1.584 1.38-1.584 2.412 0 .72.252 1.296.756 1.728.504.408 1.2.612 2.088.612 1.104 0 2.04-.324 2.808-.972.792-.624 1.188-1.26 1.188-1.908v-2.34zM184.107 35c-.264 0-.456-.048-.576-.144-.12-.12-.18-.312-.18-.576V16.604c0-.456.192-.684.576-.684h4.356c.36 0 .54.204.54.612v1.764c0 .192.06.288.18.288.072 0 .156-.048.252-.144.984-.936 1.968-1.644 2.952-2.124a6.776 6.776 0 013.132-.756c1.752 0 3.132.516 4.14 1.548 1.032 1.032 1.548 2.412 1.548 4.14v12.888c0 .576-.288.864-.864.864h-3.996c-.264 0-.444-.048-.54-.144-.096-.12-.144-.312-.144-.576V22.112c0-.816-.228-1.44-.684-1.872-.432-.456-1.08-.684-1.944-.684-.72 0-1.392.18-2.016.54-.6.36-1.248.924-1.944 1.692v12.384c0 .288-.072.504-.216.648-.144.12-.384.18-.72.18h-3.852zm33.937 0c-.504 0-.756-.24-.756-.72v-1.008c0-.192-.06-.288-.18-.288-.072 0-.18.048-.324.144a8.905 8.905 0 01-2.304 1.62c-.816.408-1.8.612-2.952.612-2.256 0-4.08-.84-5.472-2.52-1.368-1.68-2.052-4.092-2.052-7.236 0-1.968.348-3.708 1.044-5.22.72-1.536 1.68-2.724 2.88-3.564 1.2-.84 2.52-1.26 3.96-1.26.936 0 1.776.156 2.52.468.768.312 1.5.792 2.196 1.44.168.12.288.18.36.18.168 0 .252-.156.252-.468V8.936c0-.432.192-.648.576-.648h4.392c.168 0 .3.06.396.18.12.12.18.288.18.504v25.272c0 .264-.06.456-.18.576-.12.12-.336.18-.648.18h-3.888zm-.828-14.112c-.552-.6-1.104-1.044-1.656-1.332-.528-.288-1.128-.432-1.8-.432-1.272 0-2.28.528-3.024 1.584-.744 1.032-1.116 2.64-1.116 4.824 0 2.208.36 3.828 1.08 4.86.72 1.008 1.716 1.512 2.988 1.512.96 0 1.788-.312 2.484-.936.696-.648 1.044-1.392 1.044-2.232v-7.848zm15.134-8.172c0 .6-.324.9-.972.9h-3.888c-.288 0-.492-.06-.612-.18-.12-.144-.18-.36-.18-.648v-3.78c0-.48.204-.72.612-.72h4.464c.168 0 .3.06.396.18.12.12.18.288.18.504v3.744zm-.072 21.42c0 .312-.072.54-.216.684-.144.12-.396.18-.756.18h-3.78c-.288 0-.492-.06-.612-.18s-.18-.312-.18-.576v-17.64c0-.456.204-.684.612-.684h4.392c.36 0 .54.204.54.612v17.604zm14.495-.972c-1.584 1.464-3.468 2.196-5.652 2.196-1.8 0-3.228-.48-4.284-1.44-1.056-.984-1.584-2.256-1.584-3.816 0-2.016.924-3.636 2.772-4.86 1.848-1.224 4.392-1.872 7.632-1.944l1.296-.108a.583.583 0 00.36-.108.48.48 0 00.18-.396v-.756c0-.936-.264-1.656-.792-2.16-.528-.504-1.284-.756-2.268-.756-1.68 0-2.928.72-3.744 2.16-.096.24-.252.36-.468.36-.12 0-.228-.012-.324-.036l-3.6-.828c-.216-.048-.324-.18-.324-.396 0-.144.048-.324.144-.54.576-1.392 1.596-2.436 3.06-3.132 1.488-.696 3.324-1.044 5.508-1.044 2.856 0 4.92.528 6.192 1.584 1.272 1.032 1.908 2.508 1.908 4.428v12.636c0 .288-.048.492-.144.612-.096.12-.276.18-.54.18h-3.708c-.24 0-.42-.084-.54-.252-.096-.168-.168-.42-.216-.756l-.036-.792c-.024-.216-.12-.324-.288-.324-.096 0-.276.096-.54.288zm.72-6.66c0-.216-.036-.372-.108-.468-.072-.096-.216-.144-.432-.144l-1.008.072c-1.392.072-2.628.408-3.708 1.008-1.056.576-1.584 1.38-1.584 2.412 0 .72.252 1.296.756 1.728.504.408 1.2.612 2.088.612 1.104 0 2.04-.324 2.808-.972.792-.624 1.188-1.26 1.188-1.908v-2.34zm14.561 7.632c0 .312-.084.54-.252.684-.144.12-.396.18-.756.18h-4.248c-.528 0-.792-.252-.792-.756v-4.572c0-.216.048-.372.144-.468a.59.59 0 01.432-.18h4.932c.36 0 .54.204.54.612v4.5z",fill:"#222"}),(0,t.jsx)("path",{d:"M173.168 39.612c.112 0 .191.033.238.098.056.065.07.154.042.266l-2.87 9.758c-.056.177-.182.266-.378.266h-1.288c-.205 0-.336-.084-.392-.252L166.588 43c-.009-.084-.028-.126-.056-.126s-.056.047-.084.14l-1.946 6.72a.384.384 0 01-.14.21.459.459 0 01-.252.056h-1.316c-.205 0-.336-.084-.392-.252l-2.842-9.758-.028-.126c0-.075.028-.135.084-.182a.34.34 0 01.224-.07h1.456c.103 0 .177.019.224.056.047.028.079.08.098.154l1.974 6.986c.028.103.056.154.084.154.028 0 .056-.042.084-.126l1.974-7.014a.287.287 0 01.112-.154c.047-.037.121-.056.224-.056h1.26c.103 0 .177.019.224.056.047.028.079.08.098.154l2.002 7.056c.028.075.056.112.084.112.037 0 .061-.033.07-.098l1.96-7.07c.028-.14.14-.21.336-.21h1.064zm2.144 7.252c0 .383.089.728.266 1.036.177.299.42.537.728.714a2.18 2.18 0 001.036.252c.383 0 .728-.08 1.036-.238.317-.168.616-.425.896-.77.047-.047.084-.07.112-.07.028 0 .07.014.126.042l.854.378c.065.028.098.07.098.126 0 .028-.019.07-.056.126-.42.607-.887 1.04-1.4 1.302-.504.252-1.129.378-1.876.378-.709 0-1.349-.159-1.918-.476a3.4 3.4 0 01-1.316-1.33c-.317-.57-.476-1.218-.476-1.946 0-.784.163-1.475.49-2.072.327-.597.77-1.06 1.33-1.386a3.628 3.628 0 011.862-.49c.7 0 1.316.154 1.848.462.541.308.957.756 1.246 1.344.299.579.448 1.27.448 2.072v.056c0 .093-.014.159-.042.196-.028.037-.089.06-.182.07h-4.956c-.103 0-.154.075-.154.224zm3.318-1.26c.093 0 .154-.01.182-.028.037-.028.056-.084.056-.168 0-.299-.065-.588-.196-.868a1.675 1.675 0 00-.588-.686 1.54 1.54 0 00-.91-.266c-.551 0-.999.196-1.344.588-.336.383-.499.859-.49 1.428h3.29zM182.256 50c-.103 0-.178-.019-.224-.056-.038-.047-.056-.121-.056-.224v-9.87c0-.159.07-.238.21-.238h1.414c.13 0 .196.08.196.238v3.318c0 .112.028.168.084.168.028 0 .074-.023.14-.07.597-.55 1.283-.826 2.058-.826.952 0 1.68.35 2.184 1.05.513.69.77 1.61.77 2.758 0 1.204-.28 2.156-.84 2.856-.56.69-1.344 1.036-2.352 1.036-.504 0-.943-.107-1.316-.322a3.341 3.341 0 01-.924-.798c-.028-.047-.056-.07-.084-.07-.028 0-.052.037-.07.112l-.14.672a.41.41 0 01-.098.21.307.307 0 01-.196.056h-.756zm1.54-2.548c0 .439.158.807.476 1.106.317.29.69.434 1.12.434.55 0 .984-.22 1.302-.658.317-.448.476-1.134.476-2.058 0-1.764-.57-2.646-1.708-2.646-.327 0-.635.08-.924.238a2.44 2.44 0 00-.742.616v2.968zm10.086-7.84c1.334 0 2.272.005 2.814.014 3.649.084 5.474 1.797 5.474 5.138 0 1.67-.472 2.963-1.414 3.878-.934.905-2.32 1.358-4.158 1.358h-2.702c-.187 0-.28-.098-.28-.294v-9.842c0-.093.018-.159.056-.196.037-.037.107-.056.21-.056zm1.932 1.484c-.084 0-.126.065-.126.196v7.056c0 .065.014.112.042.14.028.019.074.028.14.028h.35c1.316 0 2.272-.29 2.87-.868.606-.579.91-1.54.91-2.884 0-.868-.122-1.559-.364-2.072a2.34 2.34 0 00-1.092-1.148c-.476-.243-1.102-.383-1.876-.42l-.854-.028zm9.467 5.768c0 .383.088.728.266 1.036.177.299.42.537.728.714.317.168.662.252 1.036.252.382 0 .728-.08 1.036-.238.317-.168.616-.425.896-.77.046-.047.084-.07.112-.07.028 0 .07.014.126.042l.854.378c.065.028.098.07.098.126 0 .028-.019.07-.056.126-.42.607-.887 1.04-1.4 1.302-.504.252-1.13.378-1.876.378-.71 0-1.349-.159-1.918-.476a3.4 3.4 0 01-1.316-1.33c-.318-.57-.476-1.218-.476-1.946 0-.784.163-1.475.49-2.072a3.52 3.52 0 011.33-1.386c.56-.327 1.18-.49 1.862-.49.7 0 1.316.154 1.848.462a3.06 3.06 0 011.246 1.344c.298.579.448 1.27.448 2.072v.056c0 .093-.014.159-.042.196-.028.037-.089.06-.182.07h-4.956c-.103 0-.154.075-.154.224zm3.318-1.26c.093 0 .154-.01.182-.028.037-.028.056-.084.056-.168a2.04 2.04 0 00-.196-.868 1.675 1.675 0 00-.588-.686 1.542 1.542 0 00-.91-.266c-.551 0-.999.196-1.344.588-.336.383-.5.859-.49 1.428h3.29zm9.855-3.024c.075 0 .127.028.155.084.037.056.042.121.014.196l-2.786 6.874a.564.564 0 01-.168.21.43.43 0 01-.238.056h-.826a.536.536 0 01-.266-.056.673.673 0 01-.154-.196l-2.786-6.874a.23.23 0 01-.014-.098c0-.056.018-.103.056-.14a.207.207 0 01.154-.056h1.47c.14 0 .233.07.28.21l1.806 4.592c.028.093.06.14.098.14.037 0 .079-.051.126-.154l1.792-4.592c.046-.13.135-.196.266-.196h1.021zm2.481 4.284c0 .383.089.728.266 1.036.177.299.42.537.728.714a2.18 2.18 0 001.036.252c.383 0 .728-.08 1.036-.238.317-.168.616-.425.896-.77.047-.047.084-.07.112-.07.028 0 .07.014.126.042l.854.378c.065.028.098.07.098.126 0 .028-.019.07-.056.126-.42.607-.887 1.04-1.4 1.302-.504.252-1.129.378-1.876.378-.709 0-1.349-.159-1.918-.476a3.4 3.4 0 01-1.316-1.33c-.317-.57-.476-1.218-.476-1.946 0-.784.163-1.475.49-2.072.327-.597.77-1.06 1.33-1.386a3.628 3.628 0 011.862-.49c.7 0 1.316.154 1.848.462.541.308.957.756 1.246 1.344.299.579.448 1.27.448 2.072v.056c0 .093-.014.159-.042.196-.028.037-.089.06-.182.07h-4.956c-.103 0-.154.075-.154.224zm3.318-1.26c.093 0 .154-.01.182-.028.037-.028.056-.084.056-.168 0-.299-.065-.588-.196-.868a1.675 1.675 0 00-.588-.686 1.54 1.54 0 00-.91-.266c-.551 0-.999.196-1.344.588-.336.383-.499.859-.49 1.428h3.29zm5.166 4.088c0 .121-.024.205-.07.252-.047.037-.131.056-.252.056h-1.232c-.103 0-.178-.019-.224-.056-.038-.037-.056-.103-.056-.196l.042-9.898c0-.159.07-.238.21-.238h1.386c.13 0 .196.075.196.224v9.856zm5.08.448c-.719 0-1.358-.159-1.918-.476a3.378 3.378 0 01-1.302-1.358c-.308-.579-.462-1.237-.462-1.974 0-.756.158-1.428.476-2.016a3.426 3.426 0 011.316-1.386c.56-.327 1.194-.49 1.904-.49.718 0 1.358.168 1.918.504.56.327.994.784 1.302 1.372.308.588.462 1.255.462 2.002 0 .737-.159 1.395-.476 1.974a3.378 3.378 0 01-1.302 1.358c-.56.327-1.2.49-1.918.49zm.014-1.246c.597 0 1.05-.224 1.358-.672.317-.448.476-1.092.476-1.932 0-.85-.159-1.503-.476-1.96-.318-.457-.77-.686-1.358-.686-.588 0-1.046.229-1.372.686-.318.457-.476 1.11-.476 1.96 0 .84.158 1.484.476 1.932.326.448.784.672 1.372.672zm6.616-6.314c.178 0 .266.084.266.252v.476c0 .075.024.112.07.112.028 0 .066-.023.112-.07.299-.28.598-.5.896-.658.308-.168.71-.252 1.204-.252.57 0 1.074.14 1.512.42.448.28.798.705 1.05 1.274.252.56.378 1.25.378 2.072 0 1.279-.28 2.254-.84 2.926-.56.672-1.302 1.008-2.226 1.008-.746 0-1.381-.238-1.904-.714-.093-.075-.154-.112-.182-.112-.046 0-.07.065-.07.196v2.576c0 .15-.065.224-.196.224h-1.428c-.13 0-.196-.075-.196-.224V42.86c0-.103.019-.173.056-.21.047-.047.122-.07.224-.07h1.274zm.266 5.6c.467.513.976.77 1.526.77.579 0 1.032-.224 1.358-.672.327-.457.49-1.153.49-2.086 0-.896-.163-1.545-.49-1.946-.317-.41-.751-.616-1.302-.616-.298 0-.569.065-.812.196-.242.121-.434.28-.574.476-.13.196-.196.401-.196.616v3.262zm8.169-1.316c0 .383.089.728.266 1.036.177.299.42.537.728.714a2.18 2.18 0 001.036.252c.383 0 .728-.08 1.036-.238.317-.168.616-.425.896-.77.047-.047.084-.07.112-.07.028 0 .07.014.126.042l.854.378c.065.028.098.07.098.126 0 .028-.019.07-.056.126-.42.607-.887 1.04-1.4 1.302-.504.252-1.129.378-1.876.378-.709 0-1.349-.159-1.918-.476a3.4 3.4 0 01-1.316-1.33c-.317-.57-.476-1.218-.476-1.946 0-.784.163-1.475.49-2.072.327-.597.77-1.06 1.33-1.386a3.628 3.628 0 011.862-.49c.7 0 1.316.154 1.848.462.541.308.957.756 1.246 1.344.299.579.448 1.27.448 2.072v.056c0 .093-.014.159-.042.196-.028.037-.089.06-.182.07h-4.956c-.103 0-.154.075-.154.224zm3.318-1.26c.093 0 .154-.01.182-.028.037-.028.056-.084.056-.168 0-.299-.065-.588-.196-.868a1.675 1.675 0 00-.588-.686 1.54 1.54 0 00-.91-.266c-.551 0-.999.196-1.344.588-.336.383-.499.859-.49 1.428h3.29zM256.48 50c-.168 0-.252-.084-.252-.252v-6.93c0-.159.065-.238.196-.238h1.358c.13 0 .196.07.196.21v.854c0 .075.023.112.07.112.028 0 .065-.023.112-.07a3.569 3.569 0 011.022-.91c.373-.224.737-.336 1.092-.336.336 0 .504.075.504.224v1.344c0 .13-.061.187-.182.168a3.587 3.587 0 00-.868-.098c-.243 0-.5.065-.77.196-.262.13-.481.303-.658.518-.168.205-.252.42-.252.644v4.284c0 .187-.108.28-.322.28h-1.246z",fill:"#007AB9"})]})},o=function(c){var e=c.items;return(0,t.jsxs)("header",{children:[(0,t.jsx)(l,{}),(0,t.jsx)("nav",{children:e.map((function(c){return(0,t.jsx)(a.default,{href:c.to,children:c.label},"menu-".concat(c.label))}))})]})};n(2702);function i(c,e){var n=Object.keys(c);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(c);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(c,e).enumerable}))),n.push.apply(n,t)}return n}function u(c){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(c,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(n,e))}))}return c}var s=function(c){var e=c.Component,n=c.pageProps;return(0,t.jsxs)("div",{children:[(0,t.jsx)(o,{items:[{to:"#skills",label:"Skills"},{to:"#career",label:"Career"},{to:"#experience",label:"Experience"},{to:"#blog",label:"Blog"}]}),(0,t.jsx)(e,u({},n))]})}},6363:function(c,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2732)}])},2702:function(){},1664:function(c,e,n){c.exports=n(2167)}},function(c){var e=function(e){return c(c.s=e)};c.O(0,[774,179],(function(){return e(6363),e(4651)}));var n=c.O();_N_E=n}]);