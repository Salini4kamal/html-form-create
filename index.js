
function myFunction(){
    var tbody=document.getElementById("tbody")
    var tr=document.createElement("tr")
var td1=document.createElement("td")
var t1=document.getElementById("fname").value
td1.append(t1)
tr.append(td1)

var td2=document.createElement("td")
var t2=document.getElementById("lname").value
td2.append(t2)
tr.append(td2)
var td3=document.createElement("id")
var t3=document.getElementById("addr").value
td3.append(t3)
tr.append(td3)
var td4=document.createElement("td")
var t4=document.getElementById("pin").value
td4.append(t4)
tr.append(td4)


var td5=document.createElement("td")
var t5=document.getElementsByName("gen")
var gender;
for(var i=0;i<t5.length;i++){
    if(t5[i].checked){
        gender=t5[i].value;
    }
}

td5.append(gender)

tr.append(td5)

var td6=document.createElement("td")
var select = document.getElementById('food');
 //var value = select.options[select.selectedIndex];
 //var value = select.options[select.selectedIndex];
var value = select.options[select.selectedIndex];
//select.append(value)
td6.append(value)
tr.append(td6)

var td7=document.createElement("td")
var t7=document.getElementById("state").value
td7.append(t7)
tr.append(td7)
var td8=document.createElement("td")
var t8=document.getElementById("country").value
td8.append(t8)
tr.append(td8)
tbody.append(tr)
document.body.append(tbody)
}