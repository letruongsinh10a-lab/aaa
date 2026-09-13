import type { VocabCard } from '@/types'

export const vocabTopicKhachSan: VocabCard[] = [
  {
    id: 'tp-khach-san-01',
    word: '객실',
    romanization: 'gaek-sil',
    meaningVi: 'Phòng khách sạn',
    pos: 'noun',
    frequencyRank: 1,
    examples: [
      { ko: '예약하신 객실은 10층에 있습니다.', vi: 'Phòng quý khách đã đặt ở tầng 10.' },
      { ko: '객실 청소는 오전에 진행됩니다.', vi: 'Việc dọn phòng được thực hiện vào buổi sáng.' }
    ],
    tags: [],
    topic: 'khach-san',
    topicOrder: 1,
    relatedPhrases: ['객실을 예약하다 (đặt phòng)', '넓은 객실 (phòng rộng)']
  },
  {
    id: 'tp-khach-san-02',
    word: '빈방',
    romanization: 'bin-bang',
    meaningVi: 'Phòng trống',
    pos: 'noun',
    frequencyRank: 2,
    examples: [
      { ko: '오늘은 빈방이 하나도 없어요.', vi: 'Hôm nay không còn phòng trống nào.' },
      { ko: '빈방이 있으면 좀 더 넓은 방으로 바꿔 주세요.', vi: 'Nếu còn phòng trống thì xin đổi cho tôi phòng rộng hơn.' }
    ],
    tags: [],
    topic: 'khach-san',
    topicOrder: 2,
    relatedPhrases: ['빈방을 확인하다 (kiểm tra phòng trống)', '빈방이 나다 (có phòng trống)']
  },
  {
    id: 'tp-khach-san-03',
    word: '숙박비',
    romanization: 'suk-bak-bi',
    meaningVi: 'Tiền phòng, phí lưu trú',
    pos: 'noun',
    frequencyRank: 3,
    examples: [
      { ko: '성수기라서 숙박비가 많이 올랐어요.', vi: 'Vì đang mùa cao điểm nên tiền phòng tăng nhiều.' },
      { ko: '숙박비에 조식이 포함되어 있어요.', vi: 'Tiền phòng đã bao gồm bữa sáng.' }
    ],
    tags: [],
    topic: 'khach-san',
    topicOrder: 3,
    relatedPhrases: ['숙박비를 지불하다 (thanh toán tiền phòng)', '1박 숙박비 (tiền phòng một đêm)']
  },
  {
    id: 'tp-khach-san-04',
    word: '숙소',
    romanization: 'suk-so',
    meaningVi: 'Chỗ ở, nơi ở',
    pos: 'noun',
    frequencyRank: 4,
    examples: [
      { ko: '여행 가기 전에 숙소부터 예약했어요.', vi: 'Trước khi đi du lịch tôi đã đặt chỗ ở trước.' },
      { ko: '이번 숙소는 위치가 아주 좋았어요.', vi: 'Chỗ ở lần này có vị trí rất tốt.' }
    ],
    tags: [],
    topic: 'khach-san',
    topicOrder: 4,
    relatedPhrases: ['숙소를 예약하다 (đặt chỗ ở)', '숙소를 정하다 (chọn nơi ở)']
  },
  {
    id: 'tp-khach-san-05',
    word: '여행자',
    romanization: 'yeo-haeng-ja',
    meaningVi: 'Khách du lịch',
    pos: 'noun',
    frequencyRank: 5,
    examples: [
      { ko: '이 호텔은 외국인 여행자에게 인기가 많아요.', vi: 'Khách sạn này rất được lòng khách du lịch nước ngoài.' },
      { ko: '여행자를 위한 안내 책자가 로비에 있어요.', vi: 'Ở sảnh có tập gấp hướng dẫn dành cho khách du lịch.' }
    ],
    tags: [],
    topic: 'khach-san',
    topicOrder: 5,
    relatedPhrases: ['외국인 여행자 (khách du lịch nước ngoài)', '여행자 보험 (bảo hiểm du lịch)']
  },
  {
    id: 'tp-khach-san-06',
    word: '수표',
    romanization: 'su-pyo',
    meaningVi: 'Ngân phiếu, séc',
    pos: 'noun',
    frequencyRank: 6,
    examples: [
      { ko: '이 호텔에서는 수표로 결제할 수 없어요.', vi: 'Khách sạn này không thể thanh toán bằng séc.' },
      { ko: '수표를 현금으로 바꾼 후에 숙박비를 냈어요.', vi: 'Tôi đã đổi séc ra tiền mặt rồi mới trả tiền phòng.' }
    ],
    tags: [],
    topic: 'khach-san',
    topicOrder: 6,
    relatedPhrases: ['수표로 결제하다 (thanh toán bằng séc)', '수표를 현금으로 바꾸다 (đổi séc ra tiền mặt)']
  },
  {
    id: 'tp-khach-san-07',
    word: '숙박하다',
    romanization: 'suk-bak-ha-da',
    meaningVi: 'Ở trọ, ở khách sạn',
    pos: 'verb',
    frequencyRank: 7,
    examples: [
      { ko: '이 호텔에서 3박 4일 동안 숙박할 거예요.', vi: 'Tôi sẽ ở khách sạn này trong 4 ngày 3 đêm.' },
      { ko: '숙박하시려면 신분증을 보여 주세요.', vi: 'Nếu muốn ở trọ thì xin xuất trình giấy tờ tùy thân.' }
    ],
    tags: [],
    topic: 'khach-san',
    topicOrder: 7,
    relatedPhrases: ['호텔에서 숙박하다 (ở tại khách sạn)', '며칠 동안 숙박하다 (ở trọ mấy ngày)']
  },
  {
    id: 'tp-khach-san-08',
    word: '보관하다',
    romanization: 'bo-gwan-ha-da',
    meaningVi: 'Bảo quản',
    pos: 'verb',
    frequencyRank: 8,
    examples: [
      { ko: '귀중품은 프런트에 보관해 주세요.', vi: 'Xin hãy gửi đồ có giá trị ở quầy lễ tân để bảo quản.' },
      { ko: '호텔에서 짐을 하루 더 보관해 줬어요.', vi: 'Khách sạn đã bảo quản hành lý giúp thêm một ngày.' }
    ],
    tags: [],
    topic: 'khach-san',
    topicOrder: 8,
    relatedPhrases: ['짐을 보관하다 (bảo quản hành lý)', '귀중품을 보관하다 (bảo quản đồ có giá trị)']
  },
  {
    id: 'tp-khach-san-09',
    word: '귀중품을 맡기다',
    romanization: 'gwi-jung-pum-eul mat-gi-da',
    meaningVi: 'Ký gửi đồ có giá trị',
    pos: 'expression',
    frequencyRank: 9,
    examples: [
      { ko: '체크아웃 전에 귀중품을 맡겼어요.', vi: 'Trước khi trả phòng tôi đã ký gửi đồ có giá trị.' },
      { ko: '귀중품을 맡기면 안전하게 보관해 줘요.', vi: 'Nếu ký gửi đồ có giá trị thì sẽ được bảo quản an toàn.' }
    ],
    tags: [],
    topic: 'khach-san',
    topicOrder: 9
  },
  {
    id: 'tp-khach-san-10',
    word: '룸서비스를 부탁하다',
    romanization: 'rum-seo-bi-seu-reul bu-tak-ha-da',
    meaningVi: 'Yêu cầu dịch vụ phòng',
    pos: 'expression',
    frequencyRank: 10,
    examples: [
      { ko: '배가 고파서 룸서비스를 부탁했어요.', vi: 'Vì đói bụng nên tôi đã yêu cầu dịch vụ phòng.' },
      { ko: '룸서비스를 부탁하면 삼십 분 안에 와요.', vi: 'Nếu yêu cầu dịch vụ phòng thì trong 30 phút sẽ có người mang đến.' }
    ],
    tags: [],
    topic: 'khach-san',
    topicOrder: 10
  },
  {
    id: 'tp-khach-san-11',
    word: '방 열쇠를 맡기다',
    romanization: 'bang yeol-soe-reul mat-gi-da',
    meaningVi: 'Ký gửi chìa khóa phòng',
    pos: 'expression',
    frequencyRank: 11,
    examples: [
      { ko: '외출할 때 프런트에 방 열쇠를 맡겼어요.', vi: 'Khi ra ngoài tôi đã ký gửi chìa khóa phòng ở quầy lễ tân.' },
      { ko: '방 열쇠를 맡기고 관광을 나갔어요.', vi: 'Tôi đã ký gửi chìa khóa phòng rồi đi tham quan.' }
    ],
    tags: [],
    topic: 'khach-san',
    topicOrder: 11
  },
  {
    id: 'tp-khach-san-12',
    word: '방을 바꾸다',
    romanization: 'bang-eul ba-kku-da',
    meaningVi: 'Đổi phòng',
    pos: 'expression',
    frequencyRank: 12,
    examples: [
      { ko: '방이 너무 시끄러워서 방을 바꿔 달라고 했어요.', vi: 'Vì phòng quá ồn nên tôi đã yêu cầu đổi phòng.' },
      { ko: '더 넓은 방으로 바꿀 수 있어요?', vi: 'Có thể đổi sang phòng rộng hơn không?' }
    ],
    tags: [],
    topic: 'khach-san',
    topicOrder: 12
  },
  {
    id: 'tp-khach-san-13',
    word: '방을 예약하다',
    romanization: 'bang-eul ye-yak-ha-da',
    meaningVi: 'Đặt phòng',
    pos: 'expression',
    frequencyRank: 13,
    examples: [
      { ko: '인터넷으로 미리 방을 예약했어요.', vi: 'Tôi đã đặt phòng trước qua mạng.' },
      { ko: '성수기에는 방을 예약하기가 어려워요.', vi: 'Vào mùa cao điểm thì rất khó đặt phòng.' }
    ],
    tags: [],
    topic: 'khach-san',
    topicOrder: 13
  },
  {
    id: 'tp-khach-san-14',
    word: '열쇠를 잃어버리다',
    romanization: 'yeol-soe-reul i-reo-beo-ri-da',
    meaningVi: 'Làm mất chìa khóa',
    pos: 'expression',
    frequencyRank: 14,
    examples: [
      { ko: '방 열쇠를 잃어버려서 프런트에 새로 받았어요.', vi: 'Tôi đã làm mất chìa khóa phòng nên xin cấp lại ở quầy lễ tân.' },
      { ko: '열쇠를 잃어버리면 비용을 내야 할 수도 있어요.', vi: 'Nếu làm mất chìa khóa thì có thể phải trả phí.' }
    ],
    tags: [],
    topic: 'khach-san',
    topicOrder: 14
  },
  {
    id: 'tp-khach-san-15',
    word: '열쇠를 주다',
    romanization: 'yeol-soe-reul ju-da',
    meaningVi: 'Đưa chìa khóa',
    pos: 'expression',
    frequencyRank: 15,
    examples: [
      { ko: '직원이 체크인할 때 열쇠를 줬어요.', vi: 'Nhân viên đã đưa chìa khóa khi tôi làm thủ tục nhận phòng.' },
      { ko: '카드 키 대신 열쇠를 주는 호텔도 있어요.', vi: 'Cũng có khách sạn đưa chìa khóa thay vì thẻ từ.' }
    ],
    tags: [],
    topic: 'khach-san',
    topicOrder: 15
  },
  {
    id: 'tp-khach-san-16',
    word: '짐을 들어주다',
    romanization: 'ji-meul deu-reo-ju-da',
    meaningVi: 'Mang hành lý giúp',
    pos: 'expression',
    frequencyRank: 16,
    examples: [
      { ko: '벨보이가 짐을 들어줬어요.', vi: 'Nhân viên bellboy đã mang hành lý giúp tôi.' },
      { ko: '무거운 짐을 들어줘서 정말 고마웠어요.', vi: 'Tôi rất cảm ơn vì đã được mang giúp hành lý nặng.' }
    ],
    tags: [],
    topic: 'khach-san',
    topicOrder: 16
  },
  {
    id: 'tp-khach-san-17',
    word: '짐을 로비로 내리다',
    romanization: 'ji-meul ro-bi-ro nae-ri-da',
    meaningVi: 'Đặt hành lý xuống sảnh',
    pos: 'expression',
    frequencyRank: 17,
    examples: [
      { ko: '체크아웃 후에 짐을 로비로 내려 놨어요.', vi: 'Sau khi trả phòng tôi đã đặt hành lý xuống sảnh.' },
      { ko: '짐을 로비로 내려 두면 나중에 찾아갈 수 있어요.', vi: 'Nếu để hành lý ở sảnh thì sau đó có thể lấy lại.' }
    ],
    tags: [],
    topic: 'khach-san',
    topicOrder: 17
  },
  {
    id: 'tp-khach-san-18',
    word: '짐을 맡기다',
    romanization: 'ji-meul mat-gi-da',
    meaningVi: 'Ký gửi hành lý',
    pos: 'expression',
    frequencyRank: 18,
    examples: [
      { ko: '체크인 시간 전이라 짐을 맡기고 나갔어요.', vi: 'Vì chưa đến giờ nhận phòng nên tôi đã ký gửi hành lý rồi đi ra ngoài.' },
      { ko: '짐을 맡기면 무료로 보관해 줘요.', vi: 'Nếu ký gửi hành lý thì được bảo quản miễn phí.' }
    ],
    tags: [],
    topic: 'khach-san',
    topicOrder: 18
  },
  {
    id: 'tp-khach-san-19',
    word: '호텔에 묵다',
    romanization: 'ho-te-re muk-da',
    meaningVi: 'Trú ngụ tại khách sạn, ở khách sạn',
    pos: 'expression',
    frequencyRank: 19,
    examples: [
      { ko: '이번 여행에서는 바닷가 호텔에 묵었어요.', vi: 'Chuyến đi lần này tôi đã ở tại khách sạn ven biển.' },
      { ko: '며칠 동안 호텔에 묵을 예정이에요.', vi: 'Tôi dự định ở khách sạn trong mấy ngày.' }
    ],
    tags: [],
    topic: 'khach-san',
    topicOrder: 19
  }
]
