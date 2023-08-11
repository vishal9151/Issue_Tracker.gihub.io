const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://manglvisha:8lJptBSUBNWz8HlQ@issuetracker.jfxms5q.mongodb.net/IssueTracker?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to Database :: MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
