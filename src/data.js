import React from 'react';

const CATEGORIES = {
  KEYNOTE: 'Keynote',
  LANGUAGE: 'Language',
  MINIWORKSHOP: 'Miniworkshop',
  WORKSHOP: 'Workshop',
  LIGHTNING: 'Lightning talks',
  CONTRIBUTED_LECTURE: 'Contributed lecture',
};

const HEADINGS = {
  KEYNOTE: 'Keynote',
  LIGHTNING: 'Lightning',
  LANGUAGES: 'Languages',
  WORKSHOPS: 'Workshops',
  MINIWORKSHOPS: 'Miniworkshops',
  CONTRIBUTED_LECTURE: 'Plenary ',
};

const SPEAKERS = {
  // keynotes
  SAM_NEWMAN: 'Sam Newman',
  JAMES_LEWIS: 'James Lewis',

  // plenary
  BJARTE_BOGSNES: 'Bjarte Bogsnes',
  PER_IVAR_SELVAAG: 'Per Ivar Selvaag',
  VICTOR_NYSTAD: 'Victor Nystad',

  // shorts

  // langs
  OLVE_MAUDAL: 'Olve Maudal',
  BJARTE_JOHANSEN: 'Bjarte Johansen',
  STIAN_OVREVAGE: 'Stian Øvrevåge',
  JORN_OLMHEIM: 'Jørn Ølmheim',
  JUAN_ALAMO: 'Juan Martorell Gutierrez Del Alamo',
  KJELL_ERIK_REED_ANDA: 'Kjell Erik Reed Anda',

  // workshops
  OYVIND_RONNE: 'Øyvind Rønne',
  TEAM_RADIX: 'Team Radix',
  JULIUS_PARULEK: 'Julius Parulek',
  TEAM_SAP: 'Team SAP',
  TEAM_OMNIA: 'Team OMNIA',
  TEAM_REAL_ROBOT: 'Ole Martin Gjersvik & Kjetil Eik',
  THORVALD_JOHANNESSEN: 'Thorvald Johannessen',
  TEAM_HACKYOURSELF: 'Christian Sørseth',
  TEAM_ACE: 'ACE TBA',

  // miniworkshops
  JORGEN_KVALSVIK: 'Jørgen Kvalsvik',
  TORILL_GABRIELSEN: 'Torill Kjøsnes Gabrielsen',
  MARKUS_DREGI: 'Markus Fanebust Dregi',
  PAAL_GROENAAS_DRANGE: 'Pål Grønås Drange',
  EIRIK_NORDBOE: 'Eirik Nordbø',
  THOMAS_HJELDE_THORESEN: 'Thomas Hjelde Thoresen',
};

const TIME_SLOTS = {
  '08:15-08:45': '08:15 — 08:45',
  '08:45-09:00': '08:45 — 09:00',
  '09:00': '09:00',
  '09:00-10:00': '09:00 — 10:00',
  '09:00-10:15': '09:00 — 10:15',
  '09:00-12:00': '09:00 — 12:00',
  '09:15': '09:15',
  '10:15': '10:15',
  '10:15-12:00': '10:15 — 12:00',
  '10:30-11:20': '10:30 – 11:20',
  '11:30-12:20': '11:30 – 12:20',
  '12:15': '12:15',
  '12:30': '12:30',
  '13:00': '13:00',
  '13:15': '13:15',
  '13:30-15:45': '13:00 — 15:45',
  '14:15': '14:15',
  '15:00': '15:00',
  '15:00-17:15': '15:00 — 17:15',
  '16:15-17:15': '16:15 — 17:15',
  '17:30': '17:30',
  '19:00': '19:00',
  '21:00': '21:00',
};

const DAYS = {
  '2019-09-17': '2019-09-17',
  '2019-09-18': '2019-09-18',
  '2019-09-19': '2019-09-19',
};

const CONFERENCE_DAYS = {
  DAY_1: 'Day 1',
  DAY_2: 'Day 2',
  DAY_3: 'Day 3',
};

