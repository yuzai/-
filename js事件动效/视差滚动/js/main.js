var deg = 0;
document.getElementById('test1').onclick = function(){
	if(deg === 360){
		deg = 0;
		this.style.transition = 'transform 0s';	
        this.style.transform = 'rotateY(-'+deg+'deg)';
        var self = this;
        requestAnimationFrame(function(){
        	deg = 40;
		    self.style.transition = 'transform 1s';	
            self.style.transform = 'rotateY(-'+deg+'deg)';
        })	
	}else
	{
		deg+=40;
		this.style.transition = 'transform 1s';	
		this.style.transform = 'rotateY(-'+deg+'deg)';
	}
}