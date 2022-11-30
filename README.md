# LAB - Class 02

## Project:Server basic-express-server

### Author: Elias Staehle

### Problem Domain

Create a web server using CI and CD and get used to the general process of building and deploying servers, and prepping your work for grading

### Links and Resources

- [ci/cd](https://github.com/EDStaehle/basic-express-server/actions) (GitHub Actions)
- [prod development](https://basic-express-server-prod-rcp4.onrender.com/)

### Setup

#### `.env` requirements (where applicable)

see `.env.sample`


- `PORT` - Port Number


#### How to initialize/run your application (where applicable)

- nodemon

#### Features / Routes

- Feature One: deploy to dev
- GET : `` - specific route to hit
- GET : `/bad` -  specific route to hit
- Feature One: deploy to prod
- GET : `/hello` - specific route to hit
- GET : `/person` - specific route to hit

#### Tests

- npm test
-
- handles root path
- handles invalid requests
- handles errors
- handles validator to ensure name is present
- handles timestamp to ensure logger is present

#### UML

[UML](./src/assets/class-02-uml.png)
