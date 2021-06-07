// console.log("kunal");
// patient Crud Operation end

var selectedRow = null;

function onPatientFormSubmit() {
  var formData = readFormData();
  if (selectedRow == null) insertRecord(formData);
  else updateRecord(formData);
  resetForm();
}
function readFormData() {
  var formData = {};
  formData["p_name"] = document.getElementById("p_name").value;
  formData["p_age"] = document.getElementById("p_age").value;
  formData["p_sex"] = document.getElementById("p_sex").value;
  formData["p_a_date"] = document.getElementById("p_a_date").value;
  formData["p_mobile"] = document.getElementById("p_mobile").value;
  formData["p_address"] = document.getElementById("p_address").value;
  return formData;
}

function insertRecord(data) {
  var table = document
    .getElementById("patientsList")
    .getElementsByClassName("newInsertedPatientList")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.p_name;

  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.p_age;

  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.p_sex;

  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.p_a_date;

  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.p_mobile;

  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.p_address;

  cell9 = newRow.insertCell(6);
  cell9.innerHTML = `<a href="#patientsList" class="p_edit_icon" onClick="onEdit(this)"><i class="fas fa-edit"></i></a>
                     <a href="#" class="p_delete_icon" onClick="onDelete(this)"><i class="fas fa-trash-alt"></i></a>`;
}

function resetForm() {
  document.getElementById("p_name").value = "";
  document.getElementById("p_age").value = "";
  document.getElementById("p_sex").value = "";
  document.getElementById("p_a_date").value = "";
  document.getElementById("p_mobile").value = "";
  document.getElementById("p_address").value = "";
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("p_name").value = selectedRow.cells[0].innerHTML;
  document.getElementById("p_age").value = selectedRow.cells[1].innerHTML;
  document.getElementById("p_sex").value = selectedRow.cells[2].innerHTML;
  document.getElementById("p_a_date").value = selectedRow.cells[3].innerHTML;
  document.getElementById("p_mobile").value = selectedRow.cells[4].innerHTML;
  document.getElementById("p_address").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.p_name;
  selectedRow.cells[1].innerHTML = formData.p_age;
  selectedRow.cells[2].innerHTML = formData.p_sex;
  selectedRow.cells[3].innerHTML = formData.p_a_date;
  selectedRow.cells[4].innerHTML = formData.p_mobile;
  selectedRow.cells[5].innerHTML = formData.p_address;
}

function onDelete(td) {
  if (confirm("Are you sure want to delete")) {
    row = td.parentElement.parentElement;
    document.getElementById("patientsList").deleteRow(row.rowIndex);
    resetForm();
  }
}

///Search filter
const searchPatient = () => {
  let patientFilter = document
    .getElementById("search_patient_input")
    .value.toUpperCase();

  let patientTableBody = document.getElementById("search_patients");

  let newPatientTableBody = patientTableBody.getElementsByTagName("tr");

  for (var i = 0; i < newPatientTableBody.length; i++) {
    let patientTableData = newPatientTableBody[i].getElementsByTagName("td")[0];

    let patientTextValue =
      patientTableData.textContent || patientTableData.innerHTML;

    if (patientTextValue.toUpperCase().indexOf(patientFilter) > -1) {
      newPatientTableBody[i].style.display = "";
    } else {
      newPatientTableBody[i].style.display = "none";
    }
  }
};

//Chart js
// pie
var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Doctors", "Patients", "Recovered"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 9],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
});

// Bar
var ctx = document.getElementById("myBarChart").getContext("2d");
var myBarChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Doctors", "Patients", "Recovered"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 9],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
});
