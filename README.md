## :computer: Project description

This project consists in a simple api built with NodeJs with Express, using some concepts of DDD architecture.

It has just few functions, like user registration, authentication and a CRUD of products.

## :floppy_disk: Execution

To execute the project, first clone the repository

```bash
git clone https://github.com/Maykerh/myproducts-api.git
```

Then Install the dependencies

```bash
cd myproducts-api

yarn install
```

Next, you'll need a Postgre database, in this case we will be using <a href="https://www.docker.com/get-started" target="_blank" >
  Docker
</a>. Run the comand below to create a Postgre image

```bash
docker run --name mypostgre -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres
```

And start the container

```bash
docker start mypostgre
```

After that, you need to configure a .env file with your environment variables, use the .env.example file to fill the variables correctly

With the environment variables set, prepare the database with Sequelize

```bash
yarn sequelize db:migrate
```

And then, start the server

```bash
yarn dev
```

All done, the api should be working now.
