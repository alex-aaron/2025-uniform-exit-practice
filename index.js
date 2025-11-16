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
    name: 'Ben Mason',
    age: 45,
    course: 'Precourse',
    location: 'Atlanta, GA'
  }
];

/*
Use the native reduce method to get the number of students who
attend Precourse and live in Atlanta.
*/

let precouseAtlanters;



/*
Use the native reduce method to return an array of the names of
the students who attend Bootcamp.
*/

let bootcampers;

/*
Use the native reduce method to iterate over the students array. 
At each iteration, use the current student's `id` to access the corresponding
index in the student's name and add to an output string. For instance, if the
student's `id` is zero, you should access the zero index's of the student's name
to add to the output string.
*/

let string;

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

function findStudent(){

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

function getNamesAndLocations(){
  
}