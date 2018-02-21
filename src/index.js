/**
 * @module stream-chunk-promise
 */

/**
 * read()s the next chunk of stream and resolve to it, requiring size bytes.
 * @param {ReadableStream} stream
 * @param {integer} size
 * @resolves {Buffer|string} the chunk requested
 */
module.exports = function nextChunk (stream, size) {
  return new Promise((resolve) => {
    const data = stream.read(size);
    if (data) return resolve(data);
    return setImmediate(() => resolve(nextChunk(stream, size)));
  });
};
