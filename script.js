setInterval ((min,hours,day)=>{
   min = 60,hours = min*60,day =  hours *24;
   const latestDate = new Date();
   const futureDate = new Date("feb 11 2027");
   const deffrense = Math.floor((futureDate - latestDate)/1000);
   const sec = Math.floor(deffrense%60);
   const minCal = Math.floor((deffrense%hours)/min)
   const hourCal = Math.floor((deffrense%day)/hours);
   const days = Math.floor(deffrense/day)
const h1 = document.querySelectorAll(".chidcontiner h1")
  h1[0].textContent = days;
  h1[1].textContent = hourCal;
  h1[2].textContent = minCal;
  h1[3].textContent = sec;
  for(let v of h1){
   v.textContent < 10 ? v.textContent = "0" + v.textContent : v.textContent;
  }
},1000)
