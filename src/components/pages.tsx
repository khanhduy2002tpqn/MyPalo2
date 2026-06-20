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
  const leaders = [
    {
      name: "Nguyễn Thị Kim Hồng",
      role: "Nhà sáng lập & Tổng Giám đốc",
      image: "/assets/photos/impact-1.jpg",
      bio: [
        "Trong suốt hai thập kỷ qua, chị Kim Hồng đã gắn bó sâu sắc với giáo dục và phát triển xã hội. Chị luôn đồng hành cùng hàng nghìn thanh thiếu niên Việt Nam trên hành trình xây dựng tương lai tự tin và bền vững.",
        "Trước khi sáng lập Mypalo, chị từng phụ trách các chương trình tạo tác động xã hội tại Việt Nam, kết nối nguồn lực quốc tế với các sáng kiến phát triển nhân lực địa phương."
      ]
    },
    {
      name: "Bà Minh Châu Nguyễn",
      role: "Giám đốc Phát triển Toàn cầu | Cố vấn Lãnh đạo",
      image: "/assets/photos/minh-chau.jpg",
      bio: [
        "Bà Minh Châu Nguyễn mang đến cho Mypalo hơn 25 năm kinh nghiệm lãnh đạo quốc tế, đặc biệt trong giáo dục và phát triển cộng đồng.",
        "Bà từng hợp tác cùng nhiều tổ chức lớn và hỗ trợ các chương trình dành cho thanh thiếu niên Việt Nam, tập trung vào năng lực lãnh đạo, tư duy toàn cầu và phát triển bền vững."
      ]
    },
    {
      name: "Bà Jocelyn Tran",
      role: "Doanh nhân & Lãnh đạo kinh doanh | Cố vấn Chiến lược",
      image: "/assets/photos/impact-2.jpg",
      bio: [
        "Bà Jocelyn Tran có hơn 35 năm kinh nghiệm trong lĩnh vực chuỗi cung ứng và điều hành doanh nghiệp tại Bắc Mỹ.",
        "Tại Mypalo, bà tham gia cố vấn chiến lược, đồng thời hỗ trợ xây dựng năng lực cho đội ngũ trẻ trong các chương trình khởi nghiệp và phát triển nghề nghiệp."
      ]
    },
    {
      name: "Bà Ngô Thị Hồng Hạnh",
      role: "Cố vấn Hành chính & Nhân sự",
      image: "/assets/photos/impact-3.jpg",
      bio: [
        "Bà Ngô Thị Hồng Hạnh tốt nghiệp ngành Quản trị Kinh doanh và có hơn 20 năm kinh nghiệm trong quản trị nhân sự.",
        "Bà hiện đồng hành cùng Mypalo trong việc xây dựng hệ thống vận hành, quy trình nhân sự và phát triển năng lực nội bộ."
      ]
    }
  ];
  const volunteers = [
    { name: "Lê Thị Ngọc Rinh", role: "CEO - Marketing", image: "/assets/photos/impact-1.jpg" },
    { name: "Dương Minh Hiếu", role: "Senior Engineer", image: "/assets/photos/tran-van-thanh.jpg" },
    { name: "Nguyễn Thị Nhật Tiến", role: "Communication Specialist", image: "/assets/photos/nhat-tien.jpeg" },
    { name: "Trần Văn Thành", role: "Marketing Specialist", image: "/assets/photos/tran-van-thanh.jpg" },
    { name: "Nguyễn Thị Hiếu Nhân", role: "Business Development", image: "/assets/photos/impact-2.jpg" },
    { name: "Võ Duy Gia Hân", role: "Marketing Executive", image: "/assets/photos/impact-3.jpg" },
    { name: "Trần Thị Phương Thảo", role: "Marketing Executive", image: "/assets/photos/impact-2.jpg" }
  ];
  const leadersEn = [
    {
      name: "Nguyen Thi Kim Hong",
      role: "Founder & CEO",
      image: "/assets/photos/impact-1.jpg",
      bio: [
        "For over two decades, Hong has dedicated her career to education and social development. She has helped thousands of young Vietnamese unlock their potential and build a proud future.",
        "Previously, she managed major social-impact and training programs in Vietnam, connecting international resources with local workforce development initiatives."
      ]
    },
    {
      name: "Ms. Minh Chau Nguyen",
      role: "Global Development Leader | Leadership Advisor",
      image: "/assets/photos/minh-chau.jpg",
      bio: [
        "Minh Chau Nguyen brings 25+ years of global leadership experience to Mypalo, especially in youth development and social impact.",
        "With degrees from the University of Washington and Harvard Business School, she supports learners with practical leadership, resilience, and global citizenship."
      ]
    },
    {
      name: "Ms. Jocelyn Tran",
      role: "Entrepreneur & Business Leader | Strategic Advisor",
      image: "/assets/photos/impact-2.jpg",
      bio: [
        "Ms. Jocelyn Tran has a trailblazing business career spanning North America and Southeast Asia, with deep expertise in operations and growth strategy.",
        "At Mypalo, she advises on curriculum and mentorship strategy to help young talent grow with sustainable systems."
      ]
    },
    {
      name: "Ngo Thi Hong Hanh",
      role: "Admin & HR advisor",
      image: "/assets/photos/impact-3.jpg",
      bio: [
        "She is a Business Administration graduate with 20 years of experience supporting C-level leadership and HR operations.",
        "Now, she brings organizational expertise and talent management experience to strengthen Mypalo's administrative foundation."
      ]
    }
  ];
  const volunteersEn = [
    { name: "Le Thi Ngoc Rinh", role: "CEO - Marketing", image: "/assets/photos/impact-1.jpg" },
    { name: "Duong Minh Hieu", role: "Senior Engineer", image: "/assets/photos/tran-van-thanh.jpg" },
    { name: "Nguyen Thi Nhat Tien", role: "Communication Specialist", image: "/assets/photos/nhat-tien.jpeg" },
    { name: "Tran Van Thanh", role: "Marketing Specialist", image: "/assets/photos/tran-van-thanh.jpg" },
    { name: "Nguyen Thi Hieu Nhan", role: "Business Development", image: "/assets/photos/impact-2.jpg" },
    { name: "Vo Duy Gia Han", role: "Marketing Executive", image: "/assets/photos/impact-3.jpg" },
    { name: "Tran Thi Phuong Thao", role: "Marketing Executive", image: "/assets/photos/impact-2.jpg" }
  ];

  if (locale === "vi") {
    return (
      <SiteLayout locale={locale} currentPath="/about">
        <main className="about-page">
          <section className="about-intro">
            <div className="container">
              <h1>Chúng Tôi Là Ai</h1>
              <p>{t.about.body[0]}</p>
              <p>{t.about.body[1]}</p>
              <p>{t.about.body[2]}</p>
              <p>{t.about.body[3]}</p>
            </div>
          </section>

          <section className="about-team">
            <div className="container">
              <h2>Gặp gỡ đội ngũ của chúng tôi</h2>
              <div className="about-leader-list">
                {leaders.map((leader, index) => (
                  <article className={`about-leader ${index % 2 === 1 ? "reverse" : ""}`} key={leader.name}>
                    <div className="about-leader-image">
                      <Image src={leader.image} alt={leader.name} width={440} height={300} />
                    </div>
                    <div className="about-leader-copy">
                      <h3>{leader.name}</h3>
                      <p className="about-leader-role">{leader.role}</p>
                      {leader.bio.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="about-volunteer">
            <div className="container">
              <h2>Gặp gỡ đội ngũ tình nguyện viên</h2>
              <p>
                Đội ngũ Mypalo đến từ nhiều lĩnh vực khác nhau, cùng làm việc vì mong muốn tạo ra giá trị tích cực cho cộng đồng.
              </p>
              <div className="about-volunteer-grid">
                {volunteers.map((member) => (
                  <article key={member.name}>
                    <Image src={member.image} alt={member.name} width={260} height={300} />
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>
      </SiteLayout>
    );
  }

  if (locale === "en") {
    return (
      <SiteLayout locale={locale} currentPath="/about">
        <main className="about-page">
          <section className="about-intro">
            <div className="container">
              <h1>Who We Are</h1>
              <p>{t.about.body[0]}</p>
              <p>{t.about.body[1]}</p>
              <p>{t.about.body[2]}</p>
            </div>
          </section>

          <section className="about-team">
            <div className="container">
              <h2>Meet Our Team</h2>
              <div className="about-leader-list">
                {leadersEn.map((leader, index) => (
                  <article className={`about-leader ${index % 2 === 1 ? "reverse" : ""}`} key={leader.name}>
                    <div className="about-leader-image">
                      <Image src={leader.image} alt={leader.name} width={440} height={300} />
                    </div>
                    <div className="about-leader-copy">
                      <h3>{leader.name}</h3>
                      <p className="about-leader-role">{leader.role}</p>
                      {leader.bio.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="about-volunteer">
            <div className="container">
              <p>
                Our executives lead by example and guide us to accomplish great things every day. With experience across industries, their breadth and depth of expertise enable us to solve problems, realize our vision, and better serve our customers and each other.
              </p>
              <div className="about-volunteer-grid">
                {volunteersEn.map((member) => (
                  <article key={member.name}>
                    <Image src={member.image} alt={member.name} width={260} height={300} />
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>
      </SiteLayout>
    );
  }

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
