/*

Find the Symmetric DifferencePassed

The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

*/



const symDiff = (set1_, set2_) =>{
  let set1 = new Set(set1_);
  let set2 = new Set(set2_);

  for(let item of set1){
    if(! set2.has(item)){
      set2.add(item);
    }else{
      set2.delete(item);
    }
  }
  return [...set2];
}

function sym(...args) {
  let resultSet = [];
  let byTwo = [];

  for(let i=0; i<args.length; i++){
    if (i===0){byTwo = [args[i]]}
    resultSet = symDiff(byTwo[0], args[i+1]); 
    //console.log(resultSet);
    byTwo = [];
    byTwo.push(resultSet);
    //console.log(byTwo);
  }
  resultSet.sort();
  return resultSet;
}

// console.log(symDiff(set1, set2));

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));
// [1, 2, 4, 5, 6, 7, 8, 9]
