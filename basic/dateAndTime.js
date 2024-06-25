var myDate = new Date();
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// Adjust the time to IST (UTC+5:30) Indian standard
let currentDate = myDate.setMinutes(myDate.getMinutes() + myDate.getTimezoneOffset() + 330);
// console.log(myDate.toLocaleDateString());

// console.log(myDate.getDay());
// console.log(myDate.getMonth());

let newD = myDate.toLocaleString('default', {
    weekday : 'long',
    month : 'long'
})
// console.log(newD);