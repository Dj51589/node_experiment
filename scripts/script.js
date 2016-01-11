
    // create the module and name it scotchApp
    var assignmentApp = angular.module('assignmentApp', ['ngRoute']);
    // assignmentApp.constant('baseHref', 'localhost:8888/')
    // assignmentApp.config(function($locationProvider) 
    // {
    //   $locationProvider.html5Mode(false); // so that no error throw after page refresh
    // })
    // configure our routes
    assignmentApp.config(function($routeProvider,$locationProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/details', {
                templateUrl : 'detail.html',
                controller  : 'detailController'
            })

            .when('/save', {
                templateUrl : 'savetodoc.html',
                controller  : 'docCntrl'
            })

            // use the HTML5 History API
        	//$locationProvider.html5Mode(false);
    });

    // create the controller and inject Angular's $scope,$http and $rootScope
    assignmentApp.controller('mainController', function($scope,$http,$rootScope) {
        $scope.message = 'Everyone come and see how good I look!';
        $scope.dataList;
        $scope.selectedList = [];
        $scope.searchList = [];
        $rootScope.selectedIds = $rootScope.selectedIds || [];
        var selectedIds = $rootScope.selectedIds;
        $scope.getList = function(){
            $http.get('dataList.json').success(function (data) 
            {
               $scope.dataList = data;
               angular.forEach(data,function(elem){
                if(selectedIds.indexOf(elem.id)<0){
                    $scope.searchList.push(elem);   
                }
               });
               $scope.getSelectedList();
             }).error(function (data) {
               var error = data;
             });
        };

        $scope.getSelectedList = function()
        {
            angular.forEach($scope.dataList,function(elem)
            {
                if(selectedIds.indexOf(elem.id)>=0)
                {
                    $scope.selectedList.push(elem);   
                }
           });
        };

        $scope.movetoselect = function(data){
            $scope.selectedList.push(data);
            $rootScope.selectedIds.push(data.id);
            deleteData($scope.searchList,data.id);
        };  

        $scope.movetosearchList = function(data){
            $scope.searchList.push(data);
            deleteData($scope.selectedList,data.id);
            deleteData($rootScope.selectedIds,data.id);
        };

        function deleteData(arr,id){
            angular.forEach(arr,function(elem,index){
                if((elem.id || elem) == id){
                    arr.splice(index,1);
                    return false;
                }
            });
        };
        
        $scope.getList();    
    });
    
    
    assignmentApp.controller('detailController', function($scope,$rootScope,$http) {
        var selectedIds = $rootScope.selectedIds ? $rootScope.selectedIds.join(',') : [];
        $scope.selectedList = [];
        var params = {};
        $scope.getList = function(){
            $http.get('dataList.json').success(function (data) 
            {
               angular.forEach(data,function(elem){
                if(selectedIds.indexOf(elem.id)>=0){
                    $scope.selectedList.push(elem);   
                }
               });
             }).error(function (data) {
               var error = data;
             });
        };
        $scope.getList();
    });

    assignmentApp.controller('docCntrl', function($scope,$rootScope,$http) {
        var selectedIds = $rootScope.selectedIds ? $rootScope.selectedIds.join(',') : [];
        $scope.selectedList = [];
        var params = {};
        $scope.getList = function(){
            $http.get('dataList.json').success(function (data) 
            {
               angular.forEach(data,function(elem){
                if(selectedIds.indexOf(elem.id)>=0){
                    $scope.selectedList.push(elem);   
                }
               });
             }).error(function (data) {
               var error = data;
             });
        };
        $scope.getList();
    });

   






