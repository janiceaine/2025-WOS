import { ArrayQueue } from "../classes/array-queue.js";

/**
 * Simulates the Hot Potato game (a Josephus-style elimination game).
 * A group of players stand in a circle, passing the "potato" around.
 * After `k` passes, the player holding the potato is eliminated.
 * This continues until only one player remains.
 *
 * @param {string[]} names - The list of player names participating in the game.
 * @param {number} k - The number of passes before a player is eliminated.
 * @returns {string} The name of the winning player who remains at the end.
 */
function hotPotato(names, k) {
  const queue = new ArrayQueue();
  for (let name of names) {
    queue.enqueue(name);
  }
  while (queue.size() > 1) {
    for (let i = 0; i < k; i++) {
      let person = queue.dequeue();
      queue.enqueue(person);
    }
    queue.dequeue();
  }
  return queue.dequeue();
}

export { hotPotato };
