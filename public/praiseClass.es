class praise{
	constructor(ele){
		this.ele=ele;
	}

	add(){

		console.log("点击");
		return;
		let p=new Promise(function(resolve,reject){
			$.post('',function(){
				resolve();
			}).error(function(){
				reject();
			});
		});

		p.then(function(data){

		}).catch(function(error){

		});
	}

	click(){
		this.ele.click(this.add);
	}
}

export default praise;