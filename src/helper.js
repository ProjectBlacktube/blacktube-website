export function shortenNumber(num) {
  return Math.abs(num) > 999 ? 
    Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : 
    num;
}