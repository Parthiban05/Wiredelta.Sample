(function(){
    'use strict';
    
    var app=angular.module('sampleApp');
    var controllerId='contactCtrl';    
    app.controller(controllerId,['contactService',volunteer]);
    
    function volunteer(contactService){
        var vm=this;
        vm.submit=submit;
        vm.contact={};
        
        function submit(){
           return contactService.saveContact(vm.contact,saveSuccess);
        }
        
        function saveSuccess(){
            window.alert("Contact saved successfully, check the console");
              vm.contact={};
        }
    }
})();