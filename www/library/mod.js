
var mod = function(mod) {
	
	// has namespace so can be used outside module
	// but is longer
	// mod.not = function() {
		
	//}
	
	// cannot be used outside namespace
	// can be used in module
	var not = function(p) {
		if (p === null) return true;
		return typeof p === "undefined";
	}
	
	// global scope can be used outside module
	// but wipes out any other not or gets wiped out
	// not = function() {
		
	// }
	
	// function not() {
		
	// }
	
	mod.scaleTo = function(obj, container, percentX, percentY) {
		
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
		
		if (percentX >= 0) {
			var w = container.getBounds().width * percentX / 100;
			var s = w / obj.getBounds().width;
			obj.scaleX = obj.scaleY = s;
		}
	}
	
	
	
	mod.Waiter = function() {
		
		var makeWaiter = function() {
			console.log("hi from Waiter");
			
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
				shape.rotation += 40;
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
	
	
	return mod;
}(mod || {});




/*
var mod = function(mod) {
	console.log("hi from mod");
	
	// var mod = {};
	
	mod.mood = "Really Thirsty";
	mod.name = "Dan";
	
	mod.think = function() {
		console.log("thinking");	
	}
	
		
	return mod;
}(mod || {});


var mod = function(mod) {
	console.log("hi from mod2");
	
	// var mod = {};
	
	mod.sleep = function() {
		console.log("sleeping");	
	}
	
		
	return mod;
}(mod || {});
*/

