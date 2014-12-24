```js
var thymer = require('thymer');

thymer.wait(5000).every(1000).for(3).do(function(){
	console.log('tick');
}).then(function(){
	console.log('boom');
});
```