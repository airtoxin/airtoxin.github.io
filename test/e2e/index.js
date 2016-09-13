/* eslint-disable import/no-extraneous-dependencies, no-undef */
import nightmare from 'nightmare';
import assert from 'assert';

describe('test', () => {
  let page;
  beforeEach(() => {
    page = nightmare({ show: true });
  });

  it('title', () => {
    const result = page
      .goto('http://localhost:9999')
      .wait(1000)
      .title()
      .end()
      .then((title) => {
        assert.strictEqual(title, 'airtoxin');
      });
    return result;
  });
});
