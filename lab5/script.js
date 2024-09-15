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


const tableBody = document.querySelector('#numberTable tbody');
const colorPalette = document.getElementById('colorPalette');
const colorPicker = document.getElementById('colorPicker');

let counter = 1;

for (let i = 0; i < 6; i++) {
  const row = document.createElement('tr');
  for (let j = 0; j < 6; j++) {
    const cell = document.createElement('td');
    cell.textContent = counter;
    row.appendChild(cell);
    counter++;
  }
  tableBody.appendChild(row);
}

const ninthCell = tableBody.rows[1].cells[2];
let clickTimeout;
let isDoubleClick = false;

ninthCell.addEventListener('mouseover', () => {
  const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
  ninthCell.style.backgroundColor = randomColor;
});

ninthCell.addEventListener('click', function () {
  clickTimeout = setTimeout(() => {
    if (!isDoubleClick) { 
      console.log("Single Click Fire");
      colorPicker.click(); 
    }
    isDoubleClick = false;
  }, 250);
});

ninthCell.addEventListener('dblclick', function () {
  clearTimeout(clickTimeout);

  isDoubleClick = true;

  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  ninthCell.style.backgroundColor = randomColor;
  tableBody.rows[3].cells[2].style.backgroundColor = randomColor;
  tableBody.rows[5].cells[2].style.backgroundColor = randomColor;
});