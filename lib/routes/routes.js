Router.configure({
    layoutTemplate: 'pagina_home'
});

Router.map(function(){
//nesse this.route coloca o mesmo nome do template 
    this.route('jokes',{
//campo path vai o nome do arquivo .html
        path: '/feed',
        template: 'feed'
    });
    this.route('login',{
        path: '/',
        template: 'login'
    });
    this.route('formulario do cadastro de Caronas',{
        path: '/formCadastroCarona',
        template: 'formCadastroCarona'
    });
    this.route('Pagina com as caronas que interesse ou que foram ofertadas', {
		path: '/minhasCaronas',
		template: 'minhasCaronas'
	});
    this.route('signup', {
		path: '/signup',
		template: 'signup'
	});
});
