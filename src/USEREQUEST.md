UseRequest hook has been demonstrated via an example. The structure of example is as follows

```
Project
│   README.md
│   ... 
│
└───src
    │   App.js  -> Routes are defined in this directory for the entire application
    │   Home.js -> A simple page to provide a route to rest of the application
    │
    └───hooks --> Contains all custom hooks
    │   │   useRequest.js -> Contains our custom hook for fetching data
    │   │   ...
    │
    └───pages --> Contains all pages which are linked by routes
        │   choosePet.js -> Contains the page to choose a dog breed. This uses useRequest hook to fetch data (path: /pets)
        │   viewPet.js   -> Contains the nested route from pet which displays 3 images of selected breed (path: /pets/view)
```

***What is useRequest hook ?*** <br/>
This is used to fetch data on load of the page. This is a custom hook and not provided by react by default. 

***How it has been use in current project ?*** <br/>
For this purpose, we have used the ahooks library. In ```useRequest.js```, a wrapper has been written around the hook along with fetch to fetch the data from ```https://dog.ceo/``` api.

***Can you explain the hook details with example ?*** <br/>
UseRequest provides 3 convenient properties 
1. data
2. loading
3. error

In ```choosePet.js```, we retrieve all breeds from the api. The application calls the api as soon as the page loads. loading is true unless the api returns with success or failure. If it is success, the response returned is stored in data.

In case of error, error code and message is stored in error.

***Can we pass the retrieved data to another route ?*** <br/>
Yes, this is not different from rest of the data in component. To demonstrate this, we pass the breed name to ```ViewPet``` component using react router. When user clicks on viewPet, data is paased and random images of breed is shown in subsequent page.

***Is this the only way of implementing useRequest?*** <br/>
No, there are different ways of implementing useRequest. Yet another common way is using SWR library. Instead of fetch, axios can be used.

***





