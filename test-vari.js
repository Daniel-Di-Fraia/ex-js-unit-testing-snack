//prova jest da lezione
function dividi(a, b) {
    return a / b;
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
function createSlug(stringa) {
    return stringa.toLowerCase();
}

//SNACK 3 MEDIA DI VALORI IN ARRAY
function average(numbers) {
    if (numbers.length === 0) return 0;

    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
}

// SNACK 4 La funzione createSlug sostituisce gli spazi con -
function createSlugSpace(stringa) {
    return stringa.toLowerCase().trim().replace(/\s+/g, "-");
}

//SNACK 5 La funzione isPalindrome verifica se una stringa è un palindromo
function isPalindrome(stringa){
    if(stringa.split('').reverse().join('') === stringa){
        return true;
    } else {
        return false;
    }
    
}

// SNACK 6 La funzione createSlug lancia un errore se il titolo è vuoto o non valido
function createSlugTitle(){
    
}

module.exports = {
    dividi,
    getInitials,
    createSlug,
    average,
    createSlugSpace,
    isPalindrome
}