import type { Locale, SiteContent } from "./types";

export const locales: Locale[] = ["vi", "en"];

export const localeLabels: Record<Locale, string> = {
  vi: "Tiếng Việt",
  en: "English"
};

export const content: Record<Locale, SiteContent> = {
  vi: {
    nav: [
      { label: "Trang Chủ", href: "/" },
      { label: "Về Chúng Tôi", href: "/about" },
      { label: "Chương Trình", href: "/programs" },
      { label: "Giảng Viên", href: "/instructors" },
      { label: "Tác Động", href: "/impact" },
      { label: "Đối Tác", href: "/partners" },
      { label: "Tin Tức", href: "/news" },
      { label: "Liên Hệ", href: "/contact" }
    ],
    cta: { label: "Hỗ Trợ Chúng Tôi", href: "/support" },
    hero: {
      eyebrow: "Khai mở tiềm năng của bạn cùng MyPalo",
      title: "Khai mở tiềm năng của bạn cùng MyPalo",
      description:
        "Unpack Your Potential. Unlock Your Future.",
      primaryCta: "Khám phá chương trình",
      secondaryCta: "Tìm hiểu MyPalo"
    },
    about: {
      title: "Câu chuyện của chúng tôi",
      body: [
        "Mypalo được thành lập bởi các chuyên gia giáo dục và các nhà lãnh đạo doanh nghiệp giàu kinh nghiệm trong việc phát triển nguồn nhân lực, nhân tài trên khắp Việt Nam. Đội ngũ sáng lập của chúng tôi mang một niềm tin vững chắc: khi được trao đúng công cụ và cơ hội tiếp cận, người trẻ Việt Nam có thể cạnh tranh và thành công ở bất kỳ đâu trên thế giới.",
        "Tiềm năng tồn tại ở khắp mọi nơi, nhưng cơ hội thì không.",
        "Chúng tôi tồn tại để thay đổi điều đó.",
        "Là một doanh nghiệp xã hội trong lĩnh vực EdTech, chúng tôi triển khai các chương trình giáo dục và phát triển nguồn nhân lực mà hiệu quả đã được kiểm chứng quốc tế thông qua các quan hệ đối tác chiến lược với Matera Alliance Inc. và Pacific Links Foundation."
      ],
      mission:
        "Khai mở tiềm năng của giới trẻ Việt Nam thông qua các chương trình chuẩn quốc tế giúp xác định hướng phát triển nghề nghiệp, nâng cao năng lực và xây dựng tương lai bền vững.",
      vision:
        "Một Việt Nam nơi mỗi cá nhân đều có cơ hội tiếp cận học tập và được trang bị năng lực cần thiết để phát triển an toàn, chủ động và lâu dài."
    },
    features: [
      {
        title: "Chuẩn mực quốc tế",
        description:
          "Tiếp cận tại Việt Nam. Trải nghiệm các chương trình học đạt chuẩn quốc tế ngay tại Việt Nam: từ bootcamp quốc tế, đội ngũ cố vấn đến từ Silicon Valley, chuyên gia giàu kinh nghiệm đến các chứng chỉ được công nhận toàn cầu."
      },
      {
        title: "Đối tác tin cậy",
        description:
          "Hiệu quả thực tế. MyPalo kết nối người học với các tổ chức và chuyên gia uy tín, giàu kinh nghiệm thực tiễn. Từ những doanh nhân tiêu biểu trong nước đến các lãnh đạo chuỗi cung ứng của Walmart và chuyên gia công nghệ tại Silicon Valley, MyPalo chọn lọc những đối tác phù hợp và mở ra cơ hội tiếp cận cho thanh thiếu niên Việt Nam."
      },
      {
        title: "Một nền tảng",
        description:
          "Lộ trình trọn vẹn. Tất cả những gì bạn cần đều có trong một hệ sinh thái duy nhất: các chương trình giáo dục mầm non đạt chứng nhận của Green Leaf, mạng lưới khởi nghiệp của PSET, nền tảng tạo tác động đã được kiểm chứng của GLOW và dữ liệu việc làm được xác thực từ PAXU®."
      }
    ],
    values: [
      {
        letter: "P",
        title: "Potential",
        description: "Mypalo đồng hành cùng người trẻ trong việc nhận diện thế mạnh và phát huy tối đa tiềm năng của bản thân."
      },
      {
        letter: "L",
        title: "Lifelong Learning",
        description: "Mypalo khuyến khích tinh thần học hỏi liên tục thông qua trải nghiệm và thực hành."
      },
      {
        letter: "A",
        title: "Aspiration",
        description: "Mypalo nuôi dưỡng khát vọng vươn lên và tinh thần dám thử của người trẻ với niềm tin và mục tiêu rõ ràng."
      },
      {
        letter: "O",
        title: "Opportunity",
        description:
          "Mypalo mở rộng cơ hội tiếp cận học tập, cố vấn, lộ trình nghề nghiệp và kết nối toàn cầu cho mọi thanh thiếu niên."
      }
    ],
    stats: [
      { value: "110K+", label: "Người lao động nâng cao kỹ năng" },
      { value: "4.000+", label: "Người học trên GLOW" },
      { value: "91%", label: "Kỹ năng tiếng Anh được cải thiện" },
      { value: "94%", label: "Mức độ hài lòng của học viên" }
    ],
    programs: [
      {
        title: "PSET - Chương trình thành công cùng tư duy doanh nhân",
        slug: "chuong-trinh-pset",
        category: "PSET",
        audience: "Trung học & Đại học",
        schedule: "14 tuần",
        language: "Tiếng Việt / English",
        thumbnail: "/assets/programs/pset.jpg",
        description:
          "Chương trình huấn luyện giúp học viên xây dựng tư duy doanh nhân qua thực hành, giải quyết vấn đề và cố vấn theo lộ trình rõ ràng.",
        registrationUrl: "/contact",
        roadmap: {
          summary:
            "PSET - Passport to Success Through Entrepreneurship được thiết kế để người học làm chủ tư duy khởi nghiệp và tự tin dẫn dắt tương lai.",
          stagesTitle: "Lộ trình 4 giai đoạn",
          stages: [
            {
              title: "Giai đoạn 1 - Nền tảng tư duy",
              description:
                "Nhận diện điểm mạnh, thiết lập tư duy chủ động và hiểu bối cảnh nghề nghiệp trong thời đại AI."
            },
            {
              title: "Giai đoạn 2 - Hình thành ý tưởng",
              description:
                "Xác định vấn đề thực tế, xây khung giải pháp và rèn kỹ năng làm việc nhóm."
            },
            {
              title: "Giai đoạn 3 - Thị trường & kinh doanh",
              description:
                "Kiểm chứng nhu cầu, xây mô hình khả thi và phát triển năng lực giao tiếp với khách hàng."
            },
            {
              title: "Giai đoạn 4 - Pitching & định hướng",
              description:
                "Hoàn thiện bài thuyết trình, nhận phản hồi từ mentor/chuyên gia và lập kế hoạch phát triển cá nhân."
            }
          ],
          outcomesTitle: "Kết quả đầu ra",
          outcomes: [
            "Hiểu bản thân và lựa chọn hướng phát triển phù hợp.",
            "Nắm yêu cầu doanh nghiệp và năng lực cần có cho công việc tương lai.",
            "Biết xây lộ trình học tập/nghề nghiệp cá nhân có thể đo lường.",
            "Nâng cao tư duy thích nghi và năng lực làm việc trong môi trường toàn cầu."
          ],
          featuresTitle: "Tính năng chương trình",
          features: [
            "Mentoring 1:1 và mentoring nhóm theo từng chặng.",
            "Expert advisory với chuyên gia doanh nghiệp và giáo dục.",
            "Đánh giá theo năng lực thực hành thay vì chỉ lý thuyết."
          ]
        }
      },
      {
        title: "Trại hè Khởi nghiệp & Lãnh đạo Quốc tế PSET 2026",
        slug: "trai-he-khoi-nghiep-lanh-dao-quoc-te-pset-2026",
        aliases: ["pset-global-entrepreneurship-leadership-bootcamp-2026"],
        category: "PSET",
        audience: "Trung học & Đại học",
        schedule: "Mùa hè 2026",
        language: "Tiếng Việt / English",
        thumbnail: "/assets/programs/pset.jpg",
        description:
          "Bootcamp quốc tế tại Đà Nẵng mang đến trải nghiệm quốc tế, tư duy toàn cầu và năng lực kiến tạo tương lai cho học viên.",
        registrationUrl: "/contact",
        roadmap: {
          summary:
            "Roadmap Bootcamp đi theo mạch Why -> Solutions -> Outcomes -> Tracks -> Agenda -> Mentors -> Registration để đảm bảo học viên có trải nghiệm trọn vẹn.",
          stagesTitle: "Roadmap triển khai Bootcamp",
          stages: [
            {
              title: "Why",
              description: "Làm rõ khoảng trống năng lực lãnh đạo, giải quyết vấn đề và hợp tác quốc tế của người học."
            },
            {
              title: "Solutions",
              description: "6 hoạt động trải nghiệm gồm teamwork sprint, design challenge, mentoring, pitching, reflection và demo day."
            },
            {
              title: "Outcomes",
              description: "Đo lường năng lực giao tiếp, lãnh đạo nhóm, tư duy doanh nhân và kỹ năng trình bày."
            },
            {
              title: "Tracks",
              description: "Phân luồng phù hợp theo nhóm đối tượng để tăng hiệu quả học tập."
            },
            {
              title: "Agenda timeline",
              description: "Timeline theo ngày với mục tiêu rõ ràng, cân bằng giữa học thuật và trải nghiệm."
            },
            {
              title: "Mentors & Registration",
              description: "Kết nối mentor, chia sẻ testimonial và chốt CTA đăng ký."
            }
          ],
          outcomesTitle: "Năng lực sau Bootcamp",
          outcomes: [
            "Lãnh đạo nhóm hiệu quả trong môi trường đa dạng.",
            "Biết biến ý tưởng thành mô hình hành động khả thi.",
            "Tự tin pitching và giao tiếp trước hội đồng chuyên gia."
          ],
          featuresTitle: "Tính năng nổi bật",
          features: [
            "Bài tập mô phỏng theo tình huống thực tế.",
            "Cố vấn xuyên suốt với chuyên gia trong và ngoài nước.",
            "Chứng nhận hoàn thành dựa trên chuẩn năng lực của chương trình."
          ]
        }
      },
      {
        title: "GLOW Online Learning Modules",
        slug: "glow-online-learning-modules",
        category: "GLOW",
        audience: "Thanh niên (13-24)",
        schedule: "linh hoạt",
        language: "Tiếng Việt / English",
        thumbnail: "/assets/programs/glow.jpg",
        description:
          "Các học phần trực tuyến giúp người trẻ nâng cao nhận thức, kỹ năng an toàn, tiếng Anh và năng lực nghề nghiệp.",
        registrationUrl: "/contact"
      },
      {
        title: "Factory Awareness to Counter Trafficking",
        slug: "factory-awareness-to-counter-trafficking",
        category: "FACT",
        audience: "Công Nhân & Quản Lý",
        schedule: "linh hoạt",
        language: "Tiếng Việt",
        thumbnail: "/assets/programs/fact.jpg",
        description:
          "Chương trình nâng cao nhận thức và kỹ năng an toàn cho người lao động, hỗ trợ môi trường làm việc bền vững."
      },
      {
        title: "PAXU® Mobile App",
        slug: "paxu-mobile-app",
        category: "PAXU",
        audience: "Thanh niên (13-24)",
        schedule: "linh hoạt",
        language: "Tiếng Việt / English",
        thumbnail: "/assets/programs/paxu.png",
        description:
          "Ứng dụng dữ liệu việc làm và định hướng phát triển giúp người trẻ hiểu kỹ năng, cơ hội và lộ trình nghề nghiệp."
      },
      {
        title: "Parenting & Teacher Workshops",
        slug: "parenting-teacher-workshops",
        category: "Green Leaf Discovery",
        audience: "Phụ huynh & Giáo viên",
        schedule: "linh hoạt",
        language: "Tiếng Việt",
        thumbnail: "/assets/programs/green-leaf.jpg",
        description:
          "Workshop dành cho phụ huynh và giáo viên nhằm tạo môi trường học tập chủ động, an toàn và giàu trải nghiệm cho trẻ."
      },
      {
        title: "Green Leaf Discovery Event",
        slug: "green-leaf-discovery-event",
        category: "Green Leaf Discovery",
        audience: "Trẻ Em (dưới 15 tuổi)",
        schedule: "2-3 giờ",
        language: "Tiếng Việt",
        thumbnail: "/assets/programs/green-leaf.jpg",
        description:
          "Sự kiện trải nghiệm cho trẻ em và gia đình thông qua hoạt động đọc sách, âm nhạc, khám phá khoa học và học tập chủ động."
      }
    ],
    instructors: [
      {
        name: "Ms. Minh Chau Nguyen",
        position: "Education Leader & Program Advisor",
        avatar: "/assets/photos/minh-chau.jpg",
        description:
          "Cố vấn chương trình với kinh nghiệm phát triển giáo dục, năng lực lãnh đạo và kết nối chương trình quốc tế."
      },
      {
        name: "Tran Van Thanh",
        position: "Entrepreneurship Mentor",
        avatar: "/assets/photos/tran-van-thanh.jpg",
        description:
          "Mentor đồng hành cùng học viên trong quá trình xây dựng ý tưởng, mô hình kinh doanh và kỹ năng trình bày."
      },
      {
        name: "Nguyen Thi Nhat Tien",
        position: "Youth Development Facilitator",
        avatar: "/assets/photos/nhat-tien.jpeg",
        description:
          "Điều phối viên phát triển thanh thiếu niên, tập trung vào trải nghiệm học tập, sự tự tin và kỹ năng thực hành."
      }
    ],
    partners: [
      {
        name: "Pacific Links Foundation",
        logo: "/assets/partners/pacific-links.webp",
        website: "https://pacificlinks.org",
        description: "Đối tác phát triển cộng đồng, kỹ năng và an toàn cho thanh thiếu niên và người lao động."
      },
      {
        name: "Matera Alliance Inc.",
        logo: "/assets/partners/matera.png",
        description:
          "Tổ chức có trụ sở tại Hoa Kỳ, đồng hành cùng thương hiệu toàn cầu và nhà máy tại Việt Nam về minh bạch chuỗi cung ứng và tuân thủ lao động có đạo đức."
      },
      {
        name: "ABA Cooltrans",
        logo: "/assets/partners/aba-transparent.png",
        description:
          "Đối tác doanh nghiệp tại Việt Nam, hỗ trợ kết nối thực tiễn vận hành và nâng cao năng lực cho đội ngũ quản lý và người lao động."
      },
      {
        name: "PAXU",
        logo: "/assets/partners/company-logo.png",
        description: "Nền tảng hỗ trợ dữ liệu việc làm, kỹ năng và định hướng cơ hội cho người trẻ."
      },
      {
        name: "Green Leaf",
        logo: "/assets/partners/horizontal-base.png",
        description: "Đối tác học tập sớm và trải nghiệm khám phá dành cho trẻ em và gia đình."
      }
    ],
    news: [
      {
        title: "P.SET Online Entrepreneurship Training",
        slug: "pset-online-entrepreneurship-training",
        featuredImage: "/assets/photos/impact-1.jpg",
        category: "Chương trình",
        author: "MyPalo Team",
        publishDate: "2026-06-15",
        excerpt:
          "Khai giảng tháng 9/2026, tập trung xây dựng tư duy doanh nhân và năng lực sẵn sàng nghề nghiệp.",
        content: [
          "Chương trình được xây dựng theo hướng thực hành, kết hợp cố vấn để học viên chuyển từ kiến thức lớp học sang năng lực ứng dụng.",
          "Thông tin tuyển sinh và lịch học được cập nhật trên trang Tin tức và trang Chương trình."
        ]
      },
      {
        title: "P.SET International Bootcamp",
        slug: "pset-bootcamp-2026-chuan-bi-tuyen-sinh",
        featuredImage: "/assets/photos/impact-2.jpg",
        category: "Chương trình",
        author: "PSET Team",
        publishDate: "2026-06-15",
        excerpt:
          "Khai giảng 08-13/07/2026 tại Đà Nẵng, giúp học viên tăng tốc năng lực lãnh đạo và hợp tác đa văn hóa.",
        content: [
          "Bootcamp triển khai cùng CampConnect của Pacific Links Foundation (USA) với mô hình học tập cường độ cao theo dự án.",
          "Người học tham gia mentor session, teamwork sprint và pitching để hoàn thiện năng lực thực chiến."
        ]
      }
    ],
    impact: {
      title: "Chúng tôi giúp bạn hình thành tư duy vững vàng và chủ động",
      description:
        "Mypalo cam kết tạo ra tác động xã hội tích cực và bền vững thông qua giáo dục, việc làm và trao quyền để người học tự tin kiến tạo tương lai.",
      testimonials: [
        {
          quote:
            "Nghe các anh chị lãnh đạo kể về hành trình của mình, từ lúc thất bại, lúc phải đổi hướng cho tới những gì rút ra được, lần đầu tiên em thấy việc kinh doanh rất đời và rất thật. Trước giờ em cứ nghĩ là phải giỏi sẵn, phải biết hết mọi thứ rồi mới làm được. Nhưng nghe các anh chị nói, em mới hiểu là việc biết thích nghi và dám học từ sai lầm cũng quan trọng không kém. Điều đó khiến em nghĩ rằng mình cũng có thể làm được.",
          source: "Học viên PSET"
        },
        {
          quote:
            "Bootcamp mở ra cho em một thế giới mới, nơi em học được kỹ năng lãnh đạo và làm việc cùng bạn bè từ nhiều nơi.",
          source: "Học viên Bootcamp"
        }
      ]
    },
    support: {
      title: "Hỗ trợ MyPalo mở rộng cơ hội học tập",
      description:
        "Sự đồng hành của đối tác, nhà tài trợ và chuyên gia giúp nhiều người trẻ hơn tiếp cận chương trình chất lượng.",
      actions: ["Tài trợ học bổng", "Đồng tổ chức chương trình", "Trở thành mentor", "Kết nối cơ hội thực tập"]
    },
    contact: {
      email: "info@mypalo1.com",
      phone: "(+84) 935 371 423",
      addresses: ["222 Điện Biên Phủ, Xuân Hòa, TP. Hồ Chí Minh", "167 Phan Châu Trinh, Hải Châu, Đà Nẵng"]
    }
  },
  en: {
    nav: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Programs", href: "/programs" },
      { label: "Instructors", href: "/instructors" },
      { label: "Our Impact", href: "/impact" },
      { label: "Partners", href: "/partners" },
      { label: "News", href: "/news" },
      { label: "Contact", href: "/contact" }
    ],
    cta: { label: "Support Us", href: "/support" },
    hero: {
      eyebrow: "Unpack your potential with MyPalo",
      title: "Unpack Your Potential. Unlock Your Future.",
      description:
        "MyPalo connects Vietnamese youth with international-standard education, mentorship, and career-building opportunities.",
      primaryCta: "Explore programs",
      secondaryCta: "About MyPalo"
    },
    about: {
      title: "Our Story",
      body: [
        "Mypalo is an EdTech social enterprise committed to bridging learning and real-world opportunity.",
        "By partnering with leading local and international organizations, we deliver education and employment solutions for youth, workers, and vulnerable groups.",
        "Our long-term field experience in Vietnam helps us design locally relevant programs while maintaining international standards."
      ],
      mission:
        "To unlock the potential of Vietnamese youth through international-standard programs that clarify career direction, build capability, and support sustainable futures.",
      vision:
        "A Vietnam where every individual has access to learning and the capabilities needed to grow safely, proactively, and sustainably."
    },
    features: [
      {
        title: "International standards",
        description:
          "Accessible in Vietnam. Experience international-standard programs, from global bootcamps and Silicon Valley mentors to experienced experts and recognized credentials."
      },
      {
        title: "Trusted partners",
        description:
          "Real-world effectiveness. MyPalo connects learners with trusted organizations and experienced practitioners in Vietnam and abroad."
      },
      {
        title: "One platform",
        description:
          "A complete pathway. Everything learners need in one ecosystem: Green Leaf, PSET, GLOW, and employment data from PAXU."
      }
    ],
    values: [
      { letter: "P", title: "Potential", description: "Helping young people recognize strengths and grow their potential." },
      { letter: "L", title: "Lifelong Learning", description: "Encouraging continuous learning through experience and practice." },
      { letter: "A", title: "Aspiration", description: "Nurturing ambition, courage, and a clear sense of purpose." },
      { letter: "O", title: "Opportunity", description: "Expanding access to learning, mentorship, and global connection." }
    ],
    stats: [
      { value: "110K+", label: "Workers upskilled" },
      { value: "4,000+", label: "Learners on GLOW" },
      { value: "91%", label: "Improved English skills" },
      { value: "94%", label: "Learner satisfaction" }
    ],
    programs: [
      {
        title: "PSET Online Training",
        slug: "pset-online-training",
        category: "PSET",
        audience: "High school & university",
        schedule: "14 weeks",
        language: "Vietnamese / English",
        thumbnail: "/assets/programs/pset.jpg",
        description:
          "A structured training program that helps learners build entrepreneurial thinking through practice, mentoring, and measurable milestones.",
        registrationUrl: "/en/contact",
        roadmap: {
          summary:
            "The roadmap addresses employability gaps and equips learners to move from awareness to action with real-world practice.",
          stagesTitle: "4-phase learning roadmap",
          stages: [
            {
              title: "Phase 1 - Foundation",
              description: "Build proactive mindset, self-awareness, and future-ready thinking."
            },
            {
              title: "Phase 2 - Problem framing",
              description: "Identify practical challenges and shape solution hypotheses in teams."
            },
            {
              title: "Phase 3 - Market & business",
              description: "Validate market needs, design business logic, and improve stakeholder communication."
            },
            {
              title: "Phase 4 - Pitching & pathway",
              description: "Present solutions, receive mentor feedback, and define next personal development steps."
            }
          ],
          outcomesTitle: "Program outcomes",
          outcomes: [
            "Clearer self-understanding and career direction.",
            "Better alignment with enterprise expectations.",
            "Ability to build measurable personal learning/career plans.",
            "Stronger adaptability and global mindset."
          ],
          featuresTitle: "Program features",
          features: [
            "1:1 and group mentoring throughout the journey.",
            "Expert advisory from education and industry practitioners.",
            "Competency-based evaluation focused on practical delivery."
          ]
        }
      },
      {
        title: "PSET Global Entrepreneurship & Leadership Bootcamp 2026",
        slug: "pset-global-entrepreneurship-leadership-bootcamp-2026",
        category: "PSET",
        audience: "High school & university",
        schedule: "2026",
        language: "Vietnamese / English",
        thumbnail: "/assets/programs/pset.jpg",
        description:
          "An international bootcamp helping learners build entrepreneurial thinking, leadership, presentation skills, and global mentorship connections.",
        registrationUrl: "/en/contact",
        roadmap: {
          summary:
            "Bootcamp roadmap follows Why -> Solutions -> Outcomes -> Tracks -> Agenda -> Mentors -> Registration for a complete learner journey.",
          stagesTitle: "Bootcamp roadmap flow",
          stages: [
            {
              title: "Why",
              description: "Define current capability gaps in leadership, collaboration, and global communication."
            },
            {
              title: "Solutions",
              description: "Deliver 6 experiential activities: team sprint, design challenge, mentoring, pitching, reflection, and demo day."
            },
            {
              title: "Outcomes",
              description: "Measure leadership, entrepreneurial thinking, teamwork, and communication outcomes."
            },
            {
              title: "Tracks",
              description: "Provide learner tracks tailored to age and readiness."
            },
            {
              title: "Agenda timeline",
              description: "Run a day-by-day agenda with explicit goals and output checkpoints."
            },
            {
              title: "Mentors & registration",
              description: "Show mentor profiles, testimonials, and clear enrollment CTA."
            }
          ],
          outcomesTitle: "Expected outcomes",
          outcomes: [
            "Lead and collaborate effectively in multicultural teams.",
            "Turn ideas into executable initiatives.",
            "Pitch confidently to experts and stakeholders."
          ],
          featuresTitle: "Key bootcamp features",
          features: [
            "Simulation-based tasks anchored in real scenarios.",
            "Continuous mentoring from local and international experts.",
            "Completion certificate mapped to competency outcomes."
          ]
        }
      },
      {
        title: "GLOW Online Learning Modules",
        slug: "glow-online-learning-modules",
        category: "GLOW",
        audience: "Youth 13-24",
        schedule: "Flexible",
        language: "Vietnamese / English",
        thumbnail: "/assets/programs/glow.jpg",
        description:
          "Online modules that help youth build awareness, safety skills, English skills, and career capability.",
        registrationUrl: "/en/contact"
      },
      {
        title: "Factory Awareness to Counter Trafficking",
        slug: "factory-awareness-to-counter-trafficking",
        category: "FACT",
        audience: "Workers & managers",
        schedule: "Flexible",
        language: "Vietnamese",
        thumbnail: "/assets/programs/fact.jpg",
        description:
          "A workplace awareness and safety program supporting workers and sustainable working environments."
      },
      {
        title: "PAXU Mobile App",
        slug: "paxu-mobile-app",
        category: "PAXU",
        audience: "Youth 13-24",
        schedule: "Flexible",
        language: "Vietnamese / English",
        thumbnail: "/assets/programs/paxu.png",
        description:
          "An employment-data and career-orientation app helping youth understand skills, opportunities, and pathways."
      },
      {
        title: "Parenting & Teacher Workshops",
        slug: "parenting-teacher-workshops",
        category: "Green Leaf Discovery",
        audience: "Parents & teachers",
        schedule: "Flexible",
        language: "Vietnamese",
        thumbnail: "/assets/programs/green-leaf.jpg",
        description:
          "Workshops for parents and teachers to create active, safe, and experience-rich learning environments for children."
      },
      {
        title: "Green Leaf Discovery Event",
        slug: "green-leaf-discovery-event",
        category: "Green Leaf Discovery",
        audience: "Children under 15",
        schedule: "2-3 hours",
        language: "Vietnamese",
        thumbnail: "/assets/programs/green-leaf.jpg",
        description:
          "A family learning experience with reading, music, science exploration, and active discovery for children."
      }
    ],
    instructors: [
      {
        name: "Ms. Minh Chau Nguyen",
        position: "Education Leader & Program Advisor",
        avatar: "/assets/photos/minh-chau.jpg",
        description:
          "Program advisor experienced in education development, leadership capability, and international program connection."
      },
      {
        name: "Tran Van Thanh",
        position: "Entrepreneurship Mentor",
        avatar: "/assets/photos/tran-van-thanh.jpg",
        description:
          "Mentor supporting learners as they shape ideas, business models, and presentation confidence."
      },
      {
        name: "Nguyen Thi Nhat Tien",
        position: "Youth Development Facilitator",
        avatar: "/assets/photos/nhat-tien.jpeg",
        description:
          "Youth development facilitator focused on learning experience, confidence, and practical skills."
      }
    ],
    partners: [
      {
        name: "Pacific Links Foundation",
        logo: "/assets/partners/pacific-links.webp",
        website: "https://pacificlinks.org",
        description: "A partner in community development, skills, and safety for youth and workers."
      },
      {
        name: "Matera Alliance Inc.",
        logo: "/assets/partners/matera.png",
        description:         "A U.S.-based organization working with global brands and factories in Vietnam to strengthen supply-chain transparency and ethical labor compliance."
      },
      {
        name: "ABA Cooltrans",
        logo: "/assets/partners/aba-transparent.png",
        description:
        "A Vietnam-based corporate partner connecting operational practice with workforce capability development and community-focused initiatives."
      },
      {
        name: "PAXU",
        logo: "/assets/partners/company-logo.png",
        description: "A platform supporting employment data, skills, and opportunity orientation for youth."
      },
      {
        name: "Green Leaf",
        logo: "/assets/partners/horizontal-base.png",
        description: "An early learning and discovery partner for children and families."
      }
    ],
    news: [
      {
        title: "P.SET Online Entrepreneurship Training",
        slug: "mypalo-expands-capability-building-programs-for-youth",
        featuredImage: "/assets/photos/impact-1.jpg",
        category: "Programs",
        author: "MyPalo Team",
        publishDate: "2026-06-15",
        excerpt:
          "Starting September 2026, focused on entrepreneurial mindset and workforce readiness.",
        content: [
          "The program combines practical activities and mentorship to help learners turn classroom knowledge into actionable capability.",
          "Enrollment and schedule details are updated on the News and Programs pages."
        ]
      },
      {
        title: "P.SET International Bootcamp",
        slug: "pset-bootcamp-2026-prepares-for-enrollment",
        featuredImage: "/assets/photos/impact-2.jpg",
        category: "Programs",
        author: "PSET Team",
        publishDate: "2026-06-15",
        excerpt:
          "Starting July 8-13, 2026 in Da Nang with intensive leadership and multicultural teamwork experiences.",
        content: [
          "The bootcamp is delivered with CampConnect by Pacific Links Foundation (USA) in a project-based format.",
          "Learners join mentor sessions, teamwork sprints, and pitching activities to build real-world confidence."
        ]
      }
    ],
    impact: {
      title: "We help learners build a grounded and proactive mindset",
      description:
        "Mypalo creates long-term positive social impact through education, employment, and empowerment so individuals can shape their own future and uplift their communities.",
      testimonials: [
        {
          quote:
            "PSET mentorship helped me ask better questions, refine ideas, and present with confidence.",
          source: "PSET learner"
        },
        {
          quote:
            "The bootcamp opened a new world where I learned leadership and worked with peers from many places.",
          source: "Bootcamp learner"
        }
      ]
    },
    support: {
      title: "Support MyPalo in expanding learning access",
      description:
        "Partners, sponsors, and experts help more young people access high-quality programs.",
      actions: ["Sponsor scholarships", "Co-host programs", "Become a mentor", "Connect internship opportunities"]
    },
    contact: {
      email: "info@mypalo1.com",
      phone: "(+84) 935 371 423",
      addresses: ["222 Dien Bien Phu, Xuan Hoa, Ho Chi Minh City", "167 Phan Chau Trinh, Hai Chau, Da Nang"]
    }
  }
};

export function withLocale(locale: Locale, href: string) {
  if (href.startsWith("http")) return href;
  if (locale === "vi") return href;
  return href === "/" ? "/en" : `/en${href}`;
}

export function alternateLocalePath(locale: Locale, path = "/") {
  if (locale === "vi") return path === "/" ? "/en" : `/en${path}`;
  return path.replace(/^\/en/, "") || "/";
}
