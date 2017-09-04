
let accountController = (() => {
    function getRegisterPage(ctx) {
        ctx.loadPartials({
            header: './templates/header.hbs',
            footer: './templates/footer.hbs'
        }).then(function()  {
            ctx.isAdmin = true; //FOR TESTNG
            ctx.isLoggedIn = false;
            this.partial('./templates/register.hbs');
        })
    }

    function getLoginPage(ctx) {
        ctx.loadPartials({
            header: './templates/header.hbs',
            footer: './templates/footer.hbs'
        }).then(function()  {

            this.partial('./templates/login.hbs');
        })
    }

    function getLoggedIn(ctx) {
        let username=ctx.params.username;
        let password=ctx.params.password;
        authenticator.login(username,password)
            .then(function (userInfo) {
                authenticator.saveSession(userInfo);
                homeController.getHomePage(ctx);

            }).catch(authenticator.handleError);
    }

    return {
        getRegisterPage,
        getLoginPage,
        getLoggedIn


    }
})();

