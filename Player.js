(function(global){
	
	global.Player = function(config, color){
				
		this.init = function(config, color){
			this.pieces = [];				
			this.position = [];				
			this.num = config.side;
			this.pieceNum = 16; //number of pieces in chess game
			const board = config.chessBoard;			
			const pieceColor = color;
			const white = config.white;
			const black = config.black;		
			
			this.createPiece(this.pieces, this.num, pieceColor).randomPlace(this.num, this.position, this.pieces);			
			this.displayPiece(this.pieces, pieceColor).showMoves(this.pieces, this.num, board);
		};

		this.createPiece = function(arr, num, color){
			this.king = Piece.factory("king", num, color);
			this.queen = Piece.factory("queen", num, color);
			this.knight1 = Piece.factory("knight", num, color);
			this.knight2 = Piece.factory("knight", num, color);
			this.rook1 = Piece.factory("rook", num, color);
			this.rook2 = Piece.factory("rook", num, color);
			this.bishop1 = Piece.factory("bishop", num, color);
			this.bishop2 = Piece.factory("bishop", num, color);
			this.pawn1 = Piece.factory("pawn", num, color);
			this.pawn2 = Piece.factory("pawn", num, color);
			this.pawn3 = Piece.factory("pawn", num, color);
			this.pawn4 = Piece.factory("pawn", num, color);
			this.pawn5 = Piece.factory("pawn", num, color);
			this.pawn6 = Piece.factory("pawn", num, color);
			this.pawn7 = Piece.factory("pawn", num, color);
			this.pawn8 = Piece.factory("pawn", num, color);
			
			arr.push(this.king, this.queen, this.knight1, this.knight2, this.rook1, this.rook2, this.bishop1, this.bishop2, this.pawn1, this.pawn2, this.pawn3, this.pawn4, this.pawn5, this.pawn6, this.pawn7, this.pawn8); 
			return this;
		};	
		
		this.randomPlace = function(side, pos, arr){
			while(pos.length < 2*side && pos.length<this.pieceNum){
				let randomnumber = Math.floor(Math.random()*side*side);
				let el = document.getElementById("cell" + "_" + randomnumber);				
				if((pos.indexOf(randomnumber) > -1)|| el.style.backgroundImage != "") continue;
				pos.push(randomnumber);
			}
			for(let i=0;i<pos.length;i++){
				arr[i].pos = pos[i];
			}			
			return this;
		};		
		this.regularPlace = function(color){
			let placeB = [4,3,1,6,0,7,2,5,8,9,10,11,12,13,14,15];
			let placeW = [60,59,57,62,56,63,58,61,48,49,50,51,52,53,54,55];
			if(color === "W"){
				for(let i=0; i<this.num*2 && i<this.pieceNum; i++){
					this.piecesB[i].pos = placeB[i];					
				}
			}
			if(color === "B"){
				for(let i=0; i<this.num*2 && i<this.pieceNum; i++){
					this.piecesW[i].pos = placeW[i];					
				}
			}
			return this;
		};
		this.addPiece = function(obj, color, el){
			let piece = "url(img/" + obj.name + color + ".png)";
			el.style.backgroundImage = piece;
			el.style.backgroundSize = "contain";
			return this;
		};	
		this.displayPiece = function(arr, color){
			for(let i=0; i<arr.length;i++){
				if(arr[i].pos !== null){
					let el = document.getElementById("cell_" + arr[i].pos);
					this.addPiece(arr[i], color, el);
				}
			}
			return this;
		};
		this.showMoves = function(arr, side, board){
			for(let i=0;i<arr.length;i++){
				if(arr[i].pos!==null){
					let cell = document.getElementById("cell_" + arr[i].pos);
					arr[i].moves = checkPos(side, arr[i]);					
					cell.addEventListener("click", function(){	
						
						if(!cell.classList.contains("clickCell")){
							let cellWithClickClass = board.getElementsByClassName("clickCell");
							let cellWithMoveClass = board.querySelectorAll(".moveCell");
							
							for(let i=0;i<cellWithClickClass.length;i++){
								cellWithClickClass[i].classList.add("cell");
								cellWithClickClass[i].classList.remove("clickCell");
							}
							
							for(let i=0;i<cellWithMoveClass.length;i++){
								cellWithMoveClass[i].classList.add("cell");				
								cellWithMoveClass[i].classList.remove("moveCell");										
							}
							
						}
						cell.classList.toggle("clickCell");
						cell.classList.toggle("cell");
						arr[i].moves.forEach(function(item){							
							let moveCell = document.getElementById("cell_" + item);
							moveCell.classList.toggle("cell");
							moveCell.classList.toggle("moveCell");							
						});
						
					});
				}
			}
			return this;
		};		
		
		this.init(config, color);	
		
		console.log(this.queen);
		console.log(this.rook1);
		console.log(this.bishop2);
		console.log(this.pawn4);		
	};
	
})(window);