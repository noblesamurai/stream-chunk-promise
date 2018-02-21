# Stream-chunk-promise [![Build Status](https://secure.travis-ci.org/noblesamurai/stream-chunk-promise.png?branch=master)](http://travis-ci.org/noblesamurai/stream-chunk-promise) [![NPM version](https://badge-me.herokuapp.com/api/npm/stream-chunk-promise.png)](http://badges.enytc.com/for/npm/stream-chunk-promise)

> Get a promise that resolves when we can read(size) next chunk of stream.

## Usage

```js
// Several examples of usage.
// Usually copying and pasting code from the tests and making the code standalone suffices.
const nextChunk = require('stream-chunk-promise');
const stream = someReadableStream();
const size = 10;
const assert = require('assert');
nextChunk(stream, size).then((result) => {
  assert(result.length === size);
});
```

## API

<a name="module_stream-chunk-promise"></a>

## stream-chunk-promise
<a name="exp_module_stream-chunk-promise--module.exports"></a>

### module.exports(stream, size) ⏏
read()s the next chunk of stream and resolve to it, requiring size bytes.

**Kind**: Exported function
**Resolves**: <code>Buffer\|string</code> the chunk requested

| Param | Type |
| --- | --- |
| stream | <code>ReadableStream</code> |
| size | <code>integer</code> |

Note: To regenerate this section from the jsdoc run `npm run docs` and paste
the output above.

## Installation

This module is installed via npm:

``` bash
$ npm install stream-chunk-promise
```
## License

The BSD License

Copyright (c) 2018, Tim Allen

All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice, this
  list of conditions and the following disclaimer in the documentation and/or
  other materials provided with the distribution.

* Neither the name of the Tim Allen nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

