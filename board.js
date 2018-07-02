(function(global){
	
	global.Board = function(config){
		this.init = function(){
			this.divCreator.createBoard(config)
		};
		
		this.divCreator = {
			side: null,
			nameClass: null,
			id: null,			
			height: null,
			width: null,
			increment: 0,
			createDiv: function(parent){
				let div = document.createElement("div");
				div.id = this.id;
				div.className = this.nameClass;				
				div.style.width = this.width + "px";
				div.style.height = this.height + "px";
				parent.appendChild(div);				
			},
			createBoard: function(config){					
				for(let i=0; i<config.side; i++){			
					this.nameClass = config.rowClass;
					this.id = config.rowClass + i;	
					this.height = config.height;		
					this.width = config.height*config.side;		
					this.createDiv(config.chessBoard);
					for(let k=0; k< config.side; k++){
						this.nameClass = config.cellClass;
						this.id = config.cellClass + this.increment;	
						this.height = config.height;		
						this.width = config.height;		
						this.createDiv(document.getElementById(config.rowClass + i));
						this.increment++;
					}
				}					
			}
		};
		this.init();
	};
	
})(this);