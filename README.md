# KOA2 TypeScript Starter

[![Build Status](https://travis-ci.org/ddimaria/koa-typescript-starter.svg?branch=develop)](https://travis-ci.org/ddimaria/koa-typescript-starter)
[![Coverage Status](https://coveralls.io/repos/github/ddimaria/koa-typescript-starter/badge.svg?branch=develop)](https://coveralls.io/github/ddimaria/koa-typescript-starter?branch=develop)

A NodeJS server built with the KOA2 framework using TypeScript.

Technologies Used:

* [KOA2](http://koajs.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [Travis CLI](https://travis-ci.org/)
* [Coveralls](https://coveralls.io/)
* [Jasmine](https://jasmine.github.io/)
* [Chai](http://www.chaijs.com/)
* [Istanbul/NYC](https://github.com/istanbuljs/nyc)
* [Lodash](https://lodash.com/)
* [Nodemon](https://nodemon.io/)
* [Docker](https://www.docker.com/)
* [Swagger](https://swagger.io/)
* [Bunyahn](https://github.com/trentm/node-bunyan)
* [Koa Bunyan Logger](https://github.com/koajs/bunyan-logger/)

## Prerequisites

* Node.js (8+): recommend using [nvm](https://github.com/creationix/nvm)
* Docker (if building a docker image) https://www.docker.com/docker-mac

## Installation

First, clone this repo and `cd` into the main directory. Then:

```shell
npm install
```

## Development

During development, the `/app` folder is being watched for changes.

All changes invoke the TypeScript compiler, which restarts the app upon completion.

```shell
npm run watch
```

## Build the Server

To compile the TypeScript code and place into the `/dist` folder:

```shell
npm build
```

## Code Linter

A TypeScript linter has been added to keep code consistent among developers.

```shell
npm run lint
```

To autofix linting errors (not all errors are auto-fixable):

```shell
npm run fix
```

## Tests and Coverage

The test coverage percentage should be 90% or greater for any submitted PRs.

For TDD, invoke testing by:

```shell
npm test
```

For an html and text coverage report (html located in the `/coverage` folder):

```shell
npm run coverage
```

## Docker

To build a container using the `dockerfile`:

```shell
npm run image:build -- --no-cache
```

---

## API

For a swagger version of this documention, see http://localhost:3000/swagger (requires this server to be running).
