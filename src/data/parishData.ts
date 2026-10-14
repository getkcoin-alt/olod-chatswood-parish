export interface MassTimeItem {
  day: string;
  time: string;
  label: string;
  notes?: string;
  language?: string;
}

export interface MinistryItem {
  id: string;
  title: string;
  category: 'families' | 'youth' | 'faith' | 'prayer' | 'service' | 'seniors' | 'cultural';
  categoryLabel: string;
  description: string;
  targetAudience: string;
  meetingTime: string;
  contactEmail: string;
  isVerified: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  category: 'Liturgical' | 'Community' | 'Youth' | 'Formation' | 'Cultural';
  date: string;
  time: string;
  location: string;
  description: string;
  isDemonstration: boolean;
  registrationUrl?: string;
}

export const PARISH_INFO = {
  name: 'Our Lady of Dolours Catholic Parish',
  subName: 'Chatswood, Sydney NSW',
  tagline: 'A Place to Belong. A Community of Faith.',
  motto: 'Bringing the Light of Christ to the City',
  address: '94 Archer Street, Chatswood NSW 2067, Australia',
  postalAddress: 'PO Box 1446, Chatswood NSW 2057',
  schoolAddress: '94A Archer Street, Chatswood NSW 2067',
  phone: '(02) 9410 9000',
  email: 'chatswoodoffice@bbcatholic.org.au',
  officeHours: 'Monday – Friday: 9:00 am – 4:00 pm',
  diocese: 'Catholic Diocese of Broken Bay',
  bishop: 'Most Rev Anthony Randazzo DD JCL',
  clergy: [
    {
      name: 'Very Rev Dr David Ranson VG',
      role: 'Parish Priest & Vicar General',
      notes: 'Leading pastoral care and community life across Chatswood',
    },
    {
      name: 'Rev Fr Marek Armstrong',
      role: 'Assistant Priest',
      notes: 'Liturgical coordination, sacramental ministry and youth outreach',
    },
    {
      name: 'Rev Fr Biju Jose',
      role: 'Assistant Priest',
      notes: 'Hospital chaplaincy and community visitation',
    },
    {
      name: 'Deacon Roberto Corpuz',
      role: 'Permanent Deacon',
      notes: 'Diaconal service, baptismal preparation and caritas care',
    },
  ],
  socials: {
    facebook: 'https://www.facebook.com/OurLadyOfDoloursChatswood',
    youtube: 'https://www.youtube.com/@olodchatswood',
    instagram: 'https://www.instagram.com/olodchatswood',
    dioceseUrl: 'https://www.bbcatholic.org.au/chatswood',
  },
  lastScheduleVerification: 'October 2026 (Diocese of Broken Bay directory verified)',
};

