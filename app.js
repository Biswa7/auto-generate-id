var sarray = [];
var data = {};
var mytable = document.getElementById("regtable")
var fname = document.getElementById("fname");
var uname = document.getElementById("uname");
var email = document.getElementById("email");
var password = document.getElementById("pass");
var sbt = document.getElementById("sbt");
var id;

var ctr = 1;

// localstorage stores values in your local browser
var myStore = window.localStorage;

var myData = JSON.parse(myStore.getItem('myData'));
if(myData && myData.length){
  ctr = myData.length+1;
  sarray = myData;
}

listElements();

sbt.addEventListener("click", function (event) {
  event.preventDefault();
  if (fname.value && uname.value && email.value && password.value) {
    let y = "xx" + ctr;
    data = {

      "id": y,
      "fname": fname.value,
      "uname": uname.value,
      "email": email.value,
      "password": pass.value,
    }
    ctr++;
    sarray.push(data);
    myStore.setItem('myData', JSON.stringify(sarray));
    listElements();
  }
});

function listElements() {
  mytable.innerHTML = '';
  // mytable.style.border = "thin dotted #0000FF";
  addRow({
    id: "Id",
    fname: "Name",
    uname: "Uname",
    email: "Email",
    password: "Password"
  }, 0 );

  sarray.forEach((item, index) => addRow(item, index+1));
};


function addRow(item, index) {
    var row = mytable.insertRow(index);
    var col1 = row.insertCell(0);
    var col2 = row.insertCell(1);
    var col3 = row.insertCell(2);
    var col4 = row.insertCell(3);
    var col5 = row.insertCell(4);
    col1.innerHTML = item.id;
    col2.innerHTML = item.fname;
    col3.innerHTML = item.uname;
    col4.innerHTML = item.email;
    col5.innerHTML = item.password;
};