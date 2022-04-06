const fs = require("fs");

console.log(
  fs
    .readdirSync("./vectors")
    .slice(99)
    .map((filepath) => {
      const iso = filepath.split(".")[0];
      return `${iso}: { name: 'Germany', countryCode: "${iso}"}`;
    })
);
