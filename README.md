### Backend(Node) Libraries Used
+ express (node.js web-app framework to develope backend APIs efficiently)
+ body-parser (middleware for handling JSON, Raw, Text and URL encoded form data.)
+ bcrypt (for password encryption)
+ cors (to serve cross origin requests)
+ dotenv (to manage environment variables)
+ gridfs-stream (for file upload)
+ multer (middleware for handling multipart/form-data)
+ multer-gridfs-storage (to store file locally before uploading)
+ helmet (helps in securing express app by setting up various HTTP headers)
+ morgan (for logging)
+ jsonwebtoken (for authentication)
+ mongoose (for mongodb access)

### Frontend(React) Libraries Used
+ react-redux (for state management)
+ @reduxjs/toolkit (wrapper around redux, makes redux easy to use)
+ redux-persist (to store the states in localStorage)
+ react-dropzone (to handle file upload on frontend)
+ dotenv (to manage environment variables)
+ formik (for form handling)
+ yup (for validation)
+ react-router-dom@6 (for handling different react routes and pages)
+ Material-UI libraries: @mui/material, @emotion/react, @emotion/styled, @mui/icons-material

#### MongoDB database name to pass in MONGO_URL
+ weShareDB

### Register User Raw JSON Data:
{
    "firstName": "Yash",
    "lastName": "Patel",
    "email": "yashp@gmail.com",
    "password": "yash123",
    "picturePath": "",
    "friends": [],
    "location": "Ahmedabad",
    "occupation": "Student"
}

### To add test data from ./data/index.js to DB, edit server/index.js as follows:
+ Add this imports after end of all the imports
    import User from "./models/User.js";
    import Post from "./models/Post.js";
    import { users, posts } from './data/index.js';
+ Add this lines inside the promise after app.listen(port,); line
    User.insertMany(users);
    Post.insertMany(posts);
    console.log('Test data added to DB');
