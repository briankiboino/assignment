const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const days = [
    "Sunday",
    "Monday",
    "Tuseday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

export const getDate = (date, day) => {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var date = date.getDate();
    return `${months[month]} ${date} ${year}, ${days[day]}`
};