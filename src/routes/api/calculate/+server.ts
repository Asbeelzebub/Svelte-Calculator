import { json } from "@sveltejs/kit";

export async function POST({ request }) {
  const data = await request.json();


  return json({ output: evaluateExpression(data.input) });
}

// Helper function to determine operator precedence

function getPrecedence(operator: string): number {
  if (operator === "+" || operator === "-") return 1;
  if (operator === "*" || operator === "/") return 2;
  return 0;
}

function infixToPostfix(expression: string): string[] {
  const output: string[] = [];
  const operatorStack: string[] = [];

  const tokens = expression.match(/[0-9]+|[\+\-\*\/]/g);

  if (!tokens) return output;

  for (const token of tokens) {
    if (!isNaN(Number(token))) {
      output.push(token);
    } else if (token === "(") {
      operatorStack.push(token);
    } else if (token === ")") {
      while (
        operatorStack.length &&
        operatorStack[operatorStack.length - 1] !== "("
      ) {
        output.push(operatorStack.pop()!);
      }
      operatorStack.pop(); // Pop '('
    } else {
      while (
        operatorStack.length &&
        getPrecedence(operatorStack[operatorStack.length - 1]) >=
          getPrecedence(token)
      ) {
        output.push(operatorStack.pop()!);
      }
      operatorStack.push(token);
    }
  }

  while (operatorStack.length) {
    output.push(operatorStack.pop()!);
  }

  return output;
}

function evaluatePostfix(postfixExpression: string[]): number {
  const stack: number[] = [];

  for (const token of postfixExpression) {
    if (!isNaN(Number(token))) {
      stack.push(Number(token));
    } else {
      const b = stack.pop()!;
      const a = stack.pop()!;
      switch (token) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          stack.push(a / b);
          break;
      }
    }
  }

  return stack[0];
}

function evaluateExpression(expression: string): number {
  const postfix = infixToPostfix(expression);
  return evaluatePostfix(postfix);
}