export const MASS_SCHEDULE: {
  weekdays: MassTimeItem[];
  weekends: MassTimeItem[];
  cultural: MassTimeItem[];
  reconciliation: MassTimeItem[];
  devotions: MassTimeItem[];
} = {
  weekdays: [
    { day: 'Monday', time: '12:30 pm', label: 'Midday Mass', notes: 'Preceded by Divine Mercy at 11:30 am and Rosary at 11:45 am' },
    { day: 'Tuesday', time: '9:00 am', label: 'Morning Mass', notes: 'Preceded by Morning Prayer at 8:45 am' },
    { day: 'Tuesday', time: '12:30 pm', label: 'Midday Mass' },
    { day: 'Wednesday', time: '9:00 am', label: 'Morning Mass', notes: 'Preceded by Morning Prayer at 8:45 am' },
    { day: 'Wednesday', time: '12:30 pm', label: 'Midday Mass' },
    { day: 'Thursday', time: '9:00 am', label: 'Morning Mass', notes: 'Followed by Exposition of the Blessed Sacrament until 12:00 pm' },
    { day: 'Thursday', time: '12:30 pm', label: 'Midday Mass' },
    { day: 'Friday', time: '9:00 am', label: 'Morning Mass', notes: 'Preceded by Morning Prayer at 8:45 am' },
    { day: 'Friday', time: '12:30 pm', label: 'Midday Mass' },
  ],
  weekends: [
    { day: 'Saturday', time: '9:00 am', label: 'Saturday Morning Mass', notes: 'Followed by Adoration and Confession until 10:30 am' },
    { day: 'Saturday', time: '5:30 pm', label: 'Saturday Vigil Mass', notes: 'First Sunday obligation Mass with full parish choir' },
    { day: 'Sunday', time: '7:30 am', label: 'Early Morning Mass', notes: 'Quiet contemplative liturgy' },
    { day: 'Sunday', time: '9:00 am', label: 'Family Mass', notes: 'Includes Children’s Liturgy of the Word during school terms' },
    { day: 'Sunday', time: '10:30 am', label: 'Solemn Parish Mass', notes: 'Choral hymns and organ accompaniment' },
    { day: 'Sunday', time: '5:30 pm', label: 'Youth & Young Adult Mass', notes: 'Contemporary worship music and youth ministry fellowship after Mass' },
  ],
  cultural: [
    { day: '1st Sunday of Month', time: '12:00 pm', label: 'Filipino Mass', language: 'Tagalog & English', notes: 'Followed by community fellowship in St Peter Hall' },
    { day: '3rd Sunday of Month', time: '12:00 pm', label: 'Indonesian Catholic Community Mass', language: 'Bahasa Indonesia & English' },
    { day: 'Monthly / Special Liturgies', time: 'Consult Calendar', label: 'Chinese Catholic Association Liturgies', language: 'Cantonese & Mandarin', notes: 'Bilingual readings and devotional prayers organized by the CCA' },
  ],
  reconciliation: [
    { day: 'Thursday', time: '7:00 pm – 8:00 pm', label: 'Holy Hour & Confession', notes: 'During quiet Adoration' },
    { day: 'Saturday', time: '9:30 am – 10:30 am', label: 'Sacrament of Reconciliation', notes: 'Two priests available in reconciliation rooms' },
    { day: 'By Appointment', time: 'Flexible', label: 'Personal Reconciliation', notes: 'Contact the Parish Office at (02) 9410 9000' },
  ],
  devotions: [
    { day: 'Tuesday – Saturday', time: '8:45 am', label: 'Morning Prayer of the Church', notes: 'Liturgy of the Hours in the main church' },
    { day: 'Monday – Saturday', time: '11:30 am', label: 'Divine Mercy Chaplet' },
    { day: 'Monday – Saturday', time: '11:45 am', label: 'Holy Rosary', notes: 'Community recitation before the 12:30 pm Mass' },
    { day: 'Thursday', time: '9:30 am – 12:00 pm', label: 'Eucharistic Adoration', notes: 'Benediction at 12:00 pm' },
    { day: 'Saturday', time: '10:00 am', label: 'Novena to Our Lady of Perpetual Help', notes: 'Followed by Benediction at 10:30 am' },
  ],
};

