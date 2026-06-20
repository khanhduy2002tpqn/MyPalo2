import Image from "next/image";
import Link from "next/link";
import { content, withLocale } from "@/lib/content";
import type { Locale } from "@/lib/types";

export function HomePage({ locale }: { locale: Locale }) {
  const t = content[locale];
  const impactHighlights =
    locale === "vi"
      ? [
          {
            image: "/assets/photos/impact-1.jpg",
            title: "Entrepreneurship Training",
            description:
              "“Điều em ấn tượng nhất là chương trình cố vấn của PSET. Các anh chị mentor dạy tụi em cách suy nghĩ như một người làm kinh doanh, biết đặt câu hỏi, chỉnh lại ý tưởng và tự tin trình bày. Những gì em học được không chỉ dừng lại ở chương trình mà còn theo em rất lâu về sau.” - Học viên chương trình PSET"
          },
          {
            image: "/assets/photos/impact-2.jpg",
            title: "P.SET International Bootcamp",
            description:
              "“Tham gia bootcamp này thật sự mở ra cho em một thế giới mới. Em không chỉ học được kỹ năng lãnh đạo và kinh doanh, mà còn có cơ hội tìm hiểu thêm về văn hóa và làm việc cùng những người bạn đến từ nhiều nơi trên thế giới. Đây là một trải nghiệm khiến em trưởng thành hơn mỗi ngày trong suốt thời gian tham gia chương trình.”"
          },
          {
            image: "/assets/photos/impact-3.jpg",
            title: "Green Leaf Discovery",
            description:
              "“Đây là lần đầu gia đình tôi tham gia Green Leaf Discovery Day. Các con được chơi, được đọc sách và thử nhiều hoạt động mà bình thường ở nhà ít có dịp làm. Nhìn con say mê với các thí nghiệm nhỏ rồi âm nhạc, tôi mới nhận ra rằng chỉ cần có không gian phù hợp, các con có thể học hỏi và phát triển rất nhiều. Một ngày thật vui và rất đáng nhớ với cả gia đình.” - Phụ huynh, Green Leaf Discovery Day"
          }
        ]
      : [
          {
            image: "/assets/photos/impact-1.jpg",
            title: "Entrepreneurship Training",
            description:
              "Practice-led learning that helps learners build entrepreneurial mindset and a clearer growth pathway."
          },
          {
            image: "/assets/photos/impact-2.jpg",
            title: "P.SET International Bootcamp",
            description:
              "An intensive environment to strengthen leadership, multicultural teamwork, and pitching confidence."
          },
          {
            image: "/assets/photos/impact-3.jpg",
            title: "Green Leaf Discovery",
            description:
              "An experiential setting for children and families focused on active learning and creative exploration."
          }
        ];

  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">{locale === "vi" ? "Khai mở" : "Unpack"}</p>
            {locale === "vi" ? (
              <h1>
                <span>KHAI MỞ</span>
                <span>TIỀM NĂNG CỦA BẠN</span>
                <small>CÙNG MYPALO</small>
              </h1>
            ) : (
              <h1>
                <span>Your potential</span>
                <span>unlock your future</span>
                <small>with MyPalo</small>
              </h1>
            )}
            <p>{t.hero.description}</p>
            <div className="hero-actions">
              <Link className="button orange" href={withLocale(locale, "/programs")}>
                {t.hero.primaryCta}
              </Link>
              <Link className="button secondary" href={withLocale(locale, "/about")}>
                {t.hero.secondaryCta}
              </Link>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <Image src="/assets/photos/hero.png" alt="" width={720} height={720} priority />
          </div>
        </div>
      </section>

      <section className="home-story">
        <div className="container">
          <article className="home-story-card">
            <h2>{t.about.title}</h2>
            {t.about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
          <div className="home-mission-row">
            <div>
              <h3>{locale === "vi" ? "Sứ mệnh" : "Mission"}</h3>
              <p>{t.about.mission}</p>
            </div>
            <div>
              <h3>{locale === "vi" ? "Tầm nhìn" : "Vision"}</h3>
              <p>{t.about.vision}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-why">
        <div className="container">
          <h2>{locale === "vi" ? "Vì sao nên chọn Mypalo?" : "Why choose Mypalo?"}</h2>
          <div className="home-why-grid">
            {t.features.map((feature, index) => (
              <article className={`home-why-card tone-${index + 1}`} key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-values">
        <div className="container">
          <div className="home-values-head">
            <h2>{locale === "vi" ? "Giá Trị Cốt Lõi" : "Core Values"}</h2>
            <p>
              {locale === "vi"
                ? '"Mypalo" tượng trưng cho hình ảnh một chiếc ba lô đồng hành cùng người trẻ trên hành trình học hỏi và trưởng thành.'
                : '"Mypalo" represents the backpack that supports young learners through growth.'}
            </p>
          </div>
          <div className="home-values-grid">
            {t.values.map((value) => (
              <article key={value.letter}>
                <h3>
                  {value.letter} - {value.title}
                </h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-partners">
        <div className="container">
          <div className="home-partner-grid">
            <h2>{locale === "vi" ? "Đối tác của chúng tôi" : "Our Partners"}</h2>
            {t.partners.map((partner) => (
              <div className="home-partner-logo" key={partner.name}>
                <Image src={partner.logo} alt={partner.name} width={170} height={70} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-stats">
        <div className="container">
          {locale === "vi" ? <p className="home-stats-lead">Chúng tôi kết nối bạn với các chương trình mà hiệu quả đã được chứng minh</p> : null}
          <div className="home-stats-grid">
            {t.stats.map((stat) => (
              <div className="home-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-impact">
        <div className="container">
          <div className="home-impact-head">
            <h2>
              {locale === "vi" ? (
                <>
                  Chúng tôi giúp bạn
                  <br />
                  hình thành <span>một tư duy</span>
                  <br />
                  <span>vững vàng và chủ động</span>
                </>
              ) : (
                t.impact.title
              )}
            </h2>
            <blockquote>
              <p>{t.impact.testimonials[0]?.quote}</p>
              <cite>{t.impact.testimonials[0]?.source}</cite>
            </blockquote>
            {locale === "vi" ? (
              <Link className="button secondary home-impact-link" href={withLocale(locale, "/impact")}>
                Xem tất cả
              </Link>
            ) : null}
          </div>
          <div className="home-impact-grid">
            {impactHighlights.map((item) => (
              <article key={item.title}>
                <Image src={item.image} alt={item.title} width={420} height={260} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-programs">
        <div className="container">
          <div className="home-programs-head">
            <h2>{locale === "vi" ? "Các chương trình nổi bật" : "Featured programs"}</h2>
            <span>{locale === "vi" ? "Tất cả danh mục" : "All categories"}</span>
            <p>
              {locale === "vi"
                ? "Lộ trình học tập theo từng nhóm đối tượng, kết hợp cố vấn, trải nghiệm thực hành và cơ hội kết nối thực tế."
                : "Learning pathways tailored by audience, combining mentoring, practical experiences, and real-world connection."}
            </p>
          </div>
          <div className="home-program-grid">
            {t.programs.map((program) => (
              <article className="home-program-card" key={program.slug}>
                <Link href={withLocale(locale, `/programs/${program.slug}`)}>
                  <Image src={program.thumbnail} alt={program.title} width={360} height={210} />
                  <div>
                    <span>{program.category}</span>
                    <h3>{program.title}</h3>
                    <p className="home-program-meta">
                      {program.audience} • {program.schedule}
                    </p>
                    <p>{program.description}</p>
                    {locale === "vi" ? <p className="home-program-fee">Học phí: Liên hệ</p> : null}
                  </div>
                </Link>
              </article>
            ))}
          </div>
          <Link className="button home-program-button" href={withLocale(locale, "/programs")}>
            {locale === "vi" ? "Khám phá tất cả khóa học" : "Explore all programs"}
          </Link>
        </div>
      </section>

      <section className="home-ticker">
        <div className="container">
          <p>
            {locale === "vi"
              ? "Trải nghiệm quốc tế. Tư duy toàn cầu. * Nâng cao kỹ năng. Dẫn dắt tương lai * Biến đam mê thành hành động."
              : "International exposure. Global mindset. Build skills. Lead the future. Turn passion into action."}
          </p>
        </div>
      </section>

      <section className="home-join">
        <div className="container">
          <div className="home-join-card">
            <div>
              <p className="eyebrow">JOIN US</p>
              <h2>Join us and achieve your goals.</h2>
              <p>Empowering youth and communities through education, skills, and opportunity.</p>
              <Link className="button orange" href={withLocale(locale, "/contact")}>
                Get started today
              </Link>
            </div>
            <div className="home-join-image">
              <Image src="/assets/photos/impact-2.jpg" alt="MyPalo learners" width={460} height={260} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
