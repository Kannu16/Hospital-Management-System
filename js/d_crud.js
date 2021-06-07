// Doctor Crud Operation end

var selectedRow = null;

function onFormSubmit() {
  var formData = readFormData();
  if (selectedRow == null) insertRecord(formData);
  else updateRecord(formData);
  resetForm();
}
function readFormData() {
  var formData = {};
  formData["d_name"] = document.getElementById("d_name").value;
  formData["d_j_date"] = document.getElementById("d_j_date").value;
  formData["d_deprt"] = document.getElementById("d_deprt").value;
  formData["d_email"] = document.getElementById("d_email").value;
  formData["d_salary"] = document.getElementById("d_salary").value;
  formData["d_city"] = document.getElementById("d_city").value;
  formData["d_number"] = document.getElementById("d_number").value;
  formData["d_sex"] = document.getElementById("d_sex").value;
  return formData;
}

function insertRecord(data) {
  var table = document
    .getElementById("doctorsList")
    .getElementsByClassName("newInsertedDoctorList")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.d_name;

  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.d_j_date;

  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.d_deprt;

  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.d_email;

  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.d_salary;

  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.d_city;

  cell7 = newRow.insertCell(6);
  cell7.innerHTML = data.d_number;

  cell8 = newRow.insertCell(7);
  cell8.innerHTML = data.d_sex;

  cell9 = newRow.insertCell(8);
  cell9.innerHTML = `<a href="#Doctor" class="d_edit_icon" onClick="onEdit(this)"><i class="fas fa-edit"></i></a>
                     <a href="#" class="d_delete_icon" onClick="onDelete(this)"><i class="fas fa-trash-alt"></i></a>`;
}

function resetForm() {
  document.getElementById("d_name").value = "";
  document.getElementById("d_j_date").value = "";
  document.getElementById("d_deprt").value = "";
  document.getElementById("d_email").value = "";
  document.getElementById("d_salary").value = "";
  document.getElementById("d_city").value = "";
  document.getElementById("d_number").value = "";
  document.getElementById("d_sex").value = "";
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("d_name").value = selectedRow.cells[0].innerHTML;
  document.getElementById("d_j_date").value = selectedRow.cells[1].innerHTML;
  document.getElementById("d_deprt").value = selectedRow.cells[2].innerHTML;
  document.getElementById("d_email").value = selectedRow.cells[3].innerHTML;
  document.getElementById("d_salary").value = selectedRow.cells[4].innerHTML;
  document.getElementById("d_city").value = selectedRow.cells[5].innerHTML;
  document.getElementById("d_number").value = selectedRow.cells[6].innerHTML;
  document.getElementById("d_sex").value = selectedRow.cells[7].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.d_name;
  selectedRow.cells[1].innerHTML = formData.d_j_date;
  selectedRow.cells[2].innerHTML = formData.d_deprt;
  selectedRow.cells[3].innerHTML = formData.d_email;
  selectedRow.cells[4].innerHTML = formData.d_salary;
  selectedRow.cells[5].innerHTML = formData.d_city;
  selectedRow.cells[6].innerHTML = formData.d_number;
  selectedRow.cells[7].innerHTML = formData.d_sex;
}

function onDelete(td) {
  if (confirm("Are you sure want to delete")) {
    row = td.parentElement.parentElement;
    document.getElementById("doctorsList").deleteRow(row.rowIndex);
    resetForm();
  }
}

///Search filter
const searchDoctor = () => {
  let doctorFilter = document
    .getElementById("search_doctor_input")
    .value.toUpperCase();

  let doctorTableBody = document.getElementById("search_doctors");

  let newDoctorTableBody = doctorTableBody.getElementsByTagName("tr");

  for (var i = 0; i < newDoctorTableBody.length; i++) {
    let doctorTableData = newDoctorTableBody[i].getElementsByTagName("td")[0];

    let doctorTextValue =
      doctorTableData.textContent || doctorTableData.innerHTML;

    if (doctorTextValue.toUpperCase().indexOf(doctorFilter) > -1) {
      newDoctorTableBody[i].style.display = "";
    } else {
      newDoctorTableBody[i].style.display = "none";
    }
  }
};
