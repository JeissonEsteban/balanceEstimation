app.controller('presupuestoCtrl',function($scope,$rootScope,Mes,Escenario){

	$scope.model={
			mes_list:Mes.getAll(),
			mes_active:Mes.get,
			escenario_list:Escenario.getAll(),
			escenario_active:Escenario.get
		};



	

});