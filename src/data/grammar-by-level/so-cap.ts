import type { GrammarEntry } from '@/types'

export const grammarSoCap: GrammarEntry[] = [
  {
    id: 'gr-so-cap-01',
    pattern: 'A/V - 아/어서',
    meaningVi: 'Vì... nên... — nguyên nhân, không dùng được với mệnh lệnh/cầu khiến',
    usageNotes:
      'Mệnh đề trước nêu nguyên nhân dẫn đến kết quả ở mệnh đề sau. Vế trước chỉ được chia ở thì hiện tại (không thể chia -았/었- hay -겠- ngay trước -아/어서), và vế sau không được dùng câu mệnh lệnh hay câu cầu khiến.',
    examples: [
      { ko: '배가 고파서 많이 먹었어요.', vi: 'Vì đói bụng nên tôi đã ăn rất nhiều.', romanization: 'bae-ga go-pa-seo ma-ni meo-geo-sseo-yo', register: 'polite' },
      { ko: '기뻐서 눈물이 났어요.', vi: 'Vì vui quá nên tôi đã rơi nước mắt.', romanization: 'gi-ppeo-seo nun-mu-ri na-sseo-yo', register: 'polite' },
      { ko: '열심히 공부해서 100점을 받았어요.', vi: 'Vì học chăm chỉ nên tôi đã đạt điểm 100.', romanization: 'yeol-sim-hi gong-bu-hae-seo baek jeo-meul ba-da-sseo-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Không được chia thì quá khứ/tương lai ở vế trước: nói "배고팠어서" là sai, phải dùng "배고파서".',
      'Vế sau không được là câu mệnh lệnh hay rủ rê — muốn diễn đạt ý đó phải dùng -(으)니까 thay thế.',
    ],
    level: 'so-cap',
    section: 'nguyen-nhan-ket-qua',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân, kết quả',
    conjugationTable: [
      { stemType: 'Quy tắc', baseForm: '먹다', conjugated: '먹어서' },
      { stemType: 'ㅂ bất quy tắc', baseForm: '춥다', conjugated: '추워서' },
      { stemType: '르 bất quy tắc', baseForm: '다르다', conjugated: '달라서' },
      { stemType: 'ㄷ bất quy tắc', baseForm: '듣다', conjugated: '들어서' },
      { stemType: 'ㅎ bất quy tắc', baseForm: '그렇다', conjugated: '그래서' },
    ],
    relatedPatterns: [
      { id: 'gr-so-cap-02', distinction: '-아/어서 không chia được thì trước nó và vế sau không được là mệnh lệnh/cầu khiến; muốn diễn đạt nguyên nhân trước mệnh lệnh/rủ rê phải chuyển sang -(으)니까.' },
    ],
  },
  {
    id: 'gr-so-cap-02',
    pattern: 'A/V - (으)니까',
    meaningVi: 'Vì... nên... — nguyên nhân, thường đi trước mệnh lệnh/cầu khiến',
    usageNotes:
      'Cũng nêu quan hệ nguyên nhân - kết quả nhưng khác -아/어서 ở chỗ vế sau thường là câu mệnh lệnh hoặc câu cầu khiến, và vế trước có thể chia được cả thì quá khứ hoặc tương lai (kết hợp được với -았/었- hay -겠- ngay trước -(으)니까).',
    examples: [
      { ko: '추우니까 옷을 많이 입고 가세요.', vi: 'Vì trời lạnh nên hãy mặc nhiều áo rồi đi nhé.', romanization: 'chu-u-ni-kka o-seul ma-ni ip-kko ga-se-yo', register: 'polite' },
      { ko: '날씨가 좋으니까 같이 산책할래요?', vi: 'Vì thời tiết đẹp nên chúng ta cùng đi dạo nhé?', romanization: 'nal-ssi-ga jo-eu-ni-kka ga-chi san-chae-kal-lae-yo', register: 'polite' },
      { ko: '전에 한국에 살았으니까 한국말을 조금 할 수 있어요.', vi: 'Vì trước đây tôi từng sống ở Hàn Quốc nên tôi có thể nói tiếng Hàn một chút.', romanization: 'jeo-ne han-gu-ge sa-ra-sseu-ni-kka han-gung-ma-reul jo-geum hal su i-sseo-yo', register: 'polite' },
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
    conjugationTable: [
      { stemType: 'Quy tắc (phụ âm cuối)', baseForm: '먹다', conjugated: '먹으니까' },
      { stemType: 'Quy tắc (nguyên âm cuối)', baseForm: '가다', conjugated: '가니까' },
      { stemType: 'ㅂ bất quy tắc', baseForm: '춥다', conjugated: '추우니까' },
      { stemType: 'ㄷ bất quy tắc', baseForm: '듣다', conjugated: '들으니까' },
      { stemType: 'ㅎ bất quy tắc', baseForm: '그렇다', conjugated: '그러니까' },
    ],
    relatedPatterns: [
      { id: 'gr-so-cap-01', distinction: '-(으)니까 chia được cả quá khứ/tương lai ngay trước nó và vế sau có thể là mệnh lệnh/cầu khiến, khác với -아/어서 chỉ ở hiện tại và không đi với mệnh lệnh/rủ rê.' },
    ],
  },
  {
    id: 'gr-so-cap-03',
    pattern: 'N 때문에, A/V - 기 때문에',
    meaningVi: 'Tại... nên..., do... nên... — nguyên nhân trang trọng, hay dùng trong văn viết',
    usageNotes:
      'Diễn tả một lý do dẫn đến kết quả ở vế sau; kết quả thường mang sắc thái chưa tốt dù đôi khi vẫn có thể tích cực. Cấu trúc này trang trọng hơn, dùng nhiều trong văn viết so với -아/어서 và -(으)니까, có thể kết thúc câu ở dạng 기 때문이다, và vế sau không dùng câu mệnh lệnh hay cầu khiến.',
    examples: [
      { ko: '비 때문에 차가 막혀요.', vi: 'Vì trời mưa nên đường bị tắc.', romanization: 'bi ttae-mu-ne cha-ga ma-kyeo-yo', register: 'polite' },
      { ko: '바쁘기 때문에 여행을 못 가요.', vi: 'Vì bận nên tôi không đi du lịch được.', romanization: 'ba-ppeu-gi ttae-mu-ne yeo-haeng-eul mot-kka-yo', register: 'polite' },
      { ko: '저는 배고프기 때문에 밥을 먹고 싶어요.', vi: 'Vì đói bụng nên tôi muốn ăn cơm.', romanization: 'jeo-neun bae-go-peu-gi ttae-mu-ne ba-beul meok-kko si-peo-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Phân biệt N 때문에 (vì N) với N이기 때문에 (vì LÀ N): "학생 때문에" khác nghĩa với "학생이기 때문에".',
      'Giống -아/어서, vế sau của -기 때문에 không được là câu mệnh lệnh hay cầu khiến.',
    ],
    level: 'so-cap',
    section: 'nguyen-nhan-ket-qua',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân, kết quả',
    relatedPatterns: [
      { id: 'gr-so-cap-01', distinction: '-기 때문에 trang trọng và thiên về văn viết hơn -아/어서.' },
      { id: 'gr-so-cap-02', distinction: '-기 때문에 trang trọng và thiên về văn viết hơn -(으)니까, và vế sau cũng không dùng được câu mệnh lệnh/cầu khiến.' },
    ],
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
        romanization: 'ga: je-ju-do-e ga-sseul ttae hal-la-sa-ne ol-la-ga-syeo-sseo-yo? na: a-ni-yo, mot-kka-sseo-yo. nal-ssi-ga na-ppat-kkeo-deu-nyo',
        register: 'polite',
      },
      {
        ko: '가: 요즘 비가 정말 자주 오네요. 나: 요즘 장마철이거든요. 한 달 동안은 계속 올 거예요.',
        vi: 'A: Dạo này mưa nhiều thật đấy. B: Vì đang là mùa mưa mà. Mưa sẽ còn kéo dài cả tháng nữa đấy.',
        romanization: 'ga: yo-jeum bi-ga jeong-mal ja-ju o-ne-yo. na: yo-jeum jang-ma-cheo-ri-geo-deu-nyo. han dal dong-a-neun gye-sok ol geo-ye-yo',
        register: 'polite',
      },
      {
        ko: '가: 얼굴이 왜 그렇게 피곤해 보여요? 나: 어젯밤에 잠을 못 잤거든요.',
        vi: 'A: Sao trông mặt bạn mệt mỏi thế? B: Vì tối qua tôi không ngủ được đấy.',
        romanization: 'ga: eol-gu-ri wae geu-reo-ke pi-gon-hae bo-yeo-yo? na: eo-je-ppa-me ja-meul mot-jja-sseo-yo',
        register: 'polite',
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
    relatedPatterns: [
      { id: 'gr-so-cap-05', distinction: '-거든요 dùng khi người nghe CHƯA biết lý do/thông tin, còn -잖아요 dùng khi người nghe cũng ĐÃ biết rồi.' },
    ],
  },
  {
    id: 'gr-so-cap-05',
    pattern: 'N - (이)잖아요, A V - 잖아요.',
    meaningVi: 'Vì... mà, ...mà — nhắc lại lý do người nghe cũng đã biết',
    usageNotes:
      'Dùng khi người nói đưa ra một lý do mà người nghe cũng đã biết, hoặc nhắc lại cho người nghe điều mà họ dường như đã quên. Cấu trúc còn được dùng để trách móc nhẹ nhàng khi người nghe không nghe theo lời khuyên trước đó dẫn đến kết quả không hay. Chỉ dùng trong văn nói thân mật giữa những người quan hệ gần gũi, không dùng trong hoàn cảnh trang trọng.',
    examples: [
      { ko: '가: 왜 담배를 안 피웠어요? 나: 담배를 끊었잖아요.', vi: 'A: Sao anh không hút thuốc nữa vậy? B: Vì tôi đã bỏ thuốc rồi mà.', romanization: 'ga: wae dam-bae-reul an pi-wo-sseo-yo? na: dam-bae-reul kkeu-neo-jja-na-yo', register: 'polite' },
      { ko: '가: 왜 그 가수를 좋아해요? 나: 예쁘잖아.', vi: 'A: Sao bạn thích ca sĩ đó vậy? B: Vì cô ấy xinh mà.', romanization: 'ga: wae geu ga-su-reul jo-a-hae-yo? na: ye-ppeu-ja-na', register: 'casual' },
      { ko: '가: 수영 씨가 새우 알레르기가 있잖아. 나: 아, 그랬죠? 깜빡 했네요.', vi: 'A: Su-yeong bị dị ứng tôm mà, cậu quên rồi à. B: À, đúng nhỉ? Tôi quên mất.', romanization: 'ga: su-yeong ssi-ga sae-u al-le-reu-gi-ga it-jja-na. na: a, geu-raet-jjyo? kkam-ppak haen-ne-yo', register: 'casual' },
    ],
    commonMistakes: [
      'Phân biệt với -거든요: -잖아요 dùng khi người nghe cũng đã biết lý do, còn -거든요 dùng khi người nghe chưa biết.',
      'Chỉ dùng trong văn nói suồng sã — dùng với người lớn tuổi hoặc trong hoàn cảnh trang trọng dễ nghe như đang vặc lại.',
    ],
    level: 'so-cap',
    section: 'nguyen-nhan-ket-qua',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân, kết quả',
    relatedPatterns: [
      { id: 'gr-so-cap-04', distinction: '-잖아요 dùng khi người nghe cũng đã biết lý do đó, còn -거든요 dùng khi người nghe chưa biết, chỉ đơn thuần được người nói thông báo mới.' },
    ],
  },
  {
    id: 'gr-so-cap-06',
    pattern: 'N –(이)고, A/V - 고',
    meaningVi: 'Và, còn — liệt kê ngang hàng, có thể đảo hai vế',
    usageNotes:
      'Dùng để liệt kê các hành động hay trạng thái tương tự nhau ở hai vế mang tính bình đẳng, có thể đổi vị trí hai vế mà ý nghĩa không thay đổi. Có thể mở rộng thành cấu trúc N1도... N2도..., và vế trước có thể chia được cả thì quá khứ (았/었) hoặc tương lai (겠).',
    examples: [
      { ko: '내 친구는 공부도 잘하고 얼굴도 예뻐요.', vi: 'Bạn tôi vừa học giỏi vừa xinh đẹp.', romanization: 'nae chin-gu-neun gong-bu-do jal-ha-go eol-gul-do ye-ppeo-yo', register: 'polite' },
      { ko: '빵은 부드럽고 맛있어요.', vi: 'Bánh mì vừa mềm vừa ngon.', romanization: 'ppang-eun bu-deu-reop-kko ma-si-sseo-yo', register: 'polite' },
      { ko: '여기는 휴게실이고 저기는 사무실이에요.', vi: 'Đây là phòng nghỉ, còn kia là văn phòng.', romanization: 'yeo-gi-neun hyu-ge-si-ri-go jeo-gi-neun sa-mu-si-ri-e-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Khi hai vế bình đẳng có thể đảo vị trí mà nghĩa không đổi — khác với -고 chỉ trình tự thời gian (không đảo được).',
      'Với danh từ kết thúc bằng phụ âm phải chia N이고, không phải N고.',
    ],
    level: 'so-cap',
    section: 'liet-ke-va-tuong-phan',
    sectionOrder: 2,
    sectionTitleVi: 'Liệt kê và tương phản',
    relatedPatterns: [
      { id: 'gr-so-cap-14', distinction: '-고 ở đây liệt kê hai vế bình đẳng, đảo được vị trí mà nghĩa không đổi — khác với -고 chỉ nêu trình tự thời gian trước sau (không đảo được) ở mục 14.' },
    ],
  },
  {
    id: 'gr-so-cap-07',
    pattern: 'A/V – 거나',
    meaningVi: 'Hoặc, hay — lựa chọn giữa hai hay nhiều sự việc',
    usageNotes:
      'Diễn tả sự lựa chọn giữa hai hoặc nhiều sự vật, trạng thái, hành động. Vế trước của -거나 luôn được chia ở thì hiện tại, dù cả câu nói về việc trong quá khứ hay tương lai.',
    examples: [
      { ko: '오후에 축구를 하거나 농구를 할 거예요.', vi: 'Buổi chiều tôi sẽ đá bóng hoặc chơi bóng rổ.', romanization: 'o-hu-e chuk-gu-reul ha-geo-na nong-gu-reul hal geo-ye-yo', register: 'polite' },
      { ko: '주말에 보통 쉬거나 책을 읽어요.', vi: 'Cuối tuần tôi thường nghỉ ngơi hoặc đọc sách.', romanization: 'ju-ma-re bo-tong swi-geo-na chae-geul il-geo-yo', register: 'polite' },
      { ko: '저는 맵거나 짠 음식을 잘 못 먹어요.', vi: 'Tôi không ăn được đồ cay hoặc mặn.', romanization: 'jeo-neun maep-kkeo-na jjan eum-si-geul jal mon meo-geo-yo', register: 'polite' },
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
      { ko: '어제 학교에 갔지만 수업이 없었습니다.', vi: 'Hôm qua tôi đã đến trường nhưng không có tiết học.', romanization: 'eo-je hak-kkyo-e gat-jji-man su-eo-bi eop-sseot-sseum-ni-da', register: 'formal' },
      { ko: '김치가 맛있지만 좀 맵습니다.', vi: 'Kim chi ngon nhưng hơi cay.', romanization: 'gim-chi-ga ma-sit-jji-man jom maep-sseum-ni-da', register: 'formal' },
      { ko: '한국어 재미있지만 좀 어려워요.', vi: 'Tiếng Hàn thú vị nhưng hơi khó.', romanization: 'han-gu-geo jae-mi-it-jji-man jom eo-ryeo-wo-yo', register: 'polite' },
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
      { ko: '어제는 따뜻했는데 오늘은 좀 쌀쌀해요.', vi: 'Hôm qua trời ấm nhưng hôm nay hơi se lạnh.', romanization: 'eo-je-neun tta-tteu-taen-neun-de o-neu-reun jom ssal-ssal-hae-yo', register: 'polite' },
      { ko: '비가 오는데 어디에 가요?', vi: 'Trời đang mưa mà bạn đi đâu vậy?', romanization: 'bi-ga o-neun-de eo-di-e ga-yo', register: 'polite' },
      { ko: '가: 이 티셔츠 너무 단순해요? 나: 아니요, 예쁜데요.', vi: 'A: Chiếc áo phông này đơn giản quá phải không? B: Không đâu, đẹp đấy chứ.', romanization: 'ga: i ti-syeo-cheu neo-mu dan-sun-hae-yo? na: a-ni-yo, ye-ppeun-de-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Tính từ hiện tại chia -(으)ㄴ데, động từ hiện tại chia -는데 — dễ lẫn lộn hai dạng này.',
      'Khi dùng ở cuối câu để từ chối khéo hoặc bổ sung ý, cần thêm -요 và giữ giọng điệu nhẹ nhàng, không phải khẳng định thẳng.',
    ],
    level: 'so-cap',
    section: 'liet-ke-va-tuong-phan',
    sectionOrder: 2,
    sectionTitleVi: 'Liệt kê và tương phản',
    conjugationTable: [
      { stemType: 'Quy tắc (phụ âm cuối)', baseForm: '작다', conjugated: '작은데' },
      { stemType: 'Quy tắc (nguyên âm cuối)', baseForm: '예쁘다', conjugated: '예쁜데' },
      { stemType: 'ㅂ bất quy tắc', baseForm: '춥다', conjugated: '추운데' },
      { stemType: 'ㅎ bất quy tắc', baseForm: '어떻다', conjugated: '어떤데' },
    ],
  },
  {
    id: 'gr-so-cap-10',
    pattern: 'N 전에, V - 기 전에',
    meaningVi: 'Trước khi...',
    usageNotes:
      'Diễn tả một hành động hay tình huống xảy ra trước một sự việc khác; có thể kết hợp thêm các trợ từ 부터/까지 để nhấn mạnh mốc thời gian.',
    examples: [
      { ko: '회사에 가기 전에 아침을 먹어요.', vi: 'Trước khi đi làm tôi ăn sáng.', romanization: 'hoe-sa-e ga-gi jeo-ne a-chi-meul meo-geo-yo', register: 'polite' },
      { ko: '저는 잠을 자기 전에 책을 읽어요.', vi: 'Trước khi đi ngủ tôi đọc sách.', romanization: 'jeo-neun ja-meul ja-gi jeo-ne chae-geul il-geo-yo', register: 'polite' },
      { ko: '보고서는 금요일 전까지 제출해 주세요.', vi: 'Hãy nộp báo cáo trước thứ Sáu.', romanization: 'bo-go-seo-neun geu-myo-il jeon-kka-ji je-chul-hae ju-se-yo', register: 'polite' },
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
      { ko: '점심을 먹은 후에 영화를 볼까요?', vi: 'Ăn trưa xong mình đi xem phim nhé?', romanization: 'jeom-si-meul meo-geun hu-e yeong-hwa-reul bol-kka-yo', register: 'polite' },
      { ko: '시험 후에 뭐 할 거예요?', vi: 'Sau kỳ thi bạn định làm gì?', romanization: 'si-heom hu-e mwo hal geo-ye-yo', register: 'polite' },
      { ko: '집에 돌아온 다음에 샤워했어요.', vi: 'Sau khi về đến nhà tôi đã đi tắm.', romanization: 'ji-be do-ra-on da-eu-me sya-wo-hae-sseo-yo', register: 'polite' },
    ],
    commonMistakes: [
      'V-(으)ㄴ 후에 luôn chia động từ ở dạng đã hoàn thành, khác với V-기 전에 luôn giữ nguyên thể.',
      'Có thể thay 후에 bằng 다음에/뒤에 nhưng tuyệt đối không thay bằng 전에 vì nghĩa hoàn toàn ngược lại.',
    ],
    level: 'so-cap',
    section: 'cau-truc-thoi-gian',
    sectionOrder: 3,
    sectionTitleVi: 'Cấu trúc thời gian',
    conjugationTable: [
      { stemType: 'Quy tắc (phụ âm cuối)', baseForm: '먹다', conjugated: '먹은 후에' },
      { stemType: 'Quy tắc (nguyên âm cuối)', baseForm: '가다', conjugated: '간 후에' },
      { stemType: 'ㄷ bất quy tắc', baseForm: '듣다', conjugated: '들은 후에' },
      { stemType: 'ㅂ bất quy tắc', baseForm: '굽다', conjugated: '구운 후에' },
      { stemType: 'ㄹ 받침 (lược ㄹ)', baseForm: '놀다', conjugated: '논 후에' },
    ],
    relatedPatterns: [
      { id: 'gr-so-cap-10', distinction: 'V-(으)ㄴ 후에 luôn chia động từ ở dạng đã hoàn thành và có thể thay bằng 다음에/뒤에, còn V-기 전에 luôn giữ nguyên thể và không thể thay bằng 전에.' },
    ],
  },
  {
    id: 'gr-so-cap-12',
    pattern: 'V - 고 나서',
    meaningVi: 'Làm xong rồi thì... — hành động sau chỉ xảy ra khi hành động trước đã hoàn tất',
    usageNotes:
      'Diễn tả hành động ở vế sau chỉ được thực hiện sau khi hành động ở vế trước đã hoàn thành trọn vẹn. Không thể kết hợp với -았/었-, -겠- hay -(으)ㄹ 것이다, và chỉ dùng được với các động từ có điểm bắt đầu, kết thúc rõ ràng, không dùng với các động từ như 일어나다, 가다, 오다.',
    examples: [
      { ko: '숙제를 끝내고 나서 친구를 만날 거예요.', vi: 'Làm xong bài tập rồi tôi sẽ đi gặp bạn.', romanization: 'suk-jje-reul kkeun-nae-go na-seo chin-gu-reul man-nal geo-ye-yo', register: 'polite' },
      { ko: '손을 씻고 나서 식사를 해야 합니다.', vi: 'Phải rửa tay xong rồi mới được ăn cơm.', romanization: 'so-neul ssit-kko na-seo sik-sa-reul hae-ya ham-ni-da', register: 'formal' },
      { ko: '저녁을 먹고 나서 산책을 했어요.', vi: 'Ăn tối xong tôi đã đi dạo.', romanization: 'jeo-nyeo-geul meok-kko na-seo san-chae-geul hae-sseo-yo', register: 'polite' },
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
      { ko: '사과를 씻어서 먹었어요.', vi: 'Tôi rửa táo rồi ăn.', romanization: 'sa-gwa-reul ssi-seo-seo meo-geo-sseo-yo', register: 'polite' },
      { ko: '아침에 일어나서 세수를 했어요.', vi: 'Buổi sáng tôi thức dậy rồi rửa mặt.', romanization: 'a-chi-me i-reo-na-seo se-su-reul hae-sseo-yo', register: 'polite' },
      { ko: '여기에 앉아서 잠깐만 기다리세요.', vi: 'Hãy ngồi đây rồi chờ một lát.', romanization: 'yeo-gi-e an-ja-seo jam-kkan-man gi-da-ri-se-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Phân biệt với -고 (mục 14): -아/어서 chỉ dùng khi hành động sau là kết quả nối tiếp có liên quan mật thiết với hành động trước, còn -고 chỉ đơn thuần liệt kê trình tự.',
      'Cùng một công thức -아/어서 nhưng mang nghĩa nguyên nhân - kết quả hay trình tự thời gian tùy vào động từ và ngữ cảnh, không nên nhầm lẫn hai nghĩa này.',
    ],
    level: 'so-cap',
    section: 'cau-truc-thoi-gian',
    sectionOrder: 3,
    sectionTitleVi: 'Cấu trúc thời gian',
    conjugationTable: [
      { stemType: 'Quy tắc', baseForm: '앉다', conjugated: '앉아서' },
      { stemType: 'ㅅ bất quy tắc', baseForm: '짓다', conjugated: '지어서' },
      { stemType: '르 bất quy tắc', baseForm: '부르다', conjugated: '불러서' },
      { stemType: '으 bất quy tắc (lược 으)', baseForm: '쓰다', conjugated: '써서' },
    ],
    relatedPatterns: [
      { id: 'gr-so-cap-14', distinction: '-아/어서 nhấn mạnh hành động sau là kết quả/mục đích liên quan mật thiết với hành động trước, còn -고 (mục 14) chỉ đơn thuần liệt kê trình tự.' },
      { id: 'gr-so-cap-01', distinction: 'Cùng công thức -아/어서 nhưng ở mục 1 mang nghĩa nguyên nhân - kết quả, còn ở đây mang nghĩa trình tự thời gian nối tiếp hành động, tùy động từ và ngữ cảnh.' },
    ],
  },
  {
    id: 'gr-so-cap-14',
    pattern: 'V – 고',
    meaningVi: 'Làm... rồi... — liệt kê trình tự thời gian, không cần liên quan chặt chẽ',
    usageNotes:
      'Đây là cách dùng thứ hai của -고 (khác với nghĩa liệt kê ngang hàng ở mục 6): diễn tả hai hành động xảy ra nối tiếp theo trình tự thời gian, hai vế phải cùng chủ ngữ nhưng không có quan hệ mục đích - kết quả chặt chẽ như -아/어서. Không thể chia -았/었- hay -겠- ngay trước -고 ở vế trước.',
    examples: [
      { ko: '오늘 아침에 세수하고 밥을 먹었어요.', vi: 'Sáng nay tôi rửa mặt rồi ăn cơm.', romanization: 'o-neul a-chi-me se-su-ha-go ba-beul meo-geo-sseo-yo', register: 'polite' },
      { ko: '저는 어제 수업을 듣고 점심을 먹었어요.', vi: 'Hôm qua tôi học xong rồi ăn trưa.', romanization: 'jeo-neun eo-je su-eo-beul deut-kko jeom-si-meul meo-geo-sseo-yo', register: 'polite' },
      { ko: '저녁을 먹고 텔레비전을 봤어요.', vi: 'Tôi ăn tối rồi xem ti vi.', romanization: 'jeo-nyeo-geul meok-kko tel-le-bi-jeo-neul bwa-sseo-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Phân biệt -고 (liệt kê trình tự đơn thuần) với -아/어서 (hành động sau là kết quả/mục đích của hành động trước, có liên hệ chặt chẽ).',
      'Hai vế phải cùng một chủ ngữ khi dùng -고 theo nghĩa trình tự thời gian.',
    ],
    level: 'so-cap',
    section: 'cau-truc-thoi-gian',
    sectionOrder: 3,
    sectionTitleVi: 'Cấu trúc thời gian',
    relatedPatterns: [
      { id: 'gr-so-cap-06', distinction: 'Đây là -고 nghĩa trình tự thời gian (không đảo được vế), khác với -고 liệt kê ngang hàng ở mục 6 (đảo được vế, hai vế bình đẳng).' },
      { id: 'gr-so-cap-13', distinction: '-고 chỉ liệt kê trình tự đơn thuần, còn -아/어서 nhấn mạnh hành động sau là kết quả/mục đích liên quan chặt chẽ với hành động trước.' },
    ],
  },
  {
    id: 'gr-so-cap-15',
    pattern: 'N 때, A/V - (으)ㄹ 때',
    meaningVi: 'Khi...',
    usageNotes:
      'Diễn tả thời điểm xảy ra một hành động hay trạng thái nào đó. Không dùng 때 trực tiếp sau các từ chỉ thời gian như 아침, 오전, 오후, 주말 hay tên các thứ trong tuần — với những từ này chỉ cần thêm trợ từ 에.',
    examples: [
      { ko: '저는 집에 혼자 있을 때 책을 읽어요.', vi: 'Khi ở nhà một mình tôi thường đọc sách.', romanization: 'jeo-neun ji-be hon-ja i-sseul ttae chae-geul il-geo-yo', register: 'polite' },
      { ko: '방학 때 고향에 갈 거예요.', vi: 'Vào kỳ nghỉ tôi sẽ về quê.', romanization: 'bang-hak ttae go-hyang-e gal geo-ye-yo', register: 'polite' },
      { ko: '심심할 때마다 한국 음악을 들어요.', vi: 'Mỗi khi buồn chán tôi đều nghe nhạc Hàn Quốc.', romanization: 'sim-sim-hal ttae-ma-da han-gu-geum-a-geul deu-reo-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Không nói "아침 때", "주말 때" — với các mốc thời gian cố định như buổi sáng, cuối tuần chỉ cần thêm 에.',
      'Phân biệt N 때 (dùng trực tiếp sau danh từ) với A/V-(으)ㄹ 때 (dùng sau động từ/tính từ).',
    ],
    level: 'so-cap',
    section: 'cau-truc-thoi-gian',
    sectionOrder: 3,
    sectionTitleVi: 'Cấu trúc thời gian',
    conjugationTable: [
      { stemType: 'Quy tắc (phụ âm cuối)', baseForm: '먹다', conjugated: '먹을 때' },
      { stemType: 'Quy tắc (nguyên âm cuối)', baseForm: '가다', conjugated: '갈 때' },
      { stemType: 'ㅂ bất quy tắc', baseForm: '춥다', conjugated: '추울 때' },
      { stemType: 'ㄷ bất quy tắc', baseForm: '듣다', conjugated: '들을 때' },
      { stemType: 'ㄹ 받침 (lược ㄹ)', baseForm: '힘들다', conjugated: '힘들 때' },
    ],
  },
  {
    id: 'gr-so-cap-16',
    pattern: 'A/V - (으)면서',
    meaningVi: 'Vừa... vừa... — hai hành động/trạng thái diễn ra đồng thời, cùng chủ ngữ',
    usageNotes:
      'Diễn tả hai hành động hoặc trạng thái xảy ra đồng thời, do cùng một chủ ngữ thực hiện. Động từ đứng trước -(으)면서 phải giữ nguyên thể, không chia thì; cũng có thể dùng với tính từ để so sánh hai trạng thái song song, và có thể thay bằng dạng văn viết -(으)며.',
    examples: [
      { ko: '그 사람이 울면서 말했어요.', vi: 'Người đó vừa khóc vừa nói.', romanization: 'geu sa-ra-mi ul-myeon-seo mal-hae-sseo-yo', register: 'polite' },
      { ko: '운전하면서 핸드폰을 보지 마세요. 정말 위험하니까요.', vi: 'Đừng vừa lái xe vừa nhìn điện thoại, rất nguy hiểm đấy.', romanization: 'un-jeon-ha-myeon-seo haen-deu-po-neul bo-ji ma-se-yo. jeong-mal wi-heom-ha-ni-kka-yo', register: 'polite' },
      { ko: '흐엉 씨는 똑똑하면서 예뻐요.', vi: 'Hương vừa thông minh vừa xinh đẹp.', romanization: 'heu-eong ssi-neun ttok-tto-ka-myeon-seo ye-ppeo-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Hai hành động trong -(으)면서 phải cùng một chủ ngữ, khác với -는 동안 có thể dùng cho hai chủ ngữ khác nhau.',
      'Không chia thì trước -(으)면서, luôn giữ động từ/tính từ ở dạng nguyên thể.',
    ],
    level: 'so-cap',
    section: 'cau-truc-thoi-gian',
    sectionOrder: 3,
    sectionTitleVi: 'Cấu trúc thời gian',
    conjugationTable: [
      { stemType: 'Quy tắc (phụ âm cuối)', baseForm: '먹다', conjugated: '먹으면서' },
      { stemType: 'Quy tắc (nguyên âm cuối)', baseForm: '가다', conjugated: '가면서' },
      { stemType: 'ㅂ bất quy tắc', baseForm: '춥다', conjugated: '추우면서' },
      { stemType: 'ㄷ bất quy tắc', baseForm: '듣다', conjugated: '들으면서' },
      { stemType: 'ㄹ 받침 (không thêm 으)', baseForm: '살다', conjugated: '살면서' },
    ],
    relatedPatterns: [
      { id: 'gr-so-cap-19', distinction: '-(으)면서 đòi hỏi hai hành động đồng thời phải cùng một chủ ngữ, còn -는 동안 có thể dùng khi hai vế có chủ ngữ khác nhau.' },
    ],
  },
  {
    id: 'gr-so-cap-17',
    pattern: 'N 중, V - 는 중',
    meaningVi: 'Đang..., đang trong quá trình...',
    usageNotes:
      'Diễn tả một hành động đang trong quá trình thực hiện, không dùng để diễn tả các hiện tượng tự nhiên. Có thể dùng ở dạng ~ 중에, và có nhiều cụm từ cố định thông dụng như 회의 중, 수업 중, 공사 중, 출장 중, 외출 중.',
    examples: [
      { ko: '이사할 거예요. 그래서 집을 찾는 중이에요.', vi: 'Tôi sắp chuyển nhà nên đang tìm nhà.', romanization: 'i-sa-hal geo-ye-yo. geu-rae-seo ji-beul chan-neun jung-i-e-yo', register: 'polite' },
      { ko: '지금 수업 중이니까 나중에 전화하세요.', vi: 'Bây giờ tôi đang trong giờ học nên lát nữa hãy gọi lại.', romanization: 'ji-geum su-eop jung-i-ni-kka na-jung-e jeon-hwa-ha-se-yo', register: 'polite' },
      { ko: '학교에 가는 중에 친구를 만났어요.', vi: 'Trên đường đến trường tôi đã gặp bạn.', romanization: 'hak-kkyo-e ga-neun jung-e chin-gu-reul man-na-sseo-yo', register: 'polite' },
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
      { ko: '어제는 피곤해서 침대에 눕자마자 잠이 들었어요.', vi: 'Hôm qua vì mệt nên tôi vừa nằm xuống giường là ngủ ngay.', romanization: 'eo-je-neun pi-gon-hae-seo chim-dae-e nup-jja-ma-ja ja-mi deu-reo-sseo-yo', register: 'polite' },
      { ko: '집에서 나가자마자 비가 오기 시작했어요.', vi: 'Tôi vừa ra khỏi nhà thì trời bắt đầu mưa.', romanization: 'ji-be-seo na-ga-ja-ma-ja bi-ga o-gi si-ja-kae-sseo-yo', register: 'polite' },
      { ko: '수업이 끝나자마자 학생들이 교실을 나갔어요.', vi: 'Tiết học vừa kết thúc là học sinh đã ra khỏi lớp ngay.', romanization: 'su-eo-bi kkeun-na-ja-ma-ja hak-ssaeng-deu-ri gyo-si-reul na-ga-sseo-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Vế trước -자마자 luôn ở dạng nguyên thể, không chia thì; thì được thể hiện ở vế sau.',
      'Nhấn mạnh tính tức thời gần như không có khoảng cách, khác với -(으)ㄴ 후에 chỉ đơn thuần diễn tả trình tự trước sau.',
    ],
    level: 'so-cap',
    section: 'cau-truc-thoi-gian',
    sectionOrder: 3,
    sectionTitleVi: 'Cấu trúc thời gian',
    relatedPatterns: [
      { id: 'gr-so-cap-11', distinction: '-자마자 nhấn mạnh tính tức thời, gần như không có khoảng cách thời gian giữa hai hành động, còn -(으)ㄴ 후에 chỉ đơn thuần diễn tả trình tự trước sau.' },
    ],
  },
  {
    id: 'gr-so-cap-19',
    pattern: 'N 동안, V - 는 동안',
    meaningVi: 'Trong lúc..., trong khi... — hai vế có thể khác chủ ngữ',
    usageNotes:
      'Diễn tả khoảng thời gian mà một hành động hay trạng thái được duy trì, có thể mô tả hai quá trình diễn ra song song. Chủ ngữ của hai vế không nhất thiết phải giống nhau, và có thể dùng với 있다/없다.',
    examples: [
      { ko: '나는 방학 동안 고향에 다녀올 거예요.', vi: 'Trong kỳ nghỉ tôi sẽ về quê một chuyến.', romanization: 'na-neun bang-hak dong-an go-hyang-e da-nyeo-ol geo-ye-yo', register: 'polite' },
      { ko: '내가 음식을 만드는 동안 동생은 잤어요.', vi: 'Trong lúc tôi nấu ăn thì em tôi ngủ.', romanization: 'nae-ga eum-si-geul man-deu-neun dong-an dong-saeng-eun ja-sseo-yo', register: 'polite' },
      { ko: '한국에 사는 동안 한국 친구를 많이 사귀었어요.', vi: 'Trong thời gian sống ở Hàn Quốc tôi đã kết bạn với nhiều người Hàn.', romanization: 'han-gu-ge sa-neun dong-an han-guk chin-gu-reul ma-ni sa-gwi-eo-sseo-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Khác với -(으)면서 (đòi hỏi cùng chủ ngữ), -는 동안 có thể dùng khi hai vế có chủ ngữ khác nhau.',
      'N 동안 dùng trực tiếp sau danh từ chỉ khoảng thời gian, còn V-는 동안 dùng sau động từ.',
    ],
    level: 'so-cap',
    section: 'cau-truc-thoi-gian',
    sectionOrder: 3,
    sectionTitleVi: 'Cấu trúc thời gian',
    relatedPatterns: [
      { id: 'gr-so-cap-16', distinction: '-는 동안 có thể dùng khi hai vế có chủ ngữ khác nhau, khác với -(으)면서 đòi hỏi cùng một chủ ngữ cho cả hai hành động.' },
    ],
  },
  {
    id: 'gr-so-cap-20',
    pattern: 'V - (으)ㄴ 지',
    meaningVi: 'Đã được bao lâu kể từ khi...',
    usageNotes:
      'Diễn tả khoảng thời gian đã trôi qua kể từ khi một hành động nào đó xảy ra. Cấu trúc đầy đủ là V-(으)ㄴ 지 + khoảng thời gian + 되다/안 되다/지나다/넘다, trong đó 얼마 안 되다 nghĩa là chưa được bao lâu còn 오래 되다 nghĩa là đã lâu rồi.',
    examples: [
      { ko: '한국어를 공부한 지 얼마나 됐어요?', vi: 'Bạn học tiếng Hàn được bao lâu rồi?', romanization: 'han-gu-geo-reul gong-bu-han ji eol-ma-na dwae-sseo-yo', register: 'polite' },
      { ko: '여기 산 지 6개월 됐어요.', vi: 'Tôi sống ở đây được 6 tháng rồi.', romanization: 'yeo-gi san ji yuk-gae-wol dwae-sseo-yo', register: 'polite' },
      { ko: '남자 친구와 헤어진 지 오래 되었어요.', vi: 'Tôi chia tay bạn trai đã lâu rồi.', romanization: 'nam-ja chin-gu-wa he-eo-jin ji o-rae doe-eo-sseo-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Động từ trước -(으)ㄴ 지 luôn chia ở dạng quá khứ dù ý nghĩa là "kể từ khi", không dùng dạng hiện tại.',
      'Không nhầm với V-(으)ㄴ 후에 (sau khi) — -(으)ㄴ 지 luôn đi kèm khoảng thời gian cụ thể cộng với 되다/지나다.',
    ],
    level: 'so-cap',
    section: 'cau-truc-thoi-gian',
    sectionOrder: 3,
    sectionTitleVi: 'Cấu trúc thời gian',
    conjugationTable: [
      { stemType: 'Quy tắc (phụ âm cuối)', baseForm: '먹다', conjugated: '먹은 지' },
      { stemType: 'Quy tắc (nguyên âm cuối)', baseForm: '가다', conjugated: '간 지' },
      { stemType: 'ㄷ bất quy tắc', baseForm: '듣다', conjugated: '들은 지' },
      { stemType: 'ㄹ 받침 (lược ㄹ)', baseForm: '살다', conjugated: '산 지' },
    ],
    relatedPatterns: [
      { id: 'gr-so-cap-11', distinction: '-(으)ㄴ 지 luôn đi kèm khoảng thời gian cụ thể cộng với 되다/지나다, khác với V-(으)ㄴ 후에 chỉ đơn thuần nêu trình tự "sau khi".' },
    ],
  },
  {
    id: 'gr-so-cap-21',
    pattern: 'V – 다가',
    meaningVi: 'Đang... thì... — hành động bị ngắt quãng hoặc chuyển hướng đột ngột',
    usageNotes:
      'Diễn tả người nói đang thực hiện một hành động thì đột nhiên dừng lại để chuyển sang hành động khác; cũng dùng được với tính từ để diễn tả trạng thái đột ngột thay đổi. Chủ ngữ ở hai vế phải giống nhau, có thể tỉnh lược -다가 thành -다. Khi kết hợp với thì quá khứ ở vế trước (dạng -았/었/였다가), cấu trúc diễn tả hành động vế trước đã hoàn thành trước khi chuyển sang hành động khác, chứ không phải bị ngắt giữa chừng.',
    examples: [
      { ko: '영화를 보다가 울었어요.', vi: 'Đang xem phim thì tôi bật khóc.', romanization: 'yeong-hwa-reul bo-da-ga u-reo-sseo-yo', register: 'polite' },
      { ko: '숙제를 하다가 잤어요.', vi: 'Đang làm bài tập thì tôi ngủ quên.', romanization: 'suk-jje-reul ha-da-ga ja-sseo-yo', register: 'polite' },
      { ko: '옷을 입었다가 벗었어요.', vi: 'Tôi mặc quần áo vào rồi lại cởi ra.', romanization: 'o-seul i-beot-tta-ga beo-seo-sseo-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Phân biệt -다가 (hành động bị ngắt giữa chừng) với -았/었다가 (hành động trước đã hoàn thành xong rồi mới chuyển sang hành động khác).',
      'Hai vế phải cùng một chủ ngữ, khác với -는 동안 hay -자마자 có thể khác chủ ngữ.',
    ],
    level: 'so-cap',
    section: 'cau-truc-thoi-gian',
    sectionOrder: 3,
    sectionTitleVi: 'Cấu trúc thời gian',
    relatedPatterns: [
      { id: 'gr-so-cap-19', distinction: '-다가 đòi hỏi hai vế cùng một chủ ngữ, khác với -는 동안 có thể dùng khi hai vế khác chủ ngữ.' },
      { id: 'gr-so-cap-18', distinction: '-다가 đòi hỏi hai vế cùng một chủ ngữ, khác với -자마자 có thể khác chủ ngữ giữa hai vế.' },
    ],
  },
  {
    id: 'gr-so-cap-22',
    pattern: 'V – 는 길이다/ 는 길에',
    meaningVi: 'Đang trên đường... — chỉ dùng với động từ chỉ sự di chuyển',
    usageNotes:
      'Dùng khi người nói thực hiện một hành động nào đó trong lúc đang di chuyển đến một nơi khác; có thể dùng dưới dạng kết thúc câu -는 길이다. Chỉ kết hợp được với các động từ mang nghĩa di chuyển như 가다/오다, 나가다/나오다, 들어가다/들어오다, 돌아가다/돌아오다, 올라가다/올라오다, 내려가다/내려오다, 출근하다/퇴근하다.',
    examples: [
      { ko: '퇴근하는 길에 지하철에서 갑자기 친구를 만났어요.', vi: 'Trên đường tan làm về tôi bất ngờ gặp bạn ở tàu điện ngầm.', romanization: 'toe-geun-ha-neun gi-re ji-ha-cheo-re-seo gap-jja-gi chin-gu-reul man-na-sseo-yo', register: 'polite' },
      { ko: '가: 어디 가는 길이에요? 나: 네, 친구 만나러 가는 길이에요.', vi: 'A: Bạn đang trên đường đi đâu vậy? B: Tôi đang trên đường đi gặp bạn.', romanization: 'ga: eo-di ga-neun gi-ri-e-yo? na: ne, chin-gu man-na-reo ga-neun gi-ri-e-yo', register: 'polite' },
      { ko: '학교에 가는 길에 편의점에 들렀어요.', vi: 'Trên đường đến trường tôi đã ghé qua cửa hàng tiện lợi.', romanization: 'hak-kkyo-e ga-neun gi-re pyeo-nui-jeo-me deul-leo-sseo-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Chỉ kết hợp được với động từ chỉ sự di chuyển, không dùng được với các động từ hành động khác như -는 도중에 vốn dùng rộng hơn.',
      'Với các động từ hành động khác, muốn diễn đạt ý tương tự phải chuyển thành động từ chuyển động qua cấu trúc V+(으)러 가다/오다.',
    ],
    level: 'so-cap',
    section: 'cau-truc-thoi-gian',
    sectionOrder: 3,
    sectionTitleVi: 'Cấu trúc thời gian',
    relatedPatterns: [
      { id: 'gr-so-cap-40', distinction: '-는 길에 chỉ dùng được với động từ di chuyển; với các động từ hành động khác, phải chuyển sang cấu trúc V+(으)러 가다/오다 để diễn đạt mục đích tương tự.' },
    ],
  },
  {
    id: 'gr-so-cap-23',
    pattern: 'A/V - (으)ㄹ 수 있다/ 없다.',
    meaningVi: 'Có thể..., không thể... — năng lực hoặc khả năng xảy ra',
    usageNotes:
      'Diễn tả việc có năng lực làm một việc nào đó, hoặc diễn tả một sự việc nào đó có khả năng xảy ra trên thực tế.',
    examples: [
      { ko: '저는 피아노를 칠 수 있어요.', vi: 'Tôi có thể chơi đàn piano.', romanization: 'jeo-neun pi-a-no-reul chil su i-sseo-yo', register: 'polite' },
      { ko: '내일 비가 올 수 있어요.', vi: 'Ngày mai có thể sẽ mưa.', romanization: 'nae-il bi-ga ol su i-sseo-yo', register: 'polite' },
      { ko: '저는 요리할 수 없어요.', vi: 'Tôi không thể nấu ăn được.', romanization: 'jeo-neun yo-ri-hal su eop-sseo-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Có hai nét nghĩa cần phân biệt theo ngữ cảnh: năng lực bản thân (chơi được đàn) và khả năng xảy ra khách quan (có thể sẽ mưa) — người học dễ chỉ nhớ nghĩa năng lực.',
      'Không nhầm với -(으)ㄹ 줄 알다/모르다 (mục 24), vốn chỉ diễn tả việc biết hay không biết cách làm.',
    ],
    level: 'so-cap',
    section: 'nang-luc-va-kha-nang',
    sectionOrder: 4,
    sectionTitleVi: 'Năng lực và khả năng',
    conjugationTable: [
      { stemType: 'Quy tắc (phụ âm cuối)', baseForm: '먹다', conjugated: '먹을 수 있다' },
      { stemType: 'Quy tắc (nguyên âm cuối)', baseForm: '가다', conjugated: '갈 수 있다' },
      { stemType: 'ㅂ bất quy tắc', baseForm: '춥다', conjugated: '추울 수 있다' },
      { stemType: 'ㄷ bất quy tắc', baseForm: '듣다', conjugated: '들을 수 있다' },
      { stemType: 'ㄹ 받침 (lược ㄹ)', baseForm: '놀다', conjugated: '놀 수 있다' },
    ],
    relatedPatterns: [
      { id: 'gr-so-cap-24', distinction: '-(으)ㄹ 수 있다/없다 diễn tả cả năng lực lẫn khả năng khách quan xảy ra và việc được/không được phép làm, còn -(으)ㄹ 줄 알다/모르다 chỉ nói về việc biết hay không biết CÁCH làm.' },
    ],
  },
  {
    id: 'gr-so-cap-24',
    pattern: 'V - (으)ㄹ 줄 알다/ 모르다.',
    meaningVi: 'Biết cách..., không biết cách...',
    usageNotes:
      'Thể hiện chủ thể có biết phương pháp, cách thức để làm một việc gì đó hay không, nói cách khác là có hay không có kỹ năng thực hiện việc đó.',
    examples: [
      { ko: '저는 한국에 처음 올 때 한국말을 할 줄 몰랐어요.', vi: 'Khi mới đến Hàn Quốc tôi không biết nói tiếng Hàn.', romanization: 'jeo-neun han-gu-ge cheo-eum ol ttae han-gung-ma-reul hal jul mol-la-sseo-yo', register: 'polite' },
      { ko: '저는 운전을 할 줄 몰라요.', vi: 'Tôi không biết lái xe.', romanization: 'jeo-neun un-jeo-neul hal jul mol-la-yo', register: 'polite' },
      { ko: '요리할 줄 알아요?', vi: 'Bạn có biết nấu ăn không?', romanization: 'yo-ri-hal jul a-ra-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Phân biệt với -(으)ㄹ 수 있다/없다: -(으)ㄹ 줄 알다/모르다 chỉ nói về việc biết cách làm, không dùng để diễn tả khả năng xảy ra hay việc được phép làm.',
      '-(으)ㄹ 수 있다/없다 còn dùng để diễn tả tình huống cho phép hay không cho phép, trong khi -(으)ㄹ 줄 알다/모르다 không mang nghĩa này.',
    ],
    level: 'so-cap',
    section: 'nang-luc-va-kha-nang',
    sectionOrder: 4,
    sectionTitleVi: 'Năng lực và khả năng',
    conjugationTable: [
      { stemType: 'Quy tắc (phụ âm cuối)', baseForm: '먹다', conjugated: '먹을 줄 알다' },
      { stemType: 'Quy tắc (nguyên âm cuối)', baseForm: '하다', conjugated: '할 줄 알다' },
      { stemType: 'ㅂ bất quy tắc', baseForm: '굽다', conjugated: '구울 줄 알다' },
      { stemType: 'ㄹ 받침 (lược ㄹ)', baseForm: '만들다', conjugated: '만들 줄 알다' },
    ],
    relatedPatterns: [
      { id: 'gr-so-cap-23', distinction: '-(으)ㄹ 줄 알다/모르다 chỉ nói về việc biết hay không biết CÁCH làm, còn -(으)ㄹ 수 있다/없다 còn diễn tả khả năng khách quan xảy ra và việc được/không được phép làm.' },
    ],
  },
  {
    id: 'gr-so-cap-25',
    pattern: 'V - (으)세요.',
    meaningVi: 'Hãy..., xin hãy... — câu mệnh lệnh lịch sự',
    usageNotes:
      'Dùng để yêu cầu người nghe làm gì một cách lịch sự, là câu mệnh lệnh lịch sự; dạng tôn kính hơn là -(으)십시오. Một số động từ có dạng đặc biệt khi chia với -(으)세요: 먹다/마시다 → 드세요, 자다 → 주무세요, 있다 → 계세요, 주다 → 주세요/드리세요. Một số tính từ kết thúc bằng 하다 như 건강하다, 행복하다 cũng có thể dùng cố định với -(으)세요 trong lời chúc.',
    examples: [
      { ko: '민규 씨, 결혼 축하해요. 행복하세요.', vi: 'Min-gyu ơi, chúc mừng đám cưới. Chúc bạn hạnh phúc nhé.', romanization: 'min-gyu ssi, gyeol-hon chu-ka-hae-yo. haeng-bok-ha-se-yo', register: 'polite' },
      { ko: '여기 앉으세요.', vi: 'Mời anh/chị ngồi đây.', romanization: 'yeo-gi an-jeu-se-yo', register: 'polite' },
      { ko: '조용히 하십시오.', vi: 'Xin hãy giữ trật tự.', romanization: 'jo-yong-hi ha-sip-ssi-o', register: 'formal' },
    ],
    commonMistakes: [
      'Với các động từ 먹다, 마시다, 있다, 주다 phải dùng dạng đặc biệt (드세요, 계세요...), không được chia máy móc theo quy tắc thông thường.',
      '-(으)십시오 trang trọng hơn -(으)세요, thường dùng trong thông báo, hướng dẫn công cộng chứ ít dùng trong giao tiếp hàng ngày.',
    ],
    level: 'so-cap',
    section: 'yeu-cau-va-bon-phan-cho-phep-va-cam-doan',
    sectionOrder: 5,
    sectionTitleVi: 'Yêu cầu và bổn phận, Cho phép và cấm đoán',
    conjugationTable: [
      { stemType: 'Quy tắc (phụ âm cuối)', baseForm: '앉다', conjugated: '앉으세요' },
      { stemType: 'Quy tắc (nguyên âm cuối)', baseForm: '가다', conjugated: '가세요' },
      { stemType: 'Từ vựng đặc biệt', baseForm: '먹다/마시다', conjugated: '드세요' },
      { stemType: 'ㄷ bất quy tắc', baseForm: '듣다', conjugated: '들으세요' },
      { stemType: 'ㅅ bất quy tắc', baseForm: '짓다', conjugated: '지으세요' },
    ],
  },
  {
    id: 'gr-so-cap-26',
    pattern: 'V - 지 말다: 지 마세요. / 지 맙시다.',
    meaningVi: 'Đừng... — yêu cầu hoặc rủ rê không làm gì',
    usageNotes:
      'Dùng để yêu cầu, khuyên bảo người nghe không nên làm gì (dạng -지 마세요, kết hợp từ -지 말다 với -(으)세요), hoặc rủ rê người khác cùng đừng làm gì với mình (dạng -지 맙시다). Ở dạng thân mật (반말) là -지 마, tùy ngữ cảnh có thể mang nghĩa mệnh lệnh hoặc rủ rê; dạng tôn kính hơn là -지 마십시오.',
    examples: [
      { ko: '수업 시간에 자지 마세요.', vi: 'Đừng ngủ trong giờ học.', romanization: 'su-eop si-ga-ne ja-ji ma-se-yo', register: 'polite' },
      { ko: '살을 빼고 싶으면 피자를 먹지 마세요.', vi: 'Nếu muốn giảm cân thì đừng ăn pizza.', romanization: 'sa-reul ppae-go si-peu-myeon pi-ja-reul meok-jji ma-se-yo', register: 'polite' },
      { ko: '우리 담배를 피우지 맙시다.', vi: 'Chúng ta đừng hút thuốc nữa.', romanization: 'u-ri dam-bae-reul pi-u-ji map-ssi-da', register: 'formal' },
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
      { ko: '식사하기 전에 손을 씻어야 해요.', vi: 'Trước khi ăn phải rửa tay.', romanization: 'sik-sa-ha-gi jeo-ne so-neul ssi-seo-ya hae-yo', register: 'polite' },
      { ko: '오늘은 고향에 가야 해요.', vi: 'Hôm nay tôi phải về quê.', romanization: 'o-neu-reun go-hyang-e ga-ya hae-yo', register: 'polite' },
      { ko: '저녁에 숙제를 해야 돼요.', vi: 'Buổi tối tôi phải làm bài tập.', romanization: 'jeo-nyeo-ge suk-jje-reul hae-ya dwae-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Trong văn viết trang trọng chỉ dùng -아/어야 하다, tránh dùng -아/어야 되다 vốn thiên về văn nói.',
      'Dạng quá khứ -았/었어야 하다 mang nghĩa tiếc nuối "lẽ ra phải làm" chứ không đơn thuần là "đã phải làm" — dễ bị hiểu nhầm.',
    ],
    level: 'so-cap',
    section: 'yeu-cau-va-bon-phan-cho-phep-va-cam-doan',
    sectionOrder: 5,
    sectionTitleVi: 'Yêu cầu và bổn phận, Cho phép và cấm đoán',
    conjugationTable: [
      { stemType: 'Quy tắc', baseForm: '먹다', conjugated: '먹어야 하다' },
      { stemType: 'ㅂ bất quy tắc', baseForm: '춥다', conjugated: '추워야 하다' },
      { stemType: '르 bất quy tắc', baseForm: '다르다', conjugated: '달라야 하다' },
      { stemType: 'ㅅ bất quy tắc', baseForm: '짓다', conjugated: '지어야 하다' },
    ],
  },
  {
    id: 'gr-so-cap-28',
    pattern: 'A V - 아/어도 되다.',
    meaningVi: 'Được phép... — xin phép và cho phép',
    usageNotes:
      'Diễn tả sự cho phép hay chấp thuận thực hiện một hành động. Khi hỏi xin phép bằng -아/어도 되다, nếu đồng ý thì đáp lại cũng bằng -아/어도 되다, còn nếu từ chối thì dùng -(으)면 안 되다 chứ không dùng -아/어도 안 되다. Có thể thay thế bằng -아/어도 괜찮다 hoặc -아/어도 좋다 với nghĩa tương tự.',
    examples: [
      { ko: '에어컨을 켜도 돼요? 네, 켜도 돼요.', vi: 'Tôi bật điều hòa được không? Vâng, được ạ.', romanization: 'e-eo-keo-neul kyeo-do dwae-yo? ne, kyeo-do dwae-yo', register: 'polite' },
      { ko: '기숙사에서 요리해도 돼요? 아니요, 하면 안 돼요.', vi: 'Nấu ăn trong ký túc xá được không? Không, không được đâu.', romanization: 'gi-suk-ssa-e-seo yo-ri-hae-do dwae-yo? a-ni-yo, ha-myeon an dwae-yo', register: 'polite' },
      { ko: '여기에서 사진을 찍어도 돼요?', vi: 'Ở đây chụp ảnh được không?', romanization: 'yeo-gi-e-seo sa-ji-neul jji-geo-do dwae-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Khi từ chối, không nói "아/어도 안 돼요" mà phải dùng cấu trúc -(으)면 안 되다.',
      '-아/어도 되다, -아/어도 괜찮다, -아/어도 좋다 có thể thay thế cho nhau, học viên hay chỉ nhớ mỗi -아/어도 되다.',
    ],
    level: 'so-cap',
    section: 'yeu-cau-va-bon-phan-cho-phep-va-cam-doan',
    sectionOrder: 5,
    sectionTitleVi: 'Yêu cầu và bổn phận, Cho phép và cấm đoán',
    conjugationTable: [
      { stemType: 'Quy tắc', baseForm: '먹다', conjugated: '먹어도 되다' },
      { stemType: 'ㅂ bất quy tắc', baseForm: '덥다', conjugated: '더워도 되다' },
      { stemType: 'ㅅ bất quy tắc', baseForm: '낫다', conjugated: '나아도 되다' },
      { stemType: '으 bất quy tắc (lược 으)', baseForm: '쓰다', conjugated: '써도 되다' },
    ],
    relatedPatterns: [
      { id: 'gr-so-cap-29', distinction: '-아/어도 되다 dùng khi cho phép; khi từ chối phải chuyển sang -(으)면 안 되다, không phủ định trực tiếp thành "아/어도 안 돼요".' },
    ],
  },
  {
    id: 'gr-so-cap-29',
    pattern: 'A/V - (으)면 안 되다.',
    meaningVi: 'Không được... — cấm đoán',
    usageNotes:
      'Dùng để cấm đoán, ngăn cản ai đó không được phép làm một việc gì đó. Dạng phủ định của cấu trúc này là -지 않으면 안 되다, mang nghĩa nhấn mạnh việc bắt buộc phải làm (tương đương "nếu không làm thì không được", tức là "phải làm").',
    examples: [
      { ko: '지금 길을 건너면 안 돼요.', vi: 'Bây giờ không được qua đường.', romanization: 'ji-geum gi-reul geon-neo-myeon an dwae-yo', register: 'polite' },
      { ko: '여기 앉으면 안 돼요.', vi: 'Không được ngồi ở đây.', romanization: 'yeo-gi an-jeu-myeon an dwae-yo', register: 'polite' },
      { ko: '수업 시간에 휴대폰을 사용하면 안 돼요.', vi: 'Không được dùng điện thoại trong giờ học.', romanization: 'su-eop si-ga-ne hyu-dae-po-neul sa-yong-ha-myeon an dwae-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Đừng nhầm dạng phủ định -지 않으면 안 되다 với nghĩa cấm đơn thuần — thực chất nó mang nghĩa "bắt buộc phải làm", một dạng nhấn mạnh nghĩa vụ.',
      'Phân biệt với -아/어도 되다: khi được phép dùng -아/어도 되다, còn khi cấm thì dùng -(으)면 안 되다, không trộn lẫn hai cấu trúc.',
    ],
    level: 'so-cap',
    section: 'yeu-cau-va-bon-phan-cho-phep-va-cam-doan',
    sectionOrder: 5,
    sectionTitleVi: 'Yêu cầu và bổn phận, Cho phép và cấm đoán',
    conjugationTable: [
      { stemType: 'Quy tắc (phụ âm cuối)', baseForm: '먹다', conjugated: '먹으면 안 되다' },
      { stemType: 'Quy tắc (nguyên âm cuối)', baseForm: '가다', conjugated: '가면 안 되다' },
      { stemType: 'ㅂ bất quy tắc', baseForm: '춥다', conjugated: '추우면 안 되다' },
      { stemType: 'ㄹ 받침 (không thêm 으)', baseForm: '살다', conjugated: '살면 안 되다' },
    ],
    relatedPatterns: [
      { id: 'gr-so-cap-28', distinction: 'Khi được phép dùng -아/어도 되다, còn khi cấm đoán thì dùng -(으)면 안 되다, không trộn lẫn hai cấu trúc.' },
    ],
  },
  {
    id: 'gr-so-cap-30',
    pattern: 'A/V – 지 않아도 되다. (안 A/V - 아 /어도 되다)',
    meaningVi: 'Không cần... cũng được — không bắt buộc',
    usageNotes:
      'Diễn tả việc không cần thiết phải thực hiện hành động nào đó; đây là dạng phủ định của -아/어야 되다/하다 (mục 27), nghĩa là thay vì "phải làm" thì chuyển thành "không cần làm".',
    examples: [
      { ko: '금요일에는 교복을 안 입어도 돼요.', vi: 'Thứ Sáu không cần mặc đồng phục cũng được.', romanization: 'geu-myo-i-re-neun gyo-bo-geul an i-beo-do dwae-yo', register: 'polite' },
      { ko: '평일이니까 영화 표를 미리 사지 않아도 돼요.', vi: 'Vì là ngày thường nên không cần mua vé xem phim trước.', romanization: 'pyeong-i-ri-ni-kka yeong-hwa pyo-reul mi-ri sa-ji a-na-do dwae-yo', register: 'polite' },
      { ko: '숙제를 하지 않아도 괜찮아요.', vi: 'Không làm bài tập cũng không sao.', romanization: 'suk-jje-reul ha-ji a-na-do gwaen-cha-na-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Không nhầm với -(으)면 안 되다 (mục 29, "không được làm") — -지 않아도 되다 nghĩa là "không bắt buộc phải làm" chứ không phải cấm.',
      'Có thể diễn đạt bằng cả hai dạng 안 A/V-아/어도 되다 và A/V-지 않아도 되다, ý nghĩa như nhau.',
    ],
    level: 'so-cap',
    section: 'yeu-cau-va-bon-phan-cho-phep-va-cam-doan',
    sectionOrder: 5,
    sectionTitleVi: 'Yêu cầu và bổn phận, Cho phép và cấm đoán',
    conjugationTable: [
      { stemType: 'Quy tắc (안 + 아/어도)', baseForm: '먹다', conjugated: '안 먹어도 되다' },
      { stemType: 'ㅂ bất quy tắc (안 + 아/어도)', baseForm: '춥다', conjugated: '안 추워도 되다' },
      { stemType: '르 bất quy tắc (안 + 아/어도)', baseForm: '다르다', conjugated: '안 달라도 되다' },
    ],
    relatedPatterns: [
      { id: 'gr-so-cap-27', distinction: '-지 않아도 되다 là dạng phủ định của -아/어야 되다/하다 (mục 27): thay vì "phải làm" thì chuyển thành "không cần làm".' },
      { id: 'gr-so-cap-29', distinction: '-지 않아도 되다 nghĩa là "không bắt buộc phải làm" (không cần), khác hẳn -(으)면 안 되다 (mục 29) nghĩa là "bị cấm, không được làm".' },
    ],
  },
  {
    id: 'gr-so-cap-31',
    pattern: 'A/V - (으)ㄹ까요?',
    meaningVi: 'Tôi làm... nhé?, chúng ta... nhé?, chắc là... nhỉ? — hỏi ý kiến, rủ rê hoặc suy đoán',
    usageNotes:
      'Cấu trúc này có ba cách dùng chính: (1) người nói hỏi ý kiến người nghe về việc mình định làm, chủ ngữ ngầm là 제가/내가; (2) người nói rủ người nghe cùng làm gì đó, chủ ngữ ngầm là 우리; (3) dùng để hỏi, suy nghĩ hay suy đoán về một đối tượng ở ngôi thứ ba.',
    examples: [
      { ko: '저는 어디에 앉을까요?', vi: 'Tôi ngồi ở đâu nhỉ?', romanization: 'jeo-neun eo-di-e an-jeul-kka-yo', register: 'polite' },
      { ko: '오늘 저녁에 우리 같이 먹을까요?', vi: 'Tối nay chúng ta cùng ăn nhé?', romanization: 'o-neul jeo-nyeo-ge u-ri ga-chi meo-geul-kka-yo', register: 'polite' },
      { ko: '요즘 꽃이 비쌀까요?', vi: 'Dạo này hoa có đắt không nhỉ?', romanization: 'yo-jeum kko-chi bi-ssal-kka-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Cần phân biệt ba nghĩa dựa vào chủ ngữ ngầm: ngôi thứ nhất (hỏi ý kiến), 우리 (rủ rê), hay ngôi thứ ba (suy đoán) — người học hay dịch máy móc thành một nghĩa duy nhất.',
      'Không nhầm với -(으)ㄹ래요? (mục 34): -(으)ㄹ까요? thiên về hỏi ý kiến/gợi ý, còn -(으)ㄹ래요? thiên về hỏi ý định cá nhân.',
    ],
    level: 'so-cap',
    section: 'hoi-y-kien-va-goi-y',
    sectionOrder: 6,
    sectionTitleVi: 'Hỏi ý kiến và gợi ý',
    conjugationTable: [
      { stemType: 'Quy tắc (phụ âm cuối)', baseForm: '먹다', conjugated: '먹을까요' },
      { stemType: 'Quy tắc (nguyên âm cuối)', baseForm: '가다', conjugated: '갈까요' },
      { stemType: 'ㅂ bất quy tắc', baseForm: '춥다', conjugated: '추울까요' },
      { stemType: 'ㄹ 받침 (lược ㄹ)', baseForm: '놀다', conjugated: '놀까요' },
    ],
    relatedPatterns: [
      { id: 'gr-so-cap-34', distinction: '-(으)ㄹ까요? thiên về hỏi ý kiến/gợi ý chung, còn -(으)ㄹ래요? hỏi ý định cá nhân rõ ràng hơn.' },
    ],
  },
  {
    id: 'gr-so-cap-32',
    pattern: 'V - (으) ㅂ시다.',
    meaningVi: 'Hãy cùng..., chúng ta cùng... — câu cầu khiến',
    usageNotes:
      'Dùng để gợi ý hay đề nghị người nghe cùng làm gì, là câu cầu khiến; -아/어요 kèm 함께/같이 cũng có thể mang nghĩa cầu khiến tương tự. Thường dùng khi người nói gợi ý cho cả một tập thể, hoặc khi người nghe nhỏ tuổi hơn hay có địa vị thấp hơn — không nên dùng với người lớn tuổi hoặc có địa vị cao hơn mình. Khi muốn đề nghị đừng làm gì thì dùng -지 맙시다 hoặc -지 마요.',
    examples: [
      { ko: '지하철을 탑시다.', vi: 'Chúng ta đi tàu điện ngầm nhé.', romanization: 'ji-ha-cheo-reul tap-ssi-da', register: 'formal' },
      { ko: '김치를 만듭시다.', vi: 'Chúng ta cùng làm kim chi nhé.', romanization: 'gim-chi-reul man-deup-ssi-da', register: 'formal' },
      { ko: '우리 같이 비빔밥 먹읍시다.', vi: 'Chúng ta cùng ăn bibimbap nhé.', romanization: 'u-ri ga-chi bi-bim-bap meo-geup-ssi-da', register: 'formal' },
    ],
    commonMistakes: [
      'Không dùng -(으)ㅂ시다 với người lớn tuổi hơn hoặc cấp trên vì nghe có vẻ thiếu tôn trọng — nên dùng -(으)실래요? hoặc -는 게 어때요? thay thế.',
      'Khi muốn đề nghị "đừng làm", dùng -지 맙시다 chứ không phải ghép "안" vào trước -읍시다.',
    ],
    level: 'so-cap',
    section: 'hoi-y-kien-va-goi-y',
    sectionOrder: 6,
    sectionTitleVi: 'Hỏi ý kiến và gợi ý',
    conjugationTable: [
      { stemType: 'Quy tắc (phụ âm cuối)', baseForm: '먹다', conjugated: '먹읍시다' },
      { stemType: 'Quy tắc (nguyên âm cuối)', baseForm: '가다', conjugated: '갑시다' },
      { stemType: 'ㅂ bất quy tắc', baseForm: '돕다', conjugated: '도웁시다' },
      { stemType: 'ㄹ 받침 (lược ㄹ)', baseForm: '놀다', conjugated: '놉시다' },
    ],
  },
  {
    id: 'gr-so-cap-33',
    pattern: 'V - (으) 시겠어요?',
    meaningVi: 'Anh/chị sẽ... chứ ạ? — hỏi ý kiến lịch sự, trang trọng',
    usageNotes:
      'Dùng để gợi ý hoặc hỏi ý kiến, dự định của người nghe một cách lịch sự và trang trọng; lịch sự và trang trọng hơn -(으)ㄹ래요?/-(으)실래요?, thường dùng trong giao tiếp với khách hàng, người lớn tuổi hoặc trong hoàn cảnh trang trọng.',
    examples: [
      { ko: '내일 몇 시에 오시겠어요?', vi: 'Ngày mai anh/chị sẽ đến lúc mấy giờ ạ?', romanization: 'nae-il myeot-ssi-e o-si-ge-sseo-yo', register: 'polite' },
      { ko: '커피에 설탕을 넣으시겠어요?', vi: 'Anh/chị có muốn cho đường vào cà phê không ạ?', romanization: 'keo-pi-e seol-tang-eul neo-eu-si-ge-sseo-yo', register: 'polite' },
      { ko: '여기에 앉으시겠어요?', vi: 'Mời anh/chị ngồi đây được không ạ?', romanization: 'yeo-gi-e an-jeu-si-ge-sseo-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Đây là dạng lịch sự/trang trọng nhất trong nhóm hỏi ý kiến, không nên dùng với bạn bè thân thiết vì nghe quá xa cách.',
      'Không nhầm với -(으)세요 (mệnh lệnh lịch sự): -(으)시겠어요? là câu hỏi ý kiến, còn -(으)세요 là yêu cầu trực tiếp.',
    ],
    level: 'so-cap',
    section: 'hoi-y-kien-va-goi-y',
    sectionOrder: 6,
    sectionTitleVi: 'Hỏi ý kiến và gợi ý',
    conjugationTable: [
      { stemType: 'Quy tắc (phụ âm cuối)', baseForm: '먹다', conjugated: '먹으시겠어요' },
      { stemType: 'Quy tắc (nguyên âm cuối)', baseForm: '가다', conjugated: '가시겠어요' },
      { stemType: 'ㅂ bất quy tắc', baseForm: '춥다', conjugated: '추우시겠어요' },
      { stemType: 'ㄷ bất quy tắc', baseForm: '듣다', conjugated: '들으시겠어요' },
    ],
    relatedPatterns: [
      { id: 'gr-so-cap-25', distinction: '-(으)시겠어요? là câu hỏi ý kiến một cách trang trọng, còn -(으)세요 là yêu cầu/mệnh lệnh lịch sự trực tiếp.' },
      { id: 'gr-so-cap-34', distinction: '-(으)시겠어요? lịch sự và trang trọng hơn -(으)ㄹ래요?/-(으)실래요?, phù hợp khi nói với khách hàng, người lớn tuổi hoặc trong hoàn cảnh trang trọng.' },
    ],
  },
  {
    id: 'gr-so-cap-34',
    pattern: 'V - (으)ㄹ래요?',
    meaningVi: 'Bạn sẽ...?, tôi sẽ..., cùng... nhé? — hỏi ý định hoặc đề nghị nhẹ nhàng',
    usageNotes:
      'Có hai cách dùng: hỏi ý định của người nghe, hoặc đề nghị người nghe một cách nhẹ nhàng mang tính cầu khiến; thường dùng trong văn nói giữa bạn bè thân thiết. Có thể dùng dạng phủ định -지 않을래요?/안 -(으)ㄹ래요? với ý nghĩa tương đương dạng khẳng định. Nếu muốn thể hiện sự tôn kính với người có quan hệ thân mật thì dùng -(으)실래요?. Khi đáp lại, có thể trả lời bằng chính -(으)ㄹ래요 hoặc -(으)ㄹ게요.',
    examples: [
      { ko: '가: 선미 씨는 뭐 먹을래요? 나: 저는 갈비탕을 먹을래요.', vi: 'A: Seon-mi định ăn gì? B: Tôi sẽ ăn canh sườn.', romanization: 'ga: seon-mi ssi-neun mwo meo-geul-lae-yo? na: jeo-neun gal-bi-tang-eul meo-geul-lae-yo', register: 'polite' },
      { ko: '가: 유키 씨, 우리 시험 끝나고 뭐 할래요? 나: 영화 볼까요?', vi: 'A: Yuki ơi, thi xong chúng mình làm gì nhỉ? B: Đi xem phim nhé?', romanization: 'ga: yu-ki ssi, u-ri si-heom kkeun-na-go mwo hal-lae-yo? na: yeong-hwa bol-kka-yo', register: 'polite' },
      { ko: '저는 집에 있을래요.', vi: 'Tôi sẽ ở nhà.', romanization: 'jeo-neun ji-be i-sseul-lae-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Chỉ dùng trong văn nói thân mật, không dùng trong hoàn cảnh trang trọng — muốn lịch sự hơn thì thêm -(으)실래요?.',
      'Phân biệt với -(으)ㄹ까요?: -(으)ㄹ래요? hỏi ý định cá nhân rõ ràng hơn, còn -(으)ㄹ까요? thiên về hỏi ý kiến/gợi ý chung.',
    ],
    level: 'so-cap',
    section: 'hoi-y-kien-va-goi-y',
    sectionOrder: 6,
    sectionTitleVi: 'Hỏi ý kiến và gợi ý',
    conjugationTable: [
      { stemType: 'Quy tắc (phụ âm cuối)', baseForm: '먹다', conjugated: '먹을래요' },
      { stemType: 'Quy tắc (nguyên âm cuối)', baseForm: '가다', conjugated: '갈래요' },
      { stemType: 'ㅂ bất quy tắc', baseForm: '눕다', conjugated: '누울래요' },
      { stemType: 'ㄹ 받침 (lược ㄹ)', baseForm: '놀다', conjugated: '놀래요' },
    ],
    relatedPatterns: [
      { id: 'gr-so-cap-31', distinction: '-(으)ㄹ래요? hỏi ý định cá nhân rõ ràng hơn, còn -(으)ㄹ까요? thiên về hỏi ý kiến/gợi ý chung.' },
    ],
  },
  {
    id: 'gr-so-cap-35',
    pattern: 'V - 고 싶다.',
    meaningVi: 'Muốn...',
    usageNotes:
      'Trong câu trần thuật thể hiện điều người nói muốn, trong câu nghi vấn dùng để hỏi điều người nghe muốn; khi nói về mong muốn của người thứ ba thì phải chuyển thành dạng -고 싶어 하다 dù ở câu hỏi hay câu trần thuật. Thì quá khứ là -고 싶었다, thì tương lai/phỏng đoán là -고 싶겠다 hoặc -고 싶을 것이다. Với tính từ, không dùng trực tiếp A-고 싶다 mà phải chuyển tính từ thành động từ bằng -아/어/여지다 rồi mới thêm -고 싶다. Riêng động từ 보고 싶다 khi chủ ngữ là 나(저)/우리 và mang nghĩa nhớ nhung thì danh từ đi kèm phải dùng trợ từ 이/가.',
    examples: [
      { ko: '저는 돌아가신 엄마가 보고 싶어요.', vi: 'Tôi nhớ mẹ đã mất của mình.', romanization: 'jeo-neun do-ra-ga-sin eom-ma-ga bo-go si-peo-yo', register: 'polite' },
      { ko: '예뻐지고 싶어요.', vi: 'Tôi muốn trở nên xinh đẹp hơn.', romanization: 'ye-ppeo-ji-go si-peo-yo', register: 'polite' },
      { ko: '흐엉 씨는 한국어를 배우고 싶어해요.', vi: 'Hương muốn học tiếng Hàn.', romanization: 'heu-eong ssi-neun han-gu-geo-reul bae-u-go si-peo-hae-yo', register: 'polite' },
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
      { ko: '내일 날씨가 좋으면 좋겠어요.', vi: 'Ước gì ngày mai trời đẹp.', romanization: 'nae-il nal-ssi-ga jo-eu-myeon jo-ke-sseo-yo', register: 'polite' },
      { ko: '부자였으면 좋겠어요.', vi: 'Ước gì tôi giàu có.', romanization: 'bu-ja-yeo-sseu-myeon jo-ke-sseo-yo', register: 'polite' },
      { ko: '친구가 많았으면 좋겠어요.', vi: 'Ước gì tôi có nhiều bạn bè.', romanization: 'chin-gu-ga ma-na-sseu-myeon jo-ke-sseo-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Dù có hình thức quá khứ (았/었) nhưng ý nghĩa lại hướng về hiện tại/tương lai — người học dễ hiểu nhầm là nói về việc trong quá khứ.',
      'Phân biệt với -(으)면 좋겠다: -았/었으면 좋겠다 nhấn mạnh điều mong ước khó xảy ra hơn, còn -(으)면 좋겠다 trung tính hơn.',
    ],
    level: 'so-cap',
    section: 'hi-vong-va-uoc-muon',
    sectionOrder: 7,
    sectionTitleVi: 'Hi vọng và ước muốn',
    conjugationTable: [
      { stemType: 'Quy tắc', baseForm: '먹다', conjugated: '먹었으면 좋겠다' },
      { stemType: 'ㅂ bất quy tắc', baseForm: '춥다', conjugated: '추웠으면 좋겠다' },
      { stemType: '르 bất quy tắc', baseForm: '다르다', conjugated: '달랐으면 좋겠다' },
      { stemType: 'ㅎ bất quy tắc', baseForm: '그렇다', conjugated: '그랬으면 좋겠다' },
    ],
  },
  {
    id: 'gr-so-cap-37',
    pattern: 'A/V – 기 바라다.',
    meaningVi: 'Hi vọng rằng... — trang trọng, dùng trong thông báo, lời chúc',
    usageNotes:
      'Diễn tả sự hi vọng vào điều gì đó, thường dùng trong văn viết mang tính thông báo trang trọng hoặc trong văn nói trang trọng, lời chúc. Ở dạng khẩu ngữ, người Hàn thường chia thành 바래요 dù chính tả chuẩn vẫn là 바라요.',
    examples: [
      { ko: '할아버지께서는 건강하시기 바랍니다.', vi: 'Kính chúc ông luôn mạnh khỏe.', romanization: 'ha-ra-beo-ji-kke-seo-neun geon-gang-ha-si-gi ba-ram-ni-da', register: 'formal' },
      { ko: '모두 제시간에 와 주시기 바랍니다.', vi: 'Mong mọi người đến đúng giờ.', romanization: 'mo-du je-si-ga-ne wa ju-si-gi ba-ram-ni-da', register: 'formal' },
      { ko: '계단을 이용해 주시기 바랍니다.', vi: 'Kính mong quý khách sử dụng cầu thang bộ.', romanization: 'gye-da-neul i-yong-hae ju-si-gi ba-ram-ni-da', register: 'formal' },
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
      { ko: '그 바지를 입어 보세요.', vi: 'Anh/chị hãy thử mặc chiếc quần đó xem.', romanization: 'geu ba-ji-reul i-beo bo-se-yo', register: 'polite' },
      { ko: '저는 스키를 타 봤어요.', vi: 'Tôi đã từng trượt tuyết.', romanization: 'jeo-neun seu-ki-reul ta bwa-sseo-yo', register: 'polite' },
      { ko: '이 음식 먹어 봐.', vi: 'Thử ăn món này xem.', romanization: 'i eum-sik meo-geo bwa', register: 'casual' },
    ],
    commonMistakes: [
      'Thì hiện tại (-아/어 보세요, -아/어 봐) mang nghĩa "thử làm", còn thì quá khứ (-아/어 봤어요) mang nghĩa "đã từng làm" — dễ nhầm lẫn hai sắc thái này.',
      'Chỉ dùng để nói về trải nghiệm của bản thân, không dùng cho người khác ở ngôi thứ ba mà không có ngữ cảnh rõ ràng.',
    ],
    level: 'so-cap',
    section: 'thu-nghiem-va-kinh-nghiem',
    sectionOrder: 8,
    sectionTitleVi: 'Thử nghiệm và kinh nghiệm',
    conjugationTable: [
      { stemType: 'Quy tắc', baseForm: '먹다', conjugated: '먹어 보다' },
      { stemType: 'ㅂ bất quy tắc', baseForm: '눕다', conjugated: '누워 보다' },
      { stemType: 'ㄷ bất quy tắc', baseForm: '듣다', conjugated: '들어 보다' },
      { stemType: '르 bất quy tắc', baseForm: '부르다', conjugated: '불러 보다' },
    ],
  },
  {
    id: 'gr-so-cap-39',
    pattern: 'V - (으)ㄴ 적이 있다/ 없다.',
    meaningVi: 'Đã từng..., chưa từng... — kinh nghiệm trong quá khứ',
    usageNotes:
      'Thể hiện việc có hay không có kinh nghiệm, trải nghiệm về một việc gì đó trong quá khứ; thường kết hợp với -아/어 보다 thành -아/어 본 적이 있다/없다 để nhấn mạnh việc "đã từng thử". Không dùng cấu trúc này để mô tả hành động thường xuyên xảy ra, lặp đi lặp lại trong quá khứ.',
    examples: [
      { ko: '제주도에 간 적이 있어요?', vi: 'Bạn đã từng đi đảo Jeju chưa?', romanization: 'je-ju-do-e gan jeo-gi i-sseo-yo', register: 'polite' },
      { ko: '저는 삼계탕을 먹어 본 적이 없어요.', vi: 'Tôi chưa từng ăn thử gà hầm sâm.', romanization: 'jeo-neun sam-gye-tang-eul meo-geo bon jeo-gi eop-sseo-yo', register: 'polite' },
      { ko: '설악산을 구경해 본 적이 있지요?', vi: 'Bạn đã từng đi ngắm cảnh núi Seorak rồi phải không?', romanization: 'seo-rak-ssa-neul gu-gyeong-hae bon jeo-gi it-jji-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Không dùng cấu trúc này để nói về việc từng làm thường xuyên trong quá khứ (thói quen cũ) — nên dùng -았/었었다 hoặc -곤 했다 thay thế.',
      'Thường kết hợp tự nhiên với -아/어 보다 thành "본 적이 있다/없다" để nhấn mạnh trải nghiệm thử làm.',
    ],
    level: 'so-cap',
    section: 'thu-nghiem-va-kinh-nghiem',
    sectionOrder: 8,
    sectionTitleVi: 'Thử nghiệm và kinh nghiệm',
    conjugationTable: [
      { stemType: 'Quy tắc (phụ âm cuối)', baseForm: '먹다', conjugated: '먹은 적이 있다' },
      { stemType: 'Quy tắc (nguyên âm cuối)', baseForm: '가다', conjugated: '간 적이 있다' },
      { stemType: 'ㄷ bất quy tắc', baseForm: '듣다', conjugated: '들은 적이 있다' },
      { stemType: 'ㄹ 받침 (lược ㄹ)', baseForm: '살다', conjugated: '산 적이 있다' },
    ],
    relatedPatterns: [
      { id: 'gr-so-cap-38', distinction: '-(으)ㄴ 적이 있다/없다 thường kết hợp với -아/어 보다 thành -아/어 본 적이 있다/없다 để nhấn mạnh trải nghiệm đã thử làm.' },
    ],
  },
  {
    id: 'gr-so-cap-40',
    pattern: 'V - (으)러 가다 / 오다 / 다니다…',
    meaningVi: 'Đi/đến... để... — mục đích di chuyển',
    usageNotes:
      'Diễn tả mục đích của việc đi đến một nơi nào đó để thực hiện hành động. Sau -(으)러 chỉ kết hợp được với các động từ chỉ sự di chuyển như 가다, 오다, 다니다, 올라가다, 나가다, còn động từ đứng trước -(으)러 thì không được là động từ chuyển động. Địa điểm trong câu luôn phải đi kèm trợ từ 에.',
    examples: [
      { ko: '요즘 수영을 배우러 다녀요.', vi: 'Dạo này tôi đi học bơi.', romanization: 'yo-jeum su-yeong-eul bae-u-reo da-nyeo-yo', register: 'polite' },
      { ko: '저녁을 먹으러 식당에 가요.', vi: 'Tôi đến nhà hàng để ăn tối.', romanization: 'jeo-nyeo-geul meo-geu-reo sik-ttang-e ga-yo', register: 'polite' },
      { ko: '백화점에 목도리를 사러 왔어요.', vi: 'Tôi đến trung tâm thương mại để mua khăn quàng cổ.', romanization: 'bae-kwa-jeo-me mok-tto-ri-reul sa-reo wa-sseo-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Vế sau -(으)러 chỉ được là động từ chuyển động (가다, 오다, 다니다...), không dùng được với các động từ khác — nhầm lẫn phổ biến khi ghép với động từ hành động thông thường.',
      'Địa điểm phải dùng trợ từ 에, không dùng 을/를 hay các trợ từ khác.',
    ],
    level: 'so-cap',
    section: 'muc-dich-va-y-dinh',
    sectionOrder: 9,
    sectionTitleVi: 'Mục đích và ý định',
    conjugationTable: [
      { stemType: 'Quy tắc', baseForm: '먹다', conjugated: '먹으러 가다' },
      { stemType: 'ㄷ bất quy tắc', baseForm: '듣다', conjugated: '들으러 가다' },
      { stemType: 'ㅅ bất quy tắc', baseForm: '짓다', conjugated: '지으러 가다' },
      { stemType: 'ㄹ 받침 (không thêm 으)', baseForm: '놀다', conjugated: '놀러 가다' },
    ],
  },
  {
    id: 'gr-so-cap-41',
    pattern: 'V - (으)려고',
    meaningVi: 'Để... — ý định, kế hoạch',
    usageNotes:
      'Diễn tả ý định hay kế hoạch của người nói: để thực hiện được điều nêu ở vế trước, người nói sẽ làm hành động ở vế sau. Vế sau không thể là hành động chưa xảy ra (không kết hợp với thì tương lai) và không dùng được với câu đề nghị hay mệnh lệnh.',
    examples: [
      { ko: '음악을 들으려고 라디오를 켰어요.', vi: 'Để nghe nhạc tôi đã bật radio.', romanization: 'eu-ma-geul deu-reu-ryeo-go ra-di-o-reul kyeo-sseo-yo', register: 'polite' },
      { ko: '여행을 가려고 비행기 표를 예약했어요.', vi: 'Để đi du lịch tôi đã đặt vé máy bay.', romanization: 'yeo-haeng-eul ga-ryeo-go bi-haeng-gi pyo-reul ye-ya-kae-sseo-yo', register: 'polite' },
      { ko: '김치를 만들려고 배추를 챙겼어요.', vi: 'Để làm kim chi tôi đã chuẩn bị cải thảo.', romanization: 'gim-chi-reul man-deul-lyeo-go bae-chu-reul chaeng-gyeo-sseo-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Khác với -(으)러 가다/오다: -(으)려고 kết hợp được với tất cả các loại động từ ở vế sau (không chỉ động từ chuyển động), nhưng vế sau không thể ở thì tương lai và không dùng được với câu cầu khiến/mệnh lệnh.',
      'Vế trước diễn tả ý định, vế sau là hành động cụ thể đã thực hiện để đạt ý định đó — không đảo ngược trật tự hai vế.',
    ],
    level: 'so-cap',
    section: 'muc-dich-va-y-dinh',
    sectionOrder: 9,
    sectionTitleVi: 'Mục đích và ý định',
    conjugationTable: [
      { stemType: 'Quy tắc (phụ âm cuối)', baseForm: '먹다', conjugated: '먹으려고' },
      { stemType: 'Quy tắc (nguyên âm cuối)', baseForm: '가다', conjugated: '가려고' },
      { stemType: 'ㄷ bất quy tắc', baseForm: '듣다', conjugated: '들으려고' },
      { stemType: 'ㄹ 받침 (không thêm 으)', baseForm: '만들다', conjugated: '만들려고' },
    ],
    relatedPatterns: [
      { id: 'gr-so-cap-40', distinction: '-(으)려고 kết hợp được với tất cả các loại động từ ở vế sau (không chỉ động từ chuyển động như -(으)러 가다/오다), nhưng vế sau không được ở thì tương lai và không dùng với mệnh lệnh/cầu khiến.' },
    ],
  },
  {
    id: 'gr-so-cap-42',
    pattern: 'V - (으)려고 하다.',
    meaningVi: 'Định... — ý chí, kế hoạch tương lai',
    usageNotes:
      'Diễn tả ý chí, ý định hay kế hoạch trong tương lai của chủ thể; chỉ dùng khi hành động hay kế hoạch đó chưa xảy ra. Dạng quá khứ -(으)려고 했다 diễn tả một ý định đã có trước đây, có thể đã hoặc chưa thực hiện được.',
    examples: [
      { ko: '점심에는 비빔밥을 먹으려고 해요.', vi: 'Bữa trưa tôi định ăn bibimbap.', romanization: 'jeom-si-me-neun bi-bim-ba-beul meo-geu-ryeo-go hae-yo', register: 'polite' },
      { ko: '케이크를 만들려고 해요.', vi: 'Tôi định làm bánh kem.', romanization: 'ke-i-keu-reul man-deul-lyeo-go hae-yo', register: 'polite' },
      { ko: '저녁에 숙제를 하려고 해요.', vi: 'Tối nay tôi định làm bài tập.', romanization: 'jeo-nyeo-ge suk-jje-reul ha-ryeo-go hae-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Chỉ dùng cho việc chưa xảy ra, không dùng cho việc đã hoàn thành — khác với -기로 하다 (mục 44) mang nghĩa quyết định chắc chắn hơn.',
      'Dạng quá khứ -(으)려고 했다 không có nghĩa là "đã làm" mà là "đã từng định làm" (có thể chưa thực hiện được), dễ gây hiểu nhầm.',
    ],
    level: 'so-cap',
    section: 'muc-dich-va-y-dinh',
    sectionOrder: 9,
    sectionTitleVi: 'Mục đích và ý định',
    conjugationTable: [
      { stemType: 'Quy tắc (phụ âm cuối)', baseForm: '먹다', conjugated: '먹으려고 하다' },
      { stemType: 'Quy tắc (nguyên âm cuối)', baseForm: '가다', conjugated: '가려고 하다' },
      { stemType: 'ㄷ bất quy tắc', baseForm: '듣다', conjugated: '들으려고 하다' },
      { stemType: 'ㄹ 받침 (không thêm 으)', baseForm: '만들다', conjugated: '만들려고 하다' },
    ],
    relatedPatterns: [
      { id: 'gr-so-cap-44', distinction: '-(으)려고 하다 chỉ ý định/kế hoạch chưa chắc chắn, còn -기로 하다 (mục 44) mang nghĩa quyết định/cam kết chắc chắn hơn.' },
    ],
  },
  {
    id: 'gr-so-cap-43',
    pattern: 'N 을/를 위해(서), V - 기 위해(서)',
    meaningVi: 'Để..., vì... — mục đích, dùng được cả với mệnh lệnh/cầu khiến',
    usageNotes:
      'Diễn tả mục đích hay ý đồ thực hiện hành động: để đạt được mục đích nêu ở vế trước, người nói thực hiện hành động ở vế sau. Khác với -(으)려고, cấu trúc -기 위해(서) có thể kết hợp được với -아/어야 해요, -(으)ㅂ시다, -(으)세요, -(으)ㄹ까요? ở vế sau, tức là dùng được với câu mệnh lệnh, cầu khiến, nghi vấn.',
    examples: [
      { ko: '한국에서 취업하기 위해 한국어를 공부하고 있어요.', vi: 'Để xin được việc ở Hàn Quốc, tôi đang học tiếng Hàn.', romanization: 'han-gu-ge-seo chwi-eo-pa-gi wi-hae han-gu-geo-reul gong-bu-ha-go i-sseo-yo', register: 'polite' },
      { ko: '살을 빼기 위해서 운동하고 있어요.', vi: 'Để giảm cân tôi đang tập thể dục.', romanization: 'sa-reul ppae-gi wi-hae-seo un-dong-ha-go i-sseo-yo', register: 'polite' },
      { ko: '가족을 위해 돈을 많이 벌겠어요.', vi: 'Vì gia đình tôi sẽ kiếm thật nhiều tiền.', romanization: 'ga-jo-geul wi-hae do-neul ma-ni beol-ge-sseo-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Khác với -(으)려고, -기 위해(서) dùng được với câu mệnh lệnh, cầu khiến, nghi vấn ở vế sau — đây là điểm khác biệt quan trọng nhất giữa hai cấu trúc.',
      'N + 을/를 위해(서) dùng trực tiếp sau danh từ, còn V + 기 위해(서) dùng sau động từ.',
    ],
    level: 'so-cap',
    section: 'muc-dich-va-y-dinh',
    sectionOrder: 9,
    sectionTitleVi: 'Mục đích và ý định',
    relatedPatterns: [
      { id: 'gr-so-cap-41', distinction: '-기 위해(서) dùng được với câu mệnh lệnh, cầu khiến, nghi vấn ở vế sau, khác với -(으)려고 không dùng được với các dạng câu này.' },
    ],
  },
  {
    id: 'gr-so-cap-44',
    pattern: 'V - 기로 하다.',
    meaningVi: 'Quyết định sẽ..., định sẽ... — quyết tâm, lời hứa',
    usageNotes:
      'Thể hiện sự quyết tâm hay lời hứa hẹn sẽ thực hiện một hành động nào đó; thường dùng ở dạng quá khứ -기로 했다 nhưng mang ý nghĩa hướng về tương lai (thời điểm ra quyết định đã ở quá khứ, việc thực hiện là tương lai).',
    examples: [
      { ko: '영화를 보러 가기로 했어요.', vi: 'Tôi đã quyết định sẽ đi xem phim.', romanization: 'yeong-hwa-reul bo-reo ga-gi-ro hae-sseo-yo', register: 'polite' },
      { ko: '이번에는 여행을 가지 않기로 했어요.', vi: 'Lần này tôi đã quyết định sẽ không đi du lịch.', romanization: 'i-beo-ne-neun yeo-haeng-eul ga-ji an-ki-ro hae-sseo-yo', register: 'polite' },
      { ko: '다음 달부터 매일 운동하기로 했어요.', vi: 'Tôi đã quyết định từ tháng sau sẽ tập thể dục mỗi ngày.', romanization: 'da-eum dal-bu-teo mae-il un-dong-ha-gi-ro hae-sseo-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Dạng -기로 했다 tuy chia ở thì quá khứ nhưng ý nghĩa hướng về tương lai — không hiểu nhầm là hành động đã xảy ra rồi.',
      'Mang tính quyết tâm/cam kết chắc chắn hơn -(으)려고 하다, thường dùng khi đã có sự cân nhắc, thống nhất.',
    ],
    level: 'so-cap',
    section: 'muc-dich-va-y-dinh',
    sectionOrder: 9,
    sectionTitleVi: 'Mục đích và ý định',
    relatedPatterns: [
      { id: 'gr-so-cap-42', distinction: '-기로 하다 mang tính quyết tâm/cam kết chắc chắn hơn -(으)려고 하다, thường dùng khi đã có sự cân nhắc, thống nhất.' },
    ],
  },
  {
    id: 'gr-so-cap-45',
    pattern: 'V – (으)ㄹ까 하다.',
    meaningVi: 'Phân vân sẽ..., đang nghĩ sẽ... — do dự, chưa chắc chắn',
    usageNotes:
      'Thể hiện suy nghĩ còn phân vân, do dự, chưa chắc chắn về việc có nên làm gì đó hay không; có thể dùng dạng V-(으)ㄹ까 말까 하다 để nhấn mạnh sự phân vân giữa làm và không làm.',
    examples: [
      { ko: '다음 학기에 중국어를 배울까 해요.', vi: 'Tôi đang phân vân học kỳ tới có nên học tiếng Trung không.', romanization: 'da-eum hak-kki-e jung-gu-geo-reul bae-ul-kka hae-yo', register: 'polite' },
      { ko: '주말에 낚시할까 말까 해요.', vi: 'Cuối tuần tôi đang phân vân có nên đi câu cá hay không.', romanization: 'ju-ma-re nak-ssi-hal-kka mal-kka hae-yo', register: 'polite' },
      { ko: '저녁에 치킨을 시킬까 해요.', vi: 'Tối nay tôi đang nghĩ có nên gọi gà rán hay không.', romanization: 'jeo-nyeo-ge chi-ki-neul si-kil-kka hae-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Mức độ chắc chắn thấp hơn -(으)려고 하다 hay -기로 하다 — thể hiện sự do dự, chưa quyết định dứt khoát.',
      'Dạng -(으)ㄹ까 말까 하다 nhấn mạnh việc phân vân giữa hai lựa chọn đối lập, không dùng khi đã chắc chắn.',
    ],
    level: 'so-cap',
    section: 'muc-dich-va-y-dinh',
    sectionOrder: 9,
    sectionTitleVi: 'Mục đích và ý định',
    conjugationTable: [
      { stemType: 'Quy tắc (phụ âm cuối)', baseForm: '먹다', conjugated: '먹을까 하다' },
      { stemType: 'Quy tắc (nguyên âm cuối)', baseForm: '가다', conjugated: '갈까 하다' },
      { stemType: 'ㅂ bất quy tắc', baseForm: '춥다', conjugated: '추울까 하다' },
      { stemType: 'ㄹ 받침 (lược ㄹ)', baseForm: '놀다', conjugated: '놀까 하다' },
    ],
    relatedPatterns: [
      { id: 'gr-so-cap-42', distinction: '-(으)ㄹ까 하다 mức độ chắc chắn thấp hơn -(으)려고 하다, thể hiện sự do dự chưa quyết định dứt khoát.' },
      { id: 'gr-so-cap-44', distinction: '-(으)ㄹ까 하다 mức độ chắc chắn thấp hơn -기로 하다, chỉ là ý nghĩ còn đang phân vân chứ chưa cam kết.' },
    ],
  },
  {
    id: 'gr-so-cap-46',
    pattern: 'A/V - (으)면',
    meaningVi: 'Nếu... — điều kiện hoặc giả định',
    usageNotes:
      'Dùng để đưa ra điều kiện cho một sự việc, tình huống xảy ra hàng ngày hoặc có tính lặp lại, hoặc để giả định một sự việc chưa xảy ra; vì mang tính giả định hướng tới tương lai nên vế sau chắc chắn không dùng thì quá khứ. Khi diễn tả giả định, thường đi kèm các trạng từ như 혹시, 만일, 만약(에).',
    examples: [
      { ko: '저는 술을 마시면 얼굴이 빨개져요.', vi: 'Hễ uống rượu là mặt tôi lại đỏ lên.', romanization: 'jeo-neun su-reul ma-si-myeon eol-gu-ri ppal-gae-jyeo-yo', register: 'polite' },
      { ko: '수업이 일찍 끝나면 뭐 할 거예요?', vi: 'Nếu tan học sớm thì bạn sẽ làm gì?', romanization: 'su-eo-bi il-jjik kkeun-na-myeon mwo hal geo-ye-yo', register: 'polite' },
      { ko: '만약에 복권에 당첨되면 세계 여행을 갈 거예요.', vi: 'Nếu trúng số tôi sẽ đi du lịch vòng quanh thế giới.', romanization: 'ma-nya-ge bok-kkwo-ne dang-cheom-doe-myeon se-gye yeo-haeng-eul gal geo-ye-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Vế sau của -(으)면 không được chia ở thì quá khứ vì bản chất là giả định hướng tới tương lai hoặc điều kiện lặp lại.',
      'Khi câu mang tính giả định rõ ràng (điều chưa chắc xảy ra), nên thêm 만약(에)/혹시 để nhấn mạnh, tránh nhầm với nghĩa điều kiện lặp lại hàng ngày.',
    ],
    level: 'so-cap',
    section: 'dieu-kien-va-gia-dinh',
    sectionOrder: 10,
    sectionTitleVi: 'Điều kiện và giả định',
    conjugationTable: [
      { stemType: 'Quy tắc (phụ âm cuối)', baseForm: '먹다', conjugated: '먹으면' },
      { stemType: 'Quy tắc (nguyên âm cuối)', baseForm: '가다', conjugated: '가면' },
      { stemType: 'ㅂ bất quy tắc', baseForm: '춥다', conjugated: '추우면' },
      { stemType: 'ㄷ bất quy tắc', baseForm: '듣다', conjugated: '들으면' },
      { stemType: 'ㅎ bất quy tắc', baseForm: '그렇다', conjugated: '그러면' },
    ],
  },
  {
    id: 'gr-so-cap-47',
    pattern: 'V - (으)려면',
    meaningVi: 'Nếu muốn..., nếu định... — điều kiện để đạt một ý định',
    usageNotes:
      'Là hình thức tỉnh lược của -(으)려고 하면, diễn tả kế hoạch hay ý định nêu ở vế trước và điều kiện cần có để đạt được kế hoạch đó ở vế sau; vế sau thường ở các dạng -아/어야 해요/돼요, -(으)면 돼요, -(으)세요, 이/가 필요해요, -는 게 좋아요.',
    examples: [
      { ko: '운전을 하려면 면허증이 있어야 해요.', vi: 'Nếu muốn lái xe thì phải có bằng lái.', romanization: 'un-jeo-neul ha-ryeo-myeon myeon-heo-jeung-i i-sseo-ya hae-yo', register: 'polite' },
      { ko: '집을 구하려면 근처 부동산에 가 보세요.', vi: 'Nếu muốn tìm nhà thì hãy đến văn phòng bất động sản gần đó.', romanization: 'ji-beul gu-ha-ryeo-myeon geun-cheo bu-dong-sa-ne ga bo-se-yo', register: 'polite' },
      { ko: '택시를 빨리 잡으려면 택시 승강장에 가야 돼요.', vi: 'Nếu muốn bắt taxi nhanh thì phải ra bến taxi.', romanization: 'taek-ssi-reul ppal-li ja-beu-ryeo-myeon taek-ssi seung-gang-jang-e ga-ya dwae-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Vế trước nêu ý định/mục tiêu, vế sau luôn là điều kiện cần thiết để đạt mục tiêu đó — không đảo ngược cấu trúc.',
      'Không nhầm với -(으)면 (mục 46, điều kiện chung chung): -(으)려면 luôn gắn liền với một ý định/kế hoạch cụ thể ở vế trước.',
    ],
    level: 'so-cap',
    section: 'dieu-kien-va-gia-dinh',
    sectionOrder: 10,
    sectionTitleVi: 'Điều kiện và giả định',
    conjugationTable: [
      { stemType: 'Quy tắc (phụ âm cuối)', baseForm: '먹다', conjugated: '먹으려면' },
      { stemType: 'Quy tắc (nguyên âm cuối)', baseForm: '가다', conjugated: '가려면' },
      { stemType: 'ㄷ bất quy tắc', baseForm: '듣다', conjugated: '들으려면' },
      { stemType: 'ㄹ 받침 (không thêm 으)', baseForm: '만들다', conjugated: '만들려면' },
    ],
    relatedPatterns: [
      { id: 'gr-so-cap-46', distinction: '-(으)려면 luôn gắn liền với một ý định/kế hoạch cụ thể ở vế trước, khác với -(으)면 (mục 46) chỉ là điều kiện chung chung.' },
    ],
  },
  {
    id: 'gr-so-cap-48',
    pattern: 'A/V - 아/어도',
    meaningVi: 'Dù, cho dù... — nhượng bộ',
    usageNotes:
      'Là cấu trúc nhượng bộ, diễn tả cho dù hành động hay trạng thái ở vế trước có xảy ra thì vế sau vẫn xảy ra, không thay đổi; có thể thêm trạng từ 아무리 vào trước vế trước để nhấn mạnh nghĩa "dù có như thế nào đi chăng nữa".',
    examples: [
      { ko: '시간이 없어도 아침을 먹어야 돼요.', vi: 'Dù không có thời gian cũng phải ăn sáng.', romanization: 'si-ga-ni eop-sseo-do a-chi-meul meo-geo-ya dwae-yo', register: 'polite' },
      { ko: '메이 씨는 아무리 먹어도 살이 안 찌지요? 부러워요.', vi: 'Mei dù ăn bao nhiêu cũng không béo lên nhỉ? Ghen tị ghê.', romanization: 'me-i ssi-neun a-mu-ri meo-geo-do sa-ri an jji-ji-yo? bu-reo-wo-yo', register: 'polite' },
      { ko: '아무리 바빠도 아침을 먹어야지요.', vi: 'Dù bận đến đâu cũng phải ăn sáng chứ.', romanization: 'a-mu-ri ba-ppa-do a-chi-meul meo-geo-ya-ji-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Thường đi kèm 아무리 để nhấn mạnh mức độ nhượng bộ, người học hay quên thêm trạng từ này khi muốn nhấn mạnh.',
      'Không nhầm với -(으)면 (điều kiện): -아/어도 mang nghĩa "dù xảy ra... thì vẫn...", trái ngược hoàn toàn với quan hệ điều kiện - kết quả thông thường.',
    ],
    level: 'so-cap',
    section: 'dieu-kien-va-gia-dinh',
    sectionOrder: 10,
    sectionTitleVi: 'Điều kiện và giả định',
    conjugationTable: [
      { stemType: 'Quy tắc', baseForm: '먹다', conjugated: '먹어도' },
      { stemType: 'ㅂ bất quy tắc', baseForm: '춥다', conjugated: '추워도' },
      { stemType: '르 bất quy tắc', baseForm: '다르다', conjugated: '달라도' },
      { stemType: 'ㅅ bất quy tắc', baseForm: '낫다', conjugated: '나아도' },
    ],
    relatedPatterns: [
      { id: 'gr-so-cap-46', distinction: '-아/어도 mang nghĩa "dù xảy ra... thì vẫn...", trái ngược hoàn toàn với quan hệ điều kiện - kết quả thông thường của -(으)면.' },
    ],
  },
  {
    id: 'gr-so-cap-49',
    pattern: 'A - 아/어지다',
    meaningVi: 'Trở nên... — biến đổi trạng thái theo thời gian (tính từ)',
    usageNotes:
      'Thể hiện sự biến đổi dần dần của một trạng thái theo thời gian; khi kết hợp với cấu trúc này, tính từ (A) sẽ chuyển thành động từ về mặt ngữ pháp, có thể chia được ở các dạng tiếp diễn như -고 있다.',
    examples: [
      { ko: '아이스크림을 많이 먹으면 뚱뚱해질 거예요.', vi: 'Nếu ăn nhiều kem thì sẽ béo lên đấy.', romanization: 'a-i-seu-keu-ri-meul ma-ni meo-geu-myeon ttung-ttung-hae-jil geo-ye-yo', register: 'polite' },
      { ko: '날씨가 좋아졌어요.', vi: 'Thời tiết đã trở nên đẹp hơn.', romanization: 'nal-ssi-ga jo-a-jyeo-sseo-yo', register: 'polite' },
      { ko: '한국 생활에 점점 익숙해졌어요.', vi: 'Tôi dần trở nên quen với cuộc sống ở Hàn Quốc.', romanization: 'han-guk saeng-hwa-re jeom-jeom ik-ssu-kae-jyeo-sseo-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Sau khi kết hợp với -아/어지다, tính từ trở thành động từ về mặt ngữ pháp, có thể dùng -고 있다 (예: 좋아지고 있어요) — người học hay quên điều này và chia sai.',
      'Phân biệt với -게 되다 (mục 50): -아/어지다 dùng cho tính từ (biến đổi trạng thái), còn -게 되다 dùng cho động từ (biến đổi tình huống/hành động khách quan).',
    ],
    level: 'so-cap',
    section: 'cau-truc-dien-ta-su-thay-doi',
    sectionOrder: 11,
    sectionTitleVi: 'Cấu trúc diễn tả sự thay đổi',
    conjugationTable: [
      { stemType: 'Quy tắc', baseForm: '작다', conjugated: '작아지다' },
      { stemType: 'ㅂ bất quy tắc', baseForm: '춥다', conjugated: '추워지다' },
      { stemType: '르 bất quy tắc', baseForm: '다르다', conjugated: '달라지다' },
      { stemType: 'ㅎ bất quy tắc', baseForm: '하얗다', conjugated: '하얘지다' },
    ],
    relatedPatterns: [
      { id: 'gr-so-cap-50', distinction: '-아/어지다 dùng cho tính từ để diễn tả biến đổi trạng thái, còn -게 되다 (mục 50) dùng cho động từ để diễn tả biến đổi tình huống khách quan.' },
    ],
  },
  {
    id: 'gr-so-cap-50',
    pattern: 'V - 게 되다',
    meaningVi: 'Trở nên..., trở thành... — thay đổi khách quan (động từ)',
    usageNotes:
      'Có hai nét nghĩa: (1) thể hiện sự thay đổi trạng thái/tình huống do hoàn cảnh khách quan mang lại, khác với ý muốn hay ý chí chủ quan của chủ ngữ; (2) diễn tả một tình huống đã trở thành sự thật hoặc đã được quyết định.',
    examples: [
      { ko: '회사에 다닌 후부터 일찍 일어나게 됐어요.', vi: 'Từ khi đi làm tôi trở nên dậy sớm.', romanization: 'hoe-sa-e da-nin hu-bu-teo il-jjik i-reo-na-ge dwae-sseo-yo', register: 'polite' },
      { ko: '한국에 오기 전에 방탄소년단을 몰랐는데 한국에 와서 알게 됐어요.', vi: 'Trước khi đến Hàn Quốc tôi không biết đến BTS, nhưng sau khi đến đây thì tôi đã biết.', romanization: 'han-gu-ge o-gi jeo-ne bang-tan-so-nyeon-da-neul mol-lan-neun-de han-gu-ge wa-seo al-ge dwae-sseo-yo', register: 'polite' },
      { ko: '친구들과 노래방에 가서 연습하니까 노래를 잘하게 되었어요.', vi: 'Nhờ đi hát karaoke luyện tập cùng bạn bè mà tôi đã hát hay lên.', romanization: 'chin-gu-deul-gwa no-rae-bang-e ga-seo yeon-seu-pa-ni-kka no-rae-reul jal-ha-ge doe-eo-sseo-yo', register: 'polite' },
    ],
    commonMistakes: [
      '-게 되다 nhấn mạnh sự thay đổi mang tính khách quan, không phải do ý chí chủ động của người nói — khác với -기로 하다 (quyết định chủ động).',
      'Chỉ dùng với động từ, không dùng trực tiếp với tính từ — tính từ dùng -아/어지다 ở mục 49.',
    ],
    level: 'so-cap',
    section: 'cau-truc-dien-ta-su-thay-doi',
    sectionOrder: 11,
    sectionTitleVi: 'Cấu trúc diễn tả sự thay đổi',
    relatedPatterns: [
      { id: 'gr-so-cap-44', distinction: '-게 되다 nhấn mạnh sự thay đổi mang tính khách quan, không do ý chí chủ động, khác với -기로 하다 (mục 44) vốn là quyết định chủ động.' },
      { id: 'gr-so-cap-49', distinction: '-게 되다 chỉ dùng với động từ, còn tính từ phải dùng -아/어지다 ở mục 49.' },
    ],
  },
  {
    id: 'gr-so-cap-51',
    pattern: 'A/V - 겠어요.',
    meaningVi: 'Sẽ..., chắc sẽ... — phỏng đoán hoặc ý chí',
    usageNotes:
      'Thể hiện sự dự đoán, phỏng đoán về tình huống, trạng thái nào đó; thường dùng để mô tả ý chí, quyết tâm làm gì đó nếu dùng với động từ ở ngôi thứ nhất. Hình thức phỏng đoán ở thì quá khứ là -았/었겠어요.',
    examples: [
      { ko: '가: 어제 잠을 못 잤어요. 나: 그래요? 많이 피곤하겠어요.', vi: 'A: Hôm qua tôi không ngủ được. B: Vậy à? Chắc mệt lắm nhỉ.', romanization: 'ga: eo-je ja-meul mot-jja-sseo-yo. na: geu-rae-yo? ma-ni pi-gon-ha-ge-sseo-yo', register: 'polite' },
      { ko: '오늘은 일이 있어서 못 가겠습니다.', vi: 'Hôm nay tôi có việc nên chắc không đi được.', romanization: 'o-neu-reun i-ri i-sseo-seo mot-kka-get-sseum-ni-da', register: 'formal' },
      { ko: '어제 많이 피곤했겠네요.', vi: 'Hôm qua chắc bạn đã mệt lắm nhỉ.', romanization: 'eo-je ma-ni pi-gon-haet-kken-ne-yo', register: 'polite' },
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
      { ko: '내일도 추울 거예요.', vi: 'Ngày mai chắc cũng lạnh.', romanization: 'nae-il-do chu-ul geo-ye-yo', register: 'polite' },
      { ko: '유리 씨가 지금 집에서 음악을 들을 거예요.', vi: 'Chắc bây giờ Yuri đang ở nhà nghe nhạc.', romanization: 'yu-ri ssi-ga ji-geum ji-be-seo eu-ma-geul deu-reul geo-ye-yo', register: 'polite' },
      { ko: '이번 주말에 친구들과 등산할 거예요.', vi: 'Cuối tuần này tôi sẽ đi leo núi với bạn bè.', romanization: 'i-beon ju-ma-re chin-gu-deul-gwa deung-san-hal geo-ye-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Chủ ngữ quyết định nghĩa của câu: ngôi 1/2 mang nghĩa dự định tương lai, ngôi 3/sự vật mang nghĩa phỏng đoán.',
      'Không dùng dạng nghi vấn -(으)ㄹ 거예요? để hỏi phỏng đoán, phải chuyển sang -(으)ㄹ까요?.',
    ],
    level: 'so-cap',
    section: 'phong-doan-va-suy-doan',
    sectionOrder: 12,
    sectionTitleVi: 'Phỏng đoán và suy đoán',
    conjugationTable: [
      { stemType: 'Quy tắc (phụ âm cuối)', baseForm: '먹다', conjugated: '먹을 거예요' },
      { stemType: 'Quy tắc (nguyên âm cuối)', baseForm: '가다', conjugated: '갈 거예요' },
      { stemType: 'ㅂ bất quy tắc', baseForm: '춥다', conjugated: '추울 거예요' },
      { stemType: 'ㄹ 받침 (lược ㄹ)', baseForm: '놀다', conjugated: '놀 거예요' },
    ],
    relatedPatterns: [
      { id: 'gr-so-cap-31', distinction: 'Không dùng dạng nghi vấn -(으)ㄹ 거예요? để hỏi phỏng đoán, phải chuyển sang -(으)ㄹ까요?.' },
    ],
  },
  {
    id: 'gr-so-cap-53',
    pattern: 'A/V - (으)ㄴ/는/(으)ㄹ 것 같다.',
    meaningVi: 'Hình như..., dường như... — phỏng đoán',
    usageNotes:
      'Diễn tả sự phỏng đoán của người nói, còn được dùng để bày tỏ quan điểm, suy nghĩ một cách tế nhị. Hình thức chia phụ thuộc vào thì và từ loại: động từ có đủ ba dạng quá khứ/hiện tại/tương lai tương ứng -(으)ㄴ/는/(으)ㄹ 것 같다, còn tính từ dùng -(으)ㄴ 것 같다 khi nói về trạng thái hiện tại đã quan sát được, hoặc -(으)ㄹ 것 같다 khi trạng thái còn mơ hồ, chưa chắc chắn.',
    examples: [
      { ko: '비가 그친 것 같아요.', vi: 'Hình như mưa đã tạnh rồi.', romanization: 'bi-ga geu-chin geot ga-ta-yo', register: 'polite' },
      { ko: '비가 올 것 같아요.', vi: 'Hình như trời sắp mưa.', romanization: 'bi-ga ol geot ga-ta-yo', register: 'polite' },
      { ko: '그 책이 어려운 것 같아요.', vi: 'Cuốn sách đó có vẻ khó.', romanization: 'geu chae-gi eo-ryeo-un geot ga-ta-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Với tính từ, cần phân biệt -(으)ㄴ 것 같다 (nhận định khá chắc chắn về hiện tại) và -(으)ㄹ 것 같다 (khi còn mơ hồ, chưa quan sát trực tiếp).',
      'Với động từ, ba dạng -(으)ㄴ/는/(으)ㄹ 것 같다 dễ bị dùng lẫn lộn nếu không để ý thì của hành động.',
    ],
    level: 'so-cap',
    section: 'phong-doan-va-suy-doan',
    sectionOrder: 12,
    sectionTitleVi: 'Phỏng đoán và suy đoán',
    conjugationTable: [
      { stemType: 'Quy tắc (phụ âm cuối, hiện tại)', baseForm: '작다', conjugated: '작은 것 같다' },
      { stemType: 'Quy tắc (nguyên âm cuối, hiện tại)', baseForm: '예쁘다', conjugated: '예쁜 것 같다' },
      { stemType: 'ㅂ bất quy tắc', baseForm: '춥다', conjugated: '추운 것 같다' },
      { stemType: 'ㅎ bất quy tắc', baseForm: '그렇다', conjugated: '그런 것 같다' },
    ],
  },
  {
    id: 'gr-so-cap-54',
    pattern: 'A - 아/어 보이다',
    meaningVi: 'Trông có vẻ... — cảm nhận dựa trên vẻ ngoài',
    usageNotes:
      'Diễn tả sự phỏng đoán hay cảm nhận của người nói dựa trên vẻ bề ngoài của người, sự vật hay sự việc.',
    examples: [
      { ko: '지금 괜찮으세요? 슬퍼 보여요.', vi: 'Bạn ổn không? Trông có vẻ buồn đấy.', romanization: 'ji-geum gwaen-cha-neu-se-yo? seul-peo bo-yeo-yo', register: 'polite' },
      { ko: '이 치마를 입으니까 젊어 보여요.', vi: 'Mặc chiếc váy này trông trẻ ra hẳn.', romanization: 'i chi-ma-reul i-beu-ni-kka jeol-meo bo-yeo-yo', register: 'polite' },
      { ko: '김치가 맛있어 보이네요.', vi: 'Kim chi trông có vẻ ngon nhỉ.', romanization: 'gim-chi-ga ma-si-sseo bo-i-ne-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Chỉ kết hợp với tính từ, không dùng trực tiếp với động từ để diễn tả "trông có vẻ đang làm gì".',
      'Đây là nhận định dựa trên vẻ ngoài quan sát được, khác với -(으)ㄴ/는 것 같다 vốn có thể dựa trên nhiều loại thông tin khác, không chỉ vẻ ngoài.',
    ],
    level: 'so-cap',
    section: 'phong-doan-va-suy-doan',
    sectionOrder: 12,
    sectionTitleVi: 'Phỏng đoán và suy đoán',
    conjugationTable: [
      { stemType: 'Quy tắc', baseForm: '작다', conjugated: '작아 보이다' },
      { stemType: 'ㅂ bất quy tắc', baseForm: '춥다', conjugated: '추워 보이다' },
      { stemType: 'ㅎ bất quy tắc', baseForm: '하얗다', conjugated: '하얘 보이다' },
    ],
    relatedPatterns: [
      { id: 'gr-so-cap-53', distinction: '-아/어 보이다 là nhận định dựa trên vẻ ngoài quan sát được, khác với -(으)ㄴ/는 것 같다 có thể dựa trên nhiều loại thông tin khác, không chỉ vẻ ngoài.' },
    ],
  },
  {
    id: 'gr-so-cap-55',
    pattern: 'A/V - (으)ㄹ 텐데',
    meaningVi: 'Chắc sẽ... nên..., chắc là... đấy — phỏng đoán kèm bối cảnh, lời khuyên',
    usageNotes:
      'Là sự kết hợp giữa -(으)ㄹ 터 (dự định/khả năng) và -(으)ㄴ/는데 (nêu bối cảnh), dùng để đưa ra nhận định, phỏng đoán ở vế trước và đưa ra bối cảnh liên quan hoặc tương phản ở vế sau; vế sau thường dùng nhiều với câu mệnh lệnh hoặc cầu khiến. Phỏng đoán ở thì quá khứ chia dạng -았/었을 텐데, và có thể dùng ở cuối câu dưới dạng -(으)ㄹ 텐데요.',
    examples: [
      { ko: '아기가 깨면 엄마를 찾을 텐데 큰일이에요.', vi: 'Nếu em bé thức dậy chắc sẽ tìm mẹ, thế thì gay go đấy.', romanization: 'a-gi-ga kkae-myeon eom-ma-reul cha-jeul ten-de keun-ni-ri-e-yo', register: 'polite' },
      { ko: '그 식당이 이미 닫았을 텐데 가지 마세요.', vi: 'Nhà hàng đó chắc đóng cửa rồi, đừng đến đó nữa.', romanization: 'geu sik-ttang-i i-mi da-da-sseul ten-de ga-ji ma-se-yo', register: 'polite' },
      { ko: '바람이 불면 추울 텐데 따뜻하게 입고 가세요.', vi: 'Có gió chắc sẽ lạnh đấy, hãy mặc ấm rồi đi nhé.', romanization: 'ba-ra-mi bul-myeon chu-ul ten-de tta-tteu-ta-ge ip-kko ga-se-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Vế sau thường là lời khuyên, mệnh lệnh dựa trên phỏng đoán ở vế trước — không dùng cấu trúc này khi chỉ đơn thuần muốn phỏng đoán mà không có hàm ý khuyên nhủ.',
      'Phỏng đoán về việc trong quá khứ phải chia đúng dạng -았/었을 텐데, không chia nhầm thành -(으)ㄹ 텐데 suông.',
    ],
    level: 'so-cap',
    section: 'phong-doan-va-suy-doan',
    sectionOrder: 12,
    sectionTitleVi: 'Phỏng đoán và suy đoán',
    conjugationTable: [
      { stemType: 'Quy tắc (phụ âm cuối)', baseForm: '먹다', conjugated: '먹을 텐데' },
      { stemType: 'Quy tắc (nguyên âm cuối)', baseForm: '가다', conjugated: '갈 텐데' },
      { stemType: 'ㅂ bất quy tắc', baseForm: '춥다', conjugated: '추울 텐데' },
      { stemType: 'ㄹ 받침 (lược ㄹ)', baseForm: '놀다', conjugated: '놀 텐데' },
    ],
  },
  {
    id: 'gr-so-cap-56',
    pattern: 'A/V - (으)ㄹ 테니까',
    meaningVi: 'Vì tôi sẽ... nên..., chắc là sẽ... nên... — lời hứa hoặc phỏng đoán kèm giải thích',
    usageNotes:
      'Có hai cách dùng theo chủ ngữ: khi chủ ngữ vế trước là ngôi thứ nhất, vế sau thường là ý chí hay lời hứa của người nói dành cho người nghe; khi chủ ngữ vế trước là ngôi thứ ba, vế trước mang nghĩa phỏng đoán và vế sau là lời giải thích, khuyên nhủ dựa trên phỏng đoán đó. Có thể dùng ở cuối câu dưới dạng -(으)ㄹ 테니까요.',
    examples: [
      { ko: '밖에 추울 테니까 나가지 마세요.', vi: 'Ngoài trời chắc lạnh lắm đấy, đừng ra ngoài nhé.', romanization: 'ba-kke chu-ul te-ni-kka na-ga-ji ma-se-yo', register: 'polite' },
      { ko: '요즘 귤 철이라 귤이 싸고 맛있을 테니까 귤을 사 가요.', vi: 'Dạo này đang mùa quýt nên chắc quýt vừa rẻ vừa ngon, mua ít mang về nhé.', romanization: 'yo-jeum gyul cheo-ri-ra gyu-ri ssa-go ma-si-sseul te-ni-kka gyu-reul sa ga-yo', register: 'polite' },
      { ko: '제가 청소를 할 테니까 설거지를 하세요.', vi: 'Tôi sẽ dọn dẹp, nên anh/chị rửa bát nhé.', romanization: 'je-ga cheong-so-reul hal te-ni-kka seol-geo-ji-reul ha-se-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Cần phân biệt hai nghĩa theo chủ ngữ: ngôi thứ nhất (lời hứa/ý chí), ngôi thứ ba (phỏng đoán) — dịch sai nghĩa nếu không để ý chủ ngữ.',
      'Phân biệt với -(으)ㄹ 텐데: -(으)ㄹ 테니까 thường dẫn đến vế sau là mệnh lệnh/đề nghị dựa trên lý do chắc chắn, còn -(으)ㄹ 텐데 thiên về nêu bối cảnh có phần lo ngại hơn.',
    ],
    level: 'so-cap',
    section: 'phong-doan-va-suy-doan',
    sectionOrder: 12,
    sectionTitleVi: 'Phỏng đoán và suy đoán',
    conjugationTable: [
      { stemType: 'Quy tắc (phụ âm cuối)', baseForm: '먹다', conjugated: '먹을 테니까' },
      { stemType: 'Quy tắc (nguyên âm cuối)', baseForm: '가다', conjugated: '갈 테니까' },
      { stemType: 'ㅂ bất quy tắc', baseForm: '춥다', conjugated: '추울 테니까' },
      { stemType: 'ㄹ 받침 (lược ㄹ)', baseForm: '만들다', conjugated: '만들 테니까' },
    ],
    relatedPatterns: [
      { id: 'gr-so-cap-55', distinction: '-(으)ㄹ 테니까 thường dẫn đến vế sau là mệnh lệnh/đề nghị dựa trên lý do chắc chắn, còn -(으)ㄹ 텐데 thiên về nêu bối cảnh có phần lo ngại hơn.' },
    ],
  },
  {
    id: 'gr-so-cap-57',
    pattern: 'A - 군요, V - 는군요.',
    meaningVi: '...thế!, ...đấy! — ngạc nhiên khi trực tiếp chứng kiến, trải nghiệm',
    usageNotes:
      'Diễn tả sự ngạc nhiên hay thán phục của người nói khi trực tiếp chứng kiến, trải nghiệm hoặc nghe thấy điều gì đó từ người khác; có thể kết hợp với danh từ thành N+(이)군요, và hình thức quá khứ là -았/었군요.',
    examples: [
      { ko: '유리 씨는 영어를 정말 잘하시는군요.', vi: 'Yuri thật sự giỏi tiếng Anh nhỉ!', romanization: 'yu-ri ssi-neun yeong-eo-reul jeong-mal jal-ha-si-neun-gu-nyo', register: 'polite' },
      { ko: '영호 씨는 정말 머리가 좋군요.', vi: 'Yeong-ho thông minh thật đấy!', romanization: 'yeong-ho ssi-neun jeong-mal meo-ri-ga jo-ku-nyo', register: 'polite' },
      { ko: '이 케이크가 정말 맛있군요.', vi: 'Chiếc bánh này ngon thật đấy!', romanization: 'i ke-i-keu-ga jeong-mal ma-sit-kku-nyo', register: 'polite' },
    ],
    commonMistakes: [
      'Chủ yếu dùng trong văn viết hoặc lời độc thoại/nhận xét, ít dùng trong hội thoại thân mật hàng ngày so với -네요.',
      'Cần kèm trải nghiệm/chứng kiến trực tiếp mới dùng được cấu trúc này, không dùng khi chỉ suy đoán gián tiếp.',
    ],
    level: 'so-cap',
    section: 'phat-hien-va-ngac-nhien',
    sectionOrder: 13,
    sectionTitleVi: 'Phát hiện và ngạc nhiên',
    relatedPatterns: [
      { id: 'gr-so-cap-58', distinction: '-군요 dùng nhiều trong văn viết hoặc lời độc thoại/nhận xét và có thể dựa trên điều nghe được từ người khác, còn -네요 chủ yếu dùng trong văn nói và chỉ khi người nói trực tiếp trải nghiệm.' },
    ],
  },
  {
    id: 'gr-so-cap-58',
    pattern: 'A/V – 네요.',
    meaningVi: '...thế!, ...đấy! — cảm thán, ngạc nhiên trong văn nói',
    usageNotes:
      'Thể hiện sự cảm thán hay ngạc nhiên trước một điều hoàn toàn mới mẻ mà người nói vừa trực tiếp trải nghiệm, hoặc dùng để bày tỏ sự đồng tình với ý kiến của người khác; chủ yếu dùng trong văn nói hàng ngày.',
    examples: [
      { ko: '가: 오늘은 날씨가 춥지요? 나: 네, 춥네요.', vi: 'A: Hôm nay trời lạnh nhỉ? B: Vâng, lạnh thật đấy.', romanization: 'ga: o-neu-reun nal-ssi-ga chup-jji-yo? na: ne, chum-ne-yo', register: 'polite' },
      { ko: '한국말을 정말 잘하시네요.', vi: 'Anh/chị nói tiếng Hàn giỏi thật đấy!', romanization: 'han-gung-ma-reul jeong-mal jal-ha-si-ne-yo', register: 'polite' },
      { ko: '이 노래 정말 좋네요.', vi: 'Bài hát này hay thật đấy!', romanization: 'i no-rae jeong-mal jon-ne-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Phân biệt với -군요: -네요 chủ yếu dùng trong văn nói và chỉ dùng khi người nói trực tiếp trải nghiệm, còn -군요 dùng nhiều trong văn viết và có thể dựa trên cả điều nghe được từ người khác.',
      'Không nhầm cảm thán -네요 với câu khẳng định thông thường — -네요 luôn mang sắc thái ngạc nhiên/mới mẻ nhẹ.',
    ],
    level: 'so-cap',
    section: 'phat-hien-va-ngac-nhien',
    sectionOrder: 13,
    sectionTitleVi: 'Phát hiện và ngạc nhiên',
    relatedPatterns: [
      { id: 'gr-so-cap-57', distinction: '-네요 chủ yếu dùng trong văn nói và chỉ dùng khi người nói trực tiếp trải nghiệm, còn -군요 dùng nhiều trong văn viết và có thể dựa trên cả điều nghe được từ người khác.' },
    ],
  },
  {
    id: 'gr-so-cap-59',
    pattern: '그런데',
    meaningVi: 'Nhưng, mà, à mà — chuyển ý hoặc nêu tương phản nhẹ trong văn nói',
    usageNotes:
      'Phó từ đứng riêng ở đầu câu mới (không gắn vào thân động/tính từ như -지만), dùng để chuyển sang một ý có phần tương phản hoặc bất ngờ so với câu trước, hoặc để chuyển chủ đề trong hội thoại. Thân mật và dùng trong văn nói nhiều hơn -지만.',
    examples: [
      { ko: '오늘 날씨가 좋아요. 그런데 내일은 비가 온대요.', vi: 'Hôm nay trời đẹp. Nhưng nghe nói mai sẽ mưa.', romanization: 'o-neul nal-ssi-ga jo-a-yo. geu-reon-de nae-i-reun bi-ga on-dae-yo', register: 'polite' },
      { ko: '저는 매운 음식을 잘 못 먹어요. 그런데 김치는 좋아해요.', vi: 'Tôi không ăn cay giỏi lắm. Nhưng tôi lại thích kim chi.', romanization: 'jeo-neun mae-un eum-si-geul jal mon meo-geo-yo. geu-reon-de gim-chi-neun jo-a-hae-yo', register: 'polite' },
      { ko: '그런데 오늘 왜 이렇게 조용해요?', vi: 'À mà, sao hôm nay yên tĩnh thế nhỉ?', romanization: 'geu-reon-de o-neul wae i-reo-ke jo-yong-hae-yo', register: 'polite' },
      { ko: '이 식당 음식이 맛있어요. 그런데 좀 비싸요.', vi: 'Quán này đồ ăn ngon. Nhưng hơi mắc.', romanization: 'i sik-ttang eum-si-gi ma-si-sseo-yo. geu-reon-de jom bi-ssa-yo', register: 'polite' },
    ],
    commonMistakes: [
      '그런데 luôn đứng riêng ở ĐẦU câu sau, không gắn dính vào động từ/tính từ như -지만 — không viết liền "좋아요그런데".',
      'Người Việt hay hình dung "nhưng mà" như một cụm có thể chêm vào giữa câu — trong tiếng Hàn 그런데 không bao giờ đứng giữa câu, luôn mở đầu câu/mệnh đề mới.',
    ],
    level: 'so-cap',
    section: 'phu-tu-lien-ket-cau',
    sectionOrder: 14,
    sectionTitleVi: 'Phó từ liên kết câu',
    relatedPatterns: [
      { id: 'gr-so-cap-08', distinction: '그런데 luôn đứng riêng đầu câu mới và không chia được, trong khi -지만 là vĩ tố gắn liền vào thân động/tính từ ngay trong cùng một câu.' },
    ],
  },
  {
    id: 'gr-so-cap-60',
    pattern: '그래서',
    meaningVi: 'Vì vậy, vì thế, nên — nêu kết quả của câu trước, dùng nhiều trong văn nói',
    usageNotes:
      'Phó từ đứng đầu câu mới, nối kết quả/hệ quả với nguyên nhân đã nêu ở câu trước. Không chia được thì và không gắn vào thân từ như -아/어서 hay -(으)니까 — chỉ dùng để nối HAI CÂU riêng biệt, không nối hai vế trong cùng một câu.',
    examples: [
      { ko: '어제 늦게 잤어요. 그래서 오늘 너무 피곤해요.', vi: 'Hôm qua tôi ngủ muộn. Vì vậy hôm nay rất mệt.', romanization: 'eo-je neut-kke ja-sseo-yo. geu-rae-seo o-neul neo-mu pi-gon-hae-yo', register: 'polite' },
      { ko: '비가 많이 와요. 그래서 우산을 가져가세요.', vi: 'Trời đang mưa to. Vì vậy hãy mang theo ô nhé.', romanization: 'bi-ga ma-ni wa-yo. geu-rae-seo u-sa-neul ga-jyeo-ga-se-yo', register: 'polite' },
      { ko: '그 영화가 재미있대요. 그래서 저도 보고 싶어요.', vi: 'Nghe nói phim đó hay lắm. Vì vậy tôi cũng muốn xem.', romanization: 'geu yeong-hwa-ga jae-mi-it-ttae-yo. geu-rae-seo jeo-do bo-go si-peo-yo', register: 'polite' },
      { ko: '길이 막혔어요. 그래서 늦게 도착했어요.', vi: 'Đường bị tắc. Vì vậy tôi đến trễ.', romanization: 'gi-ri ma-kyeo-sseo-yo. geu-rae-seo neut-kke do-cha-kae-sseo-yo', register: 'polite' },
    ],
    commonMistakes: [
      '그래서 nối HAI CÂU tách biệt (có dấu chấm ở giữa); -아/어서 và -(으)니까 nối HAI VẾ trong CÙNG một câu — không thể thay thế lẫn nhau về mặt cấu trúc dù nghĩa gần giống.',
      'Không dùng 그래서 để giải thích lý do cho một lời mời/đề nghị/mệnh lệnh ở câu sau nếu muốn nhấn mạnh sắc thái lịch sự — khi đó nên ưu tiên -(으)니까.',
    ],
    level: 'so-cap',
    section: 'phu-tu-lien-ket-cau',
    sectionOrder: 14,
    sectionTitleVi: 'Phó từ liên kết câu',
    relatedPatterns: [
      { id: 'gr-so-cap-01', distinction: '그래서 nối hai câu tách biệt (có dấu chấm), còn -아/어서 nối hai vế trong cùng một câu — không thay thế lẫn nhau về cấu trúc dù nghĩa gần giống.' },
      { id: 'gr-so-cap-02', distinction: '그래서 nối hai câu tách biệt (có dấu chấm), còn -(으)니까 nối hai vế trong cùng một câu — không thay thế lẫn nhau về cấu trúc dù nghĩa gần giống.' },
    ],
  },
  {
    id: 'gr-so-cap-61',
    pattern: '하지만',
    meaningVi: 'Nhưng, tuy nhiên — tương phản, trang trọng hơn 그런데 một chút',
    usageNotes:
      'Cũng nêu ý tương phản với câu trước như 그런데, nhưng trung tính và có thể dùng được cả trong văn viết lẫn văn nói trang trọng, trong khi 그런데 thiên về khẩu ngữ thân mật hơn.',
    examples: [
      { ko: '한국어는 어려워요. 하지만 재미있어요.', vi: 'Tiếng Hàn khó. Nhưng thú vị.', romanization: 'han-gu-geo-neun eo-ryeo-wo-yo. ha-ji-man jae-mi-i-sseo-yo', register: 'polite' },
      { ko: '열심히 준비했어요. 하지만 시험에 떨어졌어요.', vi: 'Tôi đã chuẩn bị chăm chỉ. Nhưng vẫn trượt kỳ thi.', romanization: 'yeol-sim-hi jun-bi-hae-sseo-yo. ha-ji-man si-heo-me tteo-reo-jyeo-sseo-yo', register: 'polite' },
      { ko: '가격이 비싸요. 하지만 품질이 좋아요.', vi: 'Giá đắt. Nhưng chất lượng tốt.', romanization: 'ga-gyeo-gi bi-ssa-yo. ha-ji-man pum-ji-ri jo-a-yo', register: 'polite' },
      { ko: '피곤해요. 하지만 오늘 안에 끝내야 해요.', vi: 'Tôi mệt. Nhưng phải hoàn thành trong hôm nay.', romanization: 'pi-gon-hae-yo. ha-ji-man o-neul a-ne kkeun-nae-ya hae-yo', register: 'polite' },
    ],
    commonMistakes: [
      '하지만 và 그런데 nghĩa gần giống nhau, khác biệt chỉ ở SẮC THÁI trang trọng — không có quy tắc ngữ pháp nào bắt buộc chọn cái này thay cái kia.',
      'Không nhầm với -지만 (đuôi câu gắn liền vào động/tính từ) — 하지만 luôn đứng riêng đầu câu mới.',
    ],
    level: 'so-cap',
    section: 'phu-tu-lien-ket-cau',
    sectionOrder: 14,
    sectionTitleVi: 'Phó từ liên kết câu',
    relatedPatterns: [
      { id: 'gr-so-cap-59', distinction: '하지만 và 그런데 nghĩa gần giống nhau, khác biệt chỉ ở sắc thái trang trọng — 하지만 trung tính, dùng được cả văn viết lẫn văn nói trang trọng.' },
      { id: 'gr-so-cap-08', distinction: '하지만 luôn đứng riêng đầu câu mới, khác với -지만 là đuôi câu gắn liền vào thân động/tính từ trong cùng một câu.' },
    ],
  },
  {
    id: 'gr-so-cap-62',
    pattern: '그리고',
    meaningVi: 'Và, rồi, thêm nữa — liệt kê hoặc nối tiếp hành động/sự việc',
    usageNotes:
      'Phó từ đứng đầu câu, dùng để liệt kê thêm một ý/sự việc cùng loại với câu trước, hoặc nối tiếp một hành động xảy ra sau đó theo trình tự thời gian.',
    examples: [
      { ko: '저는 사과를 좋아해요. 그리고 딸기도 좋아해요.', vi: 'Tôi thích táo. Và tôi cũng thích dâu tây.', romanization: 'jeo-neun sa-gwa-reul jo-a-hae-yo. geu-ri-go ttal-gi-do jo-a-hae-yo', register: 'polite' },
      { ko: '숙제를 다 했어요. 그리고 텔레비전을 봤어요.', vi: 'Tôi làm xong bài tập. Rồi tôi xem ti vi.', romanization: 'suk-jje-reul da hae-sseo-yo. geu-ri-go tel-le-bi-jeo-neul bwa-sseo-yo', register: 'polite' },
      { ko: '이 옷은 예뻐요. 그리고 편해요.', vi: 'Bộ đồ này đẹp. Và cũng thoải mái nữa.', romanization: 'i o-seun ye-ppeo-yo. geu-ri-go pyeon-hae-yo', register: 'polite' },
      { ko: '숙제를 하세요. 그리고 일찍 주무세요.', vi: 'Hãy làm bài tập đi. Rồi ngủ sớm nhé.', romanization: 'suk-jje-reul ha-se-yo. geu-ri-go il-jjik ju-mu-se-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Chỉ nối HAI CÂU riêng biệt (có dấu chấm ở giữa) — muốn nối hai vế trong cùng một câu phải dùng đuôi câu -고 gắn vào thân từ, không dùng 그리고.',
      '그리고 KHÔNG mang nghĩa tương phản — không dùng thay cho 그런데/하지만 dù trong tiếng Việt đôi khi "và" cũng bị dùng lỏng lẻo để nối ý trái chiều.',
    ],
    level: 'so-cap',
    section: 'phu-tu-lien-ket-cau',
    sectionOrder: 14,
    sectionTitleVi: 'Phó từ liên kết câu',
    relatedPatterns: [
      { id: 'gr-so-cap-59', distinction: '그리고 chỉ liệt kê/nối tiếp, không mang nghĩa tương phản — không dùng thay cho 그런데 khi ý sau trái chiều với ý trước.' },
      { id: 'gr-so-cap-61', distinction: '그리고 chỉ liệt kê/nối tiếp, không mang nghĩa tương phản — không dùng thay cho 하지만 khi ý sau trái chiều với ý trước.' },
    ],
  },
]
