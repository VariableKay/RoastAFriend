function roast() {
  let input = document.querySelector('#input');
  let victim = input.value;
  if (victim === '') {
	  alert("Input is required.");
	  return;
  }
