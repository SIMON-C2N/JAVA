// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  ENDPOINT_URL: 'http://localhost:8080/user/all-profiles',
  ENDPOINT_URL1:'http://localhost:8080/user/profile',
  validateLogin: 'http://localhost:8080/login/validateUser'
};
