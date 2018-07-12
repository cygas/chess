(function(global){
	
	global.App = function({height, side}){
		
		this.init = function({height, side}){
			this.config = {
				chessBoard: document.getElementById("board"),
				rowClass: "row",
				cellClass: "cell",
				height: height,
				side: side,
				black: "B",
				white: "W"
			};
			this.board = new Board(this.config);		
			this.playerB = new Player(this.config, this.config.black);
			this.playerW = new Player(this.config, this.config.white);
		};
		
		this.init({height: height, side: side});	
	};
	
})(window);