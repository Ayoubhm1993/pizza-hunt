const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 8000 ;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pizza-hunt', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.use(require('./routes'));
console.log(mongoose.connection.readyState);
app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
