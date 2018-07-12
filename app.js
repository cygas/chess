(function(global){
	
	global.App = function({height, side}){
		
		this.init = function({height, side}){
			this.config = {
				chessBoard: document.getElementById("board"),
				inputs: document.querySelector("#inputs"),
				submit: inputs.querySelector("#submit"),				
				pieceNumber: inputs.querySelector("#piece-number").querySelector("select"),				
				rowClass: "row",
				cellClass: "cell",
				black: "B",
				white: "W",
				height: height,
				side: side,
				piece: null				
			};			
		};
		
		this.init({height: height, side: side});	
		this.config.submit.addEventListener("click", function(){
			
			this.config.piece = parseInt(this.config.pieceNumber
			.options[this.config.pieceNumber.selectedIndex].value);
			
			this.config.chessBoard.innerHTML = "";
			
			if(!isNaN(this.config.height)){
				let board = new Board(this.config);		
				let playerB = new Player(this.config, this.config.black);
				let playerW = new Player(this.config, this.config.white);
			}else{
				throw{
					name: "Error",
					message: "Wymiar pola nie jest liczbą. Wprowadź poprawną wartość."
				}
			}			
		}.bind(this));
				
	};
	
})(window);