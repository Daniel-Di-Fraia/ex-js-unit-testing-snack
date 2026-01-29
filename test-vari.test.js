const { dividi, getInitials, createSlug, average, createSlugSpace } = require("./test-vari.js");

//prva jest da lezione
test('la funzione "dividi" restituisce il quoziente tra 2 numeri', ()=> {
    expect(dividi(10,2)).toBe(5);
});

//SNACK 1
test('la funzione "getInitials" restituisce le iniziali di un nome completo', () => {
    expect(getInitials('Mario Rossi')).toBe('MR');
  });

//SNACK 2
test("La funzione 'createSlug' restituisce una stringa in lowercase", () => {
    expect(createSlug('LOCOMOTIVA')).toBe('locomotiva');
  });

//SNACK 3
test("La funzione 'average' calcola la media aritmetica di un array di numeri", () => {
    expect(average([2,3,7,8])).toBe(5);
  });

//SNACK 4
test("La funzione createSlug sostituisce gli spazi con -", () => {
    expect(createSlugSpace("test di prova")).toBe("test-di-prova");
  });