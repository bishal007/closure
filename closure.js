function makeFunc(){
    let name = 'ABCD' ;
    function displayName(){
                     console.log(name);
   }
  return displayName;
}
let myFunc = makeFunc();
myFunc();