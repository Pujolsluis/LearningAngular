// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCnIHShcvPqpJBlSxv5D8nUR9E3KwJpqzc',
    authDomain: 'angular-fire-heroes.firebaseapp.com',
    databaseURL: 'https://angular-fire-heroes.firebaseio.com',
    projectId: 'angular-fire-heroes',
    storageBucket: 'angular-fire-heroes.appspot.com',
    messagingSenderId: '605290368490'
  }
};
