// Named exports
export function validatePhone(phone) {
    return /^\d{10}$/.test(phone);
}

export function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isSunday(dateString) {
    const date = new Date(dateString);
    return date.getDay() === 0; // 0 = Sunday
}

export function formatAppointment(name, doctor, date, time) {
    return `Appointment for ${name} with Dr. ${doctor} on ${date} at ${time}`;
}

// Default export
export default function greetUser(name) {
    return `Welcome back, ${name}!`;
}
