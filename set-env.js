const fs = require('fs');
// Configure Angular `environment.ts` file path
const targetPath = `./src/environments/environment.${process.env.ENVIRONMENT}.ts`;
// `environment.ts` file structure
const envConfigFile = `export const environment = {
   production: '${process.env.PRODUCTION}',
   apiKey: '${process.env.APIKEY}',
};
`;
console.log('The file `environment.ts` will be written with the following content: \n');
console.log(envConfigFile);
fs.writeFile(targetPath, envConfigFile, (err) => {
  if (err) {
    throw console.error(err);
  } else {
    console.log(`Angular environment.ts file generated correctly at ${targetPath} \n`);
  }
});
