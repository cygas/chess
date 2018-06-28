(function(global){
	
	global.App = function(){
		
		this.init = function(){
			this.config = {
				chessBoard: document.getElementById("board"),
				rowClass: "row",
				cellClass: "cell",
				height: 60,
				side: 8,
			};
		}.call(this);		
		
		this.board = new Board(this.config);		
		this.board.divCreator.createBoard();
		
		//this.player = new Player(this.config.side);
		
	};
	
})(this);