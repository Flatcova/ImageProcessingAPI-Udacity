[//]: # (Image References)

[image1]: ./images/fjord.jpg "Sample Input Image"
[image2]: ./new-images/fjord-100x100.jpg "Output Image resized to 100x100"

## Project Overview

Welcome to my Image Processing API project, In this project, you will see how I build an API, with Node.js and Express for handling the app 
process, and creating all the testing with Jasmine. Everything was developed with TypeScript and compiled to JS on the dist folder. The main purpose of this project is to take some parameters throw the URL, and depending on the values that where sended, create a new resized image, and saved it localy.

![Sample Input Image][image1]

This is an image example that was received throw the endpoint that wanted to be changed, the result was the next image, saved in the new-image folder and now every time the user wants the same image, it will be cache from there.

![Output Image resized to 100x100][image2]

## Project Instructions

### Instructions

1. Clone the repository and navigate to the downloaded folder.

```
git clone https://github.com/Flatcova/ImageProcessingAPI-Udacity.git
cd ImageProcessingAPI-Udacity-main
```

2. Intall all both devDependencies, and dependencies from package.json by just writing
```
npm i
```

3. Run the script to compile the /src folder
```
npm build
```

4. Run the command to initialize the project already compiled inside the /dist folder
```
node dist/app.jss
```

5. Open your browser on ``localhost:3000`` and go to the endpoint ``/images`` once there you will see an error displaying missing information

6. add the parameters for the image that will be processed they need to be 3 parameters
``
name= //Name of the image without extension
width= //new width size for the image
height= //new height size for the image
``

### Aditional Scripts

1. to run eslint and prettier you can use the next scripts and check for any error and clean the code.
```
npm run lint
```
following by
```
npm run prettier
```

2. For running the TypeScript version on src folder, I use ```nodemon``` to be able to see changes on the server while develop.
```
npm run start
```




