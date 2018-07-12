(function(global){
	
	global.App = function({height}){
		
		this.init = function({height}){
			this.config = {
				chessBoard: document.getElementById("board"),
				inputs: document.querySelector("#inputs"),
				submit: inputs.querySelector("#submit"),
				sideNumber: inputs.querySelector("#side-number").querySelector("select"),
				pieceNumber: inputs.querySelector("#piece-number").querySelector("select"),				
				rowClass: "row",
				cellClass: "cell",
				black: "B",
				white: "W",
				height: height,
				side: null,
				piece: null				
			};			
		};
		
		this.init({height: height});	
		this.config.submit.addEventListener("click", function(){
			
			this.config.side = parseInt(this.config.sideNumber
			.options[this.config.sideNumber.selectedIndex].value);
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