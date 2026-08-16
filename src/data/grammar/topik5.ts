export interface GrammarEntry {
  id: string
  pattern: string
  meaningVi: string
  usageNotes: string
  examples: { ko: string; vi: string }[]
  commonMistakes: string[]
  level?: 'topik1' | 'topik2' | 'topik3' | 'topik4' | 'topik5' | 'topik6'
}

export const grammarTopik5: GrammarEntry[] = [
  {
    id: 'g-t5-01',
    pattern: 'V/A + -(으)ㄹ 따름이다',
    meaningVi: 'Chỉ có thể...mà thôi — thụ động hoàn toàn, không có lựa chọn nào khác',
    usageNotes:
      'Văn phong trang trọng và văn hoa. Diễn tả người nói không còn có thể làm gì khác, chỉ có thể chấp nhận hoặc làm điều đó. Thường xuất hiện trong bài văn nghị luận, diễn văn, và tường thuật văn học.',
    examples: [
      { ko: '운명 앞에 순응할 따름이다.', vi: 'Trước số phận chỉ biết thuận theo mà thôi.' },
      { ko: '그의 희생에 감사할 따름입니다.', vi: 'Trước sự hy sinh của anh ấy, chỉ biết biết ơn mà thôi.' },
      { ko: '우리는 진실을 기다릴 따름이다.', vi: 'Chúng tôi chỉ có thể chờ đợi sự thật mà thôi.' },
    ],
    commonMistakes: [
      '문어체 표현 — tuyệt đối không dùng trong hội thoại thường ngày',
      'Nhầm với -(으)ㄹ 뿐이다: cả hai có nghĩa tương tự nhưng 따름이다 văn hoa hơn',
      'Không dùng với câu phủ định: -지 않을 따름이다 nghe kỳ; thay bằng -ㄹ 뿐이다',
    ],
    level: 'topik5',
  },
  {
    id: 'g-t5-02',
    pattern: 'V/A + -(으)ㄹ진대',
    meaningVi: 'Vì đã là/sẽ là như vậy thì — tiền đề dẫn đến lập luận',
    usageNotes:
      'Văn phong rất trang trọng, cổ điển và văn hoa. Diễn tả tiền đề đã được chấp nhận, từ đó dẫn đến lập luận hoặc kết luận ở vế sau. Thường gặp trong văn học cổ và văn nghị luận cao cấp.',
    examples: [
      { ko: '사람인진대 실수도 있는 법이다.', vi: 'Vì đã là con người thì có sai lầm cũng là lẽ thường.' },
      { ko: '약속을 한진대 반드시 지켜야 한다.', vi: 'Đã hứa rồi thì nhất định phải giữ lời.' },
      { ko: '어른인진대 책임감을 가져야 한다.', vi: 'Đã là người lớn thì phải có trách nhiệm.' },
    ],
    commonMistakes: [
      'Rất hiếm trong tiếng Hàn hiện đại — chủ yếu gặp trong văn học và đề thi TOPIK 5-6',
      'Nhầm với -는 바: cả hai trang trọng nhưng -는 바 dùng để trình bày nội dung; -(으)ㄹ진대 là tiền đề logic',
    ],
    level: 'topik5',
  },
  {
    id: 'g-t5-03',
    pattern: 'V/A + -는 바',
    meaningVi: 'Điều mà, nội dung mà — diễn đạt trang trọng thay cho -는 것',
    usageNotes:
      'Văn phong viết trang trọng. -는 바 có nghĩa tương tự -는 것 nhưng mang tính trang trọng và chính thức cao hơn. Thường gặp trong thông báo, văn bản pháp lý, báo cáo.',
    examples: [
      { ko: '위에서 논의한 바와 같이 이 방법이 최선이다.', vi: 'Như đã thảo luận ở trên, phương pháp này là tốt nhất.' },
      { ko: '알려진 바에 의하면 그는 이미 출국했다.', vi: 'Theo những gì được biết, anh ấy đã xuất cảnh rồi.' },
      { ko: '본인이 직접 확인한 바가 없다.', vi: 'Bản thân chưa trực tiếp xác nhận điều này.' },
    ],
    commonMistakes: [
      '-는 바 không dùng tự do như -는 것: thường kèm 같이, 에 의하면, hoặc làm chủ ngữ',
      'Trong hội thoại: thay bằng -는 것 hoặc -는 내용',
    ],
    level: 'topik5',
  },
  {
    id: 'g-t5-04',
    pattern: 'N + 에 있어서',
    meaningVi: 'Trong lĩnh vực, đối với — phạm vi hoặc góc độ nhìn nhận',
    usageNotes:
      'Dùng để xác định phạm vi hoặc góc độ của nhận định. Trang trọng, thường dùng trong văn viết học thuật và diễn thuyết. Tương tự N + 에 관해서 nhưng nhấn phạm vi hơn.',
    examples: [
      { ko: '교육에 있어서 가장 중요한 것은 동기 부여이다.', vi: 'Trong lĩnh vực giáo dục, điều quan trọng nhất là động lực.' },
      { ko: '문화에 있어서 한국과 베트남은 많은 공통점이 있다.', vi: 'Về mặt văn hóa, Hàn Quốc và Việt Nam có nhiều điểm chung.' },
      { ko: '이 분야에 있어서 그는 전문가이다.', vi: 'Trong lĩnh vực này, anh ấy là chuyên gia.' },
    ],
    commonMistakes: [
      'Nhầm với 에서: 에 있어서 nhấn phạm vi/góc độ; 에서 nhấn nơi chốn hành động diễn ra',
      '-에 있어서는 (có 는) nhấn mạnh phạm vi giới hạn hơn',
    ],
    level: 'topik5',
  },
  {
    id: 'g-t5-05',
    pattern: 'V/A + -(으)ㄴ/는 나머지',
    meaningVi: 'Do quá mức, vì quá — hậu quả của trạng thái cực độ',
    usageNotes:
      'Diễn tả kết quả tiêu cực hoặc bất ngờ xảy ra do hành động/trạng thái ở vế trước đạt đến mức cực độ. Trang trọng vừa phải.',
    examples: [
      { ko: '기쁜 나머지 눈물이 났다.', vi: 'Vì quá vui mà nước mắt cứ trào ra.' },
      { ko: '너무 긴장한 나머지 아무 말도 못 했다.', vi: 'Vì quá căng thẳng mà không nói được gì.' },
      { ko: '일에 빠진 나머지 건강을 돌보지 못했다.', vi: 'Vì đắm chìm vào công việc mà không chăm sóc sức khỏe được.' },
    ],
    commonMistakes: [
      '-ㄴ 나머지 chỉ dùng khi mức độ đạt cực điểm — không dùng cho nguyên nhân bình thường',
      'Nhầm với -는 바람에: 바람에 = đột ngột/bất ngờ; 나머지 = vì quá mức (từ từ đạt đến cực độ)',
    ],
    level: 'topik5',
  },
  {
    id: 'g-t5-06',
    pattern: 'V/A + -건만',
    meaningVi: 'Nhưng mà, thế mà — tương phản với kỳ vọng, sắc thái tiếc nuối',
    usageNotes:
      'Văn phong viết và bán trang trọng. Tương tự -지만 nhưng kèm sắc thái tiếc nuối hoặc bất bình rõ hơn. Thường dùng trong thơ văn và văn xuôi cảm xúc.',
    examples: [
      { ko: '그렇게 노력했건만 결과가 좋지 않았다.', vi: 'Thế mà dù đã cố gắng như vậy kết quả lại không tốt.' },
      { ko: '기다리고 또 기다렸건만 소식이 없다.', vi: 'Chờ mãi mà vẫn chẳng có tin tức gì.' },
      { ko: '분명히 말했건만 알아듣지 못하는 것 같다.', vi: 'Đã nói rõ thế mà vẫn không hiểu được.' },
    ],
    commonMistakes: [
      '-건만 rất ít gặp trong hội thoại thường ngày — thay bằng -지만 hoặc -는데',
      'Sắc thái tiếc nuối/bất bình là đặc trưng: không dùng khi tường thuật trung tính',
    ],
    level: 'topik5',
  },
  {
    id: 'g-t5-07',
    pattern: 'N + 에 불과하다',
    meaningVi: 'Chỉ là, chẳng qua chỉ là — nhấn mạnh tính nhỏ bé/hạn chế',
    usageNotes:
      'Diễn tả rằng điều gì đó chỉ là ở mức độ nhỏ hoặc ít hơn kỳ vọng. Thường dùng để hạ thấp hoặc nhận xét tính không đủ của điều gì đó.',
    examples: [
      { ko: '그것은 시작에 불과하다.', vi: 'Điều đó chỉ mới là sự khởi đầu thôi.' },
      { ko: '이 문제는 빙산의 일각에 불과합니다.', vi: 'Vấn đề này chỉ là phần nổi của tảng băng mà thôi.' },
      { ko: '그 사람의 실력은 초보 수준에 불과하다.', vi: 'Trình độ của người đó chỉ ở mức người mới bắt đầu thôi.' },
    ],
    commonMistakes: [
      'N + 에 불과하다 (chỉ dùng với danh từ); với động từ dùng -(으)ㄹ 뿐이다',
      'Nhầm với -에 지나지 않다 (cùng nghĩa nhưng rất văn hoa): 불과하다 thông dụng hơn',
    ],
    level: 'topik5',
  },
  {
    id: 'g-t5-08',
    pattern: 'V/A + -(으)ㄹ 수록 더욱',
    meaningVi: 'Càng...càng hơn nữa — nhấn mạnh mức độ tỷ lệ thuận',
    usageNotes:
      'Dạng nhấn mạnh của -(으)ㄹ수록. 더욱 (hơn nữa, càng thêm) đứng trước tính từ/động từ ở vế sau. Thường xuất hiện trong văn viết trang trọng.',
    examples: [
      { ko: '알면 알수록 더욱 신비로운 세계가 펼쳐진다.', vi: 'Càng biết nhiều thì thế giới lại càng trở nên huyền bí hơn nữa.' },
      { ko: '시간이 지날수록 더욱 그리워진다.', vi: 'Càng ngày trôi qua lại càng nhớ nhung hơn nữa.' },
      { ko: '생각할수록 더욱 복잡해진다.', vi: 'Càng suy nghĩ lại càng trở nên phức tạp hơn.' },
    ],
    commonMistakes: [
      '더욱 (rất trang trọng) vs 더: trong văn viết dùng 더욱; trong hội thoại 더 thông dụng hơn',
      'Cấu trúc: A-(으)ㄹ수록 더욱 B -(아/어)진다 — vế sau thường là sự thay đổi',
    ],
    level: 'topik5',
  },
  {
    id: 'g-t5-09',
    pattern: 'V + -고자 하다',
    meaningVi: 'Muốn, nhằm mục đích — ý định trang trọng',
    usageNotes:
      'Phiên bản văn hoa và trang trọng của -(으)려고 하다. Thường dùng trong diễn văn, bài phát biểu, văn bản chính thức, và tường thuật văn học.',
    examples: [
      { ko: '오늘은 환경 문제에 대해 이야기하고자 합니다.', vi: 'Hôm nay tôi muốn nói về vấn đề môi trường.' },
      { ko: '이 연구를 통해 새로운 해결책을 찾고자 한다.', vi: 'Thông qua nghiên cứu này, chúng tôi muốn tìm giải pháp mới.' },
      { ko: '더 나은 사회를 만들고자 노력하고 있습니다.', vi: 'Chúng tôi đang nỗ lực nhằm xây dựng một xã hội tốt đẹp hơn.' },
    ],
    commonMistakes: [
      '-고자 chỉ dùng với hành động của người nói hoặc tổ chức người nói đại diện — không dùng cho người thứ ba',
      'Trong hội thoại: thay bằng -(으)려고 해요 hoặc -고 싶어요',
    ],
    level: 'topik5',
  },
  {
    id: 'g-t5-10',
    pattern: 'V/A + -(으)ㄴ/는 반면',
    meaningVi: 'Trong khi...ngược lại — tương phản học thuật trong văn viết',
    usageNotes:
      'Phiên bản văn hoa hơn của 반면에. Thường dùng trong văn bản học thuật, báo cáo phân tích, và bài luận. 반면 không có 에 sau thường xuất hiện trong văn viết trang trọng.',
    examples: [
      { ko: '동양은 집단주의를 중시하는 반면, 서양은 개인주의를 강조한다.', vi: 'Trong khi phương Đông coi trọng chủ nghĩa tập thể, phương Tây nhấn mạnh chủ nghĩa cá nhân.' },
      { ko: '과거에는 정보가 부족했던 반면, 현재는 정보가 넘친다.', vi: 'Trong khi quá khứ thiếu thông tin, hiện tại lại dư thừa thông tin.' },
      { ko: '경제는 성장하는 반면 환경은 악화되고 있다.', vi: 'Kinh tế tăng trưởng trong khi môi trường ngày càng xấu đi.' },
    ],
    commonMistakes: [
      '반면 (văn viết) vs 반면에 (nói): cả hai đúng nhưng 반면에 tự nhiên hơn trong văn nói',
      'Cấu trúc văn học thuật: A-는 반면(에), B는... — dấu phẩy thường có trong văn viết dài',
    ],
    level: 'topik5',
  },
  {
    id: 'g-t5-11',
    pattern: 'V/A + -기 마련이다',
    meaningVi: 'Đương nhiên là, tất yếu là — quy luật tự nhiên hoặc logic',
    usageNotes:
      'Diễn tả điều gì đó là quy luật tự nhiên, tất yếu xảy ra, không thể khác được. Thường dùng để giải thích hoặc an ủi dựa trên logic tất yếu.',
    examples: [
      { ko: '사람은 언젠가는 죽기 마련이다.', vi: 'Con người tất yếu sẽ chết vào một ngày nào đó.' },
      { ko: '노력하면 실력이 늘기 마련이다.', vi: 'Cố gắng thì tất nhiên sẽ tiến bộ.' },
      { ko: '오해가 생기기 마련이니 대화가 중요하다.', vi: 'Hiểu lầm là điều tất yếu xảy ra, nên giao tiếp rất quan trọng.' },
    ],
    commonMistakes: [
      '-기 마련이다 nhấn tính tất yếu theo quy luật; không dùng cho sự kiện ngẫu nhiên',
      'Nhầm với -기 일쑤다 (hay bị, thường bị): 늦기 일쑤다 (hay bị muộn) vs 늦기 마련이다 (tất nhiên sẽ muộn theo quy luật)',
    ],
    level: 'topik5',
  },
  {
    id: 'g-t5-12',
    pattern: 'V/A + -(으)ㄹ 뿐더러',
    meaningVi: 'Không những...mà hơn nữa — bổ sung cùng chiều nhưng mạnh hơn',
    usageNotes:
      'Văn phong trang trọng. Tương tự 뿐만 아니라 nhưng vế sau thường là điều mạnh hơn, đáng ngạc nhiên hơn. Dùng nhiều trong báo chí và văn học.',
    examples: [
      { ko: '그는 학업 성적이 뛰어날 뿐더러 인성도 바르다.', vi: 'Anh ấy không những thành tích học tập xuất sắc mà nhân cách cũng tốt.' },
      { ko: '이 제도는 비효율적일 뿐더러 불공평하기까지 하다.', vi: 'Chế độ này không những kém hiệu quả mà còn không công bằng nữa.' },
      { ko: '그 사건은 충격적일 뿐더러 이해하기도 어렵다.', vi: 'Sự việc đó không những gây sốc mà còn khó hiểu nữa.' },
    ],
    commonMistakes: [
      '-ㄹ 뿐더러 ≠ -ㄹ 뿐만 아니라: 뿐더러 nhấn vế sau là điều bổ sung đáng ngạc nhiên hơn',
      'Chỉ dùng trong văn viết; trong hội thoại thay bằng -ㄹ 뿐만 아니라',
    ],
    level: 'topik5',
  },
  {
    id: 'g-t5-13',
    pattern: 'V + -는가 하면',
    meaningVi: 'Trong khi...thì lại — tương phản bằng ví dụ cụ thể',
    usageNotes:
      'Đưa ra hai thực tế tương phản. Thường dùng trong văn phân tích, bài báo, và văn học. Vế trước và sau là hai hiện tượng đối lập nhau trong cùng một thực tế.',
    examples: [
      { ko: '어떤 사람은 성공하는가 하면 어떤 사람은 실패한다.', vi: 'Trong khi một số người thành công thì lại có người thất bại.' },
      { ko: '도시가 발전하는가 하면 농촌은 점점 쇠퇴하고 있다.', vi: 'Trong khi thành thị phát triển thì nông thôn lại ngày càng suy tàn.' },
      { ko: '가격이 오르는가 하면 소비는 줄고 있다.', vi: 'Trong khi giá cả tăng thì tiêu dùng lại giảm.' },
    ],
    commonMistakes: [
      '-는가 하면 dùng để đặt hai thực tế cùng tồn tại song song, không phải hy vọng hay phỏng đoán',
      'Nhầm với -는 반면에: cả hai tương phản nhưng -는가 하면 nhấn hai thực tế cùng song song tồn tại',
    ],
    level: 'topik5',
  },
  {
    id: 'g-t5-14',
    pattern: 'V + -(으)ㄹ 법하다',
    meaningVi: 'Đáng lẽ phải, lẽ ra có lẽ — kỳ vọng logic',
    usageNotes:
      'Diễn tả rằng theo lý lẽ, điều đó đáng lẽ phải xảy ra hoặc có lẽ xảy ra. Thường kèm sắc thái thắc mắc hoặc kỳ vọng không được đáp ứng.',
    examples: [
      { ko: '이 정도면 알 법도 한데 왜 모르지?', vi: 'Đến mức này mà đáng lẽ phải biết rồi chứ, sao lại không biết?' },
      { ko: '그쯤 됐으면 피곤할 법하다.', vi: 'Đến mức đó thì đáng lẽ phải mệt chứ.' },
      { ko: '그 사람 말이 맞을 법하다.', vi: 'Có lẽ lời người đó là đúng.' },
    ],
    commonMistakes: [
      '-(으)ㄹ 법하다 nhấn kỳ vọng logic; khác -(으)ㄹ 것 같다 (phỏng đoán chủ quan)',
      '법하다 vs 만하다: 만하다 = xứng đáng/đáng để; 법하다 = đáng lẽ theo logic',
    ],
    level: 'topik5',
  },
  {
    id: 'g-t5-15',
    pattern: 'V/A + -(으)ㄴ/는 탓인지',
    meaningVi: 'Có lẽ vì, không biết có phải vì — nguyên nhân được suy đoán (tiêu cực)',
    usageNotes:
      'Kết hợp -탓 (nguyên nhân tiêu cực) và -인지 (không chắc chắn). Người nói suy đoán nguyên nhân tiêu cực nhưng không chắc. Trang trọng vừa phải.',
    examples: [
      { ko: '날씨가 더운 탓인지 입맛이 없어요.', vi: 'Không biết có phải vì trời nóng không mà chẳng thấy ngon miệng.' },
      { ko: '잠을 못 잔 탓인지 집중이 안 돼요.', vi: 'Có lẽ vì không ngủ được nên không tập trung được.' },
      { ko: '스트레스를 받은 탓인지 머리가 아파요.', vi: 'Có lẽ vì bị căng thẳng nên đau đầu.' },
    ],
    commonMistakes: [
      '-탓인지 chỉ dùng khi suy đoán nguyên nhân tiêu cực; kết quả ở vế sau phải là tiêu cực',
      'Nhầm với -덕분인지: 덕분인지 là suy đoán nguyên nhân tích cực',
    ],
    level: 'topik5',
  },
  {
    id: 'g-t5-16',
    pattern: 'V/A + -(으)ㄴ/는 이상',
    meaningVi: 'Đã...thì, một khi đã — điều kiện đã xác lập dẫn đến hệ quả tất yếu',
    usageNotes:
      'Khi điều kiện ở vế trước đã được xác lập (không thể thay đổi), vế sau diễn tả hệ quả tất yếu phải xảy ra. Trang trọng hơn -는 한.',
    examples: [
      { ko: '약속을 한 이상 지켜야 한다.', vi: 'Đã hứa thì phải giữ lời.' },
      { ko: '시작한 이상 끝까지 해야 한다.', vi: 'Đã bắt đầu thì phải làm đến cùng.' },
      { ko: '사회의 일원인 이상 책임이 있다.', vi: 'Đã là thành viên của xã hội thì phải có trách nhiệm.' },
    ],
    commonMistakes: [
      '-(으)ㄴ/는 이상 ≠ 이상 (danh từ = lý tưởng): phát âm giống nhau nhưng ngữ nghĩa khác',
      '이상 vs 한: cả hai có nghĩa "chừng nào"; 이상 nhấn tính đã xác lập; 한 nhấn điều kiện còn tiếp diễn',
    ],
    level: 'topik5',
  },
  {
    id: 'g-t5-17',
    pattern: 'V/A + -(으)ㄹ망정',
    meaningVi: 'Dù có...đi nữa thì cũng — nhượng bộ với kết quả ngược chiều dứt khoát',
    usageNotes:
      'Tương tự -(으)ㄹ지언정 nhưng hơi ít văn hoa hơn một chút. Vẫn thuộc văn phong trang trọng. Diễn tả rằng dù điều xấu xảy ra, người nói vẫn giữ lập trường.',
    examples: [
      { ko: '굶을망정 그 돈은 안 받겠다.', vi: 'Dù có đói cũng sẽ không nhận tiền đó.' },
      { ko: '실패할망정 후회는 하지 않겠다.', vi: 'Dù có thất bại cũng sẽ không hối hận.' },
      { ko: '죽을망정 비겁하게 살지 않겠다.', vi: 'Dù có chết cũng không sống hèn nhát.' },
    ],
    commonMistakes: [
      'Rất trang trọng — không dùng trong hội thoại thường ngày',
      'Khác -아/어도: -ㄹ망정 nhấn quyết tâm mạnh và kiên định hơn',
    ],
    level: 'topik5',
  },
  {
    id: 'g-t5-18',
    pattern: 'N + 치고',
    meaningVi: 'So với...thì, xét là — so sánh với tiêu chuẩn của loại đó',
    usageNotes:
      'Diễn tả rằng điều gì đó vượt hoặc thấp hơn kỳ vọng dựa trên tiêu chuẩn của nhóm đó. Thường dùng theo hai hướng: (1) hơn kỳ vọng; (2) mọi người trong nhóm đều vậy.',
    examples: [
      { ko: '초등학생치고 영어를 잘하네요.', vi: 'Xét là học sinh tiểu học thì nói tiếng Anh giỏi thật đấy.' },
      { ko: '그 가격치고 품질이 매우 좋아요.', vi: 'So với giá đó thì chất lượng rất tốt.' },
      { ko: '사람치고 실수 한 번 안 하는 사람이 없다.', vi: 'Xét là con người thì không ai mà không mắc lỗi bao giờ.' },
    ],
    commonMistakes: [
      'N치고 (mọi N đều): N치고 A 하는 사람이 없다 = không ai là N mà không A',
      'N치고 (hơn kỳ vọng): N치고 B하다 = xét là N mà B thì đáng ngạc nhiên',
      'Phân biệt hai nghĩa dựa theo ngữ cảnh',
    ],
    level: 'topik5',
  },
  {
    id: 'g-t5-19',
    pattern: 'V/A + -(으)ㄴ/는 양',
    meaningVi: 'Có vẻ như, như thể — thái độ bên ngoài không phản ánh thực tế',
    usageNotes:
      'Văn phong trang trọng và văn học. Diễn tả bề ngoài có vẻ như vậy nhưng không chắc là thực tế. Tương tự -는 척하다 nhưng không nhất thiết là cố tình.',
    examples: [
      { ko: '그는 아무것도 모르는 양 웃고 있었다.', vi: 'Anh ấy cười như thể chẳng biết gì cả.' },
      { ko: '그녀는 슬픈 양 눈물을 흘렸다.', vi: 'Cô ấy rơi nước mắt như thể rất buồn.' },
      { ko: '모든 것이 괜찮은 양 행동했다.', vi: 'Cư xử như thể mọi thứ đều ổn.' },
    ],
    commonMistakes: [
      '-(으)ㄴ/는 양 ≠ -는 척: 양 là bề ngoài vô thức; 척 là cố tình giả vờ',
      'Rất văn học — trong văn nói thường thay bằng -는 것처럼 hoặc -는 척',
    ],
    level: 'topik5',
  },
  {
    id: 'g-t5-20',
    pattern: 'V/A + -기 일쑤다',
    meaningVi: 'Hay bị, thường bị — thói quen tiêu cực hay lặp đi lặp lại',
    usageNotes:
      'Diễn tả hành động tiêu cực hay xảy ra một cách thường xuyên, như thói quen không tốt. Luôn mang sắc thái tiêu cực.',
    examples: [
      { ko: '그는 약속에 늦기 일쑤예요.', vi: 'Anh ấy hay đến trễ hẹn lắm.' },
      { ko: '바빠서 밥도 거르기 일쑤예요.', vi: 'Bận quá nên hay bỏ bữa lắm.' },
      { ko: '그 학생은 수업 시간에 졸기 일쑤였다.', vi: 'Học sinh đó hay ngủ gật trong giờ học lắm.' },
    ],
    commonMistakes: [
      '-기 일쑤이다 luôn là hành động tiêu cực; không dùng cho hành động tốt',
      'Nhầm với -기 마련이다: 일쑤다 = thói quen tiêu cực; 마련이다 = quy luật tất yếu trung tính',
    ],
    level: 'topik5',
  },
]
