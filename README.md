### Libraries Used
+ express ()
+ body-parser (to process the request body)
+ bcrypt (for password encryption)
+ cors (to serve cross origin requests)
+ dotenv (to manage environment variables)
+ gridfs-stream (for file upload)
+ multer (for file upload)
+ multer-gridfs-storage (to store file locally before uploading)
+ helmet (helps in securing express app by setting up various HTTP headers)
+ morgan (for logging)
+ jsonwebtoken (for authentication)
+ mongoose (for mongodb access)

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
