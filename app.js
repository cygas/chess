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
		};		
		this.init();		
	};
	
})(window);