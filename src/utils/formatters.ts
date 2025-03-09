
/**
 * Formats a number as currency (BRL)
 * @param value Number to format
 * @returns Formatted string
 */
export const formatCurrency = (value: number): string => {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

/**
 * Formats a number with thousands separator
 * @param value Number to format
 * @returns Formatted string
 */
export const formatNumber = (value: number): string => {
  return value.toLocaleString('pt-BR');
};

/**
 * Formats a date to Brazilian format (DD/MM/YYYY)
 * @param date Date to format
 * @returns Formatted date string
 */
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('pt-BR');
};

/**
 * Formats a date with time (DD/MM/YYYY HH:MM)
 * @param date Date to format
 * @returns Formatted date and time string
 */
export const formatDateTime = (date: Date): string => {
  return date.toLocaleString('pt-BR');
};
