# Node.js Express API with TypeScript 4

> Movies API Services

## Description
Api for create & update Moview data using Node + Express + Typescript + Mongodb

### Project Introduction
- suppot ES6/ES7 features
- using tslint followed [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

## Features
##### Authentication:
- jwt authentication
##### Session Storage:
- MongoDB
##### Integration testing
- mocha
- chai
- supertest

## Requirements

- node >= 14
- npm >= 6
- mongodb >= 4.0
- typescript >= 4.0

## Installation

```
.
├── LICENSE
├── README.md
├── nodemon.json
├── package.json
├── src
│   ├── components
│   │   ├── Auth
│   │   │   ├── index.ts
│   │   │   ├── interface.ts
│   │   │   ├── service.ts
│   │   │   └── validation.ts
│   │   ├── Movie
│   │   │   ├── index.ts
│   │   │   ├── interface.ts
│   │   │   ├── model.ts
│   │   │   ├── service.ts
│   │   │   └── validation.ts
│   │   ├── User
│   │   │   ├── index.ts
│   │   │   ├── interface.ts
│   │   │   ├── model.ts
│   │   │   ├── service.ts
│   │   │   └── validation.ts
│   │   ├── index.ts
│   │   └── validation.ts
│   ├── config
│   │   ├── connection
│   │   │   └── connection.ts
│   │   ├── env
│   │   │   └── index.ts
│   │   ├── error
│   │   │   ├── index.ts
│   │   │   └── sendHttpError.ts
│   │   ├── middleware
│   │   │   ├── middleware.ts
│   │   │   └── passport.ts
│   │   └── server
│   │       ├── ServerInterface.ts
│   │       ├── index.ts
│   │       ├── server.ts
│   │       └── serverHandlers.ts
│   └── routes
│       ├── AuthRouter.ts
│       ├── MovieRouter.ts
│       └── index.ts
├── swaggerDef.js
├── tsconfig.json
└── .eslintrc.json
```
## Running the API
### Development
To start the application in development mode, run:

```bash
npm install -g nodemon
npm install -g ts-node
npm install -g typescript
npm install
```

Start the application in dev env:
```
nodemon

pm2 start ./src/index.ts -i 2 --no-daemon

```
Postman collection
```
https://api.postman.com/collections/17421413-9f230ce9-123a-404e-94db-f2a574ea6e75?access_key=PMAT-01HEPTHA87MAWBBG0V86Q377YM
```

Express server listening on http://localhost:3000/, in development mode
The developer mode will watch your changes then will transpile the TypeScript code and re-run the node application automatically.

### Testing
To run integration tests:
```bash
npm test
```

## Set up environment
In root folder you can find `.env`. You can use this config or change it for your purposes.
If you want to add some new variables, you also need to add them to interface and config object (Look `src/config/index.ts`)


Swagger documentation will be available on route:
```bash
http://localhost:3000/docs
```

