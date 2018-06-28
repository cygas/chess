(function(global){
	
	global.App = function(){
		
		this.init = function(){
			this.config = {
				chessBoard: document.getElementById("board"),
				rowClass: "row",
				cellClass: "cell",
				height: 60,
				side: 8,
				m: 0
			};
		}.call(this);		
		
		this.board = new Board(this.config);		
		this.board.divCreator.createBoard();
		
		
		/*
		for(let i=0; i<this.config.side; i++){			
			this.board.divCreator.nameClass = this.config.rowClass;
			this.board.divCreator.id = this.config.rowClass + i;	
			this.board.divCreator.height = this.config.height;		
			this.board.divCreator.width = this.config.height*this.config.side;		
			this.board.divCreator.createDiv(this.config.chessBoard);
			for(let k=0; k<this.config.side; k++){
				this.board.divCreator.nameClass = this.config.cellClass;
				this.board.divCreator.id = this.config.cellClass + this.config.m;	
				this.board.divCreator.height = this.config.height;		
				this.board.divCreator.width = this.config.height;		
				this.board.divCreator.createDiv(document.getElementById(this.config.rowClass + i));
				this.config.m++;
			}
		}
		*/
		this.player = new Player(this.config.side);
		
	};
	
})(this);