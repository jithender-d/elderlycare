/**
service.js
This service deals with the get post mothods for ajax call
*/
myApp.factory('ajaxwebservice', function($http,$location) {
    var factory = {}; 
    
    factory.getPost = function(ajaxmethod,token,url, data) {
        return $http({
            url: 'http://localhost/accessToken.php?flag=2&url='+url+'&postd='+data+'&met=POST&token='+token,
        })
        .then(function(response) {
            return response;
        });
    };

    factory.getAccessToken = function() {
        return $http({
            url: 'http://localhost/accessToken.php?flag=1',
        })
        .then(function(response) {
            return response;
        });
    };
    return factory;
});
