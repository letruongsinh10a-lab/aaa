import type { ListeningDialogue, ListeningLevel } from '@/types'
import { listeningSoCap } from './so-cap'

export interface ListeningLevelMeta {
  level: ListeningLevel
  titleVi: string
  descVi: string
  dialogues: ListeningDialogue[]
}

export const listeningByLevelList: ListeningLevelMeta[] = [
  {
    level: 'so-cap',
    titleVi: 'Sơ cấp',
    descVi: '5 hội thoại đời thường ngắn — nghe rồi nhại lại theo giọng đọc để luyện phản xạ.',
    dialogues: listeningSoCap,
  },
]

export const listeningByLevelAll: ListeningDialogue[] = listeningByLevelList.flatMap(l => l.dialogues)
