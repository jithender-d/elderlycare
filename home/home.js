'use strict';
// configure your hostname here
myApp.controller('HomeController', function($scope, ajaxwebservice) {
	// $scope.regUser = '1';
	var url = 'https://ap2.salesforce.com/services/oauth2/token';
	var data = 'grant_type=password&client_id=3MVG9ZL0ppGP5UrC3MHbP86G8oH_wQr7bZdNFleh3UC9ZM1SwtC4hTUrJ.YRywLf4_rfw6nLJYdqEYlJYJ18i&client_secret=2678223884336568441&username=ElderlyCare@Popcornapps.com&password=pop@12345duYlrjYafzhodOX6aWppN7qZU';
	// var res = ajaxwebservice.getPost('POST',data,url);
	// console.log(res);
	$scope.accessToken = '00D28000001dZef!ARcAQHHZuO5PCQTt.ziv8mKUjATr6yLBS.HDKtAYUl5tF8UNkPJDGalKKA1Qc.XkFeSahTkWoL0CXjPNtROyw_2WY0IjWAwv';
});

myApp.controller('RegistrationController', function($scope) {
	$scope.regUser = '1';
    
});

myApp.controller('SearchController', function($scope, ajaxwebservice) {
	var url = 'https://ap2.salesforce.com/services/apexrest/EC_ElderCare';
	var data = 'authorization:OAuth00D28000001dZef!ARcAQHHZuO5PCQTt.ziv8mKUjATr6yLBS.HDKtAYUl5tF8UNkPJDGalKKA1Qc.XkFeSahTkWoL0CXjPNtROyw_2WY0IjWAwv'
	var res = ajaxwebservice.getPost('POST',data,url);
	console.log(res);	
});
