app.controller('parametrizacionCtrl',function($scope,$rootScope,Mes,Escenario){

	$scope.model={
			mes_list:Mes.getAll(),
			mes_active:Mes.get,
			escenario_list:Escenario.getAll(),
			escenario_active:Escenario.get
		};

	$scope.func={};


	//func 
	$scope.func.editarFormula=function (centro,mes) {
		Mes.active(mes);
		$scope.model.centro_activo=centro;
	}

	//definimos escenarios
	


	//definimos centros de costo
	$scope.model.centro_list=[
		{id:0,nombre:'Avenida 19',mes:[]},
		{id:0,nombre:'Paralela 104',mes:[]},
	];
	$scope.model.centro_activo={};

	//definimos conceptos y cuentas
	$scope.model.concepto_list=[
		{k:0,n:'Costos Propios',cuenta:'1105'},
		{k:1,n:'Bonos',cuenta:''}
	];
	$scope.model.concepto_activo={};
});