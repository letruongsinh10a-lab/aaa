import type { GrammarEntry } from '@/types'

export const grammarSoCap: GrammarEntry[] = [
  {
    id: 'gr-so-cap-01',
    pattern: 'A/V - 아/어서',
    meaningVi: 'Vì... nên... — nguyên nhân, không dùng được với mệnh lệnh/cầu khiến',
    usageNotes:
      'Mệnh đề trước nêu nguyên nhân dẫn đến kết quả ở mệnh đề sau. Vế trước chỉ được chia ở thì hiện tại (không thể chia -았/었- hay -겠- ngay trước -아/어서), và vế sau không được dùng câu mệnh lệnh hay câu cầu khiến.',
    examples: [
      { ko: '배가 고파서 많이 먹었어요.', vi: 'Vì đói bụng nên tôi đã ăn rất nhiều.' },
      { ko: '기뻐서 눈물이 났어요.', vi: 'Vì vui quá nên tôi đã rơi nước mắt.' },
      { ko: '열심히 공부해서 100점을 받았어요.', vi: 'Vì học chăm chỉ nên tôi đã đạt điểm 100.' },
    ],
    commonMistakes: [
      'Không được chia thì quá khứ/tương lai ở vế trước: nói "배고팠어서" là sai, phải dùng "배고파서".',
      'Vế sau không được là câu mệnh lệnh hay rủ rê — muốn diễn đạt ý đó phải dùng -(으)니까 thay thế.',
    ],
    level: 'so-cap',
    section: 'nguyen-nhan-ket-qua',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân, kết quả',
  },
  {
    id: 'gr-so-cap-02',
    pattern: 'A/V - (으)니까',
    meaningVi: 'Vì... nên... — nguyên nhân, thường đi trước mệnh lệnh/cầu khiến',
    usageNotes:
      'Cũng nêu quan hệ nguyên nhân - kết quả nhưng khác -아/어서 ở chỗ vế sau thường là câu mệnh lệnh hoặc câu cầu khiến, và vế trước có thể chia được cả thì quá khứ hoặc tương lai (kết hợp được với -았/었- hay -겠- ngay trước -(으)니까).',
    examples: [
      { ko: '추우니까 옷을 많이 입고 가세요.', vi: 'Vì trời lạnh nên hãy mặc nhiều áo rồi đi nhé.' },
      { ko: '날씨가 좋으니까 같이 산책할래요?', vi: 'Vì thời tiết đẹp nên chúng ta cùng đi dạo nhé?' },
      { ko: '전에 한국에 살았으니까 한국말을 조금 할 수 있어요.', vi: 'Vì trước đây tôi từng sống ở Hàn Quốc nên tôi có thể nói tiếng Hàn một chút.' },
    ],
    commonMistakes: [
      'Chỉ -(으)니까 mới được đứng trước câu mệnh lệnh/rủ rê: "배고파서 드세요" là sai, phải nói "배고프니까 드세요".',
      'Với các từ như 반갑다, 고맙다, 감사하다, 미안하다 chỉ dùng -아/어서, không dùng -(으)니까.',
      '-(으)니까 thường ngụ ý người nghe cũng biết lý do, còn -아/어서 nêu lý do khách quan thông thường.',
    ],
    level: 'so-cap',
    section: 'nguyen-nhan-ket-qua',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân, kết quả',
  },
  {
    id: 'gr-so-cap-03',
    pattern: 'N 때문에, A/V - 기 때문에',
    meaningVi: 'Tại... nên..., do... nên... — nguyên nhân trang trọng, hay dùng trong văn viết',
    usageNotes:
      'Diễn tả một lý do dẫn đến kết quả ở vế sau; kết quả thường mang sắc thái chưa tốt dù đôi khi vẫn có thể tích cực. Cấu trúc này trang trọng hơn, dùng nhiều trong văn viết so với -아/어서 và -(으)니까, có thể kết thúc câu ở dạng 기 때문이다, và vế sau không dùng câu mệnh lệnh hay cầu khiến.',
    examples: [
      { ko: '비 때문에 차가 막혀요.', vi: 'Vì trời mưa nên đường bị tắc.' },
      { ko: '바쁘기 때문에 여행을 못 가요.', vi: 'Vì bận nên tôi không đi du lịch được.' },
      { ko: '저는 배고프기 때문에 밥을 먹고 싶어요.', vi: 'Vì đói bụng nên tôi muốn ăn cơm.' },
    ],
    commonMistakes: [
      'Phân biệt N 때문에 (vì N) với N이기 때문에 (vì LÀ N): "학생 때문에" khác nghĩa với "학생이기 때문에".',
      'Giống -아/어서, vế sau của -기 때문에 không được là câu mệnh lệnh hay cầu khiến.',
    ],
    level: 'so-cap',
    section: 'nguyen-nhan-ket-qua',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân, kết quả',
  },
  {
    id: 'gr-so-cap-04',
    pattern: 'N - (이)거든요, A/V - 거든요.',
    meaningVi: 'Vì... đấy, ...đấy nhé — giải thích lý do hoặc thông báo điều người nghe chưa biết',
    usageNotes:
      'Dùng trong văn nói thân mật để đáp lại câu hỏi hoặc chủ động đưa ra lý do mà người nghe chưa biết, đồng thời cũng dùng để thông báo một điều gì đó mới mẻ cho người nghe. Chỉ dùng khi trò chuyện với người quen, không dùng trong hoàn cảnh trang trọng.',
    examples: [
      {
        ko: '가: 제주도에 갔을 때 한라산에 올라가셨어요? 나: 아니요, 못 갔어요. 날씨가 나빴거든요.',
        vi: 'A: Khi đi đảo Jeju anh có leo núi Halla không? B: Không, tôi không đi được. Vì hôm đó thời tiết xấu đấy.',
      },
      {
        ko: '가: 요즘 비가 정말 자주 오네요. 나: 요즘 장마철이거든요. 한 달 동안은 계속 올 거예요.',
        vi: 'A: Dạo này mưa nhiều thật đấy. B: Vì đang là mùa mưa mà. Mưa sẽ còn kéo dài cả tháng nữa đấy.',
      },
      {
        ko: '가: 얼굴이 왜 그렇게 피곤해 보여요? 나: 어젯밤에 잠을 못 잤거든요.',
        vi: 'A: Sao trông mặt bạn mệt mỏi thế? B: Vì tối qua tôi không ngủ được đấy.',
      },
    ],
    commonMistakes: [
      'Chỉ dùng trong văn nói thân mật, không dùng trong hoàn cảnh trang trọng hoặc văn viết.',
      '-거든요 dùng để giải thích lý do mới hoặc thông báo tin mới, khác với -잖아요 vốn dùng khi người nghe cũng đã biết lý do đó.',
    ],
    level: 'so-cap',
    section: 'nguyen-nhan-ket-qua',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân, kết quả',
  },
  {
    id: 'gr-so-cap-05',
    pattern: 'N - (이)잖아요, A V - 잖아요.',
    meaningVi: 'Vì... mà, ...mà — nhắc lại lý do người nghe cũng đã biết',
    usageNotes:
      'Dùng khi người nói đưa ra một lý do mà người nghe cũng đã biết, hoặc nhắc lại cho người nghe điều mà họ dường như đã quên. Cấu trúc còn được dùng để trách móc nhẹ nhàng khi người nghe không nghe theo lời khuyên trước đó dẫn đến kết quả không hay. Chỉ dùng trong văn nói thân mật giữa những người quan hệ gần gũi, không dùng trong hoàn cảnh trang trọng.',
    examples: [
      { ko: '가: 왜 담배를 안 피웠어요? 나: 담배를 끊었잖아요.', vi: 'A: Sao anh không hút thuốc nữa vậy? B: Vì tôi đã bỏ thuốc rồi mà.' },
      { ko: '가: 왜 그 가수를 좋아해요? 나: 예쁘잖아.', vi: 'A: Sao bạn thích ca sĩ đó vậy? B: Vì cô ấy xinh mà.' },
      { ko: '가: 수영 씨가 새우 알레르기가 있잖아. 나: 아, 그랬죠? 깜빡 했네요.', vi: 'A: Su-yeong bị dị ứng tôm mà, cậu quên rồi à. B: À, đúng nhỉ? Tôi quên mất.' },
    ],
    commonMistakes: [
      'Phân biệt với -거든요: -잖아요 dùng khi người nghe cũng đã biết lý do, còn -거든요 dùng khi người nghe chưa biết.',
      'Chỉ dùng trong văn nói suồng sã — dùng với người lớn tuổi hoặc trong hoàn cảnh trang trọng dễ nghe như đang vặc lại.',
    ],
    level: 'so-cap',
    section: 'nguyen-nhan-ket-qua',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân, kết quả',
  },
  {
    id: 'gr-so-cap-06',
    pattern: 'N –(이)고, A/V - 고',
    meaningVi: 'Và, còn — liệt kê ngang hàng, có thể đảo hai vế',
    usageNotes:
      'Dùng để liệt kê các hành động hay trạng thái tương tự nhau ở hai vế mang tính bình đẳng, có thể đổi vị trí hai vế mà ý nghĩa không thay đổi. Có thể mở rộng thành cấu trúc N1도... N2도..., và vế trước có thể chia được cả thì quá khứ (았/었) hoặc tương lai (겠).',
    examples: [
      { ko: '내 친구는 공부도 잘하고 얼굴도 예뻐요.', vi: 'Bạn tôi vừa học giỏi vừa xinh đẹp.' },
      { ko: '빵은 부드럽고 맛있어요.', vi: 'Bánh mì vừa mềm vừa ngon.' },
      { ko: '여기는 휴게실이고 저기는 사무실이에요.', vi: 'Đây là phòng nghỉ, còn kia là văn phòng.' },
    ],
    commonMistakes: [
      'Khi hai vế bình đẳng có thể đảo vị trí mà nghĩa không đổi — khác với -고 chỉ trình tự thời gian (không đảo được).',
      'Với danh từ kết thúc bằng phụ âm phải chia N이고, không phải N고.',
    ],
    level: 'so-cap',
    section: 'liet-ke-va-tuong-phan',
    sectionOrder: 2,
    sectionTitleVi: 'Liệt kê và tương phản',
  },
  {
    id: 'gr-so-cap-07',
    pattern: 'A/V – 거나',
    meaningVi: 'Hoặc, hay — lựa chọn giữa hai hay nhiều sự việc',
    usageNotes:
      'Diễn tả sự lựa chọn giữa hai hoặc nhiều sự vật, trạng thái, hành động. Vế trước của -거나 luôn được chia ở thì hiện tại, dù cả câu nói về việc trong quá khứ hay tương lai.',
    examples: [
      { ko: '오후에 축구를 하거나 농구를 할 거예요.', vi: 'Buổi chiều tôi sẽ đá bóng hoặc chơi bóng rổ.' },
      { ko: '주말에 보통 쉬거나 책을 읽어요.', vi: 'Cuối tuần tôi thường nghỉ ngơi hoặc đọc sách.' },
      { ko: '저는 맵거나 짠 음식을 잘 못 먹어요.', vi: 'Tôi không ăn được đồ cay hoặc mặn.' },
    ],
    commonMistakes: [
      'Vế trước -거나 luôn chia ở thì hiện tại, không chia quá khứ hay tương lai dù cả câu ở thì khác.',
      'Không nhầm với -이나 (dùng sau danh từ để chọn lựa): 커피나 차 khác với cấu trúc V/A-거나.',
    ],
    level: 'so-cap',
    section: 'liet-ke-va-tuong-phan',
    sectionOrder: 2,
    sectionTitleVi: 'Liệt kê và tương phản',
  },
  {
    id: 'gr-so-cap-08',
    pattern: 'A/V – 지만',
    meaningVi: 'Nhưng — tương phản, nội dung vế sau trái ngược vế trước',
    usageNotes:
      'Dùng để nối hai vế có nội dung trái ngược nhau. Khi câu ở thì quá khứ thì chia dạng 았/었/였지만, còn ở tương lai/phỏng đoán thì chia dạng 겠지만.',
    examples: [
      { ko: '어제 학교에 갔지만 수업이 없었습니다.', vi: 'Hôm qua tôi đã đến trường nhưng không có tiết học.' },
      { ko: '김치가 맛있지만 좀 맵습니다.', vi: 'Kim chi ngon nhưng hơi cay.' },
      { ko: '한국어 재미있지만 좀 어려워요.', vi: 'Tiếng Hàn thú vị nhưng hơi khó.' },
    ],
    commonMistakes: [
      'Cần chia thì ngay trước -지만: quá khứ phải là -았/었지만, không được để nguyên thể rồi thêm thì ở đâu khác.',
      'Người mới học hay quên chia quá khứ khi nói về việc đã xảy ra, dùng nhầm "가지만" thay vì "갔지만".',
    ],
    level: 'so-cap',
    section: 'liet-ke-va-tuong-phan',
    sectionOrder: 2,
    sectionTitleVi: 'Liệt kê và tương phản',
  },
  {
    id: 'gr-so-cap-09',
    pattern: 'A/V - (으)ㄴ/는데',
    meaningVi: 'Nhưng, còn... — nêu bối cảnh/tương phản trước khi hỏi, đề nghị hoặc từ chối khéo',
    usageNotes:
      'Cấu trúc chia theo thì và từ loại: quá khứ dùng -았/었는데, hiện tại tính từ dùng -(으)ㄴ데/động từ dùng -는데, tương lai dùng -겠는데 hoặc -(으)ㄹ 건데 (có thể thay bằng -(으)ㄹ 텐데). Có ba cách dùng chính: thể hiện sự tương phản; đưa ra thông tin, bối cảnh trước khi hỏi, rủ rê hay đề nghị; và dùng ở cuối câu để từ chối một cách lịch sự hoặc bổ sung thêm thông tin.',
    examples: [
      { ko: '어제는 따뜻했는데 오늘은 좀 쌀쌀해요.', vi: 'Hôm qua trời ấm nhưng hôm nay hơi se lạnh.' },
      { ko: '비가 오는데 어디에 가요?', vi: 'Trời đang mưa mà bạn đi đâu vậy?' },
      { ko: '가: 이 티셔츠 너무 단순해요? 나: 아니요, 예쁜데요.', vi: 'A: Chiếc áo phông này đơn giản quá phải không? B: Không đâu, đẹp đấy chứ.' },
    ],
    commonMistakes: [
      'Tính từ hiện tại chia -(으)ㄴ데, động từ hiện tại chia -는데 — dễ lẫn lộn hai dạng này.',
      'Khi dùng ở cuối câu để từ chối khéo hoặc bổ sung ý, cần thêm -요 và giữ giọng điệu nhẹ nhàng, không phải khẳng định thẳng.',
    ],
    level: 'so-cap',
    section: 'liet-ke-va-tuong-phan',
    sectionOrder: 2,
    sectionTitleVi: 'Liệt kê và tương phản',
  },
  {
    id: 'gr-so-cap-10',
    pattern: 'N 전에, V - 기 전에',
    meaningVi: 'Trước khi...',
    usageNotes:
      'Diễn tả một hành động hay tình huống xảy ra trước một sự việc khác; có thể kết hợp thêm các trợ từ 부터/까지 để nhấn mạnh mốc thời gian.',
    examples: [
      { ko: '회사에 가기 전에 아침을 먹어요.', vi: 'Trước khi đi làm tôi ăn sáng.' },
      { ko: '저는 잠을 자기 전에 책을 읽어요.', vi: 'Trước khi đi ngủ tôi đọc sách.' },
      { ko: '보고서는 금요일 전까지 제출해 주세요.', vi: 'Hãy nộp báo cáo trước thứ Sáu.' },
    ],
    commonMistakes: [
      'V-기 전에 luôn giữ động từ ở dạng nguyên thể, không chia thì quá khứ dù hành động phía sau xảy ra ở thì nào.',
      'N 전에 dùng trực tiếp sau danh từ chỉ thời gian, không cần thêm 기.',
    ],
    level: 'so-cap',
    section: 'cau-truc-thoi-gian',
    sectionOrder: 3,
    sectionTitleVi: 'Cấu trúc thời gian',
  },
  {
    id: 'gr-so-cap-11',
    pattern: 'N 후에, V - (으)ㄴ 후에',
    meaningVi: 'Sau khi...',
    usageNotes:
      'Diễn tả hành động hay tình huống xảy ra sau một sự việc khác; có thể kết hợp thêm 부터/까지, và có thể thay thế bằng V-(으)ㄴ 다음에 hoặc V-(으)ㄴ 뒤에 với nghĩa tương đương.',
    examples: [
      { ko: '점심을 먹은 후에 영화를 볼까요?', vi: 'Ăn trưa xong mình đi xem phim nhé?' },
      { ko: '시험 후에 뭐 할 거예요?', vi: 'Sau kỳ thi bạn định làm gì?' },
      { ko: '집에 돌아온 다음에 샤워했어요.', vi: 'Sau khi về đến nhà tôi đã đi tắm.' },
    ],
    commonMistakes: [
      'V-(으)ㄴ 후에 luôn chia động từ ở dạng đã hoàn thành, khác với V-기 전에 luôn giữ nguyên thể.',
      'Có thể thay 후에 bằng 다음에/뒤에 nhưng tuyệt đối không thay bằng 전에 vì nghĩa hoàn toàn ngược lại.',
    ],
    level: 'so-cap',
    section: 'cau-truc-thoi-gian',
    sectionOrder: 3,
    sectionTitleVi: 'Cấu trúc thời gian',
  },
  {
    id: 'gr-so-cap-12',
    pattern: 'V - 고 나서',
    meaningVi: 'Làm xong rồi thì... — hành động sau chỉ xảy ra khi hành động trước đã hoàn tất',
    usageNotes:
      'Diễn tả hành động ở vế sau chỉ được thực hiện sau khi hành động ở vế trước đã hoàn thành trọn vẹn. Không thể kết hợp với -았/었-, -겠- hay -(으)ㄹ 것이다, và chỉ dùng được với các động từ có điểm bắt đầu, kết thúc rõ ràng, không dùng với các động từ như 일어나다, 가다, 오다.',
    examples: [
      { ko: '숙제를 끝내고 나서 친구를 만날 거예요.', vi: 'Làm xong bài tập rồi tôi sẽ đi gặp bạn.' },
      { ko: '손을 씻고 나서 식사를 해야 합니다.', vi: 'Phải rửa tay xong rồi mới được ăn cơm.' },
      { ko: '저녁을 먹고 나서 산책을 했어요.', vi: 'Ăn tối xong tôi đã đi dạo.' },
    ],
    commonMistakes: [
      'Không dùng với các động từ tức thời như 가다, 오다, 일어나다 vì cấu trúc này nhấn mạnh sự hoàn tất trọn vẹn của hành động.',
      'Không thể chia thêm -았/었- hay -겠- ngay trước -고 나서.',
    ],
    level: 'so-cap',
    section: 'cau-truc-thoi-gian',
    sectionOrder: 3,
    sectionTitleVi: 'Cấu trúc thời gian',
  },
  {
    id: 'gr-so-cap-13',
    pattern: 'V - 아/어서',
    meaningVi: 'Làm... để rồi... — hai hành động nối tiếp, cùng chủ ngữ, liên quan mật thiết',
    usageNotes:
      'Ở cách dùng này, -아/어서 không mang nghĩa nguyên nhân - kết quả mà diễn tả hai hành động xảy ra nối tiếp nhau theo trình tự thời gian và có quan hệ mật thiết với nhau. Hai vế phải cùng chủ ngữ, vế trước không chia -았/었- hay -겠-, còn vế sau có thể là câu mệnh lệnh hoặc câu cầu khiến.',
    examples: [
      { ko: '사과를 씻어서 먹었어요.', vi: 'Tôi rửa táo rồi ăn.' },
      { ko: '아침에 일어나서 세수를 했어요.', vi: 'Buổi sáng tôi thức dậy rồi rửa mặt.' },
      { ko: '여기에 앉아서 잠깐만 기다리세요.', vi: 'Hãy ngồi đây rồi chờ một lát.' },
    ],
    commonMistakes: [
      'Phân biệt với -고 (mục 14): -아/어서 chỉ dùng khi hành động sau là kết quả nối tiếp có liên quan mật thiết với hành động trước, còn -고 chỉ đơn thuần liệt kê trình tự.',
      'Cùng một công thức -아/어서 nhưng mang nghĩa nguyên nhân - kết quả hay trình tự thời gian tùy vào động từ và ngữ cảnh, không nên nhầm lẫn hai nghĩa này.',
    ],
    level: 'so-cap',
    section: 'cau-truc-thoi-gian',
    sectionOrder: 3,
    sectionTitleVi: 'Cấu trúc thời gian',
  },
  {
    id: 'gr-so-cap-14',
    pattern: 'V – 고',
    meaningVi: 'Làm... rồi... — liệt kê trình tự thời gian, không cần liên quan chặt chẽ',
    usageNotes:
      'Đây là cách dùng thứ hai của -고 (khác với nghĩa liệt kê ngang hàng ở mục 6): diễn tả hai hành động xảy ra nối tiếp theo trình tự thời gian, hai vế phải cùng chủ ngữ nhưng không có quan hệ mục đích - kết quả chặt chẽ như -아/어서. Không thể chia -았/었- hay -겠- ngay trước -고 ở vế trước.',
    examples: [
      { ko: '오늘 아침에 세수하고 밥을 먹었어요.', vi: 'Sáng nay tôi rửa mặt rồi ăn cơm.' },
      { ko: '저는 어제 수업을 듣고 점심을 먹었어요.', vi: 'Hôm qua tôi học xong rồi ăn trưa.' },
      { ko: '저녁을 먹고 텔레비전을 봤어요.', vi: 'Tôi ăn tối rồi xem ti vi.' },
    ],
    commonMistakes: [
      'Phân biệt -고 (liệt kê trình tự đơn thuần) với -아/어서 (hành động sau là kết quả/mục đích của hành động trước, có liên hệ chặt chẽ).',
      'Hai vế phải cùng một chủ ngữ khi dùng -고 theo nghĩa trình tự thời gian.',
    ],
    level: 'so-cap',
    section: 'cau-truc-thoi-gian',
    sectionOrder: 3,
    sectionTitleVi: 'Cấu trúc thời gian',
  },
  {
    id: 'gr-so-cap-15',
    pattern: 'N 때, A/V - (으)ㄹ 때',
    meaningVi: 'Khi...',
    usageNotes:
      'Diễn tả thời điểm xảy ra một hành động hay trạng thái nào đó. Không dùng 때 trực tiếp sau các từ chỉ thời gian như 아침, 오전, 오후, 주말 hay tên các thứ trong tuần — với những từ này chỉ cần thêm trợ từ 에.',
    examples: [
      { ko: '저는 집에 혼자 있을 때 책을 읽어요.', vi: 'Khi ở nhà một mình tôi thường đọc sách.' },
      { ko: '방학 때 고향에 갈 거예요.', vi: 'Vào kỳ nghỉ tôi sẽ về quê.' },
      { ko: '심심할 때마다 한국 음악을 들어요.', vi: 'Mỗi khi buồn chán tôi đều nghe nhạc Hàn Quốc.' },
    ],
    commonMistakes: [
      'Không nói "아침 때", "주말 때" — với các mốc thời gian cố định như buổi sáng, cuối tuần chỉ cần thêm 에.',
      'Phân biệt N 때 (dùng trực tiếp sau danh từ) với A/V-(으)ㄹ 때 (dùng sau động từ/tính từ).',
    ],
    level: 'so-cap',
    section: 'cau-truc-thoi-gian',
    sectionOrder: 3,
    sectionTitleVi: 'Cấu trúc thời gian',
  },
  {
    id: 'gr-so-cap-16',
    pattern: 'A/V - (으)면서',
    meaningVi: 'Vừa... vừa... — hai hành động/trạng thái diễn ra đồng thời, cùng chủ ngữ',
    usageNotes:
      'Diễn tả hai hành động hoặc trạng thái xảy ra đồng thời, do cùng một chủ ngữ thực hiện. Động từ đứng trước -(으)면서 phải giữ nguyên thể, không chia thì; cũng có thể dùng với tính từ để so sánh hai trạng thái song song, và có thể thay bằng dạng văn viết -(으)며.',
    examples: [
      { ko: '그 사람이 울면서 말했어요.', vi: 'Người đó vừa khóc vừa nói.' },
      { ko: '운전하면서 핸드폰을 보지 마세요. 정말 위험하니까요.', vi: 'Đừng vừa lái xe vừa nhìn điện thoại, rất nguy hiểm đấy.' },
      { ko: '흐엉 씨는 똑똑하면서 예뻐요.', vi: 'Hương vừa thông minh vừa xinh đẹp.' },
    ],
    commonMistakes: [
      'Hai hành động trong -(으)면서 phải cùng một chủ ngữ, khác với -는 동안 có thể dùng cho hai chủ ngữ khác nhau.',
      'Không chia thì trước -(으)면서, luôn giữ động từ/tính từ ở dạng nguyên thể.',
    ],
    level: 'so-cap',
    section: 'cau-truc-thoi-gian',
    sectionOrder: 3,
    sectionTitleVi: 'Cấu trúc thời gian',
  },
  {
    id: 'gr-so-cap-17',
    pattern: 'N 중, V - 는 중',
    meaningVi: 'Đang..., đang trong quá trình...',
    usageNotes:
      'Diễn tả một hành động đang trong quá trình thực hiện, không dùng để diễn tả các hiện tượng tự nhiên. Có thể dùng ở dạng ~ 중에, và có nhiều cụm từ cố định thông dụng như 회의 중, 수업 중, 공사 중, 출장 중, 외출 중.',
    examples: [
      { ko: '이사할 거예요. 그래서 집을 찾는 중이에요.', vi: 'Tôi sắp chuyển nhà nên đang tìm nhà.' },
      { ko: '지금 수업 중이니까 나중에 전화하세요.', vi: 'Bây giờ tôi đang trong giờ học nên lát nữa hãy gọi lại.' },
      { ko: '학교에 가는 중에 친구를 만났어요.', vi: 'Trên đường đến trường tôi đã gặp bạn.' },
    ],
    commonMistakes: [
      'Không dùng -는 중 để diễn tả hiện tượng tự nhiên và thường không kết hợp với 살다, 지내다, 다니다.',
      'Khác với -고 있다 (dùng được với hầu hết động từ), -는 중 hạn chế hơn về loại động từ có thể kết hợp.',
    ],
    level: 'so-cap',
    section: 'cau-truc-thoi-gian',
    sectionOrder: 3,
    sectionTitleVi: 'Cấu trúc thời gian',
  },
  {
    id: 'gr-so-cap-18',
    pattern: 'V – 자마자',
    meaningVi: 'Ngay sau khi... — gần như không có khoảng cách thời gian',
    usageNotes:
      'Diễn tả một việc xảy ra ngay lập tức sau một việc khác, gần như không có khoảng trống về thời gian giữa hai hành động. Chủ ngữ của hai vế không nhất thiết phải giống nhau, vế trước luôn giữ nguyên thể còn thì được chia ở vế sau.',
    examples: [
      { ko: '어제는 피곤해서 침대에 눕자마자 잠이 들었어요.', vi: 'Hôm qua vì mệt nên tôi vừa nằm xuống giường là ngủ ngay.' },
      { ko: '집에서 나가자마자 비가 오기 시작했어요.', vi: 'Tôi vừa ra khỏi nhà thì trời bắt đầu mưa.' },
      { ko: '수업이 끝나자마자 학생들이 교실을 나갔어요.', vi: 'Tiết học vừa kết thúc là học sinh đã ra khỏi lớp ngay.' },
    ],
    commonMistakes: [
      'Vế trước -자마자 luôn ở dạng nguyên thể, không chia thì; thì được thể hiện ở vế sau.',
      'Nhấn mạnh tính tức thời gần như không có khoảng cách, khác với -(으)ㄴ 후에 chỉ đơn thuần diễn tả trình tự trước sau.',
    ],
    level: 'so-cap',
    section: 'cau-truc-thoi-gian',
    sectionOrder: 3,
    sectionTitleVi: 'Cấu trúc thời gian',
  },
  {
    id: 'gr-so-cap-19',
    pattern: 'N 동안, V - 는 동안',
    meaningVi: 'Trong lúc..., trong khi... — hai vế có thể khác chủ ngữ',
    usageNotes:
      'Diễn tả khoảng thời gian mà một hành động hay trạng thái được duy trì, có thể mô tả hai quá trình diễn ra song song. Chủ ngữ của hai vế không nhất thiết phải giống nhau, và có thể dùng với 있다/없다.',
    examples: [
      { ko: '나는 방학 동안 고향에 다녀올 거예요.', vi: 'Trong kỳ nghỉ tôi sẽ về quê một chuyến.' },
      { ko: '내가 음식을 만드는 동안 동생은 잤어요.', vi: 'Trong lúc tôi nấu ăn thì em tôi ngủ.' },
      { ko: '한국에 사는 동안 한국 친구를 많이 사귀었어요.', vi: 'Trong thời gian sống ở Hàn Quốc tôi đã kết bạn với nhiều người Hàn.' },
    ],
    commonMistakes: [
      'Khác với -(으)면서 (đòi hỏi cùng chủ ngữ), -는 동안 có thể dùng khi hai vế có chủ ngữ khác nhau.',
      'N 동안 dùng trực tiếp sau danh từ chỉ khoảng thời gian, còn V-는 동안 dùng sau động từ.',
    ],
    level: 'so-cap',
    section: 'cau-truc-thoi-gian',
    sectionOrder: 3,
    sectionTitleVi: 'Cấu trúc thời gian',
  },
  {
    id: 'gr-so-cap-20',
    pattern: 'V - (으)ㄴ 지',
    meaningVi: 'Đã được bao lâu kể từ khi...',
    usageNotes:
      'Diễn tả khoảng thời gian đã trôi qua kể từ khi một hành động nào đó xảy ra. Cấu trúc đầy đủ là V-(으)ㄴ 지 + khoảng thời gian + 되다/안 되다/지나다/넘다, trong đó 얼마 안 되다 nghĩa là chưa được bao lâu còn 오래 되다 nghĩa là đã lâu rồi.',
    examples: [
      { ko: '한국어를 공부한 지 얼마나 됐어요?', vi: 'Bạn học tiếng Hàn được bao lâu rồi?' },
      { ko: '여기 산 지 6개월 됐어요.', vi: 'Tôi sống ở đây được 6 tháng rồi.' },
      { ko: '남자 친구와 헤어진 지 오래 되었어요.', vi: 'Tôi chia tay bạn trai đã lâu rồi.' },
    ],
    commonMistakes: [
      'Động từ trước -(으)ㄴ 지 luôn chia ở dạng quá khứ dù ý nghĩa là "kể từ khi", không dùng dạng hiện tại.',
      'Không nhầm với V-(으)ㄴ 후에 (sau khi) — -(으)ㄴ 지 luôn đi kèm khoảng thời gian cụ thể cộng với 되다/지나다.',
    ],
    level: 'so-cap',
    section: 'cau-truc-thoi-gian',
    sectionOrder: 3,
    sectionTitleVi: 'Cấu trúc thời gian',
  },
  {
    id: 'gr-so-cap-21',
    pattern: 'V – 다가',
    meaningVi: 'Đang... thì... — hành động bị ngắt quãng hoặc chuyển hướng đột ngột',
    usageNotes:
      'Diễn tả người nói đang thực hiện một hành động thì đột nhiên dừng lại để chuyển sang hành động khác; cũng dùng được với tính từ để diễn tả trạng thái đột ngột thay đổi. Chủ ngữ ở hai vế phải giống nhau, có thể tỉnh lược -다가 thành -다. Khi kết hợp với thì quá khứ ở vế trước (dạng -았/었/였다가), cấu trúc diễn tả hành động vế trước đã hoàn thành trước khi chuyển sang hành động khác, chứ không phải bị ngắt giữa chừng.',
    examples: [
      { ko: '영화를 보다가 울었어요.', vi: 'Đang xem phim thì tôi bật khóc.' },
      { ko: '숙제를 하다가 잤어요.', vi: 'Đang làm bài tập thì tôi ngủ quên.' },
      { ko: '옷을 입었다가 벗었어요.', vi: 'Tôi mặc quần áo vào rồi lại cởi ra.' },
    ],
    commonMistakes: [
      'Phân biệt -다가 (hành động bị ngắt giữa chừng) với -았/었다가 (hành động trước đã hoàn thành xong rồi mới chuyển sang hành động khác).',
      'Hai vế phải cùng một chủ ngữ, khác với -는 동안 hay -자마자 có thể khác chủ ngữ.',
    ],
    level: 'so-cap',
    section: 'cau-truc-thoi-gian',
    sectionOrder: 3,
    sectionTitleVi: 'Cấu trúc thời gian',
  },
  {
    id: 'gr-so-cap-22',
    pattern: 'V – 는 길이다/ 는 길에',
    meaningVi: 'Đang trên đường... — chỉ dùng với động từ chỉ sự di chuyển',
    usageNotes:
      'Dùng khi người nói thực hiện một hành động nào đó trong lúc đang di chuyển đến một nơi khác; có thể dùng dưới dạng kết thúc câu -는 길이다. Chỉ kết hợp được với các động từ mang nghĩa di chuyển như 가다/오다, 나가다/나오다, 들어가다/들어오다, 돌아가다/돌아오다, 올라가다/올라오다, 내려가다/내려오다, 출근하다/퇴근하다.',
    examples: [
      { ko: '퇴근하는 길에 지하철에서 갑자기 친구를 만났어요.', vi: 'Trên đường tan làm về tôi bất ngờ gặp bạn ở tàu điện ngầm.' },
      { ko: '가: 어디 가는 길이에요? 나: 네, 친구 만나러 가는 길이에요.', vi: 'A: Bạn đang trên đường đi đâu vậy? B: Tôi đang trên đường đi gặp bạn.' },
      { ko: '학교에 가는 길에 편의점에 들렀어요.', vi: 'Trên đường đến trường tôi đã ghé qua cửa hàng tiện lợi.' },
    ],
    commonMistakes: [
      'Chỉ kết hợp được với động từ chỉ sự di chuyển, không dùng được với các động từ hành động khác như -는 도중에 vốn dùng rộng hơn.',
      'Với các động từ hành động khác, muốn diễn đạt ý tương tự phải chuyển thành động từ chuyển động qua cấu trúc V+(으)러 가다/오다.',
    ],
    level: 'so-cap',
    section: 'cau-truc-thoi-gian',
    sectionOrder: 3,
    sectionTitleVi: 'Cấu trúc thời gian',
  },
  {
    id: 'gr-so-cap-23',
    pattern: 'A/V - (으)ㄹ 수 있다/ 없다.',
    meaningVi: 'Có thể..., không thể... — năng lực hoặc khả năng xảy ra',
    usageNotes:
      'Diễn tả việc có năng lực làm một việc nào đó, hoặc diễn tả một sự việc nào đó có khả năng xảy ra trên thực tế.',
    examples: [
      { ko: '저는 피아노를 칠 수 있어요.', vi: 'Tôi có thể chơi đàn piano.' },
      { ko: '내일 비가 올 수 있어요.', vi: 'Ngày mai có thể sẽ mưa.' },
      { ko: '저는 요리할 수 없어요.', vi: 'Tôi không thể nấu ăn được.' },
    ],
    commonMistakes: [
      'Có hai nét nghĩa cần phân biệt theo ngữ cảnh: năng lực bản thân (chơi được đàn) và khả năng xảy ra khách quan (có thể sẽ mưa) — người học dễ chỉ nhớ nghĩa năng lực.',
      'Không nhầm với -(으)ㄹ 줄 알다/모르다 (mục 24), vốn chỉ diễn tả việc biết hay không biết cách làm.',
    ],
    level: 'so-cap',
    section: 'nang-luc-va-kha-nang',
    sectionOrder: 4,
    sectionTitleVi: 'Năng lực và khả năng',
  },
  {
    id: 'gr-so-cap-24',
    pattern: 'V - (으)ㄹ 줄 알다/ 모르다.',
    meaningVi: 'Biết cách..., không biết cách...',
    usageNotes:
      'Thể hiện chủ thể có biết phương pháp, cách thức để làm một việc gì đó hay không, nói cách khác là có hay không có kỹ năng thực hiện việc đó.',
    examples: [
      { ko: '저는 한국에 처음 올 때 한국말을 할 줄 몰랐어요.', vi: 'Khi mới đến Hàn Quốc tôi không biết nói tiếng Hàn.' },
      { ko: '저는 운전을 할 줄 몰라요.', vi: 'Tôi không biết lái xe.' },
      { ko: '요리할 줄 알아요?', vi: 'Bạn có biết nấu ăn không?' },
    ],
    commonMistakes: [
      'Phân biệt với -(으)ㄹ 수 있다/없다: -(으)ㄹ 줄 알다/모르다 chỉ nói về việc biết cách làm, không dùng để diễn tả khả năng xảy ra hay việc được phép làm.',
      '-(으)ㄹ 수 있다/없다 còn dùng để diễn tả tình huống cho phép hay không cho phép, trong khi -(으)ㄹ 줄 알다/모르다 không mang nghĩa này.',
    ],
    level: 'so-cap',
    section: 'nang-luc-va-kha-nang',
    sectionOrder: 4,
    sectionTitleVi: 'Năng lực và khả năng',
  },
  {
    id: 'gr-so-cap-25',
    pattern: 'V - (으)세요.',
    meaningVi: 'Hãy..., xin hãy... — câu mệnh lệnh lịch sự',
    usageNotes:
      'Dùng để yêu cầu người nghe làm gì một cách lịch sự, là câu mệnh lệnh lịch sự; dạng tôn kính hơn là -(으)십시오. Một số động từ có dạng đặc biệt khi chia với -(으)세요: 먹다/마시다 → 드세요, 자다 → 주무세요, 있다 → 계세요, 주다 → 주세요/드리세요. Một số tính từ kết thúc bằng 하다 như 건강하다, 행복하다 cũng có thể dùng cố định với -(으)세요 trong lời chúc.',
    examples: [
      { ko: '민규 씨, 결혼 축하해요. 행복하세요.', vi: 'Min-gyu ơi, chúc mừng đám cưới. Chúc bạn hạnh phúc nhé.' },
      { ko: '여기 앉으세요.', vi: 'Mời anh/chị ngồi đây.' },
      { ko: '조용히 하십시오.', vi: 'Xin hãy giữ trật tự.' },
    ],
    commonMistakes: [
      'Với các động từ 먹다, 마시다, 있다, 주다 phải dùng dạng đặc biệt (드세요, 계세요...), không được chia máy móc theo quy tắc thông thường.',
      '-(으)십시오 trang trọng hơn -(으)세요, thường dùng trong thông báo, hướng dẫn công cộng chứ ít dùng trong giao tiếp hàng ngày.',
    ],
    level: 'so-cap',
    section: 'yeu-cau-va-bon-phan-cho-phep-va-cam-doan',
    sectionOrder: 5,
    sectionTitleVi: 'Yêu cầu và bổn phận, Cho phép và cấm đoán',
  },
  {
    id: 'gr-so-cap-26',
    pattern: 'V - 지 말다: 지 마세요. / 지 맙시다.',
    meaningVi: 'Đừng... — yêu cầu hoặc rủ rê không làm gì',
    usageNotes:
      'Dùng để yêu cầu, khuyên bảo người nghe không nên làm gì (dạng -지 마세요, kết hợp từ -지 말다 với -(으)세요), hoặc rủ rê người khác cùng đừng làm gì với mình (dạng -지 맙시다). Ở dạng thân mật (반말) là -지 마, tùy ngữ cảnh có thể mang nghĩa mệnh lệnh hoặc rủ rê; dạng tôn kính hơn là -지 마십시오.',
    examples: [
      { ko: '수업 시간에 자지 마세요.', vi: 'Đừng ngủ trong giờ học.' },
      { ko: '살을 빼고 싶으면 피자를 먹지 마세요.', vi: 'Nếu muốn giảm cân thì đừng ăn pizza.' },
      { ko: '우리 담배를 피우지 맙시다.', vi: 'Chúng ta đừng hút thuốc nữa.' },
    ],
    commonMistakes: [
      '-지 마세요 dùng khi khuyên/yêu cầu người khác, còn -지 맙시다 dùng khi rủ rê cả người nói lẫn người nghe cùng không làm — hai dạng dễ bị dùng lẫn lộn.',
      'Ở dạng thân mật chỉ nói -지 마, tùy ngữ cảnh mà mang nghĩa mệnh lệnh hoặc rủ rê.',
    ],
    level: 'so-cap',
    section: 'yeu-cau-va-bon-phan-cho-phep-va-cam-doan',
    sectionOrder: 5,
    sectionTitleVi: 'Yêu cầu và bổn phận, Cho phép và cấm đoán',
  },
  {
    id: 'gr-so-cap-27',
    pattern: 'V - 아/어야 되다 / 하다.',
    meaningVi: 'Phải... — nghĩa vụ, bổn phận',
    usageNotes:
      'Diễn tả một hành động bắt buộc phải làm. Trong văn nói có thể dùng cả -아/어야 되다 và -아/어야 하다, nhưng trong văn viết chỉ dùng -아/어야 하다. Hình thức quá khứ -았/었어야 되다/하다 mang nghĩa "lẽ ra đã phải làm gì đó".',
    examples: [
      { ko: '식사하기 전에 손을 씻어야 해요.', vi: 'Trước khi ăn phải rửa tay.' },
      { ko: '오늘은 고향에 가야 해요.', vi: 'Hôm nay tôi phải về quê.' },
      { ko: '저녁에 숙제를 해야 돼요.', vi: 'Buổi tối tôi phải làm bài tập.' },
    ],
    commonMistakes: [
      'Trong văn viết trang trọng chỉ dùng -아/어야 하다, tránh dùng -아/어야 되다 vốn thiên về văn nói.',
      'Dạng quá khứ -았/었어야 하다 mang nghĩa tiếc nuối "lẽ ra phải làm" chứ không đơn thuần là "đã phải làm" — dễ bị hiểu nhầm.',
    ],
    level: 'so-cap',
    section: 'yeu-cau-va-bon-phan-cho-phep-va-cam-doan',
    sectionOrder: 5,
    sectionTitleVi: 'Yêu cầu và bổn phận, Cho phép và cấm đoán',
  },
  {
    id: 'gr-so-cap-28',
    pattern: 'A V - 아/어도 되다.',
    meaningVi: 'Được phép... — xin phép và cho phép',
    usageNotes:
      'Diễn tả sự cho phép hay chấp thuận thực hiện một hành động. Khi hỏi xin phép bằng -아/어도 되다, nếu đồng ý thì đáp lại cũng bằng -아/어도 되다, còn nếu từ chối thì dùng -(으)면 안 되다 chứ không dùng -아/어도 안 되다. Có thể thay thế bằng -아/어도 괜찮다 hoặc -아/어도 좋다 với nghĩa tương tự.',
    examples: [
      { ko: '에어컨을 켜도 돼요? 네, 켜도 돼요.', vi: 'Tôi bật điều hòa được không? Vâng, được ạ.' },
      { ko: '기숙사에서 요리해도 돼요? 아니요, 하면 안 돼요.', vi: 'Nấu ăn trong ký túc xá được không? Không, không được đâu.' },
      { ko: '여기에서 사진을 찍어도 돼요?', vi: 'Ở đây chụp ảnh được không?' },
    ],
    commonMistakes: [
      'Khi từ chối, không nói "아/어도 안 돼요" mà phải dùng cấu trúc -(으)면 안 되다.',
      '-아/어도 되다, -아/어도 괜찮다, -아/어도 좋다 có thể thay thế cho nhau, học viên hay chỉ nhớ mỗi -아/어도 되다.',
    ],
    level: 'so-cap',
    section: 'yeu-cau-va-bon-phan-cho-phep-va-cam-doan',
    sectionOrder: 5,
    sectionTitleVi: 'Yêu cầu và bổn phận, Cho phép và cấm đoán',
  },
  {
    id: 'gr-so-cap-29',
    pattern: 'A/V - (으)면 안 되다.',
    meaningVi: 'Không được... — cấm đoán',
    usageNotes:
      'Dùng để cấm đoán, ngăn cản ai đó không được phép làm một việc gì đó. Dạng phủ định của cấu trúc này là -지 않으면 안 되다, mang nghĩa nhấn mạnh việc bắt buộc phải làm (tương đương "nếu không làm thì không được", tức là "phải làm").',
    examples: [
      { ko: '지금 길을 건너면 안 돼요.', vi: 'Bây giờ không được qua đường.' },
      { ko: '여기 앉으면 안 돼요.', vi: 'Không được ngồi ở đây.' },
      { ko: '수업 시간에 휴대폰을 사용하면 안 돼요.', vi: 'Không được dùng điện thoại trong giờ học.' },
    ],
    commonMistakes: [
      'Đừng nhầm dạng phủ định -지 않으면 안 되다 với nghĩa cấm đơn thuần — thực chất nó mang nghĩa "bắt buộc phải làm", một dạng nhấn mạnh nghĩa vụ.',
      'Phân biệt với -아/어도 되다: khi được phép dùng -아/어도 되다, còn khi cấm thì dùng -(으)면 안 되다, không trộn lẫn hai cấu trúc.',
    ],
    level: 'so-cap',
    section: 'yeu-cau-va-bon-phan-cho-phep-va-cam-doan',
    sectionOrder: 5,
    sectionTitleVi: 'Yêu cầu và bổn phận, Cho phép và cấm đoán',
  },
  {
    id: 'gr-so-cap-30',
    pattern: 'A/V – 지 않아도 되다. (안 A/V - 아 /어도 되다)',
    meaningVi: 'Không cần... cũng được — không bắt buộc',
    usageNotes:
      'Diễn tả việc không cần thiết phải thực hiện hành động nào đó; đây là dạng phủ định của -아/어야 되다/하다 (mục 27), nghĩa là thay vì "phải làm" thì chuyển thành "không cần làm".',
    examples: [
      { ko: '금요일에는 교복을 안 입어도 돼요.', vi: 'Thứ Sáu không cần mặc đồng phục cũng được.' },
      { ko: '평일이니까 영화 표를 미리 사지 않아도 돼요.', vi: 'Vì là ngày thường nên không cần mua vé xem phim trước.' },
      { ko: '숙제를 하지 않아도 괜찮아요.', vi: 'Không làm bài tập cũng không sao.' },
    ],
    commonMistakes: [
      'Không nhầm với -(으)면 안 되다 (mục 29, "không được làm") — -지 않아도 되다 nghĩa là "không bắt buộc phải làm" chứ không phải cấm.',
      'Có thể diễn đạt bằng cả hai dạng 안 A/V-아/어도 되다 và A/V-지 않아도 되다, ý nghĩa như nhau.',
    ],
    level: 'so-cap',
    section: 'yeu-cau-va-bon-phan-cho-phep-va-cam-doan',
    sectionOrder: 5,
    sectionTitleVi: 'Yêu cầu và bổn phận, Cho phép và cấm đoán',
  },
  {
    id: 'gr-so-cap-31',
    pattern: 'A/V - (으)ㄹ까요?',
    meaningVi: 'Tôi làm... nhé?, chúng ta... nhé?, chắc là... nhỉ? — hỏi ý kiến, rủ rê hoặc suy đoán',
    usageNotes:
      'Cấu trúc này có ba cách dùng chính: (1) người nói hỏi ý kiến người nghe về việc mình định làm, chủ ngữ ngầm là 제가/내가; (2) người nói rủ người nghe cùng làm gì đó, chủ ngữ ngầm là 우리; (3) dùng để hỏi, suy nghĩ hay suy đoán về một đối tượng ở ngôi thứ ba.',
    examples: [
      { ko: '저는 어디에 앉을까요?', vi: 'Tôi ngồi ở đâu nhỉ?' },
      { ko: '오늘 저녁에 우리 같이 먹을까요?', vi: 'Tối nay chúng ta cùng ăn nhé?' },
      { ko: '요즘 꽃이 비쌀까요?', vi: 'Dạo này hoa có đắt không nhỉ?' },
    ],
    commonMistakes: [
      'Cần phân biệt ba nghĩa dựa vào chủ ngữ ngầm: ngôi thứ nhất (hỏi ý kiến), 우리 (rủ rê), hay ngôi thứ ba (suy đoán) — người học hay dịch máy móc thành một nghĩa duy nhất.',
      'Không nhầm với -(으)ㄹ래요? (mục 34): -(으)ㄹ까요? thiên về hỏi ý kiến/gợi ý, còn -(으)ㄹ래요? thiên về hỏi ý định cá nhân.',
    ],
    level: 'so-cap',
    section: 'hoi-y-kien-va-goi-y',
    sectionOrder: 6,
    sectionTitleVi: 'Hỏi ý kiến và gợi ý',
  },
  {
    id: 'gr-so-cap-32',
    pattern: 'V - (으) ㅂ시다.',
    meaningVi: 'Hãy cùng..., chúng ta cùng... — câu cầu khiến',
    usageNotes:
      'Dùng để gợi ý hay đề nghị người nghe cùng làm gì, là câu cầu khiến; -아/어요 kèm 함께/같이 cũng có thể mang nghĩa cầu khiến tương tự. Thường dùng khi người nói gợi ý cho cả một tập thể, hoặc khi người nghe nhỏ tuổi hơn hay có địa vị thấp hơn — không nên dùng với người lớn tuổi hoặc có địa vị cao hơn mình. Khi muốn đề nghị đừng làm gì thì dùng -지 맙시다 hoặc -지 마요.',
    examples: [
      { ko: '지하철을 탑시다.', vi: 'Chúng ta đi tàu điện ngầm nhé.' },
      { ko: '김치를 만듭시다.', vi: 'Chúng ta cùng làm kim chi nhé.' },
      { ko: '우리 같이 비빔밥 먹읍시다.', vi: 'Chúng ta cùng ăn bibimbap nhé.' },
    ],
    commonMistakes: [
      'Không dùng -(으)ㅂ시다 với người lớn tuổi hơn hoặc cấp trên vì nghe có vẻ thiếu tôn trọng — nên dùng -(으)실래요? hoặc -는 게 어때요? thay thế.',
      'Khi muốn đề nghị "đừng làm", dùng -지 맙시다 chứ không phải ghép "안" vào trước -읍시다.',
    ],
    level: 'so-cap',
    section: 'hoi-y-kien-va-goi-y',
    sectionOrder: 6,
    sectionTitleVi: 'Hỏi ý kiến và gợi ý',
  },
  {
    id: 'gr-so-cap-33',
    pattern: 'V - (으) 시겠어요?',
    meaningVi: 'Anh/chị sẽ... chứ ạ? — hỏi ý kiến lịch sự, trang trọng',
    usageNotes:
      'Dùng để gợi ý hoặc hỏi ý kiến, dự định của người nghe một cách lịch sự và trang trọng; lịch sự và trang trọng hơn -(으)ㄹ래요?/-(으)실래요?, thường dùng trong giao tiếp với khách hàng, người lớn tuổi hoặc trong hoàn cảnh trang trọng.',
    examples: [
      { ko: '내일 몇 시에 오시겠어요?', vi: 'Ngày mai anh/chị sẽ đến lúc mấy giờ ạ?' },
      { ko: '커피에 설탕을 넣으시겠어요?', vi: 'Anh/chị có muốn cho đường vào cà phê không ạ?' },
      { ko: '여기에 앉으시겠어요?', vi: 'Mời anh/chị ngồi đây được không ạ?' },
    ],
    commonMistakes: [
      'Đây là dạng lịch sự/trang trọng nhất trong nhóm hỏi ý kiến, không nên dùng với bạn bè thân thiết vì nghe quá xa cách.',
      'Không nhầm với -(으)세요 (mệnh lệnh lịch sự): -(으)시겠어요? là câu hỏi ý kiến, còn -(으)세요 là yêu cầu trực tiếp.',
    ],
    level: 'so-cap',
    section: 'hoi-y-kien-va-goi-y',
    sectionOrder: 6,
    sectionTitleVi: 'Hỏi ý kiến và gợi ý',
  },
  {
    id: 'gr-so-cap-34',
    pattern: 'V - (으)ㄹ래요?',
    meaningVi: 'Bạn sẽ...?, tôi sẽ..., cùng... nhé? — hỏi ý định hoặc đề nghị nhẹ nhàng',
    usageNotes:
      'Có hai cách dùng: hỏi ý định của người nghe, hoặc đề nghị người nghe một cách nhẹ nhàng mang tính cầu khiến; thường dùng trong văn nói giữa bạn bè thân thiết. Có thể dùng dạng phủ định -지 않을래요?/안 -(으)ㄹ래요? với ý nghĩa tương đương dạng khẳng định. Nếu muốn thể hiện sự tôn kính với người có quan hệ thân mật thì dùng -(으)실래요?. Khi đáp lại, có thể trả lời bằng chính -(으)ㄹ래요 hoặc -(으)ㄹ게요.',
    examples: [
      { ko: '가: 선미 씨는 뭐 먹을래요? 나: 저는 갈비탕을 먹을래요.', vi: 'A: Seon-mi định ăn gì? B: Tôi sẽ ăn canh sườn.' },
      { ko: '가: 유키 씨, 우리 시험 끝나고 뭐 할래요? 나: 영화 볼까요?', vi: 'A: Yuki ơi, thi xong chúng mình làm gì nhỉ? B: Đi xem phim nhé?' },
      { ko: '저는 집에 있을래요.', vi: 'Tôi sẽ ở nhà.' },
    ],
    commonMistakes: [
      'Chỉ dùng trong văn nói thân mật, không dùng trong hoàn cảnh trang trọng — muốn lịch sự hơn thì thêm -(으)실래요?.',
      'Phân biệt với -(으)ㄹ까요?: -(으)ㄹ래요? hỏi ý định cá nhân rõ ràng hơn, còn -(으)ㄹ까요? thiên về hỏi ý kiến/gợi ý chung.',
    ],
    level: 'so-cap',
    section: 'hoi-y-kien-va-goi-y',
    sectionOrder: 6,
    sectionTitleVi: 'Hỏi ý kiến và gợi ý',
  },
  {
    id: 'gr-so-cap-35',
    pattern: 'V - 고 싶다.',
    meaningVi: 'Muốn...',
    usageNotes:
      'Trong câu trần thuật thể hiện điều người nói muốn, trong câu nghi vấn dùng để hỏi điều người nghe muốn; khi nói về mong muốn của người thứ ba thì phải chuyển thành dạng -고 싶어 하다 dù ở câu hỏi hay câu trần thuật. Thì quá khứ là -고 싶었다, thì tương lai/phỏng đoán là -고 싶겠다 hoặc -고 싶을 것이다. Với tính từ, không dùng trực tiếp A-고 싶다 mà phải chuyển tính từ thành động từ bằng -아/어/여지다 rồi mới thêm -고 싶다. Riêng động từ 보고 싶다 khi chủ ngữ là 나(저)/우리 và mang nghĩa nhớ nhung thì danh từ đi kèm phải dùng trợ từ 이/가.',
    examples: [
      { ko: '저는 돌아가신 엄마가 보고 싶어요.', vi: 'Tôi nhớ mẹ đã mất của mình.' },
      { ko: '예뻐지고 싶어요.', vi: 'Tôi muốn trở nên xinh đẹp hơn.' },
      { ko: '흐엉 씨는 한국어를 배우고 싶어해요.', vi: 'Hương muốn học tiếng Hàn.' },
    ],
    commonMistakes: [
      'Với ngôi thứ ba luôn phải dùng -고 싶어 하다, không dùng trực tiếp -고 싶다 vốn chỉ dành cho người nói/người nghe.',
      'Với tính từ, không nói trực tiếp "예쁘고 싶어요" mà phải chuyển thành "예뻐지고 싶어요" (trở nên xinh đẹp).',
    ],
    level: 'so-cap',
    section: 'hi-vong-va-uoc-muon',
    sectionOrder: 7,
    sectionTitleVi: 'Hi vọng và ước muốn',
  },
  {
    id: 'gr-so-cap-36',
    pattern: 'A/V - 았/었으면 좋겠다.',
    meaningVi: 'Ước gì..., giá mà... thì tốt — mong ước khó thành hiện thực',
    usageNotes:
      'Diễn tả mong ước hoặc hy vọng về một điều gì đó không có thật hoặc khác với thực tế hiện tại; có thể thay 좋겠다 bằng 하다 hoặc 싶다. So với -(으)면 좋겠다, dạng -았/었으면 좋겠다 diễn tả mong ước khó thành hiện thực hơn và mang sắc thái nhấn mạnh hơn dù về mặt hình thức là thì quá khứ.',
    examples: [
      { ko: '내일 날씨가 좋으면 좋겠어요.', vi: 'Ước gì ngày mai trời đẹp.' },
      { ko: '부자였으면 좋겠어요.', vi: 'Ước gì tôi giàu có.' },
      { ko: '친구가 많았으면 좋겠어요.', vi: 'Ước gì tôi có nhiều bạn bè.' },
    ],
    commonMistakes: [
      'Dù có hình thức quá khứ (았/었) nhưng ý nghĩa lại hướng về hiện tại/tương lai — người học dễ hiểu nhầm là nói về việc trong quá khứ.',
      'Phân biệt với -(으)면 좋겠다: -았/었으면 좋겠다 nhấn mạnh điều mong ước khó xảy ra hơn, còn -(으)면 좋겠다 trung tính hơn.',
    ],
    level: 'so-cap',
    section: 'hi-vong-va-uoc-muon',
    sectionOrder: 7,
    sectionTitleVi: 'Hi vọng và ước muốn',
  },
  {
    id: 'gr-so-cap-37',
    pattern: 'A/V – 기 바라다.',
    meaningVi: 'Hi vọng rằng... — trang trọng, dùng trong thông báo, lời chúc',
    usageNotes:
      'Diễn tả sự hi vọng vào điều gì đó, thường dùng trong văn viết mang tính thông báo trang trọng hoặc trong văn nói trang trọng, lời chúc. Ở dạng khẩu ngữ, người Hàn thường chia thành 바래요 dù chính tả chuẩn vẫn là 바라요.',
    examples: [
      { ko: '할아버지께서는 건강하시기 바랍니다.', vi: 'Kính chúc ông luôn mạnh khỏe.' },
      { ko: '모두 제시간에 와 주시기 바랍니다.', vi: 'Mong mọi người đến đúng giờ.' },
      { ko: '계단을 이용해 주시기 바랍니다.', vi: 'Kính mong quý khách sử dụng cầu thang bộ.' },
    ],
    commonMistakes: [
      'Chính tả chuẩn là 바라다/바라요, không phải 바래다/바래요, dù trong thực tế người Hàn hay nói và viết sai thành 바래요.',
      'Cấu trúc này trang trọng, thường dùng trong thông báo, lời chúc — không phù hợp trong giao tiếp suồng sã hàng ngày.',
    ],
    level: 'so-cap',
    section: 'hi-vong-va-uoc-muon',
    sectionOrder: 7,
    sectionTitleVi: 'Hi vọng và ước muốn',
  },
  {
    id: 'gr-so-cap-38',
    pattern: 'V - 아/어 보다.',
    meaningVi: 'Thử..., đã từng... — thử làm hoặc kinh nghiệm bản thân',
    usageNotes:
      'Ở thì hiện tại, cấu trúc diễn tả việc thử làm gì đó; ở thì quá khứ (-아/어 봤다), cấu trúc diễn tả kinh nghiệm đã từng làm việc đó. Chỉ dùng để nói về kinh nghiệm của chính bản thân người nói, không mang nghĩa gốc "xem, nhìn" của 보다.',
    examples: [
      { ko: '그 바지를 입어 보세요.', vi: 'Anh/chị hãy thử mặc chiếc quần đó xem.' },
      { ko: '저는 스키를 타 봤어요.', vi: 'Tôi đã từng trượt tuyết.' },
      { ko: '이 음식 먹어 봐.', vi: 'Thử ăn món này xem.' },
    ],
    commonMistakes: [
      'Thì hiện tại (-아/어 보세요, -아/어 봐) mang nghĩa "thử làm", còn thì quá khứ (-아/어 봤어요) mang nghĩa "đã từng làm" — dễ nhầm lẫn hai sắc thái này.',
      'Chỉ dùng để nói về trải nghiệm của bản thân, không dùng cho người khác ở ngôi thứ ba mà không có ngữ cảnh rõ ràng.',
    ],
    level: 'so-cap',
    section: 'thu-nghiem-va-kinh-nghiem',
    sectionOrder: 8,
    sectionTitleVi: 'Thử nghiệm và kinh nghiệm',
  },
  {
    id: 'gr-so-cap-39',
    pattern: 'V - (으)ㄴ 적이 있다/ 없다.',
    meaningVi: 'Đã từng..., chưa từng... — kinh nghiệm trong quá khứ',
    usageNotes:
      'Thể hiện việc có hay không có kinh nghiệm, trải nghiệm về một việc gì đó trong quá khứ; thường kết hợp với -아/어 보다 thành -아/어 본 적이 있다/없다 để nhấn mạnh việc "đã từng thử". Không dùng cấu trúc này để mô tả hành động thường xuyên xảy ra, lặp đi lặp lại trong quá khứ.',
    examples: [
      { ko: '제주도에 간 적이 있어요?', vi: 'Bạn đã từng đi đảo Jeju chưa?' },
      { ko: '저는 삼계탕을 먹어 본 적이 없어요.', vi: 'Tôi chưa từng ăn thử gà hầm sâm.' },
      { ko: '설악산을 구경해 본 적이 있지요?', vi: 'Bạn đã từng đi ngắm cảnh núi Seorak rồi phải không?' },
    ],
    commonMistakes: [
      'Không dùng cấu trúc này để nói về việc từng làm thường xuyên trong quá khứ (thói quen cũ) — nên dùng -았/었었다 hoặc -곤 했다 thay thế.',
      'Thường kết hợp tự nhiên với -아/어 보다 thành "본 적이 있다/없다" để nhấn mạnh trải nghiệm thử làm.',
    ],
    level: 'so-cap',
    section: 'thu-nghiem-va-kinh-nghiem',
    sectionOrder: 8,
    sectionTitleVi: 'Thử nghiệm và kinh nghiệm',
  },
  {
    id: 'gr-so-cap-40',
    pattern: 'V - (으)러 가다 / 오다 / 다니다…',
    meaningVi: 'Đi/đến... để... — mục đích di chuyển',
    usageNotes:
      'Diễn tả mục đích của việc đi đến một nơi nào đó để thực hiện hành động. Sau -(으)러 chỉ kết hợp được với các động từ chỉ sự di chuyển như 가다, 오다, 다니다, 올라가다, 나가다, còn động từ đứng trước -(으)러 thì không được là động từ chuyển động. Địa điểm trong câu luôn phải đi kèm trợ từ 에.',
    examples: [
      { ko: '요즘 수영을 배우러 다녀요.', vi: 'Dạo này tôi đi học bơi.' },
      { ko: '저녁을 먹으러 식당에 가요.', vi: 'Tôi đến nhà hàng để ăn tối.' },
      { ko: '백화점에 목도리를 사러 왔어요.', vi: 'Tôi đến trung tâm thương mại để mua khăn quàng cổ.' },
    ],
    commonMistakes: [
      'Vế sau -(으)러 chỉ được là động từ chuyển động (가다, 오다, 다니다...), không dùng được với các động từ khác — nhầm lẫn phổ biến khi ghép với động từ hành động thông thường.',
      'Địa điểm phải dùng trợ từ 에, không dùng 을/를 hay các trợ từ khác.',
    ],
    level: 'so-cap',
    section: 'muc-dich-va-y-dinh',
    sectionOrder: 9,
    sectionTitleVi: 'Mục đích và ý định',
  },
  {
    id: 'gr-so-cap-41',
    pattern: 'V - (으)려고',
    meaningVi: 'Để... — ý định, kế hoạch',
    usageNotes:
      'Diễn tả ý định hay kế hoạch của người nói: để thực hiện được điều nêu ở vế trước, người nói sẽ làm hành động ở vế sau. Vế sau không thể là hành động chưa xảy ra (không kết hợp với thì tương lai) và không dùng được với câu đề nghị hay mệnh lệnh.',
    examples: [
      { ko: '음악을 들으려고 라디오를 켰어요.', vi: 'Để nghe nhạc tôi đã bật radio.' },
      { ko: '여행을 가려고 비행기 표를 예약했어요.', vi: 'Để đi du lịch tôi đã đặt vé máy bay.' },
      { ko: '김치를 만들려고 배추를 챙겼어요.', vi: 'Để làm kim chi tôi đã chuẩn bị cải thảo.' },
    ],
    commonMistakes: [
      'Khác với -(으)러 가다/오다: -(으)려고 kết hợp được với tất cả các loại động từ ở vế sau (không chỉ động từ chuyển động), nhưng vế sau không thể ở thì tương lai và không dùng được với câu cầu khiến/mệnh lệnh.',
      'Vế trước diễn tả ý định, vế sau là hành động cụ thể đã thực hiện để đạt ý định đó — không đảo ngược trật tự hai vế.',
    ],
    level: 'so-cap',
    section: 'muc-dich-va-y-dinh',
    sectionOrder: 9,
    sectionTitleVi: 'Mục đích và ý định',
  },
  {
    id: 'gr-so-cap-42',
    pattern: 'V - (으)려고 하다.',
    meaningVi: 'Định... — ý chí, kế hoạch tương lai',
    usageNotes:
      'Diễn tả ý chí, ý định hay kế hoạch trong tương lai của chủ thể; chỉ dùng khi hành động hay kế hoạch đó chưa xảy ra. Dạng quá khứ -(으)려고 했다 diễn tả một ý định đã có trước đây, có thể đã hoặc chưa thực hiện được.',
    examples: [
      { ko: '점심에는 비빔밥을 먹으려고 해요.', vi: 'Bữa trưa tôi định ăn bibimbap.' },
      { ko: '케이크를 만들려고 해요.', vi: 'Tôi định làm bánh kem.' },
      { ko: '저녁에 숙제를 하려고 해요.', vi: 'Tối nay tôi định làm bài tập.' },
    ],
    commonMistakes: [
      'Chỉ dùng cho việc chưa xảy ra, không dùng cho việc đã hoàn thành — khác với -기로 하다 (mục 44) mang nghĩa quyết định chắc chắn hơn.',
      'Dạng quá khứ -(으)려고 했다 không có nghĩa là "đã làm" mà là "đã từng định làm" (có thể chưa thực hiện được), dễ gây hiểu nhầm.',
    ],
    level: 'so-cap',
    section: 'muc-dich-va-y-dinh',
    sectionOrder: 9,
    sectionTitleVi: 'Mục đích và ý định',
  },
  {
    id: 'gr-so-cap-43',
    pattern: 'N 을/를 위해(서), V - 기 위해(서)',
    meaningVi: 'Để..., vì... — mục đích, dùng được cả với mệnh lệnh/cầu khiến',
    usageNotes:
      'Diễn tả mục đích hay ý đồ thực hiện hành động: để đạt được mục đích nêu ở vế trước, người nói thực hiện hành động ở vế sau. Khác với -(으)려고, cấu trúc -기 위해(서) có thể kết hợp được với -아/어야 해요, -(으)ㅂ시다, -(으)세요, -(으)ㄹ까요? ở vế sau, tức là dùng được với câu mệnh lệnh, cầu khiến, nghi vấn.',
    examples: [
      { ko: '한국에서 취업하기 위해 한국어를 공부하고 있어요.', vi: 'Để xin được việc ở Hàn Quốc, tôi đang học tiếng Hàn.' },
      { ko: '살을 빼기 위해서 운동하고 있어요.', vi: 'Để giảm cân tôi đang tập thể dục.' },
      { ko: '가족을 위해 돈을 많이 벌겠어요.', vi: 'Vì gia đình tôi sẽ kiếm thật nhiều tiền.' },
    ],
    commonMistakes: [
      'Khác với -(으)려고, -기 위해(서) dùng được với câu mệnh lệnh, cầu khiến, nghi vấn ở vế sau — đây là điểm khác biệt quan trọng nhất giữa hai cấu trúc.',
      'N + 을/를 위해(서) dùng trực tiếp sau danh từ, còn V + 기 위해(서) dùng sau động từ.',
    ],
    level: 'so-cap',
    section: 'muc-dich-va-y-dinh',
    sectionOrder: 9,
    sectionTitleVi: 'Mục đích và ý định',
  },
  {
    id: 'gr-so-cap-44',
    pattern: 'V - 기로 하다.',
    meaningVi: 'Quyết định sẽ..., định sẽ... — quyết tâm, lời hứa',
    usageNotes:
      'Thể hiện sự quyết tâm hay lời hứa hẹn sẽ thực hiện một hành động nào đó; thường dùng ở dạng quá khứ -기로 했다 nhưng mang ý nghĩa hướng về tương lai (thời điểm ra quyết định đã ở quá khứ, việc thực hiện là tương lai).',
    examples: [
      { ko: '영화를 보러 가기로 했어요.', vi: 'Tôi đã quyết định sẽ đi xem phim.' },
      { ko: '이번에는 여행을 가지 않기로 했어요.', vi: 'Lần này tôi đã quyết định sẽ không đi du lịch.' },
      { ko: '다음 달부터 매일 운동하기로 했어요.', vi: 'Tôi đã quyết định từ tháng sau sẽ tập thể dục mỗi ngày.' },
    ],
    commonMistakes: [
      'Dạng -기로 했다 tuy chia ở thì quá khứ nhưng ý nghĩa hướng về tương lai — không hiểu nhầm là hành động đã xảy ra rồi.',
      'Mang tính quyết tâm/cam kết chắc chắn hơn -(으)려고 하다, thường dùng khi đã có sự cân nhắc, thống nhất.',
    ],
    level: 'so-cap',
    section: 'muc-dich-va-y-dinh',
    sectionOrder: 9,
    sectionTitleVi: 'Mục đích và ý định',
  },
  {
    id: 'gr-so-cap-45',
    pattern: 'V – (으)ㄹ까 하다.',
    meaningVi: 'Phân vân sẽ..., đang nghĩ sẽ... — do dự, chưa chắc chắn',
    usageNotes:
      'Thể hiện suy nghĩ còn phân vân, do dự, chưa chắc chắn về việc có nên làm gì đó hay không; có thể dùng dạng V-(으)ㄹ까 말까 하다 để nhấn mạnh sự phân vân giữa làm và không làm.',
    examples: [
      { ko: '다음 학기에 중국어를 배울까 해요.', vi: 'Tôi đang phân vân học kỳ tới có nên học tiếng Trung không.' },
      { ko: '주말에 낚시할까 말까 해요.', vi: 'Cuối tuần tôi đang phân vân có nên đi câu cá hay không.' },
      { ko: '저녁에 치킨을 시킬까 해요.', vi: 'Tối nay tôi đang nghĩ có nên gọi gà rán hay không.' },
    ],
    commonMistakes: [
      'Mức độ chắc chắn thấp hơn -(으)려고 하다 hay -기로 하다 — thể hiện sự do dự, chưa quyết định dứt khoát.',
      'Dạng -(으)ㄹ까 말까 하다 nhấn mạnh việc phân vân giữa hai lựa chọn đối lập, không dùng khi đã chắc chắn.',
    ],
    level: 'so-cap',
    section: 'muc-dich-va-y-dinh',
    sectionOrder: 9,
    sectionTitleVi: 'Mục đích và ý định',
  },
  {
    id: 'gr-so-cap-46',
    pattern: 'A/V - (으)면',
    meaningVi: 'Nếu... — điều kiện hoặc giả định',
    usageNotes:
      'Dùng để đưa ra điều kiện cho một sự việc, tình huống xảy ra hàng ngày hoặc có tính lặp lại, hoặc để giả định một sự việc chưa xảy ra; vì mang tính giả định hướng tới tương lai nên vế sau chắc chắn không dùng thì quá khứ. Khi diễn tả giả định, thường đi kèm các trạng từ như 혹시, 만일, 만약(에).',
    examples: [
      { ko: '저는 술을 마시면 얼굴이 빨개져요.', vi: 'Hễ uống rượu là mặt tôi lại đỏ lên.' },
      { ko: '수업이 일찍 끝나면 뭐 할 거예요?', vi: 'Nếu tan học sớm thì bạn sẽ làm gì?' },
      { ko: '만약에 복권에 당첨되면 세계 여행을 갈 거예요.', vi: 'Nếu trúng số tôi sẽ đi du lịch vòng quanh thế giới.' },
    ],
    commonMistakes: [
      'Vế sau của -(으)면 không được chia ở thì quá khứ vì bản chất là giả định hướng tới tương lai hoặc điều kiện lặp lại.',
      'Khi câu mang tính giả định rõ ràng (điều chưa chắc xảy ra), nên thêm 만약(에)/혹시 để nhấn mạnh, tránh nhầm với nghĩa điều kiện lặp lại hàng ngày.',
    ],
    level: 'so-cap',
    section: 'dieu-kien-va-gia-dinh',
    sectionOrder: 10,
    sectionTitleVi: 'Điều kiện và giả định',
  },
  {
    id: 'gr-so-cap-47',
    pattern: 'V - (으)려면',
    meaningVi: 'Nếu muốn..., nếu định... — điều kiện để đạt một ý định',
    usageNotes:
      'Là hình thức tỉnh lược của -(으)려고 하면, diễn tả kế hoạch hay ý định nêu ở vế trước và điều kiện cần có để đạt được kế hoạch đó ở vế sau; vế sau thường ở các dạng -아/어야 해요/돼요, -(으)면 돼요, -(으)세요, 이/가 필요해요, -는 게 좋아요.',
    examples: [
      { ko: '운전을 하려면 면허증이 있어야 해요.', vi: 'Nếu muốn lái xe thì phải có bằng lái.' },
      { ko: '집을 구하려면 근처 부동산에 가 보세요.', vi: 'Nếu muốn tìm nhà thì hãy đến văn phòng bất động sản gần đó.' },
      { ko: '택시를 빨리 잡으려면 택시 승강장에 가야 돼요.', vi: 'Nếu muốn bắt taxi nhanh thì phải ra bến taxi.' },
    ],
    commonMistakes: [
      'Vế trước nêu ý định/mục tiêu, vế sau luôn là điều kiện cần thiết để đạt mục tiêu đó — không đảo ngược cấu trúc.',
      'Không nhầm với -(으)면 (mục 46, điều kiện chung chung): -(으)려면 luôn gắn liền với một ý định/kế hoạch cụ thể ở vế trước.',
    ],
    level: 'so-cap',
    section: 'dieu-kien-va-gia-dinh',
    sectionOrder: 10,
    sectionTitleVi: 'Điều kiện và giả định',
  },
  {
    id: 'gr-so-cap-48',
    pattern: 'A/V - 아/어도',
    meaningVi: 'Dù, cho dù... — nhượng bộ',
    usageNotes:
      'Là cấu trúc nhượng bộ, diễn tả cho dù hành động hay trạng thái ở vế trước có xảy ra thì vế sau vẫn xảy ra, không thay đổi; có thể thêm trạng từ 아무리 vào trước vế trước để nhấn mạnh nghĩa "dù có như thế nào đi chăng nữa".',
    examples: [
      { ko: '시간이 없어도 아침을 먹어야 돼요.', vi: 'Dù không có thời gian cũng phải ăn sáng.' },
      { ko: '메이 씨는 아무리 먹어도 살이 안 찌지요? 부러워요.', vi: 'Mei dù ăn bao nhiêu cũng không béo lên nhỉ? Ghen tị ghê.' },
      { ko: '아무리 바빠도 아침을 먹어야지요.', vi: 'Dù bận đến đâu cũng phải ăn sáng chứ.' },
    ],
    commonMistakes: [
      'Thường đi kèm 아무리 để nhấn mạnh mức độ nhượng bộ, người học hay quên thêm trạng từ này khi muốn nhấn mạnh.',
      'Không nhầm với -(으)면 (điều kiện): -아/어도 mang nghĩa "dù xảy ra... thì vẫn...", trái ngược hoàn toàn với quan hệ điều kiện - kết quả thông thường.',
    ],
    level: 'so-cap',
    section: 'dieu-kien-va-gia-dinh',
    sectionOrder: 10,
    sectionTitleVi: 'Điều kiện và giả định',
  },
  {
    id: 'gr-so-cap-49',
    pattern: 'A - 아/어지다',
    meaningVi: 'Trở nên... — biến đổi trạng thái theo thời gian (tính từ)',
    usageNotes:
      'Thể hiện sự biến đổi dần dần của một trạng thái theo thời gian; khi kết hợp với cấu trúc này, tính từ (A) sẽ chuyển thành động từ về mặt ngữ pháp, có thể chia được ở các dạng tiếp diễn như -고 있다.',
    examples: [
      { ko: '아이스크림을 많이 먹으면 뚱뚱해질 거예요.', vi: 'Nếu ăn nhiều kem thì sẽ béo lên đấy.' },
      { ko: '날씨가 좋아졌어요.', vi: 'Thời tiết đã trở nên đẹp hơn.' },
      { ko: '한국 생활에 점점 익숙해졌어요.', vi: 'Tôi dần trở nên quen với cuộc sống ở Hàn Quốc.' },
    ],
    commonMistakes: [
      'Sau khi kết hợp với -아/어지다, tính từ trở thành động từ về mặt ngữ pháp, có thể dùng -고 있다 (예: 좋아지고 있어요) — người học hay quên điều này và chia sai.',
      'Phân biệt với -게 되다 (mục 50): -아/어지다 dùng cho tính từ (biến đổi trạng thái), còn -게 되다 dùng cho động từ (biến đổi tình huống/hành động khách quan).',
    ],
    level: 'so-cap',
    section: 'cau-truc-dien-ta-su-thay-doi',
    sectionOrder: 11,
    sectionTitleVi: 'Cấu trúc diễn tả sự thay đổi',
  },
  {
    id: 'gr-so-cap-50',
    pattern: 'V - 게 되다',
    meaningVi: 'Trở nên..., trở thành... — thay đổi khách quan (động từ)',
    usageNotes:
      'Có hai nét nghĩa: (1) thể hiện sự thay đổi trạng thái/tình huống do hoàn cảnh khách quan mang lại, khác với ý muốn hay ý chí chủ quan của chủ ngữ; (2) diễn tả một tình huống đã trở thành sự thật hoặc đã được quyết định.',
    examples: [
      { ko: '회사에 다닌 후부터 일찍 일어나게 됐어요.', vi: 'Từ khi đi làm tôi trở nên dậy sớm.' },
      { ko: '한국에 오기 전에 방탄소년단을 몰랐는데 한국에 와서 알게 됐어요.', vi: 'Trước khi đến Hàn Quốc tôi không biết đến BTS, nhưng sau khi đến đây thì tôi đã biết.' },
      { ko: '친구들과 노래방에 가서 연습하니까 노래를 잘하게 되었어요.', vi: 'Nhờ đi hát karaoke luyện tập cùng bạn bè mà tôi đã hát hay lên.' },
    ],
    commonMistakes: [
      '-게 되다 nhấn mạnh sự thay đổi mang tính khách quan, không phải do ý chí chủ động của người nói — khác với -기로 하다 (quyết định chủ động).',
      'Chỉ dùng với động từ, không dùng trực tiếp với tính từ — tính từ dùng -아/어지다 ở mục 49.',
    ],
    level: 'so-cap',
    section: 'cau-truc-dien-ta-su-thay-doi',
    sectionOrder: 11,
    sectionTitleVi: 'Cấu trúc diễn tả sự thay đổi',
  },
  {
    id: 'gr-so-cap-51',
    pattern: 'A/V - 겠어요.',
    meaningVi: 'Sẽ..., chắc sẽ... — phỏng đoán hoặc ý chí',
    usageNotes:
      'Thể hiện sự dự đoán, phỏng đoán về tình huống, trạng thái nào đó; thường dùng để mô tả ý chí, quyết tâm làm gì đó nếu dùng với động từ ở ngôi thứ nhất. Hình thức phỏng đoán ở thì quá khứ là -았/었겠어요.',
    examples: [
      { ko: '가: 어제 잠을 못 잤어요. 나: 그래요? 많이 피곤하겠어요.', vi: 'A: Hôm qua tôi không ngủ được. B: Vậy à? Chắc mệt lắm nhỉ.' },
      { ko: '오늘은 일이 있어서 못 가겠습니다.', vi: 'Hôm nay tôi có việc nên chắc không đi được.' },
      { ko: '어제 많이 피곤했겠네요.', vi: 'Hôm qua chắc bạn đã mệt lắm nhỉ.' },
    ],
    commonMistakes: [
      'Với động từ ở ngôi thứ nhất, -겠어요 thường mang nghĩa ý chí/quyết tâm, khác với nghĩa phỏng đoán thuần túy khi dùng với tính từ hoặc ngôi thứ ba.',
      'Phỏng đoán về việc trong quá khứ phải chia -았/었겠어요, không được chỉ dùng -겠어요 suông.',
    ],
    level: 'so-cap',
    section: 'phong-doan-va-suy-doan',
    sectionOrder: 12,
    sectionTitleVi: 'Phỏng đoán và suy đoán',
  },
  {
    id: 'gr-so-cap-52',
    pattern: 'A/V - (으)ㄹ 거예요.',
    meaningVi: 'Sẽ..., chắc là sẽ... — phỏng đoán (ngôi 3) hoặc dự định (ngôi 1/2)',
    usageNotes:
      'Dùng khi phỏng đoán một trạng thái hay hành động nào đó, chủ ngữ thường là ngôi thứ ba hoặc một sự vật, sự việc; còn khi chủ ngữ là ngôi thứ nhất hoặc thứ hai thì cấu trúc mang nghĩa dự định ở thì tương lai. Không dùng -(으)ㄹ 거예요 ở dạng câu hỏi, thay vào đó dùng -(으)ㄹ까요?. Phỏng đoán ở thì quá khứ dùng dạng -았/었을 거예요.',
    examples: [
      { ko: '내일도 추울 거예요.', vi: 'Ngày mai chắc cũng lạnh.' },
      { ko: '유리 씨가 지금 집에서 음악을 들을 거예요.', vi: 'Chắc bây giờ Yuri đang ở nhà nghe nhạc.' },
      { ko: '이번 주말에 친구들과 등산할 거예요.', vi: 'Cuối tuần này tôi sẽ đi leo núi với bạn bè.' },
    ],
    commonMistakes: [
      'Chủ ngữ quyết định nghĩa của câu: ngôi 1/2 mang nghĩa dự định tương lai, ngôi 3/sự vật mang nghĩa phỏng đoán.',
      'Không dùng dạng nghi vấn -(으)ㄹ 거예요? để hỏi phỏng đoán, phải chuyển sang -(으)ㄹ까요?.',
    ],
    level: 'so-cap',
    section: 'phong-doan-va-suy-doan',
    sectionOrder: 12,
    sectionTitleVi: 'Phỏng đoán và suy đoán',
  },
  {
    id: 'gr-so-cap-53',
    pattern: 'A/V - (으)ㄴ/는/(으)ㄹ 것 같다.',
    meaningVi: 'Hình như..., dường như... — phỏng đoán',
    usageNotes:
      'Diễn tả sự phỏng đoán của người nói, còn được dùng để bày tỏ quan điểm, suy nghĩ một cách tế nhị. Hình thức chia phụ thuộc vào thì và từ loại: động từ có đủ ba dạng quá khứ/hiện tại/tương lai tương ứng -(으)ㄴ/는/(으)ㄹ 것 같다, còn tính từ dùng -(으)ㄴ 것 같다 khi nói về trạng thái hiện tại đã quan sát được, hoặc -(으)ㄹ 것 같다 khi trạng thái còn mơ hồ, chưa chắc chắn.',
    examples: [
      { ko: '비가 그친 것 같아요.', vi: 'Hình như mưa đã tạnh rồi.' },
      { ko: '비가 올 것 같아요.', vi: 'Hình như trời sắp mưa.' },
      { ko: '그 책이 어려운 것 같아요.', vi: 'Cuốn sách đó có vẻ khó.' },
    ],
    commonMistakes: [
      'Với tính từ, cần phân biệt -(으)ㄴ 것 같다 (nhận định khá chắc chắn về hiện tại) và -(으)ㄹ 것 같다 (khi còn mơ hồ, chưa quan sát trực tiếp).',
      'Với động từ, ba dạng -(으)ㄴ/는/(으)ㄹ 것 같다 dễ bị dùng lẫn lộn nếu không để ý thì của hành động.',
    ],
    level: 'so-cap',
    section: 'phong-doan-va-suy-doan',
    sectionOrder: 12,
    sectionTitleVi: 'Phỏng đoán và suy đoán',
  },
  {
    id: 'gr-so-cap-54',
    pattern: 'A - 아/어 보이다',
    meaningVi: 'Trông có vẻ... — cảm nhận dựa trên vẻ ngoài',
    usageNotes:
      'Diễn tả sự phỏng đoán hay cảm nhận của người nói dựa trên vẻ bề ngoài của người, sự vật hay sự việc.',
    examples: [
      { ko: '지금 괜찮으세요? 슬퍼 보여요.', vi: 'Bạn ổn không? Trông có vẻ buồn đấy.' },
      { ko: '이 치마를 입으니까 젊어 보여요.', vi: 'Mặc chiếc váy này trông trẻ ra hẳn.' },
      { ko: '김치가 맛있어 보이네요.', vi: 'Kim chi trông có vẻ ngon nhỉ.' },
    ],
    commonMistakes: [
      'Chỉ kết hợp với tính từ, không dùng trực tiếp với động từ để diễn tả "trông có vẻ đang làm gì".',
      'Đây là nhận định dựa trên vẻ ngoài quan sát được, khác với -(으)ㄴ/는 것 같다 vốn có thể dựa trên nhiều loại thông tin khác, không chỉ vẻ ngoài.',
    ],
    level: 'so-cap',
    section: 'phong-doan-va-suy-doan',
    sectionOrder: 12,
    sectionTitleVi: 'Phỏng đoán và suy đoán',
  },
  {
    id: 'gr-so-cap-55',
    pattern: 'A/V - (으)ㄹ 텐데',
    meaningVi: 'Chắc sẽ... nên..., chắc là... đấy — phỏng đoán kèm bối cảnh, lời khuyên',
    usageNotes:
      'Là sự kết hợp giữa -(으)ㄹ 터 (dự định/khả năng) và -(으)ㄴ/는데 (nêu bối cảnh), dùng để đưa ra nhận định, phỏng đoán ở vế trước và đưa ra bối cảnh liên quan hoặc tương phản ở vế sau; vế sau thường dùng nhiều với câu mệnh lệnh hoặc cầu khiến. Phỏng đoán ở thì quá khứ chia dạng -았/었을 텐데, và có thể dùng ở cuối câu dưới dạng -(으)ㄹ 텐데요.',
    examples: [
      { ko: '아기가 깨면 엄마를 찾을 텐데 큰일이에요.', vi: 'Nếu em bé thức dậy chắc sẽ tìm mẹ, thế thì gay go đấy.' },
      { ko: '그 식당이 이미 닫았을 텐데 가지 마세요.', vi: 'Nhà hàng đó chắc đóng cửa rồi, đừng đến đó nữa.' },
      { ko: '바람이 불면 추울 텐데 따뜻하게 입고 가세요.', vi: 'Có gió chắc sẽ lạnh đấy, hãy mặc ấm rồi đi nhé.' },
    ],
    commonMistakes: [
      'Vế sau thường là lời khuyên, mệnh lệnh dựa trên phỏng đoán ở vế trước — không dùng cấu trúc này khi chỉ đơn thuần muốn phỏng đoán mà không có hàm ý khuyên nhủ.',
      'Phỏng đoán về việc trong quá khứ phải chia đúng dạng -았/었을 텐데, không chia nhầm thành -(으)ㄹ 텐데 suông.',
    ],
    level: 'so-cap',
    section: 'phong-doan-va-suy-doan',
    sectionOrder: 12,
    sectionTitleVi: 'Phỏng đoán và suy đoán',
  },
  {
    id: 'gr-so-cap-56',
    pattern: 'A/V - (으)ㄹ 테니까',
    meaningVi: 'Vì tôi sẽ... nên..., chắc là sẽ... nên... — lời hứa hoặc phỏng đoán kèm giải thích',
    usageNotes:
      'Có hai cách dùng theo chủ ngữ: khi chủ ngữ vế trước là ngôi thứ nhất, vế sau thường là ý chí hay lời hứa của người nói dành cho người nghe; khi chủ ngữ vế trước là ngôi thứ ba, vế trước mang nghĩa phỏng đoán và vế sau là lời giải thích, khuyên nhủ dựa trên phỏng đoán đó. Có thể dùng ở cuối câu dưới dạng -(으)ㄹ 테니까요.',
    examples: [
      { ko: '밖에 추울 테니까 나가지 마세요.', vi: 'Ngoài trời chắc lạnh lắm đấy, đừng ra ngoài nhé.' },
      { ko: '요즘 귤 철이라 귤이 싸고 맛있을 테니까 귤을 사 가요.', vi: 'Dạo này đang mùa quýt nên chắc quýt vừa rẻ vừa ngon, mua ít mang về nhé.' },
      { ko: '제가 청소를 할 테니까 설거지를 하세요.', vi: 'Tôi sẽ dọn dẹp, nên anh/chị rửa bát nhé.' },
    ],
    commonMistakes: [
      'Cần phân biệt hai nghĩa theo chủ ngữ: ngôi thứ nhất (lời hứa/ý chí), ngôi thứ ba (phỏng đoán) — dịch sai nghĩa nếu không để ý chủ ngữ.',
      'Phân biệt với -(으)ㄹ 텐데: -(으)ㄹ 테니까 thường dẫn đến vế sau là mệnh lệnh/đề nghị dựa trên lý do chắc chắn, còn -(으)ㄹ 텐데 thiên về nêu bối cảnh có phần lo ngại hơn.',
    ],
    level: 'so-cap',
    section: 'phong-doan-va-suy-doan',
    sectionOrder: 12,
    sectionTitleVi: 'Phỏng đoán và suy đoán',
  },
  {
    id: 'gr-so-cap-57',
    pattern: 'A - 군요, V - 는군요.',
    meaningVi: '...thế!, ...đấy! — ngạc nhiên khi trực tiếp chứng kiến, trải nghiệm',
    usageNotes:
      'Diễn tả sự ngạc nhiên hay thán phục của người nói khi trực tiếp chứng kiến, trải nghiệm hoặc nghe thấy điều gì đó từ người khác; có thể kết hợp với danh từ thành N+(이)군요, và hình thức quá khứ là -았/었군요.',
    examples: [
      { ko: '유리 씨는 영어를 정말 잘하시는군요.', vi: 'Yuri thật sự giỏi tiếng Anh nhỉ!' },
      { ko: '영호 씨는 정말 머리가 좋군요.', vi: 'Yeong-ho thông minh thật đấy!' },
      { ko: '이 케이크가 정말 맛있군요.', vi: 'Chiếc bánh này ngon thật đấy!' },
    ],
    commonMistakes: [
      'Chủ yếu dùng trong văn viết hoặc lời độc thoại/nhận xét, ít dùng trong hội thoại thân mật hàng ngày so với -네요.',
      'Cần kèm trải nghiệm/chứng kiến trực tiếp mới dùng được cấu trúc này, không dùng khi chỉ suy đoán gián tiếp.',
    ],
    level: 'so-cap',
    section: 'phat-hien-va-ngac-nhien',
    sectionOrder: 13,
    sectionTitleVi: 'Phát hiện và ngạc nhiên',
  },
  {
    id: 'gr-so-cap-58',
    pattern: 'A/V – 네요.',
    meaningVi: '...thế!, ...đấy! — cảm thán, ngạc nhiên trong văn nói',
    usageNotes:
      'Thể hiện sự cảm thán hay ngạc nhiên trước một điều hoàn toàn mới mẻ mà người nói vừa trực tiếp trải nghiệm, hoặc dùng để bày tỏ sự đồng tình với ý kiến của người khác; chủ yếu dùng trong văn nói hàng ngày.',
    examples: [
      { ko: '가: 오늘은 날씨가 춥지요? 나: 네, 춥네요.', vi: 'A: Hôm nay trời lạnh nhỉ? B: Vâng, lạnh thật đấy.' },
      { ko: '한국말을 정말 잘하시네요.', vi: 'Anh/chị nói tiếng Hàn giỏi thật đấy!' },
      { ko: '이 노래 정말 좋네요.', vi: 'Bài hát này hay thật đấy!' },
    ],
    commonMistakes: [
      'Phân biệt với -군요: -네요 chủ yếu dùng trong văn nói và chỉ dùng khi người nói trực tiếp trải nghiệm, còn -군요 dùng nhiều trong văn viết và có thể dựa trên cả điều nghe được từ người khác.',
      'Không nhầm cảm thán -네요 với câu khẳng định thông thường — -네요 luôn mang sắc thái ngạc nhiên/mới mẻ nhẹ.',
    ],
    level: 'so-cap',
    section: 'phat-hien-va-ngac-nhien',
    sectionOrder: 13,
    sectionTitleVi: 'Phát hiện và ngạc nhiên',
  },
]
