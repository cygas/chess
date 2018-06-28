(function(global){
	
	global.Player = function(side){
		
		this.init = function(){
			this.pieces = [];			
			this.king = Piece.factory("king");
			this.queen = Piece.factory("queen");
			this.knight1 = Piece.factory("knight");
			this.knight2 = Piece.factory("knight");
			this.rook1 = Piece.factory("rook");
			this.rook2 = Piece.factory("rook");
			this.bishop1 = Piece.factory("bishop");
			this.bishop2 = Piece.factory("bishop");
			this.pawn1 = Piece.factory("pawn");
			this.pawn2 = Piece.factory("pawn");
			this.pawn3 = Piece.factory("pawn");
			this.pawn4 = Piece.factory("pawn");
			this.pawn5 = Piece.factory("pawn");
			this.pawn6 = Piece.factory("pawn");
			this.pawn7 = Piece.factory("pawn");
			this.pawn8 = Piece.factory("pawn");
			this.position = [];
			this.white = "W";
			this.black = "B";
			this.pieceNum = 16; //number of pieces in chess game
			this.num = side;
		}.call(this);		

		this.pieces.push(this.king, this.queen, this.knight1, this.knight2, this.rook1, this.rook2, this.bishop1, this.bishop2, this.pawn1, this.pawn2, this.pawn3, this.pawn4, this.pawn5, this.pawn6, this.pawn7, this.pawn8); 
		
		while(this.position.length < 2*side){
			let randomnumber = Math.floor(Math.random()*side*side);
			if(this.position.indexOf(randomnumber) > -1) continue;
			this.position[this.position.length] = randomnumber;
		}
		
		this.createPiece = function(obj, color, el){
			let piece = "url(img/" + obj.name + color + ".png)";
			el.style.backgroundImage = piece;
			el.style.backgroundSize = "contain";
			return this;
		}.bind(this);
		
		for(let i=0; i<this.position.length;i++){
			let el = document.getElementById("cell" + this.position[i]);
			this.createPiece(this.pieces[i], this.black, el);
		}
		
	};
	
})(this);