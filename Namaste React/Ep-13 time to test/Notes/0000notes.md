# Ep-13 time to test

We know testing is very important !! Testing is a huge Domain!! We only concerned about Developer testing !!

Even a single line of code can put bug anywhere !! When we have 100's of components !!and these components talk to each other!!

Developer can do 
- `manual tetsing`--> like we do by doing that specific action 

- `write code to test the application`

### types of testing developer can do!!

- unit testing --> test component separately!! test component in isolation of application!! 

- Integration testing --> testing integration of components!!We write code to test components comunicating with each other!!

- End to end testing(E2E testing) --> test all flows !! test from user to land on page and do everything user can do!!used vy selenium ,pupeteer!!

we are concerned by 1st 2 testing !! Testing is part of development!! Writing test case for code is very important!!

## Library 

`react-testing library` is most standard way to do testing in React!!
React Testing Library builds on top of DOM Testing Library by adding APIs for working with React components.

`npm install --save-dev @testing-library/react @testing-library/dom` --> to install!! `create react app` has testing library but with  `vite` we need to install it!! `react-testing library`  uses `jest` which is used to create testCase for JS !!`Jest` used Babel!! so we need `jest` too!!


`npm install --save-dev jest`--> to install jest!!

Jest is not supported by `vite`!!

Vite is designed around ES modules and modern tooling, whereas Jest was built for CommonJS and doesn't natively support Vite's ESM-based architecture and plugin system. So while you can use Jest in a Vite project, it requires extra setup (as described earlier), and you'll miss out on some of Vite's features like native module resolution, Vite aliases, and faster ESM loading.

`Vitest is Vite's native test runner and is built to integrate seamlessly with Vite and React.`

So we have installed vitest and put scripts for that

`> npm install -D vitest` --> to install vitest

```json
{
  "name": "foodapp",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "test": "vitest"
  },
  "dependencies": {
    "@reduxjs/toolkit": "^2.8.2",
    "@tailwindcss/vite": "^4.1.10",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-redux": "^9.2.0",
    "react-router": "^7.6.2",
    "react-router-dom": "^7.6.2",
    "tailwindcss": "^4.1.10"
  },
  "devDependencies": {
    "@eslint/js": "^9.25.0",
    "@testing-library/dom": "^10.4.0",
    "@testing-library/react": "^16.3.0",
    "@types/react": "^19.1.2",
    "@types/react-dom": "^19.1.2",
    "@vitejs/plugin-react": "^4.4.1",
    "eslint": "^9.25.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^16.0.0",
    "vite": "^6.3.5",
    "vitest": "^3.2.4"
  }
}

```
Now see above package.json and scripts!! Scripts we need to add 

```json
{
  "scripts": {
    "test": "vitest"
  }
}
```
to run `npm test command`!!

create new file vite.config.js

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals:true,
        setupFiles: './src/setupTests.js',
        include: ['src/**/*.test.jsx'],
    },
});
```

our vite.config.ja looks like 

```js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() ,
          tailwindcss() ,],
    test: {
        environment: 'jsdom',
        globals:true,
        setupFiles: './src/setupTests.js',
        include: ['src/**/*.test.jsx'],
    },
})

```
create setUpTests.js and put this statement there 

```js

import '@testing-library/jest-dom';

```

Let us write some test cases for js !!
we write a sum function 

```js
export const sum=(a,b) => {
    console.log(a,b);
    return a + b;
}
```

This was sum function!!
```jsx
import { sum } from "../sum.js";
import {describe,it,expect} from "vitest";
import "@testing-library/jest-dom/vitest"

describe("Sum function should caculate the sum of two numbers", () => {
    it('should calculate the sum of two numbers', () => {
        const result = sum(3, 4);

        // Assertion
        expect(result).toBe(7);
    });
});
```

descibe takes 2 argument 1 is string and 2nd is callback function where we write test case!!

### Code coverage

testcase covers how much percentage of code!!

`npm install -D c8` --> for code coverage

`npx vitest run --coverage` --> to run!!





















