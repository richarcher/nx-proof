import colors from './colors';

const getThemeColors = (theme) => {
  switch (theme) {
    case 'secondary':
      return {
        base: colors.amethyst,
        medium: colors.wisteria,
        light: colors.whiteLilac,
        dark: colors.affair,
      };

    case 'success':
      return {
        base: colors.jungleGreen,
        medium: colors.eucalyptus,
        light: colors.harp,
        dark: colors.seaGreen,
      };

    case 'warning':
      return {
        base: colors.sandyBrown,
        medium: colors.burntSienna,
        light: colors.provincialPink,
        dark: colors.redDamask,
      };

    case 'error':
      return {
        base: colors.mandy,
        medium: colors.chestnutRose,
        light: colors.linen,
        dark: colors.mojo,
      };

    case 'legacy':
      return {
        base: colors.scooter,
        medium: colors.pelorous,
        light: colors.whiteIce,
        dark: colors.jellyBean,
      };

    case 'light':
      return {
        base: colors.grayChateau,
        medium: colors.geyser,
        light: colors.mystic,
        dark: colors.scorpion,
      };

    case 'dark':
      return {
        base: colors.oxfordBlue,
        medium: colors.blueZodiac,
        light: colors.mischka,
        dark: colors.blackPearl,
      };

    case 'tertiary':
      return {
        base: colors.froly,
        medium: colors.cranberry,
        light: colors.wispPink,
        dark: colors.cabaret,
      };

    case 'info':
      return {
        base: colors.shakespeare,
        medium: colors.bostonBlue,
        light: colors.iceberg,
        dark: colors.easternBlue,
      };

    default:
      return {
        base: colors.cornflowerBlue,
        medium: colors.havelockBlue,
        light: colors.hawkesBlue,
        dark: colors.mariner,
      };
  }
};

export default getThemeColors;

export { colors };

export const getSkeletonColors = (theme) => {
  switch (theme) {
    case 'dark':
      return colors.geyser;

    default:
      return colors.mystic;
  }
};
