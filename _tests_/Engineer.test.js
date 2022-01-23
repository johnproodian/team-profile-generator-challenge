
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Blob', '3', 'blob@fakemail.com', 'blobby');

    expect(engineer.name).toBe('Blob');
    expect(engineer.id).toBe('3');
    expect(engineer.email).toBe('blob@fakemail.com');
    expect(engineer.github).toBe('blobby');
})