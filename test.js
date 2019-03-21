import Anchorage from './index.js';
import tape from 'tape';

const TEST_SELECTOR = '#anchorage-test';

tape('setup', t => {
  const testEl = document.createElement('div');
  testEl.id = TEST_SELECTOR.slice(1);
  document.body.appendChild(testEl);
  t.end();
});

tape('Anchorage :: constructor', t => {
  const a1 = new Anchorage(TEST_SELECTOR);
  const a2 = new Anchorage(TEST_SELECTOR, {
    headlines: 'h1, h2',
    linkClass: 'test-link-class',
  });

  t.ok(a1.options.linkClass, 'sets default linkClass option');
  t.ok(a1.options.headlines, 'sets default headlines option');
  t.equal(
    a2.options.linkClass,
    'test-link-class',
    'sets linkClass option via arg'
  );
  t.equal(
    a2.options.headlines,
    'h1, h2',
    'sets headlines option via arg'
  );
  t.end();
});

tape('teardown', t => {
  const testEl = document.querySelector(TEST_SELECTOR);
  testEl.parentNode.removeChild(testEl);
  t.end();
});

