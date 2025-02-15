function printName(name: string | null | undefined): void {
  console.log((name ?? 'No name provided').toUpperCase());
}

printName(null); // Works fine
printName(undefined); // Works fine
