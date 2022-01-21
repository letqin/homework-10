const Engineer = require("../lib/Engineer");

test("create engineer", () => {
    const engineer = new Engineer("Quinn", 42, "letqin@gmail.com", "letqin");

    expect(engineer.github).toEqual(expect.any(String));
});

test("engineer github", () => {
    const engineer = new Engineer("Quinn", 42, "letqin@gmail.com", "letqin");

    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.email.toString()));
});

test("engineer role", () => {
    const engineer = new Engineer("Quinn", 42, "letqin@gmail.com", "letqin");

    expect(engineer.getRole()).toEqual("Engineer");
});