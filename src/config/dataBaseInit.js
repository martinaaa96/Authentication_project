const mongoose = require('mongoose');
const config = require('./index');

async function initDataBase(){
    mongoose.set('strictQuery', false);

    await mongoose.connect(congif.DB_URI);


}
module.exports = initDataBase;
