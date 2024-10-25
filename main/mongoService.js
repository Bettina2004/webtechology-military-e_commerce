const { MongoClient } = require('mongodb');

// Replace the placeholders with your actual connection details
const url = 'mongodb+srv://apiyush385:Apiyush00%40@kalashcollection.znnznzs.mongodb.net/?retryWrites=true&w=majority&appName=kalashcollection';
const dbName = 'kalashcollection';
const collectionName = 'users';

module.exports = {
  storeFormData: (formData) => {
    return new Promise((resolve, reject) => {
      MongoClient.connect(url, function(err, client) {
        if (err) {
          reject(err);
          return;
        }

        const db = client.db(dbName);

        db.collection(collectionName).insertOne(formData, function(err, result) {
          if (err) {
            reject(err);
            return;
          }
          console.log('Form data stored in MongoDB.');
          client.close();
          resolve();
        });
      });
    });
  }
};
