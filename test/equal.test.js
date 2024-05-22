test("test toBe", () => {
    const name = "Fajrul"
    const hello = "Hello " + name

    expect(hello).toBe("Hello Fajrul")
})

test("test toEqual", () => {
    let person = { id: 1 }
    Object.assign(person, { name: "Fajrul" })

    expect(person).toEqual({ id: 1, name: "Fajrul" })
})