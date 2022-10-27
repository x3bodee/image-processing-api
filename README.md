# image-processing-api


# Endpoint specification: 

this is the endpoint ``` localhost:3000/resize ```, but you need to provide 3 queres for the endpoint to work.

* name:
 must be a file name that exist in assets folder, and file extenstion is jpg.
* width:
 must contains a value greater than 0
* height:
 must contains a value greater than 0

### example:
* this will pass: ``` localhost:3000/resize?name=icelandwaterfall&width=500&height=300 ```

* this will not pass:
``` localhost:3000/resize?name=icelandwaterfall&height=300 ``` ``` --> ``` width is missing.

# npm run commands:

* build:
this will compile the ts to js.
* start:
this will run the server.
* test:
this will compile the ts files and run the test on the js files.
