var ncp = require('ncp').ncp;

ncp.limit = 16;

// EVERY SITECORE SOLUTION IS DIFFERENT!
// Update and use only the functions needed below:

ncp(
    // This is an example for the JS files
    'public/js',
    // './../[UNCOMMENT AND PUT THE PATH THAT YOU WANT YOUR JS ASSSETS TO LIVE IN SITECORE]',
    function(err) {
        if (err) {
            return console.error(err);
        }
        console.log(
            '*** JavaScript successfully copied to the Sitecore solution!'
        );
    }
);

ncp(
    // This is an example for the CSS files
    'public/css',
    // './../[UNCOMMENT AND PUT THE PATH THAT YOU WANT YOUR CSS ASSSETS TO LIVE IN SITECORE]',
    function(err) {
        if (err) {
            return console.error(err);
        }
        console.log('*** CSS successfully copied to the Sitecore solution!');
    }
);

ncp(
    'public/fonts',
    // './../[UNCOMMENT AND PUT THE PATH THAT YOU WANT YOUR FONT ASSSETS TO LIVE IN SITECORE]',
    function(err) {
        if (err) {
            return console.error(err);
        }
        console.log('*** Fonts successfully copied to the Sitecore solution!');
    }
);
