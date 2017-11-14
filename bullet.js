

//构造函数 子弹
class Bullet{
	
	constructor(){
//		super()
		//创建子弹节点
		this.ele = null;
	}
	
	//初始化 init
	init(){
		//添加节点
		this.ele = document.createElement("div");
		gameEngine.ele.appendChild(this.ele);
		//当页面添加一个子弹对象，就将this对象添加至allBullet[]数组中
		gameEngine.allBullets.push(this);
		
		this.ele.className = "bullet";
		this.ele.style.left = myPlane.ele.offsetLeft - this.ele.offsetWidth/2 + myPlane.ele.offsetWidth/2 + 1 + "px";
		this.ele.style.top = myPlane.ele.offsetTop - this.ele.offsetHeight + "px";
		
		return this;
	}
	
	//子弹移动move
	move(){
		let _this = this;
		this.timer = setInterval(function(){
			//判断移除节点
			if(_this.ele.offsetTop<-18){
				clearInterval(_this.timer);
				gameEngine.ele.removeChild(_this.ele)
				//在页面上移除子弹节点的同时， 也要将该子弹对象从数组allBullets中移除
				gameEngine.allBullets.splice(gameEngine.allBullets.indexOf(_this), 1);
				
			}
			else {
				_this.ele.style.top = _this.ele.offsetTop - 10 + "px";
			}
		},30)
		
		
		
	}
	
	//子弹发生爆炸
	boom(){
		clearInterval(this.timer)
		
		this.ele.className = "bullet-die";
		//解构赋值
		let [imgs,i] = [["images2/die1.png","images2/die2.png"],0];
		//箭头函数，由于箭头函数不会形成作用域，所以可以引用this
		let dieTimer = setInterval(()=>{
			if(i>=1){
				clearInterval(dieTimer)
				gameEngine.ele.removeChild(this.ele);
			}
			else{
				this.ele.style.background = "url(" + imgs[++i] + ") no-repeat";
			}
			
		},200)
	}
	
	
	
}

