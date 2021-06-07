staffSelectedRow = null;

function onStaffsFormSubmit() {
  var staffFormData = readStuffFormData();
  if (staffSelectedRow == null) insertStaffRecord(staffFormData);
  else updateStaffRecord(staffFormData);
  resetStaffForm();
}
function readStuffFormData() {
  var staffFormData = {};
  staffFormData["s_name"] = document.getElementById("s_name").value;
  staffFormData["s_j_date"] = document.getElementById("s_j_date").value;
  staffFormData["s_deprt"] = document.getElementById("s_deprt").value;
  staffFormData["s_email"] = document.getElementById("s_email").value;
  staffFormData["s_salary"] = document.getElementById("s_salary").value;
  staffFormData["s_city"] = document.getElementById("s_city").value;
  staffFormData["s_number"] = document.getElementById("s_number").value;
  staffFormData["s_sex"] = document.getElementById("s_sex").value;
  return staffFormData;
}

function insertStaffRecord(staffData) {
  var staffTable = document
    .getElementById("staffsList")
    .getElementsByClassName("newInsertedStaffsList")[0];
  var newStaffRow = staffTable.insertRow(staffTable.length);

  cell1 = newStaffRow.insertCell(0);
  cell1.innerHTML = staffData.s_name;

  cell2 = newStaffRow.insertCell(1);
  cell2.innerHTML = staffData.s_j_date;

  cell3 = newStaffRow.insertCell(2);
  cell3.innerHTML = staffData.s_deprt;

  cell4 = newStaffRow.insertCell(3);
  cell4.innerHTML = staffData.s_email;

  cell5 = newStaffRow.insertCell(4);
  cell5.innerHTML = staffData.s_salary;

  cell6 = newStaffRow.insertCell(5);
  cell6.innerHTML = staffData.s_city;

  cell7 = newStaffRow.insertCell(6);
  cell7.innerHTML = staffData.s_number;

  cell8 = newStaffRow.insertCell(7);
  cell8.innerHTML = staffData.s_sex;

  cell9 = newStaffRow.insertCell(8);
  cell9.innerHTML = `<a href="#Staff" class="d_edit_icon" onClick="onStaffEdit(this)"><i class="fas fa-edit"></i></a>
                     <a href="#" class="d_delete_icon" onClick="onStaffDelete(this)"><i class="fas fa-trash-alt"></i></a>`;
}
function resetStaffForm() {
  document.getElementById("s_name").value = "";
  document.getElementById("s_j_date").value = "";
  document.getElementById("s_deprt").value = "";
  document.getElementById("s_email").value = "";
  document.getElementById("s_salary").value = "";
  document.getElementById("s_city").value = "";
  document.getElementById("s_number").value = "";
  document.getElementById("s_sex").value = "";
  staffSelectedRow = null;
}

function onStaffEdit(td) {
  staffSelectedRow = td.parentElement.parentElement;
  document.getElementById("s_name").value = staffSelectedRow.cells[0].innerHTML;
  document.getElementById("s_j_date").value =
    staffSelectedRow.cells[1].innerHTML;
  document.getElementById("s_deprt").value =
    staffSelectedRow.cells[2].innerHTML;
  document.getElementById("s_email").value =
    staffSelectedRow.cells[3].innerHTML;
  document.getElementById("s_salary").value =
    staffSelectedRow.cells[4].innerHTML;
  document.getElementById("s_city").value = staffSelectedRow.cells[5].innerHTML;
  document.getElementById("s_number").value =
    staffSelectedRow.cells[6].innerHTML;
  document.getElementById("s_sex").value = staffSelectedRow.cells[7].innerHTML;
}

function updateStaffRecord(staffFormData) {
  staffSelectedRow.cells[0].innerHTML = staffFormData.s_name;
  staffSelectedRow.cells[1].innerHTML = staffFormData.s_j_date;
  staffSelectedRow.cells[2].innerHTML = staffFormData.s_deprt;
  staffSelectedRow.cells[3].innerHTML = staffFormData.s_email;
  staffSelectedRow.cells[4].innerHTML = staffFormData.s_salary;
  staffSelectedRow.cells[5].innerHTML = staffFormData.s_city;
  staffSelectedRow.cells[6].innerHTML = staffFormData.s_number;
  staffSelectedRow.cells[7].innerHTML = staffFormData.s_sex;
}
function onStaffDelete(td) {
  if (confirm("Are you sure want to delete")) {
    staffRow = td.parentElement.parentElement;
    document.getElementById("staffsList").deleteRow(staffRow.rowIndex);
    resetForm();
  }
}

//Search filter

const searchStaff = () => {
  let staffFilter = document
    .getElementById("search_staff_input")
    .value.toUpperCase();

  let staffTableBody = document.getElementById("search_staffs");

  let newStaffTableBody = staffTableBody.getElementsByTagName("tr");

  for (var i = 0; i < newStaffTableBody.length; i++) {
    let staffTableData = newStaffTableBody[i].getElementsByTagName("td")[0];

    let staffTextValue = staffTableData.textContent || staffTableData.innerHTML;

    if (staffTextValue.toUpperCase().indexOf(staffFilter) > -1) {
      newStaffTableBody[i].style.display = "";
    } else {
      newStaffTableBody[i].style.display = "none";
    }
  }
};
