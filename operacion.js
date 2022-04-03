function validateA(){
	var radios = document.getElementsByClassName("A")
	var len=radios.length
	var contA=0
	for (var i=0; i<len; i++){
		if (radios[i].checked){
			contA++
		}
	}
	document.getElementById("resultA").innerHTML=contA;
}
function validateB(){
	var radios = document.getElementsByClassName("B")
	var len=radios.length
	var contB=0
	for (var i=0; i<len; i++){
		if (radios[i].checked){
			contB++
		}
	}
	document.getElementById("resultB").innerHTML=contB;
}
function validateC(){
	var radios = document.getElementsByClassName("C")
	var len=radios.length
	var contC=0
	for (var i=0; i<len; i++){
		if (radios[i].checked){
			contC++
		}
	}
	document.getElementById("resultC").innerHTML=contC;
}
function validateD(){
	var radios = document.getElementsByClassName("D")
	var len=radios.length
	var contD=0
	for (var i=0; i<len; i++){
		if (radios[i].checked){
			contD++
		}
	}
	document.getElementById("resultD").innerHTML=contD;
}