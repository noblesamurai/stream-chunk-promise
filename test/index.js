const expect = require('chai').expect;
const StreamGenerator = require('stream-generator');

function * simplisticByteGenerator () {
  // spits out bytes, which correspond to ascii chars:
  // 'M','a','r','s','h','a','l','l'
  yield 77;
  yield 97;
  yield 114;
  yield 115;
  yield 104;
  yield 97;
  yield 108;
  yield 108;
}

const byteStream = StreamGenerator(simplisticByteGenerator);
const streamChunk = require('..');

describe('stream-chunk-promise', function () {
  it('resolves a promise when there is enough data, flushes at end', function () {
    return streamChunk(byteStream, 2).then((result) => {
      expect(result.toString()).to.equal('Ma');
      return streamChunk(byteStream, 3);
    }).then((result) => {
      expect(result.toString()).to.equal('rsh');
      return streamChunk(byteStream, 100);
    }).then((result) => {
      expect(result.toString()).to.equal('all');
    });
  });
});
