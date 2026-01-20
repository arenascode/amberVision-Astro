export const formatCurrency = (amount: string | number | undefined) => {
  if (!amount && amount !== 0) return "$ 0";

  return `$${Number(amount).toLocaleString("es-CO")}`;
};
