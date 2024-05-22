function getFullYear() {
  const currentYear = new Date().getFullYear();

  return currentYear;
}

function getFooterCopy(isIndex) {
  return isIndex ? "Holberton School" : "Holberton School main dashboard";
}
