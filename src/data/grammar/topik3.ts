export interface GrammarEntry {
  id: string
  pattern: string
  meaningVi: string
  usageNotes: string
  examples: { ko: string; vi: string }[]
  commonMistakes: string[]
  level?: 'topik1' | 'topik2' | 'topik3' | 'topik4' | 'topik5' | 'topik6'
}

export const grammarTopik3: GrammarEntry[] = [
  {
    id: 'g-t3-01',
    pattern: 'N/V + 에도 불구하고',
    meaningVi: 'Mặc dù, bất chấp — tương phản mạnh',
    usageNotes:
      'Danh từ + 에도 불구하고 hoặc V/A + -(으)ㅁ에도 불구하고. Nhấn mạnh rằng vế sau xảy ra bất chấp hoàn cảnh bất lợi ở vế trước. Trang trọng, thường dùng trong văn viết.',
    examples: [
      { ko: '어려운 상황에도 불구하고 끝까지 포기하지 않았다.', vi: 'Mặc dù hoàn cảnh khó khăn, anh ấy không bỏ cuộc đến cùng.' },
      { ko: '비가 오는 날씨에도 불구하고 많은 사람들이 모였다.', vi: 'Bất chấp thời tiết mưa, rất nhiều người đã tập hợp lại.' },
      { ko: '나이에도 불구하고 그는 젊은이처럼 활발하다.', vi: 'Bất chấp tuổi tác, ông ấy vẫn hoạt bát như người trẻ.' },
    ],
    commonMistakes: [
      'Dùng danh từ: N + 에도 불구하고; dùng động từ: V + -(으)ㅁ에도 불구하고 — không thể bỏ qua -(으)ㅁ',
      'Nhầm với -지만: 에도 불구하고 nhấn mạnh hơn, trang trọng hơn, dùng khi hoàn cảnh rất bất lợi',
      'Không dùng trong văn nói thân mật — thay bằng -아/어도 hoặc -지만',
    ],
    level: 'topik3',
  },
  {
    id: 'g-t3-02',
    pattern: 'V/A + -(으)ㄹ수록',
    meaningVi: 'Càng...càng — tỷ lệ thuận',
    usageNotes:
      'Diễn tả mối quan hệ tỷ lệ thuận: khi A tăng/thay đổi thì B cũng tăng/thay đổi theo. Thường đi cùng 더 (hơn nữa) ở vế sau.',
    examples: [
      { ko: '공부할수록 모르는 것이 많아진다.', vi: 'Càng học càng thấy có nhiều điều chưa biết.' },
      { ko: '한국에 있을수록 한국 문화가 좋아진다.', vi: 'Càng ở Hàn Quốc lâu càng yêu thêm văn hóa Hàn.' },
      { ko: '사람은 나이가 들수록 지혜로워진다.', vi: 'Con người càng lớn tuổi càng trở nên khôn ngoan.' },
    ],
    commonMistakes: [
      '어려울수록 ✓ (어렵다 → 어려운 → 어려울수록); quy tắc bất quy tắc vẫn áp dụng',
      'Câu cấu trúc điển hình: A-(으)ㄹ수록 B + 더 + (tính từ/động từ): 갈수록 더 좋아진다',
      '갈수록 (ngày càng) là biểu thức cố định, dùng độc lập: 갈수록 힘들어진다 (ngày càng khó)',
    ],
    level: 'topik3',
  },
  {
    id: 'g-t3-03',
    pattern: 'V/A + 는 반면에',
    meaningVi: 'Trong khi đó, ngược lại — tương phản rõ ràng',
    usageNotes:
      'Nối hai vế tương phản nhau. Hiện tại: 동사 + 는 반면에; Quá khứ: -(으)ㄴ 반면에; Tính từ: -(으)ㄴ 반면에. Trang trọng hơn -지만.',
    examples: [
      { ko: '이 방법은 빠른 반면에 정확성이 떨어진다.', vi: 'Phương pháp này nhanh, nhưng ngược lại độ chính xác thấp hơn.' },
      { ko: '언니는 적극적인 반면에 동생은 소극적이다.', vi: 'Chị thì tích cực, trong khi em thì thụ động.' },
      { ko: '도시는 편리한 반면에 공기가 좋지 않다.', vi: 'Thành phố thì tiện lợi, nhưng ngược lại không khí không tốt.' },
    ],
    commonMistakes: [
      'Tính từ: 편리한 반면에 ✓ (không phải 편리하는 반면에)',
      'Hai vế phải thật sự đối lập — không dùng khi chỉ muốn liệt kê',
      '반면에 vs -지만: 반면에 trang trọng hơn và nhấn tính đối lập nhiều hơn',
    ],
    level: 'topik3',
  },
  {
    id: 'g-t3-04',
    pattern: 'N + 에 따르면',
    meaningVi: 'Theo (nguồn), dựa theo — trích dẫn nguồn thông tin',
    usageNotes:
      'Dùng khi trích dẫn nguồn thông tin hoặc theo ý kiến của ai/nguồn nào đó. Thường đi với -다고 한다 ở vế sau. Trang trọng, dùng nhiều trong báo chí và văn bản chính thức.',
    examples: [
      { ko: '뉴스에 따르면 내일 태풍이 온다고 한다.', vi: 'Theo tin tức, ngày mai có bão đến.' },
      { ko: '연구 결과에 따르면 운동이 수명을 늘린다고 한다.', vi: 'Theo kết quả nghiên cứu, tập thể dục kéo dài tuổi thọ.' },
      { ko: '전문가에 따르면 이 방법이 가장 효과적이라고 한다.', vi: 'Theo chuyên gia, phương pháp này hiệu quả nhất.' },
    ],
    commonMistakes: [
      'Nhầm với N + 에 따라 (tùy theo, theo/dựa vào): 날씨에 따라 옷을 입어요 (mặc quần áo tùy theo thời tiết)',
      '-에 따르면은 X → -에 따르면 ✓ (theo, không thêm 은)',
      'Luôn trích dẫn nguồn cụ thể, không nói막연히 -에 따르면 mà không có nguồn rõ ràng',
    ],
    level: 'topik3',
  },
  {
    id: 'g-t3-05',
    pattern: 'V/A + -다고 하다 / -(이)라고 하다',
    meaningVi: 'Ai đó nói rằng — truyền đạt lời nói gián tiếp',
    usageNotes:
      'Gián tiếp hóa lời nói. Động từ/tính từ: -다고 하다. Danh từ: -(이)라고 하다. Câu hỏi: -(으)냐고 하다. Mệnh lệnh: -(으)라고 하다. Đề nghị: -자고 하다.',
    examples: [
      { ko: '친구가 내일 바쁘다고 했어요.', vi: 'Bạn tôi nói rằng ngày mai bận.' },
      { ko: '선생님이 숙제를 꼭 하라고 했어요.', vi: 'Thầy giáo bảo nhất định phải làm bài tập.' },
      { ko: '그 사람이 학생이라고 했어요.', vi: 'Người đó nói rằng họ là học sinh.' },
    ],
    commonMistakes: [
      'Mệnh lệnh gián tiếp: V + -(으)라고 하다 (không phải -다고 하다)',
      '먹어라고 했다 ✗ → 먹으라고 했다 ✓',
      'Đề nghị cùng làm: -자고 하다 (anh ấy đề nghị chúng ta cùng làm)',
    ],
    level: 'topik3',
  },
  {
    id: 'g-t3-06',
    pattern: 'V/A + -기 때문에',
    meaningVi: 'Vì, bởi vì — nguyên nhân trang trọng (dùng với động từ/tính từ)',
    usageNotes:
      'Trang trọng hơn -아/어서 và -(으)니까. Dùng nhiều trong văn viết. Khác với N + 때문에: -기 때문에 đứng sau động từ/tính từ.',
    examples: [
      { ko: '건강이 좋지 않기 때문에 병원에 갔습니다.', vi: 'Vì sức khỏe không tốt nên tôi đã đến bệnh viện.' },
      { ko: '시간이 부족하기 때문에 빨리 결정해야 합니다.', vi: 'Vì thiếu thời gian nên phải quyết định nhanh.' },
      { ko: '가격이 비싸기 때문에 많은 사람들이 사지 않는다.', vi: 'Vì giá đắt nên nhiều người không mua.' },
    ],
    commonMistakes: [
      '-기 때문에 dùng được với mệnh lệnh nhẹ, khác -아/어서 (không dùng với mệnh lệnh)',
      'Nhầm với N 때문에: 비 때문에 (vì mưa, N) vs 비가 오기 때문에 (vì trời mưa, V)',
    ],
    level: 'topik3',
  },
  {
    id: 'g-t3-07',
    pattern: 'V/A + -아/어도',
    meaningVi: 'Dù, mặc dù — nhượng bộ',
    usageNotes:
      'Diễn tả sự nhượng bộ: dù vế trước xảy ra thì vế sau vẫn thế. Khác -아/어서: -아/어도 nhượng bộ, không phải nhân quả.',
    examples: [
      { ko: '아무리 피곤해도 운동은 해야 해요.', vi: 'Dù mệt đến đâu cũng phải tập thể dục.' },
      { ko: '돈이 없어도 행복하게 살 수 있어요.', vi: 'Dù không có tiền vẫn có thể sống hạnh phúc.' },
      { ko: '열심히 해도 잘 안 돼요.', vi: 'Dù cố gắng nhưng vẫn không được.' },
    ],
    commonMistakes: [
      '아무리 + V/A + -아/어도 = dù có...đến đâu đi nữa — cấu trúc thường đi cùng',
      'Nhầm với -아/어서: 먹어도 배가 불러요 ✗ (논리가 이상함) vs 먹어서 배가 불러요 ✓',
    ],
    level: 'topik3',
  },
  {
    id: 'g-t3-08',
    pattern: 'V/A + -(으)ㄹ 뿐만 아니라',
    meaningVi: 'Không chỉ...mà còn — bổ sung thêm thông tin quan trọng',
    usageNotes:
      'Vế sau bổ sung thêm điều gì đó quan trọng hơn hoặc đáng chú ý hơn vế trước. Trang trọng, dùng trong văn viết và thuyết trình.',
    examples: [
      { ko: '그는 공부를 잘할 뿐만 아니라 운동도 잘한다.', vi: 'Anh ấy không chỉ học giỏi mà còn thể thao giỏi.' },
      { ko: '이 제품은 저렴할 뿐만 아니라 품질도 좋다.', vi: 'Sản phẩm này không chỉ rẻ mà chất lượng cũng tốt.' },
      { ko: '환경 오염은 자연뿐만 아니라 인간 건강에도 영향을 미친다.', vi: 'Ô nhiễm môi trường không chỉ ảnh hưởng đến thiên nhiên mà còn đến sức khỏe con người.' },
    ],
    commonMistakes: [
      'Danh từ: N + 뿐만 아니라 (음식뿐만 아니라 ✓)',
      'Động từ/tính từ: V/A + -(으)ㄹ 뿐만 아니라 — không bỏ qua -(으)ㄹ',
      'Khác với -도: 뿐만 아니라 mang nghĩa bổ sung quan trọng hơn, nhấn mạnh hơn',
    ],
    level: 'topik3',
  },
  {
    id: 'g-t3-09',
    pattern: 'V + -는 대신에',
    meaningVi: 'Thay vì, thay thế cho — bù đắp hoặc thay thế',
    usageNotes:
      'Hai nghĩa: (1) Thay vì làm A thì làm B; (2) Bù lại cho A bằng B. Hai vế thường liên quan đến cùng một chủ thể.',
    examples: [
      { ko: '버스 대신에 지하철을 탔어요.', vi: 'Thay vì xe buýt tôi đã đi tàu điện ngầm.' },
      { ko: '밖에 나가는 대신에 집에서 쉬었어요.', vi: 'Thay vì ra ngoài tôi nghỉ ở nhà.' },
      { ko: '제가 할게요, 대신에 나중에 도와주세요.', vi: 'Để tôi làm, nhưng bù lại sau này giúp tôi với.' },
    ],
    commonMistakes: [
      'Danh từ: N + 대신에 (버스 대신에 ✓); Động từ: V + 는 대신에',
      '대신에 vs 대신: cả hai đều đúng, 대신에 đầy đủ hơn, 대신 thân mật hơn',
    ],
    level: 'topik3',
  },
  {
    id: 'g-t3-10',
    pattern: 'V/A + -(으)ㄴ/는 데다가',
    meaningVi: 'Hơn nữa, thêm vào đó — chồng chất thêm',
    usageNotes:
      'Bổ sung điều tiêu cực hoặc tích cực vào điều đã nêu. Mạnh hơn -고 vì thêm sắc thái "hơn nữa".',
    examples: [
      { ko: '오늘은 비가 오는 데다가 바람도 강하게 분다.', vi: 'Hôm nay trời vừa mưa, hơn nữa gió cũng thổi mạnh.' },
      { ko: '그 사람은 똑똑한 데다가 부지런하기까지 하다.', vi: 'Người đó không chỉ thông minh mà còn chăm chỉ nữa.' },
      { ko: '이 식당은 음식이 맛있는 데다가 값도 싸다.', vi: 'Nhà hàng này thức ăn ngon, hơn nữa giá cũng rẻ.' },
    ],
    commonMistakes: [
      'Tính từ quá khứ: -(으)ㄴ 데다가; Động từ hiện tại: -는 데다가',
      '데다가 vs 데다: 데다가 là dạng đầy đủ, 데다 đôi khi dùng trong văn nói nhưng ít phổ biến hơn',
    ],
    level: 'topik3',
  },
  {
    id: 'g-t3-11',
    pattern: 'V/A + -(으)ㄹ 정도로/-(으)ㄹ 정도이다',
    meaningVi: 'Đến mức, tới mức — mức độ',
    usageNotes:
      'Diễn tả mức độ của điều gì đó. -(으)ㄹ 정도로 + động từ (đến mức nào đó mà làm điều khác). -(으)ㄹ 정도이다 = là đến mức nào đó.',
    examples: [
      { ko: '그 영화는 눈물이 날 정도로 슬펐다.', vi: 'Bộ phim đó buồn đến mức rơi nước mắt.' },
      { ko: '배가 고파서 쓰러질 정도예요.', vi: 'Đói đến mức sắp ngã ra rồi.' },
      { ko: '그의 노래 실력은 가수라고 해도 될 정도이다.', vi: 'Kỹ năng hát của anh ấy đạt đến mức có thể gọi là ca sĩ được.' },
    ],
    commonMistakes: [
      '정도 là danh từ, sau đó dùng trợ từ phù hợp: 정도로 (bổ ngữ), 정도이다 (vị ngữ)',
      'Nhầm với -만큼: 정도로 nhấn mức độ tuyệt đối; -만큼 so sánh tương đương',
    ],
    level: 'topik3',
  },
  {
    id: 'g-t3-12',
    pattern: 'V + -다가',
    meaningVi: 'Đang làm thì, đang...rồi — hành động bị gián đoạn hoặc chuyển sang',
    usageNotes:
      'Diễn tả hành động đang tiến hành thì bị gián đoạn hoặc chuyển sang hành động khác. Hai hành động có thể liên quan nhân quả.',
    examples: [
      { ko: '공부를 하다가 잠이 들었어요.', vi: 'Đang học thì ngủ thiếp đi.' },
      { ko: '집에 가다가 친구를 만났어요.', vi: 'Đang trên đường về nhà thì gặp bạn.' },
      { ko: '울다가 웃었어요.', vi: 'Đang khóc lại cười.' },
    ],
    commonMistakes: [
      'Nhầm với -다가도: 공부하다가도 놀고 싶어요 (dù đang học vẫn muốn chơi — nhượng bộ)',
      '-다가 = gián đoạn/chuyển tiếp; -다가 보면 = nếu cứ tiếp tục làm thì sẽ',
    ],
    level: 'topik3',
  },
  {
    id: 'g-t3-13',
    pattern: 'V + -다 보면',
    meaningVi: 'Nếu cứ làm thì dần dần sẽ — kết quả tự nhiên theo thời gian',
    usageNotes:
      'Diễn tả kết quả tự nhiên xảy ra khi một hành động được tiếp tục lặp đi lặp lại. Thường mang ý nghĩa tích cực, khích lệ.',
    examples: [
      { ko: '열심히 하다 보면 잘하게 될 거예요.', vi: 'Nếu cứ cố gắng mãi rồi sẽ làm tốt thôi.' },
      { ko: '매일 한국어를 듣다 보면 자연스럽게 말할 수 있어요.', vi: 'Nếu mỗi ngày cứ nghe tiếng Hàn thì dần dần sẽ nói được tự nhiên.' },
      { ko: '살다 보면 좋은 일도 있고 나쁜 일도 있어요.', vi: 'Sống lâu rồi sẽ có lúc vui lúc buồn.' },
    ],
    commonMistakes: [
      'Nhầm với -다가: 하다가 (đang làm thì...) vs 하다 보면 (cứ làm thì...)',
      '-다 보면 luôn mang tính tương lai/giả định, không dùng cho quá khứ đã xảy ra',
    ],
    level: 'topik3',
  },
  {
    id: 'g-t3-14',
    pattern: 'V/A + -(으)ㄹ 텐데',
    meaningVi: 'Chắc là, hẳn là, nên là — phỏng đoán kèm lo ngại',
    usageNotes:
      'Kết hợp -(으)ㄹ 것 (phỏng đoán) và -ㄴ데 (bối cảnh). Diễn tả điều người nói phỏng đoán là đúng, kèm lo ngại hoặc quan tâm đến vế sau.',
    examples: [
      { ko: '지금쯤 배가 고플 텐데 밥 먹었어요?', vi: 'Giờ này chắc bụng đói rồi nhỉ, ăn cơm chưa?' },
      { ko: '피곤할 텐데 좀 쉬세요.', vi: 'Chắc mệt rồi, nghỉ ngơi đi.' },
      { ko: '그 소식을 들으면 슬플 텐데 어떻게 말하지?', vi: 'Chắc nghe tin đó sẽ buồn lắm, không biết nói thế nào đây.' },
    ],
    commonMistakes: [
      '-(으)ㄹ 텐데 ≠ -(으)ㄹ 것 같은데: 텐데 chắc chắn hơn, thể hiện suy luận từ kinh nghiệm',
      'Không nhầm: 텐데 (chắc là) vs 테니까 (vì chắc là → cho phép dùng với mệnh lệnh)',
    ],
    level: 'topik3',
  },
  {
    id: 'g-t3-15',
    pattern: 'V/A + -거든요',
    meaningVi: 'Đó là vì, thực ra là — giải thích lý do (hơi bất ngờ với người nghe)',
    usageNotes:
      'Giải thích lý do hoặc bối cảnh mà người nghe chưa biết. Thường đứng sau khi người kia hỏi hoặc trông có vẻ thắc mắc. Không trang trọng.',
    examples: [
      { ko: 'A: 왜 그렇게 늦었어요? B: 차가 막히거든요.', vi: 'A: Sao đến muộn vậy? B: Đó là vì kẹt xe mà.' },
      { ko: '저 사실 한국에서 살았거든요.', vi: 'Thực ra tôi đã từng sống ở Hàn Quốc mà.' },
      { ko: '그 사람이 제 친구거든요. 그래서 잘 알아요.', vi: 'Người đó là bạn của tôi mà. Nên tôi biết rõ.' },
    ],
    commonMistakes: [
      '-거든요 không phải 이유 결론사 — đây là giải thích thông tin mới, không dùng khi người nghe đã biết',
      'Cuối câu -거든요 có âm lên (thông tin mới); -거든 (thân mật) không có 요',
    ],
    level: 'topik3',
  },
  {
    id: 'g-t3-16',
    pattern: 'V/A + -(으)ㄴ/는 편이다',
    meaningVi: 'Khá là, thuộc loại — xu hướng, thiên về phía',
    usageNotes:
      'Diễn tả xu hướng hoặc đặc điểm chung, không tuyệt đối. Tính từ: -(으)ㄴ 편이다; Động từ: -는 편이다.',
    examples: [
      { ko: '저는 음식을 많이 먹는 편이에요.', vi: 'Tôi thuộc loại ăn nhiều.' },
      { ko: '이 가게는 가격이 싼 편이에요.', vi: 'Cửa hàng này giá khá rẻ.' },
      { ko: '한국어는 어려운 편이지만 재미있어요.', vi: 'Tiếng Hàn khá khó nhưng thú vị.' },
    ],
    commonMistakes: [
      'Tính từ: 싼 편 ✓ (không phải 싸는 편)',
      'Động từ: 먹는 편 ✓ (không phải 먹은 편 — trừ khi nói về quá khứ)',
      '편이다 không phải khẳng định tuyệt đối — đây là xu hướng, không phải luôn luôn',
    ],
    level: 'topik3',
  },
  {
    id: 'g-t3-17',
    pattern: 'V + -(으)ㄹ 뻔했다',
    meaningVi: 'Suýt nữa thì — điều suýt xảy ra nhưng không xảy ra',
    usageNotes:
      'Diễn tả điều suýt xảy ra nhưng cuối cùng không xảy ra. Thường kèm cảm giác nhẹ nhõm hoặc may mắn.',
    examples: [
      { ko: '길을 건너다가 차에 치일 뻔했어요.', vi: 'Khi qua đường suýt nữa bị xe đâm vào.' },
      { ko: '그 말을 듣고 웃음이 날 뻔했어요.', vi: 'Nghe câu đó suýt nữa phì cười.' },
      { ko: '늦게 일어나서 시험에 늦을 뻔했어요.', vi: 'Dậy muộn suýt nữa đến trễ thi.' },
    ],
    commonMistakes: [
      '뻔했다 = sự việc không xảy ra; khi nó có xảy ra thì không dùng 뻔했다',
      '죽을 뻔했다 = suýt chết (nhưng không chết); 죽었다 = đã chết',
    ],
    level: 'topik3',
  },
  {
    id: 'g-t3-18',
    pattern: 'V + -아/어 버리다',
    meaningVi: 'Đã...mất rồi — hoàn thành với cảm giác dứt khoát hoặc tiếc nuối',
    usageNotes:
      'Nhấn mạnh hành động đã hoàn thành hoàn toàn, thường kèm cảm giác tiếc nuối, nhẹ nhõm, hoặc đột ngột. Sắc thái tùy ngữ cảnh.',
    examples: [
      { ko: '비밀을 말해 버렸어요.', vi: 'Đã lỡ nói bí mật mất rồi.' },
      { ko: '음식을 다 먹어 버렸어요.', vi: 'Đã ăn hết sạch thức ăn rồi.' },
      { ko: '그 사람이 가 버렸어요.', vi: 'Người đó đã đi mất rồi.' },
    ],
    commonMistakes: [
      'Nhầm với -아/어 두다 (để dành, giữ lại): 써 버리다 (dùng hết mất) ≠ 써 두다 (viết ra để dành)',
      'Sắc thái tiêu cực/tích cực tùy ngữ cảnh — không phải lúc nào cũng là tiếc nuối',
    ],
    level: 'topik3',
  },
  {
    id: 'g-t3-19',
    pattern: 'V + -아/어 두다',
    meaningVi: 'Làm và để đó — chuẩn bị trước hoặc giữ lại kết quả',
    usageNotes:
      'Hành động được thực hiện và kết quả được duy trì để dùng về sau. Thường mang tính chuẩn bị hoặc dự phòng.',
    examples: [
      { ko: '냉장고에 음식을 넣어 두었어요.', vi: 'Đã để thức ăn vào tủ lạnh (để dùng sau).' },
      { ko: '내일을 위해 미리 준비해 두세요.', vi: 'Hãy chuẩn bị trước để dùng cho ngày mai.' },
      { ko: '중요한 내용을 메모해 두었어요.', vi: 'Tôi đã ghi chú lại những nội dung quan trọng.' },
    ],
    commonMistakes: [
      'Nhầm với -아/어 놓다: hai cái rất giống, nhưng -아/어 두다 nhấn "để dành/duy trì", -아/어 놓다 nhấn "đặt vào trạng thái đó"',
      'Trong thực tế, -아/어 두다 và -아/어 놓다 thường có thể thay thế cho nhau',
    ],
    level: 'topik3',
  },
  {
    id: 'g-t3-20',
    pattern: 'V/A + -겠-',
    meaningVi: 'Sẽ (ý định mạnh), chắc là — ý định tức thì hoặc suy đoán lịch sự',
    usageNotes:
      'Hai nghĩa chính: (1) Ý định tức thì của người nói (제가 하겠습니다); (2) Suy đoán, nhận định lịch sự (어렵겠다). Trang trọng hơn -(으)ㄹ 거예요.',
    examples: [
      { ko: '제가 도와드리겠습니다.', vi: 'Tôi sẽ giúp bạn (ý định tức thì, lịch sự).' },
      { ko: '그렇게 하면 피곤하겠어요.', vi: 'Làm như vậy chắc mệt lắm nhỉ.' },
      { ko: '주문하시겠어요?', vi: 'Bạn muốn gọi món chưa ạ?' },
    ],
    commonMistakes: [
      'Nhầm với -(으)ㄹ 거예요: -겠- là ý định mạnh hơn hoặc trang trọng hơn trong một ngữ cảnh cụ thể',
      '알겠어요 = tôi hiểu rồi (chứ không phải 알 거예요 = tôi sẽ biết)',
    ],
    level: 'topik3',
  },
  {
    id: 'g-t3-21',
    pattern: 'N + 에 관해서 / N + 에 대해서',
    meaningVi: 'Về, liên quan đến — chủ đề nói đến',
    usageNotes:
      '-에 대해서 rộng hơn, dùng cho hầu hết các trường hợp. -에 관해서 nhấn "liên quan đến, xoay quanh", hay dùng trong văn bản học thuật hơn.',
    examples: [
      { ko: '한국 문화에 대해서 발표했어요.', vi: 'Tôi đã thuyết trình về văn hóa Hàn Quốc.' },
      { ko: '환경 문제에 관해서 이야기합시다.', vi: 'Hãy cùng nói về vấn đề môi trường.' },
      { ko: '그 사건에 대해서 아무것도 모르겠어요.', vi: 'Tôi không biết gì về vụ việc đó cả.' },
    ],
    commonMistakes: [
      '-에 대해서 vs -에 관해서: trong thực tế hội thoại, cả hai thường dùng được; -에 관해서 trang trọng hơn',
      '에 대한 N (bổ nghĩa danh từ): 환경에 대한 이야기 (câu chuyện về môi trường)',
    ],
    level: 'topik3',
  },
  {
    id: 'g-t3-22',
    pattern: 'V/A + -(으)ㄹ 것 같다',
    meaningVi: 'Có lẽ sẽ, chắc là sẽ — phỏng đoán tương lai',
    usageNotes:
      'Tương lai: -(으)ㄹ 것 같다. Cẩn thận phân biệt ba thì: -는 것 같다 (hiện tại), -(으)ㄴ 것 같다 (quá khứ), -(으)ㄹ 것 같다 (tương lai/phỏng đoán).',
    examples: [
      { ko: '내일 비가 올 것 같아요.', vi: 'Ngày mai có lẽ sẽ mưa.' },
      { ko: '이 길로 가면 늦을 것 같아요.', vi: 'Đi đường này có lẽ sẽ muộn.' },
      { ko: '그 사람도 올 것 같아요.', vi: 'Chắc người đó cũng sẽ đến.' },
    ],
    commonMistakes: [
      'Phân biệt ba thì: 먹는 것 같다 (đang ăn) / 먹은 것 같다 (đã ăn) / 먹을 것 같다 (sẽ ăn)',
      'Không phải mọi sự phỏng đoán đều dùng -것 같다: -겠어요 thường mạnh hơn và lịch sự hơn',
    ],
    level: 'topik3',
  },
  {
    id: 'g-t3-23',
    pattern: 'V/A + -(으)ㄴ/는 탓에',
    meaningVi: 'Vì, do — nguyên nhân tiêu cực',
    usageNotes:
      'Chỉ dùng khi nguyên nhân mang tính tiêu cực hoặc đổ lỗi. Khác với -기 때문에 và -아/어서 có thể dùng trung tính.',
    examples: [
      { ko: '늦게 잔 탓에 아침에 일어나지 못했어요.', vi: 'Vì ngủ muộn nên sáng không dậy được.' },
      { ko: '비가 오는 탓에 행사가 취소됐어요.', vi: 'Do trời mưa mà sự kiện bị hủy.' },
      { ko: '부주의한 탓에 사고가 났어요.', vi: 'Do bất cẩn mà xảy ra tai nạn.' },
    ],
    commonMistakes: [
      '-탓에 chỉ dùng cho nguyên nhân tiêu cực; không dùng khi kết quả tích cực',
      'N + 탓에: 날씨 탓에 (vì thời tiết xấu); nhưng khi dùng với V/A thì -(으)ㄴ/는 탓에',
    ],
    level: 'topik3',
  },
  {
    id: 'g-t3-24',
    pattern: 'V/A + -(으)ㄴ/는 덕분에',
    meaningVi: 'Nhờ, nhờ có — nguyên nhân tích cực',
    usageNotes:
      'Ngược với -탓에: chỉ dùng khi nguyên nhân mang tính tích cực, ai đó hoặc điều gì đó giúp ích. Thường dùng để cảm ơn hoặc bày tỏ biết ơn.',
    examples: [
      { ko: '선생님 덕분에 시험에 합격했어요.', vi: 'Nhờ thầy giáo mà tôi đã đậu kỳ thi.' },
      { ko: '날씨가 좋은 덕분에 여행이 즐거웠어요.', vi: 'Nhờ thời tiết đẹp mà chuyến đi vui vẻ.' },
      { ko: '열심히 연습한 덕분에 실력이 늘었어요.', vi: 'Nhờ luyện tập chăm chỉ mà kỹ năng của tôi tăng lên.' },
    ],
    commonMistakes: [
      '덕분에 chỉ dùng khi kết quả tích cực — không dùng cho tình huống tiêu cực',
      'N + 덕분에 (trực tiếp sau danh từ): 친구 덕분에 ✓; V/A: -(으)ㄴ/는 덕분에',
    ],
    level: 'topik3',
  },
  {
    id: 'g-t3-25',
    pattern: 'V/A + -(으)면 좋겠다',
    meaningVi: 'Ước gì, giá mà — mong muốn, ao ước',
    usageNotes:
      'Diễn tả mong muốn hay ước ao về điều gì đó. -(으)면 좋겠다 nhẹ hơn -고 싶다 (muốn), thường mang tính gián tiếp hoặc tế nhị hơn.',
    examples: [
      { ko: '날씨가 좀 따뜻해지면 좋겠어요.', vi: 'Ước gì thời tiết ấm hơn một chút.' },
      { ko: '빨리 나으면 좋겠어요.', vi: 'Mong bạn mau khỏi bệnh.' },
      { ko: '다음에 또 만날 수 있으면 좋겠어요.', vi: 'Ước gì lần sau có thể gặp lại.' },
    ],
    commonMistakes: [
      '-(으)면 좋겠다 nhẹ hơn 원해요/바라요; khi mong cho người khác dùng 좋겠다 phù hợp hơn -고 싶다',
      '-(으)면 좋겠는데 thêm -는데 = có sắc thái tiếc nuối nhẹ (ước mà được thì tốt)',
    ],
    level: 'topik3',
  },
]
