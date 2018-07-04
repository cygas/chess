(function(global){
	
	global.checkPos = function(side, piece){
		let top = [];
		let bottom = [];
		let left = [];
		let right = [];
		let lt = 0;
		let lb = side*(side-1);
		let rt = side-1;
		let rb = side*side-1;
		let moves = [];
		let boardSide = function(){
			for(let i=lt+1;i<rt;i++){
				top.push(i);
				bottom.push(lb + i);
				left.push(lt + side*i);
				right.push(rt + side*i);
			}				
		};	
		boardSide();
		
		let addMove = function(){			
			for(let d in piece.possibleMoves){
				for(let i=0; i<piece.possibleMoves[d].length;i++){

					let k=piece.pos+piece.possibleMoves[d][i];
					if(!(k<lt) && !(k>rb)){						
						
						if(piece.name == "knight"){
							
							if(right.indexOf(piece.pos)>=0 || piece.pos==rt || piece.pos==rb){
								if(d!="top" && d!="rt" && d!="right" && d!="rb"){
										moves.push(k);
									}
							}
							if(right.indexOf(piece.pos+1)>=0 || (piece.pos+1)==rt || (piece.pos+1)==rb){
								if(d!="rt" && d!="right"){									
										moves.push(k);									
								}
							}
							if(left.indexOf(piece.pos)>=0 || piece.pos==lt || piece.pos==lb){
								if(d!="lt" && d!="left" && d!="lb" && d!="bottom"){
									moves.push(k);
								}
							}
							if(left.indexOf(piece.pos-1)>=0 || (piece.pos-1)==lt || (piece.pos-1)==lb){
								if(d!="left" && d!="lb"){
									moves.push(k);
								}
							}
							if(right.indexOf(piece.pos)<0 && piece.pos!=rt && piece.pos!=rb && right.indexOf(piece.pos+1)<0 && (piece.pos+1)!=rt && (piece.pos+1)!=rb && left.indexOf(piece.pos)<0 && piece.pos!=lt && piece.pos!=lb && left.indexOf(piece.pos-1)<0 && (piece.pos-1)!=lt && (piece.pos-1)!=lb){
								moves.push(k);
							}
						}else{
						
							if(top.indexOf(piece.pos)>=0){
								if(left.indexOf(k)<0 && right.indexOf(k)<0 && k!= lt && k!= rt){
									moves.push(k);
								}else{
									moves.push(k);
									break;
								}
							}
							
							if(left.indexOf(piece.pos)>=0){
								if(d!="left" && d!="lt" && d!="lb"){								
										moves.push(k);								
								}							
							}
							
							if(bottom.indexOf(piece.pos)>=0){
								if(left.indexOf(k)<0 && right.indexOf(k)<0 && k!=lb && k!= rb){
									moves.push(k);
								}else{
									moves.push(k);
									break;
								}
							}
							
							if(right.indexOf(piece.pos)>=0){
								if(d!="right" && d!="rt" && d!="rb"){								
										moves.push(k);								
								}
							}
							
							if(piece.pos == lt){
								if(d!= "lb"){
									moves.push(k);
								}
							}
							
							if(piece.pos == rt){
								if(d!="right" && d!="rb" && d!="rt"){
									moves.push(k);
								}
							}
							
							if(piece.pos == lb){
								if(d!="lt" && d!="left" && d!="lb"){
									moves.push(k);
								}
							}
							
							if(piece.pos == rb){
								if(d!= "rt"){
									moves.push(k);
								}
							}
							
							if(top.indexOf(piece.pos)<0 && bottom.indexOf(piece.pos)<0 && left.indexOf(piece.pos)<0 && right.indexOf(piece.pos)<0 && piece.pos!= lt && piece.pos!= lb && piece.pos!= rt && piece.pos!= rb){
								if(top.indexOf(k)<0 && bottom.indexOf(k)<0 && left.indexOf(k)<0 && right.indexOf(k)<0 && !(k==lt) && !(k==lb) && !(k==rt) && !(k==rb) ){
									moves.push(k);
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
		
		addMove();
		return moves;
	};
	
})(window);