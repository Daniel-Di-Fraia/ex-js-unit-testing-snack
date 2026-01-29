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

// SNACK 4
function createSlugSpace(stringa) {
    return stringa.toLowerCase().trim().replace(/\s+/g, "-");
}

module.exports = {
    dividi,
    getInitials,
    createSlug,
    average,
    createSlugSpace
}