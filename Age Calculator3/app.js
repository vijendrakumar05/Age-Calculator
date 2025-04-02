let inputValue = document.getElementById("birthDate");
let result = document.getElementById("result");
let btn1 = document.getElementById("calculateAge");
let btn2 = document.getElementById("clear");

btn1.addEventListener("click", function (e) {
    e.preventDefault();

    let ageYears = 0;
    let ageMonths = 0;          
    let ageDays = 0;

    if (inputValue.value === "") {
       result.textContent = "Please Provide date of birth.";
        return;
    }

    const dob = new Date(inputValue.value);
    const birthYear = dob.getFullYear();
    const birthMonth = dob.getMonth(); // Months are zero-based (0 - 11)
    const birthDate = dob.getDate();

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth(); // Zero-based month (0 - 11)
    const currentDate = today.getDate();

    if (dob > today) {
        result.textContent = "Date of birth cannot be in the future.";
        return;
    }

    // Calculate age in days
    ageDays = currentDate - birthDate;

    if (ageDays < 0) {
        const previousMonth = new Date(currentYear, currentMonth, 0); 
        ageDays += previousMonth.getDate(); 
        ageMonths--; 
    }

    // Calculate age in months
    ageMonths += currentMonth - birthMonth;
    if (ageMonths < 0) {
        ageMonths += 12; 
        ageYears--; 
    }

    // Calculate age in years
    ageYears = currentYear - birthYear;

    let resultString = "Your age is : ";

    if (ageYears > 0) {
        resultString += `${ageYears} ${ageYears === 1 ? "year" : "years"} `;
    }
    if (ageMonths > 0) {
        resultString += `${ageMonths} ${ageMonths === 1 ? "month" : "months"} `;
    }
    if (ageDays > 0) {
        resultString += `${ageDays} ${ageDays === 1 ? "day" : "days"}`;
    }

    if (ageYears === 0 && ageMonths === 0 && ageDays === 0) {
        resultString = "You were born today!";
    }

    result.textContent = resultString;
});

btn2.addEventListener("click", function() {
    inputValue.value = "";  // Clear the input field
    result.textContent = ""; // Clear the result text
});