const CALENDAR_DATE = {
  TUESDAY: 'Tuesday September 17',
  WEDNESDAY: 'Wednesday September 18',
  THURSDAY: 'Thursday September 19',
};

const COLORS = {
  ENERGY_RED: '#ff1243',
  WHITE: '#ffffff',
  BLACK: '#333333',
  SLATE_BLUE: '#243746',
  HERITAGE_RED: '#7d0023',
  MOSS_GREEN: '#007079',
  MIST_BLUE: '#d5eaf4',
  SPRUCE_WOOD: '#ffe7d6',
  LICHEN_GREEN: '#e6faec',

  LIGHT_YELLOW: '#fff5cb',
};

const IDS = {
  // KEYNOTE 1
  KEYNOTE_MICROSERVICES_AND_SERVERLESS: 'keynote_microservices_and_serverless',



  // LIGHTNING SESSION
  LIGHT_TEAM_WORK: 'light_team_work',
  LIGHT_ARCHITECTURE: 'light_architecture',
  LIGHT_CLOUD: 'light_cloud',
  LIGHT_LANGS_LIBS: 'light_langs_libs',
  LIGHT_ML_DATA_ANALYSIS: 'light_ml_data_analysis',
  LIGHT_INFRASTRUCTURE: 'light_infrastructure',
  LIGHT_SOFTWARE: 'light_software',


  // PLENARY 1 and 2
  PRODUCT_DEVELOPMENT: 'product_development',
  DESIGN_SYSTEM: 'design_system',



  // LANGS
  PROLOG: 'prolog',
  CLOJURE: 'clojure',
  DEEPC: 'deepc',
  DOCKER: 'docker',
  OPENSOURCE: 'opensource',
  CSS: 'CSS',
  LUA: 'LUA',
  RADIX: 'Radix',


  KEYNOTE_EVOLUTIONARY_ARCHITECTURE: 'keynote_evolutionary_architecture',


  // WORKSHOPS
  GPUMAGIC: 'gpumagic',
  MONOLITH: 'monolith',
  DEVELOPING_APIS: 'developing_apis',
  PYTHON_TOUR: 'python_tour',
  KUBERNETES: 'kubernetes',
  HANDS_ON_OMNIA: 'hands_on_omnia',
  SAP_HACKATHON: 'sap_hackathon',
  ROBOT_COMPETITION: 'robot_competition',
  HACK_YOURSELF: 'hack_yourself',
  AGILE_WORKSHOP: 'agile_workshop',


  // MINI-WORKSHOPS
  PYTHON_LIBS: 'python_libs',
  GITINTRO: 'gitintro',
  GIS_INTRO: 'gis_intro',
  NLP_OUTSIDE: 'nlp_outside',
  ALGDAT: 'algdat',
  INTRO_CTF: 'intro_ctf',
  MLFLOW: 'mlflow',
  BEYOND_WORKSHOP: 'beyond_workshop',
};

