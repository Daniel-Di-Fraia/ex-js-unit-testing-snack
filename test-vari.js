//prova jest da lezione
function dividi(a,b) {
    return a/b;
}

//SNACK 1 PRENDI INIZIALI
function getInitials(fullName) {
  return fullName
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase();
}

//SNACK 2 STRINGA IN LOWERCASE
function createSlug(stringa){
    return stringa.toLowerCase();
}

//SNACK 3 













module.exports = {
    dividi,
    getInitials,
    createSlug
}