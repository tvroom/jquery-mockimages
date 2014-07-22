
(function($) {

    $.fn.mockimages = function() {

	console.log(arguments);

	var settings = {
		default_width: 250,
		default_height: 250,
		provider: "lorempixel"
	};

	var options = arguments[0] || {};


        var settings = $.extend({
                default_width  : '200',
                default_height : '200',
		provider       : 'lorempixel',
        }, options );

        return this.each( function() {
	    var width  = $(this).attr('width') || settings.default_width;
	    var height = $(this).attr('height') || settings.default_height;
	    var num = Math.floor(Math.random() * 999) + 1;

	    var services = {
		'lorempixel' : { url: 'http://lorempixel.com/' + width + "/" + height + "?" + num, 	type: 'images' },
		'lorempixel-animals' : { url: 'http://lorempixel.com/' + width + "/" + height + "/animals?" + num, 	type: 'animals' },
		'lorempixel-technics' : { url: 'http://lorempixel.com/' + width + "/" + height + "/technics?" + num, 	type: 'technology' },
		'placehold'  : { url: 'http://placehold.it/' + width + "x" + height, 			type: 'block' },
		'placesheen' : { url: 'http://placesheen.com/' + width + "/" + height + "?" + num, 	type: 'celeb' },
		'pipsum'     : { url: 'http://pipsum.com/' + width + "x" + height + ".jpg" + "?" + num, type: 'images' },
		'placeskull' : { url: 'http://placeskull.com/' + width + "/" + height + "?" + num, 	type: 'misc' },
		'placeape'   : { url: 'http://placeape.com/' + width + "/" + height + "?" + num, 	type: 'animals'}, 
		'placekitten': { url: 'http://placekitten.com/' + width + "/" + height + "?" + num, 	type: 'animals'},
		'placebear'  : { url: 'http://placebear.com/' + width + "/" + height + "?" + num, 	type: 'animals'},
		'fillmurray' : { url: 'http://www.fillmurray.com/' + width + "/" + height + "?" + num,  type: 'celeb' },
		'placecage'  : { url: 'http://placecage.com/' + width + "/" + height + "?" + num, 	type: 'celeb'},
		'nicenicejpg': { url: 'http://www.nicenicejpg.com/' + width + "/" + height + "?" + num,  type:'celeb' },
		'dummyimage': { url: 'http://dummyimage.com/' + width + "x" + height + "?" + num,  type:'block' },
	    };

	    var selected_service = settings.provider;
	    if(settings.type) {
		var elig_services = [];
		for(s in services) {
			if(services[s].type == settings.type || settings.type == 'all' || settings.type == 'random') {
      				elig_services.push(s);
   			}
		}
		selected_service = elig_services[Math.floor(Math.random()*elig_services.length)];    		
	    }
	    var src = services[selected_service].url;


            $(this).attr('src', src);
        });

    }

}(jQuery));
