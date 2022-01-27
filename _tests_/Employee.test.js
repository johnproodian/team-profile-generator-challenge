
const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('Rob', '2', 'Bob@fakemail.com');

    expect(employee.name).toBe('Rob');
    expect(employee.id).toBe('2');
    expect(employee.email).toBe('Bob@fakemail.com');

});

test("gets the employee's name", () => {
    const employee = new Employee('Rob', '2', 'Bob@fakemail.com');

    expect(employee.getName()).toEqual(employee.name);
});


test("gets the employee's id", () => {
    const employee = new Employee('Rob', '2', 'Bob@fakemail.com');

    expect(employee.getId()).toEqual(employee.id);
});

test("gets the employee's email", () => {
    const employee = new Employee('Rob', '2', 'Bob@fakemail.com');

    expect(employee.getEmail()).toEqual(employee.email);
    // want it to return 'Email: <a href="mailto:Bob@fakemail.com">Bob@fakemail.com</a>'
});

test("gets employee's role", () => {
    const employee = new Employee('Rob', '2', 'Bob@fakemail.com');

    expect(employee.getRole()).toBe(`Employee`);
});

