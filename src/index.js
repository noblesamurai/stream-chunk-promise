/**
 * @module stream-chunk-promise
 */

module.exports = nextChunk;

/**
 * read()s the next chunk of stream and resolve to it, requiring size bytes.
 * @param {ReadableStream} stream
 * @param {integer} size
 * @resolves {Buffer|string} the chunk requested
 */
async function nextChunk (stream, size) {
  // add error handler
  let error = false;
  const errorHandler = e => { error = e; };
  stream.once('error', errorHandler);

  // begin data fetching loop... until we get something.
  let data = null;
  // need eslint disable here since it is complaining about error not being
  // modified in the loop... which it isn't however since this is async it can
  // still be changed while the loop is running by the error handler above.
  while (data === null && !error) { // eslint-disable-line no-unmodified-loop-condition
    data = await stream.read(size);
    await delay();
  }

  // remove the error handler
  stream.removeListener('error', errorHandler);

  // return error... or data.
  if (error) throw error;
  return data;
}

/**
 * Simple delay function used above inorder to wait for a stream to have data
 * available.
 */
async function delay () {
  return new Promise(resolve => setImmediate(resolve));
}
