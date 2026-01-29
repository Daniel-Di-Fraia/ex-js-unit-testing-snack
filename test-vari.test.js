const { dividi, getInitials, createSlug } = require("./test-vari.js");

//prva jest da lezione
test('la funzione "dividi" restituisce il quoziente tra 2 numeri', ()=> {
    expect(dividi(10,2)).toBe(5);
});

//SNACK 1
test('la funzione "getInitials" restituisce le iniziali di un nome completo', () => {
    expect(getInitials('Mario Rossi')).toBe('MR');
  });

//SNACK 2
test("La funzione 'createSlug' restituisce una stringa in lowercase.", () => {
    expect(createSlug('LOCOMOTIVA')).toBe('locomotiva');
  });

//SNACK 3
