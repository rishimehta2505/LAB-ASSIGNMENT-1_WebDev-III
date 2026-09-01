// fileManager.js
// A simple file manager using the fs module (Create, Read, Update, Delete)

const fs = require("fs");
const log = require("./modules/logger");

const fileName = "test.txt";

// 1. Create File
log("Creating File...");
fs.writeFile(fileName, "Hello Node.js", (err) => {
  if (err) {
    return log("Error creating file: " + err.message);
  }
  log("File Created");

  // 2. Read File
  log("Reading File");
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      return log("Error reading file: " + err.message);
    }
    log(data);

    // 3. Update File (append)
    fs.appendFile(fileName, "\nLearning FS Module", (err) => {
      if (err) {
        return log("Error updating file: " + err.message);
      }
      log("File Updated");

      // Read updated content
      fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
          return log("Error reading file: " + err.message);
        }
        log(data);

        // 4. Delete File
        fs.unlink(fileName, (err) => {
          if (err) {
            return log("Error deleting file: " + err.message);
          }
          log("File Deleted");
        });
      });
    });
  });
});
