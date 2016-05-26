// should be undefined
var names =   ["john", "mary", "Hadi", "james",
           "Hossein", "arthur", "joe", "jim"]
for (var name in names) 
	if(names[name][0]=='j'){
		
	    console.log("Goodbye "+ names[name]);
	}
	else
		console.log("hello "+names[name]);

// if (x == undefined) {
//   console.log("x is undefined");
// }

// x = 5;
// if (x == undefined) {
//   console.log("x is undefined");
// }
// else {
//   console.log("x has been defined");
// }

