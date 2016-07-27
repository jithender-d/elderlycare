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
            $scope.error_msg = 'Please enter name.';
            $scope.show = true;
        	$("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        }else if($scope.accountForm.name.$invalid){
            $scope.error_msg = 'Name length should not be greater than 150.';
            $scope.show = true;
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        }else if($scope.accountForm.location.$error.required){
            $scope.error_msg = 'Please enter location.';
            $scope.show = true;
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        }else if($scope.accountForm.location.$invalid){
            $scope.error_msg = 'Location length should not be greater than 150.';
            $scope.show = true;
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        }else if($scope.accountForm.mobile.$error.required){
            $scope.error_msg = 'Please enter mobile number.';
            $scope.show = true;
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        }else if($scope.accountForm.mobile.$invalid){
            $scope.error_msg = 'Please enter valid mobile number.';
            $scope.show = true;
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        }
        else if($scope.accountForm.address.$invalid){
            $scope.error_msg = 'Please enter address.';
            $scope.show = true;
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        }else if($scope.accountForm.zipcode.$error.required){
            $scope.error_msg = 'Please enter zip code.';
            $scope.show = true;
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        }else if($scope.accountForm.zipcode.$invalid){
        	$scope.error_msg = 'Please enter valid zip code.';
            $scope.show = true;
            $("html, body").animate({ scrollTop: 0 }, "slow");
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
            $scope.error_msg_user = 'Please enter name.';
            $("html, body").animate({ scrollTop: 0 }, "slow");
            $scope.show_user = true;
            return false;
        }else if($scope.userForm.age.$error.required){
            $scope.error_msg_user = 'Please enter age.';
            $("html, body").animate({ scrollTop: 0 }, "slow");
            $scope.show_user = true;
            return false;
        }else if($scope.userForm.age.$invalid){
            $scope.error_msg_user = 'Please enter valid age.';
            $("html, body").animate({ scrollTop: 0 }, "slow");
            $scope.show_user = true;
            return false;
        }else if($scope.userForm.address.required){
            $scope.error_msg_user = 'Please enter address.';
             $("html, body").animate({ scrollTop: 0 }, "slow");
            $scope.show_user = true;
            return false;
        }else if($scope.userForm.mobile.$error.required){
            $scope.error_msg_user = 'Please enter mobile number.';
             $("html, body").animate({ scrollTop: 0 }, "slow");
            $scope.show_user = true;
            return false;
        }else if($scope.userForm.mobile.$invalid){
            $scope.error_msg_user = 'Please enter valid mobile number.';
             $("html, body").animate({ scrollTop: 0 }, "slow");
            $scope.show_user = true;
            return false;
        }else if($scope.userForm.card.$error.required){
            $scope.error_msg_user = 'Please select Id card type.';
             $("html, body").animate({ scrollTop: 0 }, "slow");
            $scope.show_user = true;
            return false;
        }else if($scope.userForm.cardnum.$invalid){
            $scope.error_msg_user = 'Please enter Id card number.';
             $("html, body").animate({ scrollTop: 0 }, "slow");
            $scope.show_user = true;
            return false;
        }
        else if($scope.userForm.cardnum.$invalid){
            $scope.error_msg_user = 'Please enter valid Id card number.';
             $("html, body").animate({ scrollTop: 0 }, "slow");
            $scope.show_user = true;
            return false;
        }else if($scope.userForm.gender.$error.required){
            $scope.error_msg_user = 'Please select gender.';
             $("html, body").animate({ scrollTop: 0 }, "slow");
            $scope.show_user = true;
            return false;
        }else if($scope.userForm.zipcode.$error.required){
            $scope.error_msg_user = 'Please enter zip code.';
             $("html, body").animate({ scrollTop: 0 }, "slow");
            $scope.show_user = true;
            return false;
        }else if($scope.userForm.zipcode.$invalid){
            $scope.error_msg_user = 'Please enter valid zip code.';
             $("html, body").animate({ scrollTop: 0 }, "slow");
            $scope.show_user = true;
            return false;
        }else if($scope.userForm.refname.$error.required){
            $scope.error_msg_user = 'Please enter referral name.';
             $("html, body").animate({ scrollTop: 0 }, "slow");
            $scope.show_user = true;
            return false;
        }else if($scope.userForm.refaddrs.$error.required){
            $scope.error_msg_user = 'Please enter referral address.';
            $("html, body").animate({ scrollTop: 0 }, "slow");
            $scope.show_user = true;
            return false;
        }else if($scope.userForm.refmobile.$error.required){
            $scope.error_msg_user = 'Please enter referral mobile number.';
             $("html, body").animate({ scrollTop: 0 }, "slow");
            $scope.show_user = true;
            return false;
        }else if($scope.userForm.refmobile.$invalid){
            $scope.error_msg_user = 'Please enter valid referral mobile number.';
             $("html, body").animate({ scrollTop: 0 }, "slow");
            $scope.show_user = true;
            return false;
        }else if($scope.userForm.refidtype.$error.required){
            $scope.error_msg_user = 'Please select referral Id card type.';
             $("html, body").animate({ scrollTop: 0 }, "slow");
            $scope.show_user = true;
            return false;
        }else if($scope.userForm.refidcard.$error.required){
            $scope.error_msg_user = 'Please enter referral Id card number.';
             $("html, body").animate({ scrollTop: 0 }, "slow");
            $scope.show_user = true;
            return false;
        }
        else if($scope.userForm.refidcard.$invalid){
            $scope.error_msg_user = 'Please enter valid Id card number.';
             $("html, body").animate({ scrollTop: 0 }, "slow");
            $scope.show_user = true;
            return false;
        }else if($scope.userForm.refzipcode.$error.required){
            $scope.error_msg_user = 'Please enter referral zip code.';
             $("html, body").animate({ scrollTop: 0 }, "slow");
            $scope.show_user = true;
            return false;
        }else if($scope.userForm.refzipcode.$invalid){
            $scope.error_msg_user = 'Please enter valid referral zip code.';
             $("html, body").animate({ scrollTop: 0 }, "slow");
            $scope.show_user = true;
            return false;
        }else if ($scope.userForm.$valid) {
        	var url = 'https://ap2.salesforce.com/services/apexrest/createCandidate';
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
            if(response.data.length == 0) {
                $scope.displayText = 'No records found.';
            } else {
                $scope.displayText = '';
            }
            $scope.homes = response.data;
        });
    };

	$scope.searchHomes();
	
});
