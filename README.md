Build a simple Calculator.

Preview App : https://svelte-calculator-theta.vercel.app/

[x] Create a simple calculator app using SvelteKit https://kit.svelte.dev/

1. I created a sveltekit project using the command `npm create svelte@latest CalculatorApp`
2. Selected a skelon project template and typescript as a starting point.
3. Opted out the addtional options like eslint,prettier and etc.
4. And followed the Next steps of instructions given by the create svelte script.
5. Now you that I created an app I headed to the routes folder and modify the +page.svelte.

[x] Submit it to github.

[x] The calculator app should have buttons for entering numbers.

1. I created buttons using HTML and CSS for the UI.
2. I created a string "currentInput" that has reactive value to hold a specific value later on and i binded the "value" to input element that is readonly to display the "currentInput".
3. Then I created a function "addToInput" that accepts string parameter and appends the parameter to the "currentInput"
4. Then I created a submit button that has on click listener that call "submitHandler"
5. The submitHandler is an async function that send currentInput to the endpoint API which is "/api/calculate/+server.ts/"
6. I used POST method so that it can hold body that allows to store data and send it to endpoint to.
7. Then i create a folder inside the routes directory called "/api/calculate" and inside the calculate folder i added a file name "+server.ts" for my backend calculation since the condtion need to get the result using SSR
8. Then inside the "+server.ts" i exported the async fuction POST request and give a string value of "data"
9. Then i started the code of our server by the function"getPrecedence" that assigns precedence values to different operators. Operators with higher precedence will be evaluated before operators with lower precedence when converting the infix expression to postfix notation
10. and then created a function "infixToPostfix" which converts an infix mathematical expression (like the ones users enter) into postfix notation. Postfix notation is easier to evaluate programmatically since it eliminates the need for parentheses and enforces operator precedence.
12. then the "evaluateExpression" function ties everything together. It takes an infix expression as input, converts it to postfix notation using infixToPostfix, and then evaluates the postfix expression using evaluatePostfix, ultimately returning the numerical result of the mathematical expression.
11. after that the evaluateExpression function ties everything together. It takes an infix expression as input, converts it to postfix notation using infixToPostfix, and then evaluates the postfix expression using evaluatePostfix, ultimately returning the numerical result of the mathematical expression.
12. In summary, this code handles incoming POST requests to an API endpoint. It reads the JSON content from the request, uses the parsed input to calculate a result using evaluateExpression(), and then sends back a JSON response containing that calculated result.


