(function(global){

	global.Piece = function(){};
	Piece.factory = function(type, side, color){
		let newpiece;
		
		if(typeof Piece[type] !== "function"){
			throw{
				name: "Error",
				message: type + " nie istnieje"
			}
		}
		
		newpiece = new Piece[type](side, color);
		newpiece.name = type;
		newpiece.pos = null;
		newpiece.moves = [];
		newpiece.check = "check" + type.charAt(0).toUpperCase() + type.slice(1);
		return newpiece;
	};
	
	Piece.king = function(side){		
		this.possibleMoves = {
			top: [-side],
			bottom: [side],
			left: [-1],
			right: [1],
			lt: [-side-1],
			rt: [-side+1],
			lb: [side-1],
			rb: [side+1]
		};
	};
	Piece.queen = function(side){
		this.possible = {
			top: -side,
			bottom: side,
			left: -1,
			right: 1,
			lt: -side-1,
			rt: -side+1,
			lb: side-1,
			rb: side+1
		};
		this.possibleMoves = {
			top: [],
			bottom: [],
			left: [],
			right: [],
			lt: [],
			rt: [],
			lb: [],
			rb: []
		};
		for(let i=1; i<side;i++){			
			for(let d in this.possible){
				this.possibleMoves[d].push(this.possible[d]*i);
			}	
		}
		
	};
	Piece.rook = function(side){
		this.possible = {
			top: -side,
			left: -1,
			right: +1,
			bottom: side
		};
		this.possibleMoves = {
			top: [],
			left: [],
			right: [],
			bottom: []
		};
		for(let i=1; i<side;i++){			
			for(let d in this.possible){
				this.possibleMoves[d].push(this.possible[d]*i);
			}	
		}
	};
	Piece.knight = function(side){
		this.possibleMoves = {
			lt: [-2*side-1], 
			top: [-2*side+1], 
			left: [-side-2], 
			rt: [-side+2], 
			lb: [side-2],
			right: [side+2], 
			bottom: [2*side-1], 
			rb: [2*side+1]
		};
	};
	Piece.bishop = function(side){
		this.possible = {
			lt: -side-1,
			rt: -side+1, 
			lb: side-1, 
			rb: side+1
		};
		this.possibleMoves = {
			lt: [],
			rt: [],
			lb: [],
			rb: []
		};
		for(let i=1; i<side;i++){			
			for(let d in this.possible){
				this.possibleMoves[d].push(this.possible[d]*i);
			}	
		}
	};
	Piece.pawn = function(side, color){		
		if(color == "B"){
			this.possibleMoves = {
				bottom: [side]
			};
		}
		if(color == "W"){
			this.possibleMoves = {
				top: [-side]
			};
		}
	};
	
})(window);