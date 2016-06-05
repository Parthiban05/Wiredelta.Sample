(function(){
    'use strict';
    
    var controllerId='navbarCtrl';
    
    var app=angular.module('sampleApp');
    
    app.controller(controllerId,['$rootScope',navbarCtrl]);
    
    function navbarCtrl($rootScope){
        var vm=this;
         vm.routes=[];
        
        activate();
        
        function activate(){
            setRoutes();
        }
        
        function setRoutes(){
            vm.routes=[{
                url:'#/',
                urlName:'HOME',
                id:'home',
                 className:'',
                originalUrl:'/home'
            },
                  {
                url:'#/',
                urlName:'MD#6',
                id:'md6',
                       className:'',
                      originalUrl:'/md6'
            },
                  {
                url:'#/',
                urlName:'ABOUT MANUEL',
                id:'abt',
                       className:'',
                      originalUrl:'/abt'
            },
                  {
                url:'#/',
                urlName:'SHOP',
                id:'shop',
                       className:'',
                      originalUrl:'/shop'
            },
                  {
                url:'#/contact',
                urlName:'CONTACT',
                id:'contact',
                      className:'',
                      originalUrl:'/contact'
            },
                      {
                url:'#/',
                urlName:'VOLUNTEER',
                id:'volunteer',
                className:'active',
                          originalUrl:'/'
            }];
            
        }
        
        $rootScope.$on( "$routeChangeSuccess", function(event, next, current) {
               for(var index=0;index<vm.routes.length;index++)
                   {
                       if(vm.routes[index].originalUrl=== next.originalPath)
                           vm.routes[index].className='active';
                       else
                           vm.routes[index].className='';
                   }
   
});
    }
})();