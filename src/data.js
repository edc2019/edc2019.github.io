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
  TEAM_EDS: 'Jon Jaatun, Victor Nystad, Michael Marszalek',

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
  '17:45-18:30': '17:45 — 18:30',
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
          'We\'ll take a look at frequently asked questions around the use of, and development of, Open Source (Free Software).\n\nWhat is Open Source?\n\nIs it Free?\n\nWhy do we invest in giving away software for "free"?\n\nAnd what are all these different licenses about?'
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
      <tt>
        {
          'Lang=prolog,\n'+
            'title(awesome(Lang)),\n'+
            'target(Person),\n'+
            'curious_of(Person, Lang),\n'+
            'skill(Person, Lang, Skill),\n'+
            'Skill >= 0,\n'+
            'preparation(Person, _),\n'+
            'expect(Person, logic),\n'+
            'expect(Person, challenge),\n'+
            'expect(Person, skill(Person, Lang, AfterSkill)),\n'+
            'AfterSkill > Skill.\n'
        }
      </tt>
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
          'C has been the dominating programming language for more than 40 years. C is still going strong. C will be forever. Unlike most programming languages, the language was particularly designed to give direct access to the underlying hardware and let programmers do whatever they want, without petty restrictions. C was not designed for ease of use, but rather as a language that would be very easy to compile into machine code. The language is extremely fascinating due to it\'s brutal simplicity and all the nasty traps that you will fall into.\n'+
            'This workshop is first of all aimed at experienced C and C++ programmers, but anyone with a deep interest in programming languages will probably enjoy this workshop. We will introduce the basics of the C programming language, but then quickly dive into the abyss where dark and strange features of this wonderful language are hiding. The goal is to teach a deep understanding of the C programming language.\n'+
            'Bring a laptop with your favorite C compiler installed. Make sure you are able to compile, link and run "Hello, World!". If you dont have a machine to use, no worries, you can just pair up with a colleague.'
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
          'Preparations: Docker installed and working on your machine. Follow the instructions at https://edc2019.github.io/\n'+
            'For: People interested in cloud and modern building and deployment practices\n' +
            'Outcome: To have a basic understanding of the history and benefits of Docker as well as enough practical experience to start using it in simple projects.'
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
          'This is an introduction to version control system and specifically git.\n\n'+
