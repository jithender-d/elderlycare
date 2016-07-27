/**
service.js
This service deals with the get post mothods for ajax call
*/
myApp.factory('ajaxwebservice', function($http,$location) {
    var factory = {}; 
    
    factory.getPost = function(dat, flag) {
        return $http({
            url: 'http://10.10.6.83/accessToken.php?flag='+flag,
            // url: 'http://dev.popcornapps.com/libstore/accessToken.php?flag='+flag,
            data: JSON.stringify(dat),
            method: 'POST'
        })
        
    };

    factory.getAccessToken = function() {
        return $http({
            // url: 'http://dev.popcornapps.com/libstore/accessToken.php?flag=1',
            url: 'http://10.10.6.83/accessToken.php?flag=1',
        })
        .then(function(response) {
            localStorage.setItem('authInfo', response.data['access_token']);
        });
    };
    return factory;
});
