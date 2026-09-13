import type { VocabCard } from '@/types'
import { vocabTopicSanBay } from './san-bay'
import { vocabTopicTrungTamKhachHang } from './trung-tam-khach-hang'
import { vocabTopicThuVien } from './thu-vien'
import { vocabTopicTiemLamToc } from './tiem-lam-toc'
import { vocabTopicBatDongSan } from './bat-dong-san'
import { vocabTopicTiemGiatUi } from './tiem-giat-ui'
import { vocabTopicTrungTamSuaChua } from './trung-tam-sua-chua'
import { vocabTopicBuuDien } from './buu-dien'
import { vocabTopicDoThatLac } from './do-that-lac'
import { vocabTopicNganHang } from './ngan-hang'
import { vocabTopicKhachSan } from './khach-san'
import { vocabTopicDuocBenhVien } from './duoc-benh-vien'
import { vocabTopicKinhTe } from './kinh-te'
import { vocabTopicNhoVa } from './nho-va'
import { vocabTopicDaLamDep } from './da-lam-dep'
import { vocabTopicDuLich } from './du-lich'
import { vocabTopicMoiTruong } from './moi-truong'
import { vocabTopicThucAn } from './thuc-an'
import { vocabTopicYPhuc } from './y-phuc'
import { vocabTopicTinhCach } from './tinh-cach'
import { vocabTopicThanhPho } from './thanh-pho'
import { vocabTopicSucKhoe } from './suc-khoe'
import { vocabTopicNoiLamViec } from './noi-lam-viec'
import { vocabTopicThoiTiet } from './thoi-tiet'
import { vocabTopicCamXuc } from './cam-xuc'
import { vocabTopicGiaoThong } from './giao-thong'
import { vocabTopicKhoaHocVaSuPhatTrien } from './khoa-hoc-va-su-phat-trien'
import { vocabTopicMuaSam } from './mua-sam'
import { vocabTopicSuKienLeHoi } from './su-kien-le-hoi'
import { vocabTopicCuDong } from './cu-dong'
import { vocabTopicViecTrongNgay } from './viec-trong-ngay'
import { vocabTopicTheThao } from './the-thao'
import { vocabTopicVanHoaDaiChung } from './van-hoa-dai-chung'
import { vocabTopicVanDeXaHoi } from './van-de-xa-hoi'
import { vocabTopicLeNghi } from './le-nghi'
import { vocabTopicSoThich } from './so-thich'
import { vocabTopicPhongTuc } from './phong-tuc'
import { vocabTopicGiaDinh } from './gia-dinh'
import { vocabTopicHoatDongTinhNguyen } from './hoat-dong-tinh-nguyen'
import { vocabTopicThanThe } from './than-the'
import { vocabTopicGioiThieu } from './gioi-thieu'
import { vocabTopicViTri } from './vi-tri'
import { vocabTopicDaoTaoGiaoDuc } from './dao-tao-giao-duc'
import { vocabTopicNgoaiHinh } from './ngoai-hinh'
import { vocabTopicPhatSong } from './phat-song'
import { vocabTopicThucVat } from './thuc-vat'
import { vocabTopicDongVat } from './dong-vat'
import { vocabTopicDieuTra } from './dieu-tra'
import { vocabTopicVanHoaHanQuoc } from './van-hoa-han-quoc'
import { vocabTopicDatHang } from './dat-hang'
import { vocabTopicCongTy } from './cong-ty'
import { vocabTopicGioiThieuSanPham } from './gioi-thieu-san-pham'
import { vocabTopicLichSu } from './lich-su'
import { vocabTopicTheDucTheThao } from './the-duc-the-thao'
import { vocabTopicThanhNguThongDung } from './thanh-ngu-thong-dung'
import { vocabTopicThanhNguBoPhanCoThe } from './thanh-ngu-bo-phan-co-the'

export type VocabTopicGroup = 'place' | 'theme' | 'idiom'

export interface VocabTopicMeta {
  slug: string
  nameKo: string
  nameVi: string
  group: VocabTopicGroup
  words: VocabCard[]
}

