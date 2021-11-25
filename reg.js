var control = [false, false, false, false, false, false, false, false];

var Namecontror = ["Прізвище", "Ім'я", "Дата Народження", "Пошта","Про себе", "Фото","Пародь", "Повторне введення"]



function checkLastName(){
	var lastnameReg = /^[ ]*([A-Z][a-z]*[']?[a-z]+)(((\s+[A-Z]?[a-z]*[']?[a-z]+)|([-]{1}[A-Z]?[a-z]*[']?[a-z]+\s+)([A-Z]?[a-z]*[']?[a-z]+)*))*[ ]*$/gm;
	var lastnameString = document.getElementById("lastname").value; 
	var lastnameCheck = lastnameReg.test(lastnameString);
	if (lastnameCheck == false) {
		document.getElementById("lastname").style.backgroundColor = "#DA2424";
		control[0] = false;
		return;
	}
	else if (lastnameCheck == true) {
		document.getElementById("lastname").style.backgroundColor = "#91E240";
		control[0] = true;
		return;
	}
}

function checkFirstName(){
	var nameReg = /^[ ]*([A-Z][a-z]*[']?[a-z]+)(((\s+[A-Z]?[a-z]*[']?[a-z]+)|([-]{1}[A-Z]?[a-z]*[']?[a-z]+\s+)([A-Z]?[a-z]*[']?[a-z]+)*))*[ ]*$/gm;
	var nameString = document.getElementById("name").value; //перевірка ім'я
	var nameCheck = nameReg.test(nameString);

	
	if (nameCheck == false) {
		document.getElementById("name").style.backgroundColor = "#DA2424";
		control[1] = false;
		return;
	}
	else if (nameCheck == true) {
		document.getElementById("name").style.backgroundColor = "#91E240";
		control[1] = true;
		return;
	}
}

function checkDate(){
	 var value = document.getElementById('date').value;
    var reg = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
	 
	 if (!reg.test(value)) {
		 
		  value.style = 'border:2px solid red;';
			document.getElementById("date").style.backgroundColor = "#DA2424";
			control[2]=false;
        return false;
    } else {
		 
        var someBool = false;
		  if (value.includes("."))
		  {
				someBool = true;
				document.getElementById("date").style.backgroundColor = "#91E240";
		  }
		  else if (value.includes("/"))
		  {
				someBool = false;
				document.getElementById("date").style.backgroundColor = "#DA2424";
		  }
        var someArray = [];
        if (someBool)
            someArray = value.split(".");
        else
            someArray = value.split("/");var year = someArray[2];
        var myLength = year.length;
        var yearInt = parseInt(year);
        if (myLength == 2) {
				if (  yearInt >= 00 || yearInt <= 20){
					if(yearInt >= 00 && yearInt < 10)
					{
						year = "200" + yearInt;
					}
					else
					 year = "20" + yearInt;
				}
            if (yearInt >= 20) {
                year = "19" + yearInt;
            }
        }
		  yearInt = parseInt(year);
		  
        if (yearInt <= 2020 && yearInt >= 1925) {
				control[2] = true;
				document.getElementById('date').value = someArray[0] + "." + someArray[1] + "." + year;
				
				document.getElementById("date").style.backgroundColor = "#91E240";
				
				return true;
        }
		  document.getElementById("date").style.backgroundColor = "#DA2424";
		  
		  control[2]=false;
        return false;
	 }
	
	 
	
}


function checkEmail(){
	var emailReg = /^[a-zA-Z][\w\.]+(([-_])?[a-zA-Z]+)*@([\w_]+(([-_])?[a-zA-Z]+)*\.){1,7}[\w-]{2,6}$/g;
	var emailString = document.getElementById("email").value; //перевірка пошти
	var emailCheck = emailReg.test(emailString);
	if (emailCheck == false) {
		document.getElementById("email").style.backgroundColor = "#DA2424";
		control[3] = false;
		return;
	}
	else if (emailCheck == true) {
		document.getElementById("email").style.backgroundColor = "#91E240";
		control[3] = true;
		return;
	}
}