'Prerequisites: None, but it is good if you manage to install Git Bash if you\'re on Windows!\n\n'+
'Target audience: People who want to get started with Git and version control, either for configs, source code, or other textual data.\n\n'+
'We go through the basics of distributed version control and make and edit/rebase commits, create and merge branches, revert and fix conflicts, and use several remotes.'

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
          'Preparations: none strictly necessary, but if you want follow the examples, you must have a working python and a working C++ compiler\n\n'+
            'Target audience: anyone curious on (advanced) python development, or speeding up python with native code\n\n'+
            'Expect: This is about _building_ (compiling), not code.\n\n'+
            'Python is a pretty good user-facing language, but sometimes things need speeding up, or you need to interact with a C++ library. The first step in this interaction is building it, and it is not necessarily smooth sailing. This workshop goes through the whole process, from an empty directory to a package with C++ code, installable with pip install.'
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
          'MapHub is Equinor’s portal for finding, sharing, creating, and analyzing geospatial content.\n\n'+
            'In this workshop, you will learn skills needed for working with maps and geospatial data in MapHub. We will use ArcGIS API for Python and learn fundamentals of working with maps, geocoding, vectors, raster, lines, routing and directions.\n\n'+
            'Prerequisites: Novice to intermediate-level experience writing Python.'
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
          'Preparations\n'+
            ' - Working Python environment\n\n'+
            'Recommended skills\n'+
            ' - Solid Python, journeyman machine learning (or equivalent) skills, information theory aware.\n\n'+
            'What to expect\n'+
            ' - Basic knowledge of NLP techniques that can be applied when your domain does not neatly conform to academic standards.'
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
    title: 'Saving the drone — An Algorithms and Data Structures recap',
    shortTitle: 'Saving the drone',
    speaker: SPEAKERS.MARKUS_DREGI,
    description: (
      <p>
        {
'Saving the drone — After the SI gathering you casually left your drone in the maze. But what nobody told you is that after dark all the monsters get out.\n\n'+
'And of course, it turns out that the drone is highly classified Equinor material, so it has be rescued. During this workshop we will rescue your drone utilizing one graph traversal algorithm after the other, with all the tricks your professor never told you.\n\n'+
'Since it is already dark, we are going in blind, i.e. there will be no simulator. But fear not, you will be enlightened by the end.'        }
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
    title: 'An introduction to CTFs — an exciting way to gain new knowledge and skills',
    shortTitle: 'An introduction to CTFs',
    speaker: SPEAKERS.EIRIK_NORDBOE,
    description: (
      <p>
        {
          'CTFs [capture the flag] are events that are usually hosted online or at information security conferences. These events consist of a series of challenges in a range of categories that vary in their degree of difficulty. Typical categories are web security, forensics, crypto, binary exploitation and steganography. Once an individual challenge is solved, a “flag” is given to the player and they submit this flag to the CTF server to earn points. CTF events are usually timed, and the points are totaled once the time has expired. The winning player / team will be the one that solved the most challenges and thus secured the highest score.\n\n'+
'WarGames are similar to CTFs, but without the stress of time constrains and competition. Both WarGames and CTFs are great ways to learn new skills, not just for information security professionals, but also for developers and others interested in information technology.\n\n'+
'This workshop will cover:\n\n'+
' - What CTFs are, and how they are played.\n\n'+
' - Introduction to some of the most popular platforms.\n\n'+
' - Introduction to common tools and techniques.\n\n'+
' - Hands on exercises.\n\n'+
'Requirements:\n\n'+
' - Laptop with Nmap and Burp Suite installed. Equinor domain joined computers are not recommended, but can be used.\n\n'+
'Preferred:\n\n'+
' - Kali Linux VM or similar. (Kali Linux is a Debian-derived Linux distribution designed for digital forensics and penetration testing.)'
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
    speaker: SPEAKERS.TEAM_EDS,
    description: (
      <p>
        {
          'We will introduce you to the Equinor Design System (EDS). You will learn the benefits of design systems, and how the EDS can help your team to efficiently build consistent user interfaces. This session is for everyone involved in product development with a focus on the developer.'
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
          'Microservices are a broad topic, and the issues that teams will encounter can vary greatly. This workshop is designed to accomodate the specific needs of your teams, and help give them the knowledge to get the most out of microservice architecture.\n\n'+
            'The workshop itself is aimed at technologists currently working with, or planning to work with microservices. It\'s suitable for architects, technical leads, developers, automation testers and operations people. Based on understanding your needs, I will create a class that best addresses the needs of your colleagues.\n\n'+
            'Due to the wide and varied nature of the challenges that teams may be facing, I dislike providing a fixed syllabus for this workshop. Instead I adapt each class for the needs of clients. By breaking material down into modules, I’m able to rearrange classes to ensure I meet the needs of each individual client. I have included an indicative two and three day syllabus to give you an idea of the topics we can cover.'
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
          'The API Track is a series of presentations (and some demos) about API development in Equinor.\n\n'+
            'The API Track cover topics like the Equinor API Strategy, the API portal (api.equinor.com) and OMNIA API Management, API security, using Postman in API development, REST basics, etc.'
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
          'This is a one day tour of the Python programming language. We will start with the fundamental building blocks and then focus on learning how things are connected under the hood. This tour will visit things like objects, sequences, generators, flow control, types, functions, classes, exceptions, comprehension, iterators, decorators, concurrency and much more. While we will mention, and sometimes use, a few standard libraries, most of this tour will focus on the Python language itself, explained through writing small useless snippets of code.\n\n'+
'This tour is first of all for anyone that would like to start a journey to learn Python properly. Even if you have lots of Python experience already you are more than welcome to join us - there is always something new to learn by participating on a tour like this.\n\n'+
'Bring a laptop with Python 3.6 or better installed (Python 3.6 is available in the software center). We will do some simple exercises in pairs, but most of the tour will be live coding by the instructor.'
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
          'Hands-on workshop focusing on web and mobile security, aiming to increase the security awareness for software developers. It looks at security from the attacker\'s perspective and takes them through the steps necessary to exploit vulnerable software on the web. Vulnerabilities like Cross-site Scripting (XSS), SQL Injection, Cross-Site Request Forgery (CSRF) ect. will be covered in this workshop.'
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
          'Kubernetes is an open source container-orchestration system, and is one of the fastest growing open source projects. It supports cloud-native applications by deploying them as microservices, packaging each part into its own container, and dynamically orchestrating those containers to optimise resource utilisation.\n\n'+
            'In this workshop, we will introduce the fundamentals of Kubernetes and get our hands dirty deploying microservices to a Kubernetes cluster'
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
          'Omnia is Equinor\'s new IT platform and will be central to how we develop going forwards. In this workshop we will give a short overview of what Omnia is before focussing on the data platform and the different options available. The hands on tutorial will cover the steps to build an end-to-end data pipeline from data ingestion, storage, compute, API creation and consumption.\n\n'+
'Target Audience\n\n'+
'- All developers in Equinor without existing Omnia experience.\n\n'+
'Preparations\n\n'+
'- None (at this time) - join #edc2019-omnia on Slack for updates.'
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
          'I welcome all who would like to learn SIMPLE ways to implement even COMPLEX tasks on your TINY graphic cards! We will employ Python — as this language is so nice and simple and yet so powerful. In addition we will be exposed to GPU / Parallel languages (CUDA, OpenCL, etc) — learning to use our brains in parallel fashion too. Magic real-time rendering and 3D visualization tricks should also be revelead!'
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
          'Bring your own laptop with your preferred development tools installed. You must have access to Equinor GitHub.\n\n'+
'You can work on your own or in a self-organizing team based on shared interests.\n'+
'The time writing API will be ready to be consumed for development. Detail documentation about the API will be made available.\n'+
'Demo time writing applications will be created in React and SAP UI5, and made available for reference on GitHub.\n'+
'Recently employed people may not exist in SAP QA system and need to work together with other participants.\n'+
'This is a 1,5 day hackathon in which the participants can make their own time writing solution using their preferred technology.\n'+
'The participants will play with their own time writing data which is persisted in SAP test system.\n'+
'We have made available for you a conventional REST API and an OData API for time writing.\n'+
'There will exist Github repos for React and SAP UI5 demo apps which can be used as starting points or for reference.\n'+
'You are welcome to use any front-end technology.\n'+
'On the last day we will hopefully have exciting demos of the participant\'s effort.\n'+
'Maybe your solution will be the next Equinor time writing app?\n\n'+
'Slack channel: #edc2019-hackathon-timewriting'
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
    title: 'Real robot competition^W hackathon',
    shortTitle: 'Real robots',
    speaker: SPEAKERS.TEAM_REAL_ROBOT,
    description: (
      <p>
        {
         'Write the code that will bring your team of robots to victory. Join as a single person or as a team.\n'+
'Simulator and coding environment will be hosted online so you only need a modern web browser.\n'+
'We have a robot arena with real physical robots you can compete with.\n'+
'You don’t have to compete if you join this track you can just come to play around. No pressure.\n'+
'The programming language will be JavaScript/NodeJS so you should be able to at least read JavaScript code.\n'+
'Experience with command-line and Visual Studio Code will help but it\'s not required.\n'+
'On Wednesday you can code and challenge fellow coders/teams to use the real robot arena.\n'+
'On Thursday we will select the best robot teams and have a tournament on the arena.\n'
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
        '  ML & Data analysis\n1. How to accelerate a geologist (David Wade)\n2. ML in Subsurface (Sindre Sundvall Fjermestad)\n3. Azure databricks (Juan Martorell Gutierrez Del Alamo)'
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
        time: TIME_SLOTS['17:45-18:30'],
        events: [{ title: 'Leisure and activities [Football or CrossFit (30)]' }],
      },
      {
        time: TIME_SLOTS['19:00'],
        events: [
          {
            title: 'Dinner (Tapas) at Atlantic',
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
          { ...getLecture(IDS.GPUMAGIC), part: '2 of 2' },
          { ...getLecture(IDS.SAP_HACKATHON), part: '2 of 3' },
          { ...getLecture(IDS.HANDS_ON_OMNIA), part: '2 of 2' },
          { ...getLecture(IDS.PYTHON_TOUR), part: '2 of 2' },
          { ...getLecture(IDS.HACK_YOURSELF), part: '2 of 2' },
          { ...getLecture(IDS.ROBOT_COMPETITION), part: '2 of 3' },
          { ...getLecture(IDS.AGILE_WORKSHOP), part: '2 of 2' },
        ],
      },
      {
        time: TIME_SLOTS['17:45-18:30'],
        events: [{ title: 'Leisure and activities [Football or Spinning (48)]' }],
      },
      {
        time: TIME_SLOTS['19:00'],
        events: [{ title: 'Dinner (Banquet) at Atlantic' }],
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
        events: [{ title: 'Systems thinking with Bjarte Bogsnes (Atlantic Hall)', color: '#ec384a' }],
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
