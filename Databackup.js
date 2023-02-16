const opdEl = document.getElementById("opd-num");
const fnameEl = document.getElementById("firstname");
const lnameEl = document.getElementById("lastname");
const addressEl = document.getElementById("address");
const numberEl = document.getElementById("phone-num");
const ageEl = document.getElementById("age");
const sexEl = document.getElementById("sex");
const delteEl = document.getElementById("delete-btn");

const buttonEl = document.getElementById("submitData");

const patientinfo = [opdEl, fnameEl, lnameEl, addressEl, numberEl, ageEl, sexEl];

const objIndex = [
  "opdNumber",
  "firstName",
  "lastName",
  "address",
  "phoneNumber",
  "age",
  "sex",
];

let data = [];
let obj = {};
let infoRendered = false;

buttonEl.addEventListener("click", renderInfo);
<a href="Hospitalsite.html"></a>

function renderInfo() {
  // obj = JSON.parse(localStorage.getItem("patientData"));
  for (let i = 0; i < patientinfo.length; i++) {
    if (patientinfo[i].value) {
      if (patientinfo[i] === opdEl) {
        data.push(parseInt(patientinfo[i].value));
      } else {
        data.push(patientinfo[i].value);
      }
    } else {
      // alert(`${objIndex[i]} EMPTY !`)
      // console.log(`Field Empty at ${objIndex[i]}`)
    }
  }
  if (data && opdEl.value) {
    console.log(data);
    obj[parseInt(opdEl.value)] = data;
    data = [];
    console.log(obj);
    localStorage.setItem("patientData", JSON.stringify(obj));
    clearValue();
    infoRendered = true;
  } else {
    console.log("Fields Empty");
  }
}
console.log(infoRendered);

if (infoRendered) {
  console.log(localStorage.getItem("patientData"));
}

delteEl.addEventListener("click", deleteData);

function deleteData() {
  localStorage.clear();
  console.log(localStorage);
}

function clearValue() {
  obj = {};
  for (let i = 0; i < patientinfo.length; i++) {
    patientinfo[i].value = "";
  }
}
