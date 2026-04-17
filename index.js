// Task 2, Step 5: Require datejs outside of the function
require('datejs');

/**

Task 2, Step 1: Create combineUsers function with rest arguments
*/
function combineUsers(...args) {
// Step 2: Initialize the Return Object
const combinedObject = {
 users: []
}; // Step 3: Loop through args to isolate each array
for (let i = 0; i < args.length; i++) {
 const currentArray = args[i];  // Step 4: Merge Arrays using the spread operator
 // We spread the current contents and the new array into a new array
 combinedObject.users = [...combinedObject.users, ...currentArray];
} // Step 5: Get today's date in M/d/yyyy format
// datejs allows us to use the .toString() method with custom formatting
combinedObject.merge_date = new Date().toString('M/d/yyyy'); // Step 7: Return object
return combinedObject;
}
// Export the function for the Jest test suite
module.exports = combineUsers;

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};

