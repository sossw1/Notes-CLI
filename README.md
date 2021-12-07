# Notes-CLI

## Table of Contents

1. [About](#about)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)

## About

Notes-CLI is a tool for note-taking in the command line. Using the common module [fs](https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#file-system) from [Node.js](https://nodejs.org/en/), notes are stored in an output file `notes.json` in the root directory.

## Installation

Fork the GitHub repository [here](https://github.com/sossw1/Notes-CLI), then clone the forked version to your device.

Install all dependencies using npm:

```
npm install
```

To generate the JavaScript files needed to run the program, run the TypeScript compiler:

```
tsc
```

The generated files should appear in the `built/` directory.

## Usage

In command line, use `node built/app.js --help` to reference all available commands, or append the `--help` flag to any command to see usage info.

### Adding a Note

Parameters: title (string), body (string)

```
node built/app.js add --title="My First Note" --body="This is great!"
```

### Reading a Note

Parameters: title (string)

```
node built/app.js read --title="My First Note"
```

### Listing all Notes

Parameters: none

```
node built/app.js list
```

### Deleting a Note

Parameters: title (string)

```
node built/app.js delete --title="My First Note"
```

### Tip

Any command may be run with `npm start -- ` instead of `node built/app.js`, followed by any commands and parameters.

Ex:

```
npm start -- read --title="My First Note"
```

## License

See [MIT License](https://mit-license.org/)
