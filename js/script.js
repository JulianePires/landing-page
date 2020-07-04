!function(){"use strict";window.addEventListener("load",function(){var t=document.getElementsByClassName("needs-validation");Array.prototype.filter.call(t,function(t){t.addEventListener("submit",function(a){!1===t.checkValidity()&&(a.preventDefault(),a.stopPropagation()),$("#myModal").modal(),t.classList.add("was-validated")},!1)})},!1)}();

var countDownDate=new Date("Jul 5, 2020 12:00:00").getTime(),x=setInterval(function(){var e=(new Date).getTime(),t=countDownDate-e,n=Math.floor(t/864e5),o=Math.floor(t%864e5/36e5),a=Math.floor(t%36e5/6e4),r=Math.floor(t%6e4/1e3);document.getElementById("demo").innerHTML="FALTAM "+n+"D "+o+"H "+a+"M "+r+"S ",t<0&&(clearInterval(x),document.getElementById("demo").innerHTML="Oferta Expirada!")},1e3);

