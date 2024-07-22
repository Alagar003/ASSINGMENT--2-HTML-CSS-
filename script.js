const form = document.getElementById("user-form");
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    clearSpans();
    if (validateForm()) {
        createTable();
    }
});

function validateForm() {
    let isValid = true;
    const fields = ["firstname", "lastname", "email"];
    fields.forEach(field => {
        const input = document.getElementById(field);
        if (!input.value) {
            createSpan(input, `${field} is required.`);
            isValid = false;
        }
    });
    return isValid;
}

function createSpan(input, message) {
    const span = document.createElement("span");
    span.className = "error";
    span.textContent = message;
    input.parentNode.insertBefore(span, input.nextSibling);
}

function clearSpans() {
    const spans = document.querySelectorAll(".error");
    spans.forEach(span => {
        span.parentNode.removeChild(span);
    });
}

function clearForm() {
    form.reset();
    clearSpans();
}

function createTable() {
    const table = document.createElement('table')
    const lang=document.querySelectorAll("Language")
    const data = {
        "field":"value",
        "First Name": document.getElementById("firstname").value,
        "Last Name": document.getElementById("lastname").value,
        "Email": document.getElementById("email").value,
        "Language": document.querySelector('input[name="language"]:checked')? document.querySelector('input[name="language"]:checked').value:"Not selected",
        "Gender": document.querySelector('input[name="Gender"]:checked') ? document.querySelector('input[name="Gender"]:checked').value : "Not selected",
        "Education": document.getElementById("Education").value,
        "Comment": document.getElementById("comment").value

    };

    

    Object.entries(data).forEach(([field, value], index) => {
        const row = table.insertRow(index);
        const fieldCell = row.insertCell(0);
        const valueCell = row.insertCell(1);
        fieldCell.textContent = field;
        valueCell.textContent = value;
    });

    document.body.appendChild(table);
}