import { randomBytes } from 'crypto';

function sayHelloTo(name: string): string {
  return `Hello, ${name}! How you doin'?`;
}

console.log(sayHelloTo('Rahul Dahal'));
console.log(randomBytes(64).toString('hex'));
