
var jadon = function(jadon){
	
	//can be used outside mpdule but longer
	var not = function(v){
	if (v === null) return true;
		return typeof v === "undefined";
	}
		
	
	//cannot be used outside module or namespace
	//var not = function(){

	
	
	//short, can be used outside module
	//global scope can be used outside module
	//not = function(){

	//}


	jadon.scaleTo = function(obj, container, percentX, percentY) {
		
		// COLLECTING PARAMETERS
		// zim version of setting a default parameter
		// if ( zot(percentX) ) percentX = 100;
		
		// long version of setting default parameter
		if (not(percentX)) {
			percentX = -1;
		}
		
		if (percentY === null || typeof percentY === "undefined") {
			percentY = -1;
		}
		 
		// short version but be careful with false, 0, ""
		// percentX = (percentX || 100);
		
		console.log("percentX = " + percentX);
		
		if (zot(obj)) return;
		
		if (  not(container) ) {
			if (!obj.getStage()) {
				zog("please add obj to stage before scaling");
				return;
			}
			container = obj.getStage();		
		}
		//if(percentX != -1 && percentY != -1){
		if(percentX >= 0 || percentY >= 0){

			var s;
		
		if (percentX >= 0) {
			var w = container.getBounds().width * percentX / 100;
			var sX = w / obj.getBounds().width;
			obj.scaleX = sX;
		
		}
		if (percentY >= 0) {
			var h = container.getBounds().height * percentY / 100;
			var sY = h / obj.getBounds().height;
			
		}

		if(sX && sY){
			s = Math.min(sX, sY);
		}else if (sX) {

		}
		var s = Math.min(sX, sY);
		//obj.scaleX = obj.scaleY = s;
		}
	}
	
	
	
	jadon.Waiter = function (speed){
		
		var makeWaiter = function() {
				console.log("hi from Waiter");
				console.log("speed" + " " + speed);

				if (not(speed)) speed = 30;
				//speed = Math.min(60, speed);
				//speed = Math.max(10, speed);

				speed = Math.max(10, Math.min(60, speed));
				console.log(speed);

				this.maxTime = 1; // public
				// this.body = new createjs.Container(); // public
				
				var shape = new createjs.Shape();
				var w=100;
				var h=50;
				shape.graphics.f("purple").rr(0,0,w,h,20);
				shape.setBounds(0,0,w,h);
				shape.regX = w/2;
				shape.regY = h/2;
				this.addChild(shape);
				
				var ticker = createjs.Ticker.on("tick", function() {
					shape.rotation += speed;
					stage.update();
				});
				
				checkTime(); // private (local) function
				function checkTime() {
					console.log("checkTime");
				}
				
				this.pause = function() { // public method
					console.log("pause");
				}
				
		}
		makeWaiter.prototype = new createjs.Container();
		makeWaiter.constructor = makeWaiter;
		return new makeWaiter();
		
	}
	
	jadon.Moon = function (a, b, r) {
						
		function makeMoon() {
					
			//var circle = new createjs.Shape();
			var g = this.graphics;
			this.x = Math.floor (Math.random() * 500) + 10;
			this.y = Math.floor (Math.random() * 500) + 1;
			g.beginRadialGradientFill(["#be5b12", "#ffffff"], [0, 1], 0, 0, 10, 20, 50, 100).dc(a, b, r);
			createjs.Tween.get(this, {loop:true}).to({x:Math.floor (Math.random() * 2000) + 10, y:Math.floor (Math.random() * 1000) + 10}, 10000);
			createjs.Tween.get(this).to({alpha: 0},10000);
			createjs.Ticker.setFPS(60);
				
		}	

		makeMoon.prototype = new createjs.Shape();
		makeMoon.constructor = jadon.Moon;
		return new makeMoon();
		
	}	
	
	return jadon;
}(jadon || {});




