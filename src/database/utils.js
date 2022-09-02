const fs = require('fs');
module.exports.saveToDatabase = (DB) => {
    fs.writeFileSync('./src/database/db.json',JSON.stringify(DB,null,2),{
        encoding:'utf-8',
    } )
}