function askDay() {

let day = prompt("Enter a day of the week:");
switch (day) {
    case "Monday":
        alert("Your task for Monday is: Finish you assignments.");
        break;
    case "Tuesday":
        alert("Your task for Tuesday is: Attend the google meet.");
        break;
    case "Wednesday":
        alert("Your task for Wednesday is: Study for midterm exam.");
        break;
    // Add cases for other days
    default:
        alert("Invalid day of the week.");
}
}