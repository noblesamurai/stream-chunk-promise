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
  return new Promise((resolve, reject) => {
    function onError (err) {
      return reject(err);
    }

    stream.once('error', onError);
    const data = stream.read(size);
    if (data) return resolve(data);
    return setImmediate(() => {
      stream.removeListener('error', onError);
      resolve(nextChunk(stream, size));
    });
  });
};
