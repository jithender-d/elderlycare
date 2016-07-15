'use strict';
// configure your hostname here
myApp.controller('HomeController', function($scope, ajaxwebservice) {

	$scope.getAccessToken = function() {
		var res = ajaxwebservice.getAccessToken();
	};
	$scope.getAccessToken();
});

myApp.controller('RegistrationController', function($scope, ajaxwebservice, $routeParams) {
	$scope.accountData = {};
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
        }else if($scope.accountForm.zipcode.$error.required){
            $scope.error_msg = 'Please enter Zipcode.';
            $scope.show = true;
            return false;
        }else if($scope.accountForm.zipcode.$invalid){
        	$scope.error_msg = 'Zipcode length should be 6.';
            $scope.show = true;
            return false;
        }
        else if ($scope.accountForm.$valid) {
        	var url = 'https://ap2.salesforce.com/services/apexrest/createHome';
            $scope.org.country = 'India';
            $scope.org.state = 'TS';
           	
           	var token = localStorage.getItem('authInfo');
            var postData = {"postd": $scope.org,"url":url,"met":'POST',"token":token};
            var subUser = ajaxwebservice.getPost(postData, 2).then(function(response) {
	            $scope.homes = response.data;
	            alert('Old Age Organization Created Successfully.')
	            location.href = '#/home';
	        });
            
    	}
    }


    $scope.validate_user = function () {
       	$scope.error_msg_user = '';  //error messages store 
        $scope.show_user = false; // error message display flag
        $scope.sub_show_user = false; //submit flag

        if($scope.userForm.name.$error.required){
            $scope.error_msg_user = 'Please enter User name.';
            $scope.show_user = true;
            return false;
        }else if($scope.userForm.age.$error.required){
            $scope.error_msg_user = 'Please enter Age.';
            $scope.show_user = true;
            return false;
        }
        else if($scope.userForm.address.required){
            $scope.error_msg_user = 'Please enter Address.';
            $scope.show_user = true;
            return false;
        }else if($scope.userForm.mobile.$error.required){
            $scope.error_msg_user = 'Please enter Mobile number.';
            $scope.show_user = true;
            return false;
        }else if($scope.userForm.mobile.$invalid){
            $scope.error_msg_user = 'Mobile number should be of 10 digits.';
            $scope.show_user = true;
            return false;
        }else if($scope.userForm.card.$error.required){
            $scope.error_msg_user = 'Please select Id card type.';
            $scope.show_user = true;
            return false;
        }else if($scope.userForm.cardnum.$invalid){
            $scope.error_msg_user = 'Please enter Id card number.';
            $scope.show_user = true;
            return false;
        }
        else if($scope.userForm.cardnum.$invalid){
            $scope.error_msg_user = 'Id card number length should less than 20 & gerater than 10';
            $scope.show_user = true;
            return false;
        }else if($scope.userForm.gender.$error.required){
            $scope.error_msg_user = 'Please select gender.';
            $scope.show_user = true;
            return false;
        }else if($scope.userForm.zipcode.$error.required){
            $scope.error_msg_user = 'Please enter zipcode.';
            $scope.show_user = true;
            return false;
        }else if($scope.userForm.zipcode.$invalid){
            $scope.error_msg_user = 'Zipcode length should be 6.';
            $scope.show_user = true;
            return false;
        }else if($scope.userForm.refname.$error.required){
            $scope.error_msg_user = 'Please enter referal name.';
            $scope.show_user = true;
            return false;
        }/*else if($scope.userForm.refage.$error.required){
            $scope.error_msg_user = 'Please enter referal age.';
            $scope.show_user = true;
            return false;
        }*/else if($scope.userForm.refaddrs.$error.required){
            $scope.error_msg_user = 'Please enter referal address.';
            $scope.show_user = true;
            return false;
        }else if($scope.userForm.refmobile.$error.required){
            $scope.error_msg_user = 'Please enter referal Mobile number.';
            $scope.show_user = true;
            return false;
        }else if($scope.userForm.refmobile.$invalid){
            $scope.error_msg_user = 'Referal mobile number should be of 10 digits.';
            $scope.show_user = true;
            return false;
        }else if($scope.userForm.refidtype.$error.required){
            $scope.error_msg_user = 'Please select refaral id card type.';
            $scope.show_user = true;
            return false;
        }else if($scope.userForm.refidcard.$invalid){
            $scope.error_msg_user = 'Please enter refaral id card number.';
            $scope.show_user = true;
            return false;
        }
        else if($scope.userForm.refidcard.$invalid){
            $scope.error_msg_user = 'Referal id card number length should less than 20 & gerater than 10';
            $scope.show_user = true;
            return false;
        }/*else if($scope.userForm.refgender.$error.required){
            $scope.error_msg_user = 'Please select referal gender.';
            $scope.show_user = true;
            return false;
        }*/else if($scope.userForm.refzipcode.$error.required){
            $scope.error_msg_user = 'Please enter referal zipcode.';
            $scope.show_user = true;
            return false;
        }else if($scope.userForm.refzipcode.$invalid){
            $scope.error_msg_user = 'Referal zipcode length should be 6.';
            $scope.show_user = true;
            return false;
        }else if ($scope.userForm.$valid) {
        	var url = 'https://ap2.salesforce.com/services/apexrest/createCandidate';
            // $scope.accountData.candCity = 'Hyderabad';
            // $scope.accountData.candCountry = 'India';
            // $scope.accountData.candState = 'TS';
            // $scope.accountData.referralCity = 'Hyderabad';
            // $scope.accountData.referralCountry = 'India';
            // $scope.accountData.referralState = 'TS';
            $scope.accountData.homeId = $routeParams.homeId;
            var token = localStorage.getItem('authInfo');
            var postData = {"postd": $scope.accountData,"url":url,"met":'POST',"token":token};
            var subUser = ajaxwebservice.getPost(postData, 2).then(function(response) {
            	alert('User joined successfully.');
	            location.href = '#/home';
	        });
    	}
    }
    
});

myApp.controller('SearchController', function($scope, ajaxwebservice) {
	var url = 'https://ap2.salesforce.com/services/apexrest/EC_ElderCare';
	$scope.footer = true;
	$scope.searchHomes = function() {
		var token = localStorage.getItem('authInfo');
		var dat = null;
		if($scope.postalCode !== undefined) {
			dat = $scope.postalCode;
		}
		var postData = {"postd":{'zipcode':dat},"url":url,"met":'POST',"token":token};
       	var res = ajaxwebservice.getPost(postData, 2).then(function(response) {
            $scope.homes = response.data;
        });
    };

	$scope.searchHomes();
	
});
