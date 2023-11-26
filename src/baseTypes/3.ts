let some: unknown;
some = "Text";
let str: string;
if (typeof some === "string") {
  str = some; // TypeScript розуміє, що some має тип string
}

export {};
