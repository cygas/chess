(function(global){
	
	global.Player = function(side){
		
		this.init = function(side){
			this.pieces = [];				
			this.position = [];			
			this.num = side;
			const white = "W";
			const black = "B";			
			const pieceNum = 16; //number of pieces in chess game
			
			this.createPiece(this.pieces);
			this.randomPlace(this.num, this.position);
			this.displayPiece(this.position, this.pieces, black);
		};

		this.createPiece = function(arr){
			let king = Piece.factory("king");
			let queen = Piece.factory("queen");
			let knight1 = Piece.factory("knight");
			let knight2 = Piece.factory("knight");
			let rook1 = Piece.factory("rook");
			let rook2 = Piece.factory("rook");
			let bishop1 = Piece.factory("bishop");
			let bishop2 = Piece.factory("bishop");
			let pawn1 = Piece.factory("pawn");
			let pawn2 = Piece.factory("pawn");
			let pawn3 = Piece.factory("pawn");
			let pawn4 = Piece.factory("pawn");
			let pawn5 = Piece.factory("pawn");
			let pawn6 = Piece.factory("pawn");
			let pawn7 = Piece.factory("pawn");
			let pawn8 = Piece.factory("pawn");
			
			arr.push(king, queen, knight1, knight2, rook1, rook2, bishop1, bishop2, pawn1, pawn2, pawn3, pawn4, pawn5, pawn6, pawn7, pawn8); 
		};		
		this.randomPlace = function(side, pos){
			while(pos.length < 2*side){
				let randomnumber = Math.floor(Math.random()*side*side);
				if(pos.indexOf(randomnumber) > -1) continue;
				pos.push(randomnumber);
			}
		};			
		this.addPiece = function(obj, color, el){
			let piece = "url(img/" + obj.name + color + ".png)";
			el.style.backgroundImage = piece;
			el.style.backgroundSize = "contain";
			return this;
		};	
		this.displayPiece = function(pos, arr, color){
			for(let i=0; i<pos.length;i++){
				let el = document.getElementById("cell" + pos[i]);
				this.addPiece(arr[i], color, el);
			}
		};
		
		this.init(side);		
	};
	
})(window);