export const MINISTRIES_DATA: MinistryItem[] = [
  {
    id: 'children-liturgy',
    title: 'Children’s Liturgy of the Word',
    category: 'families',
    categoryLabel: 'Families & Children',
    description: 'During the 9:00 am Sunday Mass during school terms, primary school aged children gather to explore the Sunday readings at their own level.',
    targetAudience: 'Ages 4 to 11 and young families',
    meetingTime: 'Sundays at 9:00 am (School terms)',
    contactEmail: 'chatswoodoffice@bbcatholic.org.au',
    isVerified: true,
  },
  {
    id: 'youth-young-adults',
    title: 'Chatswood Catholic Youth & Young Adults',
    category: 'youth',
    categoryLabel: 'Youth & Young Adults',
    description: 'Dynamic faith community connecting high schoolers, uni students and young professionals through monthly gatherings, retreats and Sunday fellowship.',
    targetAudience: 'Youth (13–18) and Young Adults (18–35)',
    meetingTime: 'Alternate Sundays after 5:30 pm Mass',
    contactEmail: 'youth@olodchatswood.org',
    isVerified: true,
  },
  {
    id: 'chinese-catholic-association',
    title: 'Chinese Catholic Association (CCA)',
    category: 'cultural',
    categoryLabel: 'Cultural Communities',
    description: 'A welcoming, supportive Catholic fellowship serving Cantonese and Mandarin-speaking parishioners, fostering faith, family bonds and cultural heritage within the parish.',
    targetAudience: 'Chinese-speaking parishioners, newcomers, and their families',
    meetingTime: 'Monthly gatherings, Friday scripture circles & liturgical feasts',
    contactEmail: 'cca@olodchatswood.org',
    isVerified: true,
  },
  {
    id: 'rcia-faith-formation',
    title: 'RCIA – Journey into the Catholic Faith',
    category: 'faith',
    categoryLabel: 'Faith Formation',
    description: 'A warm, open process for adults inquiring about Catholicism, seeking baptism, or wishing to complete their sacraments of Confirmation and Eucharist.',
    targetAudience: 'Adult inquirers, seekers, and returning Catholics',
    meetingTime: 'Weekly Tuesday evenings (7:30 pm)',
    contactEmail: 'rcia@olodchatswood.org',
    isVerified: true,
  },
  {
    id: 'parish-choir-music',
    title: 'Liturgical Choir & Musicians',
    category: 'prayer',
    categoryLabel: 'Prayer & Worship',
    description: 'Serving the parish through sacred choral music, cantoring and contemporary liturgical instruments across weekend liturgies.',
    targetAudience: 'Singers, cantors and instrumentalists of all experience levels',
    meetingTime: 'Rehearsals Thursdays at 7:30 pm',
    contactEmail: 'music@olodchatswood.org',
    isVerified: true,
  },
  {
    id: 'vinnies-st-vincent-de-paul',
    title: 'St Vincent de Paul Society (Vinnies)',
    category: 'service',
    categoryLabel: 'Community Care & Outreach',
    description: 'Providing direct compassionate assistance, food vouchers, winter appeals and pastoral support to individuals and families experiencing hardship in Chatswood.',
    targetAudience: 'Parishioners passionate about social justice and helping the needy',
    meetingTime: 'Fortnightly Monday meetings',
    contactEmail: 'vinnies@olodchatswood.org',
    isVerified: true,
  },
  {
    id: 'pastoral-care-seniors',
    title: 'Pastoral Care & Homebound Visitation',
    category: 'seniors',
    categoryLabel: 'Seniors & Pastoral Care',
    description: 'Extraordinary Ministers of Holy Communion visit local nursing homes and bring the Eucharist and friendship to the sick and homebound parishioners.',
    targetAudience: 'Seniors, isolated parishioners, and volunteer pastoral visitors',
    meetingTime: 'Weekly visits and monthly morning tea',
    contactEmail: 'care@olodchatswood.org',
    isVerified: true,
  },
];

