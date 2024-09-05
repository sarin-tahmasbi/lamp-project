let lampImg = document.getElementById('lamp')
let btn = document.getElementById('button')
let lampFlag = false

function turnOffOrOn () {
	if (lampFlag) {
		lampImg.setAttribute('src', '/images/turned on lamp.jpg')
        btn.innerHTML = 'Turn On'
		lampFlag = false
	}
	else {
		lampImg.setAttribute('src', '/images/turned off lamp.jpg')
		btn.innerHTML = 'Turn Off'
		lampFlag = true
	}
}