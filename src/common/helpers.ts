export const maskKey = (key: string): string => {
  return key
    .split('')
    .map((e, i) => (i < 6 || i > key.length - 4 ? e : '*'))
    .join('');
};

export const tryCatch = (block: () => void | Promise<void>, catchBlock: (e: Error) => void) => {
  try {
    const r = block();
    if (r instanceof Promise) {
      r.catch(catchBlock);
    }
  } catch (e) {
    catchBlock(e);
  }
};
