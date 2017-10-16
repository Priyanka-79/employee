var app =angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider){
	$routeProvider.when("/employeelist",{
	templateUrl:"employeelist.html",
  css:"home.css",})
  .when("/",{
  templateUrl:"home.html",
  css:"home.css",})
	.when("/edit",{
	templateUrl:"emp_edit.html",
  css:"home.css",})
	.when("/add",{
	templateUrl:"emp_add.html",
  css:"home.css",})
  .when("/save",{
            templateUrl:"employeelist.html",
            css:"home.css",
        })
	//.when("/cancel",{
	//templateUrl:"employeelist.html",})
	//.when("/save",{
	//templateUrl:"employeelist.html"})

});

app.service('dataservice', function($http) {
  this.search=function(){
  	return $http.get("DATA.JSON");
      
   };  
   this.a=0;
});
  app.controller("myCtrl1",function($scope,dataservice){
	dataservice.search().then(function(response) {
      $scope.myData = response.data.records;
      $scope.list=$scope.myData;
      $scope.calculateAge = function(birthdate) {
          var today = new Date();
          var birthDate = new Date(birthdate);
          var age = today.getFullYear() - birthDate.getFullYear();
          var m = today.getMonth() - birthDate.getMonth();
          if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
              age--;
          }
          return age;
        }
      $scope.removeItem = function(x) {
        $scope.list.splice(x, 1);
    }
    $scope.edit = function(index) {
       // $scope.view = x ;
      //};
      dataservice.a=index;
      console.log(dataservice.a);
      $scope.newdata=$scope.list[dataservice.a];
      //console.log($scope.newdata);
      //$scope.view={};
    };
    $scope.editItem = function () {
            $scope.list[dataservice.a]=$scope.newdata;
        };
    $scope.user={};
        $scope.addItem = function () {
            $scope.list.push($scope.user);
        };

});
});
