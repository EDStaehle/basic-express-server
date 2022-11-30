# LAB - Class 02

## Project:Server basic-express-server

### Author: Elias Staehle

### Problem Domain

Create a web server using CI and CD and get used to the general process of building and deploying servers, and prepping your work for grading

### Links and Resources

- [ci/cd](https://github.com/EDStaehle/server-deployment-practice/actions/runs/3569908073) (GitHub Actions)
- [prod development](https://four01d49-server-prod.onrender.com/)
- [dev development](https://four01d49-server-dev.onrender.com/)

### Setup

#### `.env` requirements (where applicable)

see `.env.sample`
i.e.

- `PORT` - Port Number
- `DATABASE_URL` - URL to the running Postgres instance/db

#### How to initialize/run your application (where applicable)

- nodemon

#### Features / Routes

- Feature One: deploy to dev
- GET : `` - specific route to hit
- GET : `/bad` -  specific route to hit
- Feature One: deploy to prod
- GET : `/hello` - specific route to hit

#### Tests

- How do you run tests?
- Any tests of note?
- handles root path
- handles invalid requests
- handles errors
- Describe any tests that you did not complete, skipped, etc

#### UML

[UML](./assets/lab-01.png)
