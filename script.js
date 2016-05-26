// should be undefined
var names =   ["john", "mary", "Hadi", "james",
           "Hossein", "arthur", "joe", "jim"];
var helloSpeaker=function(name){
	console.log("hello "+name);
}
var byeSpeaker = function(name){
	console.log("bye "+name);
}
for(var name  in names)
	if(names[name][0]=='j'){
		byeSpeaker(names[name]);
	}
	else
		helloSpeaker(names[name]);

// }

