export interface GrammarEntry {
  id: string
  pattern: string
  meaningVi: string
  usageNotes: string
  examples: { ko: string; vi: string }[]
  commonMistakes: string[]
  level?: 'topik1' | 'topik2' | 'topik3' | 'topik4' | 'topik5' | 'topik6'
}

export const grammarTopik6: GrammarEntry[] = [
  {
    id: 'g-t6-01',
    pattern: 'V/A + -(으)ㄹ지라도',
    meaningVi: 'Dù có...đi nữa — nhượng bộ mạnh, văn phong cổ điển',
    usageNotes:
      'Văn phong rất trang trọng và cổ điển. Nhượng bộ mạnh mẽ: dù điều ở vế trước xảy ra ở mức độ cực đoan, vế sau vẫn đúng và kiên định. Thường dùng trong thơ, văn học và bài phát biểu hùng hồn.',
    examples: [
      { ko: '천 번을 실패할지라도 포기하지 않겠다.', vi: 'Dù có thất bại nghìn lần cũng sẽ không bỏ cuộc.' },
      { ko: '온 세상이 반대할지라도 나는 내 길을 가겠다.', vi: 'Dù cả thế giới phản đối tôi vẫn sẽ đi con đường của mình.' },
      { ko: '결과가 좋지 않을지라도 후회는 없다.', vi: 'Dù kết quả không tốt cũng không có hối hận.' },
    ],
    commonMistakes: [
      '-(으)ㄹ지라도 hiếm gặp trong văn nói hiện đại — dùng -아/어도 hoặc -(으)ㄹ지언정 thay thế',
      'Không nhầm với -(으)ㄹ지도 (cũng có thể): 비가 올지도 몰라요 (có thể trời mưa)',
      '-(으)ㄹ지라도 nhấn quyết tâm bất kể điều kiện; không dùng cho điều kiện thông thường',
    ],
    level: 'topik6',
  },
  {
    id: 'g-t6-02',
    pattern: 'V + -을 나위 없다',
    meaningVi: 'Không cần nói, hiển nhiên là — mức độ tột cùng, không còn gì để bàn thêm',
    usageNotes:
      'Diễn tả điều gì đó đạt đến mức độ không cần phải bàn thêm nữa. Thường đi với 말할 나위 없다 (không cần nói) hoặc 더할 나위 없다 (không thể thêm gì hơn). Rất trang trọng.',
    examples: [
      { ko: '그의 노력은 말할 나위 없이 훌륭했다.', vi: 'Sự nỗ lực của anh ấy không cần phải nói, thật tuyệt vời.' },
      { ko: '이 결과는 더할 나위 없이 만족스럽다.', vi: 'Kết quả này hoàn hảo đến mức không thể hơn được nữa.' },
      { ko: '그 희생은 가치를 따질 나위도 없다.', vi: 'Sự hy sinh đó không cần phải đo đếm giá trị.' },
    ],
    commonMistakes: [
      '나위 là danh từ cổ nghĩa "điều cần/chỗ cần"; không dùng tách biệt với các cụm cố định này',
      'Thường dùng dạng cố định: 말할 나위 없다 / 더할 나위 없다 / 따질 나위 없다',
      'Cụm 더할 나위 없이 + tính từ = hoàn toàn, cực kỳ: 더할 나위 없이 행복하다',
    ],
    level: 'topik6',
  },
  {
    id: 'g-t6-03',
    pattern: 'V/A + -기 마련이다',
    meaningVi: 'Tất yếu phải, đương nhiên là — quy luật bất biến',
    usageNotes:
      'Ở TOPIK 6, mẫu này được dùng trong các lập luận phức tạp và văn học. Diễn tả điều tất yếu xảy ra theo quy luật tự nhiên, không ai có thể tránh khỏi. Xem thêm TOPIK 5 để nắm nghĩa cơ bản.',
    examples: [
      { ko: '역사는 반복되기 마련이고 그것이 인류의 비극이다.', vi: 'Lịch sử tất yếu sẽ lặp lại, và đó là bi kịch của nhân loại.' },
      { ko: '진실은 언젠가는 밝혀지기 마련이다.', vi: 'Sự thật tất yếu sẽ được làm sáng tỏ vào một ngày nào đó.' },
      { ko: '사랑하면 헤어지기 마련이라는 말이 항상 맞는 것은 아니다.', vi: 'Câu nói rằng yêu thì tất phải chia ly không phải lúc nào cũng đúng.' },
    ],
    commonMistakes: [
      'Ở cấp độ TOPIK 6, mẫu này được nhúng vào các cấu trúc câu phức tạp hơn',
      'Chú ý khi phủ nhận: 기 마련은 아니다 (không phải tất yếu) — khác không phải -지 않기 마련이다',
    ],
    level: 'topik6',
  },
  {
    id: 'g-t6-04',
    pattern: 'N + 에 지나지 않다',
    meaningVi: 'Chẳng qua chỉ là, không hơn không kém — phủ nhận tầm quan trọng',
    usageNotes:
      'Văn phong trang trọng. Tương tự N에 불과하다 nhưng văn hoa hơn. Diễn tả điều gì đó không có tầm quan trọng hay ý nghĩa hơn mức đó. Thường dùng để phê phán hoặc hạ thấp.',
    examples: [
      { ko: '그것은 단순한 오해에 지나지 않는다.', vi: 'Điều đó chẳng qua chỉ là một sự hiểu lầm đơn giản mà thôi.' },
      { ko: '그의 말은 공허한 메아리에 지나지 않았다.', vi: 'Lời nói của anh ấy chẳng qua là tiếng vang rỗng tuếch mà thôi.' },
      { ko: '이 합의는 형식적 절차에 지나지 않는다.', vi: 'Thỏa thuận này chẳng qua chỉ là thủ tục hình thức mà thôi.' },
    ],
    commonMistakes: [
      '지나지 않다 = 불과하다 về nghĩa nhưng 지나지 않다 văn hoa hơn và thường kèm đánh giá tiêu cực mạnh hơn',
      'Chỉ dùng với danh từ hoặc danh từ hóa; không nối trực tiếp với động từ',
    ],
    level: 'topik6',
  },
  {
    id: 'g-t6-05',
    pattern: 'V/A + -(으)ㄴ즉',
    meaningVi: 'Vì vậy, do đó — kết luận từ tiền đề (văn phong cổ điển)',
    usageNotes:
      'Văn phong cổ điển và trang trọng cao. Diễn tả kết luận hoặc hệ quả logic từ điều đã nêu. Gặp nhiều trong văn bản pháp lý, triết học, văn học cổ điển Hàn Quốc.',
    examples: [
      { ko: '증거가 명확한즉 판결은 하나뿐이다.', vi: 'Bằng chứng đã rõ ràng, vì vậy chỉ có một phán quyết mà thôi.' },
      { ko: '이치가 그러한즉 다른 결론은 있을 수 없다.', vi: 'Lý lẽ đã như vậy, vì vậy không thể có kết luận nào khác.' },
      { ko: '때가 이른즉 결단을 내려야 한다.', vi: 'Thời cơ đã đến, do đó phải đưa ra quyết định.' },
    ],
    commonMistakes: [
      '-(으)ㄴ즉 là cách diễn đạt cổ điển — trong văn hiện đại thay bằng -기 때문에 hoặc -므로',
      'Không nhầm với -(으)ㄴ 즉 (ngay khi, cũng trang trọng nhưng khác nghĩa)',
    ],
    level: 'topik6',
  },
  {
    id: 'g-t6-06',
    pattern: 'V/A + -(으)므로',
    meaningVi: 'Vì, do đó — nguyên nhân-kết quả trang trọng nhất',
    usageNotes:
      'Văn phong rất trang trọng, chủ yếu dùng trong văn bản viết: pháp lý, học thuật, báo cáo chính thức. Tương đương -기 때문에 nhưng không dùng trong hội thoại. Tuyệt đối không dùng với mệnh lệnh.',
    examples: [
      { ko: '이 약은 부작용이 있으므로 주의하여 복용해야 한다.', vi: 'Thuốc này có tác dụng phụ, do đó phải uống cẩn thận.' },
      { ko: '자원이 한정되어 있으므로 효율적으로 사용해야 한다.', vi: 'Vì tài nguyên có hạn, do đó phải sử dụng hiệu quả.' },
      { ko: '법이 그러하므로 이를 위반할 경우 처벌받는다.', vi: 'Vì luật là như vậy, do đó vi phạm sẽ bị xử phạt.' },
    ],
    commonMistakes: [
      '-(으)므로 không dùng với mệnh lệnh: 비가 오므로 우산을 가져가세요 ✗ (dùng -니까)',
      'Chỉ dùng trong văn viết trang trọng; trong hội thoại thay bằng -아/어서 hoặc -(으)니까',
    ],
    level: 'topik6',
  },
  {
    id: 'g-t6-07',
    pattern: 'V + -어/아 마지않다',
    meaningVi: 'Không ngừng, mãi mãi — cảm xúc/hành động liên tục không dừng (văn hoa)',
    usageNotes:
      'Văn phong rất trang trọng và văn hoa. Dùng với một số động từ cảm xúc cố định: 바라다 (mong), 감사하다 (biết ơn), 사랑하다 (yêu). Thể hiện cảm xúc sâu sắc và thành tâm.',
    examples: [
      { ko: '선생님의 건강을 바라 마지않습니다.', vi: 'Chúng tôi thành tâm mong thầy luôn mạnh khỏe.' },
      { ko: '여러분의 성원에 감사해 마지않습니다.', vi: 'Chúng tôi biết ơn không ngừng trước sự ủng hộ của quý vị.' },
      { ko: '조국을 사랑해 마지않는 마음으로 일했다.', vi: 'Ông ấy đã làm việc với tấm lòng yêu đất nước không bao giờ nguôi.' },
    ],
    commonMistakes: [
      'Chỉ dùng với động từ cảm xúc tích cực nhất định (바라다, 감사하다, 사랑하다, 존경하다)',
      'Cực kỳ văn hoa — chỉ dùng trong diễn văn, thơ, văn xuôi trang trọng',
    ],
    level: 'topik6',
  },
  {
    id: 'g-t6-08',
    pattern: 'N + 이야말로',
    meaningVi: 'Chính là, mới thật sự là — nhấn mạnh cực mạnh điều thực sự đúng',
    usageNotes:
      'Nhấn mạnh mạnh mẽ rằng N chính là điều đúng đắn, thực sự, không phải điều khác. Hàm ý loại bỏ các lựa chọn khác. Dùng trong cả văn nói và văn viết nhưng thiên về trang trọng.',
    examples: [
      { ko: '이것이야말로 우리가 찾던 해결책이다.', vi: 'Chính đây mới là giải pháp chúng ta đang tìm kiếm.' },
      { ko: '건강이야말로 가장 소중한 재산이다.', vi: 'Sức khỏe chính mới là tài sản quý giá nhất.' },
      { ko: '교육이야말로 나라의 미래를 결정한다.', vi: 'Giáo dục chính mới là điều quyết định tương lai của đất nước.' },
    ],
    commonMistakes: [
      'N이야말로 (sau phụ âm) / N야말로 (sau nguyên âm): 건강이야말로 ✓; 교육이야말로 ✓',
      'Nhầm với N은/는: 이야말로 nhấn mạnh "chính là" và loại bỏ các khả năng khác',
    ],
    level: 'topik6',
  },
  {
    id: 'g-t6-09',
    pattern: 'V/A + -(으)ㄹ진대',
    meaningVi: 'Đã là như vậy thì — tiền đề đã xác lập dẫn đến yêu cầu logic (cổ điển)',
    usageNotes:
      'Văn phong cổ điển và rất trang trọng. Xem TOPIK 5 để hiểu nghĩa cơ bản. Ở TOPIK 6, mẫu này xuất hiện trong văn học cổ điển, trích dẫn và các câu văn hùng hồn phức tạp.',
    examples: [
      { ko: '지도자인진대 솔선수범해야 함은 당연하다.', vi: 'Đã là người lãnh đạo thì việc nêu gương đi đầu là lẽ đương nhiên.' },
      { ko: '뜻이 있는진대 어찌 길이 없으랴.', vi: 'Đã có chí thì sao có thể không có đường.' },
      { ko: '참된 지식인진대 행동으로 증명해야 한다.', vi: 'Đã là kiến thức thật sự thì phải được chứng minh qua hành động.' },
    ],
    commonMistakes: [
      'Mẫu này chủ yếu xuất hiện trong tài liệu đọc TOPIK 6 — không cần chủ động dùng trong giao tiếp',
      'Khi đọc văn cổ hoặc văn học: -(으)ㄹ진대 ≈ "đã là/sẽ là như vậy thì tất nhiên phải"',
    ],
    level: 'topik6',
  },
  {
    id: 'g-t6-10',
    pattern: 'V/A + -(으)련만',
    meaningVi: 'Đáng lẽ thì, giá mà — tiếc nuối về điều không xảy ra (cổ điển)',
    usageNotes:
      'Văn phong cổ điển và thơ văn. Diễn tả sự tiếc nuối sâu sắc về điều đáng lẽ phải xảy ra nhưng không xảy ra. Kết hợp -(으)련 (ý định) và -만 (nhưng mà). Rất giàu sắc thái cảm xúc.',
    examples: [
      { ko: '그때 말했더라면 달라졌으련만.', vi: 'Giá mà nói lúc đó thì mọi thứ đã khác rồi.' },
      { ko: '네가 있었다면 얼마나 좋으련만.', vi: 'Giá mà cậu ở đây thì tốt biết bao.' },
      { ko: '시간이 있었다면 더 잘했으련만.', vi: 'Giá mà có thêm thời gian thì đã làm tốt hơn rồi.' },
    ],
    commonMistakes: [
      '-(으)련만 luôn đi với điều kiện phản thực tế (không có thật): thường kèm -더라면 hoặc -았/었다면 ở vế trước',
      'Chỉ dùng trong văn học và thơ — trong hội thoại thay bằng -(으)면 좋았을 텐데',
    ],
    level: 'topik6',
  },
  {
    id: 'g-t6-11',
    pattern: 'V/A + -(으)ㄹ 바에야',
    meaningVi: 'Thà...còn hơn — so sánh hai lựa chọn, chọn cái ít tệ hơn',
    usageNotes:
      'Diễn tả rằng thay vì làm/chịu điều A (tiêu cực), thà làm điều B còn hơn. Sắc thái bất đắc dĩ hoặc kiên quyết từ chối.',
    examples: [
      { ko: '그렇게 살 바에야 차라리 포기하겠다.', vi: 'Thà từ bỏ còn hơn là sống như vậy.' },
      { ko: '거짓으로 성공할 바에야 실패하는 것이 낫다.', vi: 'Thà thất bại còn hơn thành công bằng sự gian dối.' },
      { ko: '남에게 폐를 끼칠 바에야 혼자 고생하는 편이 낫다.', vi: 'Thà một mình chịu khổ còn hơn phiền đến người khác.' },
    ],
    commonMistakes: [
      '-(으)ㄹ 바에야 luôn đi với 차라리 (thà) hoặc 오히려 (ngược lại/thay vào đó)',
      'Nhầm với -(으)ㄹ 바에: 바에야 mạnh hơn và kiên quyết hơn; 바에 trung tính hơn',
    ],
    level: 'topik6',
  },
  {
    id: 'g-t6-12',
    pattern: 'V + -고 말고요',
    meaningVi: 'Tất nhiên là, hiển nhiên mà — khẳng định hoàn toàn đồng ý hoặc xác nhận mạnh',
    usageNotes:
      'Dùng để xác nhận mạnh mẽ hoặc đồng ý tuyệt đối. Thường là câu trả lời ngắn cho câu hỏi. -고 말고요 = tất nhiên là (có). Thân mật đến trang trọng vừa phải.',
    examples: [
      { ko: 'A: 도와줄 수 있어요? B: 도와드리고 말고요!', vi: 'A: Bạn có thể giúp không? B: Tất nhiên là giúp chứ!' },
      { ko: 'A: 좋아요? B: 좋고 말고요, 최고예요!', vi: 'A: Có tốt không? B: Tốt chứ, tuyệt vời luôn!' },
      { ko: '그 일을 할 수 있고 말고요. 제가 전문가인데요.', vi: 'Tất nhiên tôi có thể làm điều đó. Tôi là chuyên gia mà.' },
    ],
    commonMistakes: [
      '-고 말고요 dùng trả lời câu hỏi, không dùng để bắt đầu câu',
      'Nhầm với -고 말다 (kết thúc, đã...mất): 먹고 말았다 (đã ăn mất rồi) ≠ 먹고 말고요 (tất nhiên ăn chứ)',
    ],
    level: 'topik6',
  },
  {
    id: 'g-t6-13',
    pattern: 'N + 커녕',
    meaningVi: 'Chứ đừng nói đến, chưa nói đến — phủ nhận ngay cả điều tối thiểu',
    usageNotes:
      'Mạnh hơn 기는커녕 (TOPIK 4). N커녕 dùng trực tiếp với danh từ để nhấn mạnh: ngay cả điều tối thiểu nhất cũng không đạt được, nói gì đến điều lớn hơn.',
    examples: [
      { ko: '밥커녕 물도 못 마셨어요.', vi: 'Chứ đừng nói đến cơm, nước uống còn không được.' },
      { ko: '칭찬커녕 야단만 맞았어요.', vi: 'Chứ đừng nói đến khen ngợi, toàn bị mắng thôi.' },
      { ko: '잠커녕 눈도 못 붙였어요.', vi: 'Chứ đừng nói đến ngủ, nhắm mắt một chút cũng không được.' },
    ],
    commonMistakes: [
      'N커녕 (trực tiếp sau danh từ) vs V + 기는커녕 (sau động từ): cả hai cùng nghĩa nhưng hình thức khác',
      '커녕 luôn kèm kết quả tiêu cực ở vế sau — không dùng cho tình huống tích cực',
    ],
    level: 'topik6',
  },
  {
    id: 'g-t6-14',
    pattern: 'V/A + -(으)ㄹ 터이다',
    meaningVi: 'Chắc chắn sẽ, nhất định là — phỏng đoán mạnh hoặc ý định trang trọng',
    usageNotes:
      'Trang trọng. Hai nghĩa: (1) Phỏng đoán chắc chắn về điều gì đó dựa trên logic; (2) Ý định mạnh mẽ của người nói (văn học). Khác -겠다: 터이다 nhấn chắc chắn hơn.',
    examples: [
      { ko: '그 사람은 이미 알고 있을 터이다.', vi: 'Người đó chắc chắn đã biết rồi.' },
      { ko: '노력한 만큼 반드시 결실을 맺을 터이다.', vi: 'Chắc chắn sẽ gặt hái được quả ngọt tương xứng với công sức bỏ ra.' },
      { ko: '나는 끝까지 싸울 터이다.', vi: 'Ta nhất định sẽ chiến đấu đến cùng.' },
    ],
    commonMistakes: [
      '-(으)ㄹ 터이다 trang trọng hơn nhiều so với -(으)ㄹ 것이다 trong văn học',
      '터이다 rút gọn thành 테다 trong văn nói: 갈 테야 (tôi sẽ đi); nhưng ở TOPIK 6 gặp dạng đầy đủ trong văn viết',
    ],
    level: 'topik6',
  },
  {
    id: 'g-t6-15',
    pattern: 'V + -(으)ㄹ 겨를이 없다',
    meaningVi: 'Không có thời gian rảnh để — cực kỳ bận, không thể làm điều đó',
    usageNotes:
      'Văn phong trang trọng đến văn hoa. 겨를 là danh từ cổ nghĩa "thời gian rảnh rỗi, khoảnh khắc". Diễn tả hoàn toàn không có thời gian hay cơ hội để làm điều đó, thường do bận rộn hoặc tình huống cấp bách.',
    examples: [
      { ko: '그는 밥 먹을 겨를도 없이 일했다.', vi: 'Anh ấy làm việc đến mức không có thời gian rảnh để ăn cơm.' },
      { ko: '숨 돌릴 겨를도 없이 달렸다.', vi: 'Chạy mà không có một khoảnh khắc nào để thở.' },
      { ko: '슬퍼할 겨를도 없었다.', vi: 'Không có thời gian rảnh để mà buồn.' },
    ],
    commonMistakes: [
      '겨를 là từ cổ — trong hội thoại thay bằng -ㄹ 시간이 없다 hoặc -ㄹ 틈이 없다',
      '-ㄹ 겨를도 없이 + hành động = thực hiện hành động đó mà không có khoảnh khắc nào nghỉ',
    ],
    level: 'topik6',
  },
]