export const EVENTS_DATA: EventItem[] = [
  {
    id: 'parish-welcoming-sunday',
    title: 'New Parishioners Welcoming Morning Tea',
    category: 'Community',
    date: 'Sunday, 26 October 2026',
    time: '10:00 am – 11:30 am',
    location: 'St Peter Parish Hall (adjacent to Church)',
    description: 'Are you new to Chatswood or Our Lady of Dolours? Join Fr David, parish clergy, and community coordinators for coffee, fresh pastries, and friendly conversation.',
    isDemonstration: false,
  },
  {
    id: 'cca-fellowship-gathering',
    title: 'Chinese Catholic Association Faith & Culture Circle',
    category: 'Cultural',
    date: 'Saturday, 1 November 2026',
    time: '2:00 pm – 4:30 pm',
    location: 'Magnificat Meeting Rooms, Parish Centre',
    description: 'Bilingual gospel sharing (Cantonese/Mandarin & English), seasonal reflections, family afternoon tea and planning for upcoming community outreach.',
    isDemonstration: false,
    registrationUrl: '/chinese-catholic-association',
  },
  {
    id: 'adoration-holy-hour',
    title: 'Solemn Thursday Holy Hour of Mercy & Peace',
    category: 'Liturgical',
    date: 'Thursday, 29 October 2026',
    time: '7:00 pm – 8:00 pm',
    location: 'Main Church Sanctuary',
    description: 'A reflective hour of silent Eucharistic adoration, contemplative sacred music, and individual reconciliation with the priests of the parish.',
    isDemonstration: false,
  },
  {
    id: 'youth-encounter-night',
    title: 'Chatswood Youth Encounter Night',
    category: 'Youth',
    date: 'Sunday, 8 November 2026',
    time: '6:45 pm – 8:30 pm',
    location: 'Youth Lounge & Courtyard',
    description: 'Following the 5:30 pm Youth Mass: dinner, interactive faith talk on navigating modern life, praise & worship, and table discussions for ages 15–30.',
    isDemonstration: false,
  },
  {
    id: 'sacramental-prep-info',
    title: '2027 Children’s Sacraments Information Evening',
    category: 'Formation',
    date: 'Wednesday, 18 November 2026',
    time: '7:00 pm – 8:15 pm',
    location: 'Our Lady of Dolours Church & Live Streamed',
    description: 'Parents of children in Year 3 and above are warmly invited to learn about the parish preparation pathways for Reconciliation, First Holy Communion, and Confirmation.',
    isDemonstration: true,
  },
];

