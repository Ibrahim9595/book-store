# Project Philosophy

I have chosen to go for the functional programming paradigm,
working with the books as a data stream that is being passed around through handlers and the handlers returns new book state this make me feel more safe that the book is not being mutated which eliminate lots of bugs.

# Project structure

The project is structured into 

1. Core: which contains the main app that handles the options and map them to the proper handlers.

2. Modules: which contains 
    1. Handlers that are actions that has unified contract takes the old state and operate on it and returns the new one it doesn't have to modify the state.

    2. Schemas that are being used by handlers to handle cli inputs buffering and validation by using [prompt](https://github.com/flatiron/prompt).


4. Utils: which contains
    1. Constants values.

    2. dbUtils: to handle read and write to the db file.

    3. readInput utility function to abstract prompt specific details.

5. Contracts: contains the global interfaces and types that are being used through out the application

# Run the project
## Option 1 (normal node setup)
1. Install [nodejs](https://nodejs.org/en/download/) version 14

2. run ```npm install``` to install the modules

3. run ```npm start``` to start the app

## Option 2 (Docker)
1. Run ```docker build . -t book-store``` to build the image

2. Run ```docker run -it book-store sh```  to attach a shell (you can also run docker exec -it <volume name> sh to open with stored data)

3. In the attached shell run ```npm start```