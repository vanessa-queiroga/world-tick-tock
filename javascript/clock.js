function loadTime() {
  //London TimeZone

  let london = document.querySelector("#london");
  if (london) {
    let londonDate = document.querySelector("#london .date");
    let londonTime = document.querySelector("#london .time");
    let londonTimezone = moment().tz("Europe/London");

    londonDate.innerHTML = londonTimezone.format("dddd Mo [of] MMMM YYYY");
    londonTime.innerHTML = londonTimezone.format("HH:mm:ss");
  }

  let tokyo = document.querySelector("#tokyo");
  if (tokyo) {
    let tokyoDate = document.querySelector("#tokyo .date");
    let tokyoTime = document.querySelector("#tokyo .time");
    let tokyoTimezone = moment().tz("Asia/Tokyo");

    tokyoDate.innerHTML = tokyoTimezone.format("dddd Mo [of] MMMM YYYY");
    tokyoTime.innerHTML = tokyoTimezone.format("HH:mm:ss");
  }

  let australia = document.querySelector("#australia");
  if (australia) {
    let australiaDate = document.querySelector("#australia .date");
    let australiaTime = document.querySelector("#australia .time");
    let australiaTimezone = moment().tz("Australia/Sydney");

    australiaDate.innerHTML = australiaTimezone.format(
      "dddd Mo [of] MMMM YYYY"
    );
    australiaTime.innerHTML = australiaTimezone.format("HH:mm:ss");
  }
}

function showTimezone(event) {
  let timezoneMain = event.target.value;
  if (timezoneMain === "current") {
    timezoneMain = moment.tz.guess();
  }
  let cityName = timezoneMain.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(timezoneMain);
  let cityDropdown = document.querySelector("#cities");
  cityDropdown.innerHTML = ` <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("HH:mm:ss")} </div>
    <a href="/">Back to all cities</a>
  </div>
  `;
}

let cityElement = document.querySelector("#clock-dropdown");
cityElement.addEventListener("change", showTimezone);
loadTime();
setInterval(loadTime, 1000);
