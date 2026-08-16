export interface GrammarEntry {
  id: string
  pattern: string
  meaningVi: string
  usageNotes: string
  examples: { ko: string; vi: string }[]
  commonMistakes: string[]
  level?: 'topik1' | 'topik2'
}

export const grammarTopik1: GrammarEntry[] = [
  {
    id: 'g-t1-01',
    pattern: 'N + 은/는',
    meaningVi: 'Trợ từ chủ đề — "thì, còn, về phần"',
    usageNotes: '은 sau phụ âm, 는 sau nguyên âm. Nhấn mạnh chủ đề của câu, hoặc đối lập giữa 2 vế.',
    examples: [
      { ko: '저는 학생이에요.', vi: 'Tôi (thì) là học sinh.' },
      { ko: '이것은 책이에요.', vi: 'Cái này (thì) là quyển sách.' },
      { ko: '오늘은 날씨가 좋아요.', vi: 'Hôm nay (thì) thời tiết đẹp.' },
    ],
    commonMistakes: [
      '사람은 → 사람는 ✗ (사람 kết thúc bằng phụ âm ㅁ → dùng 은)',
      'Nhầm 은/는 với 이/가 — 은/는 nhấn chủ đề, 이/가 nhấn chủ ngữ mới',
    ],
  },
  {
    id: 'g-t1-02',
    pattern: 'N + 이/가',
    meaningVi: 'Trợ từ chủ ngữ — giới thiệu thông tin mới',
    usageNotes: '이 sau phụ âm, 가 sau nguyên âm. Dùng khi giới thiệu chủ ngữ lần đầu hoặc trong câu hỏi "cái gì/ai".',
    examples: [
      { ko: '누가 왔어요?', vi: 'Ai đến vậy?' },
      { ko: '비가 와요.', vi: 'Trời (đang) mưa.' },
      { ko: '저기 고양이가 있어요.', vi: 'Ở kia có con mèo.' },
    ],
    commonMistakes: [
      'Dùng 이/가 thay 은/는 khi nói về chủ đề đã biết',
      '친구가 vs 친구는 — 친구가 좋아요 (bạn bè tốt) ≠ 친구는 좋아요 (còn bạn bè thì [tôi] thích)',
    ],
  },
  {
    id: 'g-t1-03',
    pattern: 'N + 을/를',
    meaningVi: 'Trợ từ tân ngữ — đánh dấu tân ngữ của động từ',
    usageNotes: '을 sau phụ âm, 를 sau nguyên âm.',
    examples: [
      { ko: '밥을 먹어요.', vi: 'Tôi ăn cơm.' },
      { ko: '한국어를 공부해요.', vi: 'Tôi học tiếng Hàn.' },
      { ko: '음악을 들어요.', vi: 'Tôi nghe nhạc.' },
    ],
    commonMistakes: [
      '음악를 ✗ → 음악을 ✓ (음악 kết thúc bằng ㄱ → 을)',
      'Trong hội thoại thân mật, 을/를 thường được bỏ qua — đây là bình thường',
    ],
  },
  {
    id: 'g-t1-04',
    pattern: 'N + 에',
    meaningVi: 'Trợ từ chỉ nơi chốn/thời gian — "ở, tại, vào, lúc"',
    usageNotes: 'Chỉ vị trí tĩnh (있다/없다) hoặc điểm đến (가다/오다). Cũng chỉ thời điểm.',
    examples: [
      { ko: '학교에 가요.', vi: 'Tôi đi (đến) trường.' },
      { ko: '집에 있어요.', vi: 'Tôi ở nhà.' },
      { ko: '9시에 일어나요.', vi: 'Tôi dậy lúc 9 giờ.' },
    ],
    commonMistakes: [
      'Nhầm 에 (điểm đến/vị trí tĩnh) với 에서 (nơi diễn ra hành động)',
      '학교에 공부해요 ✗ → 학교에서 공부해요 ✓',
    ],
  },
  {
    id: 'g-t1-05',
    pattern: 'N + 에서',
    meaningVi: 'Trợ từ nơi diễn ra hành động — "ở (tại nơi đó, làm gì đó)"',
    usageNotes: 'Khác với 에: 에서 nhấn mạnh hành động đang diễn ra tại địa điểm đó.',
    examples: [
      { ko: '도서관에서 공부해요.', vi: 'Tôi học (tại) thư viện.' },
      { ko: '식당에서 밥을 먹어요.', vi: 'Tôi ăn cơm (tại) nhà hàng.' },
      { ko: '어디에서 왔어요?', vi: 'Bạn đến từ đâu?' },
    ],
    commonMistakes: [
      '집에서 있어요 ✗ → 집에 있어요 ✓ (있다/없다 luôn dùng 에)',
    ],
  },
  {
    id: 'g-t1-06',
    pattern: 'V-아/어요',
    meaningVi: 'Thì hiện tại/tương lai — kết thúc câu lịch sự',
    usageNotes: '아요 sau nguyên âm ㅏ/ㅗ. 어요 sau các nguyên âm còn lại. 하다 → 해요.',
    examples: [
      { ko: '가요.', vi: 'Đi. / Tôi đi.' },
      { ko: '먹어요.', vi: 'Ăn. / Tôi ăn.' },
      { ko: '공부해요.', vi: 'Học. / Tôi học.' },
    ],
    commonMistakes: [
      '오다 → 와요 (không phải 오아요)',
      '되다 → 돼요 (không phải 되어요 trong văn nói)',
      'Nguyên âm cuối ㅡ bị xóa: 쓰다 → 써요',
    ],
  },
  {
    id: 'g-t1-07',
    pattern: 'V-았/었어요',
    meaningVi: 'Thì quá khứ — "đã làm"',
    usageNotes: '았어요 sau ㅏ/ㅗ. 었어요 sau các nguyên âm còn lại. 하다 → 했어요.',
    examples: [
      { ko: '밥을 먹었어요.', vi: 'Tôi đã ăn cơm.' },
      { ko: '한국에 갔어요.', vi: 'Tôi đã đi Hàn Quốc.' },
      { ko: '어제 공부했어요.', vi: 'Hôm qua tôi đã học.' },
    ],
    commonMistakes: [
      '오다 → 왔어요 (không phải 오았어요)',
      'Đừng thêm 었 hai lần: 갔었어요 = đã đi (và giờ không còn đó)',
    ],
  },
  {
    id: 'g-t1-08',
    pattern: 'N + 이에요/예요',
    meaningVi: 'Câu định nghĩa — "là N"',
    usageNotes: '이에요 sau phụ âm, 예요 sau nguyên âm.',
    examples: [
      { ko: '저는 학생이에요.', vi: 'Tôi là học sinh.' },
      { ko: '이것은 책이에요.', vi: 'Đây là quyển sách.' },
      { ko: '이름이 민준이에요.', vi: 'Tên là Minjun.' },
    ],
    commonMistakes: [
      '친구예요 ✓ (친구 kết thúc bằng nguyên âm ㅜ)',
      '학생이에요 ✓ (학생 kết thúc bằng phụ âm ㅇ)',
    ],
  },
  {
    id: 'g-t1-09',
    pattern: 'V + 고 싶어요',
    meaningVi: 'Muốn làm gì — "tôi muốn V"',
    usageNotes: 'Bỏ 다 của động từ, thêm 고 싶어요. Chỉ dùng cho chủ thể là người nói.',
    examples: [
      { ko: '한국에 가고 싶어요.', vi: 'Tôi muốn đi Hàn Quốc.' },
      { ko: '한국어를 잘하고 싶어요.', vi: 'Tôi muốn giỏi tiếng Hàn.' },
      { ko: '자고 싶어요.', vi: 'Tôi muốn ngủ.' },
    ],
    commonMistakes: [
      'Để nói về người khác: 가고 싶어해요 (không phải 가고 싶어요)',
    ],
  },
  {
    id: 'g-t1-10',
    pattern: 'V + -(으)세요',
    meaningVi: 'Mệnh lệnh lịch sự — "xin hãy V"',
    usageNotes: '으세요 sau phụ âm, 세요 sau nguyên âm. Cũng dùng để hỏi lịch sự.',
    examples: [
      { ko: '앉으세요.', vi: 'Xin mời ngồi.' },
      { ko: '이름을 쓰세요.', vi: 'Hãy viết tên của bạn.' },
      { ko: '뭐 드세요?', vi: 'Bạn dùng gì ạ? (trong nhà hàng)' },
    ],
    commonMistakes: [
      '먹다 → 드세요 (kính ngữ đặc biệt, không phải 먹으세요 khi nói với người lớn hơn)',
    ],
  },
  {
    id: 'g-t1-11',
    pattern: 'A/V + -지 않아요',
    meaningVi: 'Phủ định — "không A/V"',
    usageNotes: 'Bỏ 다, thêm 지 않아요. Tương đương với 안 + động từ nhưng trang trọng hơn.',
    examples: [
      { ko: '저는 커피를 마시지 않아요.', vi: 'Tôi không uống cà phê.' },
      { ko: '오늘은 학교에 가지 않아요.', vi: 'Hôm nay tôi không đến trường.' },
      { ko: '춥지 않아요.', vi: 'Không lạnh.' },
    ],
    commonMistakes: [
      '안 + 하다 → 안 해요 (không phải 안하지 않아요)',
      '안 + 공부하다 → 공부 안 해요 (안 đứng trước phần gốc động từ)',
    ],
  },
  {
    id: 'g-t1-12',
    pattern: 'V + -(으)ㄹ 거예요',
    meaningVi: 'Tương lai — "sẽ V, định V"',
    usageNotes: 'ㄹ 거예요 sau nguyên âm/ㄹ, 을 거예요 sau phụ âm khác ㄹ.',
    examples: [
      { ko: '내일 공부할 거예요.', vi: 'Ngày mai tôi sẽ học.' },
      { ko: '한국에 갈 거예요.', vi: 'Tôi sẽ đi Hàn Quốc.' },
      { ko: '비가 올 거예요.', vi: 'Trời sẽ mưa.' },
    ],
    commonMistakes: [
      'Đừng nhầm với -겠어요 (ý định/đoán tức thì): 먹겠어요 (tôi sẽ ăn — ngay bây giờ)',
    ],
  },
  {
    id: 'g-t1-13',
    pattern: 'V + -아/어서',
    meaningVi: 'Nguyên nhân — "vì..., nên..."',
    usageNotes: 'Nối hai vế: vế 1 là nguyên nhân, vế 2 là kết quả. Không dùng được với 주세요/-(으)세요.',
    examples: [
      { ko: '배가 고파서 밥을 먹었어요.', vi: 'Vì đói nên tôi đã ăn cơm.' },
      { ko: '한국어가 재미있어서 매일 공부해요.', vi: 'Vì tiếng Hàn thú vị nên tôi học mỗi ngày.' },
      { ko: '늦어서 죄송합니다.', vi: 'Xin lỗi vì đến muộn.' },
    ],
    commonMistakes: [
      '비가 와서 우산을 가져오세요 ✗ (không dùng 아/어서 với mệnh lệnh)',
      'Nhầm với -니까: -아/어서 không dùng được với mệnh lệnh/đề nghị',
    ],
  },
  {
    id: 'g-t1-14',
    pattern: 'V + -고',
    meaningVi: 'Liệt kê hành động — "và, rồi"',
    usageNotes: 'Nối nhiều hành động liên tiếp hoặc đồng thời. Thì do vế cuối quyết định.',
    examples: [
      { ko: '아침에 일어나고 밥을 먹어요.', vi: 'Buổi sáng tôi dậy rồi ăn cơm.' },
      { ko: '한국어도 배우고 일본어도 배워요.', vi: 'Tôi học cả tiếng Hàn lẫn tiếng Nhật.' },
      { ko: '키가 크고 잘생겼어요.', vi: 'Cao và đẹp trai.' },
    ],
    commonMistakes: [
      'Khác -아/어서: -고 không mang nghĩa nhân quả, chỉ liệt kê',
    ],
  },
  {
    id: 'g-t1-15',
    pattern: 'A + -(으)ㄴ N',
    meaningVi: 'Tính từ bổ nghĩa danh từ — "N ... là A"',
    usageNotes: 'Biến tính từ thành dạng bổ nghĩa. ㄴ sau nguyên âm, 은 sau phụ âm.',
    examples: [
      { ko: '예쁜 꽃이에요.', vi: 'Là bông hoa đẹp.' },
      { ko: '맛있는 음식을 먹어요.', vi: 'Tôi ăn đồ ăn ngon.' },
      { ko: '작은 고양이가 있어요.', vi: 'Có con mèo nhỏ.' },
    ],
    commonMistakes: [
      'Động từ dùng -(으)는 N (hiện tại): 먹는 음식, 가는 사람',
      '있다/없다 → 있는/없는 (không phải 있은/없은)',
    ],
  },
  {
    id: 'g-t1-16',
    pattern: 'N + 하고 / N + 과/와',
    meaningVi: '"và" nối danh từ',
    usageNotes: '하고 thân mật hơn, 과/와 trang trọng hơn (과 sau phụ âm, 와 sau nguyên âm).',
    examples: [
      { ko: '사과하고 배를 먹어요.', vi: 'Tôi ăn táo và lê.' },
      { ko: '친구와 같이 가요.', vi: 'Tôi đi cùng bạn.' },
      { ko: '커피과 주스 주세요.', vi: 'Cho tôi cà phê và nước ép.' },
    ],
    commonMistakes: [
      '커피과 ✗ → 커피와 ✓ (커피 kết thúc bằng nguyên âm)',
    ],
  },
  {
    id: 'g-t1-17',
    pattern: 'V + -(으)ㄹ 수 있어요/없어요',
    meaningVi: 'Khả năng — "có thể / không thể V"',
    usageNotes: 'Bỏ 다, thêm -(으)ㄹ 수 있어요. 없어요 là không thể.',
    examples: [
      { ko: '한국어를 할 수 있어요.', vi: 'Tôi có thể nói tiếng Hàn.' },
      { ko: '지금 갈 수 없어요.', vi: 'Bây giờ tôi không thể đi.' },
      { ko: '운전을 할 수 있어요?', vi: 'Bạn có thể lái xe không?' },
    ],
    commonMistakes: [
      'Khác -겠어요: 할 수 있어요 = năng lực/khả năng; -겠어요 = ý định',
    ],
  },
  {
    id: 'g-t1-18',
    pattern: 'V + -(으)면',
    meaningVi: 'Điều kiện — "nếu..., thì..."',
    usageNotes: '-(으)면 sau phụ âm, -면 sau nguyên âm hoặc ㄹ.',
    examples: [
      { ko: '열심히 공부하면 잘 할 수 있어요.', vi: 'Nếu học chăm chỉ thì bạn sẽ làm tốt.' },
      { ko: '시간이 있으면 같이 가요.', vi: 'Nếu có thời gian thì chúng ta cùng đi nhé.' },
      { ko: '비가 오면 집에 있을 거예요.', vi: 'Nếu trời mưa thì tôi sẽ ở nhà.' },
    ],
    commonMistakes: [
      'Đừng dùng thì tương lai trong vế 이면: 비가 올 거면 ✗ → 비가 오면 ✓',
    ],
  },
  {
    id: 'g-t1-19',
    pattern: 'V + -고 있어요',
    meaningVi: 'Tiếp diễn — "đang V"',
    usageNotes: 'Bỏ 다, thêm 고 있어요. Tương đương thì tiếp diễn trong tiếng Việt.',
    examples: [
      { ko: '지금 밥을 먹고 있어요.', vi: 'Tôi đang ăn cơm.' },
      { ko: '한국어를 공부하고 있어요.', vi: 'Tôi đang học tiếng Hàn.' },
      { ko: '뭐 하고 있어요?', vi: 'Bạn đang làm gì?' },
    ],
    commonMistakes: [
      '입다 (mặc) → 입고 있어요 = đang mặc / đã mặc và vẫn còn mặc',
      'Không phải lúc nào cũng tương đương "đang" trong tiếng Việt',
    ],
  },
  {
    id: 'g-t1-20',
    pattern: 'N + 도',
    meaningVi: 'Cũng, đều — "N cũng"',
    usageNotes: 'Thay thế 은/는, 이/가, 을/를. Thêm vào sau danh từ để nói "cũng".',
    examples: [
      { ko: '저도 한국어를 배워요.', vi: 'Tôi cũng học tiếng Hàn.' },
      { ko: '이것도 주세요.', vi: 'Cho tôi cái này nữa.' },
      { ko: '오늘도 날씨가 좋아요.', vi: 'Hôm nay thời tiết cũng đẹp.' },
    ],
    commonMistakes: [
      '저는도 ✗ → 저도 ✓ (도 thay thế 은/는, không cộng thêm)',
    ],
  },
]
