(function(global){

	global.Piece = function(){};
	Piece.factory = function(type){
		let newpiece;
		
		if(typeof Piece[type] !== "function"){
			throw{
				name: "Error",
				message: type + " nie istnieje"
			}
		}
		
		newpiece = new Piece[type]();
		newpiece.name = type;
		newpiece.pos = null;
		newpiece.moves = [];
		return newpiece;
	};
	
	Piece.king = function(){		
		this.possibleMoves = [];
	};
	Piece.queen = function(){
		this.possibleMoves = [];
	};
	Piece.rook = function(){
		this.possibleMoves = [];
	};
	Piece.knight = function(){
		this.possibleMoves = [];
	};
	Piece.bishop = function(){
		this.possibleMoves = [];
	};
	Piece.pawn = function(){
		this.possibleMoves = [];
	};

})(this);