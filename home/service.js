/**
service.js
This service deals with the get post mothods for ajax call
*/
myApp.factory('ajaxwebservice', function($http,$location) {
    //base url formation logic start
    var baseUrl = $location.protocol()+"://"+$location.host();
    if($location.port() != ""){
        baseUrl = baseUrl +":"+$location.port();
    }
    baseUrl = baseUrl +"/";
    //base url formation logic end

    var factory = {}; 
    
    /**
    * getPost
    *
    *@description :: This service deals with the get & post methods
    * 
    * inputs:
    * @ajaxmethod - get/post
    * @data - data to send for request
    * @url - restapi url
    *
    * output:
    * it will give promise object of getpost service 
    */
    factory.getPost = function(ajaxmethod,data,url) {
        return $http({
            method: ajaxmethod,
            cache: false,
            data: data,
            url: baseUrl+''+url, 
            headers: {'Content-Type': 'application/json'}
        })
    };
    return factory;
});
