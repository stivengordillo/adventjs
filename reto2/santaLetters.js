const letter = 'bici coche balón _playstation bici coche peluche';
function listGifts(letter){
    const bag = {}
    const ver = letter
    .trim()
    .replace(/\s+/g, " ")
    .split(" ")
    .map( gif =>{
       if(gif.startsWith('_')){
       }else{
            bag[gif] ??= 0;
		    bag[gif] += 1;
       }
    })
    return  bag;
    ;
}
listGifts(letter);