export const CCA_TRANSLATIONS = {
  en: {
    badge: 'Parish Cultural Ministry',
    title: 'Chinese Catholic Association',
    subtitle: 'A warm, faithful spiritual home for Chinese-speaking Catholics and families in the heart of Chatswood.',
    introTitle: 'Welcome from the CCA Coordinator & Community',
    introText:
      'The Chinese Catholic Association (CCA) at Our Lady of Dolours is a vibrant, supportive fellowship rooted in Catholic faith and rich heritage. We bring together Cantonese and Mandarin speakers, cross-cultural families, international students and newcomers to Sydney. Whether you are exploring faith for the first time, seeking fellowship in your mother tongue, or looking to serve with your family, our doors and hearts are open.',
    activitiesTitle: 'Our Community Life & Gatherings',
    activities: [
      {
        title: 'Bilingual Liturgies & Prayer',
        desc: 'Regular Scripture sharing circles, Holy Rosary devotions and liturgical support during parish celebrations.',
      },
      {
        title: 'Chinese RCIA & Faith Inquirers',
        desc: 'Dedicated faith journey for adults interested in knowing Jesus Christ and the Catholic tradition, conducted in Cantonese and Mandarin.',
      },
      {
        title: 'Family & Seniors Fellowship',
        desc: 'Intergenerational community teas, seasonal celebration banquets (Lunar New Year Mass, Mid-Autumn thanksgiving), and pastoral care for older members.',
      },
      {
        title: 'Multicultural Parish Integration',
        desc: 'Working closely with Fr David and the wider parish pastoral council to foster communion across all cultural backgrounds.',
      },
    ],
    getInvolvedTitle: 'Connect with the CCA Coordinator',
    getInvolvedSubtitle: 'We would love to welcome you in person. Send an inquiry or introduce yourself before attending.',
    formName: 'Your Full Name',
    formEmail: 'Email Address',
    formPhone: 'Phone Number (Optional)',
    formDialect: 'Preferred Language / Dialect',
    dialectOptions: ['Cantonese (廣東話)', 'Mandarin (普通話)', 'English', 'Both Chinese & English'],
    formMessage: 'How can we help or welcome you?',
    formSubmit: 'Send Inquiry to CCA Team',
  },
  zh_CN: {
    badge: '堂区多元文化事工',
    title: '华人天主教联谊会 (CCA)',
    subtitle: '悉尼车士活 (Chatswood) 圣母七苦堂区 — 华人教友与家庭温暖的信仰家园。',
    introTitle: '联谊会协调人及全体同道热忱欢迎您',
    introText:
      '车士活圣母七苦堂华人天主教联谊会 (CCA) 是一个根植于天主教传统与中华文化的温暖大家庭。我们汇聚了使用普通话和粤语的教友、多元文化家庭、留学生以及新抵悉尼的移民。无论您是初次探寻天主教信仰、渴望在母语环境中聆听圣言与祈祷，还是期望全家融入堂区，我们都诚挚欢迎您的到来。',
    activitiesTitle: '团体生活与定期活动',
    activities: [
      {
        title: '双语礼仪与圣经分享',
        desc: '定期举行粤语及普通话圣经分享小组、玫瑰经敬礼，并积极协办堂区重要节庆弥撒。',
      },
      {
        title: '成人慕道班 (RCIA)',
        desc: '为渴望认识耶稣基督、加入天主教会的成年朋友开设的华语慕道班，提供耐心的信仰陪伴。',
      },
      {
        title: '家庭与长者关怀',
        desc: '促进跨世代共融，举办农历新春感恩弥撒、中秋团圆活动，并关顾堂区年长及病弱会员。',
      },
      {
        title: '多元共融·光照都市',
        desc: '在主任司铎与堂区牧灵委员会指引下，促进华人团体与多元文化堂区的大共融。',
      },
    ],
    getInvolvedTitle: '联系华人天主教联谊会',
    getInvolvedSubtitle: '我们非常期待与您相识！请填写下方表格，我们将有专人与您联络。',
    formName: '您的姓名',
    formEmail: '电子邮箱',
    formPhone: '联系电话 (选填)',
    formDialect: '常用语言 / 方言',
    dialectOptions: ['普通话', '粤语 (廣東話)', '英语', '中英双语'],
    formMessage: '留言或咨询内容',
    formSubmit: '提交咨询致 CCA 团队',
  },
  zh_TW: {
    badge: '堂區多元文化事工',
    title: '華人天主教聯誼會 (CCA)',
    subtitle: '雪梨車士活 (Chatswood) 聖母七苦堂區 — 華人教友與家庭溫暖的信仰家園。',
    introTitle: '聯誼會協調人及全體同道熱忱歡迎您',
    introText:
      '車士活聖母七苦堂華人天主教聯誼會 (CCA) 是一個植根於天主教傳統與中華文化的溫暖大家庭。我們匯聚了使用粵語與普通話的教友、跨文化家庭、留學生以及新抵雪梨的移民。無論您是初次探尋天主教信仰、渴望在母語環境中聆聽聖言與祈禱，還是期望全家融入堂區，我們都誠摯歡迎您的到來。',
    activitiesTitle: '團體生活與定期活動',
    activities: [
      {
        title: '雙語禮儀與聖言研習',
        desc: '定期舉行粵語及國語聖經分享小組、玫瑰經敬禮，並積極協辦堂區重要節慶禮儀。',
      },
      {
        title: '成人慕道班 (RCIA)',
        desc: '為渴望認識耶穌基督、加入天主教會的成年朋友開設的華語慕道班，提供溫暖悉心的信仰陪伴。',
      },
      {
        title: '家庭與長者關顧',
        desc: '促進跨世代共融，舉辦農曆新春感恩彌撒、中秋團圓聚會，並關懷堂區年長及病弱會員。',
      },
      {
        title: '多元共融·光照都市',
        desc: '在主任司鐸與堂區牧靈委員會指導下，促進華人團體與多元文化堂區的共融協作。',
      },
    ],
    getInvolvedTitle: '聯繫華人天主教聯誼會',
    getInvolvedSubtitle: '我們非常期待與您相識！請填寫下方表格，聯誼會將有專人與您聯絡。',
    formName: '您的姓名',
    formEmail: '電子郵件',
    formPhone: '聯絡電話 (選填)',
    formDialect: '常用語言 / 方言',
    dialectOptions: ['粵語 (廣東話)', '國語 / 普通話', '英語', '中英雙語'],
    formMessage: '留言或諮詢內容',
    formSubmit: '送出諮詢致 CCA 團隊',
  },
};
