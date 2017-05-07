function calculateDayInYear(date) {  //2015/12/31 i
  var splitDate = date.split('/');    //seperate 2015 12 31

  var year = Number(splitDate[0]);   // 2015

  var month = Number(splitDate[1]);  //  12

  var day = Number(splitDate[2]);    //  31

  var febDays = daysInFeb(month);      // 12

  var DAYS_IN_MONTH = [31, febDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (year && validMonth(month) && validDay(month, day)) {
    console.log(date, "is day", calculateDayNumber(month, day), "of the year", year);
  } else {
    console.log("Invalid date");
  }

  function validMonth(month) {
    if(month == 2){
      isLeapYear(year);
    }
    return month && month >= 1 && month <= 12;
  }

  function validDay(month, day) {
    return day && day >= 1 && day <= DAYS_IN_MONTH[month - 1];
  }

  function calculateDayNumber(month, day){ //12 31
    var dayOfYear = 0;

    for (var i = 1; i < month; i++) { //3/ 1 --> 32
      dayOfYear = dayOfYear + DAYS_IN_MONTH[i - 1];  //31 +
    }
    dayOfYear = dayOfYear + day;
    return dayOfYear;

  }

  function daysInFeb(year) {

    return 28;
  }
  function isLeapYear(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
    return isMultiple(year, 400) || !isMultiple(year, 100) && isMultiple(year, 4);
  }
  }


  function isMultiple(numerator, denominator) {
  if(numerator % denominator === 0){
    return DAYS_IN_MONTH[1] = 29;
  }
  }
}


var date = process.argv[2];

if (!date) {
  console.log("Please provide a date in the format YYYY/MM/DD");
} else {
  calculateDayInYear(date);
}

// 2015/12/31 is day 365 of the year 2015
// 2000/3/2 is day 62 of the year 2000
// 1900/3/2 is day 61 of the year 1900
// 2012/2/29 is day 60 of the year 2012
