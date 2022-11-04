function checkPrime(number) {
	if (numer <= 1) {
		return false;
	}
	for (let i = 2; i <= number ** 0.5; i++){
		if (number % i == 0) {
			return false;
		}
		else {
			return true
		}
	}
}
let answer = checkPrime(13);
if (answer == true) {
	console.log('Prime')
} else {
	console.log('Not a Prime')
}