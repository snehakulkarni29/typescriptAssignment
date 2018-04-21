$(document).ready(() => {
//youtube
   var id = 'VA770wpLX-Q';
   var url = 'https://www.youtube.com/watch?v=' + id;
   $.getJSON('https://noembed.com/embed',
    {format: 'json', url: url}, function(result){
	var c = new youtubeData(result);
	var theDiv = document.getElementById("youtube");
	var linebreak = document.createElement("br");
	var content = document.createTextNode("\nTitle:" + c.getTitle());
	theDiv.appendChild(content);
	theDiv.appendChild(linebreak);
	content = document.createTextNode("\nAddress:" +c.getAddress());
	theDiv.appendChild(content);
	theDiv.appendChild(linebreak);
	content = document.createTextNode("\nType:" +c.getType());
	theDiv.appendChild(content);
	theDiv.appendChild(linebreak);
	content = document.createTextNode("\nview:" +c.getviewcount());
	theDiv.appendChild(content);
	theDiv.appendChild(linebreak);
    });
    
//facebook
   var access = 'EAACEdEose0cBADCOfx5VFuPSPHDf55nA8r6oX3Kh85uanfT3SoEcrZB7ZC41O7cZB8XvhEOugexANVlXJvWsMw7MBXZAuUkfCFcwSnkcKIZCuqyG6WK0ZBZBZCvZCcHw4ytM9KjVawCZARZA6foEgHZBaTjsNFRMYqS3eZB7721l72Yo10dvwZCZBxSPP9uZAJv8LMA2AUFZBJiP6LuDNWwZDZD';
   var url = 'https://graph.facebook.com/me?fields=id,name,address,birthday,education,email,about&access_token=' + access;
   $.getJSON({format: 'json', url: url}, function(result){
	var c = new facebookData(result);
	var theDiv = document.getElementById("facebook");
	var linebreak = document.createElement("br");
	var content = document.createTextNode("\nid:" + c.getId());
	theDiv.appendChild(content);
	theDiv.appendChild(linebreak);
	content = document.createTextNode("\nName:" +c.getName());
	theDiv.appendChild(content);
	theDiv.appendChild(linebreak);
	content = document.createTextNode("\naddress:" +c.getaddress());
	theDiv.appendChild(content);
	theDiv.appendChild(linebreak);
	content = document.createTextNode("\nbirthday:" +c.getbirthday());
	theDiv.appendChild(content);
	theDiv.appendChild(linebreak);
	content = document.createTextNode("\neducation:" +c.geteducation());
	theDiv.appendChild(content);
	theDiv.appendChild(linebreak);
	content = document.createTextNode("\nemail:" +c.getemail());
	theDiv.appendChild(content);
	theDiv.appendChild(linebreak);
	content = document.createTextNode("\nabout:" +c.getabout());
	theDiv.appendChild(content);
	theDiv.appendChild(linebreak);
    });

}); // end document.ready function

