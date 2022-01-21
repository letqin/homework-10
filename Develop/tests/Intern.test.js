const Intern = require("../lib/Intern");

test("create intern", () => {
    const intern = new Intern("Quinn", 42, 'letqin@gmail.com', "MSU");

    expect(intern.school).toEqual(expect.any(String));
});

test("school", () => {
    const intern = new Intern("Quinn", 42, 'letqin@gmail.com', "MSU");

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test("intern role", () => {
    const intern = new Intern("Quinn", 42, 'letqin@gmail.com');

    expect(intern.getRole()).toEqual("Intern");
});
