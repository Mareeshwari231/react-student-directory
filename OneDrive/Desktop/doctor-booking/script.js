import greetUser, { validatePhone, validateEmail, isSunday, formatAppointment } from './appointmentUtils.js';

// Test data
const name = "Mareeshwari";
const email = "mareeshwari@example.com";
const phone = "9876543210";
const doctor = "Smith";
const date = "2025-08-20";
const time = "10:00 AM";

console.log(greetUser(name));
console.log("Valid email:", validateEmail(email));
console.log("Valid phone:", validatePhone(phone));
console.log("Appointment is not on Sunday:", !isSunday(date));
console.log("Formatted:", formatAppointment(name, doctor, date, time));
