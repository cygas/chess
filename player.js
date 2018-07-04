(function(global){
	
	global.Player = function(side){
				
		this.init = function(){
			this.piecesB = [];	
			this.piecesW = [];
			this.positionB = [];
			this.positionW = [];
			this.white = "W";
			this.black = "B";			
			this.num = side;
			this.pieceNum = 16; //number of pieces in chess game
			
			this.createPieceB(this.piecesB, this.num).randomPlace(this.num, this.positionB, this.piecesB);			
			this.displayPiece(this.piecesB, this.black).showMoves(this.piecesB);
			this.createPieceW(this.piecesW, this.num).randomPlace(this.num, this.positionW, this.piecesW);
			this.displayPiece(this.piecesW, this.white).showMoves(this.piecesW);
		};

		this.createPieceB = function(arr, num){
			this.kingB = Piece.factory("king", num);
			this.queenB = Piece.factory("queen", num);
			this.knightB1 = Piece.factory("knight", num);
			this.knightB2 = Piece.factory("knight", num);
			this.rookB1 = Piece.factory("rook", num);
			this.rookB2 = Piece.factory("rook", num);
			this.bishopB1 = Piece.factory("bishop", num);
			this.bishopB2 = Piece.factory("bishop", num);
			this.pawnB1 = Piece.factory("pawn", num, this.black);
			this.pawnB2 = Piece.factory("pawn", num, this.black);
			this.pawnB3 = Piece.factory("pawn", num, this.black);
			this.pawnB4 = Piece.factory("pawn", num, this.black);
			this.pawnB5 = Piece.factory("pawn", num, this.black);
			this.pawnB6 = Piece.factory("pawn", num, this.black);
			this.pawnB7 = Piece.factory("pawn", num, this.black);
			this.pawnB8 = Piece.factory("pawn", num, this.black);
			
			arr.push(this.kingB, this.queenB, this.knightB1, this.knightB2, this.rookB1, this.rookB2, this.bishopB1, this.bishopB2, this.pawnB1, this.pawnB2, this.pawnB3, this.pawnB4, this.pawnB5, this.pawnB6, this.pawnB7, this.pawnB8); 
			return this;
		};	
		this.createPieceW = function(arr, num){
			let color = this.white;
			this.kingW = Piece.factory("king", num);
			this.queenW = Piece.factory("queen", num);
			this.knightW1 = Piece.factory("knight", num);
			this.knightW2 = Piece.factory("knight", num);
			this.rookW1 = Piece.factory("rook", num);
			this.rookW2 = Piece.factory("rook", num);
			this.bishopW1 = Piece.factory("bishop", num);
			this.bishopW2 = Piece.factory("bishop", num);
			this.pawnW1 = Piece.factory("pawn", num, this.white);
			this.pawnW2 = Piece.factory("pawn", num, this.white);
			this.pawnW3 = Piece.factory("pawn", num, this.white);
			this.pawnW4 = Piece.factory("pawn", num, this.white);
			this.pawnW5 = Piece.factory("pawn", num, this.white);
			this.pawnW6 = Piece.factory("pawn", num, this.white);
			this.pawnW7 = Piece.factory("pawn", num, this.white);
			this.pawnW8 = Piece.factory("pawn", num, this.white);
			
			arr.push(this.kingW, this.queenW, this.knightW1, this.knightW2, this.rookW1, this.rookW2, this.bishopW1, this.bishopW2, this.pawnW1, this.pawnW2, this.pawnW3, this.pawnW4, this.pawnW5, this.pawnW6, this.pawnW7, this.pawnW8); 
			return this;
		};
		this.randomPlace = function(side, pos, arr){
			while(pos.length < 2*side && pos.length<this.pieceNum){
				let randomnumber = Math.floor(Math.random()*side*side);
				let el = document.getElementById("cell" + randomnumber);				
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
					let el = document.getElementById("cell" + arr[i].pos);
					this.addPiece(arr[i], color, el);
				}
			}
			return this;
		};
		this.showMoves = function(arr){
			for(let i=0;i<arr.length;i++){
				if(arr[i].pos!==null){
					let cell = document.getElementById("cell" + arr[i].pos);
					arr[i].moves = checkPos(side, arr[i]);					
					cell.addEventListener("click", function(){	
						
						if(!cell.classList.contains("clickCell")){
							let cellWithClickClass = document.getElementsByClassName("clickCell");
							let cellWithMoveClass = document.querySelectorAll(".moveCell");
							
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
							let moveCell = document.getElementById("cell" + item);
							moveCell.classList.toggle("cell");
							moveCell.classList.toggle("moveCell");							
						}.bind(this));
						
					}.bind(this));
				}
			}
			return this;
		};		
		
		this.init();	
		
		console.log(this.queenB);
		console.log(this.rookB1);
		console.log(this.bishopB2);
console.log(this.pawnB4);		
	};
	
})(window);