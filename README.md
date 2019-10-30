# Vimeo Take Home Assessment for Summer Internship Application

Media application that uses **React.js** for the frontend and **Node.js** for the backend.

## Running the application 

Ensure you have **Node** and **NPM** installed.

### When you have a proper clone

In the root folder of the project (VimeoTakeHome) type `npm run setup` to run the setup script that installs the node modules in both folders

Once both installs have successfully finished, you must get both the frontend and backend running.
To get both the backend and frontend running, open two terminals with one being in the frontend directory and the other in the backend directory.
Type
`
npm start
`
 to start them respectively.


Since the backend uses the Vimeo API to get content from the on demand section, you must create an APP for the Vimeo API. After that, create a .env file in the root of the backend folder and have values for the following:
```
PORT
VIMEO_CLIENT_SECRET
VIMEO_ACCESS_TOKEN
VIMEO_CLIENT_ID
```
