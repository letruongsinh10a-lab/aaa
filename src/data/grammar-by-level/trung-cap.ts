import type { GrammarEntry } from '@/types'

export const grammarTrungCap: GrammarEntry[] = [
  {
    id: 'gr-trung-cap-01',
    pattern: 'N - (이)거든요, A/V - 거든요.',
    meaningVi: 'Vì...đấy, ...đấy — giải thích lý do khi được hỏi hoặc báo tin mới (ôn lại cấu trúc sơ cấp với sắc thái thông báo tin rõ hơn)',
    usageNotes:
      'Dùng để đáp lại câu hỏi của người nghe hoặc chủ động đưa ra lý do, ý kiến mà người nghe chưa biết, đồng thời cũng dùng để thông báo một thông tin mới rồi tiếp tục nói thêm nội dung liên quan. Đây là cấu trúc chỉ dùng trong văn nói suồng sã, khi trò chuyện với người thân thiết, không dùng trong hoàn cảnh trang trọng. Ở trình độ cao hơn có thể gặp biến thể 거들랑요.',
    examples: [
      { ko: '가: 뭘 그렇게 많이 샀어요? 나: 내일 친구들이 집에 놀러 오거든요.', vi: 'A: Sao bạn mua nhiều đồ thế? B: Vì mai bạn bè tôi đến nhà chơi đấy.', romanization: 'ga: mwol geu-reo-ke ma-ni sa-sseo-yo? na: nae-il chin-gu-deu-ri ji-be nol-leo o-geo-deu-nyo', register: 'polite' },
      { ko: '가: 오늘은 학교에 안 가요? 나: 네, 수업이 없거든요.', vi: 'A: Hôm nay bạn không đi học à? B: Vâng, vì hôm nay không có tiết học đấy.', romanization: 'ga: o-neu-reun hak-kkyo-e an ga-yo? na: ne, su-eo-bi eop-kkeo-deu-nyo', register: 'polite' },
      { ko: '제가 좀 바쁘거든요. 다음에 연락 주세요.', vi: 'Tôi hơi bận một chút đấy. Lần sau hãy liên lạc lại nhé.', romanization: 'je-ga jom ba-ppeu-geo-deu-nyo. da-eu-me yeol-lak ju-se-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Không dùng -거든요 trong hoàn cảnh trang trọng hoặc văn viết, chỉ dùng khi nói chuyện thân mật.',
      'Phân biệt với -잖아요: -거든요 dùng khi người nghe CHƯA biết lý do, còn -잖아요 dùng khi người nghe ĐÃ biết hoặc từng biết.',
    ],
    level: 'trung-cap',
    section: 'nguyen-nhan-ket-qua',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân, kết quả',
    relatedPatterns: [
      { id: 'gr-so-cap-04', distinction: 'Đây là mẫu câu ôn lại từ Sơ cấp (cùng công thức), được nhấn thêm sắc thái thông báo tin mới rõ hơn ở Trung cấp.' },
      { id: 'gr-trung-cap-02', distinction: '-거든요 dùng khi người nghe CHƯA biết lý do, còn -잖아요 dùng khi người nghe ĐÃ biết hoặc từng biết.' },
    ],
  },
  {
    id: 'gr-trung-cap-02',
    pattern: 'N - (이)잖아요, A/V - 잖아요.',
    meaningVi: 'Vì...mà, ...mà — nhắc lại lý do người nghe cũng đã biết, hoặc trách móc nhẹ khi không nghe lời khuyên (ôn lại cấu trúc sơ cấp, nhấn thêm sắc thái trách móc)',
    usageNotes:
      'Dùng khi người nói đưa ra một lý do mà người nghe cũng đã biết, hoặc gợi lại cho người nghe điều mà họ có vẻ đã quên. Ngoài ra còn dùng để trách móc, khiển trách nhẹ nhàng khi người nghe không nghe theo lời khuyên trước đó của người nói và dẫn đến kết quả không hay — trường hợp này thường đi kèm câu trích dẫn gián tiếp nhắc lại lời khuyên đã đưa ra. Cấu trúc chỉ dùng trong văn nói suồng sã, giữa những người thân thiết, không dùng trong hoàn cảnh trang trọng.',
    examples: [
      { ko: '오늘 춥잖아. 옷 많이 챙겨 입어.', vi: 'Trời lạnh mà (bạn biết rồi đấy). Hãy mặc thêm áo vào.', romanization: 'o-neul chup-jja-na. ot ma-ni chaeng-gyeo i-beo', register: 'casual' },
      { ko: '가: 왜 그 드라마를 봐요? 나: 재미있잖아요.', vi: 'A: Sao bạn xem bộ phim đó vậy? B: Vì nó hay mà.', romanization: 'ga: wae geu deu-ra-ma-reul bwa-yo? na: jae-mi-it-jja-na-yo', register: 'polite' },
      { ko: '가: 배가 아파요. 나: 제가 아까 그렇게 매운 음식을 먹지 말라고 했잖아요.', vi: 'A: Tôi bị đau bụng. B: Lúc nãy tôi đã bảo đừng ăn đồ cay mà.', romanization: 'ga: bae-ga a-pa-yo. na: je-ga a-kka geu-reo-ke mae-un eum-si-geul meok-jji mal-la-go haet-jja-na-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Không nên dùng với người lớn tuổi hoặc trong hoàn cảnh trang trọng vì dễ nghe như đang vặc lại, khó chịu.',
      'Khi dùng với sắc thái trách móc, thường cần thêm câu trích dẫn lại lời khuyên trước đó (…라고 했잖아요) để rõ nghĩa hơn.',
    ],
    level: 'trung-cap',
    section: 'nguyen-nhan-ket-qua',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân, kết quả',
    relatedPatterns: [
      { id: 'gr-so-cap-05', distinction: 'Ôn lại mẫu câu Sơ cấp (cùng công thức), bổ sung thêm sắc thái trách móc khi người nghe không nghe lời khuyên trước đó.' },
      { id: 'gr-trung-cap-01', distinction: '-잖아요 dùng khi người nghe cũng đã biết lý do, còn -거든요 dùng khi người nghe chưa biết.' },
    ],
  },
  {
    id: 'gr-trung-cap-03',
    pattern: 'V - 느라고',
    meaningVi: 'Vì mải làm gì đó nên... — nguyên nhân dẫn đến kết quả tiêu cực, hai hành động trùng thời gian',
    usageNotes:
      'Mệnh đề trước nêu nguyên nhân, thường là do mải mê làm việc gì đó tốn thời gian, sức lực hoặc ý chí, dẫn đến kết quả tiêu cực ở mệnh đề sau — nếu mệnh đề sau là kết quả tích cực thì câu sẽ nghe thiếu tự nhiên. Hành động ở mệnh đề trước diễn ra liên tục và trùng một phần hoặc toàn bộ thời gian với mệnh đề sau, nên chỉ những động từ đòi hỏi thời gian, sức lực, ý chí của chủ thể mới đứng trước -느라고. Cấu trúc này thường đi kèm với 고생하다, 수고하다.',
    examples: [
      { ko: '열심히 공부하느라고 고생했어요.', vi: 'Vì mải học hành chăm chỉ nên tôi đã vất vả.', romanization: 'yeol-sim-hi gong-bu-ha-neu-ra-go go-saeng-hae-sseo-yo', register: 'polite' },
      { ko: '가: 계속 전화했는데 왜 안 받았어요? 나: 미안해요. 피곤해서 자느라고 전화 소리도 못 들었어요.', vi: 'A: Tôi gọi điện liên tục mà sao bạn không nghe máy? B: Xin lỗi, vì mệt quá nên tôi ngủ say, không nghe thấy tiếng điện thoại luôn.', romanization: 'ga: gye-sok jeon-hwa-haen-neun-de wae an ba-da-sseo-yo? na: mi-an-hae-yo. pi-gon-hae-seo ja-neu-ra-go jeon-hwa so-ri-do mot deu-reo-sseo-yo', register: 'polite' },
      { ko: '숙제하느라고 밤을 새웠어요.', vi: 'Vì mải làm bài tập nên tôi đã thức trắng đêm.', romanization: 'suk-jje-ha-neu-ra-go ba-meul sae-wo-sseo-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Không dùng -느라고 khi vế sau là kết quả tích cực hoặc câu mệnh lệnh, cầu khiến — chỉ hợp với kết quả tiêu cực, đáng tiếc.',
      'Hai vế phải cùng chủ ngữ và động từ trước -느라고 phải là động từ có thể kéo dài theo thời gian, không dùng được với động từ tức thời.',
    ],
    level: 'trung-cap',
    section: 'nguyen-nhan-ket-qua',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân, kết quả',
  },
  {
    id: 'gr-trung-cap-04',
    pattern: 'V - 는 바람에',
    meaningVi: 'Chẳng qua là vì... nên (kết quả xấu ngoài ý muốn) — nguyên nhân bất ngờ dẫn đến kết quả tiêu cực',
    usageNotes:
      'Mệnh đề trước diễn tả một tình huống hay sự việc bất ngờ, gây ảnh hưởng tiêu cực đến mệnh đề sau hoặc dẫn đến một kết quả không mong muốn, mang tính biện minh — nếu dùng cho lý do tích cực thì câu sẽ thiếu tự nhiên, dù đôi khi vẫn có thể dùng trong tình huống kết quả xảy ra tích cực nhưng ngoài dự đoán. Mệnh đề sau luôn chia ở thì quá khứ và không thể là câu mệnh lệnh hay câu cầu khiến.',
    examples: [
      { ko: '노트북이 갑자기 고장 나는 바람에 이메일을 확인하지 못했어요.', vi: 'Vì máy tính bỗng nhiên bị hỏng nên tôi không kiểm tra được email.', romanization: 'no-teu-bu-gi gap-jja-gi go-jang na-neun ba-ra-me i-me-i-reul hwa-gin-ha-ji mo-tae-sseo-yo', register: 'polite' },
      { ko: '가: 왜 이렇게 늦었어요? 나: 미안해요. 버스를 잘못 타는 바람에 늦었어요.', vi: 'A: Sao bạn đến muộn thế? B: Xin lỗi, vì tôi đi nhầm xe buýt nên mới muộn.', romanization: 'ga: wae i-reo-ke neu-jeo-sseo-yo? na: mi-an-hae-yo. beo-seu-reul jal-mot ta-neun ba-ra-me neu-jeo-sseo-yo', register: 'polite' },
      { ko: '갑자기 비가 오는 바람에 우산도 없이 다 젖었어요.', vi: 'Vì trời bỗng đổ mưa nên tôi bị ướt hết mà không có ô.', romanization: 'gap-jja-gi bi-ga o-neun ba-ra-me u-san-do eop-ssi da jeo-jeo-sseo-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Vế sau luôn ở thì quá khứ và không được là câu mệnh lệnh/cầu khiến, khác nhiều cấu trúc nguyên nhân khác.',
      'Chỉ hợp với nguyên nhân mang tính bất ngờ, ngoài dự đoán — nếu nguyên nhân là điều đã biết trước, nên dùng -기 때문에 hoặc -아/어서 thay thế.',
    ],
    level: 'trung-cap',
    section: 'nguyen-nhan-ket-qua',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân, kết quả',
    relatedPatterns: [
      { id: 'gr-so-cap-03', distinction: 'Nếu nguyên nhân là điều đã biết trước (không mang tính bất ngờ), nên dùng -기 때문에 thay cho -는 바람에.' },
      { id: 'gr-so-cap-01', distinction: 'Nếu nguyên nhân là điều đã biết trước, có thể dùng -아/어서 thay thế vì -는 바람에 chỉ hợp với nguyên nhân bất ngờ.' },
      { id: 'gr-trung-cap-05', distinction: '-는 바람에 chỉ hợp với nguyên nhân mang tính bất ngờ, còn -는 탓에 dùng được với mọi loại nguyên nhân miễn mang sắc thái đổ lỗi.' },
    ],
  },
  {
    id: 'gr-trung-cap-05',
    pattern: 'A/V – (으)ㄴ/는 탓에',
    meaningVi: 'Vì...(nên xảy ra chuyện không hay) — đổ lỗi, quy trách nhiệm cho nguyên nhân xấu',
    usageNotes:
      'Dùng để đổ lỗi hay quy trách nhiệm cho một nguyên nhân dẫn đến tình huống không tốt ở mệnh đề sau, mang tính biện hộ. So với -기 때문에 hay -는 바람에, -는 탓에 chỉ dùng được khi nguyên nhân và kết quả đều mang sắc thái tiêu cực, khác với -는 덕분에 chỉ dùng cho kết quả tích cực.',
    examples: [
      { ko: '밤새도록 드라마를 보는 탓에 아침에 자주 늦게 일어나요.', vi: 'Vì xem phim truyền hình thâu đêm nên buổi sáng tôi hay dậy muộn.', romanization: 'bam-sae-do-rok deu-ra-ma-reul bo-neun ta-se a-chi-me ja-ju neut-kke i-reo-na-yo', register: 'polite' },
      { ko: '요즘 스트레스를 자주 받는 탓에 건강이 나빠져요.', vi: 'Vì dạo này hay bị căng thẳng nên sức khỏe của tôi kém đi.', romanization: 'yo-jeum seu-teu-re-seu-reul ja-ju ban-neun ta-se geon-gang-i na-ppa-jyeo-yo', register: 'polite' },
      { ko: '길이 막히는 탓에 회의에 늦고 말았어요.', vi: 'Vì đường bị tắc nên tôi đã đến muộn cuộc họp.', romanization: 'gi-ri ma-ki-neun ta-se hoe-ui-e neut-kko ma-ra-sseo-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Chỉ dùng -는 탓에 cho nguyên nhân và kết quả đều xấu; muốn diễn tả nguyên nhân tốt dẫn đến kết quả tốt phải dùng -는 덕분에, không được thay bằng -는 탓에.',
      'Khác với -는 바람에 chỉ dùng cho nguyên nhân bất ngờ, -는 탓에 dùng được với mọi loại nguyên nhân miễn là mang sắc thái đổ lỗi.',
    ],
    level: 'trung-cap',
    section: 'nguyen-nhan-ket-qua',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân, kết quả',
    conjugationTable: [
      { stemType: 'Quy tắc (tính từ)', baseForm: '많다', conjugated: '많은 탓에' },
      { stemType: 'Quy tắc (động từ)', baseForm: '마시다', conjugated: '마시는 탓에' },
      { stemType: 'ㅂ bất quy tắc (tính từ)', baseForm: '덥다', conjugated: '더운 탓에' },
      { stemType: 'ㄹ 받침 (động từ, lược ㄹ)', baseForm: '놀다', conjugated: '노는 탓에' },
    ],
    relatedPatterns: [
      { id: 'gr-trung-cap-04', distinction: '-는 바람에 chỉ dùng cho nguyên nhân mang tính bất ngờ, còn -는 탓에 dùng được với mọi loại nguyên nhân miễn là mang sắc thái đổ lỗi.' },
    ],
  },
  {
    id: 'gr-trung-cap-06',
    pattern: 'A/V – (으)ㄹ까 봐(서)',
    meaningVi: 'Vì sợ rằng, e rằng... nên — lo lắng một việc có thể xảy ra',
    usageNotes:
      'Diễn tả người nói lo sợ một hành động hay sự việc nào đó sẽ xảy ra nên thực hiện hành động ở mệnh đề sau để phòng tránh; thường kết hợp với các từ như 걱정이다, 고민이다 ở vế sau. Ở trình độ cao cấp có thể kết hợp thêm các phó từ nhấn mạnh như 행여, 혹, 자칫.',
    examples: [
      { ko: '비가 올까 봐서 우산을 챙겼어요.', vi: 'Vì sợ trời mưa nên tôi đã mang theo ô.', romanization: 'bi-ga ol-kka bwa-seo u-sa-neul chaeng-gyeo-sseo-yo', register: 'polite' },
      { ko: '내일 학교에 늦게 갈까 봐 일찍 쉬었어요.', vi: 'Vì sợ ngày mai đi học muộn nên tôi đã đi nghỉ sớm.', romanization: 'nae-il hak-kkyo-e neut-kke gal-kka bwa il-jjik swi-eo-sseo-yo', register: 'polite' },
      { ko: '발표할 때 한국어를 틀릴까 봐 걱정이에요.', vi: 'Tôi lo lắng vì sợ khi thuyết trình sẽ nói sai tiếng Hàn.', romanization: 'bal-pyo-hal ttae han-gu-geo-reul teul-lil-kka bwa geok-jjeong-i-e-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Vế trước diễn tả điều lo sợ có thể xảy ra (chưa chắc chắn), không nhầm với -아/어서 vốn nêu nguyên nhân đã xảy ra chắc chắn.',
      'Thường phải có hành động phòng tránh hoặc cảm xúc lo lắng ở vế sau, không dùng cho câu mệnh lệnh trực tiếp.',
    ],
    level: 'trung-cap',
    section: 'nguyen-nhan-ket-qua',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân, kết quả',
    conjugationTable: [
      { stemType: 'Quy tắc (phụ âm cuối)', baseForm: '먹다', conjugated: '먹을까 봐' },
      { stemType: 'Quy tắc (nguyên âm cuối)', baseForm: '가다', conjugated: '갈까 봐' },
      { stemType: 'ㅂ bất quy tắc', baseForm: '춥다', conjugated: '추울까 봐' },
      { stemType: 'ㄷ bất quy tắc', baseForm: '듣다', conjugated: '들을까 봐' },
      { stemType: 'ㄹ 받침 (lược ㄹ)', baseForm: '놀다', conjugated: '놀까 봐' },
    ],
    relatedPatterns: [
      { id: 'gr-so-cap-01', distinction: 'Vế trước của -(으)ㄹ까 봐(서) diễn tả điều lo sợ CHƯA CHẮC CHẮN sẽ xảy ra, khác với -아/어서 vốn nêu nguyên nhân đã xảy ra chắc chắn.' },
    ],
  },
  {
    id: 'gr-trung-cap-07',
    pattern: 'A/V – 고 해서',
    meaningVi: 'Chủ yếu là vì... (trong nhiều lý do) — nêu một lý do tiêu biểu trong số nhiều lý do',
    usageNotes:
      'Vế trước nêu lên một lý do tiêu biểu, điển hình trong số nhiều lý do khác nhau dẫn đến việc thực hiện tình huống ở vế sau; người nói dùng cấu trúc này để đưa ra nguyên nhân chính nhưng đồng thời ngầm ý còn có các nguyên nhân khác nữa chưa được nói ra hết.',
    examples: [
      { ko: '손님들이 오고 해서 장을 보러 가요.', vi: 'Vì (đại khái) có khách đến nên tôi đi chợ mua đồ.', romanization: 'son-nim-deu-ri o-go hae-seo jang-eul bo-reo ga-yo', register: 'polite' },
      { ko: '요즘 살이 찌고 해서 다이어트를 하고 있어요.', vi: 'Dạo này vì (nhiều lý do, trong đó có việc) tăng cân nên tôi đang ăn kiêng.', romanization: 'yo-jeum sa-ri jji-go hae-seo da-i-eo-teu-reul ha-go i-sseo-yo', register: 'polite' },
      { ko: '날씨도 좋고 해서 오랜만에 산책을 나갔어요.', vi: 'Vì thời tiết cũng đẹp (và vài lý do khác) nên lâu lắm rồi tôi mới ra ngoài đi dạo.', romanization: 'nal-ssi-do jo-ko hae-seo o-raen-ma-ne san-chae-geul na-ga-sseo-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Không dùng khi chỉ có duy nhất một lý do rõ ràng — cấu trúc này ngụ ý còn nhiều lý do khác chưa nói hết, khác với -아/어서 hay -기 때문에 nêu lý do duy nhất, dứt khoát.',
      'Có thể tham khảo thêm -더니/-았/었더니 ở phần sau cũng mang một phần ý nghĩa trình bày nguyên nhân.',
    ],
    level: 'trung-cap',
    section: 'nguyen-nhan-ket-qua',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân, kết quả',
    relatedPatterns: [
      { id: 'gr-so-cap-01', distinction: '-고 해서 ngụ ý còn nhiều lý do khác chưa nói hết, khác với -아/어서 nêu lý do duy nhất, dứt khoát.' },
      { id: 'gr-so-cap-03', distinction: '-고 해서 ngụ ý còn nhiều lý do khác chưa nói hết, khác với -기 때문에 nêu lý do duy nhất, dứt khoát.' },
    ],
  },
  {
    id: 'gr-trung-cap-08',
    pattern: 'A/V - 기는 하지만, A/V - 기는 A/V – 지만',
    meaningVi: 'Đúng là... nhưng — thừa nhận vế trước, nhấn mạnh ý kiến khác ở vế sau',
    usageNotes:
      'Diễn tả người nói công nhận hay thừa nhận nội dung ở mệnh đề trước, nhưng muốn nhấn mạnh, bày tỏ rõ một quan điểm hay ý kiến khác ở mệnh đề sau; ở dạng A/V-기는 A/V-지만, động từ hoặc tính từ được lặp lại hai lần. Trong văn nói, -기는 하지만 thường được rút gọn thành -긴 하지만 và -기는 -지만 rút gọn thành -긴 -지만; dạng quá khứ là -기는 했지만 chứ không phải -았/었기는 했지만. Ngoài ra còn có các biến thể A/V+기는 하나, A/V+기는 하는데, A/V+기는 한데. Chủ ngữ ở hai vế bắt buộc phải đồng nhất, khác với -지만 thông thường không yêu cầu điều này.',
    examples: [
      { ko: '그 원피스가 좋기는 좋지만 너무 비싸서 못 사겠어요.', vi: 'Chiếc váy đó đúng là đẹp thật nhưng đắt quá nên tôi không mua nổi.', romanization: 'geu won-pi-seu-ga jo-ki-neun jo-chi-man neo-mu bi-ssa-seo mot sa-ge-sseo-yo', register: 'polite' },
      { ko: '아파트에 살기가 편하기는 하지만 애완동물을 못 키워요.', vi: 'Sống ở chung cư đúng là tiện thật nhưng lại không nuôi được thú cưng.', romanization: 'a-pa-teu-e sal-gi-ga pyeon-ha-gi-neun ha-ji-man ae-wan-dong-mu-reul mot ki-wo-yo', register: 'polite' },
      { ko: '그 사람이 똑똑하기는 하지만 성격이 좀 급해요.', vi: 'Người đó đúng là thông minh thật nhưng tính cách hơi nóng vội.', romanization: 'geu sa-ra-mi ttok-tto-ka-gi-neun ha-ji-man seong-gyeo-gi jom geu-pae-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Khác với -지만 (không yêu cầu chủ ngữ đồng nhất, chỉ đơn thuần diễn tả tương phản), -기는 하지만 bắt buộc chủ ngữ hai vế phải giống nhau và mang ý thừa nhận trước khi phản bác.',
      'Dạng quá khứ chia sai thường gặp: phải nói -기는 했지만, không phải -았/었기는 했지만.',
    ],
    level: 'trung-cap',
    section: 'dien-ta-su-tuong-phan',
    sectionOrder: 2,
    sectionTitleVi: 'Diễn tả sự tương phản',
  },
  {
    id: 'gr-trung-cap-09',
    pattern: 'A/V -  (으)ㄴ/는데도',
    meaningVi: 'Mặc dù... nhưng (vẫn)... — kết quả trái ngược với mong đợi',
    usageNotes:
      'Là sự kết hợp giữa -(으)ㄴ/는데 và -아/어도, dùng khi kết quả ở vế sau trái ngược với mong đợi hay mục đích của hành động ở vế trước. Có thể thêm 불구하고 sau -(으)ㄴ/는데도 để nhấn mạnh hơn. Ngoài ra còn có cấu trúc tương đương dùng cho danh từ là N+에도 불구하고, và ở trình độ cao hơn có thể danh từ hóa mệnh đề thành A/V+(으)ㅁ에도 불구하고.',
    examples: [
      { ko: '선생님이 내일 시험이 있다고 하셨는데도 학생들은 공부를 안 했어요.', vi: 'Mặc dù thầy giáo đã nói mai có bài kiểm tra nhưng học sinh vẫn không học bài.', romanization: 'seon-saeng-ni-mi nae-il si-heo-mi it-tta-go ha-syeon-neun-de-do hak-ssaeng-deu-reun gong-bu-reul an hae-sseo-yo', register: 'polite' },
      { ko: '유리 씨는 많이 먹는데도 (불구하고) 살이 안 쪄요.', vi: 'Yuri dù ăn rất nhiều nhưng vẫn không tăng cân.', romanization: 'yu-ri ssi-neun ma-ni meong-neun-de-do (bul-gu-ha-go) sa-ri an jjyeo-yo', register: 'polite' },
      { ko: '영희는 부모님의 반대에도 불구하고 일본 남자와 결혼했다.', vi: 'Mặc cho bố mẹ phản đối, Young-hee vẫn kết hôn với một người đàn ông Nhật Bản.', romanization: 'yeong-hi-neun bu-mo-ni-mui ban-dae-e-do bul-gu-ha-go il-bon nam-ja-wa gyeol-hon-haet-tta', register: 'written' },
    ],
    commonMistakes: [
      'Không nhầm N+에도 불구하고 (dùng sau danh từ) với A/V-(으)ㄴ/는데도 (불구하고) (dùng sau động từ/tính từ) — hai dạng có cấu trúc ngữ pháp khác nhau dù nghĩa tương tự.',
      'Cần phân biệt với -지만: -는데도 nhấn mạnh sắc thái ngạc nhiên vì kết quả trái ngược hẳn với điều đáng lẽ phải xảy ra, mang tính nhấn mạnh hơn -지만 thông thường.',
    ],
    level: 'trung-cap',
    section: 'dien-ta-su-tuong-phan',
    sectionOrder: 2,
    sectionTitleVi: 'Diễn tả sự tương phản',
    conjugationTable: [
      { stemType: 'Quy tắc (tính từ)', baseForm: '많다', conjugated: '많은데도' },
      { stemType: 'Quy tắc (động từ)', baseForm: '먹다', conjugated: '먹는데도' },
      { stemType: 'ㅂ bất quy tắc (tính từ)', baseForm: '춥다', conjugated: '추운데도' },
      { stemType: 'ㅎ bất quy tắc (tính từ)', baseForm: '어떻다', conjugated: '어떤데도' },
    ],
    relatedPatterns: [
      { id: 'gr-so-cap-08', distinction: '-는데도 nhấn mạnh sắc thái ngạc nhiên vì kết quả trái ngược hẳn với điều đáng lẽ phải xảy ra, mang tính nhấn mạnh hơn -지만 thông thường.' },
    ],
  },
  {
    id: 'gr-trung-cap-10',
    pattern: 'A/V -  (으)ㄴ/는 반면(에)',
    meaningVi: 'Trái lại, ngược lại thì... — hai vế có nội dung đối lập nhau',
    usageNotes:
      'Dùng khi mệnh đề trước và mệnh đề sau có nội dung trái ngược nhau; ngoài ra còn có thể dùng để diễn đạt cả hai mặt tích cực và tiêu cực của cùng một sự việc trong một câu. Cấu trúc này được dùng nhiều trong văn viết hơn văn nói.',
    examples: [
      { ko: '저는 읽기는 잘하는 반면에 말하기는 잘 못해요.', vi: 'Tôi đọc thì giỏi, ngược lại nói thì lại không giỏi.', romanization: 'jeo-neun il-kki-neun jal-ha-neun ban-myeo-ne mal-ha-gi-neun jal mo-tae-yo', register: 'polite' },
      { ko: '그 가방은 비싼 반면에 질이 좋아요.', vi: 'Chiếc túi đó đắt, nhưng bù lại chất lượng tốt.', romanization: 'geu ga-bang-eun bi-ssan ban-myeo-ne ji-ri jo-a-yo', register: 'polite' },
      { ko: '그 일은 힘든 반면에 보람이 있어요.', vi: 'Công việc đó vất vả, nhưng bù lại rất ý nghĩa.', romanization: 'geu i-reun him-deun ban-myeo-ne bo-ra-mi i-sseo-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Thường dùng trong văn viết, trang trọng hơn -지만 nên tránh lạm dụng trong văn nói suồng sã.',
      'Có thể tham khảo thêm -더니/-았/었더니 ở phần sau cũng mang một phần ý nghĩa tương phản, đối lập.',
    ],
    level: 'trung-cap',
    section: 'dien-ta-su-tuong-phan',
    sectionOrder: 2,
    sectionTitleVi: 'Diễn tả sự tương phản',
    conjugationTable: [
      { stemType: 'Tính từ (quy tắc)', baseForm: '비싸다', conjugated: '비싼 반면에' },
      { stemType: 'Động từ (quy tắc)', baseForm: '잘하다', conjugated: '잘하는 반면에' },
      { stemType: 'ㄹ 받침 (lược ㄹ, tính từ)', baseForm: '힘들다', conjugated: '힘든 반면에' },
      { stemType: 'ㅂ bất quy tắc (tính từ)', baseForm: '덥다', conjugated: '더운 반면에' },
    ],
    relatedPatterns: [
      { id: 'gr-so-cap-08', distinction: '-는 반면(에) thường dùng trong văn viết, trang trọng hơn -지만 nên tránh lạm dụng trong văn nói suồng sã.' },
    ],
  },
  {
    id: 'gr-trung-cap-11',
    pattern: 'V - 는 사이에',
    meaningVi: 'Trong lúc, giữa lúc đang làm gì đó thì... — hành động khác xen vào',
    usageNotes:
      'Dùng khi giữa lúc hành động ở vế trước đang diễn ra thì một sự việc khác ở vế sau xen vào hoặc xảy ra. Cấu trúc thường nhấn mạnh khoảng thời gian ngắn ngủi, bất ngờ khi hành động vế trước đang tiếp diễn.',
    examples: [
      { ko: '우리도 모르는 사이에 자연 환경이 많이 파괴되었어요.', vi: 'Trong lúc chúng ta không hề hay biết, môi trường tự nhiên đã bị phá hủy rất nhiều.' },
      { ko: '잠시 화장실 다녀오는 사이에 전화가 왔네요.', vi: 'Trong lúc tôi đi vệ sinh một lát thì có điện thoại gọi đến.' },
      { ko: '아이가 잠깐 자는 사이에 집안일을 좀 했어요.', vi: 'Trong lúc con ngủ một chút, tôi đã tranh thủ làm việc nhà.' },
    ],
    commonMistakes: [
      'Nhấn mạnh khoảng thời gian ngắn và bất ngờ — không dùng cho hành động kéo dài lâu, nên phân biệt với -는 동안 (chỉ khoảng thời gian dài hơn, trung tính hơn).',
      'Chủ ngữ hai vế thường khác nhau; nếu cùng chủ ngữ thì nên cân nhắc dùng -다가 thay thế cho tự nhiên hơn.',
    ],
    level: 'trung-cap',
    section: 'dien-ta-hanh-dong-gian-doan',
    sectionOrder: 3,
    sectionTitleVi: 'Diễn tả hành động gián đoạn',
  },
  {
    id: 'gr-trung-cap-12',
    pattern: 'A/V - 아/어야',
    meaningVi: 'Chỉ khi...mới..., chỉ có...mới... — điều kiện thiết yếu, bắt buộc',
    usageNotes:
      'Hành động hay trạng thái ở vế trước là điều kiện thiết yếu, bắt buộc phải có để tình huống ở vế sau có thể xảy ra — nếu không đáp ứng điều kiện đó thì vế sau không thể thực hiện được. Trong văn nói có thể dùng ở dạng -아/어야지 để nhấn mạnh thêm.',
    examples: [
      { ko: '토픽 시험을 통과해야 한국으로 유학할 수 있어요.', vi: 'Chỉ khi đỗ kỳ thi TOPIK thì mới có thể du học Hàn Quốc.' },
      { ko: '가: 여권을 잃어버렸는데 여행갈 수 있을까요? 나: 여권이 있어야 해외 여행을 갈 수 있지요. 빨리 준비해 놓으세요.', vi: 'A: Tôi bị mất hộ chiếu rồi, liệu có đi du lịch được không? B: Phải có hộ chiếu thì mới đi du lịch nước ngoài được chứ. Bạn chuẩn bị lại nhanh đi.' },
      { ko: '열심히 연습해야 실력이 늘어요.', vi: 'Chỉ khi luyện tập chăm chỉ thì trình độ mới tiến bộ.' },
    ],
    commonMistakes: [
      'Nhấn mạnh điều kiện BẮT BUỘC, thiết yếu — nếu chỉ là điều kiện thông thường, không nhất thiết, nên dùng -(으)면 thay vì -아/어야.',
      'Vế sau thường mang tính khẳng định về khả năng (thường đi với -(으)ㄹ 수 있다), không phù hợp với câu phủ định vô điều kiện.',
    ],
    level: 'trung-cap',
    section: 'dien-ta-dieu-kien-va-gia-dinh',
    sectionOrder: 4,
    sectionTitleVi: 'Diễn tả điều kiện và giả định',
  },
  {
    id: 'gr-trung-cap-13',
    pattern: 'A/V - 거든',
    meaningVi: 'Nếu... — thể hiện điều kiện hay giả định, dùng trong văn nói',
    usageNotes:
      'Thể hiện một điều kiện hay giả định, mệnh đề phía sau thường ở dạng mệnh lệnh, cầu khiến, khuyên nhủ, hứa hẹn (-(으)세요, -(으)ㅂ시다, -(으)ㄹ게요) hoặc thể hiện sự suy đoán, ý chí (-겠-, -(으)ㄹ 것이다, -(으)려고 하다). Cấu trúc này thường được dùng trong văn nói.',
    examples: [
      { ko: '다음에 베트남에 오거든 꼭 연락하세요.', vi: 'Lần sau nếu đến Việt Nam thì nhất định hãy liên lạc với tôi nhé.' },
      { ko: '바쁘지 않거든 저녁을 같이 먹읍시다.', vi: 'Nếu không bận thì chúng ta cùng ăn tối nhé.' },
      { ko: '시간이 있거든 저희 집에 놀러 오세요.', vi: 'Nếu có thời gian thì hãy đến nhà tôi chơi nhé.' },
    ],
    commonMistakes: [
      'Vế sau bắt buộc phải là câu mệnh lệnh, cầu khiến, hứa hẹn hay ý chí — không dùng cho câu trần thuật đơn thuần, khác với -(으)면 dùng được cho mọi loại câu.',
      'Không nhầm với -거든요 (mục 1) vốn dùng ở cuối câu để giải thích lý do; -거든 ở đây luôn nằm giữa câu, mang nghĩa điều kiện.',
    ],
    level: 'trung-cap',
    section: 'dien-ta-dieu-kien-va-gia-dinh',
    sectionOrder: 4,
    sectionTitleVi: 'Diễn tả điều kiện và giả định',
  },
  {
    id: 'gr-trung-cap-14',
    pattern: 'A - 다면 , V - ㄴ/는다면',
    meaningVi: 'Giả sử, nếu như... thì... — câu điều kiện giả định khó/không xảy ra',
    usageNotes:
      'Thể hiện giả định hay điều kiện cho một việc gì đó, tương đương câu điều kiện loại II. So với -(으)면, cấu trúc -(ㄴ/는)다면 thể hiện những trường hợp có khả năng hiện thực hóa tương đối thấp, thậm chí có thể dùng cho các giả định hoàn toàn không có khả năng xảy ra ngay từ đầu. Thường kết hợp với các phó từ 만약(에), 만일 để nhấn mạnh tính giả định.',
    examples: [
      { ko: '다시 태어난다면 남자가 되고 싶어요.', vi: 'Nếu được sinh ra lần nữa, tôi muốn làm con trai.' },
      { ko: '해가 서쪽에서 뜬다면 네가 이민호 배우와 결혼할 거야.', vi: 'Nếu mặt trời mọc ở đằng tây thì cậu mới lấy được diễn viên Lee Min-ho đấy.' },
      { ko: '로또에 당첨된다면 세계 여행을 하고 싶어요.', vi: 'Nếu trúng số thì tôi muốn đi du lịch vòng quanh thế giới.' },
    ],
    commonMistakes: [
      'Khác với -(으)면 dùng cho điều kiện có khả năng xảy ra bình thường, -(ㄴ/는)다면 thiên về giả định khó xảy ra hoặc hoàn toàn không có khả năng — dùng nhầm dễ khiến câu nghe kỳ khi giả định là chuyện hiển nhiên.',
      'Thường đi kèm 만약, 만일 ở đầu câu để nhấn mạnh, học viên hay quên thêm các phó từ này.',
    ],
    level: 'trung-cap',
    section: 'dien-ta-dieu-kien-va-gia-dinh',
    sectionOrder: 4,
    sectionTitleVi: 'Diễn tả điều kiện và giả định',
  },
  {
    id: 'gr-trung-cap-15',
    pattern: 'A/V – 았/었더라면',
    meaningVi: 'Nếu mà đã... thì đã..., giả sử đã... thì đã... — giả định trái với sự thật đã xảy ra trong quá khứ',
    usageNotes:
      'Nói về một giả định trái ngược với việc đã thực sự xảy ra trong quá khứ, tương đương câu điều kiện loại III, thường thể hiện sự nuối tiếc hay ân hận về việc đã trải qua. Vế sau thường sử dụng các dạng phỏng đoán như -았/었을 텐데, -았/었을 것이다, -(으)ㄹ걸요, hoặc -(으)ㄹ 뻔했다.',
    examples: [
      { ko: '노래를 잘 불렀더라면 가수가 되었을 거예요.', vi: 'Nếu ngày xưa hát hay thì có lẽ tôi đã trở thành ca sĩ rồi.' },
      { ko: '지수 씨가 연습을 많이 했더라면 실수하지 않았을 텐데요.', vi: 'Nếu Ji-su luyện tập nhiều hơn thì đã không mắc lỗi rồi.' },
      { ko: '그때 조금만 더 참았더라면 후회하지 않았을 거예요.', vi: 'Nếu lúc đó tôi ráng nhịn thêm một chút thì đã không phải hối hận.' },
    ],
    commonMistakes: [
      'Đây là giả định TRÁI VỚI SỰ THẬT đã xảy ra, khác hẳn -(ㄴ/는)다면 (mục 14) vốn giả định về tương lai hoặc điều chưa xảy ra — dễ nhầm hai loại câu điều kiện này.',
      'Vế sau bắt buộc phải chia ở dạng phỏng đoán quá khứ, không dùng thì hiện tại hay tương lai đơn thuần.',
    ],
    level: 'trung-cap',
    section: 'dien-ta-dieu-kien-va-gia-dinh',
    sectionOrder: 4,
    sectionTitleVi: 'Diễn tả điều kiện và giả định',
  },
  {
    id: 'gr-trung-cap-16',
    pattern: 'V - (으)ㄹ 뻔하다',
    meaningVi: 'Suýt chút nữa... — việc xấu suýt xảy ra nhưng may mắn không xảy ra',
    usageNotes:
      'Thể hiện một việc nguy hiểm hay không hay nào đó có khả năng đã xảy ra nhưng may mắn cuối cùng lại không xảy ra; cấu trúc này luôn được dùng ở thì quá khứ. Ở trình độ cao cấp có thể kết hợp thêm các phó từ nhấn mạnh như 하마터면, 자칫하면, 까딱하면.',
    examples: [
      { ko: '아침에 늦게 일어나서 지각할 뻔했어요.', vi: 'Sáng nay tôi dậy muộn nên suýt chút nữa bị đi học muộn.' },
      { ko: '가: 민지 씨는 왜 그렇게 수영을 싫어해요? 나: 어렸을 때 수영하다가 물에 빠질 뻔했거든요.', vi: 'A: Sao Min-ji lại ghét bơi lội đến vậy? B: Vì hồi nhỏ lúc đang bơi tôi suýt bị chết đuối đấy.' },
      { ko: '길이 미끄러워서 넘어질 뻔했어요.', vi: 'Vì đường trơn nên tôi suýt bị ngã.' },
    ],
    commonMistakes: [
      'Luôn chia ở thì quá khứ (-(으)ㄹ 뻔했다), không dùng ở thì hiện tại hay tương lai vì cấu trúc chỉ diễn tả việc đã suýt xảy ra.',
      'Chỉ dùng cho việc nguy hiểm/không hay suýt xảy ra rồi may mắn không xảy ra, không dùng cho việc tốt đẹp suýt đạt được.',
    ],
    level: 'trung-cap',
    section: 'dien-ta-dieu-kien-va-gia-dinh',
    sectionOrder: 4,
    sectionTitleVi: 'Diễn tả điều kiện và giả định',
  },
  {
    id: 'gr-trung-cap-17',
    pattern: 'A - 아/어 보이다',
    meaningVi: 'Có vẻ..., trông có vẻ/như là... — phỏng đoán dựa trên vẻ ngoài',
    usageNotes:
      'Diễn tả sự phỏng đoán hay cảm nhận của người nói dựa trên vẻ ngoài của người, sự vật hoặc sự việc mà chủ ngữ đã trực tiếp nhìn thấy rồi thuật lại. Cấu trúc chỉ kết hợp được với tính từ.',
    examples: [
      { ko: '가: 많이 힘들어 보이는데 괜찮을까요? 나: 요즘 많이 바빴어요. 좀 쉬면 좋아질 거예요.', vi: 'A: Trông bạn có vẻ mệt lắm, có ổn không? B: Dạo này tôi bận quá. Nghỉ ngơi một chút chắc sẽ ổn thôi.' },
      { ko: '머리를 묶으니까 젊어 보여요.', vi: 'Buộc tóc lên trông bạn trẻ hẳn ra.' },
      { ko: '이 옷을 입으니까 날씬해 보여요.', vi: 'Mặc bộ đồ này vào trông tôi có vẻ thon gọn hơn.' },
    ],
    commonMistakes: [
      'Chỉ kết hợp được với tính từ (A), không dùng trực tiếp với động từ — muốn diễn đạt ý tương tự với động từ phải dùng -는 것 같다 hoặc -나 보다.',
      'Phán đoán dựa trên những gì mắt thấy trực tiếp, khác với -는 것 같다 có thể dùng cho cả suy đoán gián tiếp không cần nhìn thấy.',
    ],
    level: 'trung-cap',
    section: 'phong-doan-va-suy-doan',
    sectionOrder: 5,
    sectionTitleVi: 'Phỏng đoán và suy đoán',
  },
  {
    id: 'gr-trung-cap-18',
    pattern: 'A/V - (으)ㄹ 텐데',
    meaningVi: 'Chắc là... nên, vì sẽ... nên — phỏng đoán làm bối cảnh cho vế sau',
    usageNotes:
      'Dùng để đưa ra nhận định, phỏng đoán về điều gì sẽ xảy ra, chủ yếu dùng cho ngôi thứ ba; là sự kết hợp giữa dạng phỏng đoán -(으)ㄹ 터 và cấu trúc bối cảnh -(으)ㄴ/는데. Mệnh đề trước diễn tả ý phỏng đoán, mệnh đề sau có thể liên quan hoặc tương phản với mệnh đề trước, và cũng có thể dùng ở cuối câu dưới dạng -(으)ㄹ 텐데요.',
    examples: [
      { ko: '차가 많이 막힐 텐데 좀 일찍 출발하는 게 어때요?', vi: 'Chắc đường sẽ tắc lắm đấy, hay là mình xuất phát sớm hơn một chút?' },
      { ko: '한국인 친구를 많이 사귀었으면 한국말을 더 빨리 배웠을 텐데요.', vi: 'Nếu kết bạn với nhiều người Hàn Quốc hơn thì chắc tôi đã học tiếng Hàn nhanh hơn rồi.' },
      { ko: '가: 흐엉 씨, 생일 축하해요. 나: 시험 준비로 바쁠 텐데 이렇게 와 줘서 고마워요.', vi: 'A: Hương ơi, chúc mừng sinh nhật bạn. B: Chắc bạn đang bận ôn thi lắm mà vẫn đến đây, cảm ơn bạn nhiều.' },
    ],
    commonMistakes: [
      'Chủ yếu dùng để phỏng đoán cho ngôi thứ ba hoặc tình huống khách quan, ít dùng để phỏng đoán về chính người nói.',
      'Phân biệt với -(으)ㄹ 테니까 (mục 19): -(으)ㄹ 텐데 thiên về nêu bối cảnh phỏng đoán, còn -(으)ㄹ 테니까 thiên về giải thích lý do kèm theo lời khuyên hay đề nghị.',
    ],
    level: 'trung-cap',
    section: 'phong-doan-va-suy-doan',
    sectionOrder: 5,
    sectionTitleVi: 'Phỏng đoán và suy đoán',
  },
  {
    id: 'gr-trung-cap-19',
    pattern: 'A/V - (으)ㄹ 테니까',
    meaningVi: 'Vì tôi sẽ... nên, chắc là sẽ... nên — ý chí bản thân hoặc phỏng đoán kèm lời khuyên',
    usageNotes:
      'Có hai cách dùng: khi chủ ngữ ở ngôi thứ nhất, cấu trúc diễn tả ý chí của người nói rằng bản thân sẽ làm gì đó nên đưa ra lời gợi ý hoặc lời khuyên dành cho người nghe ở vế sau; khi chủ ngữ ở ngôi thứ ba, cấu trúc diễn tả sự phỏng đoán và từ đó đưa ra lời khuyên, cầu khiến hay ý chí. Có thể dùng ở cuối câu dưới dạng -(으)ㄹ 테니까요, nhưng không dùng với các từ như 걱정이다, 고맙다, 감사하다, 미안하다 ngay sau -(으)ㄹ 테니까. Trong khi -(으)ㄹ텐데 nhấn mạnh bối cảnh phỏng đoán thì -(으)ㄹ 테니까 thiên về giải thích lý do; người Hàn cũng ít dùng dạng tương lai -겠으니까 mà thường thay bằng -(으)ㄹ 테니까 hoặc -(으)ㄹ 거니까, -(으)ㄹ 건.',
    examples: [
      { ko: '가: 내일 도서관에 몇 시에 갈까요? 나: 시험 기간이라서 사람이 많을 테니까 아침 일찍 갑시다.', vi: 'A: Mai mấy giờ mình đi thư viện nhỉ? B: Vì đang mùa thi nên chắc đông người lắm, mình đi từ sáng sớm đi.' },
      { ko: '제가 도와 줄 테니까 너무 걱정하지 마세요.', vi: 'Vì tôi sẽ giúp bạn nên đừng lo lắng quá.' },
      { ko: '제가 먼저 가 있을 테니까 천천히 오세요.', vi: 'Vì tôi sẽ đến trước nên bạn cứ từ từ đến sau.' },
    ],
    commonMistakes: [
      'Không dùng các từ 걱정이다, 고맙다, 감사하다, 미안하다 ngay sau -(으)ㄹ 테니까 — đây là lỗi phổ biến vì học viên nhầm với cách dùng của -(으)니까.',
      'Phân biệt hai chủ ngữ: ngôi thứ nhất mang nghĩa ý chí (tôi sẽ...), ngôi thứ ba mang nghĩa phỏng đoán (chắc là sẽ...) — cùng công thức nhưng nghĩa khác theo chủ ngữ.',
    ],
    level: 'trung-cap',
    section: 'phong-doan-va-suy-doan',
    sectionOrder: 5,
    sectionTitleVi: 'Phỏng đoán và suy đoán',
  },
  {
    id: 'gr-trung-cap-20',
    pattern: 'A/V - (으)ㄹ지도 모르다',
    meaningVi: 'Không biết chừng..., có thể... — phỏng đoán không chắc chắn',
    usageNotes:
      'Diễn đạt sự phỏng đoán hay sự không chắc chắn về điều gì đó sẽ xảy ra trong tương lai hoặc đã xảy ra trong quá khứ, thường được dùng kèm phó từ 아마. Dạng quá khứ là -았/었을지도 모르다.',
    examples: [
      { ko: '내일 날씨가 추울지도 모르니까 따뜻하게 입으세요.', vi: 'Không biết chừng mai trời sẽ lạnh nên bạn hãy mặc ấm vào.' },
      { ko: '아마 선생님께서는 학교에 안 계실지도 모르는데 여기서 기다릴까요?', vi: 'Có lẽ thầy không có ở trường đâu, hay là mình đợi ở đây nhé?' },
      { ko: '그 사람이 벌써 집에 갔을지도 몰라요.', vi: 'Không biết chừng người đó đã về nhà rồi.' },
    ],
    commonMistakes: [
      'Mức độ chắc chắn thấp hơn -(으)ㄹ 것이다 hay -겠-, nên không dùng để khẳng định một việc gần như chắc chắn xảy ra.',
      'Thường kết hợp với 아마 ở đầu câu để nhấn mạnh tính không chắc chắn, học viên hay bỏ quên phó từ này.',
    ],
    level: 'trung-cap',
    section: 'phong-doan-va-suy-doan',
    sectionOrder: 5,
    sectionTitleVi: 'Phỏng đoán và suy đoán',
  },
  {
    id: 'gr-trung-cap-21',
    pattern: 'A/V - (으)ㄴ/는/(으)ㄹ 모양이다',
    meaningVi: 'Chắc là..., có vẻ như... — phỏng đoán dựa trên điều đã chứng kiến hoặc nghe thấy',
    usageNotes:
      'Dùng khi muốn phỏng đoán hay suy đoán về một tình huống cụ thể sau khi trực tiếp chứng kiến hoặc nghe kể về tình huống đó. Trước -(으)ㄴ/는 모양이다 thường dùng cấu trúc -(으)ㄴ/는 걸 보니까 để nêu căn cứ phỏng đoán. Hình thức chia phụ thuộc vào việc điều được phỏng đoán đã xảy ra trong quá khứ, đang xảy ra ở hiện tại hay sẽ xảy ra trong tương lai: động từ chia theo thì tương ứng + (으)ㄴ/는/(으)ㄹ, còn tính từ ở dạng phỏng đoán mơ hồ chia (으)ㄴ/(으)ㄹ; ngoài ra còn có dạng hồi tưởng quá khứ +았/었던 모양이다.',
    examples: [
      { ko: '가: 란 씨가 우리 둘이 먼저 밥 먹을래요. 나: 그래요? 지원 씨가 오늘 늦게까지 일하는 모양이에요.', vi: 'A: Lan bảo hai đứa mình ăn cơm trước đi. B: Vậy à? Chắc hôm nay Ji-won phải làm việc muộn.' },
      { ko: '저 사람은 매일 돈을 저렇게 펑펑 써요. 정말 돈이 많은 모양이에요.', vi: 'Người kia ngày nào cũng tiêu tiền như nước. Chắc là người ta lắm tiền thật.' },
      { ko: '그 회사 일이 정말 힘들었던 모양이에요.', vi: 'Chắc công việc ở công ty đó thực sự vất vả.' },
    ],
    commonMistakes: [
      'Dùng để phỏng đoán dựa trên căn cứ đã trực tiếp chứng kiến hoặc nghe thấy, khác với -(으)ㄹ 것 같다 có thể dùng cho cả phỏng đoán chủ quan không cần căn cứ cụ thể.',
      'Cần chia đúng theo thì của sự việc được phỏng đoán (quá khứ/hiện tại/tương lai) chứ không chia cố định một dạng.',
    ],
    level: 'trung-cap',
    section: 'phong-doan-va-suy-doan',
    sectionOrder: 5,
    sectionTitleVi: 'Phỏng đoán và suy đoán',
  },
  {
    id: 'gr-trung-cap-22',
    pattern: 'A/V – (으)ㄹ걸요',
    meaningVi: 'Có lẽ, chắc là... — phỏng đoán chưa chắc chắn cho ngôi thứ ba, dùng trong văn nói thân mật',
    usageNotes:
      "Diễn tả sự phỏng đoán, giả định về sự việc trong tương lai hoặc việc mà người nói chưa chắc chắn lắm, chủ yếu phỏng đoán cho ngôi thứ ba; dạng quá khứ là -았/었을걸요. Chỉ dùng giữa những người thân thiết và chỉ dùng trong văn nói. Dạng thân mật (반말) là -(으)ㄹ걸, tuy nhiên cần cẩn thận không nhầm với cấu trúc -(으)ㄹ걸 (그랬다) mang nghĩa 'biết thế đã...' — phải dựa vào ngữ cảnh để dịch cho đúng.",
    examples: [
      { ko: '가: 저 옷이 비쌀까요? 나: 지금 50%나 세일하니까 비싸지 않을걸요.', vi: 'A: Chiếc áo đó có đắt không nhỉ? B: Đang giảm giá đến 50% nên chắc không đắt đâu.' },
      { ko: '가: 우리 내일 백화점에 갈 때 마이 씨도 부를까요? 나: 마이 씨는 시간이 없을 걸요. 내일 아르바이트를 한다고 했거든요.', vi: 'A: Mai mình đi trung tâm thương mại có gọi Mai đi cùng không? B: Chắc Mai không có thời gian đâu. Cô ấy nói mai phải đi làm thêm.' },
      { ko: '오늘 날씨가 추우니까 사람이 별로 없을걸요.', vi: 'Hôm nay trời lạnh nên chắc sẽ không có mấy người đâu.' },
    ],
    commonMistakes: [
      'Chỉ dùng trong văn nói thân mật giữa bạn bè, người quen — không dùng trong hoàn cảnh trang trọng.',
      "Không nhầm -(으)ㄹ걸 (phỏng đoán) với -(으)ㄹ걸 그랬다 (hối hận, 'biết thế đã...') — hai cấu trúc viết giống nhau khi rút gọn nhưng nghĩa hoàn toàn khác.",
    ],
    level: 'trung-cap',
    section: 'phong-doan-va-suy-doan',
    sectionOrder: 5,
    sectionTitleVi: 'Phỏng đoán và suy đoán',
  },
  {
    id: 'gr-trung-cap-23',
    pattern: 'A/V – (으)ㄴ/는/(으)ㄹ 줄 몰랐다/알았다',
    meaningVi: 'Không nghĩ là, không biết là.../ Cứ tưởng là... — khác biệt giữa kết quả thực tế và điều đã nghĩ trước đó',
    usageNotes:
      "Người nói thể hiện sự khác biệt giữa kết quả thực tế và điều mà bản thân đã suy nghĩ hay dự đoán trước đó; động từ chia theo thì tương ứng + (으)ㄴ/는/(으)ㄹ, tính từ ở dạng phỏng đoán mơ hồ chia (으)ㄴ/(으)ㄹ. -(으)ㄴ/는/(으)ㄹ 줄 몰랐다 mang nghĩa 'không nghĩ là, không biết là', còn -(으)ㄴ/는/(으)ㄹ 줄 알았다 mang nghĩa 'nghĩ là, cứ tưởng là' (điều nghĩ trước đó hóa ra không đúng với thực tế).",
    examples: [
      { ko: '흐엉 씨는 한국어 발음이 좋아서 한국 사람인 줄 알았어요.', vi: 'Vì Hương phát âm tiếng Hàn hay quá nên tôi cứ tưởng cô ấy là người Hàn Quốc.' },
      { ko: '그 가방이 싼 줄 알았어요/쌀 줄 알았어요.', vi: 'Tôi cứ tưởng chiếc túi đó rẻ.' },
      { ko: '마이 씨가 한국에 돌아간 줄 몰랐어요.', vi: 'Tôi không biết là Mai đã về Hàn Quốc rồi.' },
    ],
    commonMistakes: [
      'Cấu trúc chỉ dùng khi điều đã nghĩ trước đó trái ngược hoặc khác với thực tế — nếu điều nghĩ đúng với thực tế thì không dùng cấu trúc này.',
      'Cần phân biệt -는 줄 알았다 (cứ tưởng là đúng, nhưng thực tế sai) với -는 줄 몰랐다 (không biết một sự thật nào đó), học viên hay dùng lẫn hai dạng.',
    ],
    level: 'trung-cap',
    section: 'phong-doan-va-suy-doan',
    sectionOrder: 5,
    sectionTitleVi: 'Phỏng đoán và suy đoán',
  },
  {
    id: 'gr-trung-cap-24',
    pattern: 'A  - (으)ㄴ가 보다, V - 나 보다',
    meaningVi: 'Có vẻ..., chắc là... — phỏng đoán dựa trên bối cảnh, dùng cho ngôi thứ ba',
    usageNotes:
      'Thể hiện sự phỏng đoán hay suy đoán của người nói dựa trên bối cảnh nào đó, đối tượng được phỏng đoán luôn ở ngôi thứ ba, không dùng cho ngôi thứ nhất. Cấu trúc được dùng nhiều trong văn nói: tính từ kết hợp -(으)ㄴ가 보다, động từ kết hợp -나 보다.',
    examples: [
      { ko: '밖에 비가 오나 봐요.', vi: 'Có vẻ ngoài trời đang mưa.' },
      { ko: '흐엉 씨가 어디 아픈가 봐요.', vi: 'Có vẻ Hương đang bị ốm ở đâu đó.' },
      { ko: '가: 뚜안 씨가 보고서를 다 썼어요? 나: 네, 보고서를 다 썼나 봐요. 아까 제출하러 간다고 했거든요.', vi: 'A: Tuấn viết xong báo cáo chưa? B: Chắc là xong rồi đấy. Lúc nãy cậu ấy nói là đi nộp mà.' },
    ],
    commonMistakes: [
      'Không dùng cho chủ ngữ ngôi thứ nhất — muốn nói về cảm nhận của bản thân phải dùng cách diễn đạt khác, không phải -나 보다.',
      'Phân biệt tính từ dùng -(으)ㄴ가 보다 và động từ dùng -나 보다, tránh chia nhầm dạng cho sai từ loại.',
    ],
    level: 'trung-cap',
    section: 'phong-doan-va-suy-doan',
    sectionOrder: 5,
    sectionTitleVi: 'Phỏng đoán và suy đoán',
  },
  {
    id: 'gr-trung-cap-25',
    pattern: 'V -  아/어 놓다',
    meaningVi: '...sẵn rồi, ...trước — hành động kết thúc và trạng thái được duy trì',
    usageNotes:
      'Thể hiện một hành động nào đó đã được hoàn thành và sau đó trạng thái của nó tiếp tục được duy trì, thường đi kèm phó từ 미리. Khi kết hợp với chính động từ 놓다, không dùng dạng 놓아 놓다 mà phải dùng 놓아 두다.',
    examples: [
      { ko: '오늘 오후까지 발표 준비를 해 놓아야 해요.', vi: 'Đến chiều nay tôi phải chuẩn bị sẵn phần thuyết trình.' },
      { ko: '가: 창문을 왜 열어 놓고 있어요? 나: 교실이 너무 더워서 열었어요.', vi: 'A: Sao cửa sổ lại mở sẵn thế này? B: Vì lớp học nóng quá nên tôi đã mở ra.' },
      { ko: '비행기 표를 미리 사 놓았어요.', vi: 'Tôi đã mua sẵn vé máy bay từ trước.' },
    ],
    commonMistakes: [
      '-았/었다 chỉ nhấn mạnh sự kết thúc của hành động chứ không cho biết trạng thái sau đó còn duy trì hay không, trong khi -아/어 놓다 khẳng định trạng thái vẫn còn được duy trì sau khi hành động kết thúc.',
      'Không dùng dạng 놓아 놓다 khi động từ chính là 놓다, phải chuyển thành 놓아 두다.',
    ],
    level: 'trung-cap',
    section: 'dien-ta-trang-thai-hanh-dong',
    sectionOrder: 6,
    sectionTitleVi: 'Diễn tả trạng thái hành động',
  },
  {
    id: 'gr-trung-cap-26',
    pattern: 'V -  아/어 두다',
    meaningVi: '...sẵn (và duy trì lâu dài) — tương tự -아/어 놓다 nhưng trạng thái kéo dài hơn',
    usageNotes:
      'Diễn tả một hành động xảy ra trong quá khứ nhưng trạng thái của nó vẫn được duy trì và kéo dài đến hiện tại, thậm chí đến tương lai. Cấu trúc này tương tự -아/어 놓다, tuy nhiên trạng thái duy trì của -아/어 두다 thường kéo dài lâu hơn.',
    examples: [
      { ko: '발표할 때 실수하지 않게 연습을 많이 해 두세요.', vi: 'Hãy luyện tập thật nhiều từ trước để khi thuyết trình không bị sai sót.' },
      { ko: '잊어버리지 않게 적어 두었는데요.', vi: 'Tôi đã ghi lại sẵn để khỏi quên.' },
      { ko: '여름옷은 겨울 동안 상자에 넣어 두었어요.', vi: 'Tôi đã cất quần áo mùa hè vào hộp suốt cả mùa đông.' },
    ],
    commonMistakes: [
      'Khó phân biệt với -아/어 놓다 vì nghĩa gần giống nhau — điểm khác là -아/어 두다 nhấn mạnh tính lâu dài, chuẩn bị cho tương lai xa hơn.',
      'Không dùng -아/어 두다 cho những hành động mang tính tạm thời, chỉ duy trì trong chốc lát.',
    ],
    level: 'trung-cap',
    section: 'dien-ta-trang-thai-hanh-dong',
    sectionOrder: 6,
    sectionTitleVi: 'Diễn tả trạng thái hành động',
  },
  {
    id: 'gr-trung-cap-27',
    pattern: 'V –(으)ㄴ 채로',
    meaningVi: 'Vẫn đang, trong trạng thái, vẫn cứ... — giữ nguyên trạng thái rồi thực hiện hành động khác',
    usageNotes:
      'Diễn tả việc giữ nguyên trạng thái của hành động trước đó rồi thực hiện hành động ở phía sau. Trước -(으)ㄴ 채로 không thể chia thì hiện tại hay tương lai, và cấu trúc thường kết hợp chung với -아/어 놓다. Có thể rút gọn thành -(으)ㄴ 채.',
    examples: [
      { ko: '어젯밤에 창문을 열어 놓은 채로 잤더니 감기에 걸린 것 같아요.', vi: 'Tối qua tôi ngủ mà vẫn để cửa sổ mở nên hình như bị cảm rồi.' },
      { ko: '한국에서 어른들과 술을 마실 때 고개를 돌린 채로 술을 마셔야 돼요.', vi: 'Ở Hàn Quốc, khi uống rượu với người lớn tuổi phải quay mặt đi rồi mới uống.' },
      { ko: '음악을 틀어 놓은 채로 공부가 되니?', vi: 'Cứ để nhạc bật thế mà học được à?' },
    ],
    commonMistakes: [
      'Không chia thì hiện tại hay tương lai trước -(으)ㄴ 채로 — chỉ dùng dạng đã hoàn thành của động từ.',
      'Nhấn mạnh trạng thái giữ nguyên không thay đổi trong khi hành động khác diễn ra, khác với -면서 (diễn tả hai hành động song song, chủ động cùng lúc).',
    ],
    level: 'trung-cap',
    section: 'dien-ta-trang-thai-hanh-dong',
    sectionOrder: 6,
    sectionTitleVi: 'Diễn tả trạng thái hành động',
  },
  {
    id: 'gr-trung-cap-28',
    pattern: 'V – (으)ㄴ/ 는 대로',
    meaningVi: 'Như, cứ như, theo như... — hành động sau xảy ra đúng theo cách của hành động trước',
    usageNotes:
      'Diễn tả hành động ở mệnh đề sau xảy ra đúng theo cách thức, nội dung của mệnh đề trước. Ngoài ra còn có thể dùng N + 대로 với một số danh từ tiêu biểu như 마음대로, 생각대로, 약속대로, 순서대로, 차례대로, 사실대로, 계획대로.',
    examples: [
      { ko: '제가 발음하는 대로 따라하세요.', vi: 'Hãy bắt chước phát âm đúng theo cách tôi phát âm.' },
      { ko: '요리책에서 보는 대로 삼계탕을 만들어서 정말 맛있어요.', vi: 'Tôi làm gà hầm sâm đúng theo như trong sách nấu ăn nên rất ngon.' },
      { ko: '계획대로 여행을 준비하고 있어요.', vi: 'Tôi đang chuẩn bị chuyến du lịch đúng theo kế hoạch.' },
    ],
    commonMistakes: [
      'V-는 대로 (theo cách đang làm) khác với V-자마자 (ngay sau khi) — dễ bị nhầm lẫn về nghĩa dù một số trường hợp trông giống nhau.',
      'N + 대로 chỉ dùng được với một số danh từ cố định quen thuộc, không tự do kết hợp với mọi danh từ.',
    ],
    level: 'trung-cap',
    section: 'dien-ta-trang-thai-hanh-dong',
    sectionOrder: 6,
    sectionTitleVi: 'Diễn tả trạng thái hành động',
  },
  {
    id: 'gr-trung-cap-29',
    pattern: 'A/V – 기는요',
    meaningVi: '...gì mà, ...đâu mà — phủ nhận khiêm tốn lời khen của đối phương',
    usageNotes:
      'Dùng khi người nói muốn nói một cách khiêm tốn trước lời khen của đối phương, thể hiện sự phủ nhận, bác bỏ hoặc từ chối một cách nhẹ nhàng lời nói của người kia. Cấu trúc này dùng nhiều trong văn nói.',
    examples: [
      { ko: '가: 한국어가 정말 잘하네요. 나: 잘하기는요.', vi: 'A: Bạn nói tiếng Hàn giỏi quá. B: Giỏi gì mà giỏi.' },
      { ko: '가: 유리 씨는 머리가 참 똑똑해요. 나: 똑똑하기는요.', vi: 'A: Yuri thông minh thật đấy. B: Thông minh gì mà thông minh.' },
      { ko: '가: 요리 솜씨가 좋으시네요. 나: 좋기는요. 그냥 인터넷 보고 따라 한 거예요.', vi: 'A: Tay nghề nấu ăn của bạn giỏi thật. B: Giỏi gì mà giỏi, tôi chỉ xem trên mạng rồi làm theo thôi.' },
    ],
    commonMistakes: [
      'Chỉ dùng để phản hồi khiêm tốn trước lời khen hoặc nhận xét của người khác, không dùng để mở đầu câu chuyện.',
      'Ngữ điệu xuống giọng nhẹ nhàng, không phải phủ định gay gắt — nếu nói với giọng mạnh dễ gây hiểu lầm là khó chịu.',
    ],
    level: 'trung-cap',
    section: 'thai-do-va-thoi-quen',
    sectionOrder: 7,
    sectionTitleVi: 'Thái độ và thói quen',
  },
  {
    id: 'gr-trung-cap-30',
    pattern: 'V – 곤 하다',
    meaningVi: 'Thường hay, thường... — hành động lặp đi lặp lại theo thói quen',
    usageNotes:
      'Thể hiện một tình huống nào đó thường xuyên được lặp lại, cũng thường dùng để diễn tả hành động đã lặp lại nhiều lần trong quá khứ. Có thể dùng ở dạng đầy đủ hơn là -고는 하다.',
    examples: [
      { ko: '가: 주말에는 보통 뭘 해요? 나: 친구들을 만나 영화를 보곤 해요.', vi: 'A: Cuối tuần bạn thường làm gì? B: Tôi thường gặp bạn bè rồi đi xem phim.' },
      { ko: '할머니께 어린 시절 이야기를 듣곤 했다.', vi: 'Tôi từng thường xuyên nghe bà kể chuyện thời thơ ấu.' },
      { ko: '저는 주변이 시끄러울 때 이어폰을 꽂고 조용한 음악을 듣곤 해요.', vi: 'Khi xung quanh ồn ào, tôi thường đeo tai nghe và nghe nhạc nhẹ.' },
    ],
    commonMistakes: [
      'Chỉ dùng cho hành động lặp lại nhiều lần theo thói quen, không dùng cho hành động chỉ xảy ra một lần duy nhất.',
      'Không nhầm với -는 편이다 (mục 44): -곤 하다 nhấn mạnh tần suất lặp lại của hành động, còn -는 편이다 nhấn mạnh việc phân loại vào một mức độ, xu hướng nào đó.',
    ],
    level: 'trung-cap',
    section: 'thai-do-va-thoi-quen',
    sectionOrder: 7,
    sectionTitleVi: 'Thái độ và thói quen',
  },
  {
    id: 'gr-trung-cap-31',
    pattern: 'A/V – (으)ㄴ/는 척하다 = 체하다',
    meaningVi: 'Làm như, giả vờ, giả bộ như, tỏ ra như... — hành động trái ngược với sự thật',
    usageNotes:
      'Diễn tả chủ ngữ giả vờ làm điều gì đó trái ngược với sự thật. Ở dạng nhấn mạnh còn có thể dùng 척을 하다 hoặc 척도 하다; ở trình độ cao cấp còn gặp dạng -(으)ㄴ 체 만 체하다.',
    examples: [
      { ko: '어떤 곤충은 자신을 보호하기 위해 죽을 척을 한다.', vi: 'Một số loài côn trùng giả vờ chết để tự bảo vệ mình.' },
      { ko: '친구가 돈을 빌려 달라고 해서 돈이 없는 체해요.', vi: 'Vì bạn tôi hỏi mượn tiền nên tôi giả vờ là không có tiền.' },
      { ko: '제가 한 이야기에 대해 모르는 척해 주세요.', vi: 'Xin hãy giả vờ như không biết chuyện tôi vừa kể nhé.' },
    ],
    commonMistakes: [
      '체하다 và 척하다 có thể dùng thay thế cho nhau với nghĩa gần như tương đương, không phải là hai cấu trúc khác biệt.',
      'Chủ ngữ phải là người có ý thức giả vờ, không dùng cho sự vật vô tri hoặc hiện tượng tự nhiên.',
    ],
    level: 'trung-cap',
    section: 'thai-do-va-thoi-quen',
    sectionOrder: 7,
    sectionTitleVi: 'Thái độ và thói quen',
  },
  {
    id: 'gr-trung-cap-32',
    pattern: 'A/V  – (으)ㄴ/는 대신(에) – N + 대신(에)',
    meaningVi: 'Thay vì, thay cho / bù lại, thay vào đó — thay đổi lựa chọn hoặc bù trừ đặc điểm trái ngược',
    usageNotes:
      "Có hai nét nghĩa: nghĩa thứ nhất thể hiện sự thay đổi từ hành động hay trạng thái ở vế trước sang một hành động hay trạng thái tương tự, tương ứng ở vế sau (dịch là 'thay vì, thay cho'); nghĩa thứ hai thể hiện hành động hay đặc tính ở vế trước và vế sau khác nhau hoặc trái ngược nhau, mang tính bù trừ (dịch là 'bù lại, thay vào đó').",
    examples: [
      { ko: '가: 저녁에 불고기를 같이 먹읍시다. 나: 불고기 대신에 삼겹살를 먹으면 어때요?', vi: 'A: Tối nay chúng ta cùng ăn bulgogi nhé. B: Hay là ăn thịt ba chỉ thay vì bulgogi thì sao?' },
      { ko: '지하철은 빠른 대신에 출퇴근 시간에 사람이 많아요.', vi: 'Tàu điện ngầm nhanh, nhưng bù lại giờ cao điểm lại rất đông người.' },
      { ko: '낚시하는 대신에 테니스를 칩시다.', vi: 'Thay vì đi câu cá, chúng ta chơi tennis đi.' },
    ],
    commonMistakes: [
      'Cần phân biệt hai nghĩa dựa vào ngữ cảnh: thay thế lựa chọn hay bù trừ đặc điểm trái ngược — dịch máy móc một nghĩa duy nhất dễ sai.',
      'Với danh từ dùng trực tiếp N 대신(에), với động từ/tính từ phải thêm -(으)ㄴ/는 trước 대신(에).',
    ],
    level: 'trung-cap',
    section: 'lua-chon',
    sectionOrder: 8,
    sectionTitleVi: 'Lựa chọn',
  },
  {
    id: 'gr-trung-cap-33',
    pattern: '아무 + (이)나 / 아무 + 도',
    meaningVi: 'Bất cứ, bất kỳ... (cũng được) / không... ai, không... gì cả — không chọn lựa cụ thể',
    usageNotes:
      '아무 mang nghĩa không chọn bất cứ cái gì đặc biệt. Tùy vào tiểu từ đi kèm mà 아무 có thể chỉ người hay vật: sau 아무 + (이)나 dùng ở câu khẳng định (bất cứ... cũng được), còn sau 아무 + 도 luôn dùng ở câu phủ định (không... nào cả). Với danh từ chỉ người, dùng dạng 아무나 (bất cứ ai) và 아무도 (không có ai).',
    examples: [
      { ko: '가: 뭐 먹고 싶어요? 나: 저는 아무거나 괜찮아요.', vi: 'A: Bạn muốn ăn gì? B: Tôi ăn gì cũng được.' },
      { ko: '아무도 저를 알지 못하는 곳으로 가고 싶어요.', vi: 'Tôi muốn đến một nơi không ai biết mình cả.' },
      { ko: '요즘 방학이라서 아무 때나 놀러오세요.', vi: 'Dạo này đang nghỉ nên bạn cứ đến chơi lúc nào cũng được.' },
    ],
    commonMistakes: [
      'Aa무 + (이)나 luôn đi với câu khẳng định, còn 아무 + 도 luôn đi với câu phủ định — dùng lẫn hai dạng là lỗi rất phổ biến.',
      'Với danh từ chỉ người phải dùng 아무나/아무도 chứ không phải 아무 사람이나/아무 사람도.',
    ],
    level: 'trung-cap',
    section: 'lua-chon',
    sectionOrder: 8,
    sectionTitleVi: 'Lựa chọn',
  },
  {
    id: 'gr-trung-cap-34',
    pattern: 'N - (이)라도',
    meaningVi: 'Cho dù là..., ...cũng được (dù không phải lựa chọn tốt nhất) — lựa chọn tạm ổn',
    usageNotes:
      'Diễn tả một lựa chọn nào đó tuy không phải tốt nhất nhưng cũng tạm chấp nhận được, dùng khi không có lựa chọn lý tưởng thì tìm phương án thứ hai.',
    examples: [
      { ko: '해외여행이 어려우면 제주도라도 다녀오세요.', vi: 'Nếu khó đi du lịch nước ngoài thì cứ đi đảo Jeju cũng được.' },
      { ko: '밥이 없는데 라면이라도 먹겠어요.', vi: 'Không có cơm thì ăn tạm mì gói cũng được.' },
      { ko: '시간이 없으니까 커피라도 한잔 하고 갈까요?', vi: 'Vì không có nhiều thời gian nên hay là uống tạm một ly cà phê rồi đi nhé?' },
    ],
    commonMistakes: [
      'Phân biệt với (이)나: (이)나 dùng khi các lựa chọn không có sự phân biệt cao thấp, còn (이)라도 dùng khi có phân loại lựa chọn tốt nhất/thứ hai và người nói đang chọn phương án thứ hai vì phương án tốt nhất không khả thi.',
      'Không dùng (이)라도 khi thực sự đó là lựa chọn tốt nhất hoặc duy nhất — cấu trúc luôn ngụ ý còn có lựa chọn tốt hơn.',
    ],
    level: 'trung-cap',
    section: 'lua-chon',
    sectionOrder: 8,
    sectionTitleVi: 'Lựa chọn',
  },
  {
    id: 'gr-trung-cap-35',
    pattern: 'A/V - 든지 A/V - 든지',
    meaningVi: 'Hoặc là...hoặc là... — chọn một trong nhiều thứ, hoặc chọn thứ nào cũng không thành vấn đề',
    usageNotes:
      'Thể hiện rằng trong nhiều lựa chọn, có thể chọn một thứ hoặc chọn thứ nào cũng không quan trọng, không ảnh hưởng đến kết quả. Có thể rút gọn thành -든 -든.',
    examples: [
      { ko: '비가 오든지 눈이 오든지 내일 행사는 예정대로 진행될 겁니다.', vi: 'Dù trời mưa hay tuyết rơi thì sự kiện ngày mai vẫn diễn ra theo đúng kế hoạch.' },
      { ko: '가: 냉면을 드실래요, 불고기를 드실래요? 나: 저는 냉면이든지 불고기든지 다 괜찮아요.', vi: 'A: Bạn ăn mì lạnh hay bulgogi? B: Mì lạnh hay bulgogi tôi cũng ăn được cả.' },
      { ko: '주말에는 등산을 하든지 낚시를 하든지 할 거예요.', vi: 'Cuối tuần tôi sẽ đi leo núi hoặc đi câu cá.' },
    ],
    commonMistakes: [
      'Không nhầm với -거나 (chỉ nêu lựa chọn giữa hai việc): -든지 -든지 thường nhấn mạnh rằng chọn cái nào cũng không quan trọng, kết quả vẫn như nhau.',
      'Có thể rút gọn thành -든 -든 trong văn nói, học viên hay giữ nguyên -든지 khiến câu hơi trang trọng hơn ngữ cảnh cần.',
    ],
    level: 'trung-cap',
    section: 'lua-chon',
    sectionOrder: 8,
    sectionTitleVi: 'Lựa chọn',
  },
  {
    id: 'gr-trung-cap-36',
    pattern: 'A/V – 던 N',
    meaningVi: 'Đã từng thường..., đang... dở — hồi tưởng hành động lặp lại hoặc còn dang dở trong quá khứ',
    usageNotes:
      'Có hai cách dùng: thứ nhất diễn tả một hành động đã thường xuyên xảy ra trong quá khứ nhưng nay đã chấm dứt, thường đi kèm các từ chỉ sự lặp lại như 여러 번, 자주, 가끔, 항상; thứ hai dùng để hồi tưởng những sự việc đã bắt đầu xảy ra trong quá khứ nhưng vẫn còn dang dở, chưa kết thúc, thường đi kèm các mốc thời gian cụ thể như 지난달, 지난주, 어제, 아까, 저번에.',
    examples: [
      { ko: '우리가 자주 가던 식당에 다시 가 보고 싶어요.', vi: 'Tôi muốn quay lại nhà hàng mà chúng ta từng thường xuyên ghé.' },
      { ko: '이 노래는 제가 옛날에 자주 듣던 노래예요.', vi: 'Bài hát này là bài mà ngày xưa tôi từng hay nghe.' },
      { ko: '마시던 커피가 어디에 있어요?', vi: 'Ly cà phê tôi đang uống dở để ở đâu rồi?' },
    ],
    commonMistakes: [
      "-던 diễn tả hành động trong quá khứ còn dang dở hoặc lặp lại nhiều lần, còn -(으)ㄴ diễn tả hành động trong quá khứ đã chấm dứt hoàn toàn, không còn liên quan đến hiện tại — ví dụ '마시던 커피' (cà phê uống dở) khác với '마신 커피' (cà phê đã uống hết).",
      'Không nhầm -던 N với -았/었던 N (mục 43): -았/었던 N nhấn mạnh việc bắt đầu và chấm dứt trọn vẹn trong quá khứ, không kéo dài đến hiện tại.',
    ],
    level: 'trung-cap',
    section: 'hoi-tuong',
    sectionOrder: 9,
    sectionTitleVi: 'Hồi tưởng',
  },
  {
    id: 'gr-trung-cap-37',
    pattern: 'A/V – 더라고요',
    meaningVi: 'Tôi thấy rằng... — kể lại một sự thật mới biết được qua trải nghiệm cá nhân trong quá khứ',
    usageNotes:
      'Được dùng khi nói lại với người khác về một sự thật mà bản thân mới biết được nhờ trải qua một trải nghiệm trong quá khứ, chủ ngữ được nói tới thường là ngôi thứ ba. Khi chủ ngữ là ngôi thứ nhất thì thông thường không dùng cấu trúc này, trừ trường hợp thể hiện cảm xúc, tâm trạng của chính chủ ngữ.',
    examples: [
      { ko: '가: 어제 새로 산 바지 왜 안 입고 왔어요? 나: 집에 가서 입어 보니까 사이즈가 작더라고요.', vi: 'A: Sao bạn không mặc cái quần mới mua hôm qua vậy? B: Về nhà mặc thử tôi mới thấy là nó bị chật.' },
      { ko: '가: 어제 남 씨를 잘 봤어요? 어땠어요? 나: 많이 기대하지 않았는데 재미있더라고요.', vi: 'A: Hôm qua xem phim của Nam thế nào? B: Tôi không kỳ vọng nhiều lắm nhưng hóa ra thấy hay đấy.' },
      { ko: '이 식당에 처음 와 봤는데 생각보다 맛있더라고요.', vi: 'Lần đầu tôi đến quán này, hóa ra ngon hơn tôi tưởng.' },
    ],
    commonMistakes: [
      'Chủ ngữ ngôi thứ nhất thường không dùng được với -더라고요, trừ khi diễn tả cảm xúc của chính mình — học viên hay dùng sai cho hành động chủ động của bản thân.',
      'Chỉ dùng cho điều đã tự mình trải nghiệm và mới biết được, không dùng cho thông tin nghe lại từ người khác (trường hợp đó nên dùng -다고 하다).',
    ],
    level: 'trung-cap',
    section: 'hoi-tuong',
    sectionOrder: 9,
    sectionTitleVi: 'Hồi tưởng',
  },
  {
    id: 'gr-trung-cap-38',
    pattern: 'A/V – 던데요',
    meaningVi: 'Tôi thấy... đấy chứ — nêu điều tương phản với lời người khác nói, kèm cảm giác ngạc nhiên',
    usageNotes:
      'Diễn tả những điều tương phản với điều người khác vừa nói, hoặc diễn tả cảm giác ngạc nhiên trước một sự việc đã xảy ra trong quá khứ trong một hoàn cảnh nhất định. Thường dùng trong câu trả lời, mang ý phản bác nhẹ nhàng.',
    examples: [
      { ko: '가: 흐엉 씨가 학생이에요? 나: 아니요, 회사원이던데요. 삼성 회사에서 일하더라고요.', vi: 'A: Hương là sinh viên à? B: Không đâu, tôi thấy cô ấy đi làm rồi đấy chứ. Nghe nói làm ở công ty Samsung.' },
      { ko: '가: 어제 서진 씨하고 식사했지요? 나: 네, 서진 씨가 베트남 음식을 아주 잘 먹던데요.', vi: 'A: Hôm qua bạn ăn cơm với Seo-jin phải không? B: Đúng rồi, tôi thấy Seo-jin ăn món Việt Nam ngon lành lắm đấy chứ.' },
      { ko: '가: 그 영화가 별로예요? 나: 아니요, 저는 재미있던데요.', vi: 'A: Bộ phim đó không hay à? B: Không đâu, tôi thấy hay đấy chứ.' },
    ],
    commonMistakes: [
      'Cả -던데요 và -더라고요 đều dùng để hồi tưởng quá khứ, nhưng chỉ -던데요 mới dùng được để diễn tả quan điểm trái ngược với ý kiến của đối phương một cách nhẹ nhàng; -더라고요 không mang được sắc thái phản bác này.',
      'Ngữ điệu cuối câu cần nhẹ nhàng, nếu nói mạnh dễ gây cảm giác đang cãi lại người nghe.',
    ],
    level: 'trung-cap',
    section: 'hoi-tuong',
    sectionOrder: 9,
    sectionTitleVi: 'Hồi tưởng',
  },
  {
    id: 'gr-trung-cap-39',
    pattern: 'A/V – 더군요',
    meaningVi: 'Tôi thấy rằng... (kèm sắc thái cảm thán) — hồi tưởng một sự thật mới biết cùng sự ngạc nhiên',
    usageNotes:
      'Được dùng khi nói lại với người khác về một sự thật mà bản thân mới biết được nhờ trải qua một trải nghiệm trong quá khứ, kèm theo cảm giác ngạc nhiên; chủ ngữ thường ở ngôi thứ ba. Cách dùng khá giống -더라고요 nhưng mang sắc thái cảm thán rõ hơn.',
    examples: [
      { ko: '그 사람은 언제나 자기 생각만 하더군요.', vi: 'Tôi thấy người đó lúc nào cũng chỉ nghĩ cho bản thân mình thôi.' },
      { ko: '그 애가 많이 아프더군.', vi: 'Tôi thấy đứa bé đó ốm nặng lắm.' },
      { ko: '오랜만에 만났는데 하나도 안 변했더군요.', vi: 'Lâu lắm mới gặp lại mà tôi thấy anh ấy chẳng thay đổi gì cả.' },
    ],
    commonMistakes: [
      'Mang sắc thái cảm thán mạnh hơn -더라고요, không nên dùng khi chỉ đơn thuần muốn kể lại thông tin bình thường không có gì đáng ngạc nhiên.',
      'Ít dùng trong văn nói suồng sã hàng ngày hơn -더라고요, thường xuất hiện khi người nói muốn nhấn mạnh cảm xúc bất ngờ của mình.',
    ],
    level: 'trung-cap',
    section: 'hoi-tuong',
    sectionOrder: 9,
    sectionTitleVi: 'Hồi tưởng',
  },
  {
    id: 'gr-trung-cap-40',
    pattern: 'V -  아/어 버리다',
    meaningVi: 'Hết rồi, mất rồi, ...rồi — hoàn tất trọn vẹn một hành động, thường kèm cảm giác nhẹ nhõm hoặc tiếc nuối',
    usageNotes:
      'Diễn tả tính hoàn toàn, trọn vẹn của kết quả một hành động. Ngoài ra còn mang ý nghĩa giải phóng khỏi gánh nặng do phải thực hiện hành động đó, hoặc thể hiện chút tiếc nuối về kết quả của hành động.',
    examples: [
      { ko: '돈을 다 써 버렸어요.', vi: 'Tôi đã tiêu hết sạch tiền rồi.' },
      { ko: '막내딸도 시집 보내 버리면 섭섭할걸.', vi: 'Nếu gả cả con gái út đi nữa thì chắc sẽ buồn lắm.' },
      { ko: '그렇게 마음에 들면 고민하지 말고 그냥 사 버리세요.', vi: 'Nếu đã thích đến thế thì đừng đắn đo nữa, cứ mua luôn đi.' },
    ],
    commonMistakes: [
      "Có thể mang hai sắc thái trái ngược — nhẹ nhõm khi trút được gánh nặng, hoặc tiếc nuối khi kết quả không như ý — cần dựa vào ngữ cảnh để hiểu đúng, không chỉ dịch máy móc là 'mất rồi'.",
      'Phân biệt với -고 말다 (mục 41): -아/어 버리다 thiên về cảm giác nhẹ nhõm khi trút bỏ gánh nặng, còn -고 말다 chỉ mang sắc thái tiếc nuối, không có nghĩa nhẹ nhõm.',
    ],
    level: 'trung-cap',
    section: 'su-hoan-tat-cua-hanh-dong',
    sectionOrder: 10,
    sectionTitleVi: 'Sự hoàn tất của hành động',
  },
  {
    id: 'gr-trung-cap-41',
    pattern: 'V -  고 말다',
    meaningVi: 'Cuối cùng thì..., ...mất rồi — kết quả tiếc nuối ngoài ý muốn hoặc thành quả sau nỗ lực vất vả',
    usageNotes:
      'Diễn tả sự tiếc nuối vì một việc nào đó đã xảy ra ngoài ý muốn, hoặc diễn tả một kết quả đạt được sau một quá trình phấn đấu vất vả; dạng nhấn mạnh là -고야 말다. Trước -고 말다 thường xuất hiện các phó từ như 결국, 드디어, 마침내, 끝내.',
    examples: [
      { ko: '끝까지 해 보려고 했지만 중간에 포기하고 말았어요.', vi: 'Tôi đã định làm đến cùng nhưng cuối cùng lại bỏ cuộc giữa chừng.' },
      { ko: '결국은 이혼을 하고 말았어요.', vi: 'Cuối cùng thì họ cũng ly hôn.' },
      { ko: '휴대폰을 떨어뜨려서 액정이 깨지고 말았어요.', vi: 'Vì làm rơi điện thoại nên màn hình đã bị vỡ mất rồi.' },
    ],
    commonMistakes: [
      '-고 말다 chỉ mang sắc thái tiếc nuối khi việc không như mong muốn xảy ra (hoặc nhấn mạnh nỗ lực đạt được thành quả), hoàn toàn không có sắc thái nhẹ nhõm như -아/어 버리다.',
      'Thường đi kèm các phó từ nhấn mạnh trình tự như 결국, 드디어, 마침내 — thiếu các từ này câu vẫn đúng ngữ pháp nhưng kém tự nhiên.',
    ],
    level: 'trung-cap',
    section: 'su-hoan-tat-cua-hanh-dong',
    sectionOrder: 10,
    sectionTitleVi: 'Sự hoàn tất của hành động',
  },
  {
    id: 'gr-trung-cap-42',
    pattern: 'V – 았/었다(가)',
    meaningVi: '...xong rồi thì lại... — hành động sau xảy ra sau khi hành động trước đã hoàn tất, hai hành động thường đối nghịch nhau',
    usageNotes:
      'Diễn tả sau khi hành động ở mệnh đề trước đã kết thúc thì hành động ở mệnh đề sau mới xảy ra, thường là hai động từ mang nghĩa đối nghịch nhau. Hình thức -았/었 trong -았/었다가 không mang nghĩa thì quá khứ mà thể hiện sự hoàn tất của hành động; mệnh đề sau có thể kết hợp với bất kỳ thì nào (quá khứ, hiện tại, tương lai).',
    examples: [
      { ko: '창문을 닫았다가 열었어요.', vi: 'Tôi đã đóng cửa sổ lại rồi lại mở ra.' },
      { ko: '마트에 갔다 올게요.', vi: 'Tôi đi siêu thị rồi về ngay.' },
      { ko: '치마를 샀다가 사이즈가 작아서 환불했어요.', vi: 'Tôi đã mua chiếc váy rồi vì bị chật nên đã trả lại.' },
    ],
    commonMistakes: [
      'Phân biệt -았/었다가 (hành động sau xảy ra khi hành động trước ĐÃ KẾT THÚC hoàn toàn) với -다가 (hành động sau xen vào khi hành động trước VẪN CÒN TIẾP DIỄN, còn dang dở).',
      'Động từ ở hai vế của -았/었다가 thường phải mang nghĩa tương phản nhau (đóng - mở, mua - trả), trong khi -다가 có thể kết hợp với hầu hết mọi động từ.',
    ],
    level: 'trung-cap',
    section: 'su-hoan-tat-cua-hanh-dong',
    sectionOrder: 10,
    sectionTitleVi: 'Sự hoàn tất của hành động',
  },
  {
    id: 'gr-trung-cap-43',
    pattern: 'A/V – 았/었던 N',
    meaningVi: 'Đã từng... (nhưng đã chấm dứt) — hồi tưởng sự việc bắt đầu và kết thúc trọn vẹn trong quá khứ',
    usageNotes:
      'Diễn tả sự hồi tưởng về một sự việc đã xảy ra trong quá khứ và không kéo dài đến hiện tại, hoặc một sự việc chỉ xảy ra một lần duy nhất trong quá khứ. Khi tính từ kết hợp với -았/었던 thì có hai nghĩa tùy theo bối cảnh: một là chỉ sự việc ở hiện tại tương phản với quá khứ, hai là chỉ sự việc ở quá khứ vẫn còn kéo dài đến hiện tại.',
    examples: [
      { ko: '지난번에 만났던 카페에서 만납시다.', vi: 'Chúng ta gặp nhau ở quán cà phê mà lần trước đã từng gặp nhé.' },
      { ko: '이게 옛날 사람들이 먹었던 음식이다.', vi: 'Đây là món ăn mà người xưa đã từng ăn.' },
      { ko: '작년에는 키가 작았던 남 씨가 지금은 키가 커요.', vi: 'Nam hồi năm ngoái từng thấp bé, giờ đã cao lớn hẳn.' },
    ],
    commonMistakes: [
      'So với -던 (mục 36, hành động lặp lại hoặc còn dang dở trong quá khứ), -았/었던 diễn tả sự việc đã bắt đầu và chấm dứt trọn vẹn trong quá khứ, không kéo dài đến hiện tại — dễ nhầm hai cấu trúc gần giống mặt chữ này.',
      'Với tính từ, cần xét ngữ cảnh để biết đang tương phản hiện tại - quá khứ hay chỉ đơn thuần hồi tưởng, không có quy tắc cố định.',
    ],
    level: 'trung-cap',
    section: 'su-hoan-tat-cua-hanh-dong',
    sectionOrder: 10,
    sectionTitleVi: 'Sự hoàn tất của hành động',
  },
  {
    id: 'gr-trung-cap-44',
    pattern: 'A/V – (으)ㄴ/는 편이다',
    meaningVi: 'Vào loại..., thuộc diện... — phân loại một sự vật/sự việc/người vào một xu hướng, mức độ nào đó',
    usageNotes:
      'Biểu hiện việc phân loại một đối tượng thuộc vào một loại, một xu hướng nào đó thay vì khẳng định tuyệt đối, mang tính giảm nhẹ mức độ khẳng định của câu nói.',
    examples: [
      { ko: '저는 맵게 먹는 편이에요.', vi: 'Tôi thuộc kiểu ăn cay.' },
      { ko: '하노이의 물가는 베트남의 다른 도시보다 비싼 편이에요.', vi: 'Vật giá ở Hà Nội thuộc diện đắt hơn so với các thành phố khác của Việt Nam.' },
      { ko: '저는 아침에 일찍 일어나는 편이에요.', vi: 'Tôi thuộc kiểu người dậy sớm vào buổi sáng.' },
    ],
    commonMistakes: [
      "Mang tính tương đối, giảm nhẹ mức độ khẳng định, không dùng để khẳng định tuyệt đối một đặc điểm — nói '아주 맵는 편이다' nghe hơi thừa vì đã giảm nhẹ rồi lại nhấn mạnh.",
      'Không nhầm với -곤 하다 (mục 30): -는 편이다 nói về xu hướng, phân loại chung, còn -곤 하다 nói về tần suất lặp lại của một hành động cụ thể.',
    ],
    level: 'trung-cap',
    section: 'dac-diem-tinh-chat',
    sectionOrder: 11,
    sectionTitleVi: 'Đặc điểm, tính chất',
  },
  {
    id: 'gr-trung-cap-45',
    pattern: 'N - 스럽다',
    meaningVi: 'Có tính chất, cảm giác giống như... — tính từ hóa danh từ, mang nghĩa CÓ VẺ NHƯ có đặc điểm đó',
    usageNotes:
      'Diễn tả một sự vật, sự việc có cảm giác hoặc tính chất giống như danh từ đứng trước nó, dùng để tạo tính từ từ danh từ. Một số từ tiêu biểu: 고민스럽다, 다행스럽다, 만족스럽다, 부담스럽다, 사랑스럽다, 자연스럽다, 어른스럽다, 촌스럽다, 혼란스럽다.',
    examples: [
      { ko: '한국 사람들과 한국어로 자연스럽게 이야기를 할 수 있었으면 좋겠어요.', vi: 'Giá mà tôi có thể nói chuyện bằng tiếng Hàn một cách tự nhiên với người Hàn Quốc.' },
      { ko: '저는 어른스럽게 보이는 옷을 사고 싶어요.', vi: 'Tôi muốn mua quần áo trông có vẻ chững chạc, người lớn.' },
      { ko: '그 소식을 들으니까 정말 다행스러워요.', vi: 'Nghe được tin đó tôi thấy thật là may mắn, nhẹ cả người.' },
    ],
    commonMistakes: [
      'Diễn tả sự vật CÓ VẺ NHƯ mang tính chất của danh từ đó chứ không phải chắc chắn có đầy đủ tính chất ấy, khác với -답다 (mục 46).',
      'Không tự do ghép -스럽다 vào mọi danh từ, chỉ dùng được với những từ đã cố định quen thuộc trong tiếng Hàn.',
    ],
    level: 'trung-cap',
    section: 'dac-diem-tinh-chat',
    sectionOrder: 11,
    sectionTitleVi: 'Đặc điểm, tính chất',
  },
  {
    id: 'gr-trung-cap-46',
    pattern: 'N - 답다',
    meaningVi: 'Đúng chất, xứng đáng là... — mang đầy đủ đặc điểm, phẩm chất tiêu biểu của danh từ đó',
    usageNotes:
      'Diễn tả đặc điểm hay tính chất của một danh từ mà đối tượng ĐANG CÓ ĐẦY ĐỦ, xứng đáng với danh từ đó. Một số từ tiêu biểu: 신사답다, 전문가답다, 선수답다, 기자답다, 남자답다. So với -스럽다 (chỉ CÓ VẺ NHƯ có tính chất đó), -답다 khẳng định đối tượng thực sự MANG ĐẦY ĐỦ tính chất, đặc điểm của danh từ đứng trước; -답다 có thể dùng sau danh từ chỉ nơi chốn, cơ quan, nhưng nếu dùng -스럽다 sau các danh từ này (như 길스럽다, 학교스럽다) sẽ nghe không tự nhiên.',
    examples: [
      { ko: '뚜안 씨는 남자다운 데가 하나도 없는 것 같아요.', vi: 'Hình như Tuấn chẳng có nét nào ra dáng đàn ông cả.' },
      { ko: '학생은 학생답게 행동해야 해요.', vi: 'Là học sinh thì phải hành động cho đúng chất học sinh.' },
      { ko: '그 기자는 정말 기자다운 질문을 했어요.', vi: 'Phóng viên đó đã đặt câu hỏi rất đúng chất một nhà báo.' },
    ],
    commonMistakes: [
      'Phân biệt với -스럽다: -답다 khẳng định mang đầy đủ tính chất tiêu biểu, còn -스럽다 chỉ mang cảm giác giống như có tính chất đó, mức độ khẳng định nhẹ hơn.',
      'Không ghép -답다 tùy tiện với mọi danh từ chỉ nơi chốn — dù về lý thuyết được phép nhưng phải dùng đúng những từ đã quen thuộc, cố định.',
    ],
    level: 'trung-cap',
    section: 'dac-diem-tinh-chat',
    sectionOrder: 11,
    sectionTitleVi: 'Đặc điểm, tính chất',
  },
  {
    id: 'gr-trung-cap-47',
    pattern: 'A/V – 다고요?',
    meaningVi: 'Bạn vừa nói là...? gì cơ? đúng không? — nhắc lại lời người khác để xác nhận hoặc bày tỏ khó tin',
    usageNotes:
      'Người nói nhắc lại lời của người khác với mục đích xác nhận điều mình chưa nghe rõ, hoặc vì nội dung nghe được khó tin là sự thật. Có thể dùng các dạng trích dẫn khác nhau tùy loại câu của đối phương: -자고요?, -(으)라고요?, -냐고요?, và thường gắn thêm 요 vào cuối câu trích dẫn.',
    examples: [
      { ko: '가: 선생님이 왔어요. 나: 누가 왔다고요? 가: 선생님이요.', vi: 'A: Thầy giáo đến rồi. B: Ai đến cơ? A: Thầy giáo ạ.' },
      { ko: '가: 요즘 날씬해 보이네요. 다이어트했어요? 나: 다이어트했냐고요? 저는 살이 3kg 이나 쪘어요.', vi: 'A: Dạo này bạn trông thon gọn hẳn ra. Bạn ăn kiêng à? B: Bạn hỏi tôi có ăn kiêng không á? Tôi tăng những 3kg đấy chứ.' },
      { ko: '가: 이번 주말에 이사해요. 나: 이번 주말에 이사한다고요? 갑자기요?', vi: 'A: Cuối tuần này tôi chuyển nhà. B: Bạn nói là cuối tuần này chuyển nhà á? Đột ngột vậy?' },
    ],
    commonMistakes: [
      'Hình thức trích dẫn phải chọn đúng theo loại câu gốc (trần thuật/nghi vấn/mệnh lệnh/cầu khiến) — dùng sai dạng -다고요 cho câu hỏi thay vì -냐고요 là lỗi phổ biến.',
      'Ngữ điệu lên giọng cuối câu để thể hiện sự chưa rõ hoặc ngạc nhiên, nếu xuống giọng sẽ mất đi sắc thái hỏi lại.',
    ],
    level: 'trung-cap',
    section: 'trich-dan-gian-tiep',
    sectionOrder: 12,
    sectionTitleVi: 'Trích dẫn gián tiếp',
  },
  {
    id: 'gr-trung-cap-48',
    pattern: 'A/V – 다고 하던데 – 다고 했던데',
    meaningVi: 'Tôi thấy anh chị ấy/người ta nói là... — hồi tưởng và xác nhận điều người khác đã từng nói',
    usageNotes:
      'Dùng để hồi tưởng hoặc xác nhận lại điều mà người khác đã nói trước đó, mệnh đề sau thường diễn tả quan điểm, câu hỏi, lời khuyên hoặc lời gợi ý của người nói dựa trên thông tin đã nghe được.',
    examples: [
      { ko: '어제 흐엉 씨가 모임에 가자고 하던데 같이 갈래요?', vi: 'Hôm qua Hương có rủ đi họp mặt đấy, bạn có muốn đi cùng không?' },
      { ko: '가: 오늘 저녁은 어디에서 먹을까요? 나: 여기 근처에 베트남 식당이 있다고 하던데 거기에서 먹는 게 어때요?', vi: 'A: Tối nay mình ăn ở đâu nhỉ? B: Nghe nói gần đây có quán ăn Việt Nam đấy, hay là mình ăn ở đó?' },
      { ko: '다음 주말에 란 씨가 아기 돌잔치를 할거라고 하던데 갈 거예요?', vi: 'Nghe nói cuối tuần sau Lan tổ chức tiệc thôi nôi cho con, bạn có định đi không?' },
    ],
    commonMistakes: [
      'Đây là lời trích dẫn gián tiếp kết hợp với hồi tưởng (-던데), nên chỉ dùng cho điều đã nghe được trước đó chứ không phải điều tự mình chứng kiến trực tiếp.',
      'Mệnh đề sau luôn cần có nội dung hỏi ý kiến, đề nghị hay gợi ý — nếu chỉ đơn thuần kể lại thông tin thì dùng -다고 하다 là đủ.',
    ],
    level: 'trung-cap',
    section: 'trich-dan-gian-tiep',
    sectionOrder: 12,
    sectionTitleVi: 'Trích dẫn gián tiếp',
  },
  {
    id: 'gr-trung-cap-49',
    pattern: 'A/V – 다면서요?',
    meaningVi: 'Nghe nói..., hình như bạn đã nói rằng... phải không? — hỏi xác nhận lại thông tin đã biết nhưng chưa chắc chắn',
    usageNotes:
      'Dùng để hỏi và xác nhận lại một sự thật hay thông tin mà người nói đã biết hoặc nghe được ở đâu đó rồi, nhưng vẫn còn chưa hoàn toàn chắc chắn. Có thể rút gọn thành -다면서?/-다며?, và chỉ dùng khi trò chuyện với những người thân thiết.',
    examples: [
      { ko: '가: 어제 하노이에 비가 많이 내렸다면서요? 나: 네, 정말 많이 오더라고요.', vi: 'A: Nghe nói hôm qua Hà Nội mưa to lắm phải không? B: Ừ, đúng là mưa to thật đấy.' },
      { ko: '가: 한국 남자들은 모두 군대에 가야 한다면서요? 나: 네, 맞아요.', vi: 'A: Nghe nói con trai Hàn Quốc ai cũng phải đi nghĩa vụ quân sự phải không? B: Vâng, đúng vậy.' },
      { ko: '가: 이번에 승진했다면서요? 축하해요. 나: 고마워요.', vi: 'A: Nghe nói bạn vừa được thăng chức phải không? Chúc mừng nhé. B: Cảm ơn bạn.' },
    ],
    commonMistakes: [
      'Chỉ dùng trong văn nói thân mật, không dùng trong hoàn cảnh trang trọng hoặc với người lớn tuổi có khoảng cách.',
      'Khác với -다고요? (mục 47, hỏi lại vì chưa nghe rõ), -다면서요? dùng khi người nói ĐÃ biết thông tin từ trước và chỉ muốn xác nhận lại.',
    ],
    level: 'trung-cap',
    section: 'trich-dan-gian-tiep',
    sectionOrder: 12,
    sectionTitleVi: 'Trích dẫn gián tiếp',
  },
  {
    id: 'gr-trung-cap-50',
    pattern: 'A/V – 다니요?',
    meaningVi: 'Đã nói là... ư?, có thật là nói... như vậy không? — lặp lại lời người khác để bày tỏ ngạc nhiên hoặc không tin',
    usageNotes:
      'Cấu trúc lặp lại lời của đối phương để diễn tả cảm giác ngạc nhiên mạnh của người nói; người nói tỏ ra ngạc nhiên hoặc không tin điều người khác vừa nói là đúng, là thật.',
    examples: [
      { ko: '가: 흐엉 씨가 방탄소년단을 만났대요. 나: 방탄소년단을 만났다니요? 정말 부러워요.', vi: 'A: Nghe nói Hương đã gặp BTS đấy. B: Gặp được BTS thật á? Ghen tị quá đi mất.' },
      { ko: '가: 기말시험이 언제인지 아세요? 나: 언제인지 아냐니요? 어제인데 몰랐어요?', vi: 'A: Bạn có biết khi nào thi cuối kỳ không? B: Hỏi tôi có biết không á? Là hôm qua đấy, bạn không biết à?' },
      { ko: '가: 저 오늘부터 회사 그만뒀어요. 나: 그만뒀다니요? 갑자기 무슨 일이에요?', vi: 'A: Tôi nghỉ việc từ hôm nay rồi. B: Nghỉ việc thật á? Có chuyện gì đột ngột vậy?' },
    ],
    commonMistakes: [
      'Mang sắc thái ngạc nhiên mạnh hơn -다고요?, thường thể hiện cảm xúc bất ngờ hoặc khó tin rõ rệt, không chỉ đơn thuần hỏi lại vì nghe chưa rõ.',
      'Không dùng trong hoàn cảnh trang trọng, lịch sự vì dễ nghe như đang phản ứng gay gắt với người nói.',
    ],
    level: 'trung-cap',
    section: 'trich-dan-gian-tiep',
    sectionOrder: 12,
    sectionTitleVi: 'Trích dẫn gián tiếp',
  },
  {
    id: 'gr-trung-cap-51',
    pattern: 'V – (으) ㄹ까 하다 / (으)ㄹ 까 – (으)ㄹ까 하다 / (으)ㄹ까 말까 하다',
    meaningVi: 'Dự định, đang phân vân... — ý định chưa chắc chắn, có thể thay đổi',
    usageNotes:
      'Người nói thể hiện việc đang suy nghĩ hay có dự định làm gì đó nhưng chưa chắc chắn, có thể thay đổi; thể hiện sự do dự, đang phân vân, cân nhắc của chủ thể. Có thể dùng dạng -(으)ㄹ까 – (으)ㄹ까 하다 để phân vân giữa hai việc, hoặc -(으)ㄹ까 말까 하다 để phân vân giữa làm hay không làm. Chủ ngữ của cấu trúc này chỉ là 나(저) hoặc 우리.',
    examples: [
      { ko: '저녁 준비하기 싫어서 주문해서 먹을까 해요.', vi: 'Vì lười nấu tối nên tôi đang định đặt đồ ăn về.' },
      { ko: '이번 방학에 운전을 배울까 말까 해요.', vi: 'Kỳ nghỉ này tôi đang phân vân không biết có nên học lái xe hay không.' },
      { ko: '낚시할까 소풍 갈까 하는데요.', vi: 'Tôi đang phân vân không biết nên đi câu cá hay đi picnic.' },
    ],
    commonMistakes: [
      'Chủ ngữ chỉ giới hạn ở ngôi thứ nhất (tôi/chúng tôi), không dùng cho ngôi thứ hai hay thứ ba.',
      'Thể hiện ý định CHƯA CHẮC CHẮN, có thể thay đổi — khác với -(으)려고 하다 vốn diễn tả ý định đã khá rõ ràng, quyết tâm hơn.',
    ],
    level: 'trung-cap',
    section: 'quyet-tam-va-y-do',
    sectionOrder: 13,
    sectionTitleVi: 'Quyết tâm và ý đồ',
  },
  {
    id: 'gr-trung-cap-52',
    pattern: 'V – 고자',
    meaningVi: 'Để, để cho... — mục đích của hành động, mang tính trang trọng',
    usageNotes:
      'Diễn tả nội dung ở mệnh đề trước là ý đồ hay mục đích của hành động ở mệnh đề sau. Cấu trúc này chủ yếu dùng trong văn viết, khi phát biểu hoặc báo cáo mang tính trang trọng.',
    examples: [
      { ko: '살을 빼고자 꾸준히 운동하는 게 좋다.', vi: 'Để giảm cân thì nên tập thể dục đều đặn.' },
      { ko: '아침에 일어나고자 일찍 자면 됩니다.', vi: 'Để dậy sớm vào buổi sáng thì chỉ cần đi ngủ sớm là được.' },
      { ko: '정부는 청년 실업 문제를 해결하고자 새로운 정책을 발표했다.', vi: 'Chính phủ đã công bố chính sách mới nhằm giải quyết vấn đề thất nghiệp của thanh niên.' },
    ],
    commonMistakes: [
      'Mang tính trang trọng, dùng nhiều trong văn viết, báo cáo, phát biểu — tránh dùng trong văn nói suồng sã hàng ngày vì nghe cứng nhắc.',
      'Không nhầm với -게 hay -도록 (mục 80, 82) tuy cùng diễn tả mục đích nhưng thông dụng trong văn nói hơn.',
    ],
    level: 'trung-cap',
    section: 'quyet-tam-va-y-do',
    sectionOrder: 13,
    sectionTitleVi: 'Quyết tâm và ý đồ',
  },
  {
    id: 'gr-trung-cap-53',
    pattern: 'V – (으)려던 참이다',
    meaningVi: 'Vừa mới có ý định..., đúng lúc định... — đang định làm gì đó đúng vào thời điểm nói',
    usageNotes:
      'Diễn tả việc người nói đang định bắt đầu thực hiện một hành động nào đó đúng vào ngay thời điểm nói chuyện, thường đi kèm phó từ 막, 마침. Có thể dùng dạng -(으)려던 참에 để nối tiếp với mệnh đề khác.',
    examples: [
      { ko: '가: 이거 사전이에요. 미미 씨 주려고 빌렸어요. 나: 고마워요. 저도 사전을 빌리려던 참이었어요.', vi: 'A: Đây là quyển từ điển, tôi mượn để đưa cho Mi-mi. B: Cảm ơn bạn, tôi cũng đang định đi mượn từ điển đây.' },
      { ko: '제가 전화하려던 참이었어요.', vi: 'Tôi cũng đang định gọi điện cho bạn đây.' },
      { ko: '수영장에 가려던 참에 친구가 월요일에는 문을 닫는다고 말했어요.', vi: 'Đúng lúc tôi định đi bể bơi thì bạn tôi bảo là thứ Hai bể bơi đóng cửa.' },
    ],
    commonMistakes: [
      'Chỉ diễn tả ý định đúng vào thời điểm nói, không dùng cho kế hoạch đã có từ lâu hoặc dự định trong tương lai xa.',
      'Thường kết hợp với 막, 마침 để nhấn mạnh tính trùng hợp về thời điểm, thiếu các phó từ này câu vẫn đúng nhưng kém tự nhiên.',
    ],
    level: 'trung-cap',
    section: 'quyet-tam-va-y-do',
    sectionOrder: 13,
    sectionTitleVi: 'Quyết tâm và ý đồ',
  },
  {
    id: 'gr-trung-cap-54',
    pattern: 'V – 아/어야지요',
    meaningVi: 'Phải... chứ nhỉ — tự hứa với bản thân hoặc bày tỏ ý định của mình',
    usageNotes:
      'Người nói tự hứa với chính bản thân sẽ quyết tâm thực hiện việc gì đó, hoặc đơn giản là diễn tả ý định của mình. Có thể dùng ở dạng thân mật -아/어야지, hoặc rút gọn thành -아/어야죠.',
    examples: [
      { ko: '가: 어제 "기생충"이라는 영화를 봤는데 정말 재미있었어. 나: 난 아직도 못 봤는데 그렇게 재미있어? 그럼 나도 봐야지.', vi: "A: Hôm qua tớ xem phim 'Ký sinh trùng', hay cực. B: Tớ vẫn chưa xem, hay đến vậy á? Vậy thì tớ cũng phải xem thôi." },
      { ko: '가: 그렇게 자꾸 지각하다가는 공부하기 어려울 거야. 나: 내일부터는 절대 학교에 지각하지 말아야지요.', vi: 'A: Cứ đi muộn mãi thế này thì học hành sẽ khó khăn đấy. B: Từ mai tôi nhất định sẽ không đi học muộn nữa.' },
      { ko: '이제부터라도 건강을 위해 운동을 해야지요.', vi: 'Từ giờ trở đi tôi cũng phải tập thể dục vì sức khỏe thôi.' },
    ],
    commonMistakes: [
      'Đây là lời tự nhủ, tự hứa với bản thân chứ không phải yêu cầu người nghe làm gì — không nên dùng để ra lệnh cho người khác.',
      'Dạng thân mật -아/어야지 và dạng lịch sự -아/어야지요/-아/어야죠 cần chọn đúng theo ngữ cảnh giao tiếp.',
    ],
    level: 'trung-cap',
    section: 'quyet-tam-va-y-do',
    sectionOrder: 13,
    sectionTitleVi: 'Quyết tâm và ý đồ',
  },
  {
    id: 'gr-trung-cap-55',
    pattern: 'V – (으)ㄹ 겸 V –  (으)ㄹ 겸',
    meaningVi: 'Vừa để...vừa để... — thực hiện hai mục đích cùng lúc, bình đẳng nhau',
    usageNotes:
      'Diễn tả ý định muốn thực hiện hai hành động, hai mục đích cùng một lúc; cả hai mục đích đều bình đẳng về mức độ ưu tiên, không cái nào là chính, cái nào là phụ.',
    examples: [
      { ko: '산책도 할 겸 사진도 찍을 겸 집 근처 공원에 갔어요.', vi: 'Tôi đến công viên gần nhà vừa để đi dạo vừa để chụp ảnh.' },
      { ko: '용돈도 벌 겸 경험도 쌓을 겸 아르바이트를 하려고 해요.', vi: 'Tôi định đi làm thêm vừa để kiếm tiền tiêu vặt vừa để tích lũy kinh nghiệm.' },
      { ko: '친구도 만날 겸 책도 살 겸 서점에 갔다 왔어요.', vi: 'Tôi đã đến hiệu sách vừa để gặp bạn vừa để mua sách.' },
    ],
    commonMistakes: [
      'Hai mục đích phải mang tính bình đẳng, không phân biệt chính - phụ; nếu có một mục đích chính rõ ràng nên dùng -(으)러 가다 hay -기 위해서 thay thế.',
      'Cấu trúc thường cần lặp lại -(으)ㄹ 겸 hai lần cho hai mục đích, nếu chỉ nói một lần sẽ không đúng cấu trúc chuẩn.',
    ],
    level: 'trung-cap',
    section: 'quyet-tam-va-y-do',
    sectionOrder: 13,
    sectionTitleVi: 'Quyết tâm và ý đồ',
  },
  {
    id: 'gr-trung-cap-56',
    pattern: 'V - 는 김에',
    meaningVi: 'Nhân tiện..., nhân cơ hội... — làm luôn việc khác khi đang thực hiện việc trước',
    usageNotes:
      'Diễn tả việc nhân tiện, nhân cơ hội đang làm việc ở mệnh đề trước thì làm luôn việc ở mệnh đề sau, dù việc sau không phải là mục đích ban đầu.',
    examples: [
      { ko: '세탁을 하는 김에 청소도 할까요?', vi: 'Nhân tiện đang giặt đồ, hay là mình dọn dẹp luôn nhé?' },
      { ko: '제주도에 출장을 가는 김에 여기 저기 여행할 생각이에요.', vi: 'Nhân dịp đi công tác ở đảo Jeju, tôi định đi du lịch loanh quanh luôn.' },
      { ko: '마트에 가는 김에 우유도 좀 사다 주세요.', vi: 'Nhân tiện đi siêu thị, hãy mua giúp tôi ít sữa nhé.' },
    ],
    commonMistakes: [
      'Việc ở mệnh đề sau không phải là mục đích chính ban đầu mà chỉ là tận dụng cơ hội — nếu là mục đích chính từ đầu thì không phù hợp dùng -는 김에.',
      'Chỉ dùng với động từ, không dùng với tính từ; cũng có thể dùng dạng N + 김에 với một số danh từ chỉ dịp, cơ hội.',
    ],
    level: 'trung-cap',
    section: 'quyet-tam-va-y-do',
    sectionOrder: 13,
    sectionTitleVi: 'Quyết tâm và ý đồ',
  },
  {
    id: 'gr-trung-cap-57',
    pattern: 'V – (으)ㄹ 만하다',
    meaningVi: 'Đáng để... — hành động có giá trị, xứng đáng để thực hiện',
    usageNotes:
      'Biểu hiện một hành động nào đó có giá trị để làm, xứng đáng để thực hiện hoặc trải nghiệm.',
    examples: [
      { ko: '가: 볼 만한 드라마를 좀 추천해 주시겠어요? 나: "오징어 게임" 어때요?', vi: "A: Bạn giới thiệu giúp tôi bộ phim nào đáng xem không? B: 'Squid Game' thì sao?" },
      { ko: '주말에 친구 결혼식이 있는데 입을 만한 옷이 없어서 쇼핑을 가요.', vi: 'Cuối tuần tôi có đám cưới bạn nhưng không có bộ đồ nào đáng mặc nên tôi đi mua sắm.' },
      { ko: '이 책은 한 번쯤 읽을 만해요.', vi: 'Cuốn sách này đáng để đọc thử một lần.' },
    ],
    commonMistakes: [
      "Diễn tả mức độ 'xứng đáng, có giá trị', không đơn thuần là 'có thể làm được' như -(으)ㄹ 수 있다 — hai cấu trúc dễ bị nhầm nghĩa.",
      'Thường dùng để giới thiệu, gợi ý, khuyên người khác nên trải nghiệm điều gì đó.',
    ],
    level: 'trung-cap',
    section: 'goi-y-va-loi-khuyen',
    sectionOrder: 14,
    sectionTitleVi: 'Gợi ý và lời khuyên',
  },
  {
    id: 'gr-trung-cap-58',
    pattern: 'V – 도록 하다',
    meaningVi: 'Tôi sẽ cố gắng..., hãy cố gắng... — thể hiện ý chí hoặc lời khuyên nhủ',
    usageNotes:
      "Có hai cách dùng: thứ nhất thể hiện sự cố gắng, ý chí của chủ thể, thường ở dạng -도록 하겠다 để bày tỏ ý chí ('tôi sẽ cố gắng') hoặc dạng khuyên nhủ -도록 하세요 ('hãy cố gắng'); thứ hai dùng để sai khiến hay khiến người khác làm một việc gì đó, tuy cách dùng này ít gặp hơn.",
    examples: [
      { ko: '이제는 약속을 꼭 지키도록 하세요.', vi: 'Từ giờ hãy cố gắng giữ đúng lời hứa nhé.' },
      { ko: '가: 지갑을 찾아 주셔서 정말 감사드려요. 나: 아니에요, 앞으로는 잃어버리지 않도록 하세요.', vi: 'A: Cảm ơn anh đã tìm giúp tôi ví tiền. B: Không có gì, từ giờ hãy cố gắng đừng làm mất nữa nhé.' },
      { ko: '다음부터는 늦지 않도록 하겠습니다.', vi: 'Từ lần sau tôi sẽ cố gắng không đến muộn nữa.' },
    ],
    commonMistakes: [
      '-도록 하겠다 mang nghĩa ý chí của người nói, còn -도록 하세요 mang nghĩa khuyên nhủ người nghe — cần phân biệt rõ chủ thể của hành động.',
      'Không nhầm với -게 하다 (mục 92, cấu trúc gây khiến bắt buộc người khác làm), -도록 하다 mang sắc thái nhẹ nhàng, khuyên nhủ hơn.',
    ],
    level: 'trung-cap',
    section: 'goi-y-va-loi-khuyen',
    sectionOrder: 14,
    sectionTitleVi: 'Gợi ý và lời khuyên',
  },
  {
    id: 'gr-trung-cap-59',
    pattern: 'V – 지 그래요?',
    meaningVi: 'Bạn hãy... xem, sao lại không... nhỉ? — gợi ý nhẹ nhàng dưới dạng câu hỏi',
    usageNotes:
      'Dùng để gợi ý ai đó làm gì, là một dạng câu mệnh lệnh nhưng được diễn đạt dưới hình thức câu hỏi nên tạo cảm giác ra lệnh nhẹ nhàng hơn, thường kết hợp với -(으)면. Dạng quá khứ -지 그랬어요? mang nghĩa trách nhẹ vì đã không làm điều đó.',
    examples: [
      { ko: '오늘 날씨가 더우니까 삼계탕을 먹지 그래요?', vi: 'Hôm nay trời nóng thế, hay là ăn gà hầm sâm đi?' },
      { ko: '피곤하니까 잠깐이라도 좀 쉬지 그래요?', vi: 'Bạn mệt rồi, hay là nghỉ một lát đi?' },
      { ko: '많이 아프면 오늘 결근하지 그랬어요?', vi: 'Ốm nặng vậy sao hôm nay không xin nghỉ làm luôn đi?' },
    ],
    commonMistakes: [
      'Dạng hiện tại -지 그래요? mang nghĩa gợi ý cho tương lai gần, còn dạng quá khứ -지 그랬어요? mang nghĩa trách nhẹ vì đã không làm — hai dạng khác nhau về thời điểm và sắc thái.',
      'Ngữ điệu cần nhẹ nhàng, thân thiện; nói với giọng gằn sẽ biến thành trách móc thay vì gợi ý.',
    ],
    level: 'trung-cap',
    section: 'goi-y-va-loi-khuyen',
    sectionOrder: 14,
    sectionTitleVi: 'Gợi ý và lời khuyên',
  },
  {
    id: 'gr-trung-cap-60',
    pattern: 'A/V -  (으) ㄹ 뿐만 아니라  = (으)ㄹ뿐더러',
    meaningVi: 'Không những... mà còn... — bổ sung thêm thông tin, nhấn mạnh cả hai vế',
    usageNotes:
      'Dùng để bổ sung thêm thông tin cho vế trước, nhấn mạnh rằng ngoài đặc điểm hay sự việc đã nêu còn có thêm đặc điểm hay sự việc khác nữa. Có thể tỉnh lược 만 thành -(으)ㄹ 뿐 아니라.',
    examples: [
      { ko: '그 배우는 얼굴이 예쁠 뿐만 아니라 연기도 잘 해서 인기가 많대요.', vi: 'Nghe nói diễn viên đó không những xinh đẹp mà diễn xuất cũng giỏi nên rất được yêu thích.' },
      { ko: '저 식당은 음식이 맛있을 뿐더러 가격도 싸요.', vi: 'Quán ăn đó không những ngon mà giá cũng rẻ.' },
      { ko: '그 학생은 성실할 뿐만 아니라 성적도 우수해요.', vi: 'Học sinh đó không những chăm chỉ mà thành tích cũng xuất sắc.' },
    ],
    commonMistakes: [
      'Hai vế thường có cùng chiều hướng ý nghĩa (cùng tích cực hoặc cùng tiêu cực), không phù hợp khi hai vế trái ngược nhau.',
      '-(으)ㄹ뿐더러 và -(으)ㄹ 뿐만 아니라 có thể thay thế cho nhau, không phải hai cấu trúc khác biệt về nghĩa.',
    ],
    level: 'trung-cap',
    section: 'bo-sung-thong-tin',
    sectionOrder: 15,
    sectionTitleVi: 'Bổ sung thông tin',
  },
  {
    id: 'gr-trung-cap-61',
    pattern: 'A/V - (으) ㄴ/는 데다가',
    meaningVi: 'Thêm vào đó... — bổ sung thêm một đặc điểm hay lý do khác cùng chiều',
    usageNotes:
      'Dùng để bổ sung thêm thông tin, thường là một đặc điểm hay nguyên nhân khác cùng chiều hướng với vế trước, khiến mức độ của sự việc tăng thêm.',
    examples: [
      { ko: '가: 오늘 웬일로 지각을 했어요? 원래 지각 잘 안 하잖아요. 나: 늦게 일어나는 데다가 버스가 안 와서 지각을 했어요.', vi: 'A: Sao hôm nay bạn lại đi muộn vậy? Bạn vốn ít khi đi muộn mà. B: Tôi vừa dậy muộn, thêm vào đó xe buýt lại không đến nên mới muộn.' },
      { ko: '그 친구가 성격이 활발한데다가 말을 잘 해요.', vi: 'Bạn đó tính cách vừa hoạt bát, thêm vào đó lại ăn nói giỏi.' },
      { ko: '이 가방은 디자인이 예쁜 데다가 가격도 저렴해요.', vi: 'Chiếc túi này thiết kế đẹp, thêm vào đó giá cũng phải chăng.' },
    ],
    commonMistakes: [
      'Gần giống -(으)ㄹ 뿐만 아니라, nhưng -는 데다가 thiên về bổ sung nguyên nhân/đặc điểm khiến mức độ tăng thêm, thường dùng nhiều trong văn nói hơn.',
      'Hai vế cần cùng chủ thể hoặc cùng đối tượng đang được miêu tả, không dùng cho hai đối tượng khác nhau hoàn toàn.',
    ],
    level: 'trung-cap',
    section: 'bo-sung-thong-tin',
    sectionOrder: 15,
    sectionTitleVi: 'Bổ sung thông tin',
  },
  {
    id: 'gr-trung-cap-62',
    pattern: 'N - 조차',
    meaningVi: 'Ngay cả..., thậm chí... — nhấn mạnh trường hợp cơ bản nhất cũng không đạt được',
    usageNotes:
      'Mang ý nghĩa đến ngay cả những thứ cơ bản, dễ dàng nhất còn không đạt được hay không xảy ra thì nói gì đến những thứ khác khó hơn. Thường dùng trong câu mang sắc thái tiêu cực.',
    examples: [
      { ko: '살이 많이 빠져서 친한 친구조차 저를 못 알아봤어요.', vi: 'Vì tôi giảm cân nhiều quá nên đến cả bạn thân cũng không nhận ra tôi.' },
      { ko: '형조차 저를 못 믿어요?', vi: 'Ngay cả anh trai cũng không tin tôi sao?' },
      { ko: '고등학교에 다닐 때 독일어를 배웠는데 지금은 인사말조차 생각이 안 나요.', vi: 'Hồi cấp ba tôi từng học tiếng Đức nhưng giờ ngay cả câu chào cũng không nhớ nổi.' },
    ],
    commonMistakes: [
      'Chỉ dùng trong ngữ cảnh tiêu cực để nhấn mạnh mức độ nghiêm trọng, không dùng trong câu mang nghĩa tích cực thông thường.',
      'So với -마저 (mục 63), -조차 nhấn mạnh cái CƠ BẢN nhất, còn -마저 nhấn mạnh cái CUỐI CÙNG còn sót lại — hai cấu trúc gần giống nhưng sắc thái hơi khác.',
    ],
    level: 'trung-cap',
    section: 'bo-sung-thong-tin',
    sectionOrder: 15,
    sectionTitleVi: 'Bổ sung thông tin',
  },
  {
    id: 'gr-trung-cap-63',
    pattern: 'N – 마저',
    meaningVi: 'Ngay cả... (điều cuối cùng còn lại cũng) — nhấn mạnh điều cuối cùng cũng không còn/không đạt được',
    usageNotes:
      'Mang ý nghĩa đến ngay cả điều cuối cùng, điều còn sót lại cũng không được, không xảy ra, thì nói gì đến những điều khác đã mất từ trước. Thường mang sắc thái tiêu cực, thất vọng.',
    examples: [
      { ko: '부모님마저 제 생일을 잊어버렸어요.', vi: 'Ngay cả bố mẹ cũng quên mất sinh nhật của tôi.' },
      { ko: '막내딸마저 시집에 가 버려서 섭섭해요.', vi: 'Ngay cả cô con gái út cũng đi lấy chồng rồi nên tôi buồn quá.' },
      { ko: '마지막 희망마저 사라져 버렸어요.', vi: 'Ngay cả tia hy vọng cuối cùng cũng đã tan biến.' },
    ],
    commonMistakes: [
      'Nhấn mạnh điều CUỐI CÙNG còn lại, ngụ ý những điều khác đã không còn từ trước — khác với -조차 nhấn mạnh điều CƠ BẢN nhất.',
      'Mang sắc thái tiêu cực, thất vọng rõ rệt, không dùng cho những trường hợp trung tính hoặc tích cực.',
    ],
    level: 'trung-cap',
    section: 'bo-sung-thong-tin',
    sectionOrder: 15,
    sectionTitleVi: 'Bổ sung thông tin',
  },
  {
    id: 'gr-trung-cap-64',
    pattern: 'N – 만 해도',
    meaningVi: 'Chỉ tính riêng... — đưa ra một ví dụ điển hình để minh họa cho một xu hướng, hoàn cảnh chung',
    usageNotes:
      'Dùng để đưa ra một ví dụ cụ thể, tiêu biểu nhằm giải thích hay minh họa cho một hoàn cảnh, tình huống chung đang được nói tới.',
    examples: [
      { ko: '집안일이 시간이 많이 걸려요. 청소만 해도 1 시간이나 걸려요.', vi: 'Việc nhà tốn rất nhiều thời gian. Chỉ tính riêng việc dọn dẹp thôi cũng mất đến 1 tiếng.' },
      { ko: '가: 요즘 물가가 많이 상승한 것 같아요. 나: 네, 채소값만 해도 10%나 올랐어요.', vi: 'A: Dạo này vật giá tăng nhiều thật. B: Ừ, chỉ tính riêng giá rau đã tăng đến 10% rồi.' },
      { ko: '우리 반만 해도 외국인 학생이 열 명이나 있어요.', vi: 'Chỉ tính riêng lớp chúng tôi thôi cũng đã có tới mười sinh viên nước ngoài.' },
    ],
    commonMistakes: [
      'Dùng để đưa ra ví dụ điển hình làm bằng chứng cho một nhận định chung, không phải để liệt kê đơn thuần.',
      'Thường kết hợp với con số cụ thể (thời gian, tỷ lệ phần trăm, số lượng) để tăng tính thuyết phục.',
    ],
    level: 'trung-cap',
    section: 'bo-sung-thong-tin',
    sectionOrder: 15,
    sectionTitleVi: 'Bổ sung thông tin',
  },
  {
    id: 'gr-trung-cap-65',
    pattern: 'A/V - (으)ㄹ 정도로',
    meaningVi: 'Đến mức, đến nỗi... — mức độ của hành động/trạng thái đạt tới đâu',
    usageNotes:
      'Diễn tả hành động ở mệnh đề sau xảy ra ở một mức độ tương đương với những gì được miêu tả ở mệnh đề trước, thường dùng dưới dạng -(으)ㄹ 정도로 hoặc kết thúc câu bằng -(으)ㄹ 정도이다.',
    examples: [
      { ko: '저는 10 번이나 볼 정도로 그 영화를 좋아해요.', vi: 'Tôi thích bộ phim đó đến mức đã xem tới 10 lần.' },
      { ko: '다리가 너무 아파서 못 걸을 정도예요.', vi: 'Chân tôi đau đến mức không đi nổi.' },
      { ko: '눈물이 날 정도로 감동적인 이야기였어요.', vi: 'Đó là câu chuyện cảm động đến mức khiến tôi rơi nước mắt.' },
    ],
    commonMistakes: [
      'Mệnh đề trước là kết quả cụ thể minh họa cho mức độ, mệnh đề sau nêu trạng thái/hành động chính — dễ đảo ngược thứ tự hai vế gây sai nghĩa.',
      'Có thể dùng ở dạng kết thúc câu -(으)ㄹ 정도이다, học viên hay chỉ nhớ dạng nối câu -(으)ㄹ 정도로.',
    ],
    level: 'trung-cap',
    section: 'muc-do',
    sectionOrder: 16,
    sectionTitleVi: 'Mức độ',
  },
  {
    id: 'gr-trung-cap-66',
    pattern: 'N – 만 하다',
    meaningVi: 'Như, bằng với... — so sánh về kích thước, số lượng hay mức độ tương đương',
    usageNotes:
      'Dùng để so sánh giữa hai vật, hai việc có số lượng, kích thước hay mức độ tương đương nhau.',
    examples: [
      { ko: '월급이 쥐꼬리만 해서 살기가 힘들어요.', vi: 'Lương ít như đuôi chuột nên sống rất khó khăn.' },
      { ko: '가: 그 친구는 얼굴이 정말 작네요. 나: 맞아요, 주먹만 하네요.', vi: 'A: Cậu bạn đó mặt nhỏ thật đấy. B: Đúng vậy, nhỏ như nắm tay luôn.' },
      { ko: '그 강아지는 손바닥만 해요.', vi: 'Con chó con đó nhỏ chỉ bằng lòng bàn tay.' },
    ],
    commonMistakes: [
      'Thường dùng kèm hình ảnh so sánh cụ thể, sinh động (đuôi chuột, nắm tay, lòng bàn tay) mang tính khẩu ngữ, không nên dịch quá cứng nhắc.',
      'Không nhầm với -(으)ㄴ/는/(으)ㄹ 만큼 (mục 67): -만 하다 so sánh trực tiếp giữa hai danh từ về kích thước/mức độ, còn -(으)ㄴ/는/(으)ㄹ 만큼 so sánh mức độ giữa hai vế câu (mệnh đề).',
    ],
    level: 'trung-cap',
    section: 'muc-do',
    sectionOrder: 16,
    sectionTitleVi: 'Mức độ',
  },
  {
    id: 'gr-trung-cap-67',
    pattern: 'A/V - (으) ㄴ/는 /(으)ㄹ 만큼',
    meaningVi: 'Như, bằng với... / vì (mức độ tương đương hoặc quan hệ nguyên nhân) — so sánh mức độ giữa hai mệnh đề',
    usageNotes:
      "Diễn tả hành động hay trạng thái ở mệnh đề trước có mức độ tương đương với mệnh đề sau. Ngoài nghĩa so sánh mức độ, cấu trúc còn mang thêm nét nghĩa nguyên nhân - kết quả ('vì') trong một số ngữ cảnh.",
    examples: [
      { ko: '그 영화가 눈물이 날 만큼 슬퍼요.', vi: 'Bộ phim đó buồn đến mức khiến người xem rơi nước mắt.' },
      { ko: '최선을 다한 만큼 좋은 결과를 얻을 거예요.', vi: 'Vì đã cố gắng hết sức nên chắc chắn sẽ đạt được kết quả tốt.' },
      { ko: '유기농 식품은 농약을 안 쓰는 만큼 건강에 좋다는 것이다.', vi: 'Vì thực phẩm hữu cơ không dùng thuốc trừ sâu nên được cho là tốt cho sức khỏe.' },
    ],
    commonMistakes: [
      'Cấu trúc có thể mang nghĩa so sánh mức độ HOẶC nghĩa nguyên nhân - kết quả tùy ngữ cảnh, cần đọc kỹ câu để xác định đúng nghĩa, không dịch máy móc một nghĩa cố định.',
      'Không nhầm với N-만 하다 (mục 66) chỉ so sánh trực tiếp giữa hai danh từ, trong khi -(으)ㄴ/는/(으)ㄹ 만큼 so sánh giữa hai mệnh đề có động từ/tính từ.',
    ],
    level: 'trung-cap',
    section: 'muc-do',
    sectionOrder: 16,
    sectionTitleVi: 'Mức độ',
  },
  {
    id: 'gr-trung-cap-68',
    pattern: 'V – 고 보니(까)',
    meaningVi: 'Thử... rồi mới biết/mới nhận ra... — phát hiện điều mới sau khi hành động đã hoàn tất',
    usageNotes:
      'Diễn tả việc sau khi hoàn thành trọn vẹn một hành động nào đó thì người nói phát hiện ra một thông tin mới hoặc điều gì đó khác với suy nghĩ ban đầu của mình. Câu thường kết thúc ở thì quá khứ.',
    examples: [
      { ko: '버스를 타고 보니 잘못 탔어요.', vi: 'Lên xe buýt rồi tôi mới phát hiện là mình đã đi nhầm xe.' },
      { ko: '유학하고 보니 외롭고 부모님이 그리워요.', vi: 'Đi du học rồi tôi mới thấy cô đơn và nhớ bố mẹ.' },
      { ko: '이야기를 듣고 보니 제 잘못도 있는 것 같아요.', vi: 'Nghe hết câu chuyện rồi tôi mới thấy hình như mình cũng có lỗi.' },
    ],
    commonMistakes: [
      'Hành động ở mệnh đề trước chỉ xảy ra một lần và đã kết thúc hoàn toàn — khác với -다 보니(까) (mục 70) diễn tả hành động lặp lại nhiều lần, vẫn đang tiếp diễn.',
      'Mệnh đề sau phải là thông tin mới hoặc điều bất ngờ, không dùng cho việc đã biết trước.',
    ],
    level: 'trung-cap',
    section: 'phat-hien-va-ket-qua',
    sectionOrder: 17,
    sectionTitleVi: 'Phát hiện và kết quả',
  },
  {
    id: 'gr-trung-cap-69',
    pattern: 'V – 아/어 보니(까)',
    meaningVi: 'Đang thử... thì nhận ra... — phát hiện thông tin mới trong lúc đang thực hiện hành động',
    usageNotes:
      'Diễn tả việc trong lúc thực hiện hành động nào đó thì người nói phát hiện ra một thông tin mới hoặc điều gì đó khác với suy nghĩ ban đầu; so với -고 보니까, cấu trúc -아/어 보니까 nhấn mạnh việc đang trải nghiệm, thử làm nhiều hơn là sự hoàn tất trọn vẹn của hành động.',
    examples: [
      { ko: '김치를 먹어 보니 아주 매워요.', vi: 'Ăn thử kim chi rồi tôi mới thấy nó cay quá.' },
      { ko: '외국에서 살아 보니까 생각보다 좀 힘들어요.', vi: 'Sống thử ở nước ngoài rồi tôi mới thấy khó khăn hơn mình nghĩ.' },
      { ko: '그 일을 직접 해 보니까 생각보다 쉽지 않더라고요.', vi: 'Trực tiếp làm việc đó rồi tôi mới thấy không dễ như mình tưởng.' },
    ],
    commonMistakes: [
      "Nhấn mạnh trải nghiệm 'thử làm', gần giống nghĩa gốc của -아/어 보다 (thử làm gì đó), khác với -고 보니까 nhấn mạnh sự hoàn tất.",
      'Không dùng cho hành động chưa từng thực hiện — cấu trúc luôn ngụ ý người nói đã thực sự trải nghiệm.',
    ],
    level: 'trung-cap',
    section: 'phat-hien-va-ket-qua',
    sectionOrder: 17,
    sectionTitleVi: 'Phát hiện và kết quả',
  },
  {
    id: 'gr-trung-cap-70',
    pattern: 'V - 다(가) 보니(까)',
    meaningVi: 'Vì cứ... nên (mới nhận ra/mới thành ra như vậy) — phát hiện điều mới sau khi lặp lại hành động nhiều lần',
    usageNotes:
      'Diễn tả việc người nói phát hiện ra điều gì mới hay một tình huống mới xảy ra sau khi thực hiện liên tục, lặp đi lặp lại một hành động nào đó trong quá khứ. So với -고 보니, cấu trúc -다 보니 diễn ra khi hành động vẫn đang tiếp diễn, xảy ra nhiều lần, và mệnh đề sau thường là trạng thái mới hình thành do kết quả tích lũy của hành động trước.',
    examples: [
      { ko: '처음에는 한국어를 공부하는 것이 힘들었는데 하다 보니까 재미있기도 해요.', vi: 'Ban đầu học tiếng Hàn thấy khó, nhưng cứ học mãi thì cũng thấy thú vị.' },
      { ko: '매일 민호 씨와 한국어로 이야기하다 보니 한국어 실력이 많이 늘었어요.', vi: 'Vì ngày nào cũng nói chuyện bằng tiếng Hàn với Min-ho nên trình độ tiếng Hàn của tôi đã tiến bộ rất nhiều.' },
      { ko: '매일 운동을 하다 보니 몸이 많이 건강해졌어요.', vi: 'Vì cứ tập thể dục đều đặn hằng ngày nên cơ thể tôi đã khỏe mạnh lên nhiều.' },
    ],
    commonMistakes: [
      '-고 보니 xảy ra sau khi hành động (một lần) đã kết thúc, còn -다 보니 xảy ra khi hành động (lặp lại nhiều lần) vẫn đang tiếp diễn — hai cấu trúc dễ gây nhầm lẫn vì hình thức gần giống nhau.',
      'Mệnh đề sau của -다 보니 thường là kết quả tích lũy dần dần, không phải phát hiện tức thời như -고 보니.',
    ],
    level: 'trung-cap',
    section: 'phat-hien-va-ket-qua',
    sectionOrder: 17,
    sectionTitleVi: 'Phát hiện và kết quả',
  },
  {
    id: 'gr-trung-cap-71',
    pattern: 'V – 다(가) 보면',
    meaningVi: 'Nếu cứ... thì sẽ... — hành động lặp lại dẫn đến một kết quả nào đó trong tương lai',
    usageNotes:
      'Diễn tả hành động ở mệnh đề trước liên tục lặp lại và cuối cùng sẽ dẫn đến một kết quả nào đó, kết quả này có thể tích cực hoặc tiêu cực. Không chia thì quá khứ hay tương lai trước -다 보면, và mệnh đề sau cũng không dùng thì quá khứ.',
    examples: [
      { ko: '가: 저는 노래를 잘 못 불러요. 나: 계속 연습하다 보면 잘 부를 거예요.', vi: 'A: Tôi hát không hay lắm. B: Nếu cứ luyện tập liên tục thì sẽ hát hay thôi.' },
      { ko: '가: 민호 씨가 술을 많이 마시는 것 같아요. 나: 술을 많이 마시다 보면 건강에 나빠질 텐데 걱정이에요.', vi: 'A: Hình như Min-ho uống rượu nhiều quá. B: Nếu cứ uống nhiều rượu thế thì sức khỏe sẽ kém đi, tôi lo quá.' },
      { ko: '외국어를 매일 공부하다 보면 실력이 자연스럽게 늘어요.', vi: 'Nếu cứ học ngoại ngữ đều đặn mỗi ngày thì trình độ sẽ tự nhiên tiến bộ.' },
    ],
    commonMistakes: [
      'Khác với -다 보니(까) (nói về kết quả đã xảy ra trong quá khứ), -다 보면 nói về kết quả sẽ xảy ra trong tương lai nếu tiếp tục hành động.',
      'Không chia thì quá khứ hay tương lai ở cả hai vế của cấu trúc này.',
    ],
    level: 'trung-cap',
    section: 'phat-hien-va-ket-qua',
    sectionOrder: 17,
    sectionTitleVi: 'Phát hiện và kết quả',
  },
  {
    id: 'gr-trung-cap-72',
    pattern: 'A/V - 더니',
    meaningVi: 'Thấy là... nên/nhưng/và rồi... — kể lại một sự thay đổi, tương phản hay trình tự mà người nói đã chứng kiến',
    usageNotes:
      'Có ba cách dùng chính, chủ ngữ luôn là ngôi thứ ba và cần đồng nhất giữa hai vế: (1) diễn tả sự thay đổi của một đối tượng mà người nói từng chứng kiến, trải nghiệm — sự việc chứng kiến đó chính là nguyên nhân của sự thay đổi (dạng nhấn mạnh: -더니만); (2) diễn tả trạng thái tương phản giữa hai vế, trái ngược với điều người nói từng chứng kiến; (3) diễn tả trình tự thời gian giữa hai sự việc mà người nói đã chứng kiến.',
    examples: [
      { ko: '제 동생이 계속 라면만 먹더니 건강에 나빠졌어요.', vi: 'Em tôi cứ ăn mì gói suốt nên giờ sức khỏe kém đi.' },
      { ko: '작년 여름에 비가 많이 오더니 올해는 비가 많이 안 오네요.', vi: 'Mùa hè năm ngoái mưa nhiều thế mà năm nay lại ít mưa hẳn.' },
      { ko: '란 씨는 남친한테 화를 내더니 밖으로 나가 버렸어요.', vi: 'Lan vừa nổi giận với bạn trai xong là đi thẳng ra ngoài luôn.' },
    ],
    commonMistakes: [
      'Chủ ngữ của hai vế phải đồng nhất và luôn là ngôi thứ ba (điều người nói đã trực tiếp chứng kiến), không dùng cho ngôi thứ nhất hoặc khi chủ ngữ hai vế khác nhau.',
      'Ba nghĩa (nguyên nhân, tương phản, trình tự) rất dễ nhầm lẫn — cần dựa vào ngữ cảnh cụ thể của câu để xác định đúng nghĩa đang được dùng.',
    ],
    level: 'trung-cap',
    section: 'phat-hien-va-ket-qua',
    sectionOrder: 17,
    sectionTitleVi: 'Phát hiện và kết quả',
  },
  {
    id: 'gr-trung-cap-73',
    pattern: 'V - 았/었더니',
    meaningVi: 'Thì thấy..., vì... nên tôi thấy... — hồi tưởng phát hiện hoặc kết quả do chính người nói trải qua',
    usageNotes:
      'Chủ ngữ luôn là ngôi thứ nhất, dùng để hồi tưởng lại sự phát hiện của chủ thể sau khi thực hiện một hành động (nghĩa 1), hoặc hồi tưởng quan hệ nguyên nhân - kết quả mà người nói đã trải qua (nghĩa 2).',
    examples: [
      { ko: '밤 늦게 약국에 갔더니 문이 닫혀 있었어요.', vi: 'Tối muộn tôi đến hiệu thuốc thì thấy cửa đã đóng rồi.' },
      { ko: '집에 왔더니 소포가 하나 와 있었다.', vi: 'Về đến nhà thì tôi thấy có một gói bưu kiện đã được gửi đến.' },
      { ko: '약을 먹었더니 배가 좋아졌어요.', vi: 'Vì uống thuốc nên bụng tôi đã đỡ hơn.' },
    ],
    commonMistakes: [
      'Chủ ngữ bắt buộc là ngôi thứ nhất (người nói tự trải nghiệm), khác với -더니 (mục 72) chủ ngữ luôn là ngôi thứ ba.',
      'Vế trước luôn chia ở thì quá khứ vì diễn tả hành động đã thực hiện trước khi có phát hiện hay kết quả ở vế sau.',
    ],
    level: 'trung-cap',
    section: 'phat-hien-va-ket-qua',
    sectionOrder: 17,
    sectionTitleVi: 'Phát hiện và kết quả',
  },
  {
    id: 'gr-trung-cap-74',
    pattern: 'A/V - 다가는',
    meaningVi: 'Nếu cứ... thì sẽ (gặp kết quả xấu) — cảnh báo hậu quả tiêu cực nếu tiếp tục hành động/trạng thái',
    usageNotes:
      'Diễn tả nếu một hành động hay trạng thái nào đó cứ tiếp tục kéo dài thì sẽ dẫn đến một kết quả không tốt; cấu trúc này thường được dùng để cảnh báo người khác.',
    examples: [
      { ko: '지금처럼 돈을 많이 쓰다가는 월세를 낼 돈도 없을지도 몰라요.', vi: 'Cứ tiêu tiền nhiều như bây giờ thì có khi sẽ không còn tiền để trả tiền thuê nhà đâu.' },
      { ko: '그렇게 공부하다가는 시험에 떨어질 거예요.', vi: 'Học hành kiểu đó thì sẽ trượt thi mất thôi.' },
      { ko: '밤늦게까지 게임을 하다가는 건강이 나빠질 거예요.', vi: 'Cứ chơi game đến khuya như vậy thì sức khỏe sẽ kém đi đấy.' },
    ],
    commonMistakes: [
      'Luôn mang nghĩa cảnh báo về kết quả tiêu cực, không dùng cho kết quả tích cực — nếu muốn nói kết quả tốt thì không dùng -다가는.',
      'Không nhầm với -다가 (chỉ đơn thuần diễn tả hành động bị ngắt quãng), -다가는 luôn mang thêm hàm ý cảnh báo hậu quả.',
    ],
    level: 'trung-cap',
    section: 'phat-hien-va-ket-qua',
    sectionOrder: 17,
    sectionTitleVi: 'Phát hiện và kết quả',
  },
  {
    id: 'gr-trung-cap-75',
    pattern: 'A/V - (으)ㄴ/는 셈이다',
    meaningVi: 'Xem như, gần như là... — kết luận rằng một sự việc gần giống hoặc tương đương với một sự việc khác',
    usageNotes:
      'Diễn tả sau khi xem xét kỹ một sự việc nào đó, người nói kết luận rằng nó gần giống hoặc tương đương với một sự việc khác, dù chưa hoàn toàn đạt đến mức đó nhưng có thể xem là gần như đã hoàn thành hoặc đạt được mức độ đó.',
    examples: [
      { ko: '가: 숙제는 다 했어요? 나: 이 문제를 풀기만 하면 되니까 다 한 셈이에요.', vi: 'A: Bài tập làm xong hết chưa? B: Chỉ còn giải nốt bài này thôi nên xem như là xong rồi.' },
      { ko: '가: 아침을 먹었어요? 나: 커피만 마셨으니까 안 먹은 셈이에요.', vi: 'A: Bạn ăn sáng chưa? B: Tôi chỉ uống mỗi cà phê nên xem như là chưa ăn.' },
      { ko: '이 정도 준비했으면 시험에 합격한 셈이에요.', vi: 'Chuẩn bị đến mức này thì xem như đã đỗ kỳ thi rồi.' },
    ],
    commonMistakes: [
      'Diễn tả sự đánh giá GẦN NHƯ đạt đến mức nào đó, chứ không phải khẳng định chắc chắn sự việc đã hoàn toàn xảy ra — cần giữ đúng sắc thái tương đối này.',
      'Thường dùng trong văn nói khi tổng kết, đánh giá lại một tình huống theo quan điểm chủ quan của người nói.',
    ],
    level: 'trung-cap',
    section: 'phat-hien-va-ket-qua',
    sectionOrder: 17,
    sectionTitleVi: 'Phát hiện và kết quả',
  },
  {
    id: 'gr-trung-cap-76',
    pattern: 'A/V -  얼마나 (으)ㄴ/는지 모르다',
    meaningVi: 'Không biết... bao nhiêu, đến nhường nào — nhấn mạnh mức độ cao của một trạng thái/hành động',
    usageNotes:
      'Dùng để nhấn mạnh mức độ của một sự việc hay trạng thái nào đó, thường mang nghĩa mức độ rất cao, khó có thể diễn tả hết bằng lời.',
    examples: [
      { ko: '제주도 경치가 얼마나 아름다운지 몰라요. 한번 가 보세요.', vi: 'Cảnh sắc đảo Jeju đẹp không biết bao nhiêu mà kể. Hãy thử đi một lần đi.' },
      { ko: '지수 씨가 얼마나 열심히 공부하는지 몰라요.', vi: 'Ji-su chăm chỉ học hành không biết đến nhường nào.' },
      { ko: '요즘 아이가 얼마나 말을 안 듣는지 몰라요.', vi: 'Dạo này con tôi bướng bỉnh không biết đến mức nào.' },
    ],
    commonMistakes: [
      'Đây là cấu trúc nhấn mạnh khẩu ngữ, không phải câu hỏi thật sự dù có 얼마나 — không nên trả lời như đang bị hỏi mức độ cụ thể.',
      'Luôn kết thúc bằng 모르다 (không biết), tạo nghĩa nhấn mạnh gián tiếp chứ không nói thẳng mức độ bằng số liệu cụ thể.',
    ],
    level: 'trung-cap',
    section: 'nhan-manh',
    sectionOrder: 18,
    sectionTitleVi: 'Nhấn mạnh',
  },
  {
    id: 'gr-trung-cap-77',
    pattern: 'A/V - (으)ㄹ 수밖에 없다',
    meaningVi: 'Chỉ còn cách..., chỉ có thể... — không còn lựa chọn nào khác',
    usageNotes:
      'Mang ý nghĩa trong một tình huống nào đó chỉ có một cách duy nhất để giải quyết, ngoài cách đó ra không còn phương án nào khác.',
    examples: [
      { ko: '짠 음식을 많이 먹었으니까 목이 마를 수밖에 없어요.', vi: 'Vì ăn nhiều đồ mặn nên chỉ có thể khát nước thôi.' },
      { ko: '장학금을 받으려면 열심히 공부할 수밖에 없어요.', vi: 'Muốn nhận được học bổng thì chỉ còn cách học thật chăm chỉ.' },
      { ko: '차가 없으니까 걸어갈 수밖에 없어요.', vi: 'Vì không có xe nên chỉ còn cách đi bộ thôi.' },
    ],
    commonMistakes: [
      'Nhấn mạnh tính TẤT YẾU, không còn lựa chọn khác, khác với -아/어야 하다 chỉ đơn thuần nêu nghĩa vụ, bổn phận phải làm.',
      'Thường dùng để giải thích cho một kết quả hiển nhiên logic từ nguyên nhân đã nêu trước đó.',
    ],
    level: 'trung-cap',
    section: 'nhan-manh',
    sectionOrder: 18,
    sectionTitleVi: 'Nhấn mạnh',
  },
  {
    id: 'gr-trung-cap-78',
    pattern: 'A/V – (으)ㄹ 뿐이다',
    meaningVi: 'Chỉ... (mà thôi) — chỉ có duy nhất một hành động/trạng thái, không còn gì khác',
    usageNotes:
      'Diễn tả chỉ có duy nhất hành động hay trạng thái được nêu, ngoài ra không có hành động hay trạng thái nào khác nữa; cấu trúc mang tính nhấn mạnh cho cả câu.',
    examples: [
      { ko: '저는 그 사람의 이름만 알 뿐이에요.', vi: 'Tôi chỉ biết mỗi cái tên của người đó thôi.' },
      { ko: '가: 수업이 끝난 후에 하고 싶은 일이 뭐해요? 나: 집에 가서 자고 싶을 뿐이에요.', vi: 'A: Sau khi học xong bạn muốn làm gì? B: Tôi chỉ muốn về nhà ngủ thôi.' },
      { ko: '저는 그저 최선을 다했을 뿐이에요.', vi: 'Tôi chỉ đơn giản là đã cố gắng hết sức mà thôi.' },
    ],
    commonMistakes: [
      "Thường đi kèm phó từ 그저, 단지, 다만 để nhấn mạnh thêm ý 'chỉ có vậy thôi', học viên hay bỏ quên các từ bổ trợ này.",
      'Không nhầm với -(으)ㄹ 수밖에 없다 (mục 77): -(으)ㄹ 뿐이다 nhấn mạnh tính duy nhất/giới hạn của sự việc, còn -(으)ㄹ 수밖에 없다 nhấn mạnh tính tất yếu, không có lựa chọn nào khác.',
    ],
    level: 'trung-cap',
    section: 'nhan-manh',
    sectionOrder: 18,
    sectionTitleVi: 'Nhấn mạnh',
  },
  {
    id: 'gr-trung-cap-79',
    pattern: 'N - (이)야말로',
    meaningVi: 'Đúng thật là..., chắc hẳn là... — nhấn mạnh danh từ làm chủ ngữ hoặc đối tượng được nói tới',
    usageNotes:
      'Thay cho tiểu từ xác định chủ ngữ thông thường, cấu trúc này dùng để nhấn mạnh danh từ đứng trước nó, khẳng định đó chính là đối tượng tiêu biểu, đúng đắn nhất trong ngữ cảnh đang nói.',
    examples: [
      { ko: '부모님이야말로 이 세상에서 가장 나를 사랑해 주는 분들입니다.', vi: 'Bố mẹ đúng thật là những người yêu thương tôi nhất trên đời này.' },
      { ko: '한글이야말로 세계에서 가장 우수한 문자예요.', vi: 'Chữ Hangeul đúng thật là loại chữ viết ưu việt nhất thế giới.' },
      { ko: '건강이야말로 인생에서 가장 중요한 것이다.', vi: 'Sức khỏe đúng thật là điều quan trọng nhất trong cuộc đời.' },
    ],
    commonMistakes: [
      'Mang tính nhấn mạnh trang trọng, hay xuất hiện trong văn viết, phát biểu — ít dùng trong hội thoại thường ngày suồng sã.',
      'Thay thế hoàn toàn cho tiểu từ chủ ngữ 이/가 hoặc 은/는, không dùng kèm thêm các tiểu từ này sau -야말로.',
    ],
    level: 'trung-cap',
    section: 'nhan-manh',
    sectionOrder: 18,
    sectionTitleVi: 'Nhấn mạnh',
  },
  {
    id: 'gr-trung-cap-80',
    pattern: 'V - 게',
    meaningVi: 'Để... — mục đích, hành động sau cần thiết để đạt hành động/trạng thái trước',
    usageNotes:
      'Diễn tả mục đích: hành động ở mệnh đề sau được thực hiện là điều cần thiết để đạt được hành động hay trạng thái nêu ở mệnh đề trước.',
    examples: [
      { ko: '방탄소년단의 공연을 직접 볼 수 있게 콘서트 표를 샀어요.', vi: 'Tôi đã mua vé xem concert để có thể trực tiếp xem BTS biểu diễn.' },
      { ko: '다른 사람에게 방해되지 않게 이어폰을 껴요.', vi: 'Tôi đeo tai nghe để không làm phiền người khác.' },
      { ko: '감기에 걸리지 않게 옷을 따뜻하게 입으세요.', vi: 'Hãy mặc ấm để không bị cảm lạnh.' },
    ],
    commonMistakes: [
      'Vế trước là mục đích/kết quả mong muốn, vế sau là hành động thực hiện để đạt mục đích đó — dễ bị đảo ngược trật tự khi dịch sang tiếng Việt.',
      'Cấu trúc khá phổ biến, dễ nhầm với -도록 (mục 82) tuy hai cấu trúc có thể thay thế cho nhau trong nhiều trường hợp.',
    ],
    level: 'trung-cap',
    section: 'muc-dich',
    sectionOrder: 19,
    sectionTitleVi: 'Mục đích',
  },
  {
    id: 'gr-trung-cap-81',
    pattern: 'V – 게끔',
    meaningVi: 'Để... (dạng nhấn mạnh hơn của -게) — mục đích, nhấn mạnh hơn',
    usageNotes:
      'Là dạng nhấn mạnh hơn của -게, diễn tả mục đích tương tự: hành động ở mệnh đề sau là cần thiết để thực hiện, đạt được hành động hay trạng thái ở mệnh đề trước.',
    examples: [
      { ko: '승규는 뒤에서도 들리게끔 큰 소리로 이야기했다.', vi: 'Seung-gyu đã nói to để cả người ở phía sau cũng có thể nghe thấy.' },
      { ko: '어머니의 사랑을 다시 생각하게끔 하는 영화였어요.', vi: 'Đó là bộ phim khiến người xem phải suy ngẫm lại về tình yêu thương của mẹ.' },
      { ko: '아이들이 이해하게끔 쉽게 설명했어요.', vi: 'Tôi đã giải thích thật dễ hiểu để bọn trẻ có thể nắm được.' },
    ],
    commonMistakes: [
      'Có thể thay thế trực tiếp bằng -게 trong hầu hết các trường hợp, chỉ khác về mức độ nhấn mạnh; học viên không cần cố phân biệt nghĩa quá chi tiết.',
      'Ít phổ biến hơn -게 và -도록 trong giao tiếp hàng ngày, thường gặp nhiều hơn trong văn viết hoặc phát biểu.',
    ],
    level: 'trung-cap',
    section: 'muc-dich',
    sectionOrder: 19,
    sectionTitleVi: 'Mục đích',
  },
  {
    id: 'gr-trung-cap-82',
    pattern: 'V - 도록',
    meaningVi: 'Để mà... / đến mức, đến... — mục đích hoặc mức độ, thời gian của hành động',
    usageNotes:
      "Diễn tả mệnh đề sau là phương hướng, nỗ lực nhằm giúp cho nội dung ở mệnh đề trước có thể xảy ra (nghĩa 'để mà', có thể thay bằng -게); ngoài ra còn dùng để diễn tả giới hạn thời gian, mức độ hay phương pháp của hành động ở mệnh đề sau (nghĩa 'đến mức, đến').",
    examples: [
      { ko: '내일 모의 면접에는 좋은 인상을 주도록 단정하게 입으세요.', vi: 'Hãy ăn mặc chỉnh tề để tạo ấn tượng tốt trong buổi phỏng vấn thử ngày mai.' },
      { ko: '시험에 붙었다는 말을 듣고 눈물이 나도록 기뻤습니다.', vi: 'Nghe tin đỗ kỳ thi, tôi đã vui đến mức rơi nước mắt.' },
      { ko: '아이가 늦지 않도록 아침 일찍 깨웠어요.', vi: 'Tôi đã đánh thức con dậy từ sáng sớm để bé không bị muộn.' },
    ],
    commonMistakes: [
      'Có hai nghĩa khác nhau (mục đích và mức độ) tùy ngữ cảnh — cần đọc kỹ câu để xác định đúng nghĩa đang dùng, không dịch cứng nhắc một nghĩa duy nhất.',
      'Ở nghĩa mục đích có thể thay bằng -게, nhưng ở nghĩa mức độ/thời gian thì không thể thay thế bằng -게.',
    ],
    level: 'trung-cap',
    section: 'muc-dich',
    sectionOrder: 19,
    sectionTitleVi: 'Mục đích',
  },
  {
    id: 'gr-trung-cap-83',
    pattern: 'V – (으) 나 마나',
    meaningVi: 'Dù có làm cũng như không, chẳng cần phải... — kết quả vô ích dù có làm hay không làm',
    usageNotes:
      'Thể hiện dù có thực hiện hành động nào đó hay không thì kết quả cũng vô ích, không thay đổi. Kết quả nêu ra chủ yếu ở thể giả định, dựa trên nhận thức thông thường hoặc thói quen, đặc điểm đã biết trước của một ai đó hay một sự việc nào đó.',
    examples: [
      { ko: '남 씨를 기다리나 마나 안 올 테니까 기다리지 맙시다.', vi: 'Có đợi Nam hay không thì anh ấy cũng chẳng đến đâu, thôi đừng đợi nữa.' },
      { ko: '동생이 놀기만 하는 걸 보니 이번 시험을 보나 마나 떨어질 거예요.', vi: 'Nhìn em tôi chỉ mải chơi thế này thì kỳ thi lần này có thi hay không cũng trượt thôi.' },
      { ko: '그 식당은 물어보나 마나 오늘도 문을 닫았을 거예요.', vi: 'Nhà hàng đó có hỏi hay không thì chắc hôm nay cũng đóng cửa thôi.' },
    ],
    commonMistakes: [
      'Cấu trúc mang tính khẩu ngữ, thể hiện sự chắc chắn dựa trên kinh nghiệm hay thói quen đã biết trước, không dùng cho việc hoàn toàn chưa rõ kết quả.',
      'Không nhầm với -아/어봤자 (mục 84): -(으)나 마나 nhấn mạnh việc làm hay không làm đều vô ích như nhau, còn -아/어봤자 nhấn mạnh dù CỐ GẮNG làm cũng không đạt được kết quả mong muốn.',
    ],
    level: 'trung-cap',
    section: 'dien-ta-su-vo-ich',
    sectionOrder: 20,
    sectionTitleVi: 'Diễn tả sự vô ích',
  },
  {
    id: 'gr-trung-cap-84',
    pattern: 'A/V - 아/어봤자',
    meaningVi: 'Dẫu có, dù cho... (cũng vô ích/không đáng kể) — cố gắng cũng không đạt kết quả mong muốn',
    usageNotes:
      'Diễn tả dù có cố gắng làm điều gì ở mệnh đề trước thì cũng vô ích hoặc không đạt được như mong đợi; ngoài ra còn dùng để diễn tả nội dung ở mệnh đề trước không đặc biệt hay không có giá trị đáng kể.',
    examples: [
      { ko: '민호 씨에게 부탁해 봤자 소용 없을거예요. 요즘 민호 씨가 바쁘거든요.', vi: 'Có nhờ Min-ho cũng vô ích thôi. Dạo này anh ấy bận lắm.' },
      { ko: '어린이 영화가 무서워 봤자 얼마나 무섭겠어? 그냥 봐.', vi: 'Phim thiếu nhi thì dù có đáng sợ cũng đáng sợ đến đâu chứ? Cứ xem đi.' },
      { ko: '지금 후회해 봤자 아무 소용이 없어요.', vi: 'Bây giờ có hối hận cũng chẳng ích gì cả.' },
    ],
    commonMistakes: [
      'Mang sắc thái coi nhẹ, hạ thấp giá trị hay hiệu quả của hành động ở vế trước — thường dùng để an ủi hoặc động viên ai đó đừng lo lắng quá mức.',
      'Phân biệt với -(으)나 마나 (mục 83): -아/어봤자 nhấn mạnh việc đã CỐ GẮNG làm nhưng không hiệu quả, còn -(으)나 마나 nhấn mạnh làm hay không làm kết quả như nhau.',
    ],
    level: 'trung-cap',
    section: 'dien-ta-su-vo-ich',
    sectionOrder: 20,
    sectionTitleVi: 'Diễn tả sự vô ích',
  },
  {
    id: 'gr-trung-cap-85',
    pattern: 'V - (으)ㄹ걸 그랬다',
    meaningVi: 'Biết thế đã... — tiếc nuối, hối hận vì đã làm hoặc không làm điều gì trong quá khứ',
    usageNotes:
      'Diễn tả sự tiếc nuối hay hối hận của người nói về một việc đáng lẽ nên làm nhưng đã không làm, hoặc không nên làm nhưng đã làm trong quá khứ. Khi hối hận vì đã KHÔNG làm việc gì đó, dùng -(으)ㄹ걸 그랬다 (biết thế đã làm); khi hối hận vì đã LÀM một việc gì đó, dùng -지 말 걸 그랬다 hoặc 안-(으)ㄹ걸 그랬다 (biết thế đừng làm/biết thế đã không làm). Dạng thân mật (반말) có thể rút gọn thành -(으)ㄹ걸.',
    examples: [
      { ko: '시험이 그렇게 어려울 줄 알았으면 공부를 더 많이 할 걸 그랬어요.', vi: 'Biết đề thi khó đến vậy thì tôi đã học nhiều hơn rồi.' },
      { ko: '오늘 발이 너무 아팠어요. 높은 신발을 신지 말 걸 그랬어요.', vi: 'Hôm nay chân tôi đau quá. Biết vậy đã không đi giày cao.' },
      { ko: '어제 잠을 못 잤어요. 커피를 마시지 말 걸 그랬어요.', vi: 'Tối qua tôi không ngủ được. Biết vậy đã không uống cà phê.' },
    ],
    commonMistakes: [
      'Không nhầm với -(으)ㄹ걸요 (mục 22) vốn mang nghĩa phỏng đoán — hai cấu trúc trông rất giống nhau khi rút gọn ở dạng thân mật nên dễ gây hiểu sai.',
      'Chọn đúng dạng khẳng định hay phủ định tùy vào việc đang hối tiếc vì đã làm hay đã không làm.',
    ],
    level: 'trung-cap',
    section: 'hoi-han',
    sectionOrder: 21,
    sectionTitleVi: 'Hối hận',
  },
  {
    id: 'gr-trung-cap-86',
    pattern: 'A/V - 았/었어야 했는데',
    meaningVi: 'Lẽ ra đã phải... — tiếc nuối, hối hận vì đáng lẽ cần làm nhưng đã không làm',
    usageNotes:
      'Diễn tả sự tiếc nuối hay hối hận về một việc đáng lẽ cần phải làm nhưng thực tế đã không làm.',
    examples: [
      { ko: '음식을 적게 만들었어야 했는데 너무 많아서 버릴 수밖에 없었어요.', vi: 'Lẽ ra tôi nên nấu ít đồ ăn thôi, nhưng nấu nhiều quá nên đành phải bỏ đi.' },
      { ko: '미리 영화관 위치를 찾아보고 갔어야 했는데 길을 잘 못 찾아서 15 분이나 늦게 왔어요.', vi: 'Lẽ ra tôi nên tìm hiểu trước vị trí rạp chiếu phim rồi mới đi, vậy mà bị lạc đường nên đến muộn tận 15 phút.' },
      { ko: '미리 예약했어야 했는데 깜빡 잊어버렸어요.', vi: 'Lẽ ra tôi phải đặt chỗ trước, vậy mà tôi lại quên mất.' },
    ],
    commonMistakes: [
      'Gần nghĩa với -(으)ㄹ걸 그랬다 (mục 85) nhưng -았/었어야 했는데 mang sắc thái trang trọng, nghiêm túc hơn, còn -(으)ㄹ걸 그랬다 mang tính khẩu ngữ, thân mật hơn.',
      'Luôn đi kèm 는데 ở cuối để ngụ ý kết quả không hay đã xảy ra do việc không làm đó, không dùng đơn độc -았/었어야 했다 mà bỏ đi phần này.',
    ],
    level: 'trung-cap',
    section: 'hoi-han',
    sectionOrder: 21,
    sectionTitleVi: 'Hối hận',
  },
  {
    id: 'gr-trung-cap-87',
    pattern: 'V –  아/어 가지고',
    meaningVi: 'Rồi thì, rồi... — hình thức văn nói của -아/어서, thể hiện lý do hoặc trình tự hành động',
    usageNotes:
      "Là hình thức văn nói (khẩu ngữ) của -아/어서. Ngoài việc thể hiện lý do 'vì... nên', cấu trúc còn thể hiện thứ tự giữa các hành động trước sau, hoặc hành động ở vế trước là phương tiện, nguyên nhân cho hành động ở vế sau. Có thể rút gọn thành -아/어 갖고.",
    examples: [
      { ko: '요즘 일이 많아 가지고 아주 바빠요.', vi: 'Dạo này công việc nhiều nên tôi bận lắm.' },
      { ko: '김밥을 사 가지고 먹었어요.', vi: 'Tôi mua gimbap rồi ăn.' },
      { ko: '늦게 일어나 가지고 아침을 못 먹었어요.', vi: 'Vì dậy muộn nên tôi không kịp ăn sáng.' },
    ],
    commonMistakes: [
      'Đây là dạng khẩu ngữ suồng sã của -아/어서, không nên dùng trong văn viết trang trọng hay bài luận.',
      'Có thể mang cả nghĩa nguyên nhân lẫn nghĩa trình tự thời gian/phương tiện tùy ngữ cảnh, tương tự -아/어서.',
    ],
    level: 'trung-cap',
    section: 'thoi-gian-va-trat-tu-hanh-dong',
    sectionOrder: 22,
    sectionTitleVi: 'Thời gian và trật tự hành động',
  },
  {
    id: 'gr-trung-cap-88',
    pattern: 'V – 아/어다가',
    meaningVi: 'Rồi... (mang đi nơi khác) — hành động sau xảy ra ở địa điểm khác với hành động trước',
    usageNotes:
      'Diễn tả hành động ở mệnh đề sau xảy ra ở một địa điểm khác với hành động ở mệnh đề trước, hai hành động có quan hệ về mặt thời gian và không gian. Có thể dùng dạng tỉnh lược -아/어다.',
    examples: [
      { ko: '마트에 가는 길에 쌀을 사다 주세요.', vi: 'Trên đường đi siêu thị, hãy mua gạo rồi mang về giúp tôi nhé.' },
      { ko: '친구에게 비빔밥을 만들어다 줬어요.', vi: 'Tôi đã làm bibimbap rồi mang đến cho bạn.' },
      { ko: '도서관에서 책을 빌려다가 집에서 읽었어요.', vi: 'Tôi mượn sách ở thư viện rồi mang về nhà đọc.' },
    ],
    commonMistakes: [
      'Nhấn mạnh sự thay đổi địa điểm giữa hai hành động (làm ở chỗ này, mang đến/dùng ở chỗ khác) — khác với -아/어서 hay -고 không nhất thiết đổi địa điểm.',
      'Thường đi cùng các động từ mang - đưa như 사다, 만들다, 빌리다 kết hợp với động từ chuyển động hoặc trao đổi như 주다, 가다, 오다.',
    ],
    level: 'trung-cap',
    section: 'thoi-gian-va-trat-tu-hanh-dong',
    sectionOrder: 22,
    sectionTitleVi: 'Thời gian và trật tự hành động',
  },
  {
    id: 'gr-trung-cap-89',
    pattern: 'V – 고서',
    meaningVi: 'Sau khi... — hành động trước kết thúc rồi hành động sau mới xảy ra, nhấn mạnh trình tự',
    usageNotes:
      'Diễn tả hành động ở mệnh đề trước kết thúc thì hành động ở mệnh đề sau mới xảy ra, nhấn mạnh mối quan hệ trước - sau rõ ràng giữa hai hành động và nhấn mạnh sự liệt kê trình tự sự việc hơn -고 thông thường.',
    examples: [
      { ko: '저는 매일 아침을 먹고서 학교에 갑니다.', vi: 'Hằng ngày tôi ăn sáng xong rồi mới đi học.' },
      { ko: '수업이 끝나고서 친구와 같이 쇼핑해요.', vi: 'Sau khi tan học tôi đi mua sắm cùng bạn.' },
      { ko: '손을 씻고서 밥을 먹었어요.', vi: 'Tôi rửa tay xong rồi mới ăn cơm.' },
    ],
    commonMistakes: [
      'Gần nghĩa với -고 나서 (đã học ở mục sơ cấp) nhưng -고서 mang tính trang trọng hơn một chút và nhấn mạnh trình tự rõ ràng hơn -고 đơn thuần.',
      'Hai vế thường cùng chủ ngữ, không dùng khi chủ ngữ hai vế khác nhau hoàn toàn.',
    ],
    level: 'trung-cap',
    section: 'thoi-gian-va-trat-tu-hanh-dong',
    sectionOrder: 22,
    sectionTitleVi: 'Thời gian và trật tự hành động',
  },
  {
    id: 'gr-trung-cap-90',
    pattern: 'N – 만에',
    meaningVi: 'Sau... (khoảng thời gian) — hành động xảy ra sau một khoảng thời gian nhất định',
    usageNotes:
      'Diễn tả một hành động hay sự việc xảy ra sau khi đã trôi qua một khoảng thời gian nhất định, thường được dùng sau một danh từ chỉ khoảng thời gian cụ thể.',
    examples: [
      { ko: '하노이에서 비행기를 타니 2 시간 만에 호치민시에 도착했어요.', vi: 'Đi máy bay từ Hà Nội, chỉ sau 2 tiếng là tôi đã đến Thành phố Hồ Chí Minh.' },
      { ko: '숙제를 하기 시작한지 2 시간 만에 다 했어요.', vi: 'Sau 2 tiếng kể từ khi bắt đầu làm bài tập, tôi đã làm xong hết.' },
      { ko: '헤어진 지 5 년 만에 다시 만났어요.', vi: 'Sau 5 năm kể từ khi chia tay, chúng tôi đã gặp lại nhau.' },
    ],
    commonMistakes: [
      'N-만에 luôn cần một khoảng thời gian cụ thể đứng trước, không dùng với danh từ chỉ mốc thời gian đơn thuần (như 아침, 저녁).',
      'Thường kết hợp với V-(으)ㄴ 지 (mục 20, sơ cấp) để nhấn mạnh khoảng thời gian đã trôi qua kể từ một mốc nào đó.',
    ],
    level: 'trung-cap',
    section: 'thoi-gian-va-trat-tu-hanh-dong',
    sectionOrder: 22,
    sectionTitleVi: 'Thời gian và trật tự hành động',
  },
  {
    id: 'gr-trung-cap-91',
    pattern: 'V – 아/어지다',
    meaningVi: 'Được, bị... — dạng bị động, hành động tự xảy ra hoặc chịu tác động để đạt trạng thái',
    usageNotes:
      'Là dạng bị động của động từ, diễn tả một hành động nào đó tự xảy ra hoặc bị tác động từ bên ngoài để đạt được một trạng thái nhất định. Về lý thuyết, các động từ vốn đã có dạng bị động riêng thì không kết hợp thêm với -아/어지다, nhưng trong khẩu ngữ vẫn có thể chấp nhận một số trường hợp như 끊기다 = 끊어지다, 쓰이다 = 써지다.',
    examples: [
      { ko: '꽂아져 있는 책들은 모두 승규가 정리한 것이다.', vi: 'Những cuốn sách được xếp gọn gàng trên giá đều do Seung-gyu sắp xếp.' },
      { ko: '방에 불이 꺼졌어요.', vi: 'Đèn trong phòng đã tắt.' },
      { ko: '일정이 정해졌어요?', vi: 'Lịch trình đã được quyết định chưa?' },
    ],
    commonMistakes: [
      'Không kết hợp -아/어지다 với những động từ đã có dạng bị động chuẩn riêng (như 끊기다, 쓰이다, 보이다, 들리다) trong văn viết trang trọng, dù khẩu ngữ đôi khi vẫn chấp nhận.',
      'Cần phân biệt -아/어지다 (bị động, trạng thái tự nhiên xảy ra) với -게 하다 (mục 92, gây khiến, có tác nhân chủ động bắt người khác làm).',
    ],
    level: 'trung-cap',
    section: 'dang-bi-dong-va-gay-khien',
    sectionOrder: 23,
    sectionTitleVi: 'Dạng bị động và gây khiến',
  },
  {
    id: 'gr-trung-cap-92',
    pattern: 'A/V – 게 하다',
    meaningVi: 'Cho, làm cho, cho phép... — dạng gây khiến, làm cho người khác hành động hoặc thay đổi trạng thái',
    usageNotes:
      "Là dạng gây khiến, diễn tả việc làm cho người khác thực hiện một hành động hoặc khiến một trạng thái nào đó thay đổi. Nếu câu không có bổ ngữ thì đối tượng chịu tác động gắn trợ từ 을/를, nếu có bổ ngữ thì đối tượng gắn 에; ngoài ra cấu trúc còn mang nghĩa 'cho phép làm gì', khi đó đối tượng lại gắn 이/가. Khi phủ định, không dùng 안 mà dùng 못.",
    examples: [
      { ko: '어머니는 동생에게 약을 먹게 하셨다.', vi: 'Mẹ đã bắt em tôi uống thuốc.' },
      { ko: '영수는 동생에게 청소를 하게 했다.', vi: 'Yeong-su đã bắt em mình dọn dẹp.' },
      { ko: '흐엉 씨는 아이가 과자를 못 먹게 했어요.', vi: 'Hương đã không cho con mình ăn bánh kẹo.' },
    ],
    commonMistakes: [
      'Khi phủ định phải dùng 못 게 하다 (không cho phép/ngăn không cho làm), không dùng 안 게 하다 — đây là lỗi ngữ pháp phổ biến.',
      'Cần chọn đúng trợ từ theo đối tượng: 을/를 khi câu không có bổ ngữ khác, 에 khi có bổ ngữ, và 이/가 khi mang nghĩa "cho phép".',
    ],
    level: 'trung-cap',
    section: 'dang-bi-dong-va-gay-khien',
    sectionOrder: 23,
    sectionTitleVi: 'Dạng bị động và gây khiến',
  },
  {
    id: 'gr-trung-cap-93',
    pattern: '오히려',
    meaningVi: 'Ngược lại, thậm chí còn — kết quả trái với dự đoán thông thường',
    usageNotes:
      'Nhấn mạnh rằng kết quả thực tế đi ngược lại với điều người nói (hoặc thông thường) mong đợi/dự đoán — không chỉ khác mà còn theo chiều hướng NGƯỢC HẲN. Thường đứng đầu vế thứ hai, sau một câu nêu bối cảnh hoặc kỳ vọng.',
    examples: [
      { ko: '약을 먹었는데 오히려 더 아파요.', vi: 'Tôi đã uống thuốc rồi nhưng ngược lại còn đau hơn.' },
      { ko: '도와주려고 했는데 오히려 폐를 끼쳤어요.', vi: 'Tôi định giúp nhưng ngược lại lại gây phiền cho người ta.' },
      { ko: '비싼 것보다 오히려 싼 것이 더 잘 팔려요.', vi: 'Ngược lại với hàng đắt, hàng rẻ lại bán chạy hơn.' },
      { ko: '혼내려고 했는데 오히려 제가 혼났어요.', vi: 'Tôi định mắng nó nhưng ngược lại chính tôi lại bị mắng.' },
    ],
    commonMistakes: [
      'Phải có một kỳ vọng/bối cảnh THÔNG THƯỜNG được nêu trước đó để 오히려 phủ định lại — không dùng 오히려 mở đầu câu đầu tiên khi chưa có gì để "ngược lại" với nó.',
      'Khác 반면(에) (nêu 2 vế đối lập BÌNH ĐẲNG, trung tính) — 오히려 luôn hàm ý bất ngờ/trái dự đoán, sắc thái mạnh hơn.',
    ],
    level: 'trung-cap',
    section: 'phu-tu-lien-ket-cau',
    sectionOrder: 24,
    sectionTitleVi: 'Phó từ liên kết câu',
    relatedPatterns: [
      { id: 'gr-trung-cap-10', distinction: '반면(에) nêu 2 vế đối lập bình đẳng, trung tính; 오히려 hàm ý kết quả bất ngờ/trái dự đoán, sắc thái mạnh hơn.' },
    ],
  },
  {
    id: 'gr-trung-cap-94',
    pattern: '게다가',
    meaningVi: 'Hơn nữa, thêm vào đó — bổ sung thêm một điều cùng chiều, thường làm tăng mức độ',
    usageNotes:
      'Thêm một thông tin/lý do MỚI vào điều đã nói ở câu trước, cùng chiều hướng (cùng tích cực hoặc cùng tiêu cực) và thường làm cho mức độ nặng/mạnh hơn. Trang trọng hơn 그리고, hay dùng khi liệt kê thêm lý do cho một nhận định.',
    examples: [
      { ko: '이 식당은 음식이 맛있어요. 게다가 가격도 싸요.', vi: 'Quán này đồ ăn ngon. Hơn nữa giá còn rẻ.' },
      { ko: '오늘 비가 와요. 게다가 바람도 세게 불어요.', vi: 'Hôm nay trời mưa. Thêm vào đó gió còn thổi mạnh.' },
      { ko: '길이 막혔어요. 게다가 사고까지 났어요.', vi: 'Đường bị tắc. Hơn nữa còn xảy ra tai nạn nữa.' },
      { ko: '그 사람은 똑똑해요. 게다가 성실하기까지 해요.', vi: 'Người đó thông minh. Hơn nữa còn chăm chỉ nữa.' },
    ],
    commonMistakes: [
      'Hai ý được nối bằng 게다가 phải CÙNG CHIỀU (cùng khen hoặc cùng chê) — nếu ý sau trái chiều với ý trước, phải dùng 그런데/반면(에), không dùng 게다가.',
      'Hay đi cùng trợ từ nhấn mạnh ở cuối vế sau như -까지, -도 để tăng sắc thái "còn thêm cả...".',
    ],
    level: 'trung-cap',
    section: 'phu-tu-lien-ket-cau',
    sectionOrder: 24,
    sectionTitleVi: 'Phó từ liên kết câu',
    relatedPatterns: [],
  },
  {
    id: 'gr-trung-cap-95',
    pattern: '아무리 A/V - 아/어도',
    meaningVi: 'Dù có... đến mấy, cho dù... thế nào — nhượng bộ, nhấn mạnh mức độ',
    usageNotes:
      '아무리 luôn xuất hiện thành cặp với đuôi câu -아/어도 (hoặc -더라도, -(으)ㄹ지라도 ở trình độ cao hơn) để nhấn mạnh rằng dù mức độ của vế trước có LỚN ĐẾN ĐÂU, kết quả ở vế sau vẫn không đổi.',
    examples: [
      { ko: '아무리 바빠도 밥은 먹어야 해요.', vi: 'Dù bận đến mấy cũng phải ăn cơm.' },
      { ko: '아무리 어려워도 포기하지 마세요.', vi: 'Dù khó đến đâu cũng đừng bỏ cuộc.' },
      { ko: '아무리 생각해도 답이 안 나와요.', vi: 'Dù nghĩ thế nào cũng không ra được đáp án.' },
      { ko: '아무리 돈이 많아도 시간을 살 수는 없어요.', vi: 'Dù có nhiều tiền đến mấy cũng không mua được thời gian.' },
    ],
    commonMistakes: [
      '아무리 luôn đi cùng -아/어도 ở cuối vế trước — không dùng 아무리 một mình với -지만 hay -는데, hai cấu trúc không ghép được với nhau.',
      'Người Việt hay quên đuôi -아/어도 ở cuối vì trong tiếng Việt "dù...đến mấy" không bắt buộc cấu trúc hô ứng chặt như vậy — thiếu -아/어도 khiến câu sai ngữ pháp dù vẫn còn 아무리 ở đầu.',
    ],
    level: 'trung-cap',
    section: 'phu-tu-lien-ket-cau',
    sectionOrder: 24,
    sectionTitleVi: 'Phó từ liên kết câu',
    relatedPatterns: [
      { id: 'gr-cao-cap-42', distinction: '-더라도 trang trọng hơn -아/어도, thường đi cùng 비록 ở trình độ cao hơn thay vì 아무리.' },
      { id: 'gr-cao-cap-44', distinction: '(으)ㄹ지라도 là mức trang trọng cao nhất trong các đuôi nhượng bộ, thường đi với 비록 hơn là 아무리.' },
    ],
  },
  {
    id: 'gr-trung-cap-96',
    pattern: '만약 (에) A/V - (으)면/다면',
    meaningVi: 'Nếu, giả sử — nhấn mạnh tính giả định của điều kiện phía sau',
    usageNotes:
      '만약(에) đứng đầu vế điều kiện để nhấn mạnh đây CHỈ LÀ giả định, không chắc xảy ra — luôn đi cùng một đuôi câu điều kiện ở cuối vế đó (thường là -(으)면 hoặc -다면). Không bắt buộc phải có 만약, nhưng thêm vào giúp câu rõ ràng là giả thuyết ngay từ đầu, hữu ích khi câu điều kiện dài.',
    examples: [
      { ko: '만약 내일 비가 오면 소풍은 취소예요.', vi: 'Nếu ngày mai trời mưa thì buổi dã ngoại sẽ bị hủy.' },
      { ko: '만약 복권에 당첨된다면 뭘 하고 싶어요?', vi: 'Nếu trúng số thì bạn muốn làm gì?' },
      { ko: '만약 시간이 있으면 같이 갑시다.', vi: 'Nếu có thời gian thì mình cùng đi nhé.' },
      { ko: '만약 그때 다른 선택을 했다면 지금과 달랐을 거예요.', vi: 'Nếu lúc đó tôi chọn khác thì bây giờ đã khác rồi.' },
    ],
    commonMistakes: [
      '만약 không tự đứng một mình làm vị ngữ điều kiện — luôn cần đuôi câu điều kiện (-(으)면/-다면) ở cuối vế trước, thiếu đuôi đó câu sẽ sai ngữ pháp dù có 만약 ở đầu.',
      'Không nhầm với -다면 dùng ĐỘC LẬP không cần 만약 phía trước — 만약 chỉ là phần NHẤN MẠNH thêm, tự thân -(으)면/-다면 đã đủ diễn đạt điều kiện.',
    ],
    level: 'trung-cap',
    section: 'phu-tu-lien-ket-cau',
    sectionOrder: 24,
    sectionTitleVi: 'Phó từ liên kết câu',
    relatedPatterns: [],
  },
  {
    id: 'gr-trung-cap-97',
    pattern: '따라서',
    meaningVi: 'Do đó, vì vậy — nêu kết luận/hệ quả, trang trọng, dùng nhiều trong văn viết',
    usageNotes:
      'Nối kết luận với lý do đã trình bày ở câu/đoạn trước, mang sắc thái TRANG TRỌNG và LOGIC hơn hẳn 그래서 — thường xuất hiện trong văn bản báo cáo, bài luận, tin tức, hầu như không dùng trong hội thoại đời thường.',
    examples: [
      { ko: '최근 연구에 따르면 수면 부족은 건강에 해롭다. 따라서 충분한 수면이 필요하다.', vi: 'Theo nghiên cứu gần đây, thiếu ngủ có hại cho sức khỏe. Do đó cần ngủ đủ giấc.' },
      { ko: '물가가 계속 오르고 있다. 따라서 소비를 줄이는 사람들이 늘고 있다.', vi: 'Giá cả đang liên tục tăng. Do đó số người giảm chi tiêu ngày càng nhiều.' },
      { ko: '이 제품은 안전성이 검증되지 않았다. 따라서 판매를 중단해야 한다.', vi: 'Sản phẩm này chưa được kiểm chứng độ an toàn. Vì vậy cần ngừng bán.' },
    ],
    commonMistakes: [
      'Chỉ dùng trong văn viết trang trọng/học thuật — dùng 따라서 trong hội thoại thân mật nghe rất cứng nhắc, khi đó nên dùng 그래서.',
      'Đây chính là từ nối cần thuộc lòng cho phần Viết luận TOPIK (câu 51-54) thay vì 그래서.',
    ],
    level: 'trung-cap',
    section: 'phu-tu-lien-ket-cau',
    sectionOrder: 24,
    sectionTitleVi: 'Phó từ liên kết câu',
    relatedPatterns: [
      { id: 'gr-so-cap-60', distinction: '그래서 dùng được cả văn nói lẫn viết thân mật; 따라서 chỉ dùng văn viết/học thuật trang trọng.' },
    ],
  },
]
