const organizeInstructors = function(instructors) {
  courses = {
    Blockchain: [],
    Web: [],
    iOS: []
  }
  keys = Object.keys(courses);

  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].course === "Blockchain") {
      courses.Blockchain.push(instructors[i].name);
    }
    else if (instructors[i].course === "Web") {
      courses.Web.push(instructors[i].name);
    }
    else if (instructors[i].course === "iOS") {
      courses.iOS.push(instructors[i].name);
    }
  }
  for (let i = 0; i < keys.length; i++) {
    if (courses[keys[i]].length === 0) {
      delete courses[keys[i]];
    }
  }
  return courses;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));