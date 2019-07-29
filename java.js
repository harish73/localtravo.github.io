
function Myfun(){
	
	var a=document.getElementById("name").value;
	
	var b=document.getElementById("lastname").value;
	
	var c=document.getElementById("mail").value;
	var d=document.getElementById("number").value;
	var e=document.getElementById("lang").value;
	var f=document.getElementById("loca").value;
	var x=document.getElementById("dob").value;
	var selectedGender;
document.getElementsByName("gender").forEach(function(elm) {
  if (elm.checked) {
    selectedGender = elm.value;
  }
}
)
	
console.log(e);
if(a==""){
	alert("name cannot be empty");
}
else if(b==""){
	
	alert("Last name cannot be empty");
}
else if(c==""){
	
	alert("Mail cannot be empty");
}
else if(d==""){
	
	alert("number cannot be empty");
}
else if(d.length<10 || d.length>10){
	
	alert("please enter a valid number");
}
else if(e=="")
{
	alert("choose your language");
}
else if (f=="")
{
	alert("choose your location")
}
else{
	alert("thank you for sign up");
  firebase.database().ref('users/').push({
    "FirstName": a,
    "LastName": b,
   "Email": c,
   "Number":d,
   "language":e,
   "location":f,
   "DOB":x,
   "Gender":selectedGender
  });
}
}
	
	
	
