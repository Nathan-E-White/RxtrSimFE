/* language=node.js */
/* path=scripts/build.js */
/* async import the fs module */

const fs = require('fs');

/* async import the path module */
const path = require('path');

/* async import the tsc module */
const tsc = require('typescript');
const pnpm = require('pnpm');


/* Define the path to the project root directory */
const projectRoot = path.resolve(__dirname, '..');

/* Define the paths to the project source and build directories */
// const sourceDir = path.resolve(projectRoot, 'src');
const buildDir = path.resolve(projectRoot, 'dist');

/* change the directory to the project root */
process.chdir(path.join(__dirname, '..'));

/* read the package.json file */
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const tsconfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));

/* use pnpm to install missing dependencies */
pnpm.install({dev: true, peer: true, optional: true, recursive: true});

/* use pnpm to update/update all dependencies */
pnpm.update();

/* Delete the destination directory, if it exists */
if (fs.existsSync(buildDir)) {
    fs.rmdirSync(buildDir, {recursive: true});
}

/* Create the destination directory */
fs.mkdirSync(buildDir);

/* Call the TypeScript compiler with the tsconfig.json file */
tsc.compile(tsconfig);

/* Copy the package.json file to the destination directory */
fs.copyFileSync(packageJson, path.join(buildDir, 'package.json'));

/* Launch chrome on the index.html file */
require('child_process').exec('start chrome ' + path.join(buildDir, 'index.html'));