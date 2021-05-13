  function createCalendar(elem, year, month) {
      let s = "<table>";
      let list = ["MO","TU","WE","TH","FR","SA","SU"];
      for (let i = 0; i < list.length; i++ ) {
        s += `<th>${list[i]}</th>`;
      }
      let firstDate = new Date(year, month - 1);
      let startDay = firstDate.getDay() == 0 ? 7 : firstDate.getDay();
     
      let endDay = new Date(year, month, 0).getDate();
      console.log(startDay)
      console.log(endDay);
      let wholetdNum = startDay +endDay - 1;
      console.log(wholetdNum);
      let trNum = wholetdNum % 7 == 0 ? wholetdNum / 7 : Math.floor(wholetdNum / 7) + 1;
      console.log(trNum);
      s += "<tbody><tr>";
      let day = 1;

      for (let i = 0; i < 7; i++) {
        if (i < startDay - 1) {
          s += `<td></td>`;
        } else {
          s += `<td>${day}</td>`;
          day ++;
        }
      } 
      s += `</tr>`;
     for (let i = 0; i < trNum - 1; i++) {
       s += `<tr>`;
       for (let j = 0; j < 7; j++  ) { 
         if (day <= endDay) {
          s += `<td>${day}</td>`;
          day ++;
         } else {
           s += `<td></td>`;
         }
     
       }
       s +=  `</tr>`;
     }


      s += "</tbody></table>";
      console.log(s);
      elem.insertAdjacentHTML('afterbegin', s);
      
      

    }

    createCalendar(document.getElementById("calendar"), new Date().getFullYear(), new Date().getMonth() + 1);