export interface GrammarEntry {
  id: string
  pattern: string
  meaningVi: string
  usageNotes: string
  examples: { ko: string; vi: string }[]
  commonMistakes: string[]
  level?: 'topik1' | 'topik2' | 'topik3' | 'topik4' | 'topik5' | 'topik6'
}

export const grammarTopik2: GrammarEntry[] = [
  {
    id: 'g-t2-01',
    pattern: 'V + 기 위해서',
    meaningVi: 'Để làm gì đó — mục đích',
    usageNotes:
      'Bỏ 다, thêm 기 위해서. Diễn tả mục đích của hành động ở vế sau. Chủ ngữ hai vế phải giống nhau.',
    examples: [
      { ko: '건강을 위해서 매일 운동해요.', vi: 'Để có sức khỏe tốt, tôi tập thể dục mỗi ngày.' },
      { ko: '한국어를 배우기 위해서 한국에 왔어요.', vi: 'Tôi đến Hàn Quốc để học tiếng Hàn.' },
      { ko: '시험에 합격하기 위해서 열심히 공부했어요.', vi: 'Tôi đã học chăm chỉ để đậu kỳ thi.' },
    ],
    commonMistakes: [
      'Chủ ngữ hai vế phải trùng nhau: 친구를 만나기 위해서 제가 갔어요 ✓, không thể hai người khác nhau',
      'Nhầm với -려고: 기 위해서 trang trọng hơn, thường dùng khi danh từ đi trước (건강을 위해서)',
      '-기 위해 vs -기 위해서: cả hai đều đúng, 위해서 thân mật hơn một chút',
    ],
    level: 'topik2',
  },
  {
    id: 'g-t2-02',
    pattern: 'V/A + 는/은/ㄴ 것 같다',
    meaningVi: 'Có vẻ, dường như — phỏng đoán, cảm giác',
    usageNotes:
      'Hiện tại: 동사 + 는 것 같다. Quá khứ: 동사 + (으)ㄴ 것 같다. Tính từ: 형용사 + (으)ㄴ 것 같다. Diễn tả phỏng đoán hoặc ấn tượng chủ quan.',
    examples: [
      { ko: '오늘 날씨가 추운 것 같아요.', vi: 'Hôm nay có vẻ lạnh.' },
      { ko: '그 사람은 한국 사람인 것 같아요.', vi: 'Người đó có vẻ là người Hàn Quốc.' },
      { ko: '이미 밥을 먹은 것 같아요.', vi: 'Có vẻ như anh ấy đã ăn cơm rồi.' },
    ],
    commonMistakes: [
      'Tính từ 현재: 춥다 → 추운 것 같다 (không phải 춥는 것 같다)',
      'Động từ 현재: 먹다 → 먹는 것 같다 (dùng 는, không phải 은/ㄴ)',
      'Dễ nhầm thì hiện tại và quá khứ: 먹는 것 같다 (đang ăn/thường ăn) vs 먹은 것 같다 (đã ăn)',
    ],
    level: 'topik2',
  },
  {
    id: 'g-t2-03',
    pattern: 'V + 아/어 보다',
    meaningVi: 'Thử làm gì — "thử V xem"',
    usageNotes:
      'Bỏ 다, chia 아/어 rồi thêm 보다. Diễn tả việc thử làm một điều gì đó lần đầu hoặc để xem kết quả.',
    examples: [
      { ko: '이 음식을 먹어 보세요.', vi: 'Hãy thử ăn món này xem.' },
      { ko: '한국 드라마를 봐 봤어요.', vi: 'Tôi đã thử xem phim Hàn Quốc rồi.' },
      { ko: '한번 입어 보세요.', vi: 'Hãy thử mặc một lần xem.' },
    ],
    commonMistakes: [
      '봐 봤어요 nghe lạ nhưng hoàn toàn đúng ngữ pháp (보다 + 아 + 봤어요)',
      'Nhầm với -아/어 보이다 (trông có vẻ): 맛있어 보여요 (trông ngon) ≠ 먹어 봐요 (thử ăn)',
      'Quá khứ của thử: 먹어 봤어요 (đã thử ăn) — không thêm 었 hai lần',
    ],
    level: 'topik2',
  },
  {
    id: 'g-t2-04',
    pattern: 'V + 는/(으)ㄴ/(으)ㄹ 것',
    meaningVi: 'Danh từ hóa động từ — "việc V, điều V"',
    usageNotes:
      'Biến động từ thành danh từ. Hiện tại: -는 것, Quá khứ: -(으)ㄴ 것, Tương lai/phỏng đoán: -(으)ㄹ 것.',
    examples: [
      { ko: '운동하는 것이 건강에 좋아요.', vi: 'Việc tập thể dục tốt cho sức khỏe.' },
      { ko: '제가 제일 좋아하는 것은 음악이에요.', vi: 'Điều tôi thích nhất là âm nhạc.' },
      { ko: '그 사람이 올 것 같아요.', vi: 'Có vẻ như người đó sẽ đến.' },
    ],
    commonMistakes: [
      'Nhầm -는 것 với -기: 수영하는 것을 좋아해요 = 수영하기를 좋아해요 (tương đương nhau)',
      'Tính từ không dùng -는: 예쁜 것 ✓, không phải 예쁘는 것',
    ],
    level: 'topik2',
  },
  {
    id: 'g-t2-05',
    pattern: 'V + 고 싶어하다',
    meaningVi: 'Người khác muốn làm gì — "anh ấy/cô ấy muốn V"',
    usageNotes:
      'Dùng khi chủ ngữ là người thứ ba (không phải người nói). Khác với -고 싶다 chỉ dùng cho ngôi thứ nhất.',
    examples: [
      { ko: '동생이 강아지를 갖고 싶어해요.', vi: 'Em tôi muốn có con chó.' },
      { ko: '친구가 한국에 가고 싶어해요.', vi: 'Bạn tôi muốn đi Hàn Quốc.' },
      { ko: '아이들이 아이스크림을 먹고 싶어해요.', vi: 'Các em nhỏ muốn ăn kem.' },
    ],
    commonMistakes: [
      '친구가 가고 싶어요 ✗ (nghe như chính người nói muốn đi) → 친구가 가고 싶어해요 ✓',
      'Trong câu hỏi trực tiếp với người đối diện: 가고 싶어요? ✓ (hỏi "bạn có muốn đi không?")',
    ],
    level: 'topik2',
  },
  {
    id: 'g-t2-06',
    pattern: 'A/V + 지만',
    meaningVi: 'Tuy nhiên, nhưng — đối lập giữa hai vế',
    usageNotes:
      'Nối hai vế có nội dung đối lập hoặc tương phản. Không bị giới hạn về chủ ngữ giống nhau như -아/어서.',
    examples: [
      { ko: '한국어가 어렵지만 재미있어요.', vi: 'Tiếng Hàn khó nhưng thú vị.' },
      { ko: '비가 오지만 나가고 싶어요.', vi: 'Trời mưa nhưng tôi vẫn muốn ra ngoài.' },
      { ko: '돈이 없지만 행복해요.', vi: 'Không có tiền nhưng hạnh phúc.' },
    ],
    commonMistakes: [
      'Nhầm với -는데: -지만 đối lập rõ ràng hơn; -는데 bối cảnh/mềm hơn',
      '-지만 không giới hạn chủ ngữ, hai vế có thể có chủ ngữ khác nhau',
    ],
    level: 'topik2',
  },
  {
    id: 'g-t2-07',
    pattern: 'V/A + -(으)니까',
    meaningVi: 'Vì, bởi vì — nhấn mạnh lý do (dùng được với mệnh lệnh)',
    usageNotes:
      '-(으)니까 dùng được với mệnh lệnh và đề nghị, khác với -아/어서. Dùng khi người nói tự biện hộ hoặc giải thích lý do của mình.',
    examples: [
      { ko: '비가 오니까 우산을 가져가세요.', vi: 'Trời mưa nên hãy mang ô theo.' },
      { ko: '피곤하니까 좀 쉬세요.', vi: 'Mệt rồi thì nghỉ đi.' },
      { ko: '시간이 없으니까 빨리 합시다.', vi: 'Không có thời gian nên làm nhanh thôi.' },
    ],
    commonMistakes: [
      '비가 와서 우산을 가져가세요 ✗ (-아/어서 không dùng với mệnh lệnh)',
      'Trong văn viết trang trọng, nên dùng -기 때문에 thay cho -(으)니까',
    ],
    level: 'topik2',
  },
  {
    id: 'g-t2-08',
    pattern: 'V + 아/어야 하다/되다',
    meaningVi: 'Phải làm gì — nghĩa vụ, sự cần thiết',
    usageNotes:
      'Bỏ 다, chia 아/어 rồi thêm 야 하다 hoặc 야 되다. Cả hai đều đúng, 야 되다 nhẹ nhàng hơn một chút.',
    examples: [
      { ko: '약을 매일 먹어야 해요.', vi: 'Tôi phải uống thuốc mỗi ngày.' },
      { ko: '내일까지 숙제를 해야 돼요.', vi: 'Tôi phải làm bài tập trước ngày mai.' },
      { ko: '건강을 위해서 담배를 끊어야 해요.', vi: 'Để có sức khỏe tốt, bạn phải bỏ thuốc lá.' },
    ],
    commonMistakes: [
      '자야 해요 (phải ngủ) — 자다의 아 형: 자 + 아야 → 자야',
      'Phủ định "không cần phải": -지 않아도 돼요 (không phải -야 안 해요)',
    ],
    level: 'topik2',
  },
  {
    id: 'g-t2-09',
    pattern: 'V/A + -지 않아도 되다',
    meaningVi: 'Không cần phải — không bắt buộc',
    usageNotes:
      'Phủ định của -아/어야 하다. Diễn tả điều gì đó là không bắt buộc, không nhất thiết phải làm.',
    examples: [
      { ko: '오늘은 오지 않아도 돼요.', vi: 'Hôm nay bạn không cần đến.' },
      { ko: '이 음식은 안 먹어도 돼요.', vi: 'Món này bạn không cần ăn cũng được.' },
      { ko: '걱정하지 않아도 돼요.', vi: 'Bạn không cần lo lắng đâu.' },
    ],
    commonMistakes: [
      'Nhầm với -면 안 돼요 (không được phép): 오지 않아도 돼요 (không cần đến) ≠ 오면 안 돼요 (không được đến)',
    ],
    level: 'topik2',
  },
  {
    id: 'g-t2-10',
    pattern: 'V/A + -(으)면 안 되다',
    meaningVi: 'Không được làm — cấm, không cho phép',
    usageNotes:
      'Diễn tả điều bị cấm hoặc không được phép. Ngược với -아/어야 하다 (phải làm).',
    examples: [
      { ko: '여기서 담배를 피우면 안 돼요.', vi: 'Không được hút thuốc ở đây.' },
      { ko: '수업 중에 전화하면 안 돼요.', vi: 'Không được gọi điện trong giờ học.' },
      { ko: '음식을 남기면 안 돼요.', vi: 'Không được để thừa đồ ăn.' },
    ],
    commonMistakes: [
      'Nhầm với -지 않아도 돼요: -(으)면 안 돼요 = cấm, -지 않아도 돼요 = không bắt buộc',
    ],
    level: 'topik2',
  },
  {
    id: 'g-t2-11',
    pattern: 'N + 때문에',
    meaningVi: 'Vì, do — nguyên nhân (dùng với danh từ)',
    usageNotes:
      'Danh từ + 때문에 = vì (danh từ). Động từ/tính từ: -기 때문에. Trang trọng hơn -아/어서, dùng nhiều trong văn viết.',
    examples: [
      { ko: '교통 때문에 늦었어요.', vi: 'Tôi đến muộn vì kẹt xe.' },
      { ko: '그 사람 때문에 힘들어요.', vi: 'Tôi khó chịu vì người đó.' },
      { ko: '일 때문에 여행을 못 갔어요.', vi: 'Vì công việc tôi không thể đi du lịch.' },
    ],
    commonMistakes: [
      'Động từ: 비가 오기 때문에 (không phải 비가 오 때문에)',
      '때문에 có thể có sắc thái đổ lỗi; khi muốn trung lập hơn dùng -아/어서',
    ],
    level: 'topik2',
  },
  {
    id: 'g-t2-12',
    pattern: 'V + -(으)ㄹ 때',
    meaningVi: 'Khi làm gì — thời điểm',
    usageNotes:
      'Diễn tả thời điểm xảy ra hành động hoặc trạng thái. Khác với -고 나서 (sau khi): -(으)ㄹ 때 nhấn vào thời điểm.',
    examples: [
      { ko: '한국에 갈 때 선물을 사 왔어요.', vi: 'Khi đi Hàn Quốc, tôi đã mua quà về.' },
      { ko: '심심할 때 보통 뭐 해요?', vi: 'Khi buồn chán thì bạn thường làm gì?' },
      { ko: '어릴 때 한국에 살았어요.', vi: 'Khi còn nhỏ tôi đã sống ở Hàn Quốc.' },
    ],
    commonMistakes: [
      '-ㄹ 때 (hành động chưa xảy ra/tương lai) vs -(으)ㄴ 후에 (sau khi hành động đã xong)',
      '먹을 때 (trong khi/lúc đang ăn) vs 먹고 나서 (sau khi ăn xong)',
    ],
    level: 'topik2',
  },
  {
    id: 'g-t2-13',
    pattern: 'V + -기 전에',
    meaningVi: 'Trước khi làm gì',
    usageNotes:
      'Bỏ 다, thêm 기 전에. Diễn tả hành động xảy ra trước hành động kia. Thì ở vế 기 전에 không đổi theo ngữ cảnh.',
    examples: [
      { ko: '자기 전에 이를 닦아요.', vi: 'Trước khi ngủ tôi đánh răng.' },
      { ko: '밥 먹기 전에 손을 씻어야 해요.', vi: 'Trước khi ăn cơm phải rửa tay.' },
      { ko: '한국에 오기 전에 한국어를 공부했어요.', vi: 'Trước khi đến Hàn Quốc tôi đã học tiếng Hàn.' },
    ],
    commonMistakes: [
      '먹기 전에 ✓ (không chia thì ở vế này): 먹었기 전에 ✗',
      'Nhầm với -고 나서 (sau khi): 먹기 전에 (trước khi ăn) vs 먹고 나서 (sau khi ăn)',
    ],
    level: 'topik2',
  },
  {
    id: 'g-t2-14',
    pattern: 'V + -고 나서 / -(으)ㄴ 후에',
    meaningVi: 'Sau khi làm xong — trình tự thời gian',
    usageNotes:
      '-고 나서 nhấn vào việc đã hoàn thành trước khi làm việc tiếp theo. -(으)ㄴ 후에 trang trọng hơn, dùng nhiều trong văn viết.',
    examples: [
      { ko: '밥을 먹고 나서 산책했어요.', vi: 'Sau khi ăn cơm xong tôi đi dạo.' },
      { ko: '숙제를 한 후에 게임을 할 거예요.', vi: 'Sau khi làm bài tập xong, tôi sẽ chơi game.' },
      { ko: '졸업한 후에 취직할 계획이에요.', vi: 'Tôi có kế hoạch đi làm sau khi tốt nghiệp.' },
    ],
    commonMistakes: [
      '먹고 나서 ✓ (sau khi ăn xong) vs 먹을 때 (trong khi/lúc ăn)',
      '-(으)ㄴ 후에 chỉ dùng với động từ, không dùng với tính từ',
    ],
    level: 'topik2',
  },
  {
    id: 'g-t2-15',
    pattern: 'V + -(으)면서',
    meaningVi: 'Trong khi, vừa...vừa — hai hành động đồng thời',
    usageNotes:
      'Hai hành động xảy ra cùng lúc, chủ ngữ phải giống nhau. Khác -고: -면서 nhấn tính đồng thời.',
    examples: [
      { ko: '음악을 들으면서 공부해요.', vi: 'Tôi vừa nghe nhạc vừa học bài.' },
      { ko: '걸으면서 전화했어요.', vi: 'Tôi vừa đi bộ vừa nói điện thoại.' },
      { ko: '웃으면서 이야기했어요.', vi: 'Cô ấy vừa cười vừa kể chuyện.' },
    ],
    commonMistakes: [
      'Chủ ngữ phải giống nhau: 나는 TV를 보면서 동생은 공부했어요 ✗',
      '-면서 không thể dùng với động từ ngược chiều (예: 앉으면서 서다 ✗)',
    ],
    level: 'topik2',
  },
  {
    id: 'g-t2-16',
    pattern: 'V/A + -아/어지다',
    meaningVi: 'Trở nên, dần dần — sự thay đổi trạng thái',
    usageNotes:
      'Diễn tả sự thay đổi dần dần. Tính từ + 아/어지다 = trở nên (tính từ). Động từ + 아/어지다 = bị (ai đó làm).',
    examples: [
      { ko: '날씨가 따뜻해졌어요.', vi: 'Thời tiết trở nên ấm hơn rồi.' },
      { ko: '한국어 실력이 좋아지고 있어요.', vi: 'Trình độ tiếng Hàn của tôi đang cải thiện.' },
      { ko: '요즘 바빠졌어요.', vi: 'Dạo này tôi trở nên bận rộn hơn.' },
    ],
    commonMistakes: [
      'Tính từ không dùng 됩니다 để nói về sự thay đổi: 좋아집니다 ✓, không phải 좋습니다 (khi muốn nói "trở nên tốt")',
      'Khác -게 되다: -아/어지다 nhấn thay đổi tự nhiên; -게 되다 nhấn kết quả của hoàn cảnh',
    ],
    level: 'topik2',
  },
  {
    id: 'g-t2-17',
    pattern: 'V + -게 되다',
    meaningVi: 'Dẫn đến việc, trở thành — kết quả ngoài ý muốn hoặc do hoàn cảnh',
    usageNotes:
      'Diễn tả một kết quả xảy ra do hoàn cảnh, không phải ý định ban đầu của người nói. Thường dùng khi giải thích câu chuyện của mình.',
    examples: [
      { ko: '우연히 그 사람을 만나게 됐어요.', vi: 'Tôi đã tình cờ gặp người đó.' },
      { ko: '한국어를 공부하게 됐어요.', vi: 'Tôi đã bắt đầu học tiếng Hàn (do hoàn cảnh dẫn đến).' },
      { ko: '결국 이 회사에서 일하게 됐어요.', vi: 'Cuối cùng tôi đã (trở thành người) làm ở công ty này.' },
    ],
    commonMistakes: [
      'Nhầm với -(으)ㄹ 거예요: -게 됐어요 = đã trở thành (quá khứ), -(으)ㄹ 거예요 = sẽ (tương lai)',
      '-게 되다 thường mang nghĩa bị động nhẹ, không phải chủ ý hoàn toàn',
    ],
    level: 'topik2',
  },
  {
    id: 'g-t2-18',
    pattern: 'V/A + -(으)ㄹ 것이다',
    meaningVi: 'Sẽ, chắc là — phỏng đoán hoặc kế hoạch (văn viết)',
    usageNotes:
      'Trang trọng hơn -(으)ㄹ 거예요. Dùng nhiều trong văn viết, báo chí, thông báo. Cũng dùng để phỏng đoán chắc chắn.',
    examples: [
      { ko: '내일 비가 올 것입니다.', vi: 'Ngày mai trời sẽ mưa.' },
      { ko: '이 방법이 더 효과적일 것이다.', vi: 'Phương pháp này chắc sẽ hiệu quả hơn.' },
      { ko: '그는 분명히 성공할 것이다.', vi: 'Anh ấy nhất định sẽ thành công.' },
    ],
    commonMistakes: [
      'Trong hội thoại hàng ngày: 갈 거예요 tự nhiên hơn 갈 것이에요',
      'Khi phỏng đoán về người khác: -겠어요 (đoán tức thì) vs -(으)ㄹ 것이다 (đoán có suy nghĩ)',
    ],
    level: 'topik2',
  },
  {
    id: 'g-t2-19',
    pattern: 'V/A + -네요',
    meaningVi: 'Ồ thật à, nhỉ — phát hiện, cảm thán mới nhận ra',
    usageNotes:
      'Diễn tả cảm xúc khi vừa phát hiện ra điều gì đó hoặc khi thông tin trái với kỳ vọng. Không dùng cho sự việc người nói biết từ trước.',
    examples: [
      { ko: '오늘 날씨가 정말 좋네요!', vi: 'Ồ hôm nay thời tiết thật đẹp nhỉ!' },
      { ko: '한국어를 정말 잘하시네요.', vi: 'Ồ bạn nói tiếng Hàn giỏi thật nhỉ.' },
      { ko: '벌써 12시가 됐네요.', vi: 'Ồ đã 12 giờ rồi nhỉ.' },
    ],
    commonMistakes: [
      'Không dùng cho sự việc đã biết từ trước: 오늘 월요일이네요 ✗ (nếu bạn biết ngay từ đầu)',
      'Nhầm với -군요 (cũng mang nghĩa phát hiện nhưng ít thông dụng hơn trong văn nói)',
    ],
    level: 'topik2',
  },
  {
    id: 'g-t2-20',
    pattern: 'V/A + -(으)ㄹ까요?',
    meaningVi: 'Có lẽ...không? / Chúng ta...nhé? — đề nghị hoặc phỏng đoán',
    usageNotes:
      'Hai nghĩa: (1) Đề nghị cùng làm gì (우리 같이 갈까요? = Chúng ta cùng đi nhé?); (2) Phỏng đoán/tự hỏi (비가 올까요? = Liệu trời có mưa không?).',
    examples: [
      { ko: '우리 같이 점심 먹을까요?', vi: 'Chúng ta cùng ăn trưa nhé?' },
      { ko: '내일 날씨가 좋을까요?', vi: 'Ngày mai thời tiết có đẹp không nhỉ?' },
      { ko: '창문을 닫을까요?', vi: 'Để tôi đóng cửa sổ nhé?' },
    ],
    commonMistakes: [
      'Nhầm với -ㄹ 거예요? (hỏi về kế hoạch): 갈까요? (đề nghị) vs 갈 거예요? (bạn có định đi không?)',
      'Phỏng đoán: chủ ngữ thường là sự vật/hiện tượng, không phải người nói',
    ],
    level: 'topik2',
  },
  {
    id: 'g-t2-21',
    pattern: 'V + 아/어 줄 수 있어요?',
    meaningVi: 'Nhờ ai đó làm gì giúp — "bạn có thể...giúp tôi không?"',
    usageNotes:
      'Kết hợp -아/어 주다 (làm giúp) với -(으)ㄹ 수 있다 (có thể). Lịch sự hơn khi nhờ vả.',
    examples: [
      { ko: '이 단어를 설명해 줄 수 있어요?', vi: 'Bạn có thể giải thích từ này cho tôi không?' },
      { ko: '사진 좀 찍어 줄 수 있어요?', vi: 'Bạn có thể chụp ảnh giúp tôi không?' },
      { ko: '여기서 기다려 줄 수 있어요?', vi: 'Bạn có thể đợi tôi ở đây không?' },
    ],
    commonMistakes: [
      'Lịch sự hơn: -아/어 주시겠어요? (còn lịch sự hơn với người lớn tuổi hơn)',
      '주다 → 드리다 khi người nhận là bậc trên: 도와 드릴 수 있어요? (tôi có thể giúp được bạn không?)',
    ],
    level: 'topik2',
  },
  {
    id: 'g-t2-22',
    pattern: 'N + (이)라서 / V/A + 아/어서',
    meaningVi: 'Vì là N / vì V/A — nguyên nhân tự nhiên',
    usageNotes:
      '(이)라서 dùng sau danh từ (이라서 sau phụ âm, 라서 sau nguyên âm). Diễn tả lý do khách quan, tự nhiên.',
    examples: [
      { ko: '학생이라서 돈이 없어요.', vi: 'Vì là học sinh nên không có tiền.' },
      { ko: '주말이라서 길이 막혀요.', vi: 'Vì là cuối tuần nên đường tắc.' },
      { ko: '처음이라서 잘 모르겠어요.', vi: 'Vì là lần đầu nên tôi không biết lắm.' },
    ],
    commonMistakes: [
      '학생라서 ✗ → 학생이라서 ✓ (학생 kết thúc bằng phụ âm ㅇ)',
      'Với động từ/tính từ phải dùng -아/어서 không phải -(이)라서',
    ],
    level: 'topik2',
  },
  {
    id: 'g-t2-23',
    pattern: 'V + -(으)려고',
    meaningVi: 'Có ý định, định làm — mục đích (chủ ngữ giống nhau)',
    usageNotes:
      'Diễn tả ý định của người nói hoặc chủ ngữ. Hai vế phải có chủ ngữ giống nhau. Thân mật hơn -기 위해서.',
    examples: [
      { ko: '한국어를 배우려고 학원에 다녀요.', vi: 'Tôi đi học thêm để học tiếng Hàn.' },
      { ko: '뭘 먹으려고 해요?', vi: 'Bạn định ăn gì vậy?' },
      { ko: '집을 사려고 돈을 모아요.', vi: 'Tôi đang tiết kiệm tiền để mua nhà.' },
    ],
    commonMistakes: [
      'Chủ ngữ hai vế phải trùng: 친구를 만나려고 나는 갔어요 ✓, nhưng không thể hai chủ ngữ khác nhau',
      '-(으)려고 하다: hành động sắp xảy ra hoặc đang cố thực hiện (의도 + 시도)',
    ],
    level: 'topik2',
  },
  {
    id: 'g-t2-24',
    pattern: 'A/V + -(으)ㄴ/는데',
    meaningVi: 'Nhưng, mà, trong khi đó — bối cảnh hoặc tương phản nhẹ',
    usageNotes:
      'Đa năng: (1) Cung cấp bối cảnh cho vế sau; (2) Tương phản nhẹ; (3) Dẫn vào câu hỏi/yêu cầu. Mềm hơn -지만.',
    examples: [
      { ko: '비가 오는데 우산이 없어요.', vi: 'Trời mưa mà tôi không có ô.' },
      { ko: '배가 고픈데 뭐 먹을까요?', vi: 'Tôi đang đói, chúng ta ăn gì nhỉ?' },
      { ko: '이 옷이 예쁜데 좀 비싸요.', vi: 'Bộ quần áo này đẹp nhưng hơi đắt.' },
    ],
    commonMistakes: [
      'Tính từ hiện tại: -은데/-ㄴ데 (예쁜데); Động từ hiện tại: -는데 (가는데)',
      'Quá khứ luôn dùng -았는데/었는데: 갔는데, 먹었는데',
    ],
    level: 'topik2',
  },
  {
    id: 'g-t2-25',
    pattern: 'V + -아/어 보이다',
    meaningVi: 'Trông có vẻ, nhìn có vẻ — ấn tượng bên ngoài',
    usageNotes:
      'Diễn tả ấn tượng trực quan của người nói về điều gì đó nhìn thấy. Khác -는 것 같다 (đoán từ thông tin).',
    examples: [
      { ko: '이 음식은 맛있어 보여요.', vi: 'Món ăn này trông ngon quá.' },
      { ko: '오늘 피곤해 보여요. 괜찮아요?', vi: 'Hôm nay bạn trông có vẻ mệt. Bạn có ổn không?' },
      { ko: '이 가방은 비싸 보여요.', vi: 'Cái túi này trông có vẻ đắt tiền.' },
    ],
    commonMistakes: [
      'Nhầm với -아/어 보다 (thử làm): 맛있어 보여요 (trông ngon) ≠ 먹어 봐요 (thử ăn đi)',
      '-아/어 보이다 chỉ dùng với ấn tượng thị giác (mắt thấy), không dùng cho nghe/ngửi',
    ],
    level: 'topik2',
  },
]
