//Purpose is to retrieve info from the respective service file.

//Creating a controller
app.controller("myController", ['$scope', function($scope) {
	$scope.user =  {
		name: "Michael Phan",
		age: 24}
}])

/*
app.controller('PhotoController', ['$scope', 'photos', '$routeParams', function($scope, photos, $routeParams) {
  photos.success(function(data) {
    $scope.detail = data[$routeParams.id];
  });
}]);
*/