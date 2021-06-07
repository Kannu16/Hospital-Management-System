let d = document.getElementById("doctor");
let s = document.getElementById("staff");
let a = document.getElementById("admin");
let toggle_btn = document.getElementById("btn");

function doctor() {
  toggle_btn.style.left = "0px";
  s.style.display = "none";
  d.style.display = "block";
  a.style.display = "none";
}
function staff() {
  toggle_btn.style.left = "70px";
  d.style.display = "none";
  s.style.display = "block";
  a.style.display = "none";
}
function admin() {
  toggle_btn.style.left = "140px";
  d.style.display = "none";
  s.style.display = "none";
  a.style.display = "block";
}
function doctorLogin(form) {
  if (
    form.d_email.value == "doctor@gmail.com" &&
    form.d_password.value == "doctor"
  ) {
    alert("login success");
    window.open("doctors.html");
  } else {
    alert("Invalid username or password");
  }
}

function staffLogin(form) {
  if (
    form.s_email.value == "staff@gmail.com" &&
    form.s_password.value == "staff"
  ) {
    alert("login success");
    window.open("staffs.html");
  } else {
    alert("Invalid username or password");
  }
}

function adminLogin(form) {
  if (
    form.a_email.value == "admin@gmail.com" &&
    form.a_password.value == "admin"
  ) {
    alert("login success");
    window.open("admin.html");
  } else {
    alert("Invalid username or password");
  }
}
