const students = [
  {
    id: 0,
    name: 'Stephanie Cooper',
    age: 41,
    course: 'Bootcamp',
    location: 'New Orleans, LA'
  },
  {
    id: 1,
    name: 'Bethany Joseph',
    age: 36,
    course: 'Bootcamp',
    location: 'Atlanta, GA'
  },
  {
    id: 2,
    name: 'Nathan Coen',
    age: 35,
    course: 'Precourse',
    location: 'New Orleans, LA'
  },
  {
    id: 3,
    name: 'Bessie Mason',
    age: 45,
    course: 'Precourse',
    location: 'Atlanta, GA'
  }
];

/*
Use the native reduce method to get the number of students who
attend Precourse and live in Atlanta.
*/

let precouseAtlanters = students.reduce((acc, student) => {
  if (student.course === 'Precourse' && student.location === 'Atlanta, GA'){
    acc += 1;
  }
  return acc;
});


/*
Use the native reduce method to return an array of the names of
the students who attend Bootcamp.
*/

let bootcampers = students.reduce(function(acc, student){
  if (student.course === 'Bootcamp'){
    acc.push(student.name);
  }
  return acc;
}, []);


/*
Use the native reduce method to iterate over the students array. 
At each iteration, use the current student's `id` to access the corresponding
index in the student's name and add to an output string. For instance, if the
student's `id` is zero, you should access the zero index's of the student's name
to add to the output string.

example output => 'Sets'
*/

let string = students.reduce(function(acc, student){
  acc += student.name[student.id];
  return acc;
}, "")

/*
Create a function called findStudent that takes in two paremeters -
`array` & `student`. `array` represents an array of studnent objects;
`student` represents a string of a student's name. This function should
use recursion to iterate through the array and return an an array with
the student's name. If no student is found matching the name, it should
return an array with null in it.

example output:

    findStudent(students, 'Bethany Joseph'); // => ['Bethany Joseph']
    findStudent(students, 'Kyle Bradley'); // => [null]
*/

function findStudent(array, student, output=[]){
  // base
  if (array.length === 0){
    output.push(null);
    return output;
  }
  if (array[0].name === student){
    output.push(array[0].name);
    return output;
  }
  // recursion
  return findStudent(array.slice(1), student, output);
}

/*
Create a function called `getNamesAndLocations` that takes in one 
parameter - `array` - which represents an array of student objects.
This function should use recursion to return an array of strings where
each string is a student's name followed by a dash and their location.

example output:

    getNamesAndLocations(students);
    // => [
           'Stephanie Cooper - 'New Orleans, LA', 
           'Bethany Joseph - Atlanta, GA',
           'Nathan Coen - New Orleans, LA',
           'Bessie Mason - Atlanta, GA'
          ]
*/

function getNamesAndLocations(array, output=[]){
  // base
  if (array.length === 0){
    return output;
  }
  // recursion
  output.push(`${array[0].name} - ${array[0].location}`);

  return getNamesAndLocations(array.slice(1), output);
}

