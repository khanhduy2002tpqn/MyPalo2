import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/types";
import { NewsCard } from "./NewsCard";
import { HomePage } from "./HomePage";
import { PageHero } from "./PageHero";
import { ProgramCard } from "./ProgramCard";
import { SiteLayout } from "./SiteLayout";

export function LocalizedHome({ locale }: { locale: Locale }) {
  return (
    <SiteLayout locale={locale} currentPath="/">
      <HomePage locale={locale} />
    </SiteLayout>
  );
}

export function AboutPage({ locale }: { locale: Locale }) {
  const t = content[locale];
  return (
    <SiteLayout locale={locale} currentPath="/about">
      <main>
        <PageHero
          eyebrow={locale === "vi" ? "Về Chúng Tôi" : "About Us"}
          title={t.about.title}
          description={t.about.body[0]}
        />
        <section>
          <div className="container split">
            <div className="copy">
              {t.about.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <h2>{locale === "vi" ? "Sứ mệnh" : "Mission"}</h2>
              <p>{t.about.mission}</p>
              <h2>{locale === "vi" ? "Tầm nhìn" : "Vision"}</h2>
              <p>{t.about.vision}</p>
            </div>
            <div className="media-frame">
              <Image src="/assets/photos/impact-2.jpg" alt="" width={680} height={510} />
            </div>
          </div>
        </section>
        <section className="section-alt">
          <div className="container">
            <div className="section-heading">
              <h2>{locale === "vi" ? "Giá trị cốt lõi" : "Core values"}</h2>
              <p>{locale === "vi" ? "MyPalo là chiếc ba lô đồng hành cùng người trẻ trên hành trình học hỏi và trưởng thành." : "MyPalo is the backpack that accompanies young people as they learn and grow."}</p>
            </div>
            <div className="feature-grid">
              {t.values.map((value) => (
                <article className="card" key={value.letter}>
                  <div className="card-body">
                    <span className="tag">{value.letter}</span>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}

export function ProgramsPage({ locale }: { locale: Locale }) {
  const t = content[locale];
  return (
    <SiteLayout locale={locale} currentPath="/programs">
      <main>
        <PageHero
          eyebrow={locale === "vi" ? "Chương Trình" : "Programs"}
          title={locale === "vi" ? "Các chương trình phát triển năng lực" : "Capability-building programs"}
          description={locale === "vi" ? "Khám phá các chương trình học tập, cố vấn, định hướng nghề nghiệp và tạo tác động dành cho từng nhóm người học." : "Explore learning, mentorship, career-orientation, and impact programs for different learner groups."}
        />
        <section>
          <div className="container program-grid">
            {t.programs.map((program) => (
              <ProgramCard key={program.slug} locale={locale} program={program} />
            ))}
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}

export function ProgramDetailPage({ locale, slug }: { locale: Locale; slug: string }) {
  const t = content[locale];
  const program = t.programs.find((item) => item.slug === slug || item.aliases?.includes(slug));
  if (!program) notFound();

  return (
    <SiteLayout locale={locale} currentPath={`/programs/${slug}`}>
      <main>
        <PageHero eyebrow={program.category} title={program.title} description={program.description} />
        <section>
          <div className="container detail-layout">
            <article>
              <div className="media-frame">
                <Image src={program.thumbnail} alt={program.title} width={760} height={570} />
              </div>
              <div className="detail-body">
                <p>{program.description}</p>
                <p>
                  {locale === "vi"
                    ? "Chương trình được thiết kế để người học thực hành, nhận phản hồi và kết nối với nguồn lực phù hợp cho giai đoạn phát triển tiếp theo."
                    : "The program is designed so learners can practice, receive feedback, and connect with resources for their next stage of growth."}
                </p>
                {program.roadmap ? (
                  <div className="roadmap-stack">
                    <section className="roadmap-panel">
                      <h2>{locale === "vi" ? "Roadmap chương trình" : "Program roadmap"}</h2>
                      <p>{program.roadmap.summary}</p>
                    </section>
                    <section className="roadmap-panel">
                      <h3>{program.roadmap.stagesTitle}</h3>
                      <div className="roadmap-grid">
                        {program.roadmap.stages.map((stage) => (
                          <article key={stage.title}>
                            <h4>{stage.title}</h4>
                            <p>{stage.description}</p>
                          </article>
                        ))}
                      </div>
                    </section>
                    <section className="roadmap-panel">
                      <h3>{program.roadmap.outcomesTitle}</h3>
                      <ul>
                        {program.roadmap.outcomes.map((outcome) => (
                          <li key={outcome}>{outcome}</li>
                        ))}
                      </ul>
                    </section>
                    <section className="roadmap-panel">
                      <h3>{program.roadmap.featuresTitle}</h3>
                      <ul>
                        {program.roadmap.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </section>
                  </div>
                ) : null}
              </div>
            </article>
            <aside className="aside">
              <dl>
                <dt>{locale === "vi" ? "Nhóm học viên" : "Audience"}</dt>
                <dd>{program.audience}</dd>
                <dt>{locale === "vi" ? "Lịch học" : "Schedule"}</dt>
                <dd>{program.schedule}</dd>
                <dt>{locale === "vi" ? "Ngôn ngữ" : "Language"}</dt>
                <dd>{program.language}</dd>
              </dl>
              {program.registrationUrl ? (
                <Link className="button" href={program.registrationUrl}>
                  {locale === "vi" ? "Đăng ký tư vấn" : "Register interest"}
                </Link>
              ) : null}
            </aside>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}

export function InstructorsPage({ locale }: { locale: Locale }) {
  const t = content[locale];
  return (
    <SiteLayout locale={locale} currentPath="/instructors">
      <main>
        <PageHero
          eyebrow={locale === "vi" ? "Giảng Viên" : "Instructors"}
          title={locale === "vi" ? "Đội ngũ giảng viên và cố vấn" : "Instructors and mentors"}
          description={locale === "vi" ? "Những người đồng hành giúp học viên kết nối kiến thức, thực hành và định hướng tương lai." : "People who help learners connect knowledge, practice, and future direction."}
        />
        <section>
          <div className="container instructor-grid">
            {t.instructors.map((instructor) => (
              <article className="card" key={instructor.name}>
                <div className="card-media">
                  <Image src={instructor.avatar} alt={instructor.name} width={420} height={420} />
                </div>
                <div className="card-body">
                  <span className="tag">{instructor.position}</span>
                  <h3>{instructor.name}</h3>
                  <p>{instructor.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}

export function ImpactPage({ locale }: { locale: Locale }) {
  const t = content[locale];
  return (
    <SiteLayout locale={locale} currentPath="/impact">
      <main>
        <PageHero eyebrow={locale === "vi" ? "Tác Động" : "Our Impact"} title={t.impact.title} description={t.impact.description} />
        <section>
          <div className="container stats-grid">
            {t.stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="section-alt">
          <div className="container split">
            <div className="media-frame">
              <Image src="/assets/photos/impact-3.jpg" alt="" width={680} height={510} />
            </div>
            <div className="copy">
              {t.impact.testimonials.map((testimonial) => (
                <blockquote key={testimonial.source}>
                  <p>{testimonial.quote}</p>
                  <cite>{testimonial.source}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}

export function SupportPage({ locale }: { locale: Locale }) {
  const t = content[locale];
  return (
    <SiteLayout locale={locale} currentPath="/support">
      <main>
        <PageHero eyebrow={locale === "vi" ? "Hỗ Trợ Chúng Tôi" : "Support Us"} title={t.support.title} description={t.support.description} />
        <section>
          <div className="container feature-grid">
            {t.support.actions.map((action) => (
              <article className="card" key={action}>
                <div className="card-body">
                  <h3>{action}</h3>
                  <p>{locale === "vi" ? "Liên hệ MyPalo để cùng thiết kế cách đồng hành phù hợp." : "Contact MyPalo to shape a partnership pathway that fits."}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}

export function PartnersPage({ locale }: { locale: Locale }) {
  const t = content[locale];
  return (
    <SiteLayout locale={locale} currentPath="/partners">
      <main>
        <PageHero
          eyebrow={locale === "vi" ? "Đối Tác" : "Partners"}
          title={locale === "vi" ? "Mạng lưới đối tác của MyPalo" : "MyPalo partner network"}
          description={locale === "vi" ? "Các đối tác cùng MyPalo mở rộng cơ hội học tập, kỹ năng và kết nối toàn cầu." : "Partners working with MyPalo to expand access to learning, skills, and global connections."}
        />
        <section>
          <div className="container partner-grid">
            {t.partners.map((partner) => (
              <article className="card" key={partner.name}>
                <div className="card-body">
                  <Image src={partner.logo} alt={partner.name} width={190} height={90} />
                  <h3>{partner.name}</h3>
                  <p>{partner.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}

export function NewsPage({ locale }: { locale: Locale }) {
  const t = content[locale];
  return (
    <SiteLayout locale={locale} currentPath="/news">
      <main>
        <PageHero
          eyebrow={locale === "vi" ? "Tin Tức" : "News"}
          title={locale === "vi" ? "Cập nhật từ MyPalo" : "Updates from MyPalo"}
          description={locale === "vi" ? "Tin tức chương trình, hoạt động đối tác và câu chuyện tác động." : "Program news, partner activities, and impact stories."}
        />
        <section>
          <div className="container news-grid">
            {t.news.map((article) => (
              <NewsCard key={article.slug} locale={locale} article={article} />
            ))}
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}

export function NewsDetailPage({ locale, slug }: { locale: Locale; slug: string }) {
  const t = content[locale];
  const article = t.news.find((item) => item.slug === slug);
  if (!article) notFound();

  return (
    <SiteLayout locale={locale} currentPath={`/news/${slug}`}>
      <main>
        <PageHero eyebrow={article.category} title={article.title} description={article.excerpt} />
        <section>
          <div className="container detail-layout">
            <article>
              <div className="media-frame">
                <Image src={article.featuredImage} alt={article.title} width={760} height={570} />
              </div>
              <div className="detail-body">
                {article.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
            <aside className="aside">
              <dl>
                <dt>{locale === "vi" ? "Tác giả" : "Author"}</dt>
                <dd>{article.author}</dd>
                <dt>{locale === "vi" ? "Ngày đăng" : "Publish date"}</dt>
                <dd>{article.publishDate}</dd>
                <dt>{locale === "vi" ? "Danh mục" : "Category"}</dt>
                <dd>{article.category}</dd>
              </dl>
            </aside>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}

export function ContactPage({ locale }: { locale: Locale }) {
  const t = content[locale];
  return (
    <SiteLayout locale={locale} currentPath="/contact">
      <main>
        <PageHero
          eyebrow={locale === "vi" ? "Liên Hệ" : "Contact"}
          title={locale === "vi" ? "Kết nối với MyPalo" : "Connect with MyPalo"}
          description={locale === "vi" ? "Trao đổi với đội ngũ MyPalo về chương trình, hợp tác hoặc hỗ trợ học viên." : "Talk to MyPalo about programs, partnerships, or learner support."}
        />
        <section>
          <div className="container detail-layout">
            <div className="copy">
              <h2>{locale === "vi" ? "Thông tin liên hệ" : "Contact details"}</h2>
              <p>{t.contact.email}</p>
              <p>{t.contact.phone}</p>
              {t.contact.addresses.map((address) => (
                <p key={address}>{address}</p>
              ))}
            </div>
            <aside className="aside">
              <h3>{locale === "vi" ? "Gửi yêu cầu" : "Send an inquiry"}</h3>
              <p>{locale === "vi" ? "Form liên hệ có thể được nối với Sanity hoặc dịch vụ CRM/email ở bước tích hợp tiếp theo." : "The contact form can be connected to Sanity or a CRM/email service in the next integration step."}</p>
              <Link className="button" href={`mailto:${t.contact.email}`}>
                {locale === "vi" ? "Email MyPalo" : "Email MyPalo"}
              </Link>
            </aside>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
