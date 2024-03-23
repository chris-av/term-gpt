import path from 'path';
import { spawn } from 'child_process';


module.exports = function() {
  return new Promise((resolve, reject) => {
    const HOME = process.env.HOME;
    if (typeof HOME === "undefined") {
      reject("could not find home ... ");
      return;
    }

    const filepath = path.resolve(HOME, "Downloads/wallpaper-downloads/white-cat.jpg");
    const kitty = spawn("/usr/bin/kitten", [
      "icat",
      "--use-window-size", "150,150,1000,1000",
      filepath,
    ]);

    kitty.stdout.on("data", function(data) {
      console.log(data.toString());
      kitty.kill();
    });

    kitty.stderr.on("data", function(data) {
      console.log(data.toString());
      kitty.kill();
    });

    kitty.on("close", function() {
      resolve(true);
    });

  });
}

