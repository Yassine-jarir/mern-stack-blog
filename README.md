# SSR

- is SEO important ?
- Need to keep the resource safe ?
- sensitive data to hide from client

1. Homepage.
2. category Page.
3. Single Post Page.
   fetch data

# CSR

- need user interacrion ?
- need hooks ?

1. Login
2. Add New Page

# prisma

- create database schema
- make CRUD operation
- can use with any database provider

# authentication

1. add user schema
2. signup controller
3. {token} in the login controller = token kayb9a m3a user bach n3arfo had luser howa l original
4. create the style login and signup frontend
5. send the token to client
6. save the {token,user} in localstroge and context api when LOGIN FRONTEND
7. check the navbar for display login or logout
8. protect routes API (authorization part)
9. add this 8. as a middlware

---

after 7.

# secret key for verication the token | The ID (or any other data you include) is part of the payload, not the header or the signature. When you decode the token on the server using the secret key, you can access the payload, and that's where you'll find the ID.

# status

- 400 for client errors (bad request, user already exists, weak password)
- 201 for successful resource creation (user signed up successfully)
- 500 for internal server error (if something unexpected happens during the process)

# upload image

- multer middleware to handle file uploads

# express

will be used to build our web server, all the necessary routes, and handling middleware.

# multer

is a middleware used to parse multipart form data, which includes files from the HTTP request body.

# cloudinary SDK

will provide us with easy-to-use APIs to upload parsed files to our Cloudinary account and do any media file manipulations as the need be.

# cors

cors module is also another middleware that would help us with CORS errors, and finally.

# dotenv

module will allow us to parse environment variables defined in a .env file.
