const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const app = express();

const { mongoose } = require('./database.js')


//settings
app.set('port', process.env.PORT || 3000);



//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));


//routes
app.use('/api/employees', require('./routes/employee.routes'));
app.use('/api/shifts', require('./routes/shift.routes'));






app.listen(app.get('port'), function(){
    console.log("listening  on port ....", app.get('port'));
})