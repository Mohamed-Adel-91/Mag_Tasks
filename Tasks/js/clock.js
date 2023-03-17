function showTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var second = date.getSeconds();

  if (hours > 12) {
    hours = hours - 12;
    second = second + " " + "pm";
  } else {
    hours = hours;
    second = second + " " + "am";
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  second = second < 10 ? "0" + second : second;

  var time = hours + " : " + minutes + " : " + second;
  document.getElementById("myClock").innerHTML = time;
  setTimeout(showTime, 1000);
}
showTime();
