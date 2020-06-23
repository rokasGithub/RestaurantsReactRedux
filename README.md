# Q1

I spend about 6h hours between writting the code, unit testing and deploying.
I would of liked to add a second search bar as per challenge.
Add more unit test and increase coverage.
Add e2e and integration tests.
Add CI/CD using Jenkins or Github.
Improve the CSS.

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

Yes I have tracked down production performance issues before. The QA and Production servers should be complete matches. Therefore if there are performance issues production, debugging and patches need to be done on development and QA servers before merging to production branch and deploying the build.

# Q4

I would improve parameter validation for $city var API takes in. The $city value that the api takes in, only needs partial city characters to the return full restourants array. The API should return the cities only if the exact match between $city value on the client and the $city contained in the restaurants array on the backend are an exact match.

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
