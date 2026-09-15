import Link from 'next/link'

const footerSections = {
  'Học tập': [
    { href: '/courses', label: 'Khóa học' },
    { href: '/learn/flashcards', label: 'Flashcard SRS' },
    { href: '/topik', label: 'Luyện TOPIK' },
    { href: '/vocab', label: 'Từ vựng' },
  ],
  'Nền tảng': [
    { href: '/about', label: 'Về chúng tôi' },
    { href: '/blog', label: 'Blog' },
    { href: '/pricing', label: 'Bảng giá' },
    { href: '/contact', label: 'Liên hệ' },
  ],
  'Pháp lý': [
    { href: '/privacy', label: 'Chính sách bảo mật' },
    { href: '/terms', label: 'Điều khoản' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)] bg-bg-base">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span lang="ko" className="font-korean font-bold text-xl text-text-primary">한</span>
              <span className="text-sm font-semibold text-text-primary">Hàn Ngữ</span>
            </div>
            <p className="text-sm text-text-tertiary leading-relaxed max-w-[200px]">
              Học tiếng Hàn khoa học và đẹp. Dành cho người Việt.
            </p>
            <p className="font-korean text-sm text-text-tertiary mt-3">한국어를 배워봐요 🇰🇷</p>
          </div>

          {/* Link columns */}
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title}>
              <p className="text-xs font-medium tracking-[0.12em] uppercase text-text-tertiary mb-4">
                {title}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[rgba(255,255,255,0.06)] pt-8 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-xs text-text-tertiary">© 2025 Hàn Ngữ. Tất cả quyền được bảo lưu.</p>
          <p className="text-xs text-text-tertiary">Made with ♥ in Việt Nam</p>
        </div>
      </div>
    </footer>
  )
}
