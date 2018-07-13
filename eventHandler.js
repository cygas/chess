(function(global){
	//after clicking on  piece show possible moves and beating by add appropriate class
	global.setClickEvent = function(cell, arr, board, side){
		const CELL = "cell"; // name of class
		const CLICKCELL = "clickedCell"; // name of class
		const MOVECELL = "moveCell"; // name of class
		const BEATING = "beating"; // name of class
		const CELLID = "#cell_"; // beginning of id name 
		
		cell.addEventListener("click", function(){	
			arr.moves = checkPos(side, arr, board);				
			if(!cell.classList.contains(CLICKCELL)){
				let cellWithClickClass = board.getElementsByClassName(CLICKCELL);
				let cellWithMoveClass = board.querySelectorAll("." + MOVECELL);
				let cellWithBeating = board.querySelectorAll("." + BEATING);
				
				addRemoveClass(cellWithClickClass, CELL, CLICKCELL);
				addRemoveClass(cellWithMoveClass, CELL, MOVECELL);
				addRemoveClass(cellWithBeating, CELL, BEATING);
				
			}
			toggleClass(cell, CLICKCELL, CELL);
			arr.moves.forEach(function(item){							
				let moveCell = board.querySelector(CELLID + item);
				if(moveCell.style.backgroundImage == ""){
					toggleClass(moveCell, CELL, MOVECELL);					
				}else{
					if(arr.color !== moveCell.style.backgroundImage.slice(-7,-6)){
						toggleClass(moveCell, CELL, BEATING);	
					}				
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