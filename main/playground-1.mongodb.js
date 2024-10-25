/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('kalashcollection');

// Define a variable to store the register form data.
const registerFormData = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  password: 'password123',
  // Add more fields as needed
};

// Insert the register form data into the users collection.
db.getCollection('users').insertOne(registerFormData);

// Print a message to the output window.
console.log('Register form data stored in MongoDB.');

// Run a find command to view all documents in the users collection.
const allUsers = db.getCollection('users').find().toArray();

// Print the result to the output window.
console.log(allUsers);
