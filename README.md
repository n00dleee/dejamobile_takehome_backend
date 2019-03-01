# Welcome  !

Hi!
Welcome in this repository **dejamobile_takehome_backend**.  It contains Javascript code developped with **Visual Studio Code** with **NodeJS** regarging the **Dejamobile takehome** exercice. 

Due to its concurrent development with C# projects, this code has been **produced and tested in Windows environment**. It should run smoothly on most linux & macos, but I can't guarantee it as I did not verified it myself.

All lastest developments have been merged to **MASTER branch**, be sure to check out this one !

# Getting started

All **node modules should be included** in this repository, therefore you **should not have to re install** them. In case it looks like a node module **is missing of malfunctions**, feel free to run **npm install** command.

To **start** the server, simply run **npm start** in your favorite  shell. To ensure server is operationnal, feel free to use **npm test** command. It runs **very basic MochJS tests** to  **ensure backend's API is reachable** and returns expected status codes. Ideally I would have written down **complete unit tests** for this API, but a week worth of work is short, much shorter that I expected :')

Here we are, the **dejamobileBackend** is alive and running !

**IMPORTANT: To be able be operationnal, this code has to connect a local mongoDB database. It would have been perfect to set up Docker container to be able to provide you some simples Docker images to run, but... not this time. The mongoDB should run on default port (27017), should be named dejamobileDB and should contain a collection names users. When mongo database is set up and reachable on localhost:27017, you should be able to user the backend normally. **
