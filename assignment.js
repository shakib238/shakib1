
function feetToMile(feet){

    var mile = feet/5280;
    return mile;  
  }var results = feetToMile(52800);
  
  
   console.log(results);



function woodCalculator(chair, table, bed){

    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;}
    var woodResutl = woodCalculator(10, 2, 1);
     console.log(woodResutl);







  function brickCalculator(stored) { if (stored <= 10)
{
var feet1 = stored * 15;
var brick = feet1 * 1000;


}else if (stored <= 20){
    var feet2 = stored * 12;
    var brick = feet2 * 1000;
}
else {
    var feet3 = stored * 3;
    var brick = feet3 * 1000;

}

return brick;
}
   
var first = brickCalculator(4);
 console.log(first);











   function tinyFriend(name){

    let smallest = name[0];
    for(let i = 0; i < name.length; i++){
        let currentNames = name[i];
        if(currentNames.length < smallest.length){
            smallest = currentNames;
        }
    }
  return smallest;
   }
    let smallName = tinyFriend([ 'sama', 'shakib', 'sum']);
    console.log(smallName);

    



   