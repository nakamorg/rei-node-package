# @nakamorg/rei-node-package

[![build Actions Status](https://github.com/nakamorg/rei-node-package/actions/workflows/build.yml/badge.svg)](https://github.com/nakamorg/rei-node-package/actions)  [![publish Actions Status](https://github.com/nakamorg/rei-node-package/actions/workflows/publish.yml/badge.svg)](https://github.com/nakamorg/rei-node-package/actions)

This is rei (example) node package, it's companion to the [Node Packages - Unit Tests and Github Actions](https://github.com/nakamorg/blogs/issues/2) blog issue. It is to demonstrate how to use and publish to github npm packages but these techniques can be used for other package registries with some changes.

## Install

```
$ npm install @nakamorg/rei-node-package
```

## Usage

```js
const rei = require("@nakamorg/rei-node-package");

rei();
//=> "You have succesfull installed and ran nakamorg's rei package"
```

# Publishing your own node(npm) packages

## Publishing/Testing from local
1. Create a personal github token with following permissions: `repo`, `write:packages`
1. Do `npm login` using your github username as username and personal access token as password.
    ```bash
    npm login --scope=@<SCOPE> --registry=https://npm.pkg.github.com 
    ```
    where `SCOPE` would be your github org name or username.
1. Create a new repo for your package `<package-name>`. It is recommended to have same name for repo and package. Make your repo private if you want to keep your package private.
1. Copy over all the files from here to your repo and edit files as necessary. You should, at least, update your `package.json` file with your package's info
1. publish your package (CI -- GH Actions should handle publishing, but you can test as follow)
    ```sh
    # run tests -- we are using jest
    npm test
    # update major, minor or patch version
    npm version major
    # publish it -- should automatically be done using GH action once you push to master
    npm publish
    ```

## Installing Packages
1. Login to github packages or add corresponding entries in your `.npmrc` file
1. `.npmrc` should include line(s) specifying github package URL(s) like:
    ```sh
    @nakamorg:registry=https://npm.pkg.github.com
    ```
1. npm install @nakamorg/rei-node-package # or your package.json file

## Some References
### nvm (node version manager)
You can use [nvm](https://github.com/nvm-sh/nvm) to install and manage multiple versions of node and npm. Install `nvm` using instruction from their github repo. Afterwards, installing and managing node and npm is as easy as this
```sh
nvm install 16.0.0  # Install a specific version number
nvm use 16.0        # Use the latest available 8.0.x release
nvm install node    # Install the latest available version
nvm use node        # Use the latest version
```

### Testing Framework - Jest
[jest](https://jestjs.io/) testing framework is used for this rei (example) package. And, we encourage you to use the same for your packages and libraries.
