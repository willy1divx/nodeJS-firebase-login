var app = angular.module('myApp',['ngRoute'])

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'home.html'
	})
	.when('/about', {
		templateUrl: 'about.html'
	})
	.otherwise({
		redirectTo: '/'
	})
})



app.controller('myCtrl', function($scope){
	
	$scope.createUser = function(user){
			console.log(user);
					firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // ...
		})
					
	};

var isError = false;

	$scope.signIn = function(user){
			console.log(user);
			firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function(error) {
		  // Handle Errors here.
		  isError = true;
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // ...
		}).then(function(){
			if(!isError){
				console.log("your're in");
				window.location.href = "/#/about";
			}
		})

	};
});



