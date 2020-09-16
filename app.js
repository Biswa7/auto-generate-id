var sarray=[];
var data={};
var table = document.getElementById("regtable")
var name=document.getElementById("fname");
var uname=document.getElementById("uname");
var email=document.getElementById("email");
var password=document.getElementById("pass");
var id;
var ctr = 1;

function todo() {
    if(name.value && uname.value && email.value && password.value ){ 
    let y= "xx"+ctr;
    data={

    "id": y,
    "name": document.getElementById('fname').value,
    "uname": document.getElementById('uname').value,
    "email": document.getElementById('email').value,
    "password": document.getElementById('pass').value,
    
    }
    ctr++;
    sarray.push(data);
    listElements();
}
}

    function listElements() {
        mytable.innerHTML = '';
        sarray.forEach(function(item, index)
        {
          var row = table.insertRow(index);
          var col1 = row.insertCell(0);
          var col2 = row.insertCell(1);
          var col3 = row.insertCell(2);
          var col4 = row.insertCell(3);
          col1.innerHTML=item.id;
          col2.innerHTML=item.name;
          col3.innerHTML=item.uname;
          col4.innerHTML=item.email;
          col5.innerHTML=item.password;

        }
        );
      }