console.log("papa".replace("p", "m")); //-> mapa

/**
 * Using regular expressions all matches in the string can be replaced,
 * using a g option(for global).
 */
console.log("papa".replace(/[p]/g, "m")); //-> mama
