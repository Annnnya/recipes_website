# Kitchen Chronicles

An online recipe book app. It provides users with different options to search for dishes, save them and discover recipe steps and detailed info.

To run this project as a ReactJS project, simply run:

```shell
npm install
npm install @react-oauth/google
npm start
```
To run web app (Tauri), run this:
```shell
npm install --save-dev @tauri-apps/cli
```
...next, add this to your package.json file:

```
"scripts": {
  "tauri": "tauri",
  "dev": "nodemon server.js",
}
```
...next, run the web app:

```
npm run tauri dev
```
