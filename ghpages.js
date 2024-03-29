const fs = require("fs");
const ghpages = require("gh-pages");
const { exec } = require("child_process");

exec("npm run build", (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    // return;
  }
  console.log(`stdout: ${stdout}`);

  readWriteSync();

  ghpages.publish("build", function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Success");
    }
  });
});
function readWriteSync() {
  try {
    let data = fs.readFileSync("build/index.html", "utf-8");

    let newValue = data.replace(/="\//gm, '="');

    fs.writeFileSync("build/index.html", newValue, "utf-8");

    console.log("Updated index.html");
  } catch (e) {
    console.log(e);
  }
}
