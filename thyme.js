var Q = require('q');

var thyme = {
	deffered:Q.defer(),
	timeout:null,
	interval:null,
	limit:null,
	wait: function(n){
		this.timeout = n;
		return this;
	},
	every: function(n){
		this.interval = n;
		return this;
	},
	for: function(n){
		this.limit = n;
		return this.interval ? this : console.error('every for needs an every');
	},
	do: function(f){
		var self = this;
		var goal = function(){
			var sub = function(){
				f();
				self.limit ? self.limit-- : undefined;
				self.limit === 0 ? self.stop() : undefined;
			}
			self.interval ? self.interval = setInterval(sub, self.interval) : sub();
		}
		this.timeout ? setTimeout(goal, this.timeout) : goal();
		return this.deffered.promise;
	},
	stop: function(){
		clearInterval(this.interval);
		this.deffered.resolve();
	}
}