function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
return document.querySelector('#nested .target')
}
// Define a function `nestedTarget()` that pulls a `.target` out of `#nested` (`#` is used for IDs in selectors

function increaseRankBy(n){
  var ranks = document.querySelector('#app').querySelectorAll('ul.ranked-list li');

  for(let i = 0, l = ranks.length; i < l; i++){
   ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
  }
}
//Define a function `increaseRankBy(n)` that increases the ranks in all of the `.ranked-list`s by `n`.
//(You might need to make use of [`parseInt()`]

function deepestChild(){
  var deepestDivChild = document.querySelector('#grand-node div div div div');

  return deepestDivChild;
}

/*Define a function `deepestChild()` that pulls out the most deeply nested child
from `div#grand-node`. (Remember, you can iterate over elements and call
`querySelector()` and `querySelectorAll()` on them. This is challenging to
implement correctly, but not beyond your ability!)*/
