var output = document.getElementById('output')
var text = document.getElementById('outputText')
var options = document.getElementById('options')
var story = {
	start: {
		text: 'You are walking along the street and you meet a hooded figure.',
		options: ['say hello','ignore','reset']
	},
	hello: {
		text: 'you say hello',
		options: ['continue','choose difrent option'],
	},
	ignore: {
		text: 'you ignore the man',
		options: ['continue','choose difrent option'],
	},
}

alert("hello Welcome to this site! Click options to go about story! Click reset to head home");

options.addEventListener('click', function  (e) {
	console.log(e.target)
	// body...
	if (e.target.innerHTML === 'say hello') {
		text.innerHTML = story.hello.text
				options.innerHTML = ''
		story.hello.options.forEach(function (item) {
			options.innerHTML += '<li>' + item + '</li>'
		})
	
	} else if (e.target.innerHTML === 'ignore') {
		text.innerHTML = story.ignore.text
				options.innerHTML = ''
		story.ignore.options.forEach(function (item) {
			options.innerHTML += '<li>' + item + '</li>'
		})

	} else if (e.target.innerHTML === 'ignore') {
		text.innerHTML = 'ignore this'

	} else {
		text.innerHTML = story.start.text
		options.innerHTML = ''
		story.start.options.forEach(function (item) {
			options.innerHTML += '<li>' + item + '</li>'
		})
	}
})