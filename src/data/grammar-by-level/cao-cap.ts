import type { GrammarEntry } from '@/types'

export const grammarCaoCap: GrammarEntry[] = [
  {
    id: 'gr-cao-cap-01',
    pattern: 'N - (으)로 인해서',
    meaningVi: 'Do, bởi vì — nguyên nhân/lý do trang trọng, thường dùng trong văn viết',
    usageNotes:
      'Diễn tả nguyên nhân hay lý do của một tình trạng nào đó. Cấu trúc chủ yếu dùng trong văn viết hoặc văn phong trang trọng như báo cáo, phát biểu, tin tức. Có thể danh từ hóa mệnh đề thành -(으)ㅁ으로 인해서 để đứng sau động từ/tính từ, và có thể lược bỏ 인해서 thành -(으)로 인한 khi bổ nghĩa trực tiếp cho danh từ đứng sau.',
    examples: [
      { ko: '환경오염으로 인해서 자연생태계가 위협을 받고 있습니다.', vi: 'Do ô nhiễm môi trường, hệ sinh thái tự nhiên đang bị đe dọa.', romanization: 'hwan-gyeong-o-yeom-eu-ro in-hae-seo ja-yeon-saeng-tae-gye-ga wi-hyeo-beul bat-kko it-sseum-ni-da', register: 'formal' },
      { ko: '폭우로 인해서 등산객 한 명이 실종되었다고 들었어요.', vi: 'Tôi nghe nói do mưa lớn mà có một người leo núi bị mất tích.', romanization: 'po-gu-ro in-hae-seo deung-san-gaek han myeong-i sil-jong-doe-eot-tta-go deu-reo-sseo-yo', register: 'polite' },
      { ko: '처음에는 고혈압으로 인한 두통이 아닌가 했어요.', vi: 'Ban đầu tôi cứ tưởng đó là đau đầu do cao huyết áp.', romanization: 'cheo-eu-me-neun go-hyeo-ra-beu-ro in-han du-tong-i a-nin-ga hae-sseo-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Chỉ đứng sau danh từ; muốn dùng sau động từ/tính từ phải danh từ hóa mệnh đề bằng -(으)ㅁ으로 인해서, không gắn trực tiếp vào thân từ.',
      'Mang sắc thái trang trọng của văn viết/báo cáo — không dùng để nêu lý do trong hội thoại thân mật hàng ngày, lúc đó nên dùng -기 때문에 hoặc -아/어서.',
    ],
    level: 'cao-cap',
    section: 'nguyen-nhan-ly-do',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân và lý do',
    relatedPatterns: [
      { id: 'gr-so-cap-01', distinction: '-(으)로 인해서 trang trọng, thiên về văn viết; nếu nêu lý do trong hội thoại thân mật hàng ngày nên dùng -아/어서.' },
      { id: 'gr-so-cap-03', distinction: 'Gần nghĩa -기 때문에 nhưng -(으)로 인해서 chỉ gắn trực tiếp sau danh từ, muốn dùng sau động từ/tính từ phải danh từ hóa bằng -(으)ㅁ으로 인해서.' },
    ],
  },
  {
    id: 'gr-cao-cap-02',
    pattern: 'V - 는 통에',
    meaningVi: 'Do, vì (trong hoàn cảnh lộn xộn, phức tạp) nên xảy ra kết quả không hay',
    usageNotes:
      'Diễn tả căn cứ hay nguyên nhân trong một hoàn cảnh lộn xộn hoặc phức tạp dẫn tới một kết quả không tốt, tiêu cực ở vế sau. Vế sau không dùng câu mệnh lệnh hay cầu khiến. Ngoài ra cấu trúc còn được dùng đứng sau một số danh từ như 전쟁 통에 (giữa cảnh chiến tranh), 난리 통에 (giữa cảnh loạn lạc).',
    examples: [
      { ko: '이 책은 전쟁 통에 아들을 잃어버린 어머니에 대한 이야기예요.', vi: 'Cuốn sách này kể về người mẹ đã lạc mất con trai giữa cảnh loạn lạc chiến tranh.', romanization: 'i chae-geun jeon-jaeng tong-e a-deu-reul i-reo-beo-rin eo-meo-ni-e dae-han i-ya-gi-ye-yo', register: 'polite' },
      { ko: '아이가 자꾸 조르는 통에 장난감을 안 사 줄 수가 없었어요.', vi: 'Vì đứa trẻ cứ nằng nặc đòi hoài nên tôi không thể không mua đồ chơi cho nó.', romanization: 'a-i-ga ja-kku jo-reu-neun tong-e jang-nan-ga-meul an sa jul su-ga eop-sseo-sseo-yo', register: 'polite' },
      { ko: '지하철을 잘못 타는 통에 반대 방향으로 한참을 갔어요.', vi: 'Vì lên nhầm chuyến tàu điện ngầm nên tôi đã đi khá xa theo hướng ngược lại.', romanization: 'ji-ha-cheo-reul jal-mot ta-neun tong-e ban-dae bang-hyang-eu-ro han-cha-meul ga-sseo-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Vế sau không được chia mệnh lệnh, cầu khiến; vế trước luôn giữ dạng hiện tại -는, không chia quá khứ.',
      'Chỉ hợp khi hoàn cảnh nêu ra mang tính lộn xộn, ồn ào, phức tạp — nếu nguyên nhân đơn giản rõ ràng nên dùng -는 바람에 hoặc -아/어서.',
    ],
    level: 'cao-cap',
    section: 'nguyen-nhan-ly-do',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân và lý do',
    relatedPatterns: [
      { id: 'gr-trung-cap-04', distinction: '-는 통에 chỉ hợp khi hoàn cảnh lộn xộn, ồn ào, phức tạp; nếu nguyên nhân bất ngờ nhưng đơn giản, rõ ràng thì nên dùng -는 바람에.' },
    ],
  },
  {
    id: 'gr-cao-cap-03',
    pattern: 'N - (으)로 말미암아',
    meaningVi: 'Vì, do — nguyên nhân dẫn đến một kết quả tiêu cực, văn viết trang trọng',
    usageNotes:
      'Thể hiện nguyên nhân hay lý do của một sự vật hay hiện tượng nào đó ở vế trước làm xuất hiện một kết quả có phần tiêu cực ở vế sau. Có thể dùng ở dạng -(으)로부터 말미암다/-에서 말미암다, và có thể danh từ hóa mệnh đề thành -(으)ㅁ으로 말미암아 khi đứng sau động từ/tính từ.',
    examples: [
      { ko: '환경 파괴로 말미암아 수세기 이내에 세계가 멸망할지도 모른다.', vi: 'Do sự phá hủy môi trường, có thể chỉ trong vài thế kỷ nữa thế giới sẽ diệt vong.', romanization: 'hwan-gyeong pa-goe-ro mal-mi-a-ma su-se-gi i-nae-e se-gye-ga myeol-mang-hal-jji-do mo-reun-da', register: 'written' },
      { ko: '전쟁으로 말미암아 문화유산들이 소실되었다.', vi: 'Do chiến tranh, nhiều di sản văn hóa đã bị mất đi.', romanization: 'jeon-jaeng-eu-ro mal-mi-a-ma mun-hwa-yu-san-deu-ri so-sil-doe-eot-tta', register: 'written' },
    ],
    commonMistakes: [
      'Là cấu trúc rất trang trọng, gần nghĩa với -(으)로 인해서 nhưng gần như chỉ xuất hiện trong văn viết học thuật, báo chí, hầu như không dùng trong văn nói.',
    ],
    level: 'cao-cap',
    section: 'nguyen-nhan-ly-do',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân và lý do',
    relatedPatterns: [
      { id: 'gr-cao-cap-01', distinction: 'Gần nghĩa với -(으)로 인해서 nhưng -(으)로 말미암아 trang trọng hơn nữa, gần như chỉ dùng trong văn viết học thuật, báo chí.' },
    ],
  },
  {
    id: 'gr-cao-cap-04',
    pattern: 'N - (으)로 해서',
    meaningVi: 'Vì, do, tại — nguyên nhân của danh từ vế trước dẫn đến kết quả tiêu cực',
    usageNotes:
      'Thể hiện nguyên nhân hay lý do mà danh từ ở vế trước dẫn đến một kết quả mang tính tiêu cực ở vế sau. Có thể danh từ hóa mệnh đề thành -(으)ㅁ으로 해서 để đứng sau động từ/tính từ.',
    examples: [
      { ko: '그 일로 해서 그도 정신 차렸을 거예요.', vi: 'Chắc là vì việc đó mà anh ấy cũng đã tỉnh ngộ ra rồi.', romanization: 'geu il-lo hae-seo geu-do jeong-sin cha-ryeo-sseul geo-ye-yo', register: 'polite' },
      { ko: '네가 거짓말을 함으로 해서 얼마나 많은 일들이 벌어졌는가를 봐라.', vi: 'Con hãy nhìn xem, vì con nói dối mà đã có bao nhiêu chuyện xảy ra.', romanization: 'ne-ga geo-jin-ma-reul ha-meu-ro hae-seo eol-ma-na ma-neun il-deu-ri beo-reo-jyeon-neun-ga-reul bwa-ra', register: 'casual' },
    ],
    commonMistakes: [
      'Dễ nhầm với -로써 (chỉ phương tiện, cách thức) — -로 해서 luôn mang nghĩa nguyên nhân/lý do, không phải công cụ hay phương thức thực hiện.',
    ],
    level: 'cao-cap',
    section: 'nguyen-nhan-ly-do',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân và lý do',
  },
  {
    id: 'gr-cao-cap-05',
    pattern: 'A/V - 느니만큼',
    meaningVi: 'Bởi vì... nên... — căn cứ vào mức độ của sự thật để đưa ra đề nghị, nhận định',
    usageNotes:
      'Công nhận sự thật ở vế trước và căn cứ vào mức độ của sự thật đó để đưa ra một đề nghị, phán đoán, mệnh lệnh hoặc yêu cầu ở vế sau. Biểu hiện tương tự: -는 만큼.',
    examples: [
      { ko: '창덕궁이 세계 문화유산으로 등재되었느니만큼 관광객들이 많아질 것이다.', vi: 'Bởi vì Cung Changdeok đã được công nhận là di sản văn hóa thế giới nên du khách sẽ ngày càng đông hơn.', romanization: 'chang-deok-kkung-i se-gye mun-hwa-yu-sa-neu-ro deung-jae-doe-eon-neu-ni-man-keum gwan-gwang-gaek-tteu-ri ma-na-jil geo-si-da', register: 'written' },
      { ko: '날씨가 추우니만큼 밖에 나가지 말고 집에서 쉬자.', vi: 'Vì trời lạnh nên chúng ta đừng ra ngoài, ở nhà nghỉ ngơi thôi.', romanization: 'nal-ssi-ga chu-u-ni-man-keum ba-kke na-ga-ji mal-go ji-be-seo swi-ja', register: 'casual' },
    ],
    commonMistakes: [
      'Khác với -는 만큼 thông thường (chỉ mức độ tương xứng) — -느니만큼 nhấn mạnh việc lấy sự thật đó làm căn cứ để đưa ra đề nghị/nhận định, mang sắc thái văn viết trang trọng hơn.',
    ],
    level: 'cao-cap',
    section: 'nguyen-nhan-ly-do',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân và lý do',
    conjugationTable: [
      { stemType: 'Tính từ, Quy tắc (phụ âm cuối)', baseForm: '좋다', conjugated: '좋으니만큼' },
      { stemType: 'Tính từ, ㅂ bất quy tắc', baseForm: '춥다', conjugated: '추우니만큼' },
      { stemType: 'Tính từ, ㅎ bất quy tắc', baseForm: '그렇다', conjugated: '그러니만큼' },
      { stemType: 'Động từ (mọi loại)', baseForm: '가다', conjugated: '가느니만큼' },
    ],
    relatedPatterns: [
      { id: 'gr-cao-cap-06', distinction: 'Có thể thay thế cho nhau hoàn toàn — -느니만치 chỉ là biến thể ít dùng hơn của -느니만큼 trong tiếng Hàn hiện đại.' },
    ],
  },
  {
    id: 'gr-cao-cap-06',
    pattern: 'A/V - 느니만치',
    meaningVi: 'Bởi vì... nên... — tương đương -느니만큼, ít dùng hơn trong tiếng Hàn hiện đại',
    usageNotes:
      'Công nhận sự thật ở vế trước và căn cứ vào mức độ của sự thật đó để đưa ra một đề nghị, phán đoán ở vế sau. Có thể thay thế hoàn toàn bằng -느니만큼. Biểu hiện tương tự: -는 만치.',
    examples: [
      { ko: '그는 한국학과를 졸업했으니만치 은행이 그의 기질에 맞지 않을는지도 모른다.', vi: 'Vì anh ấy đã tốt nghiệp khoa Hàn Quốc học nên có lẽ công việc ngân hàng không hợp với tính cách của anh ấy.', romanization: 'geu-neun han-guk-hak-kkwa-reul jo-reo-pae-sseu-ni-man-chi eun-haeng-i geu-ui gi-ji-re mat-jji a-neul-leun-ji-do mo-reun-da', register: 'written' },
      { ko: '아직 학생이니만큼 열심히 공부하세요.', vi: 'Vì vẫn còn là học sinh nên hãy học tập chăm chỉ.', romanization: 'a-jik hak-ssaeng-i-ni-man-keum yeol-sim-hi gong-bu-ha-se-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Là biến thể ít phổ biến hơn -느니만큼, thường gặp trong văn viết/văn phong hơi cổ hơn là trong văn nói hiện đại — nên ưu tiên dùng -느니만큼 khi không chắc.',
    ],
    level: 'cao-cap',
    section: 'nguyen-nhan-ly-do',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân và lý do',
    relatedPatterns: [
      { id: 'gr-cao-cap-05', distinction: 'Có thể thay thế hoàn toàn bằng -느니만큼 — đây chỉ là biến thể cổ hơn, ít dùng hơn trong tiếng Hàn hiện đại.' },
    ],
  },
  {
    id: 'gr-cao-cap-07',
    pattern: 'A/V - (으)ㄴ/는 이상',
    meaningVi: 'Một khi đã... thì... — nội dung vế trước đã chắc chắn nên vế sau là điều hiển nhiên',
    usageNotes:
      'Nội dung của mệnh đề trước đã được quyết định hoặc đã chắc chắn xảy ra (một thực tế hay một quyết định), nên nội dung của mệnh đề sau là điều rõ ràng, hiển nhiên phải xảy ra theo.',
    examples: [
      { ko: '코로나 19 가 사라지지 않는 이상 밖에 나갈 때 마스크를 착용해야 해요.', vi: 'Một khi COVID-19 chưa biến mất thì khi ra ngoài vẫn phải đeo khẩu trang.', romanization: 'ko-ro-na sip-gu-ga sa-ra-ji-ji an-neun i-sang ba-kke na-gal ttae ma-seu-keu-reul cha-gyong-hae-ya hae-yo', register: 'polite' },
      { ko: '수강 신청자가 이렇게 적은 이상 폐강을 할 수밖에 없어요.', vi: 'Một khi số người đăng ký học ít như vậy thì chỉ còn cách hủy lớp học.', romanization: 'su-gang sin-cheong-ja-ga i-reo-ke jeo-geun i-sang pye-gang-eul hal su-ba-kke eop-sseo-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Vế trước phải là điều đã được xác định chắc chắn (thực tế hoặc quyết định đã đưa ra), không dùng cho một giả định chưa rõ ràng — khác với -다면 vốn dùng cho giả định thuần túy.',
    ],
    level: 'cao-cap',
    section: 'nguyen-nhan-ly-do',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân và lý do',
    conjugationTable: [
      { stemType: 'Động từ, hiện tại', baseForm: '가다', conjugated: '가는 이상' },
      { stemType: 'Tính từ, Quy tắc', baseForm: '적다', conjugated: '적은 이상' },
      { stemType: 'Tính từ, ㅂ bất quy tắc', baseForm: '어렵다', conjugated: '어려운 이상' },
      { stemType: 'ㄹ 받침 (động từ, lược ㄹ)', baseForm: '살다', conjugated: '사는 이상' },
    ],
    relatedPatterns: [
      { id: 'gr-trung-cap-14', distinction: 'Vế trước của -(으)ㄴ/는 이상 phải là điều đã xác định chắc chắn, khác với -다면 vốn dùng cho giả định thuần túy, thậm chí khó xảy ra.' },
    ],
  },
  {
    id: 'gr-cao-cap-08',
    pattern: 'A/V - 기로서니',
    meaningVi: 'Mặc dù... nhưng... — vế trước không đủ để biện minh cho hành động ở vế sau',
    usageNotes:
      'Người nói công nhận nội dung của vế trước, nhưng nhấn mạnh rằng vế trước không đủ để làm lý do hay điều kiện cho hành động/trạng thái được nêu ra ở mệnh đề sau xảy ra. Vế trước ở thì quá khứ chia thành -았/었기로서니. Thường đi kèm với 아무리. Biểu hiện cao cấp thay thế: -기로서, -기로선들.',
    examples: [
      { ko: '아무리 주차할 데가 없기로서니 장애인 주차 공간에 주차하면 안 돼요.', vi: 'Dù có tìm mãi không ra chỗ đỗ xe thì cũng không được đỗ vào chỗ dành cho người khuyết tật.', romanization: 'a-mu-ri ju-cha-hal de-ga eop-kki-ro-seo-ni jang-ae-in ju-cha gong-ga-ne ju-cha-ha-myeon an dwae-yo', register: 'polite' },
      { ko: '아무리 시중 약국에서 마스크 품귀현상이 벌어지기로서니 그 현상을 이용해서 마스크를 비싸게 파는 게 정말 너무하네요.', vi: 'Dù các nhà thuốc có khan hiếm khẩu trang đến đâu thì việc lợi dụng tình trạng đó để bán khẩu trang với giá cao thật là quá đáng.', romanization: 'a-mu-ri si-jung yak-kku-ge-seo ma-seu-keu pum-gwi-hyeon-sang-i beo-reo-ji-gi-ro-seo-ni geu hyeon-sang-eul i-yong-hae-seo ma-seu-keu-reul bi-ssa-ge pa-neun ge jeong-mal neo-mu-ha-ne-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Thường phải đi cùng 아무리 ở vế trước để làm rõ sắc thái nhượng bộ, nếu thiếu 아무리 câu dễ bị hiểu sai nghĩa hoặc nghe cụt.',
    ],
    level: 'cao-cap',
    section: 'nguyen-nhan-ly-do',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân và lý do',
  },
  {
    id: 'gr-cao-cap-09',
    pattern: 'A/V - 기에 망정이지',
    meaningVi: 'May mà... chứ... — nhờ vế trước mà tránh được một kết quả xấu suýt xảy ra',
    usageNotes:
      'Thể hiện dù một tình huống xấu hổ hoặc khó xử đã xảy ra, nhưng nhờ vào nội dung được nêu ở mệnh đề trước mà tình huống đã không kết thúc bằng một kết quả tiêu cực. Vế sau chủ yếu dùng với cấu trúc "았/었을 것이다", "았/었겠다", "(으)ㄹ 뻔하다". Có thể thay thế bằng -(으)니 망정이지, -아/어서 망정이지, -(으)니까 망정이지.',
    examples: [
      { ko: '오늘 길을 걸어가다 넘어졌어요. 다행히 이른 아침이라 길에 사람이 없었기에 망정이지 창피했을 거예요.', vi: 'Hôm nay tôi đi bộ trên đường và bị ngã. May mà là sáng sớm nên ngoài đường không có người, chứ không thì đã ngại chết đi được.', romanization: 'o-neul gi-reul geo-reo-ga-da neo-meo-jyeo-sseo-yo. da-haeng-hi i-reun a-chi-mi-ra gi-re sa-ra-mi eop-sseot-kki-e mang-jeong-i-ji chang-pi-hae-sseul geo-ye-yo', register: 'polite' },
      { ko: '일찍 출발했기에 망정이지 기차를 놓칠 뻔했어요.', vi: 'May mà xuất phát sớm chứ không thì đã lỡ mất chuyến tàu rồi.', romanization: 'il-jjik chul-bal-haet-kki-e mang-jeong-i-ji gi-cha-reul no-chil ppeon-hae-sseo-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Vế sau phải diễn tả một kết quả xấu mang tính giả định "suýt thì đã xảy ra" (thường có -았/었을 것이다, -(으)ㄹ 뻔하다), không dùng để mô tả kết quả xấu đã thực sự xảy ra.',
    ],
    level: 'cao-cap',
    section: 'nguyen-nhan-ly-do',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân và lý do',
  },
  {
    id: 'gr-cao-cap-10',
    pattern: 'V - (느)ㄴ답시고',
    meaningVi: 'Bảo là... rồi lại/mà lại... — nêu lý do của người khác kèm ý chê trách, đánh giá thấp',
    usageNotes:
      'Vế trước trở thành lý do, căn cứ cho hành động ở vế sau, nhưng vế sau còn thêm sắc thái người nói cho rằng lý do đó không thỏa đáng — tức người nói đánh giá thấp hoặc không chấp nhận lý do mà chủ thể khác đưa ra để biện minh cho hành động của mình. Cùng ý nghĩa với các biểu hiện -(느)ㄴ다고 해서 và -(느)ㄴ다는 이유로.',
    examples: [
      { ko: '민호 씨는 온라인 강의를 듣는답시고 컴퓨터를 사 놓고 게임만 해요.', vi: 'Minho bảo là mua máy tính để nghe giảng online, vậy mà chỉ suốt ngày chơi game.', romanization: 'min-ho ssi-neun ol-la-in gang-ui-reul deun-neun-dap-ssi-go keom-pyu-teo-reul sa no-ko ge-im-man hae-yo', register: 'polite' },
      { ko: '제 친구는 다이어트한답시고 일주일도 안 돼서 폭식했어요.', vi: 'Bạn tôi bảo là đang ăn kiêng, vậy mà chưa đầy một tuần đã ăn uống vô độ.', romanization: 'je chin-gu-neun da-i-eo-teu-han-dap-ssi-go il-jju-il-do an dwae-seo pok-ssi-kae-sseo-yo', register: 'polite' },
      { ko: '친구가 선물이랍시고 자기가 입던 바지를 주더라고요.', vi: 'Bạn tôi bảo đó là quà, thế mà lại đưa cho tôi cái quần nó từng mặc.', romanization: 'chin-gu-ga seon-mu-ri-rap-ssi-go ja-gi-ga ip-tteon ba-ji-reul ju-deo-ra-go-yo', register: 'polite' },
    ],
    commonMistakes: [
      'Luôn mang sắc thái mỉa mai, chê trách lý do hoặc hành động của người khác — không dùng để trình bày lý do một cách trung lập.',
      'Dễ nhầm với -는다고 해서 (nêu lý do trung lập, khách quan) — -는답시고 luôn hàm ý phê phán, coi thường lý do đó.',
    ],
    level: 'cao-cap',
    section: 'nguyen-nhan-ly-do',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân và lý do',
  },
  {
    id: 'gr-cao-cap-11',
    pattern: 'A/V - (으)ㅁ으로써',
    meaningVi: 'Bằng việc..., với việc... (nên) — kết quả có được nhờ thực hiện hành động ở vế trước',
    usageNotes:
      'Kết quả ở vế sau có được là nhờ đã thực hiện hành động nào đó ở vế trước. Cấu trúc thường được sử dụng trong văn viết hoặc văn phong trang trọng.',
    examples: [
      { ko: '세종대왕이 한글을 창제함으로써 한국의 언어 생활을 편리하게 만들었어요.', vi: 'Nhờ việc vua Sejong sáng tạo ra chữ Hangeul mà đời sống ngôn ngữ của người Hàn Quốc trở nên tiện lợi hơn.' },
      { ko: '모든 국민이 힘을 모음으로써 경제위기를 극복할 수 있었어요.', vi: 'Nhờ toàn thể người dân đồng lòng góp sức mà đất nước đã vượt qua được khủng hoảng kinh tế.' },
    ],
    commonMistakes: [
      'Dễ nhầm -(으)ㅁ으로써 (bằng việc, nhờ việc — chỉ phương tiện/nguyên nhân) với -(으)로서 (với tư cách là) — hai cấu trúc khác nghĩa hoàn toàn dù phát âm gần giống nhau.',
    ],
    level: 'cao-cap',
    section: 'nguyen-nhan-ly-do',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân và lý do',
  },
  {
    id: 'gr-cao-cap-12',
    pattern: 'A/V - 기에',
    meaningVi: 'Vì vậy... — mệnh đề trước là căn cứ khách quan để chủ thể ngôi thứ nhất hành động',
    usageNotes:
      'Mệnh đề trước tạo thành nguyên nhân, lý do hoặc cơ sở cho mệnh đề sau; chủ thể ngôi thứ nhất nhận thấy một căn cứ ở vế trước rồi giải thích cho hành động của bản thân — vế trước thường ở ngôi thứ ba, vế sau ở ngôi thứ nhất (dù đôi khi cả hai vế đều ở ngôi thứ ba). Chủ yếu dùng trong văn viết và các tình huống trang trọng. Dạng trích dẫn 다기에 mang nghĩa "vì người ta nói rằng... nên tôi...". Vế sau không dùng mệnh lệnh hay cầu khiến.',
    examples: [
      { ko: '아들이 숙제를 안 했기에 야단을 쳤어요.', vi: 'Vì con trai không làm bài tập nên tôi đã mắng nó.' },
      { ko: '그가 먼저 나에게 인사를 하기에 나도 그에게 인사했어요.', vi: 'Vì anh ấy chào tôi trước nên tôi cũng chào lại anh ấy.' },
      { ko: '에너지 음료는 카페인 함량이 높기에 과용하면 건강에 나쁜 영향을 미칠 수 있다.', vi: 'Vì nước tăng lực có hàm lượng caffeine cao nên nếu lạm dụng có thể ảnh hưởng xấu đến sức khỏe.' },
    ],
    commonMistakes: [
      'Vế sau không được chia mệnh lệnh hoặc cầu khiến, khác với nhiều cấu trúc chỉ nguyên nhân khác vốn linh hoạt hơn.',
      'Là cấu trúc trang trọng của văn viết, gần nghĩa -기 때문에 nhưng đòi hỏi quan hệ ngôi đặc thù giữa hai vế (thường ngôi 3 dẫn đến hành động của ngôi 1).',
    ],
    level: 'cao-cap',
    section: 'nguyen-nhan-ly-do',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân và lý do',
  },
  {
    id: 'gr-cao-cap-13',
    pattern: 'A/V - 길래',
    meaningVi: 'Vì... nên tôi... — dạng khẩu ngữ của -기에, lý do bắt nguồn từ người khác/hoàn cảnh',
    usageNotes:
      'Mệnh đề trước là lý do, nguyên nhân hoặc cơ sở cho hành động được thực hiện ở mệnh đề sau; đây là dạng khẩu ngữ của cấu trúc -기에. Mệnh đề trước bắt nguồn từ người khác hoặc một hoàn cảnh bên ngoài, không liên quan đến ý muốn của người nói. Chủ ngữ vế trước phải là ngôi thứ hai hoặc ba, chủ ngữ vế sau phải là ngôi thứ nhất. Vế sau không dùng mệnh lệnh, cầu khiến. Dạng trích dẫn 다길래 cũng thường được sử dụng.',
    examples: [
      { ko: '날씨가 덥길래 창문을 열었어요.', vi: 'Vì trời nóng nên tôi đã mở cửa sổ.' },
      { ko: '약속 시간까지 30 분이나 남았길래 옷가게에 들러서 옷을 구경하려고 해요.', vi: 'Vì còn tới 30 phút nữa mới đến giờ hẹn nên tôi định ghé vào cửa hàng quần áo xem đồ.' },
      { ko: '주말에 친구가 우리 집에 놀러 온다길래 음식을 많이 만들었어요.', vi: 'Vì nghe nói cuối tuần bạn sẽ đến nhà chơi nên tôi đã làm nhiều món ăn.' },
    ],
    commonMistakes: [
      'Chủ ngữ vế trước phải khác ngôi thứ nhất (thường là ngôi 2, 3 hoặc một hoàn cảnh khách quan), không dùng khi lý do xuất phát từ chính ý muốn của người nói.',
      'Vế sau không được chia mệnh lệnh, cầu khiến, và toàn bộ cấu trúc chỉ dùng trong văn nói, không phù hợp với văn viết trang trọng.',
    ],
    level: 'cao-cap',
    section: 'nguyen-nhan-ly-do',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân và lý do',
  },
  {
    id: 'gr-cao-cap-14',
    pattern: 'A/V - (으)ㄴ 나머지',
    meaningVi: 'Vì quá... nên... — một mức độ vượt ngưỡng thông thường dẫn đến kết quả xấu',
    usageNotes:
      'Diễn tả việc một sự thật xảy ra ở mức độ quá mức bình thường, dẫn đến một kết quả xấu, ngoài mong muốn ở vế sau.',
    examples: [
      { ko: '너무 억울한 나머지 그는 울음을 터뜨리고 말았어요.', vi: 'Vì quá ấm ức nên cuối cùng anh ấy đã bật khóc.' },
      { ko: '저는 너무 급한 나머지 문을 잠그는 걸 잊어버렸어요.', vi: 'Vì quá vội vàng nên tôi đã quên khóa cửa.' },
    ],
    commonMistakes: [
      'Vế sau luôn phải là một kết quả tiêu cực, ngoài ý muốn — không dùng cho kết quả tích cực dù mức độ ở vế trước có cao đến đâu.',
    ],
    level: 'cao-cap',
    section: 'nguyen-nhan-ly-do',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân và lý do',
  },
  {
    id: 'gr-cao-cap-15',
    pattern: 'A/V - (으)ㄹ세라',
    meaningVi: 'Vì lo rằng... nên... — thực hiện hành động phòng tránh một điều có thể xảy ra',
    usageNotes:
      'Diễn tả việc thực hiện hành động ở vế sau vì lo lắng rằng điều gì đó nêu ở vế trước có thể xảy ra. Cấu trúc tương tự: -(으)ㄹ까 봐.',
    examples: [
      { ko: '그들은 아기가 들을세라 목소리를 낮추었어요.', vi: 'Họ đã hạ giọng vì sợ em bé nghe thấy.' },
      { ko: '북쪽에 추울세라 두꺼운 옷도 많이 챙겼어요.', vi: 'Vì lo miền Bắc lạnh nên tôi đã chuẩn bị nhiều quần áo dày.' },
    ],
    commonMistakes: [
      'Là cấu trúc mang tính văn viết/trang trọng hơn -(으)ㄹ까 봐, ít dùng trong khẩu ngữ hàng ngày.',
    ],
    level: 'cao-cap',
    section: 'nguyen-nhan-ly-do',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân và lý do',
  },
  {
    id: 'gr-cao-cap-16',
    pattern: 'V - 아/어 대서',
    meaningVi: 'Vì cứ... nên... — một hành động lặp lại quá mức gây khó chịu, kèm ý phàn nàn',
    usageNotes:
      'Diễn tả việc một hành động nào đó lặp đi lặp lại thường xuyên, quá mức dẫn đến một kết quả tiêu cực; chủ thể có ý phàn nàn, không hài lòng. So với cấu trúc -다가 보니 nhấn mạnh trải nghiệm để rút ra một kết quả mang tính khuyên nhủ, cấu trúc này thiên về sự than phiền, khó chịu. Có thể dùng dạng -아/어대면 với nghĩa "nếu cứ...".',
    examples: [
      { ko: '아기가 밤새 울어 대서 잠을 못 잤어요.', vi: 'Vì em bé cứ khóc suốt đêm nên tôi không ngủ được.' },
      { ko: '복도에서 다른 학생들이 떠들어대는 바람에 시험을 망쳤어요.', vi: 'Vì các bạn khác cứ ồn ào ngoài hành lang nên tôi đã làm hỏng bài thi.' },
    ],
    commonMistakes: [
      'Mang sắc thái than phiền, khó chịu rõ rệt — khác với -다가 보니 vốn thiên về đúc kết kinh nghiệm mang tính trung lập hoặc khuyên nhủ.',
    ],
    level: 'cao-cap',
    section: 'nguyen-nhan-ly-do',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân và lý do',
  },
  {
    id: 'gr-cao-cap-17',
    pattern: 'A/V - 아/어 놓아서 / 아/어 놓으니',
    meaningVi: 'Vì vốn dĩ..., vì vẫn... nên... — nhấn mạnh trạng thái vế trước vẫn đang kéo dài',
    usageNotes:
      'Diễn tả nguyên nhân là một hoàn cảnh hay trạng thái nào đó, nhấn mạnh rằng trạng thái ở vế trước vẫn còn kéo dài tại thời điểm nói; cấu trúc chủ yếu dùng với tính từ, phổ biến trong văn nói và thường đi kèm các phó từ 워낙, 원체, 너무.',
    examples: [
      { ko: '워낙 할 일이 많아 놓아서 그 부탁을 들어줄 수 없을 것 같아요.', vi: 'Vì vốn dĩ có quá nhiều việc phải làm nên chắc tôi không thể nhận lời giúp bạn được.' },
      { ko: '가뭄이라 채소가 원체 비싸 놓으니 사다 먹을 수가 있어야지.', vi: 'Vì hạn hán nên rau vốn đã đắt sẵn rồi, làm sao mà mua ăn cho được.' },
    ],
    commonMistakes: [
      'Chủ yếu kết hợp với tính từ và các phó từ nhấn mạnh mức độ (워낙, 원체, 너무) — nếu bỏ các phó từ này câu dễ mất đi sắc thái nhấn mạnh đặc trưng của cấu trúc.',
    ],
    level: 'cao-cap',
    section: 'nguyen-nhan-ly-do',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân và lý do',
  },
  {
    id: 'gr-cao-cap-18',
    pattern: 'A/V - (으)ㄴ/는 까닭에',
    meaningVi: 'Với lý do... nên... — nêu nguyên nhân, thường dùng trong văn viết',
    usageNotes:
      'Diễn tả nguyên nhân của một sự việc, thường được sử dụng trong văn viết.',
    examples: [
      { ko: '면접시험을 보는데 너무 긴장한 까닭에 제대로 답변을 못했어요.', vi: 'Vì quá căng thẳng khi đi phỏng vấn nên tôi đã không trả lời được rõ ràng.' },
      { ko: '사회가 점점 변하고 있는 까닭에 가족에 대한 생각이 달라지고 있다.', vi: 'Vì xã hội đang dần thay đổi nên quan niệm về gia đình cũng đang khác đi.' },
    ],
    commonMistakes: [
      'Là cấu trúc thiên về văn viết, gần nghĩa -기 때문에 nhưng trang trọng hơn, ít khi được dùng trong khẩu ngữ hàng ngày.',
    ],
    level: 'cao-cap',
    section: 'nguyen-nhan-ly-do',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân và lý do',
  },
  {
    id: 'gr-cao-cap-19',
    pattern: 'A/V - 아/어서인지',
    meaningVi: 'Có lẽ vì... nên... — nguyên nhân chưa chắc chắn, mang tính suy đoán',
    usageNotes:
      'Mang ý nghĩa tương tự cấu trúc -아/어서 그런지, dùng khi người nói chưa chắc chắn về nguyên nhân thực sự của một hiện tượng nào đó nên chỉ phỏng đoán.',
    examples: [
      { ko: '기말 시험이 너무 어려워서인지 성적이 안 좋아요.', vi: 'Có lẽ vì kỳ thi cuối kỳ quá khó nên điểm số không tốt.' },
      { ko: '다이어트를 열심히 해서인지 살이 많이 빠졌어요.', vi: 'Có lẽ vì ăn kiêng chăm chỉ nên tôi đã giảm được nhiều cân.' },
    ],
    commonMistakes: [
      'Khác với -아/어서 vốn khẳng định chắc chắn nguyên nhân, -아/어서인지 luôn mang sắc thái phỏng đoán, không chắc chắn tuyệt đối về nguyên nhân thực sự.',
    ],
    level: 'cao-cap',
    section: 'nguyen-nhan-ly-do',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân và lý do',
  },
  {
    id: 'gr-cao-cap-20',
    pattern: 'A/V - (으)ㄹ진대',
    meaningVi: 'Vì... nên... — nhận định một sự thật ở vế trước rồi đưa ra kết luận ở vế sau',
    usageNotes:
      'Nhận định sự thật ở vế trước, từ đó đưa ra một lời giải thích hay kết luận ở vế sau. Đây là cấu trúc cổ văn, mang tính trang trọng cao, hầu như chỉ còn xuất hiện trong văn học hoặc lời nói mang tính triết lý.',
    examples: [
      { ko: '자네가 먹을진대 나도 먹어야겠네.', vi: 'Vì cậu ăn nên tôi cũng phải ăn thôi.' },
    ],
    commonMistakes: [
      'Dễ nhầm với -(으)ㄹ 텐데 (dự đoán, suy đoán) — -(으)ㄹ진대 mang sắc thái nhận định chắc chắn kèm kết luận logic, không phải dự đoán về tương lai.',
    ],
    level: 'cao-cap',
    section: 'nguyen-nhan-ly-do',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân và lý do',
  },
  {
    id: 'gr-cao-cap-21',
    pattern: 'A/V - 거늘',
    meaningVi: 'Đương nhiên vì... nên... — vế trước là chân lý/sự thật hiển nhiên làm nền cho vế sau',
    usageNotes:
      'Nhận định sự thật ở vế trước, vế trước thường là một chân lý hay sự thật hiển nhiên (có thể lấy từ tục ngữ) để làm căn cứ giải thích, so sánh với nội dung vế sau. Là cấu trúc cổ, mang đậm tính văn chương.',
    examples: [
      { ko: '십 년이면 강산도 변하거늘 나라고 어찌 변화가 없었겠소.', vi: 'Mười năm thì núi sông cũng đổi thay, huống chi là tôi, làm sao có thể không thay đổi được.' },
      { ko: '새도 제 집을 찾거늘 하물며 사람이 제 고향을 모른다 하겠는가.', vi: 'Chim còn biết tìm về tổ của mình, huống chi con người lại không biết đến quê hương mình.' },
    ],
    commonMistakes: [
      'Là cấu trúc cổ văn/thành ngữ, gần như chỉ xuất hiện trong tục ngữ, văn học hoặc lời nói triết lý — không dùng trong giao tiếp hiện đại.',
    ],
    level: 'cao-cap',
    section: 'nguyen-nhan-ly-do',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân và lý do',
  },
  {
    id: 'gr-cao-cap-22',
    pattern: 'A/V - (으)ㄴ즉',
    meaningVi: 'Vì... nên... — diễn tả nguyên nhân kết quả, dùng trong văn viết cổ',
    usageNotes:
      'Diễn tả quan hệ nguyên nhân - kết quả, dùng trong văn viết, có thể thay thế bằng -(으)므로.',
    examples: [
      { ko: '어제 일요일인즉 회사에 가지 않았지요.', vi: 'Vì hôm qua là chủ nhật nên tôi đã không đi làm.' },
      { ko: '고향에 가 본즉 모든 것이 몰라보게 달라졌었다.', vi: 'Khi về quê thì mới thấy mọi thứ đã thay đổi đến mức không nhận ra nổi.' },
    ],
    commonMistakes: [
      'Là cấu trúc cổ, trang trọng, gần nghĩa -(으)므로 nhưng hầu như chỉ gặp trong văn viết cổ điển, hiếm dùng trong tiếng Hàn hiện đại.',
    ],
    level: 'cao-cap',
    section: 'nguyen-nhan-ly-do',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân và lý do',
  },
  {
    id: 'gr-cao-cap-23',
    pattern: 'A/V - 았/었는지라 / A/V - 는지라',
    meaningVi: 'Vì... — nhấn mạnh lý do để giải thích cho nội dung vế sau',
    usageNotes:
      'Nhấn mạnh lý do để giải thích cho nội dung được nêu ở vế sau, có thể thay thế bằng -기 때문에.',
    examples: [
      { ko: '밤에 손님이 없는지라 주인은 일찍 문을 닫았어요.', vi: 'Vì ban đêm không có khách nên chủ quán đã đóng cửa sớm.' },
      { ko: '어려울 때마다 그 분이 도와주시는지라 그저 고마울 수밖에요.', vi: 'Vì mỗi khi khó khăn ông ấy đều giúp đỡ nên tôi chỉ biết cảm kích mà thôi.' },
    ],
    commonMistakes: [
      'Là cấu trúc mang tính văn viết/trang trọng, gần nghĩa -기 때문에 nhưng ít dùng trong văn nói hiện đại, thường gặp trong văn chương hoặc lời kể mang tính trần thuật.',
    ],
    level: 'cao-cap',
    section: 'nguyen-nhan-ly-do',
    sectionOrder: 1,
    sectionTitleVi: 'Nguyên nhân và lý do',
  },
  {
    id: 'gr-cao-cap-24',
    pattern: 'V - 느니',
    meaningVi: 'Nếu... thì thà rằng... — so sánh hai lựa chọn đều không hài lòng, chọn cái đỡ tệ hơn',
    usageNotes:
      'Người nói không hài lòng với cả nội dung vế trước lẫn vế sau, nhưng so với vế trước thì hành động hay tình huống ở vế sau vẫn đỡ tệ hơn. Vế sau thường đi cùng các phó từ 차라리, 아예. Biểu hiện tương tự: V - (으)ㄹ 바에야.',
    examples: [
      { ko: '사랑하는 사람과 결혼하지 못하느니 차라리 평생 혼자 사는 게 나아요.', vi: 'Nếu không thể kết hôn với người mình yêu thì thà sống độc thân cả đời còn hơn.' },
      { ko: '민호 씨한테 부탁하느니 시간이 걸려도 나 혼자 할래.', vi: 'Thay vì nhờ Minho, thà tôi tự làm một mình dù có mất thời gian còn hơn.' },
    ],
    commonMistakes: [
      'Cả hai vế đều phải là điều người nói không mong muốn — không dùng khi vế trước là một điều tích cực, vì bản chất cấu trúc luôn hàm ý "chọn cái đỡ tệ hơn trong hai điều không mong muốn".',
    ],
    level: 'cao-cap',
    section: 'lua-chon',
    sectionOrder: 2,
    sectionTitleVi: 'Lựa chọn',
  },
  {
    id: 'gr-cao-cap-25',
    pattern: 'V - (으)ㄹ 바에야',
    meaningVi: 'Đối với việc... mà nói thì... — đưa ra phương án thay thế tốt hơn so với tình huống đang bàn',
    usageNotes:
      'Dùng khi người nói đưa ra một phương án thay thế tốt hơn so với một tình huống đang được đề cập đến, hoặc so với một tình huống giả định trong tương lai. Vế sau thường đi cùng các phó từ 차라리, 아예, 어차피, 기왕에. Biểu hiện tương tự: V - 느니. Có thể dùng dạng -(으)ㄹ 바에는 để thay thế.',
    examples: [
      { ko: '우리 할머니께서는 가만히 누워서 죽음을 기다릴 바에야 위험하더라도 하고 싶은 일을 다 해 보고 싶었다고 말씀하셨어요.', vi: 'Bà tôi nói rằng thay vì nằm im chờ chết, dù có nguy hiểm bà vẫn muốn làm hết những điều mình muốn làm.' },
      { ko: '앉아서 걱정만 할 바에야 아예 밖에 나가서 휴대전화를 찾아 보는 게 나아요.', vi: 'Thay vì ngồi không lo lắng suông, tốt hơn là ra ngoài tìm điện thoại luôn đi.' },
      { ko: '이왕 먹을 바에는 제대로 먹자고.', vi: 'Đã ăn thì ăn cho tử tế đi.' },
    ],
    commonMistakes: [
      'Thường phải kết hợp với các phó từ nhấn mạnh sự dứt khoát (차라리, 아예, 어차피, 기왕에) để câu tự nhiên hơn, nếu thiếu các phó từ này ý nghĩa "chọn phương án thay thế" sẽ kém rõ ràng.',
      'Dễ lẫn với V - 느니 — hai cấu trúc gần như thay thế được cho nhau, nhưng -(으)ㄹ 바에야 thiên về nêu phương án hành động thay thế, còn -느니 thiên về so sánh mức độ không hài lòng.',
    ],
    level: 'cao-cap',
    section: 'lua-chon',
    sectionOrder: 2,
    sectionTitleVi: 'Lựa chọn',
  },
  {
    id: 'gr-cao-cap-26',
    pattern: 'A/V - 건 ... A/V - 건',
    meaningVi: 'Dù... hay... — dù chọn lựa nào thì kết quả vẫn như nhau',
    usageNotes:
      'Là dạng rút gọn của -거나 -거나, dùng khi đưa ra hai lựa chọn có thể so sánh hoặc đối lập nhau, nhưng dù chọn theo lựa chọn nào thì kết quả ở vế sau cũng không thay đổi. Có thể dùng dạng A/V-건 A/V-건 간에, hoặc kết hợp với các từ để hỏi như 뭘, 무슨, 어느.',
    examples: [
      { ko: '수업이 재미있건 재미없건 우리가 수업을 빠지고 놀러 가면 안 돼요.', vi: 'Dù giờ học có thú vị hay không thú vị thì chúng ta cũng không được bỏ học đi chơi.' },
      { ko: '저는 잘생겼건 못생겼건 지혜롭고 유머가 있는 남자를 만났으면 좋겠어요.', vi: 'Dù đẹp trai hay không đẹp trai, tôi chỉ mong gặp được một người đàn ông thông minh và hài hước.' },
      { ko: '내가 뭘 먹건 당신이 왜 참견하세요?', vi: 'Tôi ăn gì thì liên quan gì đến bạn mà can thiệp vậy?' },
    ],
    commonMistakes: [
      'Chỉ dùng khi kết quả ở vế sau không thay đổi bất kể lựa chọn nào ở vế trước xảy ra — nếu kết quả khác nhau tùy theo lựa chọn thì không dùng được cấu trúc này.',
      'Cấu trúc thực chất là lặp lại "A/V-건" hai lần với hai nội dung đối lập hoặc so sánh (ví dụ 좋건 싫건, 가건 말건), không phải một cụm từ cố định duy nhất.',
    ],
    level: 'cao-cap',
    section: 'lua-chon',
    sectionOrder: 2,
    sectionTitleVi: 'Lựa chọn',
  },
  {
    id: 'gr-cao-cap-27',
    pattern: 'A/V - (느)ㄴ다기보다는',
    meaningVi: 'Thay vì nói là... thì... — điều chỉnh lại một nhận định, cho rằng vế sau đúng hơn',
    usageNotes:
      'Dùng để chỉ ra rằng nội dung ở vế sau phù hợp với chủ đề đang bàn luận hơn là nội dung ở vế trước, thường dùng để điều chỉnh nhẹ lại một nhận định vừa được người khác đưa ra. Biểu hiện nhấn mạnh: -(느)ㄴ다기보다도.',
    examples: [
      { ko: '가: 그 식당에 자주 가는 걸 보니 맛이 있나 봐요. 나: 맛이 있다기보다는 우리 집 근처에 있는 식당이 거기밖에 없어서 그래요.', vi: 'A: Thấy bạn hay đến quán đó, chắc là ngon lắm nhỉ. B: Thay vì nói là ngon thì đúng hơn là vì gần nhà tôi chỉ có mỗi quán đó thôi.' },
      { ko: '가: 지민 씨가 한국어 말하기 대회에서 우승을 했다니 머리가 좋은가 봐요. 나: 머리가 좋다기보다는 이번 대회에 노력을 기울이는 거예요.', vi: 'A: Nghe nói Jimin đã đoạt giải nhất cuộc thi nói tiếng Hàn, chắc là thông minh lắm. B: Thay vì nói là thông minh thì đúng hơn là cô ấy đã rất nỗ lực cho cuộc thi lần này.' },
    ],
    commonMistakes: [
      'Không nhầm với các cấu trúc trích dẫn thuần túy như -다면서 — -다기보다는 luôn mang chức năng so sánh, điều chỉnh lại nhận định vừa nêu chứ không đơn thuần trích dẫn lời nói.',
    ],
    level: 'cao-cap',
    section: 'lua-chon',
    sectionOrder: 2,
    sectionTitleVi: 'Lựa chọn',
  },
  {
    id: 'gr-cao-cap-28',
    pattern: 'A/V - (느)ㄴ다니까',
    meaningVi: 'Nghe bảo là... nên..., nói rằng là... nên... — dạng rút gọn của -ㄴ/는다고 하니까',
    usageNotes:
      'Là dạng rút gọn của -ㄴ/는다고 하다 kết hợp -(으)니까, dùng khi vì lời nói của chính người nói hoặc nội dung nghe được từ người khác mà xuất hiện, xảy ra tình huống ở vế sau. Chủ ngữ hai vế phải khác nhau. Dạng nhấn mạnh: -(느)ㄴ다니까는/-(느)ㄴ다니깐. Khi đứng ở cuối câu, không có vế sau, cấu trúc chuyển sang mang ý nhấn mạnh lại ý kiến của người nói, kiểu "đã bảo là... mà".',
    examples: [
      { ko: '친구가 그 영화가 재미있다니까 주말에 그 영화를 봐야겠어요.', vi: 'Nghe bạn bảo bộ phim đó hay nên cuối tuần tôi phải đi xem mới được.' },
      { ko: '비가 올 것 같다니 우산을 가지고 가세요.', vi: 'Nghe nói trời có vẻ sắp mưa nên hãy mang theo ô đi.' },
      { ko: '난 이게 좋다니까.', vi: 'Tôi đã bảo là tôi thích cái này mà.' },
    ],
    commonMistakes: [
      'Chủ ngữ hai vế phải khác nhau — nếu cùng chủ ngữ nên cân nhắc dùng -다고 해서 hoặc cấu trúc nguyên nhân khác.',
      'Khi đứng cuối câu không có vế sau, câu mang ý nhấn mạnh, hơi tranh luận ("đã bảo là... mà"), khác hẳn nghĩa "nghe bảo là... nên" khi câu có đủ hai vế — cần phân biệt theo ngữ cảnh.',
    ],
    level: 'cao-cap',
    section: 'trich-dan',
    sectionOrder: 3,
    sectionTitleVi: 'Trích dẫn',
  },
  {
    id: 'gr-cao-cap-29',
    pattern: 'A/V - (느)ㄴ다면서',
    meaningVi: 'Vừa nói là... vừa..., bảo là... đồng thời... — dạng rút gọn của -(느)ㄴ다고 하면서',
    usageNotes:
      'Thể hiện việc người khác nói lời nào đó và đồng thời thực hiện một hành động khác, hoặc liên kết một lời nói với một lời nói đã đề cập trước đó. Hai vế bắt buộc phải có cùng chủ ngữ và chủ ngữ chỉ xuất hiện một lần ở đầu câu. Có thể dùng dạng rút gọn -(느)ㄴ다며.',
    examples: [
      { ko: '수진 씨가 오늘 회의가 있다면서 회의에 관한 자료를 준비했어요.', vi: 'Sujin vừa nói hôm nay có cuộc họp vừa chuẩn bị tài liệu liên quan đến cuộc họp.' },
      { ko: '선생님께서는 왜 이번 시험에서 떨어졌냐며 열심히 공부하라고 하셨어요.', vi: 'Thầy vừa hỏi tại sao lần này thi trượt, vừa bảo tôi phải học hành chăm chỉ.' },
    ],
    commonMistakes: [
      'Hai vế bắt buộc phải cùng chủ ngữ và chủ ngữ chỉ nêu một lần ở đầu câu — nếu hai vế khác chủ ngữ phải tách thành hai câu riêng, không dùng được -다면서 để nối.',
    ],
    level: 'cao-cap',
    section: 'trich-dan',
    sectionOrder: 3,
    sectionTitleVi: 'Trích dẫn',
  },
  {
    id: 'gr-cao-cap-30',
    pattern: 'A/V - (느)ㄴ다거나',
    meaningVi: 'Hoặc là... hoặc là... — dạng trích dẫn gián tiếp của cấu trúc liệt kê lựa chọn -거나',
    usageNotes:
      'Là dạng trích dẫn gián tiếp của cấu trúc lựa chọn -거나, dùng để liệt kê các khả năng, tính chất khác nhau một cách trung lập, không thiên vị bên nào.',
    examples: [
      { ko: '그 여자는 예쁘다거나 귀엽다거나 하는 것과는 거리가 멀었다.', vi: 'Cô gái đó chẳng liên quan gì đến chuyện xinh đẹp hay dễ thương cả.' },
      { ko: '잘못했다거나 잘했다거나 그냥 내버려 둬.', vi: 'Dù đúng hay sai thì cứ để mặc kệ đi.' },
    ],
    commonMistakes: [
      'Là dạng trích dẫn gián tiếp nên động từ/tính từ phải chia ở dạng câu trần thuật (-다) trước khi thêm -거나, không gắn trực tiếp vào thân từ như -거나 thông thường.',
    ],
    level: 'cao-cap',
    section: 'trich-dan',
    sectionOrder: 3,
    sectionTitleVi: 'Trích dẫn',
  },
  {
    id: 'gr-cao-cap-31',
    pattern: 'A/V - (느)ㄴ다거늘',
    meaningVi: 'Vốn dĩ là... nhưng lại... — dạng trích dẫn mang ý nghĩa tương phản của -거늘',
    usageNotes:
      'Mang ý nghĩa của -거늘: vốn dĩ vế trước vẫn là như vậy (theo điều đã nói/nghe), nhưng vế sau lại có sự khác biệt hoặc trái ngược với điều đó.',
    examples: [
      { ko: '모두들이 괜찮다거늘 혼자만 싫다고 하네.', vi: 'Mọi người đều bảo là ổn, vậy mà một mình cậu lại nói là không thích.' },
      { ko: '다른 사람들은 모두 더웠다거늘 넌 왜 그런 소리도 안 하니?', vi: 'Những người khác đều nói là nóng, sao cậu lại chẳng kêu ca gì vậy?' },
    ],
    commonMistakes: [
      'Là cấu trúc rất hiếm gặp, kết hợp giữa trích dẫn gián tiếp và sắc thái tương phản của -거늘, chủ yếu xuất hiện trong văn viết/văn học, gần như không dùng trong khẩu ngữ hiện đại.',
    ],
    level: 'cao-cap',
    section: 'trich-dan',
    sectionOrder: 3,
    sectionTitleVi: 'Trích dẫn',
  },
  {
    id: 'gr-cao-cap-32',
    pattern: 'A/V - (느)ㄴ다건만',
    meaningVi: 'Vốn nói là... vậy mà... — dạng trích dẫn của cấu trúc tương phản -건만/-건마는',
    usageNotes:
      'Là dạng trích dẫn gián tiếp của cấu trúc tương phản -건만/-건마는, dùng khi điều đã được nói ra ở vế trước trái ngược với thực tế hoặc kết quả được nêu ở vế sau.',
    examples: [
      { ko: '그는 전에 꽤 착한 학생이었다건만 어쩌다가 이렇게 되었나?', vi: 'Trước đây nghe nói anh ta từng là một học sinh khá ngoan, vậy sao giờ lại ra nông nỗi này?' },
      { ko: '그는 부유한 집 아들이었다건만 지금 집 한 채도 없어요.', vi: 'Nghe nói anh ta từng là con nhà giàu, vậy mà giờ không có nổi một căn nhà.' },
    ],
    commonMistakes: [
      'Là cấu trúc trích dẫn hiếm gặp, mang sắc thái văn viết/văn học; dễ nhầm với -다면서 (trích dẫn trung lập) — -다건만 luôn hàm ý tương phản, bất ngờ giữa điều đã nghe và thực tế.',
    ],
    level: 'cao-cap',
    section: 'trich-dan',
    sectionOrder: 3,
    sectionTitleVi: 'Trích dẫn',
  },
  {
    id: 'gr-cao-cap-33',
    pattern: 'A/V - (느)ㄴ다고나 할까요?',
    meaningVi: 'Liệu có phải là... — diễn đạt gián tiếp, dè dặt một nhận định thay vì nói thẳng',
    usageNotes:
      'Ở dạng câu hỏi, người nói không nói thẳng ra mà dùng cách hỏi để nói tránh, nhằm làm giảm nhẹ mức độ khẳng định của nhận định mình đang đưa ra.',
    examples: [
      { ko: '드라마는 인생과 비슷하다고나 할까?', vi: 'Có lẽ nói phim truyền hình giống với cuộc đời cũng không sai?' },
      { ko: '제 성격은 좀 내성적이라고나 할까요?', vi: 'Có lẽ nói tính cách của tôi hơi hướng nội thì đúng hơn?' },
    ],
    commonMistakes: [
      'Là cách nói tránh, dè dặt — không dùng khi muốn khẳng định dứt khoát một điều gì đó, vì bản chất cấu trúc luôn mang sắc thái phỏng đoán, ngập ngừng.',
    ],
    level: 'cao-cap',
    section: 'trich-dan',
    sectionOrder: 3,
    sectionTitleVi: 'Trích dẫn',
  },
  {
    id: 'gr-cao-cap-34',
    pattern: 'A/V - (느)ㄴ다는데야',
    meaningVi: 'Một khi đã nói là... thì... — không còn cách nào khác ngoài chấp nhận điều đó',
    usageNotes:
      'Dùng khi, một khi đã ở trong điều kiện hoặc tình huống được nói ra ở vế trước thì không còn ai có thể làm gì khác được nữa, đành phải chấp nhận. Thường xuất hiện trong câu hỏi tu từ.',
    examples: [
      { ko: '제가 싫다는데야 부모인들 강요할 수 있나?', vi: 'Một khi tôi đã nói là không thích thì dù có là bố mẹ cũng đâu thể ép buộc được?' },
    ],
    commonMistakes: [
      'Thường đi kèm câu hỏi tu từ ở vế sau để nhấn mạnh "không ai có thể làm gì khác" — nếu tách khỏi ngữ cảnh này, ý nghĩa dễ bị hiểu sai.',
    ],
    level: 'cao-cap',
    section: 'trich-dan',
    sectionOrder: 3,
    sectionTitleVi: 'Trích dẫn',
  },
  {
    id: 'gr-cao-cap-35',
    pattern: 'A/V - (느)ㄴ다더군요 / (느)ㄴ다던데요 / (느)ㄴ다더라고요',
    meaningVi: 'Nghe nói là... — hồi tưởng và truyền đạt lại điều đã nghe được từ người khác',
    usageNotes:
      'Đều là các dạng hồi tưởng lại điều đã nghe thấy được từ người khác trong quá khứ rồi kể lại cho người nghe ở hiện tại; sắc thái thân mật, chủ yếu dùng trong văn nói.',
    examples: [
      { ko: '장마 주의보가 내렸다더군요.', vi: 'Nghe nói là đã có cảnh báo mùa mưa rồi đấy.' },
      { ko: '그 영화 재미있다더라.', vi: 'Nghe nói bộ phim đó hay lắm đấy.' },
      { ko: '유미네 집은 식구가 많다던데.', vi: 'Nghe nói nhà Yumi đông người lắm.' },
    ],
    commonMistakes: [
      'Ba dạng -더군요/-던데요/-더라고요 có sắc thái gần giống nhau nhưng -더라고요 thân mật hơn, -군요 mang thêm sắc thái ngạc nhiên nhẹ, -던데요 thường để ngỏ một ý phía sau — cần chọn đúng theo ngữ cảnh và mức độ trang trọng.',
      'Đều yêu cầu người nói đã trực tiếp nghe thông tin đó trong quá khứ (hồi tưởng), không dùng để suy đoán hay diễn đạt điều vừa mới nghe ngay lúc nói.',
    ],
    level: 'cao-cap',
    section: 'trich-dan',
    sectionOrder: 3,
    sectionTitleVi: 'Trích dẫn',
  },
  {
    id: 'gr-cao-cap-36',
    pattern: 'A/V - (느)ㄴ다든가 – A/V - (느)ㄴ다든지',
    meaningVi: 'Nào là... nào là... — liệt kê các lựa chọn, khả năng ở dạng trích dẫn gián tiếp',
    usageNotes:
      'Liệt kê các lựa chọn, khả năng khác nhau ở dạng trích dẫn gián tiếp, tương tự -거나 -거나 nhưng dùng cho câu trích dẫn. Hai dạng -든가 và -든지 dùng thay thế được cho nhau.',
    examples: [
      { ko: '집에 가겠다든가 남아 있겠다든가 말을 해야지?', vi: 'Cậu phải nói rõ là sẽ về nhà hay ở lại chứ?' },
      { ko: '옳다든가 그르다든가 하는 판단을 해야 한다.', vi: 'Phải đưa ra phán đoán xem là đúng hay là sai.' },
      { ko: '같이 가겠다든지 안 가겠다든지 말을 해야 널 기다리든지 말든지 할 거 아냐?', vi: 'Cậu phải nói là sẽ đi cùng hay không đi chứ, thì tôi mới biết đợi cậu hay không đợi được chứ?' },
    ],
    commonMistakes: [
      '-든가 và -든지 dùng gần như tương đương nhau, có thể hoán đổi tự do trong hầu hết trường hợp.',
      'Cần phân biệt với A/V-거나 A/V-거나 thông thường (không phải dạng trích dẫn) — -든가/-든지 dạng trích dẫn dùng khi liệt kê lời nói/quyết định được nêu ra, còn -거나 dùng cho hành động/trạng thái trực tiếp.',
    ],
    level: 'cao-cap',
    section: 'trich-dan',
    sectionOrder: 3,
    sectionTitleVi: 'Trích dẫn',
  },
  {
    id: 'gr-cao-cap-37',
    pattern: 'A/V - (느)ㄴ다손 치더라도',
    meaningVi: 'Dù có... đi nữa thì cũng... — nhận định điều ở vế trước, coi như không ảnh hưởng đến vế sau',
    usageNotes:
      'Nhận định lời nói hoặc tình huống ở vế trước và cho rằng dù vậy cũng không gây ảnh hưởng gì đến kết luận ở vế sau. Có thể thay thế bằng -다고 하더라도.',
    examples: [
      { ko: '아무리 바쁘다손 치더라도 밥은 먹어야 한다.', vi: 'Dù có bận rộn đến đâu thì cũng phải ăn cơm.' },
      { ko: '아무리 빨리 간다손 치더라도 약속 시간에 맞춰 갈 수는 없다.', vi: 'Dù có đi nhanh đến đâu thì cũng không thể đến kịp giờ hẹn.' },
    ],
    commonMistakes: [
      'Thường đi kèm 아무리 ở vế trước để nhấn mạnh sắc thái nhượng bộ cực đoan; vì là cấu trúc trích dẫn (có -다) nên không gắn trực tiếp vào thân từ như -더라도 thông thường.',
    ],
    level: 'cao-cap',
    section: 'trich-dan',
    sectionOrder: 3,
    sectionTitleVi: 'Trích dẫn',
  },
  {
    id: 'gr-cao-cap-38',
    pattern: 'A/V - (느)ㄴ다지 뭐예요?',
    meaningVi: 'Bảo là... cái gì cơ, mà vẫn còn nói là... — không hài lòng/ngạc nhiên sau khi nghe điều gì đó',
    usageNotes:
      'Sau khi nghe điều gì đó từ người khác, người nói tỏ ra chưa hài lòng hoặc ngạc nhiên về điều đó. Là dạng trích dẫn của cấu trúc -이/가 뭐예요? (cái gì mà...).',
    examples: [
      { ko: '제 할아버지를 닮았다지 뭐예요?', vi: 'Bảo là giống ông tôi cơ đấy, thế có lạ không?' },
      { ko: '좋은 집을 소개해 주었더니 벌써 하숙집을 찾았다지 뭐예요?', vi: 'Tôi giới thiệu cho nhà tốt vậy mà bảo là đã tìm được nhà trọ khác rồi cơ đấy.' },
    ],
    commonMistakes: [
      'Luôn mang sắc thái ngạc nhiên pha chút không hài lòng hoặc buồn cười về điều vừa nghe được — không dùng để trích dẫn thông tin một cách trung lập, khách quan.',
    ],
    level: 'cao-cap',
    section: 'trich-dan',
    sectionOrder: 3,
    sectionTitleVi: 'Trích dẫn',
  },
  {
    id: 'gr-cao-cap-39',
    pattern: 'A/V - (으)ㅁ',
    meaningVi: 'Danh từ hóa động từ/tính từ — dùng trong văn phong trung tính, thông báo, ghi chú',
    usageNotes:
      'Dùng khi chuyển đổi động từ hoặc tính từ sang dạng danh từ, để thông báo ngắn gọn về một sự việc, thực tế nào đó. Chủ yếu dùng trong văn viết như tin tức, tờ hướng dẫn, quảng cáo, ghi chú — mang văn phong trung tính, truyền đạt thông tin cho nhiều đối tượng khác nhau. Ngoài ra còn dùng để danh từ hóa mệnh đề nhằm kết hợp với nhiều cấu trúc ngữ pháp cao cấp khác. Một số từ danh từ hóa đã trở thành từ vựng cố định, ví dụ: 믿음, 죽음, 웃음, 걸음, 얼음, 꿈, 삶, 기쁨, 슬픔, 도움, 모임, 싸움, 느낌.',
    examples: [
      { ko: '연구 결과에 따르면 된장은 혈압을 낮추는 효능이 있음을 알 수 있다.', vi: 'Theo kết quả nghiên cứu, có thể thấy tương đậu (doenjang) có tác dụng làm hạ huyết áp.' },
      { ko: '비가 오겠음.', vi: 'Trời sẽ có mưa.' },
    ],
    commonMistakes: [
      'Dễ nhầm với -기 (cũng dùng để danh từ hóa) — -(으)ㅁ thiên về một sự việc đã/đang diễn ra hoặc một thực tế khách quan, còn -기 thiên về hành động nói chung, mang tính trừu tượng hoặc chưa xảy ra.',
    ],
    level: 'cao-cap',
    section: 'danh-tu-hoa',
    sectionOrder: 4,
    sectionTitleVi: 'Danh từ hoá',
  },
  {
    id: 'gr-cao-cap-40',
    pattern: 'V - 는 데(에)(는)',
    meaningVi: 'Đối với việc, cho việc... — thay cho -는 것/일/경우/상황 khi nói về hiệu quả, mục đích',
    usageNotes:
      'Mang ý nghĩa tương đương -는 일, -는 것, -는 경우 hay -는 상황. Chủ yếu được dùng cùng các cụm từ như 도움이 되다, 효과가 있다/없다, 좋다/나쁘다, 필요하다, 몰두하다, 최선을 다하다, 사용하다, 걸리다, 들다. Có thể dùng dưới dạng -는 데에, hoặc thêm 는 để nhấn mạnh.',
    examples: [
      { ko: '김치가 노화를 억제하고 암을 예방하는 데(에) 도움이 된다고 한다.', vi: 'Nghe nói kim chi có ích cho việc ngăn ngừa lão hóa và phòng ngừa ung thư.' },
      { ko: '그 작가가 이 작품을 완성하는 데(에) 10 년이나 걸린다고 한다.', vi: 'Nghe nói tác giả đó đã phải mất tới 10 năm để hoàn thành tác phẩm này.' },
    ],
    commonMistakes: [
      'Dễ nhầm với đuôi câu nối -는데 (nghĩa "nhưng, trong khi") — -는 데(에) ở đây là danh từ hóa mang nghĩa "việc, chuyện", cần viết cách với 데 và thường đi cùng các cụm từ đánh giá hiệu quả như đã nêu.',
    ],
    level: 'cao-cap',
    section: 'danh-tu-hoa',
    sectionOrder: 4,
    sectionTitleVi: 'Danh từ hoá',
  },
  {
    id: 'gr-cao-cap-41',
    pattern: '- 는 바',
    meaningVi: 'Điều mà, việc mà (đã được nêu ở trên) — danh từ hóa mang nghĩa gần giống 것, 일',
    usageNotes:
      'Thể hiện việc hoặc nội dung trong lời nói được nhắc đến ở phía trước. Danh từ phụ thuộc 바 có ý nghĩa giống 것, 일. Thường được sử dụng dưới các dạng: -는 바로는, -는 바가, -는 바를, -는 바에 대해, -는 바에 의하면/따르면, -는 바와 같이, -는 바가 있다/없다.',
    examples: [
      { ko: '한 대학 기관이 조사한 바에 따르면 김치가 다이어트에 좋다고 한다.', vi: 'Theo điều tra của một cơ quan đại học, kim chi được cho là tốt cho việc ăn kiêng.' },
      { ko: '정부는 집값 상승에 대해 아직까지 확정된 바가 없다고 전하고 있다.', vi: 'Chính phủ cho biết vẫn chưa có điều gì được xác định về việc giá nhà tăng.' },
    ],
    commonMistakes: [
      'Là cấu trúc trang trọng của văn viết/tin tức, thường xuất hiện trong các cụm cố định như -는 바에 따르면/의하면 (theo như...) — không tự do kết hợp như 것 hay 일 trong văn nói hàng ngày.',
    ],
    level: 'cao-cap',
    section: 'danh-tu-hoa',
    sectionOrder: 4,
    sectionTitleVi: 'Danh từ hoá',
  },
  {
    id: 'gr-cao-cap-42',
    pattern: 'A/V - 더라도',
    meaningVi: 'Dù, dù rằng... — công nhận vế trước nhưng vế sau hoàn toàn không phụ thuộc vào đó',
    usageNotes:
      'Thể hiện sự nhượng bộ hoặc giả định, dùng khi công nhận sự thật ở vế trước nhưng hành động hay kết quả được yêu cầu ở vế sau hoàn toàn không liên quan hoặc không phụ thuộc vào vế trước. Có thể dùng dạng trích dẫn -다고 하더라도/-다더라도 để nhấn mạnh. Thường đi cùng với 아무리.',
    examples: [
      { ko: '코로나 19 백신을 접종했더라도 코로나 19 에 감염될 가능성이 있다.', vi: 'Dù đã tiêm vắc-xin COVID-19 thì vẫn có khả năng bị nhiễm COVID-19.' },
      { ko: '시험에 모르는 것이 나오더라도 당황해 하지 말고 침착하게 풀어 나가세요.', vi: 'Dù trong bài thi xuất hiện phần không biết thì cũng đừng hoảng, hãy bình tĩnh giải quyết.' },
      { ko: '아무리 못 올 일이 생겼다더라도 알려 줘야 할 게 아니냐?', vi: 'Dù có xảy ra chuyện gì khiến không đến được thì cũng phải báo cho biết chứ?' },
    ],
    commonMistakes: [
      'Dễ nhầm với -아/어도 — -더라도 mang sắc thái nhượng bộ mạnh hơn, thường dùng cho giả định trong tương lai hoặc tình huống ít chắc chắn hơn.',
      'Không nhầm với -(으)ㄴ들 (giả định kèm kết quả trái ngược hoàn toàn với mong đợi) — -더라도 trung tính hơn, chỉ đơn thuần nói kết quả vế sau không phụ thuộc vào vế trước.',
    ],
    level: 'cao-cap',
    section: 'gia-dinh-nhuong-bo',
    sectionOrder: 5,
    sectionTitleVi: 'Tình huống giả định, nhượng bộ',
  },
  {
    id: 'gr-cao-cap-43',
    pattern: 'A/V - 다손 치더라도',
    meaningVi: 'Cho dù... đi nữa thì... — nhận định điều vế trước, xem như không ảnh hưởng đến vế sau',
    usageNotes:
      'Nhận định lời nói hay tình huống ở vế trước và cho rằng dù vậy cũng không gây ảnh hưởng gì đến kết luận ở vế sau. Có thể thay thế bằng -다고 하더라도. Đây là cùng một cấu trúc gốc với -(느)ㄴ다손 치더라도 (mục Trích dẫn) nhưng được nhấn mạnh ở khía cạnh nhượng bộ, giả định tình huống.',
    examples: [
      { ko: '아무리 바쁘다손 치더라도 밥은 먹어야 한다.', vi: 'Dù có bận rộn đến đâu thì cũng phải ăn cơm.' },
      { ko: '아무리 빨리 간다손 치더라도 약속 시간에 맞춰 갈 수는 없다.', vi: 'Dù có đi nhanh đến đâu thì cũng không thể đến kịp giờ hẹn.' },
    ],
    commonMistakes: [
      'Luôn cần đi kèm 아무리 ở vế trước để nhấn mạnh sắc thái nhượng bộ cực đoan.',
    ],
    level: 'cao-cap',
    section: 'gia-dinh-nhuong-bo',
    sectionOrder: 5,
    sectionTitleVi: 'Tình huống giả định, nhượng bộ',
  },
  {
    id: 'gr-cao-cap-44',
    pattern: 'A/V - (으)ㄹ지라도',
    meaningVi: 'Cho dù... — nhượng bộ mạnh, kết quả vế sau trái với mong đợi từ vế trước',
    usageNotes:
      'Nhấn mạnh rằng dù vế trước đưa ra một tình huống nào đó và được công nhận hay giả định là đúng, kết quả ở vế sau vẫn đối lập hoặc khác với mong đợi từ vế trước. Có sắc thái nhấn mạnh hơn -아/어도. Thường đi cùng 아무리, 비록. Biểu hiện tương tự: -(으)ㄹ지언정.',
    examples: [
      { ko: '개인 능력이 매우 뛰어날지라도 팀워크에 문제가 있다면 제 실력을 발휘하기는 쉽지 않아요.', vi: 'Cho dù năng lực cá nhân có xuất sắc đến đâu, nếu làm việc nhóm có vấn đề thì cũng khó phát huy hết thực lực.' },
      { ko: '그 사람이 아마추어 선수일지언정 스포츠에 대한 열정은 프로 선수 못지않아요.', vi: 'Dù người đó là vận động viên nghiệp dư nhưng lòng nhiệt huyết với thể thao không thua kém gì vận động viên chuyên nghiệp.' },
      { ko: '몸은 비록 작을지라도 품은 뜻은 크다.', vi: 'Dù thân hình nhỏ bé nhưng chí hướng lại lớn lao.' },
    ],
    commonMistakes: [
      'Ví dụ thứ hai trong nguồn thực chất dùng đuôi -ㄹ지언정, cho thấy tài liệu gốc coi -ㄹ지라도 và -ㄹ지언정 gần như thay thế được cho nhau dù sắc thái có khác biệt nhỏ (지언정 thiên về vế sau mang tính phủ định).',
      'Mang sắc thái trang trọng, nhấn mạnh hơn -아/어도 — không phù hợp với văn nói suồng sã hàng ngày.',
    ],
    level: 'cao-cap',
    section: 'gia-dinh-nhuong-bo',
    sectionOrder: 5,
    sectionTitleVi: 'Tình huống giả định, nhượng bộ',
  },
  {
    id: 'gr-cao-cap-45',
    pattern: 'A/V - (으)ㄴ들',
    meaningVi: 'Cứ cho là... thì... — dù nội dung giả định được công nhận, kết quả vế sau vẫn khác dự kiến',
    usageNotes:
      'Cho dù nội dung giả định ở vế trước được công nhận là đúng thì kết quả xảy ra ở vế sau cũng khác với những gì dự kiến, thường theo hướng không đạt được mục đích mong muốn. Có thể thay thế bằng cấu trúc "다 할지라도".',
    examples: [
      { ko: '밤마다 야식을 먹으면 매일 규칙적으로 운동을 한들 다이어트에 실패할 거예요.', vi: 'Nếu đêm nào cũng ăn khuya thì dù có tập thể dục đều đặn mỗi ngày cũng sẽ thất bại trong việc ăn kiêng.' },
      { ko: '병원에서 치료를 받은들 약을 제때 안 먹으면 빨리 낫기 힘들어요.', vi: 'Dù có được điều trị ở bệnh viện, nếu không uống thuốc đúng giờ thì cũng khó mà khỏi nhanh được.' },
    ],
    commonMistakes: [
      'Vế sau luôn mang kết quả trái với mong đợi hoặc phủ định hiệu quả của vế trước — không dùng khi vế sau là một kết quả tích cực, thuận theo vế trước.',
    ],
    level: 'cao-cap',
    section: 'gia-dinh-nhuong-bo',
    sectionOrder: 5,
    sectionTitleVi: 'Tình huống giả định, nhượng bộ',
  },
  {
    id: 'gr-cao-cap-46',
    pattern: 'A/V - (으)ㄹ 망정',
    meaningVi: 'Cho dù... nhưng... — nhấn mạnh sự thật ở vế sau hoàn toàn khác với suy nghĩ thông thường',
    usageNotes:
      'Nhấn mạnh rằng sự thật hoặc quyết tâm nào đó nêu ở vế sau hoàn toàn khác với suy nghĩ thông thường, mặc cho tình huống cực đoan hoặc bất lợi được nêu ở vế trước.',
    examples: [
      { ko: '평생 혼자 살망정 결혼을 하지는 않겠어요.', vi: 'Cho dù có phải sống một mình cả đời thì tôi cũng sẽ không kết hôn.' },
      { ko: '아무리 자신의 실수로 다쳤다고 해도 아픈 사람한테 화를 내면 안 되잖아요.', vi: 'Dù có là do lỗi của chính mình mà bị thương đi nữa thì cũng không được nổi giận với người đang đau chứ.' },
    ],
    commonMistakes: [
      'Vế trước thường nêu một tình huống cực đoan, ít khi xảy ra, vế sau là một quyết tâm hoặc khẳng định mạnh mẽ trái ngược — không dùng cho các tình huống thông thường, nhẹ nhàng.',
    ],
    level: 'cao-cap',
    section: 'gia-dinh-nhuong-bo',
    sectionOrder: 5,
    sectionTitleVi: 'Tình huống giả định, nhượng bộ',
  },
  {
    id: 'gr-cao-cap-47',
    pattern: 'A/V - (느)ㄴ다고 치다',
    meaningVi: 'Cứ cho là... — thừa nhận tạm thời một hoàn cảnh giả định để tiếp tục bàn luận',
    usageNotes:
      'Thể hiện sự thừa nhận, chấp nhận tạm thời, coi là như thế về một hoàn cảnh hay tình huống nào đó. Mệnh đề sau thường bác bỏ lại mệnh đề trước hoặc nêu ra vấn đề nảy sinh nếu người ta thừa nhận điều đó.',
    examples: [
      { ko: '가: 영어 책이 어디에 있는지 모르겠어요. 내일 영어 수업이 있는데요. 나: 그냥 잊어버렸다고 치고 새로 사는 게 어때요?', vi: 'A: Tôi không biết sách tiếng Anh ở đâu. Mai lại có tiết tiếng Anh nữa. B: Thôi cứ coi như là bị mất rồi, mua quyển mới đi có được không?' },
      { ko: '가: 내일 말하기 시험이 있는데 연습하는 것 좀 도와줄 수 있나요? 나: 좋아요. 그럼 내가 선생님이라고 치고 말해 보세요. 듣고 평가해 줄게요.', vi: 'A: Mai tôi có bài thi nói, bạn có thể giúp tôi luyện tập không? B: Được thôi. Vậy thì cứ coi như tôi là giáo viên, bạn nói thử đi. Tôi sẽ nghe và nhận xét cho.' },
    ],
    commonMistakes: [
      'Luôn mang tính giả định tạm thời để phục vụ mục đích nói tiếp (thường là lời khuyên hoặc đề xuất) — không dùng để khẳng định một sự thật chắc chắn.',
    ],
    level: 'cao-cap',
    section: 'gia-dinh-nhuong-bo',
    sectionOrder: 5,
    sectionTitleVi: 'Tình huống giả định, nhượng bộ',
  },
  {
    id: 'gr-cao-cap-48',
    pattern: 'V - 는 셈 치다',
    meaningVi: 'Cứ coi như là, xem như là... — giả định vế trước làm tiền đề để chấp nhận vế sau',
    usageNotes:
      'Giả định nội dung ở vế trước, qua đó làm tiền đề để thực hiện hoặc chấp nhận việc nào đó ở vế sau — thường dùng khi người nói tự thuyết phục bản thân chấp nhận một việc bằng cách coi nó tương đương với một việc khác dễ chấp nhận hơn.',
    examples: [
      { ko: '가: 얼마 전에는 한국어를 배우더니 또 중국어를 배워서 뭐 하려고요? 나: 지금 배워 두면 나중에 쓸 일이 있겠죠. 미래를 위해 투자하는 셈치고 배워 보려고요.', vi: 'A: Mới học tiếng Hàn xong giờ lại học thêm tiếng Trung để làm gì vậy? B: Học từ bây giờ thì sau này chắc sẽ có lúc dùng đến. Tôi định coi như đầu tư cho tương lai mà học thử.' },
      { ko: '가: 도와주신 것에 감사해서 영화권을 준비했어요. 이 걸 받으세요. 나: 마음은 고맙지만 받은 셈칠 테니까 그냥 넣어 두세요.', vi: 'A: Để cảm ơn bạn đã giúp đỡ, tôi đã chuẩn bị vé xem phim, bạn nhận đi. B: Cảm ơn tấm lòng, nhưng cứ coi như tôi đã nhận rồi, bạn cất đi nhé.' },
    ],
    commonMistakes: [
      'Dễ nhầm với -(느)ㄴ다고 치다 — -는 셈 치다 thiên về việc "coi một hành động/kết quả tương đương với việc khác" để tự thuyết phục bản thân, còn -는다고 치다 thiên về giả định một hoàn cảnh để tiếp tục bàn luận.',
    ],
    level: 'cao-cap',
    section: 'gia-dinh-nhuong-bo',
    sectionOrder: 5,
    sectionTitleVi: 'Tình huống giả định, nhượng bộ',
  },
  {
    id: 'gr-cao-cap-49',
    pattern: 'A/V - (으)ㄹ지언정',
    meaningVi: 'Dù... thì... — nhượng bộ mạnh, vế sau thường ở dạng phủ định để bác bỏ khả năng đó',
    usageNotes:
      'Cho dù nội dung giả định ở vế trước được công nhận thì kết quả xảy ra ở vế sau vẫn khó được chấp nhận hoặc trái ngược hoàn toàn. Vế sau thường dùng ở dạng phủ định để phủ nhận mạnh mẽ.',
    examples: [
      { ko: '가난할지언정 거짓말은 안 한다.', vi: 'Dù có nghèo thì tôi cũng không nói dối.' },
      { ko: '비록 실업자로 지낼지언정 희망은 버릴 수 없어요.', vi: 'Dù có phải sống thất nghiệp thì tôi cũng không thể từ bỏ hy vọng.' },
    ],
    commonMistakes: [
      'Vế sau bắt buộc thiên về phủ định hoặc thể hiện một quyết tâm/nguyên tắc bất di bất dịch — khác với -(으)ㄹ지라도 vốn trung tính hơn và không bắt buộc phủ định ở vế sau.',
    ],
    level: 'cao-cap',
    section: 'gia-dinh-nhuong-bo',
    sectionOrder: 5,
    sectionTitleVi: 'Tình huống giả định, nhượng bộ',
  },
  {
    id: 'gr-cao-cap-50',
    pattern: 'A/V - 아/어 봤자',
    meaningVi: 'Dù... thì cũng chẳng ích gì... — giả định vế trước xảy ra thì cũng vô ích',
    usageNotes:
      'Cho dù nội dung giả định ở vế trước có xảy ra thì cũng không mang lại tác dụng hay kết quả đáng kể nào. Ngữ pháp có thể thay thế: -아/어 봐야.',
    examples: [
      { ko: '그에게 충고해 봤자 소용없어요.', vi: 'Có khuyên anh ta thì cũng vô ích thôi.' },
      { ko: '노력해봤자 그 사람은 따라갈 수 없을 거야.', vi: 'Có cố gắng đến mấy thì cũng không thể theo kịp người đó đâu.' },
    ],
    commonMistakes: [
      'Luôn mang sắc thái bi quan, cho rằng hành động ở vế trước là vô ích — không nên dùng khi muốn động viên ai đó cố gắng, dễ gây hiểu lầm là đang chê bai nỗ lực của người nghe.',
    ],
    level: 'cao-cap',
    section: 'gia-dinh-nhuong-bo',
    sectionOrder: 5,
    sectionTitleVi: 'Tình huống giả định, nhượng bộ',
  },
  {
    id: 'gr-cao-cap-51',
    pattern: 'V - 기가 무섭게 = V - 기가 바쁘게',
    meaningVi: 'Xong một cái là..., ngay sau khi... — hành động sau diễn ra ngay khi hành động trước vừa dứt',
    usageNotes:
      'Diễn tả một hành động nào đó diễn ra ngay lập tức sau khi hành động ở vế trước vừa kết thúc, thường dùng ở dạng khẩu ngữ. Có thể thay thế bằng -자마자.',
    examples: [
      { ko: '수업이 끝나면 선생님이 나가시기가 무섭게 학생들이 학교 식당에 달려가요.', vi: 'Hễ thầy giáo vừa ra khỏi lớp sau khi hết tiết là học sinh đã chạy ngay đến căng tin trường.' },
      { ko: '새 영화가 개봉하기가 무섭게 친구들과 같이 극장에 보러 가요.', vi: 'Phim mới vừa công chiếu là tôi cùng bạn bè đi xem ngay ở rạp.' },
    ],
    commonMistakes: [
      'Là cấu trúc khẩu ngữ, nhấn mạnh sự nhanh chóng, gấp gáp giữa hai hành động hơn -자마자 — không phù hợp dùng trong văn viết trang trọng.',
    ],
    level: 'cao-cap',
    section: 'hanh-dong-tuan-tu',
    sectionOrder: 6,
    sectionTitleVi: 'Hành động tuần tự',
  },
  {
    id: 'gr-cao-cap-52',
    pattern: 'V - 자',
    meaningVi: 'Ngay khi... thì... — hành động sau xảy ra ngay lập tức, mang tính nhân quả tự nhiên',
    usageNotes:
      'Sau khi hành động ở vế trước kết thúc, hành động ở vế sau diễn ra ngay lập tức; hai vế mang tính nhân quả với nhau, thường mô tả điều diễn ra một cách tự nhiên, hễ A vừa xảy ra thì dễ dàng kéo theo B. Vế sau không chia mệnh lệnh, cầu khiến và thường ở thì quá khứ. Có thể thay thế bằng -자마자 trong mọi trường hợp (dù chiều ngược lại không phải lúc nào cũng đúng). Chủ yếu dùng trong văn viết.',
    examples: [
      { ko: '버스가 출발하자 사람들은 움직였어요.', vi: 'Ngay khi xe buýt vừa chuyển bánh, mọi người đã lay động theo.' },
      { ko: '비행기 바퀴가 땅에 닿자 승객들이 자리에서 일어났어요.', vi: 'Ngay khi bánh máy bay vừa chạm đất, hành khách đã đứng dậy khỏi chỗ ngồi.' },
    ],
    commonMistakes: [
      'Vế sau không được chia mệnh lệnh, cầu khiến và thường ở thì quá khứ — khác với -는 대로 vốn thường dùng cho kế hoạch, mệnh lệnh trong tương lai.',
    ],
    level: 'cao-cap',
    section: 'hanh-dong-tuan-tu',
    sectionOrder: 6,
    sectionTitleVi: 'Hành động tuần tự',
  },
  {
    id: 'gr-cao-cap-53',
    pattern: 'V - 는 대로',
    meaningVi: 'Ngay khi... thì... — dùng cho kế hoạch, ý chí, mệnh lệnh ở hiện tại/tương lai',
    usageNotes:
      'Sau khi hành động ở vế trước kết thúc, hành động ở vế sau diễn ra ngay lập tức; vế sau thường thể hiện ý chí của chủ thể, hoặc ở dạng mệnh lệnh, cầu khiến, lời hứa hẹn, kế hoạch trong hiện tại và tương lai. Vế sau không được chia quá khứ. Có thể thay thế bằng -자마자 trong mọi trường hợp.',
    examples: [
      { ko: '서울에 도착하는 대로 전화할게요.', vi: 'Ngay khi đến Seoul, tôi sẽ gọi điện cho bạn.' },
      { ko: '이 책을 다 읽는 대로 반납해 주시기를 바랍니다.', vi: 'Mong bạn trả lại cuốn sách này ngay sau khi đọc xong.' },
    ],
    commonMistakes: [
      'Vế sau không được chia quá khứ, chỉ dùng cho hành động tương lai/mệnh lệnh/lời hứa — khác với V-자 vốn chỉ mô tả sự việc đã xảy ra trong quá khứ theo trình tự tự nhiên.',
    ],
    level: 'cao-cap',
    section: 'hanh-dong-tuan-tu',
    sectionOrder: 6,
    sectionTitleVi: 'Hành động tuần tự',
  },
  {
    id: 'gr-cao-cap-54',
    pattern: 'V - 는 한',
    meaningVi: 'Chỉ với điều kiện, chỉ khi... — điều kiện tiên quyết để vế sau được thực hiện',
    usageNotes:
      'Diễn tả điều kiện, tiền đề hay yêu cầu về một hành động hoặc trạng thái nào đó; chỉ khi thỏa mãn điều kiện ở vế trước thì nội dung ở vế sau mới được thực hiện hoặc đủ tiêu chuẩn xảy ra.',
    examples: [
      { ko: '구매한 영수증을 가지고 있는 한 어제 산 제품을 환불할 수 있다.', vi: 'Chỉ cần còn giữ hóa đơn mua hàng thì có thể trả lại sản phẩm đã mua hôm qua.' },
      { ko: '단 것을 먹지 않고 계속 운동을 하는 한 다이어트에 성공할 수 있다.', vi: 'Chỉ cần không ăn đồ ngọt và tiếp tục tập luyện thì có thể thành công trong việc ăn kiêng.' },
    ],
    commonMistakes: [
      'Nhấn mạnh tính điều kiện bắt buộc, giới hạn phạm vi ("chỉ trong trường hợp này") — khác với -(으)면 thông thường vốn chỉ nêu điều kiện chung chung, không nhấn mạnh tính duy nhất, giới hạn.',
    ],
    level: 'cao-cap',
    section: 'dieu-kien-quyet-dinh',
    sectionOrder: 7,
    sectionTitleVi: 'Điều kiện và quyết định',
  },
  {
    id: 'gr-cao-cap-55',
    pattern: 'V - (으)ㄹ라치면',
    meaningVi: 'Hễ... thì, cứ... thì — tình huống bất lợi cứ lặp lại mỗi khi định làm việc gì đó',
    usageNotes:
      'Mô tả một tình huống thường xảy ra, trong đó tình huống ở mệnh đề sau luôn xuất hiện bất cứ khi nào chủ thể cố gắng thực hiện hành động ở mệnh đề trước, khiến chủ thể không thể thực hiện đúng như dự định. Thường dùng trong văn nói. Biểu hiện tương tự: -(으)려고 하면.',
    examples: [
      { ko: '모처럼 시간이 내서 밖으로 놀러 갈라치면 그날따라 비가 와요.', vi: 'Hễ khi nào tôi cố sắp xếp thời gian ra ngoài chơi thì y như rằng hôm đó lại mưa.' },
      { ko: '낮잠 좀 잘라치면 그때 옆집 아이가 피아노를 쳐 대니 잘 수가 없어요.', vi: 'Cứ hễ tôi định ngủ trưa một chút thì lúc đó đứa trẻ nhà bên lại đàn piano ầm ĩ nên không tài nào ngủ được.' },
    ],
    commonMistakes: [
      'Luôn mang sắc thái than phiền về một tình huống trớ trêu lặp đi lặp lại — không dùng cho một sự việc chỉ xảy ra một lần duy nhất.',
    ],
    level: 'cao-cap',
    section: 'dieu-kien-quyet-dinh',
    sectionOrder: 7,
    sectionTitleVi: 'Điều kiện và quyết định',
  },
  {
    id: 'gr-cao-cap-56',
    pattern: 'V - 노라면',
    meaningVi: 'Nếu cứ... thì... — làm liên tục việc gì đó sẽ dẫn đến một kết quả tương ứng',
    usageNotes:
      'Nếu liên tục, thường xuyên thực hiện một việc gì đó ở vế trước thì sẽ đạt được một kết quả tương ứng, thường mang tính tích cực, ở vế sau. Biểu hiện tương tự: -다가 보면.',
    examples: [
      { ko: '꾸준히 취업 준비를 하노라면 곧 좋은 일자리를 찾을 테니 걱정하지 마세요.', vi: 'Nếu cứ kiên trì chuẩn bị xin việc thì bạn sẽ sớm tìm được công việc tốt, đừng lo lắng.' },
      { ko: '한국어를 열심히 연습하노라면 점점 실력이 좋아질 거예요.', vi: 'Nếu cứ chăm chỉ luyện tập tiếng Hàn thì trình độ sẽ dần được cải thiện.' },
    ],
    commonMistakes: [
      'Là cấu trúc mang tính văn viết/trang trọng hơn -다가 보면, thường dùng cho lời khuyên hoặc động viên kiên trì — ít dùng trong khẩu ngữ thường ngày.',
    ],
    level: 'cao-cap',
    section: 'dieu-kien-quyet-dinh',
    sectionOrder: 7,
    sectionTitleVi: 'Điều kiện và quyết định',
  },
  {
    id: 'gr-cao-cap-57',
    pattern: 'V - 거들랑',
    meaningVi: 'Nếu... thì... — điều kiện, vế sau thường là mệnh lệnh hoặc cầu khiến',
    usageNotes:
      'Diễn tả điều kiện nếu nội dung ở vế trước trở thành hiện thực. Vế sau thường dùng ở dạng mệnh lệnh hoặc cầu khiến, có thể diễn tả ý chí của chủ thể. Có thể thay thế bằng cấu trúc -거든.',
    examples: [
      { ko: '오빠를 만나거들랑 제 말을 꼭 전해 주세요.', vi: 'Nếu gặp anh ấy thì nhớ nhắn lại lời tôi giúp với nhé.' },
      { ko: '아이들이 밥을 안 먹거들랑 도시락을 싸서 먹여 보세요.', vi: 'Nếu bọn trẻ không chịu ăn cơm thì hãy thử gói cơm hộp cho chúng ăn xem.' },
    ],
    commonMistakes: [
      'Là cấu trúc khẩu ngữ hơi cổ, gần như đồng nghĩa hoàn toàn với -거든 khi dùng làm điều kiện — nên ưu tiên dùng -거든 trong giao tiếp hiện đại nếu không chắc chắn.',
    ],
    level: 'cao-cap',
    section: 'dieu-kien-quyet-dinh',
    sectionOrder: 7,
    sectionTitleVi: 'Điều kiện và quyết định',
  },
  {
    id: 'gr-cao-cap-58',
    pattern: 'V - (으)면 몰라도',
    meaningVi: 'Giả sử như... thì còn được, chứ (trường hợp thực tế) thì không — so sánh hai trường hợp',
    usageNotes:
      'Giả định rằng nếu tình huống ở vế trước xảy ra (khác với thực tế hiện tại) thì còn có thể chấp nhận được, còn trường hợp đang thực sự xảy ra thì không được hoặc không thể. Vế sau thường là câu phủ định hoặc câu hỏi mang tính nghi ngờ, khẳng định ngược.',
    examples: [
      { ko: '민재 씨는 풀면 몰라도 수빈 씨는 그 문제 못 풀걸?', vi: 'Nếu là Minjae thì còn có thể giải được, chứ Subin thì chắc không giải được bài đó đâu.' },
      { ko: '엄마가 도와주면 몰라도 혼자서는 비빔밥 못 만들어요.', vi: 'Nếu có mẹ giúp thì còn được, chứ một mình thì không thể làm được món cơm trộn.' },
      { ko: '친척들이면 몰라도 친구는 면회할 수 없어요.', vi: 'Nếu là người thân thì còn được, chứ bạn bè thì không thể vào thăm được.' },
    ],
    commonMistakes: [
      'Cấu trúc luôn mang nghĩa "trường hợp A thì còn tạm chấp nhận được, trường hợp B đang nói đến thì không được" — nếu dịch tách rời từng vế mà không giữ đúng quan hệ so sánh này sẽ sai nghĩa.',
      'Vế sau hầu như luôn ở dạng phủ định hoặc nghi vấn mang tính khẳng định ngược — không dùng cho câu khẳng định tích cực đơn thuần.',
    ],
    level: 'cao-cap',
    section: 'dieu-kien-quyet-dinh',
    sectionOrder: 7,
    sectionTitleVi: 'Điều kiện và quyết định',
  },
  {
    id: 'gr-cao-cap-59',
    pattern: 'A/V - (느)냐에 달려 있다',
    meaningVi: 'Phụ thuộc vào... — kết quả ở vế trước tùy thuộc vào điều kiện nêu ở vế sau',
    usageNotes:
      'Hoàn cảnh hoặc tình huống được mô tả ở mệnh đề trước phụ thuộc vào nội dung của mệnh đề sau. Với danh từ có thể dùng dạng N + 에/에게/한테/께 달려 있다. Thường đi kèm với các từ như 얼마나 hoặc 어떻게 để nhấn mạnh yếu tố quyết định.',
    examples: [
      { ko: '제품이 잘 팔리고 안 팔리고는 제품의 질이 얼마나 좋(으)냐에 달려 있다.', vi: 'Sản phẩm có bán chạy hay không là tùy thuộc vào chất lượng sản phẩm tốt đến mức nào.' },
      { ko: '건강은 규칙적으로 운동하(느)냐에 달려 있다.', vi: 'Sức khỏe phụ thuộc vào việc có tập thể dục đều đặn hay không.' },
      { ko: '음식의 맛은 양념에 달려 있다.', vi: 'Vị của món ăn phụ thuộc vào gia vị.' },
    ],
    commonMistakes: [
      'Dễ nhầm giữa dạng -느냐에 달려 있다 (dùng sau động từ/tính từ, có đuôi nghi vấn gián tiếp) với N + 에 달려 있다 (dùng trực tiếp sau danh từ) — cần chọn đúng dạng theo từ loại đứng trước.',
      'Thường cần có 얼마나/어떻게 để làm rõ yếu tố quyết định là "mức độ" hay "cách thức" — nếu thiếu, câu dễ mất đi sắc thái nhấn mạnh sự phụ thuộc.',
    ],
    level: 'cao-cap',
    section: 'dieu-kien-quyet-dinh',
    sectionOrder: 7,
    sectionTitleVi: 'Điều kiện và quyết định',
  },
  {
    id: 'gr-cao-cap-60',
    pattern: 'V - 기 나름이다',
    meaningVi: 'Tùy vào việc, tùy thuộc vào cách... — kết quả thay đổi theo cách thực hiện hành vi',
    usageNotes:
      'Một việc hay hành vi nào đó có thể thay đổi tùy theo cách thức người ta thực hiện công việc hay hành vi đó như thế nào — cấu trúc luôn hàm ý không có kết quả cố định, tất cả phụ thuộc vào cách làm.',
    examples: [
      { ko: '모든 일은 마음먹기 나름이다. 쉽다고 생각하면 쉽고 잘되지만, 어렵다고 생각하면 아무것도 할 수 없는 법이다.', vi: 'Mọi việc đều tùy thuộc vào cách mình suy nghĩ. Nếu nghĩ là dễ thì sẽ dễ và làm tốt, nhưng nếu nghĩ là khó thì sẽ chẳng làm được gì cả.' },
      { ko: '자녀는 부모가 교육하기 나름이다. 강요보다는 스스로 할 수 있도록 도와줘야 한다.', vi: 'Con cái ra sao là tùy thuộc vào cách cha mẹ giáo dục. Nên giúp con tự làm được thay vì ép buộc.' },
    ],
    commonMistakes: [
      'Thường đi kèm danh từ chỉ chủ thể/đối tượng cộng với động từ mang nghĩa "làm, thực hiện" trước 기 나름이다 — dễ dùng sai nếu ghép với động từ không diễn tả cách thức thực hiện.',
    ],
    level: 'cao-cap',
    section: 'dieu-kien-quyet-dinh',
    sectionOrder: 7,
    sectionTitleVi: 'Điều kiện và quyết định',
  },
  {
    id: 'gr-cao-cap-61',
    pattern: 'N 은/는 N 대로',
    meaningVi: 'N thì N chứ... — mỗi đối tượng có đặc điểm, hoàn cảnh riêng, không thể gộp chung',
    usageNotes:
      'Chỉ ra rằng mỗi danh từ được nhắc đến có một đặc điểm hoặc hoàn cảnh khác nhau so với những gì được nói tiếp theo — dùng để nhấn mạnh rằng dù cùng thuộc một nhóm hay được so sánh với nhau, mỗi đối tượng vẫn có nét riêng của nó.',
    examples: [
      { ko: '가: 부자는 걱정거리가 없어서 좋겠다. 나: 무슨 소리야? 부자는 부자대로 걱정이 있는 법이에요.', vi: 'A: Người giàu chắc sướng vì chẳng có gì phải lo. B: Nói gì vậy? Người giàu thì cũng có nỗi lo riêng của người giàu chứ.' },
      { ko: '가: 한국 영화만 좋아하는 줄 알았더니 미국 영화도 보네요. 나: 한국 영화는 한국 영화대로 미국 영화는 미국 영화대로 각기 다른 멋이 있거든요.', vi: 'A: Tưởng bạn chỉ thích phim Hàn thôi, hóa ra cũng xem phim Mỹ nữa à. B: Phim Hàn có cái hay riêng của phim Hàn, phim Mỹ có cái hay riêng của phim Mỹ mà.' },
    ],
    commonMistakes: [
      'Luôn phải lặp lại cùng một danh từ ở cả hai vị trí (N은/는 N대로) — không thể thay danh từ thứ hai bằng một từ khác, vì cấu trúc nhấn mạnh chính đặc điểm riêng của N đó.',
    ],
    level: 'cao-cap',
    section: 'tach-biet-cung-nhau',
    sectionOrder: 8,
    sectionTitleVi: 'Tách biệt và cùng nhau',
  },
  {
    id: 'gr-cao-cap-62',
    pattern: 'A/V - 건만',
    meaningVi: 'Thế nhưng, nhưng mà... — sự việc ở vế sau trái ngược với điều mong đợi từ vế trước',
    usageNotes:
      'Thể hiện sự xuất hiện của một sự kiện hay hành động nào đó ngược lại với những điều mong đợi hay có thể lý giải được từ một sự thật ở mệnh đề trước đó, thường kèm cảm xúc tiếc nuối, bất mãn.',
    examples: [
      { ko: '그는 훌륭한 가수이건만 아무에게도 인정받지 못했다.', vi: 'Anh ấy là một ca sĩ tài năng, thế nhưng lại chẳng được ai công nhận.' },
      { ko: '매번 일찍 와서 친구를 기다리건만 그 친구는 오늘도 늦게 와서 미안하단 말도 없어요.', vi: 'Lần nào tôi cũng đến sớm chờ bạn, vậy mà hôm nay bạn ấy lại đến muộn mà cũng chẳng nói một lời xin lỗi.' },
    ],
    commonMistakes: [
      'Là cấu trúc mang tính văn viết, gần nghĩa -는데도 nhưng nhấn mạnh rõ hơn cảm xúc bất mãn, tiếc nuối của người nói — ít dùng trong khẩu ngữ suồng sã hàng ngày.',
    ],
    level: 'cao-cap',
    section: 'tuong-phan-doi-lap',
    sectionOrder: 9,
    sectionTitleVi: 'Tương phản và đối lập',
  },
  {
    id: 'gr-cao-cap-63',
    pattern: 'V - 고도',
    meaningVi: 'Mà lại... — hành động vế trước đã hoàn thành nhưng kết quả vế sau trái với mong đợi',
    usageNotes:
      'Là hình thái rút gọn của -고 kết hợp -아/어도. Thể hiện hành động ở vế trước đã hoàn thành, hành động ở vế sau nối tiếp theo sau đó nhưng kết quả lại khác với những gì được mong đợi. Vế trước và vế sau bắt buộc phải có cùng chủ ngữ.',
    examples: [
      { ko: '가: 지하철 안에서 어떤 여자가 제 발을 밟았는데 아무 말도 없이 그냥 지나갔어요. 나: 발을 밟고도 사과는 안 한다면서요? 말도 안 되네요.', vi: 'A: Trong tàu điện ngầm có một cô gái dẫm vào chân tôi mà chẳng nói gì cứ thế đi qua luôn. B: Dẫm chân người khác mà lại không xin lỗi à? Vô lý thật đấy.' },
      { ko: '‘고학력 청년 백수’란 대학까지 졸업하고도 취직이 되지 않아 집에서 놀고 있는 청년들을 말한다.', vi: '"Thanh niên thất nghiệp có học vấn cao" là để chỉ những thanh niên dù đã tốt nghiệp đại học mà vẫn không xin được việc, đang ở nhà không làm gì.' },
    ],
    commonMistakes: [
      'Hai vế bắt buộc phải cùng chủ ngữ — khác với -건만 hay -는데도 vốn không đòi hỏi điều kiện này.',
    ],
    level: 'cao-cap',
    section: 'tuong-phan-doi-lap',
    sectionOrder: 9,
    sectionTitleVi: 'Tương phản và đối lập',
  },
  {
    id: 'gr-cao-cap-64',
    pattern: 'A/V - 듯이',
    meaningVi: 'Như, như thể... — vế sau gần như tương tự với vế trước',
    usageNotes:
      'Thể hiện rằng nội dung ở vế sau gần như tương tự, giống với nội dung ở vế trước. Có thể dùng dưới dạng rút gọn -듯. Biểu hiện tương tự: -는 것처럼 và -는 것과 마찬가지로.',
    examples: [
      { ko: '사람마다 외모가 다르듯이 가치관과 성격도 다르다.', vi: 'Cũng như mỗi người có ngoại hình khác nhau, giá trị quan và tính cách cũng khác nhau.' },
      { ko: '유나 씨가 거짓말 밥 먹듯이 해서 이젠 어떤 말도 믿지 못해요.', vi: 'Yuna nói dối như cơm bữa nên giờ tôi chẳng còn tin được lời nào của cô ấy nữa.' },
    ],
    commonMistakes: [
      'Nhiều cụm cố định dùng dạng rút gọn -듯 kết hợp với thành ngữ (như 밥 먹듯 하다 — làm như cơm bữa), cần học thuộc theo cụm chứ không tự do ghép với bất kỳ động từ nào.',
    ],
    level: 'cao-cap',
    section: 'tuong-dong',
    sectionOrder: 10,
    sectionTitleVi: 'Tương đồng',
  },
  {
    id: 'gr-cao-cap-65',
    pattern: 'V - 다시피 하다',
    meaningVi: 'Gần như... — phóng đại mức độ để nhấn mạnh tình huống thực tế',
    usageNotes:
      'Dùng khi thực tế không hoàn toàn giống hệt ý nghĩa của động từ đứng trước cấu trúc nhưng cũng gần giống như vậy, qua đó nhấn mạnh mức độ của tình huống bằng cách phóng đại. Ngoài ra, dạng mở rộng -다시피 (không có 하다) thường dùng với các động từ biểu thị giác quan/nhận thức (듣다, 보다, 말하다, 느끼다, 짐작하다, 예상하다, 깨닫다) như một căn cứ để đưa ra nhận định ở vế sau, mang nghĩa "như...".',
    examples: [
      { ko: '흐엉 씨는 유학 생활이 너무 힘들어서 처음에는 밤에 잠도 못 자다시피 했어요.', vi: 'Vì cuộc sống du học quá vất vả nên ban đầu Hương gần như không ngủ được vào ban đêm.' },
      { ko: '이번 주는 시험 기간이었어요. 그래서 날마다 도서관에서 살다시피 했어요.', vi: 'Tuần này là kỳ thi nên ngày nào tôi cũng gần như sống ở thư viện.' },
      { ko: '보시다시피 공공장소에서 담배를 피워서는 안 된다.', vi: 'Như các bạn thấy đấy, không được hút thuốc ở nơi công cộng.' },
    ],
    commonMistakes: [
      'Cần phân biệt hai cách dùng: -다시피 하다 (phóng đại mức độ hành động, gắn với 하다) và -다시피 đứng độc lập sau động từ giác quan/nhận thức (làm căn cứ, nghĩa "như...") — hai cách dùng có cấu trúc câu và ý nghĩa khác nhau dù cùng gốc -다시피.',
      'Không dùng -다시피 하다 để mô tả một sự thật hoàn toàn chính xác — cấu trúc luôn ngụ ý "gần như, gần bằng" chứ không phải "chính xác là".',
    ],
    level: 'cao-cap',
    section: 'tuong-dong',
    sectionOrder: 10,
    sectionTitleVi: 'Tương đồng',
  },
  {
    id: 'gr-cao-cap-66',
    pattern: 'A/V - 거니와',
    meaningVi: '...thêm vào đó... — công nhận vế trước, đồng thời công nhận thêm nội dung bổ sung ở vế sau',
    usageNotes:
      'Công nhận nội dung ở vế trước và đồng thời công nhận thêm một sự thật bổ sung ở vế sau; nghĩa hai vế mang tính bình đẳng với nhau. Chủ yếu dùng trong văn viết, không còn được dùng nhiều trong văn nói tiếng Hàn hiện đại.',
    examples: [
      { ko: '지붕을 풀로 만들면 여름에는 집이 서늘하거니와 겨울에는 보온 효과가 있습니다.', vi: 'Nếu lợp mái nhà bằng cỏ thì mùa hè nhà sẽ mát mẻ, thêm vào đó mùa đông còn có tác dụng giữ ấm.' },
      { ko: '이 책은 독자에게 새로운 시각을 열어 주거니와 다른 세계, 다른 시각으로 인간 사회를 풍자하기도 한다.', vi: 'Cuốn sách này mở ra cho độc giả một góc nhìn mới, thêm vào đó còn châm biếm xã hội loài người bằng một thế giới, một góc nhìn khác.' },
    ],
    commonMistakes: [
      'Là cấu trúc cổ, gần như chỉ xuất hiện trong văn viết học thuật/văn chương — không dùng trong hội thoại hàng ngày.',
    ],
    level: 'cao-cap',
    section: 'bo-sung-bao-gom',
    sectionOrder: 11,
    sectionTitleVi: 'Bổ sung và bao gồm',
  },
  {
    id: 'gr-cao-cap-67',
    pattern: 'A/V - (으)려니와',
    meaningVi: '...thêm vào đó... — phỏng đoán, công nhận vế trước rồi bổ sung thông tin ở vế sau',
    usageNotes:
      'Phỏng đoán và công nhận nội dung ở vế trước, sau đó thêm vào một thông tin bổ sung có liên quan ở vế sau. Thường dùng trong văn viết, ít dùng trong tiếng Hàn hiện đại.',
    examples: [
      { ko: '저녁이 되면서 하늘도 어두워지려니와 날씨도 쌀쌀해졌다.', vi: 'Khi trời về chiều tối, bầu trời cũng dần tối lại, thêm vào đó thời tiết cũng trở nên se lạnh.' },
      { ko: '산책을 하기에는 햇볕이 너무 따가우려니와 습도도 너무 높다.', vi: 'Để đi dạo thì nắng quá gắt, thêm vào đó độ ẩm cũng quá cao.' },
    ],
    commonMistakes: [
      'Là cấu trúc mang tính phỏng đoán kết hợp bổ sung, dễ nhầm với -거니와 (chỉ công nhận thực tế, không mang nghĩa phỏng đoán) — cần chọn đúng theo việc nội dung là thực tế hay dự đoán.',
    ],
    level: 'cao-cap',
    section: 'bo-sung-bao-gom',
    sectionOrder: 11,
    sectionTitleVi: 'Bổ sung và bao gồm',
  },
  {
    id: 'gr-cao-cap-68',
    pattern: 'A/V - 기는커녕',
    meaningVi: '... huống chi, huống hồ... — phủ định tuyệt đối vế trước, nhấn mạnh thêm mức độ cao hơn ở vế sau',
    usageNotes:
      'Phủ định tuyệt đối nội dung nêu ra ở vế trước và thêm vào một mức độ nhấn mạnh cao hơn ở vế sau. Khi đứng sau danh từ dùng dạng -는커녕. Thường đi kèm với 조차.',
    examples: [
      { ko: '바쁘게 사느라 해외여행을 가 보기는커녕 국내여행조차 가 보지 못해요.', vi: 'Vì sống bận rộn nên đừng nói đến du lịch nước ngoài, ngay cả du lịch trong nước tôi cũng chưa từng đi.' },
      { ko: '한국어를 배운 지 한 달이 넘었지만 한국어로 자기 소개는커녕 한글도 못 읽어요.', vi: 'Học tiếng Hàn hơn một tháng rồi nhưng đừng nói đến việc tự giới thiệu bằng tiếng Hàn, ngay cả bảng chữ cái Hangeul tôi cũng chưa đọc được.' },
    ],
    commonMistakes: [
      'Thường phải kết hợp với 조차, 도 hoặc dạng phủ định ở vế sau để nhấn mạnh mức độ "ngay cả điều đơn giản hơn cũng không làm được" — nếu thiếu các từ nhấn mạnh này, ý nghĩa "huống chi" sẽ kém rõ ràng.',
    ],
    level: 'cao-cap',
    section: 'bo-sung-bao-gom',
    sectionOrder: 11,
    sectionTitleVi: 'Bổ sung và bao gồm',
  },
  {
    id: 'gr-cao-cap-69',
    pattern: 'A/V - (으)ㄹ 뿐더러',
    meaningVi: 'Không những... mà còn... — bổ sung một sự thật/tình huống khác nghiêm trọng hơn',
    usageNotes:
      'Cộng thêm một sự thật hay tình huống khác vào một sự thật/tình huống đã nêu; chủ ngữ của vế trước và vế sau là một, và đa số trường hợp tình huống ở vế sau có mức độ nghiêm trọng hoặc cao hơn so với vế trước. Biểu hiện tương tự: -(으)ㄹ 뿐만 아니라. Chủ yếu dùng trong văn viết.',
    examples: [
      { ko: '영희 씨는 얼굴이 예쁠 뿐더러 성격도 좋아요.', vi: 'Younghee không những xinh đẹp mà tính cách còn tốt nữa.' },
      { ko: '베트남에서 축구가 대중적인 스포츠일 뿐더러 큰 관심을 받아요.', vi: 'Ở Việt Nam, bóng đá không những là môn thể thao đại chúng mà còn nhận được sự quan tâm rất lớn.' },
    ],
    commonMistakes: [
      'Chủ ngữ hai vế phải giống nhau — khác với -거니와 vốn không đòi hỏi điều kiện chủ ngữ đồng nhất.',
    ],
    level: 'cao-cap',
    section: 'bo-sung-bao-gom',
    sectionOrder: 11,
    sectionTitleVi: 'Bổ sung và bao gồm',
  },
  {
    id: 'gr-cao-cap-70',
    pattern: 'A/V - 되',
    meaningVi: 'Nhưng, tuy nhiên (kèm điều kiện/ngoại lệ) — dùng trong văn viết trang trọng',
    usageNotes:
      'Diễn tả hai mệnh đề mang tính bổ sung điều kiện cho nhau, trong đó vế sau thường nêu một ngoại lệ, điều kiện hay giới hạn cần lưu ý đối với nội dung được thừa nhận ở vế trước. Chủ yếu dùng trong văn viết.',
    examples: [
      { ko: '낮에 피곤하면 낮잠을 자되 30 분 이내로 자는 것이 건강에 좋다.', vi: 'Nếu ban ngày mệt thì có thể ngủ trưa, nhưng nên ngủ trong vòng 30 phút thì mới tốt cho sức khỏe.' },
      { ko: '다이어트를 하되 자신에게 맞는 다이어트 방법을 선택하는 것이 필요하다.', vi: 'Có thể ăn kiêng, nhưng cần chọn phương pháp ăn kiêng phù hợp với bản thân.' },
    ],
    commonMistakes: [
      'Là cấu trúc trang trọng của văn viết, thường theo mô hình "cho phép/thừa nhận A, nhưng kèm điều kiện B" — không dùng để diễn tả sự tương phản hoàn toàn phủ định như -지만.',
    ],
    level: 'cao-cap',
    section: 'bo-sung-bao-gom',
    sectionOrder: 11,
    sectionTitleVi: 'Bổ sung và bao gồm',
  },
  {
    id: 'gr-cao-cap-71',
    pattern: 'N 을/를 비롯해서',
    meaningVi: 'Bắt đầu từ..., tiêu biểu như..., bao gồm cả... — danh từ đầu tiên của một loạt liệt kê',
    usageNotes:
      'Thể hiện danh từ đứng trước là danh từ đầu tiên, tiêu biểu, đại diện của một loạt các đối tượng được liệt kê tiếp theo ở vế sau. Được sử dụng chủ yếu trong các tình huống trang trọng hoặc trong văn viết.',
    examples: [
      { ko: '환경 보호를 위해 저희 회사는 사장님을 비롯해서 직원들까지 모두 대중교통을 이용해서 출퇴근해요.', vi: 'Để bảo vệ môi trường, công ty chúng tôi từ giám đốc cho đến toàn thể nhân viên đều đi làm bằng phương tiện công cộng.' },
      { ko: '아시아를 비롯해서 유럽 각 지역에서도 K-pop 의 인기가 많아지고 있다고 봐요.', vi: 'Tôi thấy K-pop đang ngày càng phổ biến, bắt đầu từ châu Á cho đến các khu vực khác nhau ở châu Âu.' },
    ],
    commonMistakes: [
      'Danh từ đứng trước -을/를 비롯해서 phải là đối tượng tiêu biểu, đại diện hoặc quan trọng nhất trong nhóm được liệt kê — không dùng cho một phép liệt kê ngẫu nhiên, không có thứ tự ưu tiên.',
    ],
    level: 'cao-cap',
    section: 'bo-sung-bao-gom',
    sectionOrder: 11,
    sectionTitleVi: 'Bổ sung và bao gồm',
  },
  {
    id: 'gr-cao-cap-72',
    pattern: 'V - 아/어 대다',
    meaningVi: 'Cứ... — hành động thường xuyên lặp lại quá mức, mang tính tiêu cực',
    usageNotes:
      'Diễn tả một hành động thường xuyên lặp lại quá mức và liên tục, chủ yếu dùng để mô tả các tình huống tiêu cực. Thường dùng ở dạng cấu trúc -아/어 대서 hoặc -아/어 대면.',
    examples: [
      { ko: '옆집 아이가 계속 울어 대서 잠을 못 자요.', vi: 'Đứa trẻ nhà bên cứ khóc suốt nên tôi không ngủ được.' },
      { ko: '그렇게 패스트푸드를 많이 먹어 대면 건강에 해롭다.', vi: 'Nếu cứ ăn đồ ăn nhanh nhiều như thế thì sẽ có hại cho sức khỏe.' },
    ],
    commonMistakes: [
      'Luôn mang sắc thái tiêu cực, chỉ trích về một hành động lặp lại quá mức — không dùng cho các hành động lặp lại mang tính tích cực hoặc trung lập.',
    ],
    level: 'cao-cap',
    section: 'thoi-quen-thai-do',
    sectionOrder: 12,
    sectionTitleVi: 'Thói quen và thái độ',
  },
  {
    id: 'gr-cao-cap-73',
    pattern: 'V - 기 일쑤이다',
    meaningVi: 'Thường xuyên, hay... — thực hiện thường xuyên một hành vi không mong muốn',
    usageNotes:
      'Thể hiện việc thực hiện một hành vi không mong muốn nào đó một cách thường xuyên, lặp đi lặp lại như một thói quen xấu.',
    examples: [
      { ko: '나이가 들어서 그런지 조금 전에 생각했던 일도 금방 잊어버리기 일쑤이다.', vi: 'Có lẽ vì có tuổi rồi nên tôi hay quên ngay cả những việc vừa mới nghĩ đến lúc nãy.' },
      { ko: '대학에 다닐 때 리포트 제출일이 코앞에 닥치면 밤을 새우기 일쑤예요.', vi: 'Hồi học đại học, cứ đến gần hạn nộp báo cáo là tôi lại thường xuyên thức trắng đêm.' },
    ],
    commonMistakes: [
      'Chỉ dùng cho hành vi/thói quen mang tính tiêu cực hoặc không mong muốn — không dùng để mô tả một thói quen tốt lặp lại thường xuyên.',
    ],
    level: 'cao-cap',
    section: 'thoi-quen-thai-do',
    sectionOrder: 12,
    sectionTitleVi: 'Thói quen và thái độ',
  },
  {
    id: 'gr-cao-cap-74',
    pattern: 'V - 는 둥 마는 둥 하다',
    meaningVi: 'Làm cũng như không làm, làm qua loa — không thực hiện đầy đủ một hành vi',
    usageNotes:
      'Diễn tả việc không làm chăm chỉ, đầy đủ hoặc gần như hoàn toàn không thực hiện một hành vi nào đó, làm một cách qua loa, cho có.',
    examples: [
      { ko: '아침에 늦게 일어나서 밥을 먹는 둥 마는 둥 하고 집을 나오는 사람이 많아요.', vi: 'Có nhiều người dậy muộn vào buổi sáng nên ăn sáng qua loa cho có rồi ra khỏi nhà.' },
      { ko: '요즘 입맛이 없어서 밥을 먹는 둥 마는 둥 했더니 살이 빠졌다.', vi: 'Dạo này không có khẩu vị nên tôi ăn uống qua loa, thành ra bị sụt cân.' },
    ],
    commonMistakes: [
      'Cấu trúc luôn hàm ý sự thiếu chăm chút, làm cho có — không dùng để mô tả việc hoàn toàn không làm gì hoặc làm rất kỹ lưỡng.',
    ],
    level: 'cao-cap',
    section: 'thoi-quen-thai-do',
    sectionOrder: 12,
    sectionTitleVi: 'Thói quen và thái độ',
  },
  {
    id: 'gr-cao-cap-75',
    pattern: 'A/V - (으)리만치',
    meaningVi: 'Đến mức..., đến nỗi... — nhấn mạnh vế sau bằng cách chỉ ra mức độ của vế trước',
    usageNotes:
      'Nhấn mạnh nội dung của mệnh đề sau bằng cách chỉ ra mức độ mà tình huống hoặc trạng thái của sự việc ở mệnh đề trước mô tả nó; thường dùng theo nghĩa ẩn dụ. Biểu hiện tương tự: -(으)리만큼 và -(으)ㄹ 정도로.',
    examples: [
      { ko: '서울의 야경이 말로 표현할 수 없으리만치 아름답다.', vi: 'Cảnh đêm Seoul đẹp đến mức không thể diễn tả bằng lời.' },
      { ko: '앞이 잘 보이지 않으리만치 비가 많이 와요.', vi: 'Trời mưa to đến mức không nhìn rõ phía trước.' },
    ],
    commonMistakes: [
      'Là cấu trúc mang tính văn viết, ẩn dụ, gần nghĩa hoàn toàn với -(으)ㄹ 정도로 nhưng trang trọng hơn — ít dùng trong khẩu ngữ hàng ngày.',
    ],
    level: 'cao-cap',
    section: 'muc-do',
    sectionOrder: 13,
    sectionTitleVi: 'Mức độ',
  },
  {
    id: 'gr-cao-cap-76',
    pattern: 'A/V - 다 못해',
    meaningVi: 'Không thể... hơn nữa (động từ); đến mức... (tính từ) — trạng thái đã đạt cực điểm',
    usageNotes:
      'Hành động hoặc trạng thái của sự việc ở mệnh đề trước đã đạt đến mức độ cực điểm và không thể tiếp tục duy trì được nữa. Với động từ mang nghĩa "không thể tiếp tục làm A nữa nên chuyển sang B", với tính từ mang nghĩa "đến mức... (nên dẫn đến kết quả ở vế sau)".',
    examples: [
      { ko: '지수 씨가 우유부단하다 못해 매일 입을 옷을 고르는 데에도 30 분이나 걸려요.', vi: 'Jisu do dự đến mức mỗi ngày chọn quần áo để mặc cũng mất tới 30 phút.' },
      { ko: '민지 씨가 힘든 일정을 견디다 못해 쓰러지고 말았다.', vi: 'Minji chịu đựng lịch trình vất vả đến mức không chịu nổi nữa và cuối cùng đã ngã quỵ.' },
    ],
    commonMistakes: [
      'Cần phân biệt nghĩa theo từ loại đứng trước: với động từ nhấn mạnh "không thể tiếp tục hành động đó nữa nên chuyển sang hành động khác", với tính từ nhấn mạnh "mức độ đã đạt đến cực điểm dẫn đến kết quả ở vế sau".',
    ],
    level: 'cao-cap',
    section: 'muc-do',
    sectionOrder: 13,
    sectionTitleVi: 'Mức độ',
  },
  {
    id: 'gr-cao-cap-77',
    pattern: 'V - (느)ㄴ다는 것이',
    meaningVi: 'Định... nhưng lại... — dự định làm việc này nhưng vô tình lại làm việc khác',
    usageNotes:
      'Diễn tả việc định thực hiện một hành động nào đó nhưng kết quả lại vô tình làm một hành động khác ngoài dự tính. Hai mệnh đề phải có cùng chủ ngữ.',
    examples: [
      { ko: '쓰레기를 버린다는 것이 휴대폰을 버리고 말았어요.', vi: 'Định vứt rác thôi mà lại lỡ vứt luôn cả điện thoại.' },
      { ko: '친구에게 문자 메시지를 보낸다는 것이 선생님에게 잘못 보냈어요.', vi: 'Định nhắn tin cho bạn mà lại gửi nhầm cho thầy giáo.' },
    ],
    commonMistakes: [
      'Hai vế bắt buộc phải cùng chủ ngữ, và vế sau luôn là một kết quả ngoài ý muốn, khác với dự định ban đầu — không dùng khi kết quả đúng như dự định.',
    ],
    level: 'cao-cap',
    section: 'y-do',
    sectionOrder: 14,
    sectionTitleVi: 'Ý đồ',
  },
  {
    id: 'gr-cao-cap-78',
    pattern: 'V - (으)려고 들다',
    meaningVi: 'Cố sức, ra sức... — nỗ lực mạnh mẽ để đạt được một mục đích nào đó',
    usageNotes:
      'Biểu thị nỗ lực mạnh mẽ, quyết tâm cao của chủ thể để đạt được một mục đích nào đó, đôi khi mang thêm sắc thái hơi cố chấp, khăng khăng.',
    examples: [
      { ko: '우리 어머니가 무조건 유기농 식품을 사려고 들어요.', vi: 'Mẹ tôi cứ nhất quyết đòi mua thực phẩm hữu cơ bằng mọi giá.' },
      { ko: '온 국민이 힘을 합쳐 함께 어려운 상황을 극복하려고 들면 못 할 일이 없어요.', vi: 'Nếu toàn thể người dân đồng lòng quyết tâm vượt qua tình huống khó khăn thì không có việc gì là không làm được.' },
    ],
    commonMistakes: [
      'Có thể mang sắc thái tiêu cực nhẹ (cố chấp, khăng khăng làm bằng được) tùy ngữ cảnh — cần lưu ý sắc thái này khi mô tả người khác để tránh gây hiểu lầm là đang chê trách.',
    ],
    level: 'cao-cap',
    section: 'y-do',
    sectionOrder: 14,
    sectionTitleVi: 'Ý đồ',
  },
  {
    id: 'gr-cao-cap-79',
    pattern: 'V - (으)려다가',
    meaningVi: 'Đang định... nhưng lại... — có ý định làm gì đó nhưng sau đó đổi ý hoặc chuyển sang việc khác',
    usageNotes:
      'Chủ ngữ đã có ý định thực hiện một hành động nào đó nhưng sau đó quyết định từ bỏ hoặc chuyển sang làm một điều khác thay thế. Chủ ngữ của cả hai vế phải đồng nhất.',
    examples: [
      { ko: '피자를 시켜 먹으려다가 살이 찔 것 같아서 참았어요.', vi: 'Định gọi pizza ăn nhưng nghĩ sẽ bị béo nên tôi đã nhịn.' },
      { ko: '회사로 옮기려다가 생각이 바뀌어서 그냥 있기로 했어요.', vi: 'Định chuyển sang công ty khác nhưng rồi đổi ý nên quyết định ở lại.' },
    ],
    commonMistakes: [
      'Chủ ngữ hai vế phải đồng nhất — khác với -(느)ㄴ다는 것이 (kết quả ngoài ý muốn xảy ra ngay lập tức), -(으)려다가 nhấn mạnh việc chủ thể chủ động đổi ý giữa chừng trước khi hành động ban đầu diễn ra.',
    ],
    level: 'cao-cap',
    section: 'y-do',
    sectionOrder: 14,
    sectionTitleVi: 'Ý đồ',
  },
  {
    id: 'gr-cao-cap-80',
    pattern: 'A/V - 는 듯이',
    meaningVi: 'Cứ như là, như thể là... — vế sau miêu tả trạng thái tương tự hoặc suy đoán liên quan đến vế trước',
    usageNotes:
      'Thể hiện động tác hay trạng thái ở vế sau tương tự, gần giống hoặc có thể suy đoán được do liên quan đến nội dung nêu ở vế trước — thường dùng để ví von, phóng đại mức độ bằng một hình ảnh so sánh sinh động.',
    examples: [
      { ko: '동생이 피곤해서 죽은 듯이 잠을 자요.', vi: 'Em tôi mệt quá nên ngủ say như chết.' },
      { ko: '제주도 경치가 숨이 막힐 듯이 아름다워요.', vi: 'Cảnh Jeju đẹp đến nghẹt thở.' },
    ],
    commonMistakes: [
      'Dễ nhầm với -듯이 ở mục Tương đồng (chỉ sự tương tự khách quan giữa hai sự việc) — -는 듯이 ở đây thiên về ví von, phóng đại mức độ bằng hình ảnh so sánh, không phải so sánh trung tính.',
    ],
    level: 'cao-cap',
    section: 'du-doan-kha-nang',
    sectionOrder: 15,
    sectionTitleVi: 'Dự đoán và khả năng',
  },
  {
    id: 'gr-cao-cap-81',
    pattern: 'A/V - (느)ㄴ다는 듯이',
    meaningVi: 'Như thể nói rằng... — hành vi, biểu cảm vế sau ngầm truyền tải nội dung vế trước dù chưa nói ra',
    usageNotes:
      'Hành vi được mô tả ở vế sau giống như đang ngầm thể hiện, truyền tải nội dung của vế trước, mặc dù chủ thể chưa bao giờ thực sự nói ra điều đó — thường dùng để miêu tả cử chỉ, biểu cảm, thái độ. Là dạng trích dẫn (-ㄴ다는) kết hợp với -듯이.',
    examples: [
      { ko: '백화점 직원이 옷을 보여 주자 수진 씨가 마음에 안 든다는 듯이 얼굴을 찌푸렸어요.', vi: 'Khi nhân viên bách hóa đưa quần áo ra, Sujin nhăn mặt như thể ý bảo không vừa lòng.' },
      { ko: '저와 같이 영화를 보고 있는데 남자 친구가 지루하다는 듯이 계속 하품을 해 댔어요.', vi: 'Đang xem phim cùng tôi mà bạn trai cứ ngáp liên tục như thể đang bảo là chán lắm.' },
    ],
    commonMistakes: [
      'Vì mang hình thức trích dẫn gián tiếp (-ㄴ다는) nên phải chia đúng theo từ loại/thì của mệnh đề được trích dẫn trước khi thêm 듯이 — không gắn thẳng 듯이 vào thân từ như -는 듯이 thông thường.',
    ],
    level: 'cao-cap',
    section: 'du-doan-kha-nang',
    sectionOrder: 15,
    sectionTitleVi: 'Dự đoán và khả năng',
  },
  {
    id: 'gr-cao-cap-82',
    pattern: 'A/V - (으)ㄴ/는/(으)ㄹ 듯하다',
    meaningVi: 'Có vẻ như, hình như... — người nói giả định hoặc suy đoán về một sự việc, trang trọng hơn -는 것 같다',
    usageNotes:
      'Dùng khi người nói đang giả định hay suy đoán về một sự việc hoặc tình huống nào đó. Sắc thái trang trọng hơn -는 것 같다, thường xuất hiện trong văn viết hoặc lời nói lịch sự. Biểu hiện tương tự: -는 듯싶다.',
    examples: [
      { ko: '가수 비는 팬을 보고 감동을 받은 듯했어요.', vi: 'Ca sĩ Rain có vẻ như đã cảm động khi nhìn thấy người hâm mộ.' },
      { ko: '코로나 확진자가 줄어들지 않으면 경제에 큰 영향을 미칠 듯하다.', vi: 'Nếu số ca nhiễm COVID-19 không giảm thì có vẻ như sẽ ảnh hưởng lớn đến nền kinh tế.' },
    ],
    commonMistakes: [
      'Chọn đúng dạng theo thì: quá khứ dùng -(으)ㄴ (받은 듯하다), hiện tại dùng -는 (động từ) hoặc -(으)ㄴ (tính từ), tương lai/suy đoán dùng -(으)ㄹ; và 듯하다 luôn chia như tính từ (듯하다, 듯했다...), không chia thành "듯한다".',
    ],
    level: 'cao-cap',
    section: 'du-doan-kha-nang',
    sectionOrder: 15,
    sectionTitleVi: 'Dự đoán và khả năng',
  },
  {
    id: 'gr-cao-cap-83',
    pattern: 'A/V - (으)ㄹ 게 뻔하다',
    meaningVi: 'Chắc chắn sẽ... — dự đoán rõ ràng một kết quả (thường tiêu cực) dựa trên kinh nghiệm tương tự trong quá khứ',
    usageNotes:
      'Người nói có thể dự đoán hoặc phỏng đoán rõ ràng kết quả của một hành động hay tình huống nào đó trong tương lai, dựa trên những trải nghiệm tương tự đã từng trải qua. Chủ yếu dùng để dự đoán các tình huống có kết quả không tốt.',
    examples: [
      { ko: '이번에 열심히 공부 안 한다면 시험에서 떨어질 게 뻔해요.', vi: 'Nếu lần này không chăm chỉ học thì chắc chắn sẽ trượt kỳ thi.' },
      { ko: '민수 씨가 바람을 쐬러 가는 것을 좋아하니까 지금 어디 여행 갔을 게 뻔해요.', vi: 'Vì Minsu thích đi hóng gió nên chắc chắn giờ đang đi du lịch đâu đó rồi.' },
    ],
    commonMistakes: [
      'Hầu như chỉ dùng để dự đoán kết quả tiêu cực, không hay — nếu dự đoán một kết quả tích cực nên cân nhắc dùng -(으)ㄹ 것이 확실하다 hoặc -(으)ㄹ 것이 분명하다 thay thế.',
    ],
    level: 'cao-cap',
    section: 'du-doan-kha-nang',
    sectionOrder: 15,
    sectionTitleVi: 'Dự đoán và khả năng',
  },
  {
    id: 'gr-cao-cap-84',
    pattern: 'V - (으)ㄹ 법하다',
    meaningVi: 'Có thể sẽ, hẳn là... — có khả năng hoặc lý do hợp lý để tin rằng điều gì đó sẽ xảy ra',
    usageNotes:
      'Dùng khi người nói cho rằng có khả năng hoặc có cơ sở hợp lý để tin một điều gì đó sẽ xảy ra hoặc đã xảy ra.',
    examples: [
      { ko: '한국에서 산 지 2년이나 됐으면 이제 한국 생활에 익숙해졌을 법한데 여전히 낯설기만 해요.', vi: 'Sống ở Hàn Quốc đã 2 năm rồi thì đáng lẽ phải quen với cuộc sống ở đây, vậy mà vẫn thấy xa lạ.' },
      { ko: '배우 김선호와의 인터뷰에서 기자는 여성 팬이라면 궁금해할 법한 질문들을 했다.', vi: 'Trong buổi phỏng vấn với diễn viên Kim Seon-ho, phóng viên đã đặt những câu hỏi mà fan nữ hẳn sẽ tò mò muốn biết.' },
    ],
    commonMistakes: [
      'Gần nghĩa với -(으)ㄹ 만하다 nhưng -(으)ㄹ 법하다 thiên về suy đoán "có khả năng/có cơ sở xảy ra", còn -(으)ㄹ 만하다 thiên về đánh giá "đáng để làm, xứng đáng".',
    ],
    level: 'cao-cap',
    section: 'du-doan-kha-nang',
    sectionOrder: 15,
    sectionTitleVi: 'Dự đoán và khả năng',
  },
  {
    id: 'gr-cao-cap-85',
    pattern: 'A/V - (으)ㄹ 리가 없다/있다',
    meaningVi: 'Không có lý nào, làm gì có chuyện... — khẳng định một việc không có khả năng xảy ra',
    usageNotes:
      'Thể hiện rằng một việc gì đó không có khả năng xảy ra, dựa trên suy luận logic hay lẽ thường của người nói. Dạng phủ định -(으)ㄹ 리가 없다 phổ biến hơn nhiều so với dạng khẳng định -(으)ㄹ 리가 있다, vốn thường chỉ xuất hiện trong câu hỏi tu từ để phủ định mạnh hơn.',
    examples: [
      { ko: '해가 서쪽에서 뜰 리가 없어요.', vi: 'Làm gì có chuyện mặt trời mọc ở đằng tây.' },
      { ko: '그 정직한 사람이 거짓말을 했을 리가 없다.', vi: 'Người trung thực như thế không đời nào lại nói dối.' },
    ],
    commonMistakes: [
      'Dạng khẳng định -(으)ㄹ 리가 있다 thường chỉ xuất hiện trong câu hỏi tu từ (…이/가 있겠어요?) để phủ định mạnh hơn, không dùng như một câu khẳng định thông thường.',
    ],
    level: 'cao-cap',
    section: 'du-doan-kha-nang',
    sectionOrder: 15,
    sectionTitleVi: 'Dự đoán và khả năng',
  },
  {
    id: 'gr-cao-cap-86',
    pattern: 'V - 기 십상이다',
    meaningVi: 'Rất dễ, dễ dàng... (xảy ra điều không hay) — khả năng xảy ra rất cao',
    usageNotes:
      'Thể hiện tình huống nêu trước cấu trúc này rất dễ xảy ra hoặc có khả năng xảy ra lớn, thường mang sắc thái tiêu cực. Biểu hiện tương tự: -기가 쉽다.',
    examples: [
      { ko: '운동을 시작하기 전에 아무런 준비운동 없으면 부상을 입기 십상이다.', vi: 'Nếu trước khi tập thể dục mà không khởi động gì thì rất dễ bị chấn thương.' },
      { ko: '다이어트를 한다고 그렇게 굶기만 하면 건강이 나빠지기 십상입니다.', vi: 'Nếu cứ nhịn ăn mãi để giảm cân như vậy thì rất dễ hại sức khỏe.' },
    ],
    commonMistakes: [
      'Chỉ dùng cho những kết quả không mong muốn, tiêu cực — không dùng -기 십상이다 để nói về khả năng xảy ra một điều tốt đẹp.',
    ],
    level: 'cao-cap',
    section: 'du-doan-kha-nang',
    sectionOrder: 15,
    sectionTitleVi: 'Dự đoán và khả năng',
  },
  {
    id: 'gr-cao-cap-87',
    pattern: 'A/V - 기 마련이다',
    meaningVi: 'Đương nhiên là, tất nhiên là... — một sự việc phù hợp với lẽ tự nhiên, quy luật thông thường',
    usageNotes:
      'Thể hiện một sự việc đương nhiên xảy ra, phù hợp với quy luật tự nhiên hay lẽ thường ở đời. Thường dùng với châm ngôn, tục ngữ, hoặc những sự việc mang tính quy luật. Có thể thay bằng -게 마련이다.',
    examples: [
      { ko: '언어를 배우는 능력이 뛰어난 사람이 있는가 하면 그렇지 않은 사람도 있기 마련이다.', vi: 'Đương nhiên là có người có năng khiếu học ngôn ngữ vượt trội, mà cũng có người thì không.' },
      { ko: '마음이 편해야 몸도 편해져서 스트레스가 줄게 마련이다.', vi: 'Tâm có thoải mái thì thân mới thoải mái, nên đương nhiên căng thẳng sẽ giảm đi.' },
    ],
    commonMistakes: [
      'Gần như đồng nghĩa hoàn toàn với -는 법이다 (mục kế tiếp) và có thể thay thế lẫn nhau trong hầu hết ngữ cảnh diễn đạt sự đương nhiên.',
    ],
    level: 'cao-cap',
    section: 'su-duong-nhien',
    sectionOrder: 16,
    sectionTitleVi: 'Sự đương nhiên',
  },
  {
    id: 'gr-cao-cap-88',
    pattern: 'A/V - 는 법이다',
    meaningVi: 'Vốn dĩ là, đương nhiên là... — nội dung vế trước là một sự thật hiển nhiên',
    usageNotes:
      'Thể hiện rằng nội dung ở vế trước là một sự đương nhiên, hiển nhiên đúng theo lẽ thường, gần nghĩa và có thể dùng thay cho -기 마련이다.',
    examples: [
      { ko: '만약 죄가 있다면 그 죄는 감출 수 없으며 언젠가는 다시 드러나는 법이다.', vi: 'Nếu đã có tội thì tội đó không thể giấu được, thế nào rồi cũng sẽ bị phơi bày ra.' },
      { ko: '아무리 좋은 말도 여러 번 들으면 듣기 싫은 법이다.', vi: 'Dù là lời hay đến đâu mà nghe nhiều lần thì đương nhiên cũng sẽ thấy chán nghe.' },
    ],
    commonMistakes: [
      'Cấu trúc dùng -는 (động từ) hoặc -(으)ㄴ (tính từ) trước 법이다 — không nhầm với quy tắc của -기 마련이다 vốn luôn dùng -기 bất kể từ loại.',
    ],
    level: 'cao-cap',
    section: 'su-duong-nhien',
    sectionOrder: 16,
    sectionTitleVi: 'Sự đương nhiên',
  },
  {
    id: 'gr-cao-cap-89',
    pattern: 'A/V - (으)ㄴ/는가 하면',
    meaningVi: 'Có... thì cũng có..., trong khi... thì lại... — liệt kê hai nội dung đối lập cùng tồn tại',
    usageNotes:
      'Diễn tả hai nội dung đối lập nhau, cả hai đều đồng thời tồn tại. Vế sau thường gắn thêm trợ từ 도 để nhấn mạnh sự tồn tại song song của hai nội dung này.',
    examples: [
      { ko: '의견들 중 일부는 합리적인가 하면 불합리한 의견도 있다.', vi: 'Trong số các ý kiến, có ý kiến hợp lý thì cũng có ý kiến không hợp lý.' },
      { ko: '베트남 사람이라도 쌀국수를 좋아하는 사람이 있는가 하면 싫어하는 사람도 있다.', vi: 'Dù là người Việt Nam thì cũng có người thích phở, mà cũng có người không thích.' },
    ],
    commonMistakes: [
      'Vế sau gần như luôn có trợ từ 도 đi kèm để làm rõ tính đối lập song song — nếu bỏ 도, câu dễ mất đi sắc thái "cũng có... cùng tồn tại".',
    ],
    level: 'cao-cap',
    section: 'liet-ke',
    sectionOrder: 17,
    sectionTitleVi: 'Liệt kê',
  },
  {
    id: 'gr-cao-cap-90',
    pattern: 'A - (으)니 A - (으)니 하다 / V - 느니 V - 느니 하다',
    meaningVi: 'Người thì bảo..., người thì bảo... — liệt kê những ý kiến, suy nghĩ khác nhau về cùng một việc',
    usageNotes:
      'Liệt kê những suy nghĩ hay ý kiến khác nhau xung quanh một sự việc hay trạng thái nào đó; có thể lược bỏ 하다. Dạng trích dẫn: -(느)ㄴ다느니 -(느)ㄴ다느니 하다. Biểu hiện tương tự: -(으)네 -(으)네 하다.',
    examples: [
      { ko: '흐엉 씨는 한국으로 유학을 가느니 베트남에서 취직하느니 고민하고 있어요.', vi: 'Hương đang phân vân, lúc thì định đi du học Hàn Quốc, lúc thì định xin việc ở Việt Nam.' },
      { ko: '유리 씨는 시장은 복잡하니 환불이 안 되느니 하면서 백화점만 가요.', vi: 'Yuri cứ bảo là chợ thì đông đúc, lại không cho đổi trả, nên chỉ đi mỗi trung tâm thương mại.' },
    ],
    commonMistakes: [
      'Thường mang sắc thái than phiền, kể lể nhiều ý kiến lặt vặt trái chiều — không dùng để liệt kê trung lập, khách quan như -고 hay -으며.',
    ],
    level: 'cao-cap',
    section: 'liet-ke',
    sectionOrder: 17,
    sectionTitleVi: 'Liệt kê',
  },
  {
    id: 'gr-cao-cap-91',
    pattern: 'V - (으)랴 V - (으)랴',
    meaningVi: 'Vừa lo... vừa lo... — diễn tả sự bận rộn khi phải thực hiện từ hai việc trở lên',
    usageNotes:
      'Thể hiện sự bận rộn của chủ thể khi phải thực hiện đồng thời từ hai hành động trở lên.',
    examples: [
      { ko: '수업 시간에 저희들은 필기하랴 선생님의 설명을 들으랴 얼마나 바쁜지 몰라요.', vi: 'Trong giờ học, chúng tôi vừa lo ghi chép vừa lo nghe thầy cô giảng, bận không để đâu cho hết.' },
      { ko: '학교에 다니랴 아르바이트를 하랴 고생이 많아요.', vi: 'Vừa đi học vừa đi làm thêm nên vất vả lắm.' },
    ],
    commonMistakes: [
      'Luôn cần ít nhất hai động từ khác nhau lặp lại cấu trúc -(으)랴 -(으)랴 — không dùng với một hành động duy nhất.',
    ],
    level: 'cao-cap',
    section: 'liet-ke',
    sectionOrder: 17,
    sectionTitleVi: 'Liệt kê',
  },
  {
    id: 'gr-cao-cap-92',
    pattern: 'N(이)며 N(이)며',
    meaningVi: 'Nào là... nào là..., vừa... vừa... — liệt kê hai hay nhiều sự vật, sự việc',
    usageNotes:
      'Liệt kê hai hoặc nhiều sự vật, sự việc nào đó; mang sắc thái khẩu ngữ, không dùng trong văn phong trang trọng.',
    examples: [
      { ko: '민호 씨는 공부며 운동이며 못하는 게 없어요.', vi: 'Minho chẳng có gì là không giỏi, nào học hành, nào thể thao.' },
      { ko: '사기를 당하는 바람에 집이며 자동차며 모두 잃었다.', vi: 'Vì bị lừa mà mất sạch cả nhà lẫn xe.' },
    ],
    commonMistakes: [
      'Chỉ dùng trong khẩu ngữ, sắc thái thân mật — không dùng trong văn viết trang trọng, báo cáo.',
    ],
    level: 'cao-cap',
    section: 'liet-ke',
    sectionOrder: 17,
    sectionTitleVi: 'Liệt kê',
  },
  {
    id: 'gr-cao-cap-93',
    pattern: 'V - (으)ㄴ 끝에',
    meaningVi: 'Sau khi... (trải qua một quá trình dài, khó khăn) — kết quả đạt được sau nỗ lực',
    usageNotes:
      'Diễn tả kết quả đạt được sau một thời gian dài hoặc một quá trình khó khăn; hành động trước đó thường tốn nhiều thời gian, công sức. Thường đi cùng các phó từ như 결국, 마침내, 드디어.',
    examples: [
      { ko: '수차례의 실패를 거듭한 끝에 겨우 그 일을 해냈어요.', vi: 'Sau bao lần thất bại liên tiếp, cuối cùng tôi cũng đã hoàn thành được việc đó.' },
      { ko: '고민한 끝에 한국으로 유학을 가기로 결정했다.', vi: 'Sau một thời gian dài trăn trở, tôi đã quyết định đi du học Hàn Quốc.' },
    ],
    commonMistakes: [
      'Chỉ dùng khi vế trước là một quá trình kéo dài, tốn công sức — không dùng cho hành động diễn ra nhanh chóng, đơn giản.',
    ],
    level: 'cao-cap',
    section: 'ket-qua-hoi-tuong',
    sectionOrder: 18,
    sectionTitleVi: 'Kết quả và hồi tưởng',
  },
  {
    id: 'gr-cao-cap-94',
    pattern: 'V - 아/어 내다',
    meaningVi: 'Cố gắng làm được, hoàn thành được (điều khó khăn) — vượt qua trở ngại để đạt kết quả',
    usageNotes:
      'Thể hiện việc cuối cùng cũng hoàn thành hay đạt được một điều gì đó sau khi cố gắng, nỗ lực. Không dùng ở thể bị động, chỉ kết hợp với những động từ thể hiện sự khắc phục khó khăn hoặc ý chí mạnh mẽ.',
    examples: [
      { ko: '이 암호의 뜻을 알아내기 위해 최선을 다 했지만 결국 실패하고 말았다.', vi: 'Tôi đã cố gắng hết sức để giải mã ý nghĩa của mật mã này nhưng cuối cùng vẫn thất bại.' },
      { ko: '그 사람이 시각 장애를 가지지만 역경을 이겨 냈어요.', vi: 'Người đó tuy bị khiếm thị nhưng đã vượt qua được nghịch cảnh.' },
    ],
    commonMistakes: [
      'Không chia ở thể bị động, và chỉ kết hợp với động từ mang nghĩa khắc phục khó khăn/ý chí (알아내다, 이겨내다, 해내다...) — không gắn tùy tiện vào mọi động từ.',
    ],
    level: 'cao-cap',
    section: 'ket-qua-hoi-tuong',
    sectionOrder: 18,
    sectionTitleVi: 'Kết quả và hồi tưởng',
  },
  {
    id: 'gr-cao-cap-95',
    pattern: 'A/V - 데요',
    meaningVi: 'Nghe/thấy là... đấy — hồi tưởng và truyền đạt lại điều bản thân đã trực tiếp trải nghiệm',
    usageNotes:
      'Dùng khi người nói hồi tưởng lại điều mình đã trực tiếp trải qua hoặc cảm nhận được trong quá khứ, và truyền đạt lại thông tin đó cho người nghe. Chủ yếu dùng trong văn nói.',
    examples: [
      { ko: '흐엉 씨가 한국어를 배운 지 얼마 안 됐다고 하던데 아주 잘하데요.', vi: 'Nghe nói Hương học tiếng Hàn chưa được bao lâu mà giỏi thật đấy.' },
      { ko: '제주도 날씨가 생각보다 덥지 않데요.', vi: 'Thời tiết Jeju không nóng như tôi tưởng đâu.' },
    ],
    commonMistakes: [
      'Chỉ dùng cho điều người nói đã tự mình trực tiếp trải nghiệm/chứng kiến trong quá khứ — không dùng để truyền đạt thông tin nghe được từ người khác (trường hợp đó dùng -다고 하더라고요).',
    ],
    level: 'cao-cap',
    section: 'ket-qua-hoi-tuong',
    sectionOrder: 18,
    sectionTitleVi: 'Kết quả và hồi tưởng',
  },
  {
    id: 'gr-cao-cap-96',
    pattern: 'A/V - (으)ㄴ/는 가운데',
    meaningVi: 'Giữa lúc, trong lúc... — vế sau xảy ra trong khi tình huống vế trước vẫn đang tiếp diễn',
    usageNotes:
      'Nội dung ở vế sau xảy ra trong khi tình huống hay trạng thái của sự việc ở vế trước vẫn đang tiếp diễn; vế trước trở thành nền tảng, bối cảnh cho vế sau.',
    examples: [
      { ko: '비가 내리는 가운데 공연은 중단되지 않고 계속되었다.', vi: 'Giữa lúc trời đang mưa, buổi biểu diễn vẫn không bị gián đoạn mà tiếp tục diễn ra.' },
      { ko: '민지 씨는 바쁜 가운데 저를 도와줬어요.', vi: 'Giữa lúc đang bận rộn, Minji vẫn giúp đỡ tôi.' },
    ],
    commonMistakes: [
      'Vế trước phải là một tình huống/trạng thái đang tiếp diễn (dùng -는 với động từ, -(으)ㄴ với tính từ) làm bối cảnh nền — không dùng để nêu nguyên nhân trực tiếp như -아/어서.',
    ],
    level: 'cao-cap',
    section: 'tinh-huong-tieu-chuan',
    sectionOrder: 19,
    sectionTitleVi: 'Tình huống hoặc tiêu chuẩn',
  },
  {
    id: 'gr-cao-cap-97',
    pattern: 'A/V - (으)ㄴ/는 마당에',
    meaningVi: 'Trong hoàn cảnh (bất lợi) mà... — tình huống, hoàn cảnh thường tiêu cực làm nền cho vế sau',
    usageNotes:
      'Biểu hiện một hoàn cảnh hay tình huống tạo điều kiện cho việc gì đó xảy ra ở vế sau; tình huống được nêu ở vế trước thường mang tính không thuận lợi hoặc tiêu cực.',
    examples: [
      { ko: '집안 형편이 어려워진 마당에 오직 돈을 벌어야겠다는 일념으로 살았다.', vi: 'Trong hoàn cảnh gia đình trở nên khó khăn, tôi chỉ sống với một tâm niệm duy nhất là phải kiếm tiền.' },
      { ko: '학기가 끝나는 마당에 열심히 공부하지 않은 걸 후회해도 소용이 없죠.', vi: 'Đến lúc học kỳ đã kết thúc rồi thì có hối hận vì không chăm học cũng chẳng ích gì.' },
    ],
    commonMistakes: [
      'Tình huống nêu ở vế trước gần như luôn mang sắc thái bất lợi, khó khăn hoặc muộn màng — không dùng cho hoàn cảnh thuận lợi, tích cực.',
    ],
    level: 'cao-cap',
    section: 'tinh-huong-tieu-chuan',
    sectionOrder: 19,
    sectionTitleVi: 'Tình huống hoặc tiêu chuẩn',
  },
  {
    id: 'gr-cao-cap-98',
    pattern: 'N - 치고',
    meaningVi: 'Nghĩa 1: Đã là... thì... (khẳng định phổ quát); Nghĩa 2: So với... thì lại... (ngoại lệ so với thông thường)',
    usageNotes:
      'Có hai cách dùng chính. Nghĩa 1: khi đi cùng danh từ mang tính đại diện cho một nhóm, thể hiện rằng nội dung ở vế sau đúng, phù hợp với toàn bộ nhóm đó — thường dùng trong câu phủ định hoặc câu hỏi tu từ. Nghĩa 2: thể hiện sự khác biệt, ngoại lệ so với đặc điểm thông thường mà danh từ đó vốn có.',
    examples: [
      { ko: '아이치고 사탕을 싫어하는 아이는 없을 거예요.', vi: 'Đã là trẻ con thì chắc chẳng có đứa nào ghét kẹo cả.' },
      { ko: '한국 사람치고는 김치를 못 먹는 사람이 어디 있겠어요?', vi: 'Đã là người Hàn thì làm gì có ai không ăn được kim chi chứ?' },
      { ko: '외국 사람치고 한국어 발음이 좋은 편이에요.', vi: 'So với người nước ngoài nói chung thì phát âm tiếng Hàn của anh ấy khá tốt.' },
    ],
    commonMistakes: [
      'Dễ nhầm hai nghĩa với nhau: nghĩa 1 (đã là...thì đương nhiên...) thường đi với câu phủ định/nghi vấn tu từ để khẳng định tính phổ quát, còn nghĩa 2 (so với...thì lại...) dùng để chỉ ra một trường hợp khác biệt, ngoại lệ so với số đông cùng loại.',
      'Cần dựa vào ngữ cảnh và ý nghĩa của vế sau để xác định đang dùng theo nghĩa nào, vì cấu trúc bề mặt "N 치고" giống hệt nhau ở cả hai trường hợp.',
    ],
    level: 'cao-cap',
    section: 'tinh-huong-tieu-chuan',
    sectionOrder: 19,
    sectionTitleVi: 'Tình huống hoặc tiêu chuẩn',
  },
  {
    id: 'gr-cao-cap-99',
    pattern: 'A/V - (으)ㅁ에 따라',
    meaningVi: 'Cùng với việc, theo đà... — kết quả vế sau dựa trên sự thay đổi/tiêu chuẩn của vế trước',
    usageNotes:
      'Kết quả nêu ở vế sau dựa trên tiêu chuẩn hoặc sự thay đổi trạng thái của vấn đề được nêu ở vế trước; vế trước thường được danh từ hóa bằng -(으)ㅁ. Chủ yếu dùng trong văn viết.',
    examples: [
      { ko: '과학 기술이 발달함에 따라 우리의 생활이 점점 편리해졌다.', vi: 'Cùng với sự phát triển của khoa học kỹ thuật, cuộc sống của chúng ta ngày càng trở nên tiện lợi hơn.' },
      { ko: '환경 보호에 대한 관심이 높아짐에 따라 친환경 사업에 대한 관심도 높아지고 있다.', vi: 'Cùng với việc mối quan tâm đến bảo vệ môi trường tăng lên, sự quan tâm đến các ngành kinh doanh thân thiện với môi trường cũng đang tăng theo.' },
    ],
    commonMistakes: [
      'Là cấu trúc trang trọng của văn viết, gần nghĩa -(으)ㄹ수록 nhưng nhấn mạnh quan hệ tỉ lệ thuận giữa hai vế theo thời gian/tiến trình hơn là mức độ — không dùng tùy tiện thay cho -(으)ㄹ수록 trong mọi ngữ cảnh.',
    ],
    level: 'cao-cap',
    section: 'tinh-huong-tieu-chuan',
    sectionOrder: 19,
    sectionTitleVi: 'Tình huống hoặc tiêu chuẩn',
  },
  {
    id: 'gr-cao-cap-100',
    pattern: '여간 A/V - 지 않다',
    meaningVi: 'Hết sức, vô cùng (là)... — nhấn mạnh mức độ vượt xa mức bình thường bằng cách dùng thể phủ định',
    usageNotes:
      'Diễn đạt một trạng thái có mức độ vượt hẳn so với thông thường, dùng hình thức phủ định (-지 않다) để nhấn mạnh ý khẳng định mạnh mẽ. Với danh từ dùng dạng 여간 N이/가 아니다.',
    examples: [
      { ko: '흐엉 씨는 외국인이지만 매운 한국 음식도 여간 잘 먹지 않아요.', vi: 'Hương tuy là người nước ngoài nhưng ăn đồ cay Hàn Quốc giỏi hết sức luôn.' },
      { ko: '요즘 아르바이트하며 토픽 시험 준비까지 하니까 여간 힘들지 않다.', vi: 'Dạo này vừa làm thêm vừa ôn thi TOPIK nên vất vả vô cùng.' },
    ],
    commonMistakes: [
      'Dù có hình thức phủ định (-지 않다) nhưng ý nghĩa lại là khẳng định mạnh mẽ — dễ hiểu nhầm thành phủ định nếu dịch sát nghĩa từng chữ; luôn cần có 여간 đứng trước để tạo ra sắc thái nhấn mạnh này.',
    ],
    level: 'cao-cap',
    section: 'nhan-manh',
    sectionOrder: 20,
    sectionTitleVi: 'Nhấn mạnh',
  },
  {
    id: 'gr-cao-cap-101',
    pattern: 'A - 기가 이를 데 없다',
    meaningVi: 'Không gì bằng, quá ư là... — nhấn mạnh mức độ cao nhất, không gì so sánh được',
    usageNotes:
      'Nhấn mạnh mức độ của tính từ đứng trước ở mức không gì có thể so sánh được. Chủ yếu dùng trong văn viết. Biểu hiện tương tự: -기 짝이 없다.',
    examples: [
      { ko: '출퇴근 시간에는 버스에 사람이 너무 많아서 혼잡하기가 이를 데 없다.', vi: 'Vào giờ đi làm về, xe buýt đông người đến mức hỗn loạn không gì tả nổi.' },
      { ko: '한국에 처음에 왔을 때는 언어와 문화가 많이 달라서 답답하기가 이를 데 없었다.', vi: 'Khi mới đến Hàn Quốc, vì ngôn ngữ và văn hóa khác biệt quá nhiều nên tôi thấy ngột ngạt vô cùng.' },
    ],
    commonMistakes: [
      'Chỉ kết hợp với tính từ (A), không dùng với động từ; là cấu trúc văn viết trang trọng nên hạn chế dùng trong khẩu ngữ suồng sã.',
    ],
    level: 'cao-cap',
    section: 'nhan-manh',
    sectionOrder: 20,
    sectionTitleVi: 'Nhấn mạnh',
  },
  {
    id: 'gr-cao-cap-102',
    pattern: 'A - 기 짝이 없다',
    meaningVi: 'Không gì bằng, thật là... — nhấn mạnh mức độ cao nhất, không gì so sánh được',
    usageNotes:
      'Cũng dùng để nhấn mạnh mức độ của tính từ đứng trước ở mức không gì so sánh được, gần như đồng nghĩa hoàn toàn với -기가 이를 데 없다 ở mục trước. Chủ yếu dùng trong văn viết.',
    examples: [
      { ko: '많은 사람들 앞에서 그런 실수를 하다니 부끄럽기 짝이 없어요.', vi: 'Mắc phải sai lầm như vậy trước mặt bao nhiêu người thì thật là xấu hổ hết chỗ nói.' },
      { ko: '그 드라마가 정말 지루하기 짝이 없었다.', vi: 'Bộ phim đó thật sự nhàm chán không gì tả nổi.' },
    ],
    commonMistakes: [
      'Có thể dùng thay thế lẫn nhau với -기가 이를 데 없다 trong hầu hết ngữ cảnh; chỉ kết hợp với tính từ (A), không dùng với động từ.',
    ],
    level: 'cao-cap',
    section: 'nhan-manh',
    sectionOrder: 20,
    sectionTitleVi: 'Nhấn mạnh',
  },
  {
    id: 'gr-cao-cap-103',
    pattern: 'V - (으)ㄹ 래야 V - (으)ㄹ 수가 없다',
    meaningVi: 'Có muốn... cũng không thể... — có ý định làm gì đó nhưng hoàn cảnh không cho phép thực hiện được',
    usageNotes:
      'Dù có ý định thực hiện một việc gì đó nhưng lại xảy ra tình huống trái ngược với ý định đó, khiến cuối cùng không thể thực hiện được ý định ban đầu. Cùng một động từ được lặp lại ở cả hai vế.',
    examples: [
      { ko: '이번에는 꼭 담배를 끊기로 다짐했는데 오랫동안 피워서 그런지 끊을래야 끊을 수 없어요.', vi: 'Lần này tôi đã quyết tâm nhất định phải bỏ thuốc lá, nhưng có lẽ vì hút lâu quá nên có muốn bỏ cũng không bỏ được.' },
      { ko: '도서관에서 학생증을 잃어버렸는데 아무리 살펴봐도 찾을래야 찾을 수가 없어요.', vi: 'Tôi làm mất thẻ sinh viên ở thư viện, dù tìm kỹ đến đâu cũng không thể nào tìm ra được.' },
    ],
    commonMistakes: [
      'Cùng một động từ phải được lặp lại ở cả hai vế (V-(으)ㄹ래야 V-(으)ㄹ 수가 없다) — không thay đổi động từ giữa hai vế; đây là dạng khẩu ngữ của -(으)려고 해야 -(으)ㄹ 수가 없다.',
    ],
    level: 'cao-cap',
    section: 'nhan-manh',
    sectionOrder: 20,
    sectionTitleVi: 'Nhấn mạnh',
  },
  {
    id: 'gr-cao-cap-104',
    pattern: '비록 A/V - 지만/더라도/(으)ㄹ지라도',
    meaningVi: 'Dù, mặc dù — nhượng bộ trang trọng, luôn cần đuôi câu nhượng bộ đi kèm ở cuối vế',
    usageNotes:
      'Đứng đầu vế trước để nhấn mạnh TÍNH NHƯỢNG BỘ ngay từ đầu câu, và bắt buộc phải có một đuôi câu nhượng bộ tương ứng ở cuối vế đó (-지만, -더라도, hoặc -(으)ㄹ지라도 — cấp độ trang trọng tăng dần theo thứ tự này). Trang trọng hơn hẳn 아무리 ~아/어도, hay gặp trong văn viết/diễn văn.',
    examples: [
      { ko: '비록 실패했지만 좋은 경험이 되었어요.', vi: 'Dù đã thất bại nhưng đó là một trải nghiệm tốt.' },
      { ko: '비록 가난하더라도 마음만은 풍요롭게 살고 싶어요.', vi: 'Dù có nghèo thì tôi vẫn muốn sống thanh thản, đủ đầy trong tâm hồn.' },
      { ko: '비록 시간이 오래 걸릴지라도 끝까지 해내겠습니다.', vi: 'Dù có mất nhiều thời gian đi chăng nữa, tôi cũng sẽ làm đến cùng.' },
      { ko: '비록 몸은 멀리 떨어져 있지만 마음은 항상 함께예요.', vi: 'Dù thân xa cách nhưng trái tim luôn ở bên nhau.' },
    ],
    commonMistakes: [
      '비록 KHÔNG tự đứng một mình — luôn cần đuôi nhượng bộ (-지만/-더라도/-(으)ㄹ지라도) ở cuối vế trước, thiếu đuôi đó câu sai ngữ pháp dù có 비록 ở đầu.',
      'Đây chính là từ hay xuất hiện trong dạng câu điền-từ-nối TOPIK 19-20 — khi thấy chỗ trống đứng trước một đuôi câu nhượng bộ (-지만/-더라도), 비록 gần như luôn là đáp án đúng.',
      '반면(에)/오히려 diễn tả ĐỐI LẬP giữa hai vế; 비록 diễn tả NHƯỢNG BỘ (thừa nhận vế trước rồi phủ nhận tác động của nó) — không thay thế lẫn nhau dù đều mang sắc thái "trái chiều".',
    ],
    level: 'cao-cap',
    section: 'phu-tu-lien-ket-cau',
    sectionOrder: 21,
    sectionTitleVi: 'Phó từ liên kết câu',
    relatedPatterns: [
      { id: 'gr-cao-cap-42', distinction: 'Là 1 trong 3 đuôi bắt buộc đi sau 비록, không phải mẫu độc lập cạnh tranh.' },
      { id: 'gr-cao-cap-44', distinction: 'Cũng là đuôi bắt buộc đi sau 비록, mức trang trọng cao nhất trong 3 lựa chọn.' },
      { id: 'gr-trung-cap-10', distinction: '반면(에) diễn tả ĐỐI LẬP giữa 2 vế; 비록 diễn tả NHƯỢNG BỘ (thừa nhận rồi phủ nhận tác động), không thay thế lẫn nhau.' },
      { id: 'gr-trung-cap-95', distinction: 'Cùng là nhượng bộ nhưng 아무리 kém trang trọng hơn, dùng khẩu ngữ; 비록 trang trọng, hay gặp trong văn viết/thi cử.' },
    ],
  },
  {
    id: 'gr-cao-cap-105',
    pattern: '설마',
    meaningVi: 'Chẳng lẽ, lẽ nào — nghi ngờ, không tin điều gì đó là sự thật (thường đi với ~겠어요?/~은 아니겠지?)',
    usageNotes:
      'Diễn tả thái độ hoài nghi, không muốn tin một khả năng nào đó là sự thật dù có dấu hiệu cho thấy nó có thể xảy ra — thường đi kèm câu hỏi tu từ (~겠어요?, ~은/는 아니겠지요?) ở cuối câu.',
    examples: [
      { ko: '설마 그 사람이 거짓말을 했겠어요?', vi: 'Chẳng lẽ người đó lại nói dối sao?' },
      { ko: '설마 우리를 잊은 건 아니겠지요?', vi: 'Lẽ nào anh ấy lại quên chúng ta chứ?' },
      { ko: '설마 시험에 또 떨어지지는 않겠지.', vi: 'Chẳng lẽ lại trượt kỳ thi lần nữa.' },
    ],
    commonMistakes: [
      '설마 luôn mang sắc thái NGHI NGỜ/không tin — không dùng để hỏi thông tin trung tính như 혹시.',
      'Thường xuất hiện cùng đuôi câu phỏng đoán mang tính phủ định nhẹ (아니겠지요?) — không dùng với câu khẳng định dứt khoát.',
    ],
    level: 'cao-cap',
    section: 'phu-tu-lien-ket-cau',
    sectionOrder: 21,
    sectionTitleVi: 'Phó từ liên kết câu',
    relatedPatterns: [
      { id: 'gr-cao-cap-110', distinction: '혹시 mang sắc thái lịch sự/thăm dò nhẹ nhàng; 설마 luôn hàm ý hoài nghi, không tin.' },
    ],
  },
  {
    id: 'gr-cao-cap-106',
    pattern: '다만',
    meaningVi: 'Nhưng, chỉ có điều — nêu một ngoại lệ/điều kiện nhỏ bổ sung cho ý chính, trang trọng',
    usageNotes:
      'Thừa nhận ý chính ở câu trước là đúng, nhưng nêu thêm MỘT NGOẠI LỆ hoặc điều kiện nhỏ cần lưu ý — sắc thái nhẹ nhàng hơn 하지만, hay dùng trong văn bản quy định, thông báo, hợp đồng.',
    examples: [
      { ko: '이 약은 효과가 좋다. 다만 임산부는 복용을 피해야 한다.', vi: 'Loại thuốc này hiệu quả tốt. Chỉ có điều phụ nữ mang thai nên tránh dùng.' },
      { ko: '누구나 신청할 수 있습니다. 다만 만 18세 이상이어야 합니다.', vi: 'Ai cũng có thể đăng ký. Nhưng phải từ đủ 18 tuổi trở lên.' },
      { ko: '가격은 합리적이다. 다만 배송이 조금 느리다.', vi: 'Giá cả hợp lý. Chỉ có điều giao hàng hơi chậm.' },
    ],
    commonMistakes: [
      '다만 nêu một ngoại lệ/điều kiện BỔ SUNG cho ý chính vẫn đang được thừa nhận là đúng — khác 하지만 phủ định mạnh ý trước, 다만 chỉ "khoanh vùng" thêm một trường hợp riêng.',
      'Hay xuất hiện trong văn bản quy định/hướng dẫn — nếu gặp trong bài đọc TOPIK dạng thông báo/quy chế, 다만 thường báo hiệu một điều kiện quan trọng cần chú ý cho câu hỏi chi tiết.',
    ],
    level: 'cao-cap',
    section: 'phu-tu-lien-ket-cau',
    sectionOrder: 21,
    sectionTitleVi: 'Phó từ liên kết câu',
    relatedPatterns: [],
  },
  {
    id: 'gr-cao-cap-107',
    pattern: '오로지',
    meaningVi: 'Chỉ, duy nhất, chỉ mỗi — nhấn mạnh tính duy nhất, không có gì khác',
    usageNotes:
      'Nhấn mạnh rằng chỉ có DUY NHẤT một đối tượng/lý do/mục đích được nhắc đến, loại trừ mọi khả năng khác — sắc thái mạnh và trang trọng hơn 오직.',
    examples: [
      { ko: '그는 오로지 가족만을 위해 일했다.', vi: 'Anh ấy chỉ làm việc vì mỗi gia đình mà thôi.' },
      { ko: '오로지 실력으로만 평가받고 싶어요.', vi: 'Tôi muốn được đánh giá chỉ dựa trên năng lực mà thôi.' },
      { ko: '오로지 한 가지 목표만 보고 달려왔습니다.', vi: 'Tôi đã chỉ nhìn vào một mục tiêu duy nhất mà tiến bước.' },
    ],
    commonMistakes: [
      '오로지 gần nghĩa với 오직 nhưng trang trọng và nhấn mạnh hơn — trong văn nói thân mật, 오직 phổ biến hơn.',
      'Thường đi cùng trợ từ nhấn mạnh -만 ngay sau danh từ được nhấn mạnh (오로지 N만) để tăng sắc thái loại trừ.',
    ],
    level: 'cao-cap',
    section: 'phu-tu-lien-ket-cau',
    sectionOrder: 21,
    sectionTitleVi: 'Phó từ liên kết câu',
    relatedPatterns: [],
  },
  {
    id: 'gr-cao-cap-108',
    pattern: '결코 ... 지 않다/없다',
    meaningVi: 'Quyết không, tuyệt đối không — phủ định mạnh mẽ, luôn đi cùng câu phủ định',
    usageNotes:
      'Nhấn mạnh sự phủ định ở mức độ tuyệt đối — 결코 BẮT BUỘC phải đi cùng một hình thức phủ định ở vị ngữ (-지 않다, -지 못하다, 없다...), không dùng được trong câu khẳng định.',
    examples: [
      { ko: '저는 그 말을 결코 잊지 않을 거예요.', vi: 'Tôi sẽ quyết không bao giờ quên câu nói đó.' },
      { ko: '이번 결정은 결코 쉬운 것이 아니었다.', vi: 'Quyết định lần này tuyệt đối không phải là điều dễ dàng.' },
      { ko: '거짓말은 결코 좋은 습관이 될 수 없다.', vi: 'Nói dối tuyệt đối không thể trở thành một thói quen tốt.' },
    ],
    commonMistakes: [
      '결코 chỉ dùng được trong câu PHỦ ĐỊNH — không dùng trong câu khẳng định, khác 과연/오히려 dùng được cả câu khẳng định lẫn phủ định.',
      'Người Việt hay quên phần phủ định ở cuối vì trong đầu đã dịch "quyết không" mang sẵn nghĩa phủ định — nhưng trong tiếng Hàn 결코 tự nó KHÔNG mang nghĩa phủ định, chỉ là trạng từ nhấn mạnh đi kèm phủ định.',
    ],
    level: 'cao-cap',
    section: 'phu-tu-lien-ket-cau',
    sectionOrder: 21,
    sectionTitleVi: 'Phó từ liên kết câu',
    relatedPatterns: [],
  },
  {
    id: 'gr-cao-cap-109',
    pattern: '과연',
    meaningVi: 'Quả nhiên, quả thực — xác nhận điều đã dự đoán là đúng, hoặc dùng trong câu hỏi tu từ hoài nghi',
    usageNotes:
      'Có hai cách dùng: (1) trong câu khẳng định, xác nhận một điều đúng như những gì đã nghe/dự đoán trước đó ("quả nhiên đúng như vậy"); (2) trong câu hỏi (thường kèm ~을까?), thể hiện sự băn khoăn/hoài nghi thật sự về khả năng xảy ra của điều gì đó.',
    examples: [
      { ko: '그 식당은 소문대로 과연 맛있었다.', vi: 'Quán đó quả nhiên ngon đúng như lời đồn.' },
      { ko: '과연 이 계획이 성공할 수 있을까요?', vi: 'Liệu kế hoạch này quả thực có thể thành công không nhỉ?' },
      { ko: '역시 전문가는 과연 다르구나.', vi: 'Quả nhiên chuyên gia thì khác thật.' },
    ],
    commonMistakes: [
      '설마 luôn mang hàm ý KHÔNG TIN/phủ định; 과연 trung tính hơn, có thể dùng để XÁC NHẬN điều đúng — dễ nhầm vì cả hai đều hay xuất hiện trong câu hỏi tu từ.',
      'Ở nghĩa (1) thường đi cùng 역시 hoặc 소문대로/예상대로 để nhấn "đúng như dự đoán" — thiếu ngữ cảnh dự đoán trước đó, câu dùng 과연 sẽ khó hiểu.',
    ],
    level: 'cao-cap',
    section: 'phu-tu-lien-ket-cau',
    sectionOrder: 21,
    sectionTitleVi: 'Phó từ liên kết câu',
    relatedPatterns: [
      { id: 'gr-cao-cap-105', distinction: '설마 luôn mang hàm ý KHÔNG TIN/phủ định; 과연 trung tính hơn, có thể dùng để XÁC NHẬN điều đúng.' },
    ],
  },
  {
    id: 'gr-cao-cap-110',
    pattern: '혹시',
    meaningVi: 'Có lẽ, nhỡ đâu, lỡ như — hỏi thăm dò lịch sự hoặc giả định một khả năng nhỏ',
    usageNotes:
      'Dùng khi hỏi thăm dò một cách lịch sự, nhẹ nhàng về điều gì đó chưa chắc chắn (khác 설마 luôn hàm ý hoài nghi/không tin), hoặc để giả định một khả năng nhỏ có thể xảy ra rồi đề phòng trước.',
    examples: [
      { ko: '혹시 시간 있으세요?', vi: 'Không biết bạn có rảnh không ạ?' },
      { ko: '혹시 몰라서 우산을 가져왔어요.', vi: 'Tôi mang theo ô phòng khi lỡ trời mưa.' },
      { ko: '혹시 김민수 씨 아니세요?', vi: 'Xin lỗi, có phải anh là Kim Min-su không ạ?' },
    ],
    commonMistakes: [
      '혹시 mang sắc thái LỊCH SỰ, THĂM DÒ nhẹ nhàng — hoàn toàn khác 설마 (hoài nghi, không tin) dù cả hai đều dịch gần giống "chẳng lẽ/nhỡ đâu" sang tiếng Việt.',
      'Rất hay dùng để mở đầu câu hỏi lịch sự khi nhờ vả người lạ — gần giống chức năng "xin lỗi, không biết..." trong tiếng Việt.',
    ],
    level: 'cao-cap',
    section: 'phu-tu-lien-ket-cau',
    sectionOrder: 21,
    sectionTitleVi: 'Phó từ liên kết câu',
    relatedPatterns: [
      { id: 'gr-cao-cap-105', distinction: '설마 luôn mang sắc thái nghi ngờ/không tin; 혹시 trung tính, lịch sự, dùng để thăm dò nhẹ nhàng.' },
    ],
  },
  {
    id: 'gr-cao-cap-111',
    pattern: '그럼에도 불구하고',
    meaningVi: 'Dù vậy, mặc dù thế — nhượng bộ trang trọng, nối với TOÀN BỘ nội dung câu/đoạn trước',
    usageNotes:
      'Khác 비록 (đặt ngay đầu vế nhượng bộ trong CÙNG một câu), 그럼에도 불구하고 đứng ĐẦU MỘT CÂU MỚI để nhượng bộ lại TOÀN BỘ nội dung đã nêu ở câu/đoạn trước đó — rất trang trọng, phổ biến trong văn viết học thuật, báo cáo, bài luận.',
    examples: [
      { ko: '경기가 어렵다. 그럼에도 불구하고 회사는 성장을 이어가고 있다.', vi: 'Kinh tế khó khăn. Dù vậy công ty vẫn tiếp tục tăng trưởng.' },
      { ko: '실패할 위험이 크다. 그럼에도 불구하고 도전해 볼 가치가 있다.', vi: 'Rủi ro thất bại lớn. Nhưng dù vậy vẫn đáng để thử thách.' },
      { ko: '몸이 아팠다. 그럼에도 불구하고 그는 끝까지 경기를 마쳤다.', vi: 'Anh ấy bị ốm. Dù vậy anh vẫn hoàn thành trận đấu đến cùng.' },
    ],
    commonMistakes: [
      '그럼에도 불구하고 đứng đầu CÂU MỚI (sau dấu chấm), nhượng bộ cho cả câu/đoạn trước; 비록 đứng đầu VẾ trong CÙNG một câu — không thể dùng thay thế lẫn nhau về vị trí cú pháp dù nghĩa gần giống.',
      'Đây là cụm nối trang trọng bắt buộc thuộc lòng cho phần Viết luận TOPIK 51-54 khi cần nhượng bộ một luận điểm trước khi đưa ra luận điểm chính.',
    ],
    level: 'cao-cap',
    section: 'phu-tu-lien-ket-cau',
    sectionOrder: 21,
    sectionTitleVi: 'Phó từ liên kết câu',
    relatedPatterns: [
      { id: 'gr-cao-cap-104', distinction: '그럼에도 불구하고 đứng đầu CÂU MỚI, nhượng bộ cho cả câu/đoạn trước; 비록 đứng đầu VẾ trong CÙNG một câu.' },
    ],
  },
  {
    id: 'gr-cao-cap-112',
    pattern: '그러므로',
    meaningVi: 'Do đó, cho nên — nêu kết luận logic, trang trọng, dùng trong văn viết học thuật/diễn văn',
    usageNotes:
      'Gần nghĩa với 따라서, nối kết luận với lý do/luận cứ đã trình bày trước đó — trang trọng hơn 그래서, thường dùng trong văn nghị luận, diễn văn, kết luận báo cáo. Hay đứng ở câu kết luận cuối cùng của một đoạn lập luận.',
    examples: [
      { ko: '모든 인간은 존엄하다. 그러므로 차별받아서는 안 된다.', vi: 'Mọi con người đều có phẩm giá. Do đó không được phân biệt đối xử.' },
      { ko: '자원은 한정되어 있다. 그러므로 우리는 이를 아껴 써야 한다.', vi: 'Tài nguyên là có hạn. Cho nên chúng ta cần sử dụng tiết kiệm.' },
      { ko: '규칙적인 운동은 건강에 좋다. 그러므로 매일 운동하는 것이 바람직하다.', vi: 'Tập thể dục đều đặn tốt cho sức khỏe. Do đó nên tập thể dục mỗi ngày.' },
    ],
    commonMistakes: [
      '그러므로 và 따라서 gần như thay thế được cho nhau trong hầu hết ngữ cảnh trang trọng — điểm chung quan trọng hơn khác biệt sắc thái là CẢ HAI đều KHÔNG dùng được trong văn nói thân mật.',
      'Thường xuất hiện ở CÂU KẾT trong đoạn văn nghị luận — nếu gặp trong bài đọc TOPIK, câu chứa 그러므로 thường chính là câu tóm tắt luận điểm/kết luận của cả đoạn.',
    ],
    level: 'cao-cap',
    section: 'phu-tu-lien-ket-cau',
    sectionOrder: 21,
    sectionTitleVi: 'Phó từ liên kết câu',
    relatedPatterns: [
      { id: 'gr-trung-cap-97', distinction: 'Gần như thay thế được cho nhau trong ngữ cảnh trang trọng; cả hai đều không dùng trong văn nói thân mật.' },
    ],
  },
]
