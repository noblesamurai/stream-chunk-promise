const expect = require('chai').expect;
const StreamGenerator = require('stream-generator');
const StreamTest = require('streamtest');

function * byteGenerator (string) {
  for (var c of string) yield c.charCodeAt();
}

const streamChunk = require('..');

describe('stream-chunk-promise', function () {
  it('resolves a promise when there is enough data, flushes at end', function () {
    const byteStream = StreamGenerator(byteGenerator.bind(null, 'Marshall'));
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

  it('does not leave listeners on the stream', function () {
    const stream = StreamTest['v2'].fromChunks(['1000', '2', '3', '4', '5'], 100);
    return streamChunk(stream, 2).then((result) => {
      expect(stream.listeners('error')).to.have.length(0);
      return streamChunk(stream, 1);
    }).then((result) => {
      expect(stream.listeners('error')).to.have.length(0);
    });
  });

  it('rejects a promise when there is an error on the stream', function () {
    const errorStream = StreamTest['v2'].fromErroredChunks(new Error('boom'), [], 0);
    let errored = false;
    return streamChunk(errorStream, 2).catch((err) => {
      errored = err;
    }).then((result) => {
      expect(errored).to.be.an('Error');
    });
  });
});
