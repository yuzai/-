// function hebing(arr){
// 	var newarr = [];
// 	arr.forEach(function(item){
// 		if(item instanceof Array){
// 			newarr = newarr.concat(hebing(item));
// 		}else{
// 			newarr.push(item);
// 		}
// 	})
// 	return newarr;
// }
console.log(hebing([1,[2,[4,5]],3,[4,5,6],[7,8,[9,10]]]));

function hebing(arr){
	var newarr = [];
	var queue = [];
	queue.push(arr.slice());
	var time = 0;
	while(queue.length!==0){
		time++;
		var pop = queue.pop();
		for(var i=0;i<pop.length;i++){
			if(pop[i] instanceof Array)
			{
				queue.push(pop.slice(i+1));
				queue.push(pop[i]);
				break;
			}else{
				newarr.push(pop[i]);
			}
		}
	}
	return newarr;
}