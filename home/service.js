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
        /*return $http({
            url: url, 
            method: ajaxmethod,
            data: 'grant_type=password&client_id=3MVG9ZL0ppGP5UrC3MHbP86G8oH_wQr7bZdNFleh3UC9ZM1SwtC4hTUrJ.YRywLf4_rfw6nLJYdqEYlJYJ18i&client_secret=2678223884336568441&username=ElderlyCare@Popcornapps.com&password=pop@12345duYlrjYafzhodOX6aWppN7qZU',
            headers: {
                 'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache'
            }
        });*/

        return $http({
            url: url,
            method: ajaxmethod,
            data: data,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',
            }
        })
        .then(function(response) {
            console.log('******************');
            console.log(response);
            return response;
        });



        
    };
    return factory;
});
