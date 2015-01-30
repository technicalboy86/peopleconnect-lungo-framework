var googleapi = {
    setToken: function(data) {
        //Cache the token
        localStorage.access_token = data.access_token;
        //Cache the refresh token, if there is one
        localStorage.refresh_token = data.refresh_token || localStorage.refresh_token;
        //Figure out when the token will expire by using the current
        //time, plus the valid time (in seconds), minus a 1 minute buffer
        var expiresAt = new Date().getTime() + parseInt(data.expires_in, 10) * 1000 - 60000;
        localStorage.expires_at = expiresAt;
    },
    authorize: function(options) {
        var deferred = $.Deferred();

        //Build the OAuth consent page URL
        var authUrl = 'https://accounts.google.com/o/oauth2/auth?' + $.param({
            client_id: options.client_id,
            redirect_uri: options.redirect_uri,
            response_type: 'code',
            scope: options.scope
        });

        //Open the OAuth consent page in the InAppBrowser
        var authWindow = window.open(authUrl, '_blank', 'location=no,toolbar=no');
        // window.plugins.childBrowser.showWebPage(authUrl)
        //The recommendation is to use the redirect_uri "urn:ietf:wg:oauth:2.0:oob"
        //which sets the authorization code in the browser's title. However, we can't
        //access the title of the InAppBrowser.
        //
        //Instead, we pass a bogus redirect_uri of "http://localhost", which means the
        //authorization code will get set in the url. We can access the url in the
        //loadstart and loadstop events. So if we bind the loadstart event, we can
        //find the authorization code and close the InAppBrowser after the user
        // window.plugins.childBrowser.onLocationChange = function(loc){
        //has granted us access to their data.
        $(authWindow).on('loadstart', function(e) {
            var url = e.originalEvent.url;
            var ind=url.indexOf('code');

            var code = /\?code=(.+)$/.exec(url);
            var error = /\?error=(.+)$/.exec(url);
            console.log('url---->'+url)
            console.log('========>'+code);
            if (code || error) {
                //Always close the browser when match is found
                authWindow.close();
            }

            if (code) {
                console.log('====code1====>'+code[1]);
                //Exchange the authorization code for an access token
                $.post('https://accounts.google.com/o/oauth2/token', {
                    code: code[1],
                    client_id: options.client_id,
                    client_secret: options.client_secret,
                    redirect_uri: options.redirect_uri,
                    grant_type: 'authorization_code'
                }).done(function(data) {
                    googleapi.setToken(data);
                    deferred.resolve(data);
                }).fail(function(response) {
                    deferred.reject(response.responseJSON);
                });
            } else if (error) {
                //The user denied access to the app
                deferred.reject({
                    error: error[1]
                });
            }
        });
        //               }
        return deferred.promise();
    },
    getToken: function(options) {
        var deferred = $.Deferred();

        if (new Date().getTime() < localStorage.expires_at) {
            deferred.resolve({
                access_token: localStorage.access_token
            });
        } else if (localStorage.refresh_token) {
            $.post('https://accounts.google.com/o/oauth2/token', {
                refresh_token: localStorage.refresh_token,
                client_id: options.client_id,
                client_secret: options.client_secret,
                grant_type: 'refresh_token'
            }).done(function(data) {
                googleapi.setToken(data);
                deferred.resolve(data);
            }).fail(function(response) {
                deferred.reject(response.responseJSON);
            });
        } else {
            deferred.reject();
        }

        return deferred.promise();
    },
    userInfo: function(options) {
        return $.getJSON('https://www.googleapis.com/oauth2/v2/userinfo', options);
    }
};

var gapp = {
    client_id: '396113708779-i4cp69l8h0b6gm3fqfj7acm6khlsfv0b.apps.googleusercontent.com',
    client_secret: 'ETvtpjeDbMCqsXEMnUmgcF11',
    redirect_uri: 'com.googleusercontent.apps.396113708779-i4cp69l8h0b6gm3fqfj7acm6khlsfv0b:/oauth2callback',
    scope: 'https://www.googleapis.com/auth/userinfo.profile',

    init: function() {


        //Check if we have a valid token
        //cached or if we can get a new
        //one using a refresh token.
        googleapi.getToken({
            client_id: this.client_id,
            client_secret: this.client_secret
        }).done(function() {
            //Show the greet view if we get a valid token
            gapp.showGreetView();
        }).fail(function() {
            //Show the login view if we have no valid token
            gapp.showLoginView();
        });
    },
    showLoginView: function() {

    },
    showGreetView: function() {


        //Get the token, either from the cache
        //or by using the refresh token.
        googleapi.getToken({
            client_id: this.client_id,
            client_secret: this.client_secret
        }).then(function(data) {
            //Pass the token to the API call and return a new promise object
            return googleapi.userInfo({ access_token: data.access_token });
        }).done(function(user) {
            googleapi.user=user;
            var s =JSON.stringify(user);
            console.log(s);

        }).fail(function() {
            //If getting the token fails, or the token has been
            //revoked, show the login view.
            gapp.showLoginView();
        });
    },
    onLoginButtonClick: function() {
        //Show the consent page
        googleapi.authorize({
            client_id: this.client_id,
            client_secret: this.client_secret,
            redirect_uri: this.redirect_uri,
            scope: this.scope
        }).done(function() {
            //Show the greet view if access is granted
            gapp.showGreetView();
        }).fail(function(data) {
            //Show an error message if access was denied

        });
    }
};
function googleLogin(){

    gapp.init();
    googleapi.authorize({
        client_id: '396113708779-i4cp69l8h0b6gm3fqfj7acm6khlsfv0b.apps.googleusercontent.com',
        client_secret: 'ETvtpjeDbMCqsXEMnUmgcF11',
        redirect_uri: "com.googleusercontent.apps.396113708779-i4cp69l8h0b6gm3fqfj7acm6khlsfv0b:/oauth2callback",
        scope: 'https://www.googleapis.com/auth/userinfo.profile'
    }).done(function() {
        alert("login succesfull... and user data is");
        alert(JSON.stringify(googleapi.userInfo()));
        alert(JSON.stringify(googleapi.user));
        //Show the greet view if access is granted

        app.showGreetView();
    }).fail(function(data) {
        //Show an error message if access was denied
        console.log("error");
    });
}
$(document).on('deviceready', function() {


});
