(function(global){
	
	global.Player = function(side){
		
		this.init = function(){
			this.pieces = ["king", "queen", "knight", "rook", "bishop", "pawn"];
			this.white = "W";
			this.black = "B";
			this.cell13 = document.getElementById("cell13");
			this.num = side;
		}.call(this);
		
		this.createPiece = function(nr, color, el){
			let piece = "url(img/" + this.pieces[nr] + color + ".png)";
			el.style.backgroundImage = piece;
			el.style.backgroundSize = "contain";
		}.bind(this);
		
		
		this.createPlayer = function(color){
			if(color == "W"){
				for(let i=0; i<this.num*2; i++){
					let el = document.getElementById("cell" + i);
					if(i == 0 || i == 7){
						this.createPiece(3, color, el);
					}
					if(i == 1 || i == 6){
						this.createPiece(2, color, el);
					}
					if(i == 2 || i == 5){
						this.createPiece(4, color, el);
					}
					if(i == 3){
						this.createPiece(0, color, el);
					}
					if(i == 4){
						this.createPiece(1, color, el);
					}
					if( i > 7 && i < 16){
						this.createPiece(5, color, el);
					}
				}
			}
			if(color == "B"){			
				for(let i=0; i<this.num*2; i++){	
					let el = document.getElementById("cell" + (this.num*this.num-1-i));					
					if(i == 0 || i == 7){
						this.createPiece(3, color, el);
					}
					if(i == 1 || i == 6){
						this.createPiece(2, color, el);
					}
					if(i == 2 || i == 5){
						this.createPiece(4, color, el);
					}
					if(i == 3){
						this.createPiece(0, color, el);
					}
					if(i == 4){
						this.createPiece(1, color, el);
					}
					if( i > 7 && i < 16){
						this.createPiece(5, color, el);
					}
				}
			}
		}.bind(this);
		
		this.createPlayer(this.white);
		this.createPlayer(this.black);
	};
	
})(this);