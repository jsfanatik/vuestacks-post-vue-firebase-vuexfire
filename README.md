# vuestacks-post-vue-vuex-firebase

![alt text](https://raw.githubusercontent.com/jsfanatik/vuestacks-post-vue-vuex-firebase/master/src/assets/vuestacks-post1.JPG)

![alt text](https://raw.githubusercontent.com/jsfanatik/vuestacks-post-vue-vuex-firebase/master/src/assets/vuestacks-post2.JPG)

### Overview

The VueStacks post manager demo utilizes general Vue.js, Vue-Router, Vuex, and Firebase CRUD functions to create, update, and delete posts.

### Addition Dependencies

This demo uses ```vue-textarea-autosize``` as a dependency. See the following for installation instructions: https://www.npmjs.com/package/vue-textarea-autosize

### Setting up Firebase

1) Set up new project in Firebase with Database and Storage enabled
2) Implement the following Firebase SDK scripts in main.js:
```
const app = initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
});

export const db = firebase.firestore();
```
Enjoy the demo! Submit an issue if you see anything that could be improved!

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


