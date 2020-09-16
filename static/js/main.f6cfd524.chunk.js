(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{120:function(e,t,a){e.exports=a(239)},125:function(e,t,a){},126:function(e,t,a){},239:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),o=a.n(l),i=(a(125),a(97)),c=a(98),s=a(109),u=a(108),m=(a(126),a(99)),h=a(251),d=a(248),p=a(249),f=a(240),b=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={AQI:"",hours:24,cigs:0,particles:0,warning:""},n}return Object(c.a)(a,[{key:"AQI2cigs",value:function(){var e=this.state,t=e.AQI,a=e.hours;try{if(t=parseInt(t),a=Number(a),isNaN(t))return void this.setState({warning:"AQI must be a number from 0 to 1000. Please no letters or symbols."});if(isNaN(a))return void this.setState({warning:"Number of hours must be a number. Please no letters or symbols."})}catch(r){return console.log(r),void this.setState({warning:"That's not a real number! Please try again."})}var n=Object(m.calcPM25)(t)/22/24*a;this.setState({cigs:n}),this.setState({warning:""})}},{key:"render",value:function(){var e=this,t=this.state,a=t.AQI,n=t.hours,l=t.cigs,o=t.warning,i=l.toFixed(2);return r.a.createElement("div",{className:"App"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(h.a,{as:"h1"},"AQI to Cigarettes Calculator"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"Input the Air Quality Index (AQI) where you live and how many hours you've been exposed. The calculator will tell you what the impact to your health is in cigarettes. Make sure to use PM 2.5 AQI otherwise results will not be accurate! (PM 2.5 is the default on purpleair.com)"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(d.a,{className:"max-200"},r.a.createElement(p.a,{fluid:!0,label:"AQI",value:a,onChange:function(t){return e.setState({AQI:t.currentTarget.value})}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(p.a,{fluid:!0,label:"Hours Exposed",value:n,onChange:function(t){return e.setState({hours:t.currentTarget.value})}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(f.a,{primary:!0,onClick:this.AQI2cigs.bind(this)},"Calculate"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"It's like you've smoked"),r.a.createElement(h.a,{as:"h2"},i),r.a.createElement("p",null,"cigarettes"),r.a.createElement("p",{className:"red"},o),r.a.createElement("div",{id:"info"},r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement(h.a,null,"How does this work?"),r.a.createElement("p",null,r.a.createElement("b",null,"Step 1"),": I converted AQI back to PM 2.5 particle concentration. That's the number of particles in the air that are a certain size. For this operation I used the same equation as"," ",r.a.createElement("a",{href:"https://www.airnow.gov/aqi/aqi-calculator/"},"the Air Now calculator"),"."),r.a.createElement("p",null,r.a.createElement("b",null,"Step 2"),": based on"," ",r.a.createElement("a",{href:"http://berkeleyearth.org/archive/air-pollution-and-cigarette-equivalence/"},"this research"),", the health impact of a particle concentration of 22\u03bcg/m3 per 24 hours is equivalent to about 1 cigarette. I divided the concentration from step 1 by 22 and 24, then multiplied by the number of hours exposed. This isn't going to be completely accurate since some kinds of air pollution are worse (wood smoke is apparently not as bad for you, for example) and I'm sure cigarettes vary in lethality. Note that I am looking at"," ",r.a.createElement("i",null,"impact to health"),", not particles inhaled."),r.a.createElement("p",null,"You'll notice the results are slightly off from what the researchers got. That's because when you convert particle density to AQI - and then back - you end up rounding a bit."),r.a.createElement("i",null,"Is my logic off? Did I science wrong? Please"," ",r.a.createElement("a",{href:"https://github.com/jasminedevv/AQI2cigarettes"},"leave an issue on GitHub"),"."),r.a.createElement(h.a,null,"How can I help?"),r.a.createElement("p",null,"Right now the people suffering the most from this disaster are the homeless and people displaced from the fires."),r.a.createElement("p",null,"If you can afford to, please donate to help. I would recommend:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://secure.qgiv.com/for/vif"},"Street Roots"),": a great paper in Portland which is run by and offers direct aid to houseless folks here."),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.gofundme.com/c/act/oregon-fires"}," ","This list of verified GoFundMes")," ","for people who lost their homes to the recent fires."," ")),r.a.createElement("p",null,"Also, please VOTE for candidates who will stand up to corporations and champion the climate cause.")),r.a.createElement("br",null),r.a.createElement("br",null)))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(238);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},99:function(e,t,a){"use strict";t.__esModule=!0,t.AQITablePM25={code:"PM2.5",unit:"ug/m3",period:"24h",concentrations:[{min:0,max:15,index:{min:0,max:50}},{min:15,max:40,index:{min:50,max:100}},{min:40,max:65,index:{min:100,max:150}},{min:65,max:150,index:{min:150,max:200}},{min:150,max:250,index:{min:200,max:300}},{min:250,max:500,index:{min:300,max:400}},{min:500,max:99999999999,index:{min:400,max:99999999999}}]},t.calcAQI=function(e){var a=function(e){var a=t.AQITablePM25.concentrations.find((function(t){if(t.index.min<=e&&t.index.max>e)return t}));if(void 0===a)throw new Error("concentration out of bounds: "+e);return a}(e),n=e,r=a.min,l=a.max,o=a.index.min;return(n-r)*(a.index.max-o)/(l-r)+o},t.calcPM25=function(e){var a=function(e){var a=t.AQITablePM25.concentrations.find((function(t){if(t.index.min<=e&&t.index.max>e)return t}));if(void 0===a)throw new Error("AQI out of bounds. AQI: "+e);return a}(e),n=a.min,r=a.max,l=a.index.min,o=a.index.max;return console.log(a),(r-n)*(e-l)/(o-l)+n}}},[[120,1,2]]]);
//# sourceMappingURL=main.f6cfd524.chunk.js.map