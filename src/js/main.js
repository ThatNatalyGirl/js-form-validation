// class formValidator {

// 	constructor(parameters) {
		let email = document.querySelector('#term');

		document.body.addEventListener('keyup', function () {
			// check to see if the string includes . and @
			if (email.value.includes('.') && email.value.includes('@')) {
				email.style.border = "5px solid green";
			} else {
				email.style.border = "5px solid red"; 
			}
		})
// 	}
// }
