// ===============================
// Configuration
// ===============================
const app = {
    data: [],
    currentStep: 1
};


// ===============================
// Initialize Application
// ===============================
document.addEventListener("DOMContentLoaded", () => {
    init();
});


function init() {
    console.log("Application Ready");
    loadData();
    bindEvents();
}


// ===============================
// Event Management
// ===============================
function bindEvents() {

    const btn = document.querySelector("#submitBtn");

    if (btn) {
        btn.addEventListener("click", handleSubmit);
    }

}


// ===============================
// Main Process
// ===============================
function handleSubmit() {

    const input = getInput();

    if (!validate(input)) {
        alert("กรุณาตรวจสอบข้อมูล");
        return;
    }

    const result = processData(input);

    displayResult(result);

}


// ===============================
// Input
// ===============================
function getInput() {

    return {
        value: document.querySelector("#inputData")?.value || ""
    };

}


// ===============================
// Validation
// ===============================
function validate(data) {

    return data.value.trim() !== "";

}


// ===============================
// Business Logic
// ===============================
function processData(data) {

    return {
        message: `ผลลัพธ์จาก ${data.value}`
    };

}


// ===============================
// Output
// ===============================
function displayResult(result) {

    const output = document.querySelector("#result");

    if (output) {
        output.innerHTML = result.message;
    }

}


// ===============================
// Data
// ===============================
function loadData() {

    // เตรียมเชื่อมฐานข้อมูล / Google Sheet / API ในอนาคต

}