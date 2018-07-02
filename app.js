(function(global){
	
	global.App = function({height, side}){
		
		this.init = function(){
			this.config = {
				chessBoard: document.getElementById("board"),
				rowClass: "row",
				cellClass: "cell",
				height: height,
				side: side,
			};
			this.board = new Board(this.config);		
			this.player = new Player(this.config.side);
		};
		
		this.init();	
	};
	
})(this);