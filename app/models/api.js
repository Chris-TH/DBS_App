const mysql = require('mysql');

const ApiSchema = mysql.Schema{
    id: {
        type: Number,
        required: true
    },
    link : {
        type: String,
        required: true
    }
}