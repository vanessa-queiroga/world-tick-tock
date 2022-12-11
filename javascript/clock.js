function loadTime() {
  //London TimeZone

  let london = document.querySelector("#london");
  let londonDate = document.querySelector("#london .date");
  let londonTime = document.querySelector("#london .time");
  let londonTimezone = moment().tz("Europe/London");

  londonDate.innerHTML = londonTimezone.format("dddd Mo [of] MMMM YYYY");
  londonTime.innerHTML = londonTimezone.format("HH:mm:ss");

  let tokyo = document.querySelector("#tokyo");
  let tokyoDate = document.querySelector("#tokyo .date");
  let tokyoTime = document.querySelector("#tokyo .time");
  let tokyoTimezone = moment().tz("Asia/Tokyo");

  tokyoDate.innerHTML = tokyoTimezone.format("dddd Mo [of] MMMM YYYY");
  tokyoTime.innerHTML = tokyoTimezone.format("HH:mm:ss");

  let brazil = document.querySelector("#brazil");
  let brazilDate = document.querySelector("#brazil .date");
  let brazilTime = document.querySelector("#brazil .time");
  let brazilTimezone = moment().tz("Brazil/East");

  brazilDate.innerHTML = brazilTimezone.format("dddd Mo [of] MMMM YYYY");
  brazilTime.innerHTML = brazilTimezone.format("HH:mm:ss");

  let australia = document.querySelector("#australia");
  let australiaDate = document.querySelector("#australia .date");
  let australiaTime = document.querySelector("#australia .time");
  let australiaTimezone = moment().tz("Australia/Sydney");

  australiaDate.innerHTML = australiaTimezone.format("dddd Mo [of] MMMM YYYY");
  australiaTime.innerHTML = australiaTimezone.format("HH:mm:ss");
}

loadTime();
setInterval(loadTime, 1000);
