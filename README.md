Set up:

1. Npm i
2. Run unit test (Jest and Enzyme) - npm test
3. To view the production build with the complete lighthouse requirements (The build performs less efficiently on Heroku because of the free tier hosting.):
   npm run build
   serve -s build

- Performance : 92
- Accessibility 86
- SEO 89

Heroku hosted: https://reactrestaurants.herokuapp.com/

# Q1

I spent about 6 hours between writing the code, unit testing, and deploying.
I would have liked to add a second search bar as per challenge.
Add more unit tests and increase coverage.
Add e2e and integration tests.
Add CI/CD using Jenkins or Github.
Improve CSS.

# Q2

I like React hooks since their implementation leads to less code, easier management of the state as
well as the component lifecycle methods.

// Example code for hooks and setting of the state
import React, { useState } from 'react';

function Example() {

const [count, setCount] = useState(0);

return (

<div>
<p>You clicked {count} times</p>
<button onClick={() => setCount(count + 1)}>
Click me
</button>
</div>
);
}

# Q3

Yes I have tracked down production performance issues before. The QA and Production servers should be complete matches. Therefore if there are performance issues production, debugging and patches need to be done on development and QA servers before merging to the production branch and deploying the build.

# Q4

I would improve parameter validation for $city var API takes in. The $city value that the API takes in only needs partial city characters to the return full restaurants array. The API should return the cities only if the exact match between $city value on the client and the $city contained in the \$restaurants array on the backend are an exact match.

# Q5

{
"name": "Rokas Lukosevicius",
"nationality": "Lithuanian",
"passions": [
"Programming",
"NBA"
],
"interests": [
"Education",
"Technology"
],

}
