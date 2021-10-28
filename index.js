let input = document.querySelector('#input');

searchBtn.addEventListener('click', function(e) {
	let word = input.value;
	if (word === '') {
		alert('Input is required!');
		return;
	}
});
