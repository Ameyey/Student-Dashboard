const container = document.querySelector('.container')
const registerBtn =document.querySelector('.register-btn')
const loginBtn =document.querySelector('.login-btn')

registerBtn.addEventListener('click',()=>{
	container.classList.add('active');
})


loginBtn.addEventListener('click',()=>{
	container.classList.remove('active');
})

var Username ;
var Password ;

// console.log("Username"+Username)
// console.log("Password"+Password)



function fun(){
 alert('Password are Error')
}

function Registation(){
	let Registation_name  = document.getElementById('Registation_User').value
	localStorage.setItem('Username',Registation_name)
	let Registation_Pass  = document.getElementById('Registation_Pass').value
	localStorage.setItem('password',Registation_Pass)

	let Registation_Email = document.getElementById('Registation_Email').value
		localStorage.setItem('Email',Registation_Email)



}



function input_data(){
	 let name = document.getElementById('Username').value;
	 let NewInput_name = localStorage.getItem('Username')

	 let pass = document.getElementById('password').value;
	 let NewInput_pass = localStorage.getItem('password');

	 if(name === NewInput_name && pass === NewInput_pass){
			window.open("./Dombar/index.html")
	 }

	 


}



// function login_Fun(){
// 	 localStorage.getItem('Username');
// }

