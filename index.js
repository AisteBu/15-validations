const Validation = require('./js/Validation');

const v = new Validation();

console.assert(v.isValidFirstName('Vardenis') === true, 'ERROR');
console.assert(v.isValidLastName('Pavardenis') === true, 'ERROR');
console.assert(v.isValidEmail('demo@example.com') === true, 'ERROR: email');
console.assert(v.isValidMessage('Some message') === true, 'ERROR');
console.assert(v.isValidPhoneNumber(+37061234567) === true, 'ERROR');
console.assert(v.isValidMonthName('Sausis') === true, 'ERROR');
console.assert(v.isValidMonthName('January') === true, 'ERROR');
console.assert(v.isValidWeekDayName('Pirmadienis') === true, 'ERROR');
console.assert(v.isValidWeekDayName('Monday') === true, 'ERROR');
console.assert(v.isValidPersonID(39912311234) === true, 'ERROR');