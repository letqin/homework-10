const Manager = require("../lib/Manager");

test("create manager", () => {
    const manager = new Manager("Quinn", 42, "letqin@gmail.com", 6);

    expect(manager.office).toEqual(expect.any(Number));
});

test("manager role", () => {
    const manager = new Manager("Quinn", 42, "letqin@gmail.com");

    expect(manager.getRole()).toEqual("Manager");
});
