// Uppdateras automatiskt vid varje publicering.
export default function () {
  const nu = new Date();
  return {
    ar: nu.getFullYear(), // sidfoten
    version: nu.getTime().toString(36), // tvingar webbläsaren att hämta ny stilmall
  };
}
