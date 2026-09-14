// useFlashcardSession is content-agnostic (operates purely on opaque cardId
// strings via session.ts/store.ts) — grammar review reuses it as-is rather
// than duplicating the same logic under a new name.
export { useFlashcardSession as useGrammarSession } from './useFlashcardSession'
export type { FlashcardSessionHook as GrammarSessionHook } from './useFlashcardSession'
