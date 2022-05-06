const fullname = require('./fullname');

test('correct fullname', () => {
    expect(fullname('Vardenis', 'Pavardenis')).toBe('Vardenis Pavardenis');
})

test('error without firstname', () => {
    expect(fullname('', 'Pavardenis')).toBe(false);
})

test('error without lastname', () => {
    expect(fullname('Vardenis', '')).toBe(false);
})

test('fix firstname with spaces around', () => {
    expect(fullname(' Vardenis', 'Pavardenis')).toBe('Vardenis Pavardenis');
})

test('fix firstname with spaces around', () => {
    expect(fullname('Vardenis ', 'Pavardenis')).toBe('Vardenis Pavardenis');
})

test('fix firstname with spaces around', () => {
     expect(fullname('    Vardenis', 'Pavardenis')).toBe('Vardenis Pavardenis');
})

test('fix firstname with spaces around', () => {
    expect(fullname('Vardenis    ', 'Pavardenis')).toBe('Vardenis Pavardenis');
})

test('fix lastname with spaces around', () => {
    expect(fullname('Vardenis', ' Pavardenis')).toBe('Vardenis Pavardenis');
})

test('fix lastname with spaces around', () => {
    expect(fullname('Vardenis', 'Pavardenis ')).toBe('Vardenis Pavardenis');
})

test('fix lastname with spaces around', () => {
    expect(fullname('Vardenis', '    Pavardenis')).toBe('Vardenis Pavardenis');
})

test('fix lastname with spaces around', () => {
    expect(fullname('Vardenis', 'Pavardenis   ')).toBe('Vardenis Pavardenis');
})

// dar galime surasyti, kad skaiciu nebutu nei Varde nei Pavardeje