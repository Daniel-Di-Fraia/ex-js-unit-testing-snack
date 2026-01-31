const { dividi, getInitials, createSlug, average, createSlugSpace, isPalindrome, createSlugTitle, findPostById } = require("./test-vari.js");

//prva jest da lezione
test('la funzione "dividi" restituisce il quoziente tra 2 numeri', () => {
  expect(dividi(10, 2)).toBe(5);
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
  expect(average([2, 3, 7, 8])).toBe(5);
});

//SNACK 4
test("La funzione createSlug sostituisce gli spazi con -", () => {
  expect(createSlugSpace("test di prova")).toBe("test-di-prova");
});

//SNACK 5
test("La funzione isPalindrome verifica se una stringa è un palindromo", () => {
  expect(isPalindrome("anna")).toBe(true);
  expect(isPalindrome("ciao")).toBe(false);
});

// SNACK 6
test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido", () => {
  expect(() => createSlugTitle("")).toThrow();
  expect(() => { createSlugTitle(12345); }).toThrow();
  expect(() => { createSlugTitle("   "); }).toThrow();
});

//SNACK 7
const posts = [
  { id: 1, title: "Primo Post", slug: "primo-post" },
  { id: 2, title: "Secondo Post", slug: "secondo-post" },
  { id: 3, title: "Terzo Post", slug: "terzo-post" }
];

test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
  const result = findPostById(posts, 2);

  // Verifichiamo che l'oggetto restituito sia quello corretto
  expect(result).toEqual({ id: 2, title: "Secondo Post", slug: "secondo-post" });
});

test("Ogni post nell'array ha la struttura corretta (id, title, slug)", () => {
  posts.forEach(post => {
    expect(post).toMatchObject({
      id: expect.any(Number),
      title: expect.any(String),
      slug: expect.any(String)
    });
  });
});

test("La funzione findPostById restituisce undefined se l'id non esiste", () => {
  const result = findPostById(posts, 999);
  expect(result).toBeUndefined();
});

