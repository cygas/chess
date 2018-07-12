(function(global){
	
	global.checkPos = function(side, piece, board){
		let boardBox = {
			top: [],
			bottom: [],
			left: [],
			right: [],
			lt: 0,
			lb: side*(side-1),
			rt: side-1,
			rb: side*side-1
		};
		let moves = [];
		let boardSide = function(boardBox, side){
			for(let i=boardBox.lt+1;i<boardBox.rt;i++){
				boardBox.top.push(i);
				boardBox.bottom.push(boardBox.lb + i);
				boardBox.left.push(boardBox.lt + side*i);
				boardBox.right.push(boardBox.rt + side*i);
			}				
		};	
		boardSide(boardBox, side);
		
		let addMove = function(piece, side, boardBox, board){			
			for(let d in piece.possibleMoves){
				for(let i=0; i<piece.possibleMoves[d].length;i++){				

					let k=piece.pos+piece.possibleMoves[d][i];				
					if(!(k<boardBox.lt) && !(k>boardBox.rb)){
						
						if(piece.name == "knight"){						
							addKnightMoves(boardBox, piece, moves, k, d);
						}else{		
							let occupiedCell = board.querySelector("#cell_" + k);
							if(!occupiedCell){
								console.log(occupiedCell);
								console.log(k);
							}
							let occupiedCellBackground = occupiedCell.style.backgroundImage;
							
							if(checkLeftSide(boardBox, piece, k, d)){
								if(occupiedCellBackground == ""){
									moves.push(k);
								}else{
									moves.push(k);
									break;
								}
							}
							if(checkRightSide(boardBox, piece, k, d)){
								if(occupiedCellBackground == ""){
									moves.push(k);
								}else{
									moves.push(k);
									break;
								}
							}
							
							if(boardBox.top.indexOf(piece.pos)>=0){
								if(boardBox.left.indexOf(k)<0 && boardBox.right.indexOf(k)<0 && k!= boardBox.lt && k!= boardBox.rt){
									if(occupiedCellBackground == ""){
										moves.push(k);
									}else{
										moves.push(k);
										break;
									}
								}else{
									moves.push(k);
									break;
								}
							}					
							if(boardBox.bottom.indexOf(piece.pos)>=0){
								if(boardBox.left.indexOf(k)<0 && boardBox.right.indexOf(k)<0 && k!=boardBox.lb && k!= boardBox.rb){
									if(occupiedCellBackground == ""){
										moves.push(k);
									}else{
										moves.push(k);
										break;
									}
								}else{
									moves.push(k);
									break;
								}
							}			
							if(checkPieceInside(piece, boardBox)){
								if(checkMoveInside(k, boardBox)){
									if(occupiedCellBackground === ""){
										moves.push(k);
									}else{										
										moves.push(k);
										break;
									}
								}else{
									moves.push(k);
									break;
								}
							}					
						}
					}
				}
			}
		};
		
		addMove(piece, side, boardBox, board);
		return moves;
	};
	
})(window);