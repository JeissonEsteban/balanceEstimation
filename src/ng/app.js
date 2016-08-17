var app = angular.module('app',['ngRoute']);



app.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'ng/views/presupuesto.html',
            controller  : 'presupuestoCtrl'
        })
        .when('/parametrizacion', {
            templateUrl : 'ng/views/parametrizacion.html',
            controller  : 'parametrizacionCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.controller('default',function($scope,$rootScope,$location){

	$scope.func={
		ir:function(dir) {
			$location.path(dir);
		}
	};

	if($rootScope.model==='undefined'|| $rootScope.model==null)
	{
		$rootScope.model={};

		//definimos periodos
		$rootScope.model.mes_list=[
			{k:0,n:'Enero'},
			{k:1,n:'Febrero'},
			{k:2,n:'Marzo'},
			{k:3,n:'Abril'},
			{k:4,n:'Mayo'},
			{k:5,n:'Junio'},
			{k:6,n:'Julio'},
			{k:7,n:'Agosto'},
			{k:8,n:'Septiembre'},
			{k:9,n:'Octubre'},
			{k:10,n:'Noviembre'},
			{k:11,n:'Diciembre'}
		];
		$rootScope.model.mes_activo={};
		}
});