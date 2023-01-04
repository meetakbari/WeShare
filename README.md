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

### Register User JSON Data:
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