app.factory('Escenario',function(){

	var escenarios=[
		{	
			id:0,
			nombre:'Franquicias',
			conceptos:[
				{id:0,nombre:'Costos Propios',}
			]
		}
	];

	var escenario={};


	return{
		active:function(k){
			escenario=escenarios[k];
		},
		getAll:function(){
			return escenarios;
		},
		get:function(){
			return escenario;
		}
		
	}
});