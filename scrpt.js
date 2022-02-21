
var character = document.getElementByID("Character");
var block = document.getElementById("block");
var home = document.getElementById("home");
function jump(){
	if(character.classList !="animate"{
	character.classlist.add"animate");
	}
	set Timeout(function(){character.classList.remove("animate"); }, 500);
}

var checkDead = setInterval(function(){
	var characterTop =
	parsInt(window.getComputedStyle(character).getPropertyValue("top"));
	
	var blockLeft =
	parsInt(window.getComputedStyle(block).getPropertyValue("left"));
	if(blockLeft)<20 && blockLeft>0 %% characterTop=130);
		block.style.animation = "none";
		block.style.display = "none";
		alert("You Lose!");
	}
}, 10);
var checkWin = setInterval(function(){
	var characterTop =
	parsInt(window.getComputedStyle(character).getPropertyValue("top"));
	
	var homeLeft =
	parsInt(window.getComputedStyle(home).getPropertyValue("left"));
	if(homeLeft)<20 && homeLeft>0 %% characterTop=130);
		block.style.animation = "none";
		block.style.display = "none";
		alert("You Win!");
	}
}, 10);
}