export const events = [
  {
    id: IDS.KEYNOTE_MICROSERVICES_AND_SERVERLESS,
    title:
      'Microservices and Serverless (Atlantic Hall)',
    speaker: SPEAKERS.SAM_NEWMAN,
    description: (
      <p>
        {
          'TBA'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['09:00-10:15'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.KEYNOTE,
  },

  // LANGUAGES
  {
    id: IDS.OPENSOURCE,
    title: 'What\'s the deal with open source?',
    shortTitle: 'Open source',
    speaker: SPEAKERS.PAAL_GROENAAS_DRANGE,
    description: (
      <p>
        {
          'TBA'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['13:30-15:45'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.LANGUAGE,
  },
  {
    id: IDS.CSS,
    title: 'CSS',
    shortTitle: 'CSS',
    speaker: SPEAKERS.VICTOR_NYSTAD,
    description: (
      <p>
        {
          'TBA'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['13:30-15:45'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.LANGUAGE,
  },
  {
    id: IDS.LUA,
    title: 'Lua',
    shortTitle: 'Lua',
    speaker: SPEAKERS.JUAN_ALAMO,
    description: (
      <p>
        {
          'TBA'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['13:30-15:45'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.LANGUAGE,
  },
  {
    id: IDS.RADIX,
    title: 'Radix',
    shortTitle: 'Radix',
    speaker: SPEAKERS.KJELL_ERIK_REED_ANDA,
    description: (
      <p>
        {
          'TBA'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['13:30-15:45'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.LANGUAGE,
  },
  {
    id: IDS.PROLOG,
    title: 'Prolog (TBA)',
    shortTitle: 'Prolog',
    speaker: SPEAKERS.BJARTE_JOHANSEN,
    description: (
      <p>
        {
          'TBA'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['13:30-15:45'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.LANGUAGE,
  },
  {
    id: IDS.CLOJURE,
    title: 'Clojure',
    shortTitle: 'Clojure',
    speaker: SPEAKERS.JORN_OLMHEIM,
    description: (
      <p>
        {
          'TBA'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['13:30-15:45'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.LANGUAGE,
  },
  {
    id: IDS.DEEPC,
    title: 'Deep C',
    shortTitle: 'Deep C',
    speaker: SPEAKERS.OLVE_MAUDAL,
    description: (
      <p>
        {
          'TBA'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['13:30-15:45'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.LANGUAGE,
  },
  {
    id: IDS.DOCKER,
    title: 'Docker',
    shortTitle: 'Docker',
    speaker: SPEAKERS.STIAN_OVREVAGE,
    description: (
      <p>
        {
          'TBA'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['13:30-15:45'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.LANGUAGE,
  },
  // END OF LANGUAGES



  // MINIWORKSHOP
  {
    id: IDS.GITINTRO,
    title: 'A primer on Git',
    shortTitle: 'Git',
    speaker: SPEAKERS.PAAL_GROENAAS_DRANGE,
    description: (
      <p>
        {
          'Install Git Bash!'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['15:00-17:15'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    day: DAYS['2019-09-17'],
    category: CATEGORIES.MINIWORKSHOP,
  },
  {
    id: IDS.PYTHON_LIBS,
    title: 'How to build Python libraries with C++',
    shortTitle: 'Building Python libraries',
    speaker: SPEAKERS.JORGEN_KVALSVIK,
    description: (
      <p>
        {
          'TBA'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['15:00-17:15'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.MINIWORKSHOP,
  },
  {
    id: IDS.GIS_INTRO,
    title: 'Introduction to MapHub and ArcGIS with Python',
    shortTitle: 'Introduction to Geo',
    speaker: SPEAKERS.TORILL_GABRIELSEN,
    description: (
      <p>
        {
          'TBA'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['15:00-17:15'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.MINIWORKSHOP,
  },
  {
    id: IDS.NLP_OUTSIDE,
    title: 'Language Processing when you are not in academia',
    shortTitle: 'NLP outside academia',
    speaker: SPEAKERS.BJARTE_JOHANSEN,
    description: (
      <p>
        {
          'TBA'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['15:00-17:15'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.MINIWORKSHOP,
  },
  {
    id: IDS.ALGDAT,
    title: 'Algorithms and data structures',
    shortTitle: 'Algorithms and data structures',
    speaker: SPEAKERS.MARKUS_DREGI,
    description: (
      <p>
        {
          'TBA'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['15:00-17:15'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.MINIWORKSHOP,
  },
  {
    id: IDS.INTRO_CTF,
    title: 'An introduction to Capture The Flags',
    shortTitle: 'An introduction to CTFs',
    speaker: SPEAKERS.EIRIK_NORDBOE,
    description: (
      <p>
        {
          'TBA'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['15:00-17:15'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.MINIWORKSHOP,
  },
  {
    id: IDS.MLFLOW,
    title: 'Machine learning – From experiments to production with MLFlow',
    shortTitle: 'To production with MLFlow',
    speaker: SPEAKERS.THOMAS_HJELDE_THORESEN,
    description: (
      <p>
        {
          'TBA'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['15:00-17:15'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.MINIWORKSHOP,
  },
  {
    id: IDS.BEYOND_WORKSHOP,
    title: 'Beyond Workshop with Bjarte Bogsnes',
    shortTitle: 'Beyond Workshop',
    speaker: SPEAKERS.BJARTE_BOGSNES,
    description: (
      <p>
        {
          'TBA'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['15:00-17:15'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.MINIWORKSHOP,
  },

  // PLENARY DAY 1
  {
    id: IDS.PRODUCT_DEVELOPMENT,
    title: 'Product development, a whole perspective',
    shortTitle: 'Product Development',
    speaker: SPEAKERS.PER_IVAR_SELVAAG,
    description: (
      <p>
        {
          'TBA'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['11:30-12:20'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.CONTRIBUTED_LECTURE,
  },
  {
    id: IDS.DESIGN_SYSTEM,
    title: 'TL;DR The Equinor Design System',
    shortTitle: 'Design System',
    speaker: SPEAKERS.VICTOR_NYSTAD,
    description: (
      <p>
        {
          'TBA'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['16:15-17:15'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.CONTRIBUTED_LECTURE,
  },


  {
    id: IDS.KEYNOTE_EVOLUTIONARY_ARCHITECTURE,
    shortTitle: 'Evolutionary Architecture, DevOps and Scale',
    title:
      'Evolutionary Architecture, DevOps and Scale',
    speaker: SPEAKERS.JAMES_LEWIS,
    description: (
      <p>
        {
          'TBA'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['09:00-10:00'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
    ],
    category: CATEGORIES.KEYNOTE,
  },

  {
    id: IDS.MONOLITH,
    title: 'Monolith to microservices',
    shortTitle: 'Monolith→Microservice',
    speaker: SPEAKERS.SAM_NEWMAN,
    color: '#844D9E',
    description: (
      <p>
        {
          'TBA'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['10:15'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['14:15'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['09:00'],
        day: CONFERENCE_DAYS.DAY_3,
        date: CALENDAR_DATE.THURSDAY,
      },
    ],
    category: CATEGORIES.WORKSHOP,
  },
  {
    id: IDS.DEVELOPING_APIS,
    title: 'Developing APIs',
    subtitle: 'Developing APIs',
    speaker: SPEAKERS.OYVIND_RONNE,
    color: '#f58db6',
    description: (
      <p>
        {
          'TBA'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['10:15'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['14:15'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['09:00'],
        day: CONFERENCE_DAYS.DAY_3,
        date: CALENDAR_DATE.THURSDAY,
      },
    ],
    category: CATEGORIES.WORKSHOP,
  },
  {
    id: IDS.PYTHON_TOUR,
    title: 'A Tour of Python',
    shortTitle: 'Introduksjon til Python',
    speaker: SPEAKERS.OLVE_MAUDAL,
    color: '#367ABD',
    description: (
      <p>
        {
          'TBA'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['10:15'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['14:15'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['09:00'],
        day: CONFERENCE_DAYS.DAY_3,
        date: CALENDAR_DATE.THURSDAY,
      },
    ],
    category: CATEGORIES.WORKSHOP,
  },
  {
    id: IDS.HACK_YOURSELF,
    title: 'Learn to Hack Yourself',
    shortTitle: 'Learn to Hack Yourself',
    speaker: SPEAKERS.TEAM_HACKYOURSELF,
    color: '#367ABD',
    description: (
      <p>
        {
          'TBA'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['10:15'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['14:15'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['09:00'],
        day: CONFERENCE_DAYS.DAY_3,
        date: CALENDAR_DATE.THURSDAY,
      },
    ],
    category: CATEGORIES.WORKSHOP,
  },
  {
    id: IDS.KUBERNETES,
    title: 'Kubernetes',
    speaker: SPEAKERS.TEAM_RADIX,
    color: '#03D1AB',
    description: (
      <p>
        {
          'TBA'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['10:15'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['14:15'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
    ],
    category: CATEGORIES.WORKSHOP,
  },
  {
    id: IDS.AGILE_WORKSHOP,
    title: 'Agile Anonymous',
    speaker: SPEAKERS.TEAM_ACE,
    color: '#03D1AB',
    description: (
      <p>
        {
          'TBA'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['10:15'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['14:15'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
    ],
    category: CATEGORIES.WORKSHOP,
  },
  {
    id: IDS.HANDS_ON_OMNIA,
    title: 'Hands On With OMNIA',
    shortTitle: 'Hands on Omnia',
    speaker: SPEAKERS.TEAM_OMNIA,
    color: '#EB7B2D',
    description: (
      <p>
        {
          'TBA'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['10:15'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['14:15'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
    ],
    category: CATEGORIES.WORKSHOP,
  },
  {
    id: IDS.GPUMAGIC,
    title: 'GPU Magic with Python',
    shortTitle: 'GPU Magic',
    speaker: SPEAKERS.JULIUS_PARULEK,
    color: '#EE4035',
    description: (
      <p>
        {
          'TBA'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['10:15'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
    ],
    category: CATEGORIES.WORKSHOP,
  },
  {
    id: IDS.SAP_HACKATHON,
    title: 'Equinor time writing hackathon',
    shortTitle: 'Timewriting API',
    speaker: SPEAKERS.TEAM_SAP,
    color: '#EE4035',
    description: (
      <p>
        {
          'TBA'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['14:15'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['09:00'],
        day: CONFERENCE_DAYS.DAY_3,
        date: CALENDAR_DATE.THURSDAY,
      },
    ],
    category: CATEGORIES.WORKSHOP,
  },
  {
    id: IDS.ROBOT_COMPETITION,
    title: 'Real robot competition',
    shortTitle: 'Real robots',
    speaker: SPEAKERS.TEAM_REAL_ROBOT,
    description: (
      <p>
        {
          'TBA'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['09:00'],
        day: CONFERENCE_DAYS.DAY_3,
        date: CALENDAR_DATE.THURSDAY,
      },
    ],
    category: CATEGORIES.WORKSHOP,
  },

  /*
   * ALL THE LIGHTNING TALKS!
   */




  {
  id: IDS.LIGHT_TEAM_WORK,
  title: 'Team work',
  description: (
      <p>
      {
        'Team work\n1. When the One is hit by the bus (Markus Fanebust Dregi)\n2. London to Aarhus - Collaborating hands on with the business (Joachim Blaafjell Holwech)\n3. Assumptions is the mother of all f**k-ups (Harald Wesenberg)'
      }
    </p>
  ),
  timeSlots: [
    {
      time: TIME_SLOTS['10:30-11:20'],
      day: CONFERENCE_DAYS.DAY_1,
      date: CALENDAR_DATE.TUESDAY,
    },
  ],
  category: CATEGORIES.LIGHTNING,
},

{
  id: IDS.LIGHT_ARCHITECTURE,
  title: 'Architecture',
  description: (
      <p>
      {
        '  Architecture\n1. Domain Driven Design (Einar Landre)\n2. EITA and the role of EITA for software development (Jørn Ølmheim)\n3. 3rd party components in software projects (Anton Eskov)\n4. Realizing the potential (Bjørn-Ovin Wivestad)'
      }
    </p>
  ),
  timeSlots: [
    {
      time: TIME_SLOTS['10:30-11:20'],
      day: CONFERENCE_DAYS.DAY_1,
      date: CALENDAR_DATE.TUESDAY,
    },
  ],
  category: CATEGORIES.LIGHTNING,
},


{
  id: IDS.LIGHT_CLOUD,
  title: 'Cloud',
  description: (
      <p>
      {
        '  Cloud\n1. How unit testing enables DevOps for Azure SQL databases (Nikolai Kragebøl Thomassen)\n2. Cloud migration - How to fail most spectacular (Anders Sogaard)\n3. API Management (Anette Hansen)\n4. Security (Lars Kåre Skjørestad)'
      }
    </p>
  ),
  timeSlots: [
    {
      time: TIME_SLOTS['10:30-11:20'],
      day: CONFERENCE_DAYS.DAY_1,
      date: CALENDAR_DATE.TUESDAY,
    },
  ],
  category: CATEGORIES.LIGHTNING,
},


{
  id: IDS.LIGHT_LANGS_LIBS,
  title: 'Langs & libs',
  description: (
      <p>
      {
        '  Langs & libs\n1. Lua (Juan Martorell Gutierrez Del Alamo)\n2. Web applications using Lisp (Raymond Wiker)\n3. Luigie - Python pipeline library (Jens Gåsemyr Magnus)'
      }
    </p>
  ),
  timeSlots: [
    {
      time: TIME_SLOTS['10:30-11:20'],
      day: CONFERENCE_DAYS.DAY_1,
      date: CALENDAR_DATE.TUESDAY,
    },
  ],
  category: CATEGORIES.LIGHTNING,
},

{
  id: IDS.LIGHT_ML_DATA_ANALYSIS,
  title: 'ML & Data analysis',
  description: (
      <p>
      {
        '  ML & Data analysis\n1. How to accelerate a geologist (David Wade)\n2. Natural language processing (Bjarte Johannesen)\n3. Azure databricks (Juan Martorell Gutierrez Del Alamo)'
      }
    </p>
  ),
  timeSlots: [
    {
      time: TIME_SLOTS['10:30-11:20'],
      day: CONFERENCE_DAYS.DAY_1,
      date: CALENDAR_DATE.TUESDAY,
    },
  ],
  category: CATEGORIES.LIGHTNING,
},

{
  id: IDS.LIGHT_INFRASTRUCTURE,
  title: 'Infrastructure',
  description: (
      <p>
      {
        '  Infrastructure\n1. SpaceX Starlink (Jon Ole Nome)\n2. 20 thousand leagues under the sea (Espen Alv Tjønneland)\n3. Radix (Kjell-Erik Reed Anda)\n4. Gaining business insight at the edge of the cloud (Anders Erling Aabakken)'
      }
    </p>
  ),
  timeSlots: [
    {
      time: TIME_SLOTS['10:30-11:20'],
      day: CONFERENCE_DAYS.DAY_1,
      date: CALENDAR_DATE.TUESDAY,
    },
  ],
  category: CATEGORIES.LIGHTNING,
},


{
  id: IDS.LIGHT_SOFTWARE,
  title: 'Software Engineering',
  description: (
      <p>
      {
        '  Software Engineering\n1. Technical debt is good! (Olve Maudal)\n2. FLOSS - Free/Libre Open Source Software (Knut Erik Hollund)\n3. Software Development - It\'s not rocket science (Pål Grønås Drange)'
      }
    </p>
  ),
  timeSlots: [
    {
      time: TIME_SLOTS['10:30-11:20'],
      day: CONFERENCE_DAYS.DAY_1,
      date: CALENDAR_DATE.TUESDAY,
    },
  ],
  category: CATEGORIES.LIGHTNING,
},





];

const getLecture = id => events.find(lecture => lecture.id === id);

export const schedule = [
  {
    conferenceDay: CONFERENCE_DAYS.DAY_1,
    calendarDate: CALENDAR_DATE.TUESDAY,
    timeSlots: [
      {
        time: TIME_SLOTS['08:15-08:45'],
        events: [{ title: 'Registration' }],
        background: COLORS.LIGHT_YELLOW,
      },
      {
        time: TIME_SLOTS['08:45-09:00'],
        events: [{ title: 'Welcome to EDC2019' }],
        background: COLORS.SPRUCE_WOOD,
      },
      {
        time: TIME_SLOTS['09:00-10:15'],
        heading: HEADINGS.KEYNOTE,
        events: [getLecture(IDS.KEYNOTE_MICROSERVICES_AND_SERVERLESS)],
      },

      // DEFINITION PROGRAM LIGHTNING TALKS
      {
        time: TIME_SLOTS['10:30-11:20'],
        heading: HEADINGS.LIGHTNING,
        events: [
          getLecture(IDS.LIGHT_TEAM_WORK),
          getLecture(IDS.LIGHT_ARCHITECTURE),
          getLecture(IDS.LIGHT_CLOUD),
          getLecture(IDS.LIGHT_LANGS_LIBS),
          getLecture(IDS.LIGHT_ML_DATA_ANALYSIS),
          getLecture(IDS.LIGHT_INFRASTRUCTURE),
          getLecture(IDS.LIGHT_SOFTWARE),
        ],
      },


      // DEFINITION PROGRAM PLENARY (PER IVAR) before lunch
      {
        time: TIME_SLOTS['11:30-12:20'],
        heading: HEADINGS.CONTRIBUTED_LECTURE,
        events: [getLecture(IDS.PRODUCT_DEVELOPMENT)],
      },


      {
        time: TIME_SLOTS['12:30'],
        events: [{ title: 'Lunch' }],
        background: COLORS.LIGHT_YELLOW,
      },



      // DEFINITION PROGRAM LANGUAGES
      {
        time: TIME_SLOTS['13:30-15:45'],
        heading: HEADINGS.LANGUAGES,
        events: [
          getLecture(IDS.DEEPC),
          getLecture(IDS.PROLOG),
          getLecture(IDS.DOCKER),
          getLecture(IDS.CLOJURE),
          getLecture(IDS.OPENSOURCE),
          getLecture(IDS.CSS),
          getLecture(IDS.LUA),
          getLecture(IDS.RADIX),
        ],
      },



      // DEFINITION PROGRAM PLENARY 2 (Victor) after lunch
      {
        time: TIME_SLOTS['16:15-17:15'],
        heading: HEADINGS.CONTRIBUTED_LECTURE,
        events: [getLecture(IDS.DESIGN_SYSTEM)],
      },




      // DEFINITION PROGRAM EOD DAY 1
      {
        time: TIME_SLOTS['17:30'],
        events: [{ title: 'Leisure and activities' }],
      },
      {
        time: TIME_SLOTS['19:00'],
        events: [
          {
            title: 'Dinner and quiz, delicious tapas and drinks (Atlantic Hall)',
          },
        ],
        background: COLORS.LIGHT_YELLOW,
      },
      {
        time: TIME_SLOTS['21:00'],
        events: [{ title: 'Meet your colleagues' }],
      },
    ],
  },



  {
    conferenceDay: CONFERENCE_DAYS.DAY_2,
    calendarDate: CALENDAR_DATE.WEDNESDAY,
    timeSlots: [
      {
        time: TIME_SLOTS['08:15-08:45'],
        events: [{ title: 'Good morning (Atlantic Hall)' }],
        background: COLORS.LIGHT_YELLOW,
      },
      {
        time: TIME_SLOTS['08:45-09:00'],
        events: [{ title: 'Introducing workshops (Atlantic Hall)' }],
        background: COLORS.SPRUCE_WOOD,
      },
      {
        time: TIME_SLOTS['09:00-10:00'],
        heading: HEADINGS.KEYNOTE,
        events: [getLecture(IDS.KEYNOTE_EVOLUTIONARY_ARCHITECTURE)],
      },
      {
        time: TIME_SLOTS['10:15'],
        heading: HEADINGS.WORKSHOPS,
        events: [
          { ...getLecture(IDS.MONOLITH), part: '1 of 2' },
          { ...getLecture(IDS.DEVELOPING_APIS), part: '1 of 2' },
          { ...getLecture(IDS.KUBERNETES), part: '1 of 2' },
          { ...getLecture(IDS.GPUMAGIC), part: '1 of 1' },
          { ...getLecture(IDS.SAP_HACKATHON), part: '1 of 3' },
          { ...getLecture(IDS.HANDS_ON_OMNIA), part: '1 of 2' },
          { ...getLecture(IDS.PYTHON_TOUR), part: '1 of 2' },
          { ...getLecture(IDS.HACK_YOURSELF), part: '1 of 2' },
          { ...getLecture(IDS.ROBOT_COMPETITION), part: '1 of 3' },
          { ...getLecture(IDS.AGILE_WORKSHOP), part: '1 of 2' },
        ],
      },
      {
        time: TIME_SLOTS['13:00'],
        events: [{ title: 'Lunch' }],
        background: COLORS.LIGHT_YELLOW,
      },
      {
        time: TIME_SLOTS['13:30-15:45'],
        heading: HEADINGS.WORKSHOPS,
        events: [
          { ...getLecture(IDS.MONOLITH), part: '2 of 2' },
          { ...getLecture(IDS.DEVELOPING_APIS), part: '2 of 2' },
          { ...getLecture(IDS.KUBERNETES), part: '2 of 2' },
          { ...getLecture(IDS.GPUMAGIC), part: '2 of 1' },
          { ...getLecture(IDS.SAP_HACKATHON), part: '2 of 3' },
          { ...getLecture(IDS.HANDS_ON_OMNIA), part: '2 of 2' },
          { ...getLecture(IDS.PYTHON_TOUR), part: '2 of 2' },
          { ...getLecture(IDS.HACK_YOURSELF), part: '2 of 2' },
          { ...getLecture(IDS.ROBOT_COMPETITION), part: '2 of 3' },
          { ...getLecture(IDS.AGILE_WORKSHOP), part: '2 of 2' },
        ],
      },
      {
        time: TIME_SLOTS['17:30'],
        events: [{ title: 'Leisure and activities' }],
      },
      {
        time: TIME_SLOTS['19:00'],
        events: [{ title: 'Dinner' }],
        background: COLORS.LIGHT_YELLOW,
      },
      {
        time: TIME_SLOTS['21:00'],
        events: [{ title: 'Meet your colleagues' }],
      },
    ],
  },



  {
    conferenceDay: CONFERENCE_DAYS.DAY_3,
    calendarDate: CALENDAR_DATE.THURSDAY,
    timeSlots: [

      // DEFINITION PROGRAM MINIWORKSHOPS
      {
        time: TIME_SLOTS['15:00-17:15'],
        heading: HEADINGS.MINIWORKSHOPS,
        events: [
          getLecture(IDS.PYTHON_LIBS),
          getLecture(IDS.GIS_INTRO),
          getLecture(IDS.GITINTRO),
          getLecture(IDS.NLP_OUTSIDE),
          getLecture(IDS.ALGDAT),
          getLecture(IDS.INTRO_CTF),

          { ...getLecture(IDS.ROBOT_COMPETITION), part: '3 of 3' },
          { ...getLecture(IDS.SAP_HACKATHON), part: '3 of 3' },
          { ...getLecture(IDS.HACK_YOURSELF), part: '3 of 3' },

          getLecture(IDS.MLFLOW),
          getLecture(IDS.BEYOND_WORKSHOP),
        ],
      },


      {
        time: TIME_SLOTS['12:15'],
        events: [{ title: 'Lunch' }],
        background: COLORS.LIGHT_YELLOW,
      },


      {
        time: TIME_SLOTS['13:15'],
        events: [{ title: 'Beyond Budgeting with Bjarte Bogsnes (Atlantic Hall)', color: '#ec384a' }],
      },



      {
        time: TIME_SLOTS['14:15'],
        events: [{ title: 'Summary (Atlantic Hall)', color: '#ec384a' }],
      },


      {
        time: TIME_SLOTS['15:00'],
        events: [{ title: 'EOC' }],
      },




    ],
  },



];
