const { app } = require('./app');

db.authenticate()
  .then(() => {
    console.log('Database authenticated');
  })
  .catch(err => console.log(err));

db.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch(err => console.log(err));

// Spin up server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});