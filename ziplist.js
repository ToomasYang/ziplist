const listA = [0, 1, 2, 3];
const listB = ['a', 'b', 'c', 'd'];

function zipList(list1, list2) {
  const newList = [];
  for (let i = 0; i < list1.length; i++) {
    newList[2 * i] = list1[i];
    newList[2 * i + 1] = list2[i];
  }
  return newList;
}
function zipListTheSimpleWay(list1, list2) {
  return _.reduce(_.zip(list1, list2), (A, B) => A.concat(B));
}
console.log(zipList(listA, listB));
console.log(zipListTheSimpleWay(listA, listB));
