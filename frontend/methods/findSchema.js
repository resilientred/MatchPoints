export const findSchemata = (numPlayers, rangeOfPlayers = [6, 5, 4]) => {
  if (numPlayers < 0) return null;
  if (numPlayers === 0) return [[]];
  let possibilities = [],
      recursions = [];
  rangeOfPlayers.forEach((range, i)=>{
    recursions.push([range, findSchemata(numPlayers - range, rangeOfPlayers.slice(i))]);
  })

  if (recursions.every(result => (result[1] === false))) return null;

  recursions.forEach((test) => {
    if (test[1]){
      possibilities = possibilities.concat(test[1].map( 
        result => [test[0]].concat(result)
      ));  
    }
  })

  return possibilities;
}