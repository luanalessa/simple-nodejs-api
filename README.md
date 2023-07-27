# <p align = "center"> Simple Node.js API</p>



#
<p align = "center">
   <img src="https://img.shields.io/badge/author-luanalessa-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/luanalessa/ts-backend-template?color=4dae71&style=flat-square" />
</p>

<p align="center">
   <img src="https://user-images.githubusercontent.com/72531277/179126346-e91e2f18-e287-406f-9f5c-d424339eef3f.png" width="200px"/>
</p>

## :computer:	 Technologies and concepts covered

- REST APIs
- Node.js
- MongoDB with Mongoose

***

## :rocket: Routes

```yml
POST /sing-up
    - headers: {}
    - body:{
        "nome": "Lorem ipsum",
        "email": "lorem@gmail.com",
        "senha": "loremipsum"
      }
```
    
```yml 
POST /login
    - headers: {}
    - body: {
      "email": "lorem@gmail.com",
      "senha": "loremipsum"
      }
```
***

# 🏁 Getting Started 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), so you need to install [Node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/) first, in order to test the project. Remember to launch you database locally and create a `.env` file with the environment variables listed on `.env.exemple`.

Then, clone the repository with:

```
git clone https://github.com/luanalessa/ts-backend-template.git
```

So, in the project directory, you can run:

```
npm install
```
to install the dependencies.

Then, run

```
npm start
```

to run the server.
