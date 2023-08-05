
/* IMPORT */

import benchmark from 'benchloop';
import isPrime from '../dist/index.js';

/* MAIN */

benchmark.config ({
  iterations: 1
});

benchmark ({
  name: 'small',
  fn: () => {
    for ( let i = 0n; i <= 1_000_000; i++ ) {
      isPrime ( i );
    }
  }
});

benchmark ({
  name: 'medium.yes',
  fn: () => {
    isPrime ( 465207927154668043n );
  }
});

benchmark ({
  name: 'medium.no',
  fn: () => {
    isPrime ( 465207927154668041n );
  }
});

benchmark.summary ();
