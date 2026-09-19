import type { GrammarEntry, GrammarLevelGroup } from '@/types'
import { grammarSoCap } from './so-cap'
import { grammarTrungCap } from './trung-cap'
import { grammarCaoCap } from './cao-cap'

export interface GrammarLevelMeta {
  level: GrammarLevelGroup
  titleVi: string
  descVi: string
  patterns: GrammarEntry[]
}

export const grammarByLevelList: GrammarLevelMeta[] = [
  {
    level: 'so-cap',
    titleVi: 'Sơ cấp',
    descVi: '62 mẫu ngữ pháp sơ cấp chia theo 14 nhóm chủ điểm — nền tảng để giao tiếp hàng ngày và đọc hiểu cơ bản.',
    patterns: grammarSoCap,
  },
  {
    level: 'trung-cap',
    titleVi: 'Trung cấp',
    descVi: '97 mẫu ngữ pháp trung cấp chia theo 24 nhóm chủ điểm — mở rộng khả năng diễn đạt với các cấu trúc điều kiện, phỏng đoán, trích dẫn gián tiếp.',
    patterns: grammarTrungCap,
  },
  {
    level: 'cao-cap',
    titleVi: 'Cao cấp',
    descVi: '112 mẫu ngữ pháp cao cấp chia theo 21 nhóm chủ điểm — các cấu trúc trang trọng, văn viết, sắc thái tinh tế dùng trong giao tiếp học thuật và chuyên nghiệp.',
    patterns: grammarCaoCap,
  },
]

export const grammarByLevelAll: GrammarEntry[] = grammarByLevelList.flatMap(l => l.patterns)
