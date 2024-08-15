// Libraries
const fs = require('fs');
const path = require('path');

/**
*   Recursively searches for all files in a directory
*/
function get_all_filenames(dir, file_list = []) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const file_path = path.join(dir, file);
        const stat = fs.statSync(file_path);

        if (stat.isDirectory()) {
            file_list = get_all_filenames(file_path, file_list);
        } else {
            file_list.push(file_path);
        }
    }

    return file_list;
}

module.exports = get_all_filenames;
