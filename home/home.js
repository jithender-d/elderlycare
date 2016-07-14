'use strict';
// configure your hostname here
myApp.controller('HomeController', function($scope, $http, $route, $rootScope) {
    $rootScope.tab = 'home';
    var products = [
        {id:'prod_1',  name:'Product1',  price:"25.00",  mrp:"35.00",  img:"assets/images/product-1.jpg"},
        {id:'prod_2',  name:'Product2',  price:"125.00", mrp:"145.00", img:"assets/images/product-2.jpg"},
        {id:'prod_3',  name:'Product3',  price:"50.00",  mrp:"75.00",  img:"assets/images/product-3.jpg"},
        {id:'prod_4',  name:'Product4',  price:"75.00",  mrp:"140.00", img:"assets/images/product-4.jpg"},
        {id:'prod_5',  name:'Product5',  price:"95.00",  mrp:"150.00", img:"assets/images/product-5.jpg"},
        {id:'prod_6',  name:'Product6',  price:"65.00",  mrp:"105.00", img:"assets/images/product-6.jpg"},
        {id:'prod_7',  name:'Product7',  price:"55.00",  mrp:"105.00", img:"assets/images/product-5.jpg"},
        {id:'prod_8',  name:'Product8',  price:"85.00",  mrp:"100.00", img:"assets/images/product-4.jpg"},
        {id:'prod_9',  name:'Product9',  price:"250.00", mrp:"345.00", img:"assets/images/product-3.jpg"},
        {id:'prod_10', name:'Product10', price:"215.00", mrp:"245.00", img:"assets/images/product-2.jpg"},
        {id:'prod_11', name:'Product11', price:"105.00", mrp:"155.00", img:"assets/images/product-1.jpg"},
        {id:'prod_12', name:'Product12', price:"85.00",  mrp:"145.00", img:"assets/images/product-6.jpg"},
        {id:'prod_13', name:'Product13', price:"55.00",  mrp:"105.00", img:"assets/images/product-1.jpg"},
        {id:'prod_14', name:'Product14', price:"15.00",  mrp:"45.00",  img:"assets/images/product-2.jpg"},
        {id:'prod_15', name:'Product15', price:"125.00", mrp:"175.00", img:"assets/images/product-3.jpg"}
    ];
    var brands = [
        {id:'prod_1', img:"assets/images/brand1.png"},
        {id:'prod_2', img:"assets/images/brand2.png"},
        {id:'prod_3', img:"assets/images/brand3.png"},
        {id:'prod_4', img:"assets/images/brand4.png"},
        {id:'prod_5', img:"assets/images/brand5.png"},
        {id:'prod_6', img:"assets/images/brand4.png"},
        {id:'prod_7', img:"assets/images/brand5.png"},
        {id:'prod_8', img:"assets/images/brand4.png"},
        {id:'prod_9', img:"assets/images/brand3.png"},
        {id:'prod_10',img:"assets/images/brand2.png"},
        {id:'prod_11',img:"assets/images/brand1.png"},
        {id:'prod_12',img:"assets/images/brand2.png"},
        {id:'prod_13',img:"assets/images/brand3.png"},
        {id:'prod_14',img:"assets/images/brand4.png"},
        {id:'prod_15',img:"assets/images/brand5.png"}
    ];
    $scope.marketIds = [{"id":501,"businessIds":[1,2],"status":"Disabled","name":"New York","displayName":null,"defaultChannelMaps":[{"businessId":2,"channelMapId":5010001}],"timeZone":"America/New_York","startDate":"2013-01-01T00:00:00.000Z","endDate":null},{"id":504,"businessIds":[1,2],"status":"Disabled","name":"Philadelphia","displayName":null,"defaultChannelMaps":[{"businessId":2,"channelMapId":5040001}],"timeZone":"America/New_York","startDate":"2013-01-01T00:00:00.000Z","endDate":null},{"id":556,"businessIds":[2],"status":"Active","name":"Richmond-Petersburg","displayName":null,"defaultChannelMaps":[{"businessId":2,"channelMapId":104},{"businessId":2,"channelMapId":101},{"businessId":2,"channelMapId":103},{"businessId":2,"channelMapId":102},{"businessId":2,"channelMapId":100}],"timeZone":"Unknown","startDate":null,"endDate":null},{"id":602,"businessIds":[1,2],"status":"Disabled","name":"Chicago","displayName":null,"defaultChannelMaps":[{"businessId":2,"channelMapId":6020001}],"timeZone":"America/Chicago","startDate":"2013-01-01T00:00:00.000Z","endDate":null},{"id":753,"businessIds":[1,2],"status":"Disabled","name":"Phoenix","displayName":null,"defaultChannelMaps":[{"businessId":2,"channelMapId":7530001}],"timeZone":"America/Phoenix","startDate":"2013-01-01T00:00:00.000Z","endDate":null},{"id":803,"businessIds":[1,2],"status":"Disabled","name":"Los Angeles","displayName":null,"defaultChannelMaps":[{"businessId":2,"channelMapId":8030001}],"timeZone":"America/Los_Angeles","startDate":"2013-01-01T00 :00:00.000Z","endDate":null},{"id":807,"businessIds":[1,2],"status":"Active","name":"San Francisco -  Oakland - San Jose","displayName":null,"defaultChannelMaps":[{"businessId":2,"channelMapId":2},{"businessId":2,"channelMapId":3},{"businessId":2,"channelMapId":8070001},{"businessId":2,"channelMapId":10000001}],"timeZone":"America/Los_Angeles","startDate":"2013-01-01T00:00:00.000Z","endDate":null},{"id":820,"businessIds":[1,2],"status":"Disabled","name":"Portland, OR","displayName":null,"defaultChannelMaps":[{"businessId":2,"channelMapId":8200001}],"timeZone":"America/Los_Angeles","startDate":"2013-01-01T00 :00:00.000Z","endDate":null}];

    $scope.product = products;
    $scope.brands = brands;
});
