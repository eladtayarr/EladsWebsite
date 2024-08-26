// helpers/codewonders-helpers/index.ts

// Example helper function to return a random item from an array
export function arrayRandomItem<T>(arr: T[]): T | undefined {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  // Add other helper functions as needed
  