export const vocabByTopicList: VocabTopicMeta[] = [
  // Chương 1 — 장소별 어휘 (Từ vựng theo địa điểm)
  { slug: 'san-bay', nameKo: '공항', nameVi: 'Sân bay', group: 'place', words: vocabTopicSanBay },
  { slug: 'trung-tam-khach-hang', nameKo: '고객 센터', nameVi: 'Trung tâm khách hàng', group: 'place', words: vocabTopicTrungTamKhachHang },
  { slug: 'thu-vien', nameKo: '도서관', nameVi: 'Thư viện', group: 'place', words: vocabTopicThuVien },
  { slug: 'tiem-lam-toc', nameKo: '미용실', nameVi: 'Tiệm làm tóc', group: 'place', words: vocabTopicTiemLamToc },
  { slug: 'bat-dong-san', nameKo: '부동산', nameVi: 'Bất động sản', group: 'place', words: vocabTopicBatDongSan },
  { slug: 'tiem-giat-ui', nameKo: '세탁소', nameVi: 'Tiệm giặt ủi', group: 'place', words: vocabTopicTiemGiatUi },
  { slug: 'trung-tam-sua-chua', nameKo: '수리 센터', nameVi: 'Trung tâm sửa chữa', group: 'place', words: vocabTopicTrungTamSuaChua },
  { slug: 'buu-dien', nameKo: '우체국', nameVi: 'Bưu điện', group: 'place', words: vocabTopicBuuDien },
  { slug: 'do-that-lac', nameKo: '분실물 보관소', nameVi: 'Đồ thất lạc', group: 'place', words: vocabTopicDoThatLac },
  { slug: 'ngan-hang', nameKo: '은행', nameVi: 'Ngân hàng', group: 'place', words: vocabTopicNganHang },
  { slug: 'khach-san', nameKo: '호텔', nameVi: 'Khách sạn', group: 'place', words: vocabTopicKhachSan },
  { slug: 'duoc-benh-vien', nameKo: '약국·병원', nameVi: 'Hiệu thuốc, bệnh viện', group: 'place', words: vocabTopicDuocBenhVien },

  // Chương 2 — 주제별 어휘 (Từ vựng theo chủ đề)
  { slug: 'kinh-te', nameKo: '경제', nameVi: 'Kinh tế', group: 'theme', words: vocabTopicKinhTe },
  { slug: 'nho-va', nameKo: '부탁', nameVi: 'Nhờ vả', group: 'theme', words: vocabTopicNhoVa },
  { slug: 'da-lam-dep', nameKo: '피부·미용', nameVi: 'Da, làm đẹp', group: 'theme', words: vocabTopicDaLamDep },
  { slug: 'du-lich', nameKo: '여행', nameVi: 'Du lịch', group: 'theme', words: vocabTopicDuLich },
  { slug: 'moi-truong', nameKo: '환경', nameVi: 'Môi trường', group: 'theme', words: vocabTopicMoiTruong },
  { slug: 'thuc-an', nameKo: '음식', nameVi: 'Thức ăn', group: 'theme', words: vocabTopicThucAn },
  { slug: 'y-phuc', nameKo: '의상', nameVi: 'Y phục', group: 'theme', words: vocabTopicYPhuc },
  { slug: 'tinh-cach', nameKo: '성격', nameVi: 'Tính cách', group: 'theme', words: vocabTopicTinhCach },
  { slug: 'thanh-pho', nameKo: '도시', nameVi: 'Thành phố', group: 'theme', words: vocabTopicThanhPho },
  { slug: 'suc-khoe', nameKo: '건강', nameVi: 'Sức khỏe', group: 'theme', words: vocabTopicSucKhoe },
  { slug: 'noi-lam-viec', nameKo: '직장', nameVi: 'Nơi làm việc', group: 'theme', words: vocabTopicNoiLamViec },
  { slug: 'thoi-tiet', nameKo: '날씨', nameVi: 'Thời tiết', group: 'theme', words: vocabTopicThoiTiet },
  { slug: 'cam-xuc', nameKo: '감정', nameVi: 'Cảm xúc', group: 'theme', words: vocabTopicCamXuc },
  { slug: 'giao-thong', nameKo: '교통', nameVi: 'Giao thông', group: 'theme', words: vocabTopicGiaoThong },
  { slug: 'khoa-hoc-va-su-phat-trien', nameKo: '과학과 발전', nameVi: 'Khoa học và sự phát triển', group: 'theme', words: vocabTopicKhoaHocVaSuPhatTrien },
  { slug: 'mua-sam', nameKo: '쇼핑', nameVi: 'Mua sắm', group: 'theme', words: vocabTopicMuaSam },
  { slug: 'su-kien-le-hoi', nameKo: '행사', nameVi: 'Sự kiện, lễ hội', group: 'theme', words: vocabTopicSuKienLeHoi },
  { slug: 'cu-dong', nameKo: '몸짓', nameVi: 'Cử động', group: 'theme', words: vocabTopicCuDong },
  { slug: 'viec-trong-ngay', nameKo: '일과', nameVi: 'Việc trong ngày', group: 'theme', words: vocabTopicViecTrongNgay },
  { slug: 'the-thao', nameKo: '스포츠', nameVi: 'Thể thao', group: 'theme', words: vocabTopicTheThao },
  { slug: 'van-hoa-dai-chung', nameKo: '대중문화', nameVi: 'Văn hóa đại chúng', group: 'theme', words: vocabTopicVanHoaDaiChung },
  { slug: 'van-de-xa-hoi', nameKo: '사회 문제', nameVi: 'Vấn đề xã hội', group: 'theme', words: vocabTopicVanDeXaHoi },
  { slug: 'le-nghi', nameKo: '예절', nameVi: 'Lễ nghi', group: 'theme', words: vocabTopicLeNghi },
  { slug: 'so-thich', nameKo: '취미', nameVi: 'Sở thích', group: 'theme', words: vocabTopicSoThich },
  { slug: 'phong-tuc', nameKo: '풍습', nameVi: 'Phong tục', group: 'theme', words: vocabTopicPhongTuc },
  { slug: 'gia-dinh', nameKo: '가정', nameVi: 'Gia đình', group: 'theme', words: vocabTopicGiaDinh },
  { slug: 'hoat-dong-tinh-nguyen', nameKo: '봉사활동', nameVi: 'Hoạt động tình nguyện', group: 'theme', words: vocabTopicHoatDongTinhNguyen },
  { slug: 'than-the', nameKo: '신체', nameVi: 'Thân thể', group: 'theme', words: vocabTopicThanThe },
  { slug: 'gioi-thieu', nameKo: '소개', nameVi: 'Giới thiệu', group: 'theme', words: vocabTopicGioiThieu },
  { slug: 'vi-tri', nameKo: '위치', nameVi: 'Vị trí', group: 'theme', words: vocabTopicViTri },
  { slug: 'dao-tao-giao-duc', nameKo: '교육', nameVi: 'Đào tạo, giáo dục', group: 'theme', words: vocabTopicDaoTaoGiaoDuc },
  { slug: 'ngoai-hinh', nameKo: '외모', nameVi: 'Ngoại hình', group: 'theme', words: vocabTopicNgoaiHinh },
  { slug: 'phat-song', nameKo: '방송', nameVi: 'Phát sóng', group: 'theme', words: vocabTopicPhatSong },
  { slug: 'thuc-vat', nameKo: '식물', nameVi: 'Thực vật', group: 'theme', words: vocabTopicThucVat },
  { slug: 'dong-vat', nameKo: '동물', nameVi: 'Động vật', group: 'theme', words: vocabTopicDongVat },
  { slug: 'dieu-tra', nameKo: '조사', nameVi: 'Điều tra', group: 'theme', words: vocabTopicDieuTra },
  { slug: 'van-hoa-han-quoc', nameKo: '한국문화', nameVi: 'Văn hóa Hàn Quốc', group: 'theme', words: vocabTopicVanHoaHanQuoc },
  { slug: 'dat-hang', nameKo: '주문', nameVi: 'Đặt hàng', group: 'theme', words: vocabTopicDatHang },
  { slug: 'cong-ty', nameKo: '회사', nameVi: 'Công ty', group: 'theme', words: vocabTopicCongTy },
  { slug: 'gioi-thieu-san-pham', nameKo: '상품 소개', nameVi: 'Giới thiệu sản phẩm', group: 'theme', words: vocabTopicGioiThieuSanPham },
  { slug: 'lich-su', nameKo: '역사', nameVi: 'Lịch sử', group: 'theme', words: vocabTopicLichSu },
  { slug: 'the-duc-the-thao', nameKo: '운동', nameVi: 'Thể dục thể thao', group: 'theme', words: vocabTopicTheDucTheThao },

  // Chương 3 — 관용표현 (Thành ngữ, quán dụng ngữ)
  { slug: 'thanh-ngu-thong-dung', nameKo: '관용표현', nameVi: 'Thành ngữ, quán dụng ngữ thông dụng', group: 'idiom', words: vocabTopicThanhNguThongDung },
  { slug: 'thanh-ngu-bo-phan-co-the', nameKo: '관용구 (신체 부위)', nameVi: 'Thành ngữ theo bộ phận cơ thể', group: 'idiom', words: vocabTopicThanhNguBoPhanCoThe },
]

export const vocabByTopicAll: VocabCard[] = vocabByTopicList.flatMap(t => t.words)
