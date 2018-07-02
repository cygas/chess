(function(global){
	
	global.Player = function(side){
		
		this.init = function(){
			this.pieces = [];				
			this.position = [];
			this.white = "W";
			this.black = "B";			
			this.num = side;
			const pieceNum = 16; //number of pieces in chess game
			
			this.createPiece(this.pieces);
			//this.randomPlace(this.num, this.position, this.pieces);
			this.regularPlace(this.pieces);
			this.displayPiece(this.pieces, this.black);
		};

		this.createPiece = function(arr){
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
			
			arr.push(this.king, this.queen, this.knight1, this.knight2, this.rook1, this.rook2, this.bishop1, this.bishop2, this.pawn1, this.pawn2, this.pawn3, this.pawn4, this.pawn5, this.pawn6, this.pawn7, this.pawn8); 
		};		
		this.randomPlace = function(side, pos, arr){
			while(pos.length < 2*side){
				let randomnumber = Math.floor(Math.random()*side*side);
				if(pos.indexOf(randomnumber) > -1) continue;
				pos.push(randomnumber);
			}
			for(let i=0;i<arr.length;i++){
				arr[i].pos = pos[i];
			}
		};		
		this.regularPlace = function(){
			this.king.pos= 4;
			this.queen.pos= 3;
			this.rook1.pos= 0;
			this.rook2.pos= 7;
			this.knight1.pos= 1;
			this.knight2.pos= 6;
			this.bishop1.pos= 2;
			this.bishop2.pos= 5;
			this.pawn1.pos= 8;
			this.pawn2.pos= 9;
			this.pawn3.pos= 10;
			this.pawn4.pos= 11;
			this.pawn5.pos= 12;
			this.pawn6.pos= 13;
			this.pawn7.pos= 14;
			this.pawn8.pos= 15;			
		};
		this.addPiece = function(obj, color, el){
			let piece = "url(img/" + obj.name + color + ".png)";
			el.style.backgroundImage = piece;
			el.style.backgroundSize = "contain";
			return this;
		};	
		this.displayPiece = function(arr, color){
			for(let i=0; i<arr.length;i++){
				let el = document.getElementById("cell" + arr[i].pos);
				this.addPiece(arr[i], color, el);				
			}
		};
		
		this.init();
		console.log();
	};
	
})(window);