export interface GrammarEntry {
  id: string
  pattern: string
  meaningVi: string
  usageNotes: string
  examples: { ko: string; vi: string }[]
  commonMistakes: string[]
  level?: 'topik1' | 'topik2' | 'topik3' | 'topik4' | 'topik5' | 'topik6'
}

export const grammarTopik4: GrammarEntry[] = [
  {
    id: 'g-t4-01',
    pattern: 'V/A + 는 한',
    meaningVi: 'Chừng nào còn, miễn là — điều kiện giới hạn',
    usageNotes:
      'Diễn tả rằng kết quả ở vế sau sẽ tiếp tục hoặc được đảm bảo chừng nào điều kiện ở vế trước còn tồn tại. Trang trọng, thường dùng trong văn viết và bài phát biểu.',
    examples: [
      { ko: '제가 살아있는 한 당신을 지킬 거예요.', vi: 'Chừng nào tôi còn sống tôi sẽ bảo vệ bạn.' },
      { ko: '최선을 다하는 한 실패해도 후회가 없다.', vi: 'Chừng nào còn cố hết sức thì dù thất bại cũng không hối hận.' },
      { ko: '규칙을 지키는 한 문제가 생기지 않을 것이다.', vi: 'Miễn là tuân thủ quy tắc thì sẽ không có vấn đề gì.' },
    ],
    commonMistakes: [
      '-는 한 ≠ -(으)면: 한 nhấn mạnh điều kiện liên tục dài hạn; -(으)면 đơn thuần là điều kiện',
      'Tính từ: -(으)ㄴ 한 (건강한 한 ✓); Động từ: -는 한',
      '한 (限) ở đây không phải 한국 — là danh từ nghĩa "giới hạn, phạm vi"',
    ],
    level: 'topik4',
  },
  {
    id: 'g-t4-02',
    pattern: 'V + -(으)ㄹ 뿐이다',
    meaningVi: 'Chỉ là, chỉ làm thế thôi — giới hạn hành động/ý nghĩa',
    usageNotes:
      'Diễn tả rằng chỉ có điều đó và không có gì hơn. Thường dùng để hạ thấp hành động của mình (khiêm tốn) hoặc nhấn mạnh tính giới hạn.',
    examples: [
      { ko: '저는 그저 최선을 다했을 뿐이에요.', vi: 'Tôi chỉ đơn giản là đã cố hết sức thôi.' },
      { ko: '사실을 말했을 뿐인데 왜 화가 났어요?', vi: 'Tôi chỉ nói sự thật thôi mà sao lại tức giận?' },
      { ko: '남은 것은 기다리는 것뿐이다.', vi: 'Điều duy nhất còn lại là chờ đợi.' },
    ],
    commonMistakes: [
      'N + 뿐이다 (chỉ là N): 방법은 이것뿐이다 ✓',
      'V + -(으)ㄹ 뿐이다 vs V + -기만 하다: cả hai đều có nghĩa "chỉ" nhưng -기만 하다 thường có sắc thái tiêu cực',
    ],
    level: 'topik4',
  },
  {
    id: 'g-t4-03',
    pattern: 'V/A + -기는커녕',
    meaningVi: 'Chứ chưa nói đến, không những không...mà — phủ nhận và nâng cao độ',
    usageNotes:
      'Diễn tả rằng không chỉ không đạt được điều cơ bản mà thậm chí còn tệ hơn. Vế sau thường tệ hơn vế trước (được kỳ vọng hơn).',
    examples: [
      { ko: '영어는커녕 한국어도 못해요.', vi: 'Chứ chưa nói đến tiếng Anh, tiếng Hàn còn không biết.' },
      { ko: '잠자기는커녕 밥도 제대로 못 먹었어요.', vi: 'Chứ chưa nói đến ngủ, ăn cơm đúng bữa còn không được.' },
      { ko: '도와주기는커녕 방해만 했다.', vi: 'Không những không giúp mà còn cản trở.' },
    ],
    commonMistakes: [
      '-(으)ㄹ 뿐만 아니라 (không chỉ...mà còn, hướng tích cực) ≠ 기는커녕 (hướng tiêu cực, ngược kỳ vọng)',
      'Vế sau của -기는커녕 thường tệ hơn hoặc đối lập hoàn toàn',
    ],
    level: 'topik4',
  },
  {
    id: 'g-t4-04',
    pattern: 'V/A + -(으)ㄹ지언정',
    meaningVi: 'Dù có...đi nữa, thà...còn hơn — nhượng bộ mạnh với sự đối lập kiên quyết',
    usageNotes:
      'Trang trọng, văn viết. Diễn tả rằng dù vế trước có xảy ra thì người nói vẫn kiên quyết với lập trường ở vế sau. Thường đi kèm hành động của người nói.',
    examples: [
      { ko: '죽을지언정 거짓말은 하지 않겠다.', vi: 'Dù có chết cũng không nói dối.' },
      { ko: '굶을지언정 남의 것을 탐하지 않겠다.', vi: 'Thà nhịn đói còn hơn tham của người khác.' },
      { ko: '실패할지언정 포기는 하지 않을 것이다.', vi: 'Dù có thất bại cũng sẽ không bỏ cuộc.' },
    ],
    commonMistakes: [
      'Rất trang trọng và văn hoa — không dùng trong hội thoại thường ngày',
      'Khác -아/어도: -아/어도 nhẹ nhàng hơn; -(으)ㄹ지언정 thể hiện quyết tâm mạnh và dứt khoát',
    ],
    level: 'topik4',
  },
  {
    id: 'g-t4-05',
    pattern: 'V/A + -(으)ㄹ 리가 없다',
    meaningVi: 'Không thể nào, chắc chắn không — phủ nhận khả năng mạnh',
    usageNotes:
      'Diễn tả sự phủ nhận mạnh mẽ về khả năng xảy ra điều gì đó dựa trên logic hoặc kiến thức của người nói.',
    examples: [
      { ko: '그 사람이 거짓말을 할 리가 없어요.', vi: 'Không thể nào người đó lại nói dối được.' },
      { ko: '이렇게 열심히 했는데 실패할 리가 없다.', vi: 'Đã cố gắng như vậy thì không thể nào thất bại được.' },
      { ko: '아무리 바빠도 연락이 없을 리가 없어요.', vi: 'Dù bận đến đâu cũng không thể không liên lạc được.' },
    ],
    commonMistakes: [
      '-(으)ㄹ 리가 없다 ≠ -(으)ㄹ 수 없다: 리가 없다 = không thể nào (logic); 수 없다 = không có khả năng (thực tế)',
      '-(으)ㄹ 리가 있다? thường là câu hỏi tu từ — không ai tin điều đó',
    ],
    level: 'topik4',
  },
  {
    id: 'g-t4-06',
    pattern: 'V/A + -(으)ㄹ 수밖에 없다',
    meaningVi: 'Không còn cách nào khác ngoài việc, buộc phải — không có lựa chọn',
    usageNotes:
      'Diễn tả rằng chỉ có một lựa chọn duy nhất, không còn cách nào khác. Thường đi kèm giải thích hoàn cảnh ép buộc.',
    examples: [
      { ko: '차가 없으니 걸어갈 수밖에 없어요.', vi: 'Không có xe thì buộc phải đi bộ thôi.' },
      { ko: '그 사람이 하지 않으니 내가 할 수밖에 없다.', vi: 'Người đó không làm thì tôi buộc phải làm thôi.' },
      { ko: '이 상황에서는 포기할 수밖에 없었다.', vi: 'Trong tình huống này không còn cách nào khác ngoài việc bỏ cuộc.' },
    ],
    commonMistakes: [
      '수밖에 viết liền: 수 밖에 ✗ → 수밖에 ✓ trong nhiều tài liệu cũng viết tách',
      'Nhầm với -아/어야 하다: 수밖에 없다 nhấn "không có lựa chọn"; -아/어야 하다 nhấn "bắt buộc/cần thiết"',
    ],
    level: 'topik4',
  },
  {
    id: 'g-t4-07',
    pattern: 'V + -는 바람에',
    meaningVi: 'Do, vì — nguyên nhân đột ngột gây kết quả tiêu cực',
    usageNotes:
      'Chỉ dùng khi nguyên nhân là đột ngột, bất ngờ và gây ra kết quả tiêu cực. Không dùng cho nguyên nhân tích cực hoặc có kế hoạch trước.',
    examples: [
      { ko: '갑자기 비가 오는 바람에 옷이 다 젖었어요.', vi: 'Do trời đột ngột đổ mưa mà quần áo bị ướt hết.' },
      { ko: '친구가 갑자기 취소하는 바람에 혼자 갔어요.', vi: 'Do bạn đột ngột hủy mà tôi phải đi một mình.' },
      { ko: '알람이 안 울리는 바람에 지각했어요.', vi: 'Do đồng hồ không reo mà tôi đến muộn.' },
    ],
    commonMistakes: [
      '-는 바람에 chỉ dùng cho kết quả tiêu cực; không dùng: 복권에 당첨되는 바람에 행복해졌어요 ✗',
      'Luôn dùng hiện tại -는 바람에 (không phải -(으)ㄴ/-(으)ㄹ 바람에)',
    ],
    level: 'topik4',
  },
  {
    id: 'g-t4-08',
    pattern: 'V/A + -고 보면/보니',
    meaningVi: 'Khi nhìn lại, xét cho cùng — nhận ra điều gì sau khi đã làm',
    usageNotes:
      '-고 보면 = nhìn lại thì thấy (phỏng đoán/tổng quát); -고 보니 = sau khi làm rồi mới nhận ra (cụ thể, quá khứ).',
    examples: [
      { ko: '다 먹고 보니 배가 너무 불렀어요.', vi: 'Ăn xong rồi mới thấy no quá.' },
      { ko: '생각해 보면 그 사람이 맞는 것 같아요.', vi: 'Xét lại thì hóa ra người đó đúng.' },
      { ko: '살고 보면 별거 아닌 일도 많다.', vi: 'Nhìn lại cuộc sống thì nhiều chuyện chẳng đáng lo.' },
    ],
    commonMistakes: [
      '-고 보니 (phát hiện sau khi làm, cụ thể) vs -고 보면 (suy luận tổng quát)',
      'Không nhầm với -다 보면 (nếu cứ làm thì): 공부하다 보면 vs 공부하고 보면',
    ],
    level: 'topik4',
  },
  {
    id: 'g-t4-09',
    pattern: 'V/A + -아/어 봤자',
    meaningVi: 'Dù có làm cũng vô ích, làm cũng chẳng ích gì — nhượng bộ bi quan',
    usageNotes:
      'Diễn tả rằng dù có làm điều đó thì cũng không có tác dụng hay ý nghĩa gì. Mang sắc thái bi quan hoặc thất vọng.',
    examples: [
      { ko: '말해 봤자 소용없어요.', vi: 'Có nói cũng vô ích thôi.' },
      { ko: '아무리 기다려 봤자 안 와요.', vi: 'Dù có chờ bao lâu cũng không đến đâu.' },
      { ko: '그 사람한테 설명해 봤자 이해 못 해요.', vi: 'Có giải thích cho người đó cũng chẳng hiểu được.' },
    ],
    commonMistakes: [
      '-아/어 봤자 ≠ -아/어도: 봤자 nhấn tính vô ích mạnh hơn; -아/어도 chỉ là nhượng bộ trung tính',
      'Không dùng khi kết quả tích cực: 해 봤자 좋아요 ✗ (sai logic)',
    ],
    level: 'topik4',
  },
  {
    id: 'g-t4-10',
    pattern: 'V/A + -(으)ㄴ/는 만큼',
    meaningVi: 'Tương xứng với, bằng với — tỷ lệ hoặc mức độ tương đương',
    usageNotes:
      'Diễn tả sự tương xứng: kết quả ở vế sau tương đương với mức độ hoặc điều kiện ở vế trước. Khác -정도로 (đến mức): 만큼 so sánh tương đương.',
    examples: [
      { ko: '노력한 만큼 좋은 결과가 나올 거예요.', vi: 'Bạn sẽ có kết quả tốt tương xứng với công sức bỏ ra.' },
      { ko: '가격이 비싼 만큼 품질도 좋아요.', vi: 'Tương xứng với giá đắt thì chất lượng cũng tốt.' },
      { ko: '먹는 만큼 운동도 해야 해요.', vi: 'Ăn bao nhiêu thì phải tập thể dục bấy nhiêu.' },
    ],
    commonMistakes: [
      'N + 만큼 (bằng N): 나만큼 ✓; V/A: -(으)ㄴ/는 만큼',
      'Nhầm với -정도: 정도 nhấn mức độ tuyệt đối; 만큼 so sánh tương đương',
    ],
    level: 'topik4',
  },
  {
    id: 'g-t4-11',
    pattern: 'V + -(으)ㄹ 겸 (해서)',
    meaningVi: 'Vừa để...vừa để — hai mục đích cùng lúc',
    usageNotes:
      'Diễn tả hành động được thực hiện với hai mục đích hoặc hai lý do cùng một lúc. Thân mật đến trang trọng vừa phải.',
    examples: [
      { ko: '운동도 할 겸 친구도 만날 겸 공원에 갔어요.', vi: 'Vừa để tập thể dục vừa để gặp bạn nên đến công viên.' },
      { ko: '구경도 할 겸 쇼핑도 할 겸 시내에 나갔어요.', vi: 'Vừa để tham quan vừa để mua sắm nên ra trung tâm.' },
      { ko: '일도 할 겸 해서 카페에 갔어요.', vi: 'Vừa để làm việc nên đến quán cà phê.' },
    ],
    commonMistakes: [
      '-ㄹ 겸 thường xuất hiện hai lần khi có hai mục đích: 운동할 겸 산책할 겸',
      '-(으)ㄹ 겸 ≠ -기 위해서: 겸 nhấn hai mục đích đồng thời; -기 위해서 nhấn một mục đích chính',
    ],
    level: 'topik4',
  },
  {
    id: 'g-t4-12',
    pattern: 'V/A + -(으)ㄹ 정도로',
    meaningVi: 'Đến mức, đến nỗi — mức độ được dùng để so sánh',
    usageNotes:
      'Dùng để diễn tả mức độ cực đoan. V/A + -(으)ㄹ 정도로 + kết quả. Xem thêm topik3: -(으)ㄹ 정도이다.',
    examples: [
      { ko: '말을 못 할 정도로 놀랐어요.', vi: 'Ngạc nhiên đến mức không nói được.' },
      { ko: '눈물이 날 정도로 아름다운 음악이었다.', vi: 'Bản nhạc đẹp đến mức rơi nước mắt.' },
      { ko: '기억도 안 날 정도로 오래된 일이에요.', vi: 'Là chuyện lâu đến mức không còn nhớ nữa.' },
    ],
    commonMistakes: [
      '정도로 (bổ ngữ) vs 정도이다 (vị ngữ): 슬플 정도로 노래했다 vs 슬플 정도이다',
      'Nhầm với -만큼: 정도로 nhấn mức độ cực đoan; 만큼 so sánh tương đương',
    ],
    level: 'topik4',
  },
  {
    id: 'g-t4-13',
    pattern: 'V/A + -나 싶다 / -(으)ㄹ까 싶다',
    meaningVi: 'Không biết có phải là, phân vân — tự hỏi nội tâm',
    usageNotes:
      'Diễn tả sự tự hỏi hoặc phân vân trong nội tâm của người nói. Không phải câu hỏi trực tiếp mà là phản tư nội tâm.',
    examples: [
      { ko: '내가 너무 심했나 싶어요.', vi: 'Tôi tự hỏi không biết mình có quá quắt không.' },
      { ko: '이렇게 해도 될까 싶어요.', vi: 'Tôi phân vân không biết làm vậy có được không.' },
      { ko: '그 사람이 화가 났나 싶었어요.', vi: 'Tôi tự hỏi không biết người đó có giận không.' },
    ],
    commonMistakes: [
      'Khác -(으)ㄹ 것 같다: 싶다 là tự hỏi nội tâm; -(으)ㄹ 것 같다 là phỏng đoán',
      '나 싶다 (tự hỏi về hiện tại) vs -(으)ㄹ까 싶다 (tự hỏi về tương lai/khả năng)',
    ],
    level: 'topik4',
  },
  {
    id: 'g-t4-14',
    pattern: 'V/A + -(으)ㄹ 따름이다',
    meaningVi: 'Chỉ có thể, chỉ biết — thụ động, không có cách khác',
    usageNotes:
      'Diễn tả rằng người nói chỉ có thể làm điều đó, không thể làm gì khác hơn. Trang trọng, dùng nhiều trong văn viết.',
    examples: [
      { ko: '최선을 다할 따름입니다.', vi: 'Tôi chỉ có thể cố hết sức mà thôi.' },
      { ko: '그 말을 듣고 놀랄 따름이었다.', vi: 'Chỉ biết ngạc nhiên khi nghe điều đó.' },
      { ko: '결과를 기다릴 따름입니다.', vi: 'Chỉ biết chờ kết quả thôi.' },
    ],
    commonMistakes: [
      '-(으)ㄹ 따름이다 ≠ -(으)ㄹ 뿐이다: 따름이다 trang trọng hơn và thường kèm sắc thái thụ động/khiêm tốn',
      'Không dùng trong hội thoại thường ngày — thay bằng -ㄹ 뿐이에요',
    ],
    level: 'topik4',
  },
  {
    id: 'g-t4-15',
    pattern: 'N + 은/는 물론이고',
    meaningVi: 'Không chỉ N mà cả — bao gồm rõ ràng cả điều hiển nhiên',
    usageNotes:
      'Nói rằng N (điều hiển nhiên) đã là như vậy, và thêm vào đó còn có điều khác nữa. Tương tự 뿐만 아니라 nhưng nhấn tính hiển nhiên của vế đầu.',
    examples: [
      { ko: '그 학생은 국어는 물론이고 수학도 잘해요.', vi: 'Học sinh đó không chỉ giỏi ngữ văn mà cả toán cũng giỏi.' },
      { ko: '한국어는 물론이고 영어도 유창해요.', vi: 'Không chỉ tiếng Hàn mà tiếng Anh cũng lưu loát.' },
      { ko: '음식은 물론이고 서비스도 훌륭했어요.', vi: 'Không chỉ đồ ăn mà dịch vụ cũng tuyệt vời.' },
    ],
    commonMistakes: [
      '물론이고 vs 뿐만 아니라: 물론이고 nhấn điều đầu tiên là hiển nhiên/đương nhiên',
      'N + 은/는 물론이고 (trực tiếp sau danh từ): Không cần 기 hay 는 것',
    ],
    level: 'topik4',
  },
  {
    id: 'g-t4-16',
    pattern: 'V + -자마자',
    meaningVi: 'Ngay khi, vừa...thì ngay lập tức — chuỗi hành động liên tiếp không có độ trễ',
    usageNotes:
      'Diễn tả hành động xảy ra ngay lập tức sau hành động trước. Không có độ trễ thời gian. Trang trọng hơn -고 나서.',
    examples: [
      { ko: '집에 도착하자마자 잠이 들었어요.', vi: 'Vừa về đến nhà là ngủ thiếp đi ngay.' },
      { ko: '시험이 끝나자마자 여행을 갈 거예요.', vi: 'Thi xong là đi du lịch ngay.' },
      { ko: '그 소식을 듣자마자 달려갔어요.', vi: 'Vừa nghe tin xong là chạy đến ngay.' },
    ],
    commonMistakes: [
      '-자마자 ≠ -자 (đề nghị cùng làm): 가자마자 (ngay khi đi) ≠ 가자 (đi thôi)',
      'Không dùng hai hành động có cùng chủ ngữ mà có độ trễ: -자마자 phải liên tiếp tức thì',
    ],
    level: 'topik4',
  },
  {
    id: 'g-t4-17',
    pattern: 'V/A + -다기보다',
    meaningVi: 'Hơn là, đúng hơn là — điều chỉnh hoặc chính xác hóa',
    usageNotes:
      'Người nói điều chỉnh cách diễn đạt, nói rằng điều ở vế sau chính xác hơn điều ở vế trước. Thường dùng để nuance hóa nhận định.',
    examples: [
      { ko: '어렵다기보다는 복잡해요.', vi: 'Hơn là khó thì đúng hơn là phức tạp.' },
      { ko: '그는 천재라기보다 노력하는 사람이에요.', vi: 'Anh ấy đúng hơn là người chăm chỉ hơn là thiên tài.' },
      { ko: '싫다기보다는 관심이 없어요.', vi: 'Hơn là ghét thì đúng hơn là không có hứng thú.' },
    ],
    commonMistakes: [
      '다기보다는 = -다기보다 + 는 (thêm 는 để nhấn mạnh sự đối lập)',
      '명사 + 라기보다: 학생이라기보다 ✓ (không phải 학생다기보다)',
    ],
    level: 'topik4',
  },
  {
    id: 'g-t4-18',
    pattern: 'V/A + -(으)ㄴ/는 셈이다',
    meaningVi: 'Xét cho cùng thì, coi như là — tổng kết hoặc ước tính',
    usageNotes:
      'Diễn tả rằng kết quả cuối cùng hoặc bản chất thực sự của điều gì đó là như vậy. Người nói tổng kết hoặc quy về một kết luận.',
    examples: [
      { ko: '이렇게 하면 반은 된 셈이에요.', vi: 'Làm được vậy coi như là đã xong một nửa rồi.' },
      { ko: '하루에 10개씩 외우면 한 달에 300개 외우는 셈이에요.', vi: 'Mỗi ngày học 10 từ thì tính ra một tháng học được 300 từ.' },
      { ko: '거의 다 해결된 셈이에요.', vi: 'Xét cho cùng thì gần như đã giải quyết xong rồi.' },
    ],
    commonMistakes: [
      '-셈이다 ≠ -것이다: 셈이다 là tổng kết/ước tính; 것이다 là khẳng định mạnh hơn',
      '-(으)ㄹ 셈이다 (tương lai): 이렇게 하면 성공할 셈이다 (tính ra sẽ thành công)',
    ],
    level: 'topik4',
  },
  {
    id: 'g-t4-19',
    pattern: 'V/A + -(으)ㄴ/는 척하다',
    meaningVi: 'Giả vờ, làm như là — hành động không thật',
    usageNotes:
      'Diễn tả hành động giả vờ làm gì đó hoặc giả vờ ở trạng thái nào đó trong khi thực tế không phải vậy.',
    examples: [
      { ko: '아픈 척했어요.', vi: 'Tôi đã giả vờ bị ốm.' },
      { ko: '모르는 척하지 마세요.', vi: 'Đừng giả vờ như không biết.' },
      { ko: '그 사람을 못 본 척했어요.', vi: 'Tôi giả vờ như không thấy người đó.' },
    ],
    commonMistakes: [
      'Tính từ: 아픈 척 ✓ (không phải 아파하는 척); Động từ: 모르는 척 ✓',
      'Khác -는 것 같다: 척하다 = cố tình giả vờ; 것 같다 = không chắc, phỏng đoán',
    ],
    level: 'topik4',
  },
  {
    id: 'g-t4-20',
    pattern: 'V + -(으)면서도',
    meaningVi: 'Trong khi...nhưng lại, vừa...vừa lại — nghịch lý, mâu thuẫn',
    usageNotes:
      'Diễn tả mâu thuẫn giữa hai hành động hoặc trạng thái đồng thời. Vế sau mâu thuẫn với kỳ vọng từ vế trước. Nhấn mạnh hơn -(으)면서.',
    examples: [
      { ko: '알면서도 모른 척했어요.', vi: 'Biết mà vẫn giả vờ như không biết.' },
      { ko: '피곤하면서도 계속 일했어요.', vi: 'Dù mệt vẫn tiếp tục làm việc.' },
      { ko: '싫으면서도 억지로 웃었어요.', vi: 'Trong lòng ghét nhưng vẫn gượng cười.' },
    ],
    commonMistakes: [
      '-(으)면서도 ≠ -(으)면서: 면서도 nhấn sự mâu thuẫn; 면서 chỉ đơn giản là đồng thời',
      'Nhầm với -지만: 면서도 hai hành động diễn ra đồng thời; 지만 chỉ tương phản không nhất thiết đồng thời',
    ],
    level: 'topik4',
  },
]
