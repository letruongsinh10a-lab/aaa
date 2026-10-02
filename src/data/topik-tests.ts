export interface TopikMockTest {
  id: number
  name: string
  level: string
  questions: number
  duration: number
  free: boolean
  attempts: number
}

export const mockTests: TopikMockTest[] = [
  { id: 1, name: 'TOPIK I — Đề số 1', level: 'TOPIK 1-2', questions: 70, duration: 100, free: true, attempts: 0 },
  { id: 2, name: 'TOPIK I — Đề số 2', level: 'TOPIK 1-2', questions: 70, duration: 100, free: true, attempts: 0 },
  { id: 3, name: 'TOPIK II — Đề số 1', level: 'TOPIK 3-6', questions: 104, duration: 180, free: false, attempts: 0 },
  { id: 4, name: 'TOPIK II — Đề số 2', level: 'TOPIK 3-6', questions: 104, duration: 180, free: false, attempts: 0 },
]
