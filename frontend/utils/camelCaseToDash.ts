const camelCaseToDash = (string: string) =>
  string.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

export default camelCaseToDash;
