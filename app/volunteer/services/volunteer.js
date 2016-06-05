(function(){
    'use strict';
    
    var serviceId='volunteerService';
    
    var app=angular.module('sampleApp');
    app.service(serviceId,volunteerService);
    
    function volunteerService(){
        var service={
            saveVolunteer:saveVolunteer
        }
        
        return service;
        function saveVolunteer(volunteer,saveSuccess)
        {
            console.log(volunteer);
            saveSuccess();
        }
    }
})();