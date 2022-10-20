Conext API Guide


First let's us understand wy there is a need of something such as contextAPI or global state management API.
As react is an unidirectional data flow library passing data with props sometimes become difficult.
There's no provision to pass data within sibling react component or passing data from child to parent(you can lift up the state, but it become difficult to manage this aaproach along the entire application)
Thus, we can use react's inbuilt context API to globally manage the data.

Pro's:
1. State globally managed thus, can be passed access from any component down the DOM tree.
2. Could avoid prop drilling/lifting up the state.
3. Data fetching made easy, as there could be just one file to carry out all your API calls and used accross different components

Con's:
1. Not easy to pick, considered a bit advance concept.

Folder Structure
1. Create a different file in src/{use_case}Context.js
2. For mainting routes accross the application have src/pages/{page_name}.js


