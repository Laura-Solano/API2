//HOLIDAY calendar to check by date with summary
const key = "177cfc8ed19ecce7b8fc5dda1606679a1e87b7e6";
const baseURL = `https://calendarific.com/api/v2/holidays?api_key=${key}&country=US&year=2021`;


///Today holiday pull
const today = new Date();
today.setHours(0, 0, 0, 0);
// console.log(today)



// async function fetchTodayHoliday() {
//   const response = await fetch (baseURL, {
//     method: "GET", 
    
//   });

//   const data = await response.json();
//     // console.log(data);
//     .then(json => fetchTodayHoliday(json)
//       )



//   let submitButton = document.getElementById("submitButton");
//   submitButton.addEventListener("click", fetchHoliday);
//   const holidayFillIn = document.querySelector('searchedHoliday');



// while (searchedHoliday.firstChild) { 
//   searchedHoliday.removeChild(searchedHoliday.firstChild);