const { mongoose } = require('mongoose');

module.exports = () => {
  return mongoose.connect(
  'mongodb+srv://bheema:bheema_123@cluster0.ajvpj.mongodb.net/syngenta'  ,
  );
};
// 'mongodb+srv://bheema:bheema_123@cluster0.2da72.mongodb.net/?retryWrites=true&w=majority'
