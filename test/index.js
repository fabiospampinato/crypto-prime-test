
/* IMPORT */

import {describe} from 'fava';
import isPrime from '../dist/index.js';

/* MAIN */

describe ( 'Crypto Prime Test', it => {

  it ( 'works', t => {

    t.is ( isPrime ( 465207927154668043n ), true );
    t.is ( isPrime ( 465207927154668041n ), false );

  });

});
