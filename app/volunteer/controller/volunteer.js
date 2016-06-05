(function(){
    'use strict';
    
    var app=angular.module('sampleApp');
    var controllerId='volunteerCtrl';    
    app.controller(controllerId,['$scope','volunteerService',volunteer]);
    
    function volunteer($scope,volunteerService){
        var vm=this;
        vm.joinNow=joinNow;
        vm.volunteer={};
        
        function joinNow(){
           return volunteerService.saveVolunteer(vm.volunteer,saveSuccess);
        }
        
        function saveSuccess(){
            window.alert("Joined successfully, check the console");
             vm.volunteer={};
        }
    }
})();