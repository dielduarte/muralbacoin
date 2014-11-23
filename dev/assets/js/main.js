

var settings = {
	hashtags: "Bacon",
	client_id: "a2b4e3e7da704010a5d87416baec426e",
	images_to_fetch: 15,
	fetch_time: 10,
	display_time: 10
};



function Enqueue()
{
	$.ajax({
		type: 'GET',
		dataType: 'jsonp',
		url: "https://api.instagram.com/v1/tags/" + settings.hashtags + "/media/recent",
		data: {
			access_token: null,
			client_id: settings.client_id,
			count: settings.images_to_fetch
		},
		success: function(dados) {
			
			var fotos = dados.data;
			

			for (var i = 0; i < 15; i++) {

				var foto = fotos[i];

				var img  = foto.images.standard_resolution.url;
				var user = foto.user.username;
				var link = foto.link;

				var id     = "#"+ i;
				var	url    = '.url'+i; 

				
				$(id).attr('src', img);
				$(url).prop('href', link);
				$(url).attr('target','_blank');


			}
		}
	});
	
	setTimeout(function() {
		Enqueue();
	}, settings.fetch_time * 1000);
}


$(document).ready(function(){
	Enqueue();
});
