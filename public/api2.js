//HOLIDAY calendar to check by date with summary
const key = "177cfc8ed19ecce7b8fc5dda1606679a1e87b7e6";
const baseURL = `https://calendarific.com/api/v2/holidays?api_key=${key}&country=US&year=2021`;
const date = document.querySelector("#date");
const submitButton = document.querySelector("#submitButton");
const todayHoliday = document.querySelector("#todayHoliday");
const todayHolidayDescription = document.querySelector(
  "#todayHolidayDescription"
);
const searchedHoliday = document.querySelector("#searchedHoliday");
const searchForm = document.querySelector("form");
const nav = document.querySelector("nav");

console.log(date.value);

const today = new Date();
today.setHours(0, 0, 0, 0);

function fetchHoliday(e) {
  e.preventDefault();
}

const fetchTodayHoliday = async () => {
  const response = await fetch(baseURL);
  const holidays = await response.json();
  displayRandomCurrentHoliday(holidays);
};

function displayRandomCurrentHoliday(currentHolidays) {
  let tempHolidays = currentHolidays.response;
  let todayHolidays = [];

  for (const holiday of tempHolidays.holidays) {
    if (
      today.getMonth() + 1 == holiday.date.datetime.month &&
      today.getDate() == holiday.date.datetime.day
    ) {
      console.log(today.getMonth() + 1, today.getDate());
      console.log(holiday.date.datetime.month, holiday.date.datetime.day);
      todayHolidays.push(holiday.name);
    }
  }
  console.log(todayHolidays);

  let rando = [Math.floor(Math.random() * todayHolidays.length)];
  console.log(todayHolidays[rando]);

  let holiday = document.createElement("h2");
  holiday.innerText = `${todayHolidays[rando]}`;
  todayHoliday.appendChild(holiday);
}

fetchTodayHoliday();

let title = document.createElement("h2");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  title.innerText = `Holidays From:${date.value}`;
  console.log(title);
  fetch(baseURL)
    .then((response) => response.json())
    .then((json) => {
      displayResults(json);
    });
});

function getDateForAPI(date) {
  const newDate = date.split("-");
  const month = newDate[1];
  const day = newDate[2];
  const tempMonth = month.split("");
  const tempDay = day.split("");
  let finalMonth;
  let finalDay;
  if (tempMonth[0] === "0") {
    finalMonth = tempMonth[1];
  } else {
    finalMonth = tempMonth.join("");
  }
  if (tempDay[0] === "0") {
    finalDay = tempDay[1];
  } else {
    finalDay = tempDay.join("");
  }
  return { month: finalMonth, day: finalDay };
}

function displayResults(holidays) {
  if (date.innerText.length !== 0) {
    searchedHoliday.removeChild(holidayList);
  }
  let holidayNames = [];
  holidays.response.holidays.map((holiday) => {
    console.log(getDateForAPI(date.value).month);
    if (
      getDateForAPI(date.value).month == holiday.date.datetime.month &&
      getDateForAPI(date.value).day == holiday.date.datetime.day
    ) {
      holidayNames.push(holiday.name);
    }
  });

  holidayNames.forEach((hName) => {
    let holidayList = document.createElement("li");
    holidayList.innerText = hName;
    searchedHoliday.appendChild(holidayList);
  });
}
