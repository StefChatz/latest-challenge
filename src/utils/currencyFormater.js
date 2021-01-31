export const currencyFormater = (price) => `€ ${new Intl.NumberFormat()
  .format(price.split('/')[1].trim())
  .replace('.', ',')}`;
