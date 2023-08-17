import { hexToRgba } from './helpers';

describe('helpers', () => {
  describe('.hexToRgba', () => {
    it('converts a 3 character hex color to rgba', () => {
      expect(hexToRgba('#03F')).toBe('rgba(0, 51, 255, 1)');
    });

    it('converts a 6 character hex color to rgba', () => {
      expect(hexToRgba('#000000')).toBe('rgba(0, 0, 0, 1)');
    });

    it('takes an optional opacity param', () => {
      expect(hexToRgba('#000000', '0.5')).toBe('rgba(0, 0, 0, 0.5)');
    });
  });
});
