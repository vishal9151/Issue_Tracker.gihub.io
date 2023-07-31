const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://vishal:manglvisha@cluster0.wymnu9f.mongodb.net/issue_tracker')
  .then(() => {
    console.log('Connected to Database :: MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
