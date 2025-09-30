import { HashTable } from "../hash-table";

function firstNonRepeatingChar(
  str,
  { ignoreWhitespace = true, caseInsensitive = true } = {}
) {
  // TODO: Implement firstNonRepeatingChar using HashTable
  // 1. Create a new HashTable sized relative to the string length.
  // 2. First pass: loop through characters in the string
  //    a. Apply options: lowercase if caseInsensitive, skip if ignoreWhitespace and it's whitespace.
  //    b. Count frequency by inserting/updating counts in the HashTable.
  // 3. Second pass: loop through characters again
  //    a. Apply the same normalization rules.
  //    b. Return the first character whose count in the table is 1.
  // 4. If none found, return null.

  const table = new HashTable(32);

  for (let ch of str) {
    if (caseInsensitive) ch = ch.toLowerCase();
    if (ignoreWhitespace && /\s/.test(ch)) continue;

    if (table.has(ch)) {
      const current = table.get(ch);
      table.set(ch, current + 1);
    } else {
      table.set(ch, 1);
    }
  }

  for (let ch of str) {
    if (caseInsensitive) ch = ch.toLowerCase();
    if (ignoreWhitespace && /\s/.test(ch)) continue;

    if (table.get(ch) === 1) return ch;
  }
  return null;
}

export { firstNonRepeatingChar };
