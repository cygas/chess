(function(global){
	
	const TOP = "top"; //top-direction of piece's moves
	const BOTTOM = "bottom"; //bottom-direction of piece's moves
	const RIGHT = "right"; //right-direction of piece's moves
	const LEFT = "left"; //left-direction of piece's moves
	const RT = "rt"; //right-top-direction of piece's moves
	const RB = "rb"; //right-bottom-direction of piece's moves
	const LT = "lt"; //left-top-direction of piece's moves
	const LB = "lb"; //left-bottom-direction of piece's moves	
	
	global.addKnightMoves = function(boardBox, piece, moves, k, d){	
		
		if(boardBox.right.indexOf(piece.pos)>=0 || piece.pos==boardBox.rt || piece.pos==boardBox.rb){
			if(d!=TOP && d!=RT && d!=RIGHT && d!=RB){
					moves.push(k);
			}
		}else{
			if(boardBox.right.indexOf(piece.pos+1)>=0 || (piece.pos+1)==boardBox.rt || (piece.pos+1)==boardBox.rb){
				if(d!=RT && d!=RIGHT){									
					moves.push(k);									
				}
			}else{
				if(boardBox.left.indexOf(piece.pos)>=0 || piece.pos==boardBox.lt || piece.pos==boardBox.lb){
					if(d!=LT && d!=LEFT && d!=LB && d!=BOTTOM){
						moves.push(k);
					}
				}else{
					if(boardBox.left.indexOf(piece.pos-1)>=0 || (piece.pos-1)==boardBox.lt || (piece.pos-1)==boardBox.lb){
						if(d!=LEFT && d!=LB){
							moves.push(k);
						}
					}else{
						moves.push(k);
					}
				}
			}
		}
	};	
	global.checkLeftSide = function(boardBox, piece, k, d){
		if(boardBox.left.indexOf(piece.pos)>=0){
			if(d!=LEFT && d!=LT && d!=LB){								
				return true;
			}							
		}	
		if(piece.pos == boardBox.lt){
			if(d!= LB){
				return true;
			}
		}
		if(piece.pos == boardBox.lb){
			if(d!=LT && d!=LEFT && d!=LB){
				return true;
			}
		}
		return false;		
	};
	global.checkRightSide = function(boardBox, piece, k, d){
		
		if(boardBox.right.indexOf(piece.pos)>=0){
			if(d!=RIGHT && d!=RT && d!=RB){								
				return true;
			}
		}							
		if(piece.pos == boardBox.rt){
			if(d!=RIGHT && d!=RB && d!=RT){
				return true;
			}
		}							
		if(piece.pos == boardBox.rb){
			if(d!= RT){
				return true
			}
		}	
		return false;
	};
	global.checkPieceInside = function(piece, boardBox){
		return (boardBox.top.indexOf(piece.pos)<0 && boardBox.bottom.indexOf(piece.pos)<0 && boardBox.left.indexOf(piece.pos)<0 && boardBox.right.indexOf(piece.pos)<0 && piece.pos!= boardBox.lt && piece.pos!= boardBox.lb && piece.pos!= boardBox.rt && piece.pos!= boardBox.rb);
	};
	global.checkMoveInside = function(k, boardBox){
		return (boardBox.top.indexOf(k)<0 && boardBox.bottom.indexOf(k)<0 && boardBox.left.indexOf(k)<0 && boardBox.right.indexOf(k)<0 && !(k==boardBox.lt) && !(k==boardBox.lb) && !(k==boardBox.rt) && !(k==boardBox.rb));
	};
})(window);