Router.configure({
    layoutTemplate: 'pagina_home'
});

Router.map(function(){
//nesse this.route coloca o mesmo nome do template 
    this.route('jokes',{
//campo path vai o nome do arquivo .html
        path: '/feed',
        template: 'jokes'
    });
    this.route('login',{
        path: '/',
        template: 'login'
    });
});