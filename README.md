```js
var thyme = require('thyme');

thyme.wait(5000).every(1000).for(3).do(function(){
	console.log('tick');
}).then(function(){
	console.log('boom');
});
```