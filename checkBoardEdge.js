(function(global){
	
	global.addKnightMoves = function(boardBox, piece, moves, k, d){
		
		if(boardBox.right.indexOf(piece.pos)>=0 || piece.pos==boardBox.rt || piece.pos==boardBox.rb){
			if(d!="top" && d!="rt" && d!="right" && d!="rb"){
					moves.push(k);
			}
		}else{
			if(boardBox.right.indexOf(piece.pos+1)>=0 || (piece.pos+1)==boardBox.rt || (piece.pos+1)==boardBox.rb){
				if(d!="rt" && d!="right"){									
					moves.push(k);									
				}
			}else{
				if(boardBox.left.indexOf(piece.pos)>=0 || piece.pos==boardBox.lt || piece.pos==boardBox.lb){
					if(d!="lt" && d!="left" && d!="lb" && d!="bottom"){
						moves.push(k);
					}
				}else{
					if(boardBox.left.indexOf(piece.pos-1)>=0 || (piece.pos-1)==boardBox.lt || (piece.pos-1)==boardBox.lb){
						if(d!="left" && d!="lb"){
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
			if(d!="left" && d!="lt" && d!="lb"){								
				return true;
			}							
		}	
		if(piece.pos == boardBox.lt){
			if(d!= "lb"){
				return true;
			}
		}
		if(piece.pos == boardBox.lb){
			if(d!="lt" && d!="left" && d!="lb"){
				return true;
			}
		}
		return false;		
	};
	global.checkRightSide = function(boardBox, piece, k, d){
		
		if(boardBox.right.indexOf(piece.pos)>=0){
			if(d!="right" && d!="rt" && d!="rb"){								
				return true;
			}
		}							
		if(piece.pos == boardBox.rt){
			if(d!="right" && d!="rb" && d!="rt"){
				return true;
			}
		}							
		if(piece.pos == boardBox.rb){
			if(d!= "rt"){
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