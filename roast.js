function roast() {
  let input = document.querySelector('#input');
  let victim = input.value;
  if (victim === '') {
	  alert('Input is required.');
	  return;
	}
  var roastnum = Math.floor(Math.random() * (1 - 0) + 0));
  switch (roastnum) {
    case 0:
			alert("Hey" + victim + ",");
			break;
		case 1:
			alert("");
			break;
	},
			
