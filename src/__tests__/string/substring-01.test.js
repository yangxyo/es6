import substringGet from "../src/string/substringGet";

test('substringGet:00110011', () => {
  expect(substringGet("00110011")).toBe(6);
});
