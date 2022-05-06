const instructorWithLongestName = function(instructors) {
  let instructorLongest = {};
  let nameLength = 0;
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > nameLength) {
      instructorLongest = instructors[i];
      nameLength = instructors[i].name.length;
    }
  }
  return instructorLongest;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));