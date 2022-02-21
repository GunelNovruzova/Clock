setInterval(GetTime,1000)
function GetTime(){
    var date=new Date();
    var hour=date.getHours();
    var min=date.getMinutes();
    var sec= date.getSeconds();
    if (sec<10) {
        sec= '0'+sec;  
      }
    if (min<10) {
        min='0'+min;
    }
    if (hour<10) {
        hour='0'+hour;
    }
    var time=document.getElementById('time')
    time.innerHTML = `${hour} : ${min} : ${sec}`
}
GetTime();
