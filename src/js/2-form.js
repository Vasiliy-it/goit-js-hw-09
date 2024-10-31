const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

let formData = { email: "", message: "" };


const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (savedData) {
    formData = savedData;
    form.email.value = savedData.email || "";
    form.message.value = savedData.message || "";
}


form.addEventListener("input", (event) => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});


form.addEventListener("submit", (event) => {
    event.preventDefault();

    
    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    
    console.log("Form Data:", formData);

    
    localStorage.removeItem(STORAGE_KEY);
    formData = { email: "", message: "" };
    form.reset();
});
