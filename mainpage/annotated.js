function(
        a, // callback function
        b  // placeholder for key stack
){
        document.onkeyup = function(e){
                /88@@7979fe$/.test( // check if the latest codes in ascii form are ↑ ↑ ↓ ↓ ← → ← → B A
			b += eval('"\\x'+(e||self.event).keyCode+'"') // turn to ascii code and push it into the stack
		) && a() // callback if pressed Konami Code
        }
}
