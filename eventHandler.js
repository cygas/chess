(function(global){
	global.setClickEvent = function(cell, arr, board){
		
		cell.addEventListener("click", function(){	
						
			if(!cell.classList.contains("clickCell")){
				let cellWithClickClass = board.getElementsByClassName("clickCell");
				let cellWithMoveClass = board.querySelectorAll(".moveCell");
				let cellWithBeating = board.querySelectorAll(".beating");
				
				addRemoveClass(cellWithClickClass, "cell", "clickCell");
				addRemoveClass(cellWithMoveClass, "cell", "moveCell");
				addRemoveClass(cellWithBeating, "cell", "beating");
				
			}
			toggleClass(cell, "clickCell", "cell");
			arr.moves.forEach(function(item){							
				let moveCell = document.getElementById("cell" + item);
				if(moveCell.style.backgroundImage == ""){
					toggleClass(moveCell, "cell", "moveCell");					
				}else{
					toggleClass(moveCell, "cell", "beating");					
				}							
			});
			
		});
		
	};
	
	global.addRemoveClass = function(collection, addClass, removeClass){
		for(let i=0; i<collection.length;i++){
			collection[i].classList.add(addClass);
			collection[i].classList.remove(removeClass);
		}
	};
	global.toggleClass = function(cell, firstClass, secondClass){
		cell.classList.toggle(firstClass);
		cell.classList.toggle(secondClass);
	};
	
	
})(window);