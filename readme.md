# Crypto Prime Test

A function that deterministically checks if a number is prime.

## Install

```sh
npm install --save crypto-prime-test
```

## Usage

```ts
import isPrime from 'crypto-prime-test';

// Check if a number is prime for sure, deterministically

isPrime ( 465207927154668043n ); // => true
isPrime ( 465207927154668041n ); // => false
```

## License

MIT © Fabio Spampinato
