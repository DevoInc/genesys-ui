import { getFormatTimeStr } from './format';

describe('getFormatTimeStr', () => {
  test('with seconds and millis', () => {
    const str = getFormatTimeStr(true, true);
    expect(str).toEqual('HH:mm:ss.sss');
  });

  test('with seconds and not millis', () => {
    const str = getFormatTimeStr(true, false);
    expect(str).toEqual('HH:mm:ss');
  });

  test('without seconds and millis', () => {
    const str = getFormatTimeStr(false, false);
    expect(str).toEqual('HH:mm');
  });
});
