(function(global){
	
	global.Player = function(side){
				
		this.init = function(){
			this.pieces = [];				
			this.position = [];
			this.white = "W";
			this.black = "B";			
			this.num = side;
			this.pieceNum = 16; //number of pieces in chess game
			
			this.createPiece(this.pieces, this.num).randomPlace(this.num, this.position);
			//this.randomPlace(this.num, this.position);
			this.displayPiece(this.position, this.pieces, this.black).showMoves(this.pieces);
			//this.showMoves(this.pieces);
		};

		this.createPiece = function(arr, num){
			this.king = Piece.factory("king", num);
			this.queen = Piece.factory("queen", num);
			this.knight1 = Piece.factory("knight", num);
			this.knight2 = Piece.factory("knight", num);
			this.rook1 = Piece.factory("rook", num);
			this.rook2 = Piece.factory("rook", num);
			this.bishop1 = Piece.factory("bishop", num);
			this.bishop2 = Piece.factory("bishop", num);
			this.pawn1 = Piece.factory("pawn", num);
			this.pawn2 = Piece.factory("pawn", num);
			this.pawn3 = Piece.factory("pawn", num);
			this.pawn4 = Piece.factory("pawn", num);
			this.pawn5 = Piece.factory("pawn", num);
			this.pawn6 = Piece.factory("pawn", num);
			this.pawn7 = Piece.factory("pawn", num);
			this.pawn8 = Piece.factory("pawn", num);
			
			arr.push(this.king, this.queen, this.knight1, this.knight2, this.rook1, this.rook2, this.bishop1, this.bishop2, this.pawn1, this.pawn2, this.pawn3, this.pawn4, this.pawn5, this.pawn6, this.pawn7, this.pawn8); 
			return this;
		};		
		this.randomPlace = function(side, pos){
			while(pos.length < 2*side && pos.length<this.pieceNum){
				let randomnumber = Math.floor(Math.random()*side*side);
				if(pos.indexOf(randomnumber) > -1) continue;
				pos.push(randomnumber);
			}
			return this;
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
				arr[i].pos = pos[i];
			}
			return this;
		};
		this.showMoves = function(arr){
			for(let i=0;i<arr.length;i++){
				if(arr[i].pos!==null){
					let cell = document.getElementById("cell" + arr[i].pos);
					arr[i].moves = checkPos(side, arr[i]);
					cell.addEventListener("click", function(){	
						cell.classList.toggle("clickCell");
						cell.classList.toggle("cell");
						arr[i].moves.forEach(function(item){
							let moveCell = document.getElementById("cell" + item);
							moveCell.classList.toggle("moveCell");
						}.bind(this));
						
					}.bind(this));
				}
			}
			return this;
		};		
		
		this.init();	
		
		console.log(this.queen);
		console.log(this.rook1);
		console.log(this.bishop2);		
	};
	
})(this);