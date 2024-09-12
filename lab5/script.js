function validateForm() {
    const pib = document.getElementById("pib");
    const variant = document.getElementById("variant");
    const group = document.getElementById("group");
    const faculty = document.getElementById("faculty");
    const dob = document.getElementById("dob");

    let isValid = true;

    const pibRegex = /^[А-ЯІЇЄA-Z'][а-яіїєa-z']+\s[А-ЯІЇЄA-Z]\.\s[А-ЯІЇЄA-Z]\.$/;
    const variantRegex = /^\d{2}$/;
    const groupRegex = /^[A-Za-zА-Яа-яіїІЇЯ]{2}-\d{2}$/;
    const facultyRegex = /^[А-ЯІЇЄA-Z]{4}$/;
    const dobRegex = /^(\d{2})\.(\d{2})\.(\d{4})$/;

    pib.classList.remove("error");
    variant.classList.remove("error");
    group.classList.remove("error");
    faculty.classList.remove("error");
    dob.classList.remove("error");

    if (!pibRegex.test(pib.value)) {
        pib.classList.add("error");
        isValid = false;
    }

    if (!variantRegex.test(variant.value)) {
        variant.classList.add("error");
        isValid = false;
    }

    if (!groupRegex.test(group.value)) {
        group.classList.add("error");
        isValid = false;
    }

    if (!facultyRegex.test(faculty.value)) {
        faculty.classList.add("error");
        isValid = false;
    }

    if (!dobRegex.test(dob.value)) {
        dob.classList.add("error");
        isValid = false;
    }

    if (isValid) {
        alert(
            `Full name: ${pib.value}\nVariant: ${variant.value}\nGroup: ${group.value}\nFaculty: ${faculty.value}\nDate of birth: ${dob.value}`
        );
    } else {
        alert("Check the correctness of the data!");
    }
}