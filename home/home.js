'use strict';
// configure your hostname here
myApp.controller('HomeController', function($scope, ajaxwebservice) {

	$scope.getAccessToken = function() {
		var res = ajaxwebservice.getAccessToken();
		if(res !== '') {
			localStorage.setItem('authInfo', JSON.stringify(res.access_token));
		}
	};
	$scope.getAccessToken();
});

myApp.controller('RegistrationController', function($scope) {
	$scope.regUser = '1';
	$scope.validate_organization = function () {
       	$scope.error_msg = '';  //error messages store 
        $scope.show = false; // error message display flag
        $scope.sub_show = false; //submit flag

        if($scope.accountForm.name.$error.required){
            $scope.error_msg = 'Please enter Organization name.';
            $scope.show = true;
            return false;
        }else if($scope.accountForm.name.$invalid){
            $scope.error_msg = 'Organization name length should not be greater than 150.';
            $scope.show = true;
            return false;
        }else if($scope.accountForm.location.$error.required){
            $scope.error_msg = 'Please enter Location.';
            $scope.show = true;
            return false;
        }else if($scope.accountForm.location.$invalid){
            $scope.error_msg = 'location length should not be greater than 150.';
            $scope.show = true;
            return false;
        }else if($scope.accountForm.capacity.$error.required){
            $scope.error_msg = 'Please enter capacity.';
            $scope.show = true;
            return false;
        }else if($scope.accountForm.mobile.$error.required){
            $scope.error_msg = 'Please enter Mobile number.';
            $scope.show = true;
            return false;
        }else if($scope.accountForm.mobile.$invalid){
            $scope.error_msg = 'Mobile number should be of 10 digits.';
            $scope.show = true;
            return false;
        }
        else if($scope.accountForm.address.$invalid){
            $scope.error_msg = 'Please enter Address.';
            $scope.show = true;
            return false;
        }
        else if ($scope.accountForm.$valid) {
            alert('okk');
    	}
    }
    
});

myApp.controller('SearchController', function($scope, ajaxwebservice) {
	var url = 'https://ap2.salesforce.com/services/apexrest/EC_ElderCare';
	
	$scope.searchHomes = function(zipcode) {
		var postdata = {};
		var token = localStorage.getItem('authInfo');
		console.log(token);
		postdata.zipcode = $scope.postalCode; 
		var res = ajaxwebservice.getPost('POST',token,url,postdata);

	};

	$scope.searchHomes();
	
});
