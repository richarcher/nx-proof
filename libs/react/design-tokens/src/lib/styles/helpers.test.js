import { mediaQueryHelper, shorthandHelper } from './helpers';

describe('helpers', () => {
  describe('.mediaQueryHelper', () => {
    let breakpoint;
    let direction;

    beforeEach(() => {
      breakpoint = 821;
      direction = 'min-width';
    });

    describe('when there is no direction specified', () => {
      it('returns the media query string with the specified breakpoint and "min-width" as the direction', () => {
        expect(mediaQueryHelper(breakpoint, direction)).toBe(
          '@media screen and (min-width: 821px)'
        );
      });
    });

    describe('when there is a direction specified', () => {
      describe('when the direction specified is "min-width"', () => {
        it('returns the media query string with the specified breakpoint', () => {
          expect(mediaQueryHelper(breakpoint, direction)).toBe(
            '@media screen and (min-width: 821px)'
          );
        });
      });

      describe('when the direction specified is "max-width"', () => {
        it('returns the media query string with the specified breakpoint minus one', () => {
          direction = 'max-width';

          expect(mediaQueryHelper(breakpoint, direction)).toBe(
            '@media screen and (max-width: 820px)'
          );
        });
      });
    });
  });
  describe('.shortHandHelper', () => {
    describe('When the shorthand values are strings', () => {
      it('should return a valid css-property value, concatenated with px', () => {
        const cssProperty = shorthandHelper(['0', '0', '0', '0']);
        expect(cssProperty).toEqual('0px 0px 0px 0px');
      });
    });
    describe('When the shorthand values are a mix of strings and numbers', () => {
      it('should return a valid css-property value, concatenated with px where appropriate', () => {
        const cssProperty = shorthandHelper([0, '2', 0, 'auto']);
        expect(cssProperty).toEqual('0px 2px 0px auto');
      });
    });
    describe('When the shorthand values are an empty array', () => {
      it('should return a valid css-property value', () => {
        const cssProperty = shorthandHelper([]);
        expect(cssProperty).toEqual('0px');
      });
    });
  });
});
