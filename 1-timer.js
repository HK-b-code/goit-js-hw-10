import"./assets/styles-DirTc3zV.js";import{f as l,i as u}from"./assets/vendor-BbbuE1sJ.js";const n=document.querySelector("[data-start]"),i=document.querySelector("#datetime-picker"),e={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let c=null,d=null;const m={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<=new Date?(u.error({title:"Error",message:"Please choose a date in the future"}),n.disabled=!0):(c=t[0],n.disabled=!1)}};l(i,m);function h(t){return{days:Math.floor(t/864e5),hours:Math.floor(t%864e5/36e5),minutes:Math.floor(t%864e5%36e5/6e4),seconds:Math.floor(t%864e5%36e5%6e4/1e3)}}function f(){d=setInterval(()=>{const t=c-new Date;if(t<=0){clearInterval(d),u.success({title:"Done",message:"Countdown finished!"});return}const{days:o,hours:r,minutes:s,seconds:a}=h(t);e.days.textContent=String(o).padStart(2,"0"),e.hours.textContent=String(r).padStart(2,"0"),e.minutes.textContent=String(s).padStart(2,"0"),e.seconds.textContent=String(a).padStart(2,"0")},1e3),n.disabled=!0,i.disabled=!0}n.addEventListener("click",f);
//# sourceMappingURL=1-timer.js.map
