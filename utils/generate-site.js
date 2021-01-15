const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve,reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if there's an error, reject the promise and send the error to the promise's `.catch()` method
            if (err) {
                reject(err);
                //return out of the function here to make sure the promise doesn't accidentally execute the resolve() function as well
                return;
            }

            //if everything went well, resolve the promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
    
};

const copyFile = () => {
    return new Promise((resolve,reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            //if error then reject promise and send error to promise's catch method
            if (err) {
                reject(err);
                return;
            }
            //if successful resolve the promise and send data to then method.
            resolve({
                ok: true,
                message: 'Style sheet copied successfully'
            });
        });
    });
};

module.exports = { writeFile, copyFile };