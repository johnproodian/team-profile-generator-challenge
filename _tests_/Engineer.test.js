
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Blob', '3', 'blob@fakemail.com', 'blobby');

    expect(engineer.name).toBe('Blob');
    expect(engineer.id).toBe('3');
    expect(engineer.email).toBe('blob@fakemail.com');
    expect(engineer.github).toBe('blobby');
});

test('gets github url', () => {
    const engineer = new Engineer('Blob', '3', 'blob@fakemail.com', 'blobby');

    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github));
})

test('gets engineer role', () => {
    const engineer = new Engineer('Blob', '3', 'blob@fakemail.com', 'blobby');

    expect(engineer.getRole()).toBe('Engineer');
})