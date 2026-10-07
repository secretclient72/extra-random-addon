# extra-random-addon

A simple package with simple "random" functions.

## How to Install

Install the package using npm:

```
npm install extra-random-addon
```

Also install Vite if you're using it for a browser website (not needed if already installed before):

```
npm install --save-dev vite
```

## Usage

#### Import the functions you need:

```js
import {randint,randfloat,minimum,maximum,randrandint,rand_colour_rgb,rand_colour_hex,choice,rand_boolean} from "extra-random-addon"
```

#### For browser website usage (assuming that you've already created ```index.html```):

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
   import {randint,randfloat,minimum,maximum,randrandint,rand_colour_rgb,rand_colour_hex,choice,rand_boolean} from "extra-random-addon"
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
  randint(1, 10)
  ```

  For example:

  ```
  4
  ```

- #### randfloat

  Returns a random float between min and max, including both values.

  ```js
  randfloat(0.1,0.9)
  ```

  For example:

  ```
  0.5
  ```
- #### minimum

  Shorthand for:

  ```
  -999999999999999
  ```

- #### maximum

  Shorthand for:

  ```
  999999999999999
  ```

- #### randrandint()

  ```randint(min,max)```, but the min and max parameters are both generated with a randint() function.

  ```js
  randrandint()
  ```

  For example:

  ```
  946
  ```

- #### rand_colour_rgb()¹

  Returns a random RGB colour. Each value is generated using ```randint(0, 255)```.

  ```js
  rand_colour_rgb()
  ```

  For example:

  ```
  124 37 201
  ```

- #### rand_colour_hex()¹

  Returns a random 7-character hex code.

  ```js
  rand_colour_hex()
  ```

  For example:

  ```
  #7fc2a1
  ```

- #### choice(array)
  
  Returns a random item from the array input.

  ```js
  choice(["apple", "banana", "orange"])
  ```

  For example:

  ```
  "apple"
  ```

- #### rand_boolean()
  
  Picks and returns randomly between ```true``` and ```false```.

  ```js
  rand_boolean()
  ```

  For example:

  ```js
  true
  ```

## Update Log

```
npx update-log
```

## Preview

```
npx preview
```

## Credits

```
npx credits
```

## License

**ISC**

¹ yes, it's spelt "colour", not "color". 