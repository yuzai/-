function feibo(n){
	if(n<2)
		return n;
	return feibo(n-1)+feibo(n-2);
}
console.log(feibo(10));

var sum = {};
function feibo2(n){
	var sum1 = 0,sum2,sumn;
	if(n<2){
		return n;
	}
	sum1 = 0;
	sum2 = 1;
	for(var i=2;i<=n;i++){
		sumn = sum1+sum2;
		sum[i] = sumn;
		sum1 = sum2;
		sum2 = sumn;
	}
	return sumn;
}
console.log(feibo2(10));
console.log(sum);