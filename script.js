


let Icon = document.getElementById('icon');
let Display = document.getElementById('disply')


		Icon.onclick = function(){
			if(Display.type == "password"){
				Display.type = "text";
				Icon.src = "eye.png";
			}else{
				Display.type = "password";
				Icon.src = "hidden.png";
			};
		};
