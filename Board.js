(function(global){
	
	global.Board = function(config){
		this.init = function(obj){
			this.createBoard(obj);
		};
		
		this.side = null;
		this.nameClass = null;
		this.id = null;			
		this.height = null;
		this.width = null;
		this.increment = 0;
		this.createDiv = function(parent){
			let div = document.createElement("div");
			div.id = this.id;
			div.className = this.nameClass;				
			div.style.width = this.width + "px";
			div.style.height = this.height + "px";
			parent.appendChild(div);				
		};
		this.createBoard = function(obj){			
			for(let i=0; i<obj.side; i++){			
				this.nameClass = obj.rowClass;
				this.id = obj.rowClass + i;	
				this.height = obj.height;		
				this.width = obj.height*obj.side;		
				this.createDiv(obj.chessBoard);
				for(let k=0; k< obj.side; k++){
					this.nameClass = obj.cellClass;
					this.id = obj.cellClass + "_" + this.increment;	
					this.height = obj.height;		
					this.width = obj.height;		
					this.createDiv(obj.chessBoard.querySelector("#" + obj.rowClass + i));
					this.increment++;
				}
			}					
		};
		
		this.init(config);
	};
	
})(window);