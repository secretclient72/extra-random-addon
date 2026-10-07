# extra-random-addon

A simple package with simple "random" functions.

## How to Install

Install the package using npm:

```bash
npm install extra-random-addon
```

Also install Vite if you're using it alongside HTML (not needed if already installed before):

```bash
npm install --save-dev vite
```

## Usage

#### Import the functions you need:

```js
import * from "extra-random-addon"
```

#### For HTML usage (assuming that you've already created ```index.html```):

1. First, run:

   ```
   npm create vite@latest .
   ```

2. Next, select if the option is provided:

   ```
   Remove files and continue
   ```

3. After that, input:

   ```
   Framework: Vanilla
   Variant: Javascript
   Install with npm now?: yes
   ```

4. Following on, delete the 'public' folder and everything in the src folder except ```src\main.js```.

5. Link the ```index.html``` file to the ```src\main.js``` via: 

   ```html
   <script type="module" src="src/main.js"></script>
   ```

6. In ```src\main.js```,put in any code you need.

   For example:

   ```js
   import * from "extra-random-addon"
   ```

7. Then, close the current terminal, open a new one, go back to the location where you installed the package and run:

   ```
   npm run dev
   ```

8. Open the link Vite gives you. If you're using a html file named something other than ```index.html```, put ```/(whatever you've named your html file)``` at the end of the link.

## API

- #### randint(min, max)

  Returns a random integer between min and max, including both values.

  ```js
  randint(1, 10) // 4
  ```

- #### randfloat(min, max, dp)

  Returns a random float between min and max, including both values. Can be rounded to a specific amount of decimal places with the dp parameter.

  ```js
  randfloat(0.1,0.9,1) // 0.5
  ```

- #### minimum

  Shorthand for the smallest possible number in js:

  ```js
  Number.MIN_SAFEST_INTEGER-1
  ```

- #### maximum

  Shorthand for the largest possible number in js:

  ```js
  Number.MAX_SAFEST_INTEGER+1
  ```

- #### letters
  
  An array of all the letters in the English alphabet:

  ```js
  [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
  ```

- #### randrandint()

  ```randint(min,max)```, but the min and max parameters are both generated with a randint() function.

  ```js
  randrandint() // 28472824524235684
  ```

- #### rand_colour_rgb()¹

  Returns a random RGB colour. Each value is generated using ```randint(0, 255)```.

  ```js
  rand_colour_rgb() // 124 37 201
  ```

- #### rand_colour_hex()¹

  Returns a random 7-character hex code.

  ```js
  rand_colour_hex() // #7fc2a1
  ```

- #### choice(array)
  
  Returns a random item from the array input.

  ```js
  choice(["apple", "banana", "orange"]) // "apple"
  ```


- #### rand_boolean()
  
  Picks and returns randomly between ```true``` and ```false```.

  ```js
  rand_boolean() // true
  ```

## Update Log

```bash
npx update-log-random
```

## Preview

```bash
npx preview-random
```

## Credits

```bash
npx credits-random
```

## License

**[ISC](https://www.isc.org/licenses/)**

¹ yes, it's spelt "colour", not "color". 