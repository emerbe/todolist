angular.module('ToDoModule', [])
  .controller('ToDoCntrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    var filters = {};

    var actions = [
	{completed:false, name:"Clear house"}, 
	{completed:false, name:"Prepare supper"}, 
	{completed:false, name:"Clean tooth"}
	];
	$scope.actions=actions;

	$scope.addTodo = function () {
		if($scope.newTodo){
			var newTodo = $scope.newTodo.trim();
			$scope.actions.push({completed:false, name:newTodo});
			$scope.newTodo="";
		}
	};

	$scope.removeTodo = function (todoForRemoval) {
		var index = $scope.actions.indexOf(todoForRemoval);	
		$scope.actions.splice(index, 1);
	};

  }])