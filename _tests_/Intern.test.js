const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Nobby', '4', 'nobby@fakemail.com', 'UT');

    expect(intern.name).toBe('Nobby');
    expect(intern.id).toBe('4');
    expect(intern.email).toBe('nobby@fakemail.com');
    expect(intern.school).toBe('UT');
});

test(`gets intern's role`, () => {
    const intern = new Intern('Nobby', '4', 'nobby@fakemail.com', 'UT');

    expect(intern.getRole()).toBe('Intern');
});

test(`gets intern's school`, () => {
    const intern = new Intern('Nobby', '4', 'nobby@fakemail.com', 'UT');

    expect(intern.getSchool()).toBe(intern.school);
})