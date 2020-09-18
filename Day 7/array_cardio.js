 // ## Array Cardio Day 2
                            // Learnt: .some(), .every(), .find(), [...spreads]
 const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // 1. Some and Every Checks:
  // Array.prototype.some() // is at least one person 19?
                                                    // "some"
//   const isAdult = people.some(function(person) {                     
//     const currentYear = (new Date()).getFullYear();
//     if(currentYear - person.year >= 19) {
//       return true;
//     }
//   });
                                // modified- arraow function
  const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);

  console.log({isAdult});


//  2. Array.prototype.every()               // is everyone 19?
                                                                        // "every"
    // const allAdults = people.every(function(person) {
    //     const currentYear = (new Date()).getFullYear();
    //     if(currentYear - person.year >= 19) {
    //         return true
    //     }
    // });
    // console.log({allAdults});
                                                // modified- arrow function
  const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
  console.log({allAdults});

// 3. Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
    // const comment = comments.find(function(comment) {
    //     if(comment.id === 823423) {
    //         return true;
    //     } 
    // });
    // console.log({comment});
                                        
  const comment = comments.find(comment => comment.id === 823423);
  console.log(comment);


// 4. Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
//     const index = comments.findIndex(function(index) {
//     if(index.id === 823423) {
//         return true;
//     }
// });
// console.log(index);
//  comments.splice(index, 1);

  const index = comments.findIndex(comment => comment.id === 823423);
  console.log(index);
//   comments.splice(index, 1);
                                
                    // Used Redux: spread Operators, basically create a new array of updated array and then, store them to delete!!
                    // mostly used!, Get used to it!!
  const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
  ];
