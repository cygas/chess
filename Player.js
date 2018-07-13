(function(global){
	
	global.Player = function(config, color){
		
		const KING = "king"; //name of piece type
		const QUEEN = "queen"; //name of piece type
		const KNIGHT = "knight"; //name of piece type
		const ROOK = "rook"; //name of piece type
		const BISHOP = "bishop"; //name of piece type
		const PAWN = "pawn"; //name of piece type
		const CELLID = "#cell_"; // beginning of id name 
		const CONTAIN = "contain"; //backgroundSize type
		
		this.init = function(config, color){
			this.pieces = [];			
			this.position = [];			
			this.num = config.side;
			this.pieceNum = 16; //number of pieces in chess game
			const board = config.chessBoard;			
			const pieceColor = color;	
			
			
			this.createPiece(this.pieces, this.num, pieceColor)
			.randomPlace(this.num, this.position, this.pieces, board)
			.displayPiece(this.pieces, pieceColor, board)
			.showMoves(this.pieces, this.num, board);	
		};

		this.createPiece = function(arr, num, color){
			this.king = Piece.factory(KING, num, color);
			this.queen = Piece.factory(QUEEN, num, color);
			this.knight1 = Piece.factory(KNIGHT, num, color);
			this.knight2 = Piece.factory(KNIGHT, num, color);
			this.rook1 = Piece.factory(ROOK, num, color);
			this.rook2 = Piece.factory(ROOK, num, color);
			this.bishop1 = Piece.factory(BISHOP, num, color);
			this.bishop2 = Piece.factory(BISHOP, num, color);
			this.pawn1 = Piece.factory(PAWN, num, color);
			this.pawn2 = Piece.factory(PAWN, num, color);
			this.pawn3 = Piece.factory(PAWN, num, color);
			this.pawn4 = Piece.factory(PAWN, num, color);
			this.pawn5 = Piece.factory(PAWN, num, color);
			this.pawn6 = Piece.factory(PAWN, num, color);
			this.pawn7 = Piece.factory(PAWN, num, color);
			this.pawn8 = Piece.factory(PAWN, num, color);
			
			arr.push(this.king, this.queen, this.knight1, this.knight2, this.rook1, this.rook2, this.bishop1, this.bishop2, this.pawn1, this.pawn2, this.pawn3, this.pawn4, this.pawn5, this.pawn6, this.pawn7, this.pawn8); 
			return this;
		};
		
		this.randomPlace = function(side, pos, arr, board){
			while(pos.length < 2*side && pos.length<this.pieceNum){
				let randomnumber = Math.floor(Math.random()*side*side);
				let el = board.querySelector(CELLID + randomnumber);				
				if((pos.indexOf(randomnumber) > -1)|| el.style.backgroundImage != "") continue;
				pos.push(randomnumber);
			}		
			for(let i=0;i<pos.length;i++){
				arr[i].pos = pos[i];
			}
			
			return this;
		};
		
		this.addPiece = function(obj, color, el){
			let piece = "url(img/" + obj.name + color + ".png)";
			el.style.backgroundImage = piece;
			el.style.backgroundSize = CONTAIN;
			return this;
		};
		
		this.displayPiece = function(arr, color, board){
			arr.forEach(function(item){
				if(item.pos !== null){
					let element = board.querySelector(CELLID + item.pos);
					this.addPiece(item, color, element);
				}
			}.bind(this));			
			return this;
		};
		
		this.showMoves = function(arr, side, board){
			arr.forEach(function(item){
				if(item.pos!==null){
					let cell = board.querySelector(CELLID + item.pos);
					setClickEvent(cell, item, board, side);
				}
			});
			return this;
		};		
		
		this.init(config, color);	
		
		console.log(this.queen);
		console.log(this.rook1);
		console.log(this.bishop2);
		console.log(this.pawn4);		
	};
	
})(window);