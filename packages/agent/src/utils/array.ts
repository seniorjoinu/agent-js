/**
 * Removes an element from an array and signals if the element was found and removed
 * @param arr - an array to remove from
 * @param element - an element to remove (indexOf is used under the hood)
 */
export function removeElement<T>(arr: T[], element: T): boolean {
  const index = arr.indexOf(element);
  if (index > -1) {
    arr.splice(index, 1);
    return true; // Element was found and removed
  }
  return false; // Element was not found
}
