function roast() {
  let input = document.querySelector('#input');
  let victim = input.value;
  if (victim === '') {
	  alert("Input is required.");
	  return;
  }
    var roastnum = Math.floor(Math.random() * (26 - 0) + 0);
    switch (roastnum) {
    case 0:
		alert("Hey " + victim + ", " + "yo mama so dumb she gave birth to a joke!");
		break;
	case 1:
		alert("Hey " + victim + ", " + "yo mama so fat they made her play the role of the iceberg in Titanic!");
		break;
	case 2:
		alert("Hey " + victim + ", " + "yo mama so fat NASA mistook her for a planet!");
		break;
	case 3:
		alert("Hey " + victim + ", " + "you're so hated that you were probably behind YouTube Rewind 2018!");
		break;
	case 4:
		alert("Hey " + victim + ", " + "what's a synonym for trash? You'd know, huh?");
		break;
	case 5:
		alert("Hey " + victim + ", " + "yo mama so dumb she gave birth to a mistake...");
		break;
	case 6:
		alert("Hey " + victim + ", " + "you remind us of homework. Nobody likes you.");
		break;
	case 7:
		alert("Hey " + victim + ", " + "if my life's a joke, yours is a comedy.");
		break;
	case 8:
		alert("Hey " + victim + ", " + "William Shakespeare doesn't remember writing this comedic play.");
		break;
	case 9:
		alert("Hey " + victim + ", " + "words can't describe how ugly you are.");
		break;
	case 10:
		alert("Hey " + victim + ", " + "you could wear a casual outfit on Halloween and people would still be terrified of you.");
		break;
	case 11:
		alert("Hey " + victim + ", " + "you're like a piano keyboard. You've only got two personalities.");
		break;
	case 12:
		alert("Hey " + victim + ", " + "you're the reason why shampoo bottles have instructions on them.");
		break;
	case 13:
		alert("Hey " + victim + ", " + "you're like a textbook about quantum physics. Nobody's interested in you.");
		break;
	case 14:
		alert("Hey " + victim + ", " + "your social skills are worse than Trump's tan.");
		break;
	case 15:
		alert("Hey " + victim + ", " + "you're like a coin. You're two-faced.");
		break;
	case 16:
		alert("Hey " + victim + ", " + "you don't even have to watch HowToBasic in order to be a basic b*tch.");
		break;
	case 17:
		alert("Hey " + victim + ", " + "you've got the color palette of an orange. You're boring.");
		break;
	case 18:
		alert("Hey " + victim + ", " + "");
		break;
	case 19:
		alert("Hey " + victim + ", " + "");
		break;
	case 20:
		alert("Hey " + victim + ", " + "");
		break;
	case 21:
		alert("Hey " + victim + ", " + "");
		break;
	case 22:
		alert("Hey " + victim + ", " + "");
		break;
	case 23:
		alert("Hey " + victim + ", " + "");
		break;
	case 24:
		alert("Hey " + victim + ", " + "");
		break;
	case 25:
		alert("Hey " + victim + ", " + "");
		break;
	case 26:
		alert("Hey " + victim + ", " + "");
		break;
	}
}
