/**
 * Constructs today's date as a numeric string in the format MMDDYYYY
 * @return {string} today's date in MMDDYYYY
 */
function todaysDate() {
  const d = new Date();
  let month = (d.getMonth() + 1).toString();
  if (month.length <= 1) { month = "0" + month; }

  let day = d.getDate().toString();
  if (day.length <= 1) { day = "0" + day; }

  return month + day + d.getFullYear();
}

let utils = {
  "todaysDate": todaysDate
}

module.exports = utils;