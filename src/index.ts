
/* IMPORT */

import isProbablyPrime from 'crypto-miller-rabin';
import sieve from 'crypto-sieve';

/* HELPERS */

const sqrt = ( value: bigint ): bigint => {

  if ( value < 2n ) return value;

  const iteration = ( n: bigint, x0: bigint ): bigint => {

    const x1 = ( ( n / x0 ) + x0 ) >> 1n;

    if ( x0 === x1 || x0 === ( x1 - 1n ) ) return x0;

    return iteration ( n, x1 );

  };

  return iteration ( value, 1n );

};

/* MAIN */

const isPrime = ( n: bigint ): boolean => {

  const milleRabinRounds = Math.ceil ( n.toString ( 2 ).length / 2 );

  if ( !isProbablyPrime ( n, milleRabinRounds ) ) return false;

  const primesLimit = Number ( sqrt ( n ) );
  const primes = sieve.iterator ( primesLimit );

  for ( const prime of primes ) {

    if ( n % BigInt ( prime ) === 0n ) return false;

  }

  return true;

};

/* EXPORT */

export default isPrime;
