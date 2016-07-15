/**
service.js
This service deals with the get post mothods for ajax call
*/
myApp.factory('ajaxwebservice', function($http,$location) {
    var factory = {}; 
    
    factory.getPost = function(ajaxmethod,url, dat) {
        var token = localStorage.getItem('authInfo');

        var postData = {"postd":{'zipcode':dat},"url":url,"met":'POST',"token":token};
        // postData.postd = dat;
        // postData.url = url;
        // postData.met = 'POST';
        // postData.token = token;
        return $http({
            url: 'http://localhost/accessToken.php?flag=2',
            data: JSON.stringify(postData),
            method: 'POST'
        })
        .then(function(response) {
            console.log(response.data);
            // return response;

        });
    };

    factory.getAccessToken = function() {
        return $http({
            url: 'http://localhost/accessToken.php?flag=1',
        })
        .then(function(response) {
            localStorage.setItem('authInfo', response.data['access_token']);
        });
    };
    return factory;
});
