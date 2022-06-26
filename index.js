const rimraf = require("rimraf");
rimraf.promise = function(path, options) {
    return new Promise((resolve, reject) => {
        const callback = err => {
            if (err) {
                reject(err);
            }
            else {
                resolve();
            }
        };
        if (options) {
            rimraf(path, options, callback);
        }
        else {
            rimraf(path, callback);
        }
    });
};
module.exports = rimraf;