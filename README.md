Simple_chat
====

server
---
The server side is running with Typescript.

To install all the dependencies run the command:
```bash
yarn
```
or
```
npm install
```

To test the application, you can run the command

```
yarn dev
```

This application uses the package _dotenv_.
To override all the configuration, you can create a `.env` file and change the values.
The list of the configuration option are into the file `src/config.ts`

You do not need anything for the databases.
It will be register into the folder `databases` thanks to the package [NeDB](https://github.com/louischatriot/nedb)

client
---
The client side is running with VueJs.

To install all the dependencies run the command:
```bash
yarn
```
or
```
npm install
```

To test the application, you can run the command

```
yarn serve
```

You can also use the lovely `vue ui` if you prefer to use the browser interface.

This application uses the _material.io_ norm using the package [vue-mdc-adapter](https://stasson.github.io/vue-mdc-adapter/#/)
