(function(){
    'use strict';
    
    var serviceId='contactService';
    
    var app=angular.module('sampleApp');
    app.service(serviceId,contactService);
    
    function contactService(){
        var service={
            saveContact:saveContact
        }
        
        return service;
        function saveContact(contact,saveSuccess)
        {
            console.log(contact);
            saveSuccess();
        }
    }
})();