function checkTextArea(){
	var textareaReg = /^(([ ])?)*[\w]([\w\s\.,:]{1,500})?$/g;
	var textareaString = document.getElementById('about').value; //перевірка на textarea
	var textareaCheck = textareaReg.test(textareaString);
	if (textareaCheck == false) {
		document.getElementById("about").style.backgroundColor = "#DA2424";
		control[4] = false;
		return;
	}
	else if (textareaCheck == true) {
		document.getElementById("about").style.backgroundColor = "#91E240";
		control[4] = true;
		return;
	}
}

function checkImage(){
	var imageReg = /[\w-:\\]*\.jpg|gif|png|JPG|GIF|PNG/g;
	var imageString = document.getElementById("photo").value; //перевірка зображення
	var imageCheck = imageReg.test(imageString);
	if (imageCheck == false) {
		alert("Файл має бути зображенням");
		document.getElementById("photo").value = "";
		control[5] = false;
		return;
	} else if (imageCheck == true) {
		control[5] = true;
	}
}

function checkPass(){
	var passReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g;
	var passString = document.getElementById("pass").value; //перевірка паролю
	var passConfirmString = document.getElementById("confpass").value;
	var passCheck = passReg.test(passString);
	if (passCheck == false) {
		document.getElementById("pass").style.backgroundColor = "#DA2424";
		control[6] = false;
		return;
	}
	else if (passCheck == true) {
		document.getElementById("pass").style.backgroundColor = "#91E240";
		control[6] = true;
		if (passString == passConfirmString) {
			document.getElementById("confpass").style.backgroundColor = "#91E240";
			control[6] = true;
			return;
		}
		else if (passString != passConfirmString) {
			document.getElementById("confpass").style.backgroundColor = "#DA2424";
			control[7] = false;
			return;
	}
}
}

function checkRepeatPass(){
	var passString = document.getElementById("pass").value;
	var passConfirmString = document.getElementById("confpass").value; //перевірка збігу паролів
	if (passString != passConfirmString) {
		document.getElementById("confpass").style.backgroundColor = "#DA2424";
		control[7] = false;
		return;
	}
	else if (passString == passConfirmString) {
		document.getElementById("confpass").style.backgroundColor = "#91E240";
		control[7] = true;
		return;
	}
}


function BadInput() {
	var inputs = document.getElementsByTagName('input');
	var lang = document.getElementsByClassName("check-box");
	console.log(lang);
	var lanCheck = false;
	
	let ErrorString ="";
	for(n=0;n<inputs.length;n++)
	{
		if (inputs[n].name == "language") { 
			if (inputs[n].checked == true) {
				lanCheck = true;
			} 
		}
	}

	for(i=0;i<control.length;i++)
	{
		console.log(control);
		if(control[i]== false){
			console.log(i);
			ErrorString+=Namecontror[i]+", ";
		}
	}
	
	if(lanCheck==false)
		ErrorString+="Мови";

	if(ErrorString=="")
	{
	return true;
	}
	else
	{
		confirm("Введіть коректно наступні поля: " + ErrorString);
		return false
	}
	
}

	


function conf(){
		var check = BadInput();
		var text = GetConfirmString()
		console.log(text);
		if (check == true) {
			if(confirm(text)) 
			document.location = "index.html"
		}
		else if (check == false) {
			return;
		}
}
function GetConfirmString() {
let finalstring = "";
var checkboxes = document.getElementsByTagName('input');
for (i = 0; i< checkboxes.length; i++){
	if (checkboxes[i].checked == true) {
		temp = checkboxes[i].value;
		finalstring = finalstring.concat(temp + "  ");
	}
}
let checkString = "";
checkString += "Прізвище: "+$("#lastname").val() + "\n";
checkString += "Ім'я: "+$("#name").val() + "\n";
checkString += "Дата народження: "+$("#date").val() + "\n";
checkString += "Пошта: "+ $("#email").val() + "\n";
checkString +="Мови: "+ finalstring+"\n";
checkString += "Інтереси: "+$("#about").val() + "\n";
checkString += "Фото: " +document.getElementById('photo').files[0]?.name?? "nofoto" + "\n";
//$("#photo").val()
checkString += "Пароль: "+$("#pass").val() + "\n";

return checkString;

}
