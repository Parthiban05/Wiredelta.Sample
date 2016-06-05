(function()
{
    'use strict';
    
    var app = angular.module('sampleApp');
    app.config(['$routeProvider', routeConfigurator]);
    
    function routeConfigurator($routeProvider) {
        $routeProvider
       .when('/', {
                templateUrl : '/app/volunteer/view/volunteer.html',
                controller  : 'volunteerCtrl'
            })
        .when('/contact', {
                templateUrl : '/app/contact/view/contact.html',
                controller  : 'contactCtrl'
            })
        .otherwise({ redirectTo: '/' });
    }

})();