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
  LANGUAGES: 'Languages',
  MINIWORKSHOPS: 'Miniworkshops',
  WORKSHOPS: 'Workshops',
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
  MARKUS_FANEBUST_DREGI: 'Markus Fanebust Dregi',
  PAAL_GROENAAS_DRANGE: 'Pål Grønås Drange',
  EIRIK_NORDBOE: 'Eirik Nordbø',
  THOMAS_HJELDE_THORESEN: 'Thomas Hjelde Thoresen',
};

const TIME_SLOTS = {
  '08:15-08:45': '08:15 — 08:45',
  '08:45-09:00': '08:45 — 09:00',
  '09:00': '09:00',
  '09:00-10:00': '09:00 — 10:00',
  '09:00-12:00': '09:00 — 12:00',
  '09:15': '09:15',
  '10:15': '10:15',
  '10:15-12:00': '10:15 — 12:00',
  '12:15': '12:15',
  '13:00': '13:00',
  '14:15': '14:15',
  '15:00': '15:00',
  '15:00-17:15': '15:00 — 17:15',
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
  // LANGS
  PROLOG: 'prolog',
  CLOJURE: 'clojure',
  DEEPC: 'deepc',
  DOCKER: 'docker',
  OPENSOURCE: 'opensource',
  CSS: 'CSS',
  LUA: 'LUA',
  RADIX: 'Radix',

  // LIGHTNING SESSION

  // WORKSHOPS
  MODEL_CODE_GAP: 'model_code_gap',
  MACHINE_LEARNING: 'machine_learning',
  API_WORKSHOP: 'api_workshop',
  GPUMAGIC: 'GPUMAGIC',
  OMNIA: 'omnia',
  DESIGN_THINKING: 'design_thinking',
  KEYNOTE_EVOLUTIONARY_ARCHITECTURE: 'keynote_evolutionary_architecture',

  // MINI-WORKSHOPS
  GITINTRO: 'gitintro',
  MONOLITH: 'monolith',
  DEVELOPING_APIS: 'developing_apis',
  PYTHON_TOUR: 'python_tour',
  C_PLUS_PLUS: 'c_plus_plus',
  DESIGN_SPRINT: 'design_sprint',
  AGILE: 'agile',
  HACKATHON: 'hackathon',
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
        time: TIME_SLOTS['09:00-10:00'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.KEYNOTE,
  },
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
        time: TIME_SLOTS['10:15-12:00'],
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
        time: TIME_SLOTS['10:15-12:00'],
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
        time: TIME_SLOTS['10:15-12:00'],
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
        time: TIME_SLOTS['10:15-12:00'],
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
        time: TIME_SLOTS['10:15-12:00'],
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
        time: TIME_SLOTS['10:15-12:00'],
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
        time: TIME_SLOTS['10:15-12:00'],
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
        time: TIME_SLOTS['10:15-12:00'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.LANGUAGE,
  },
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
    id: IDS.MODEL_CODE_GAP,
    title: 'The model-code gap and Visualising software architecture (Sky1)',
    shortTitle: 'The model-code gap\nVisualising software architecture (Sky1)',
    speaker: SPEAKERS.SAM_NEWMAN,
    description: (
      <p>
        {
          'The model-code gap\n\nWhen we’re having an architecture discussion, we’ll talk about abstractions, using terms like component, module and layer. These abstractions reflect our mental model of a software system, which are useful when describing our architectural ideas and intent. These same abstractions don’t typically exist in the programming languages we use though. There’s no layer keyword in Java, for example. To implement these abstractions, we need to use a combination of the constructs available in our programming languages; such as classes, interfaces, objects, functions, packages, namespaces, files and folders. In many cases, the code that is written doesn’t end up reflecting the model. This is the model-code gap.\nThe model - code gap manifests itself in a number of ways. In obvious cases, the code doesn’t match the architecture diagrams.Sometimes the problems are more subtle though. This session is about the model-code gap, and particularly how it relates to applications that are built from a single monolithic deployment unit.Regardless of how we choose to structure our code(layers, vertical slices, ports and adapters, etc), our best design intentions can be destroyed in a flash if we don’t consider the intricacies of the implementation strategy. The devil is in the implementation details.\n\n\nVisualising software architecture\n\nIt’s very likely that the majority of the software architecture diagrams you’ve seen are a confused mess of boxes and lines. Following the publication of the Manifesto for Agile Software Development in 2001, teams have abandoned UML, discarded the concept of modelling and instead place a heavy reliance on conversations centered around incoherent whiteboard diagrams or shallow “Marketecture” diagrams created with Visio. Moving fast and being agile requires good communication, yet software development teams struggle with this fun- damental skill. A good set of software architecture diagrams are priceless for aligning a team around a shared vision and for getting new-joiners productive fast.\nThis session explores the visual communication of software architecture and is based upon a decade of my experiences working with software development teams large and small across the globe. We’ll look at what is commonplace today, the importance of creating a shared vocabulary, diagram notation, and the value of creating a lightweight model to describe your software system using the ”C4 model”, which I created as a way to help software development teams describe and communicate software architecture, both during up - front design sessions and when retrospectively documenting an existing codebase.'
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
    id: IDS.MACHINE_LEARNING,
    title: 'Introduction to machine learning (Airbus)',
    shortTitle: 'Machine learning basics (Airbus)',
    speaker: SPEAKERS.KRISTIAN_FLIKKA_AND_EIVIND_SJAASTAD,
    description: (
      <p>
        {
          '\n• A very basic introduction to machine learning.\n• What is it?\n• Why do we do it?\n• How do we do it (in Python)?\nThere will be some examples shown, we recommend (but don’t require) that you bring your computer with Python installed, so that you can try some things out for yourself.'
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
    id: IDS.API_WORKSHOP,
    title: 'API workshop (Sky2)',
    shortTitle: 'API workshop (Sky2)',
    speaker: SPEAKERS.OYVIND_RONNE,
    description: (
      <p>
        {'In this hands-on session we will create a simple REST API using JavaScript and Node.js and deploy it to Azure / OMNIA.\n' +
          'We will look into creating an API specification using Swagger / OpenAPI Specification.\n' +
          'If we have time, we will also try setting it up in Azure API management. \n' +
          'There will not be many slides, mostly we will code and have fun!\n' +
          '\n' +
          'Please make sure Node.js and Postman is installed on your computer beforehand, and that you are able to turn off any proxy ' +
          'settings you normally need within the Equinor network. You also need the role Data Platform Developer (OMNIA DATA PLATFORM) in AccessIT.'}
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
    id: IDS.OMNIA,
    title: 'Data enginering in Omnia (Air London+NewYork)',
    speaker: SPEAKERS.TAHIR_ALI,
    description: (
      <p>
        {
          'The amount of data collected and analyzed has increased rapidly, which has led to an increase in the demand for skills and tools in data processing. With the growth of both the number and size of big data teams, specialized roles begin to be defined. One of these roles is data engineer, which focuses on ensuring that quality data is available for data scientists and analysts to analyze.\nThis talk will give you an introduction to;\n• Data Engineering\n• Data engineering project(s)\n• How we do data engineering in Equinor\n• A demo of Azure Data factory V2'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['14:15'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.CONTRIBUTED_LECTURE,
  },
  {
    id: IDS.DESIGN_THINKING,
    title: 'Design thinking (Bell)',
    speaker: SPEAKERS.JON_JAATUN,
    description: (
      <p>
        {
          'What is Design Thinking?\nJon, from the mobility team, gives us a fun introduction to Design Thinking. With practical examples, first one that you can experience yourself in Lego, and later from him and his team’s work for the field of the future.'
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
    id: IDS.KEYNOTE_EVOLUTIONARY_ARCHITECTURE,
    shortTitle: 'Feedback-driven Product Development (Air London+NewYork)',
    title:
      'Feedback-driven Product Development\n' +
      'How we do it at Lysaker and how you can design your own system',
    speaker: SPEAKERS.JAMES_LEWIS,
    description: (
      <p>
        {'Cisco’s development and innovation centre in Norway (Lysaker) develops ' +
          'videoconferencing products, telepresence technology and collaboration ' +
          'solutions. This is embedded product development involving advanced ' +
          'mechanics, customised electronics, movable parts and millions of lines ' +
          'of software mostly written in C and C++. Over the last two decades we ' +
          'have gradually established a workflow that very much supports lean and ' +
          'agile product development for hundreds of engineers working closely ' +
          'together. A lot of effort goes into establishing effective feedback ' +
          'loops guiding the whole development process. We are not only talking ' +
          'about rapid feedback from build systems and continuous integration, but ' +
          'also from regression tests, advanced scenario testing and real ' +
          'users. The focus on establishing feedback loops goes beyond the product ' +
          'development workflow, it is a principle applicable to the whole ' +
          'organization. ' +
          '\n\n' +
          'This talk will present a concrete insight into the software development ' +
          'workflow that we are using today, before discussing what you need to ' +
          'consider if you want to set up an equally effective feedback-driven ' +
          'product development workflow in your organization. The talk is relevant ' +
          'for everyone involved product development where software is a key ' +
          'component.'}
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
    id: IDS.C_PLUS_PLUS,
    title: 'A Tour of Modern C++ (Bell)',
    speaker: SPEAKERS.JAMES_LEWIS,
    color: '#03D1AB',
    description: (
      <p>
        {
          'In this fast-paced course we will start from scratch and relearn C++ with modern syntax and semantics.\nAmong other things you will learn(at least something) about:\n• rvalues and move semantics \n• how to write and understand templates \n• function objects and lambda expressions \n• decltype, auto and type deduction in general \n• exception handling and exception safety \n• ”mystical” stuff like ADL, RAII and SFINAE \n• futures, promises and higher-order parallelism \n• concepts and type traits \n• iterators, smart pointers and object lifetimes \n• using the standard library effectively \n• misc do’s and don’ts in modern C++ \n• modern design principles and how to write solid code \n• C++11, C++14 and new stuff coming with C++17 and later\nThis course is aimed at experienced programmers that would like to learn how to write, or at least understand, modern C++.Ideally you should have some experience with either C, old-school C++, Python and / or Java.'
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
    id: IDS.DESIGN_SPRINT,
    title: 'Google Design Sprint (Air NewYork)',
    speaker: SPEAKERS.KRISTIN_WULFF,
    company: 'Kantega v/ Kristin Wulff',
    color: '#EB7B2D',
    description: (
      <p>
        {
          'Get to know a practical, and time boxed implementation of Design Thinking from Google Ventures. The methodical five days approach, forces the team to explore a vast space of ideas, and assist you in quickly narrowing them down to the one you really want to test on your users. An agile approach to the design phase, that allows your team to fail fast and shortcuts the idea→learning feedback loop. Do you think we could be more curious and creative in the earlier stages of our projects. Do you think that our projects are agile in name, but not always in practice. Or have you at some point simply experienced that the code you were writing, was an excellent answer, but sadly for the wrong question. Then join in for three hours of fun, a new perspective on the design phase, and a pocket full of ideation activities and practices for you and your team.\nPrimarily for: Everyone\nParticipant requirements: Their head and hands.'
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
    id: IDS.AGILE,
    title: 'Agile Workshop (Air London)',
    shortTitle: 'Agile Workshop (Air London)',
    speaker: SPEAKERS.KNUT_KVARME_AND_KASIA_WDANIEC,
    color: '#EE4035',
    description: (
      <p>
        {
          '4 Themes of Agile:\n\nCreating Better Leaders\nGain knowledge and support in transforming an organisation\'s culture to one of autonomy, self-organisation, and continuous improvement.The goal is to continually rise above the competition while attracting and retaining top talent.\n\nCreating Better Product Owners\nBecome a "product leader" in your business, through learning tools such as product strategy and road-mapping, while using Scrum to maximise your team\'s potential to create iterative, incremental, and innovative products.\n\nCreating Better ScrumMasters\nLearn new skills and techniques that help you become more effective change agent, and validate your role of ScrumMaster in your world of work.\n\nCreating Better Teams\nDevelop skills so each of your team members is able to take ownership of the opportunity to self-organise, as the Scrum framework suggests. Learn how to manage and get the most out of yourself, your Product Owner, and ScrumMaster.\n\nDetailed schedule will be shared on the day.'
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
    id: IDS.HACKATHON,
    title: 'Hackathon',
    description: (
      <p>
        {
          'Do you have an idea?  Try it out here, either on your own, or with other curious playgrounders.  Mistakes are made to be made; this is the time and place for trying and working on, both good and bad ideas.\nThe C++ slot and the design sprint slot end on day 2, so this slot is especially suited for C++-innovation collaboration.'
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
        time: TIME_SLOTS['09:00-10:00'],
        heading: HEADINGS.KEYNOTE,
        events: [getLecture(IDS.KEYNOTE_MICROSERVICES_AND_SERVERLESS)],
      },
      {
        time: TIME_SLOTS['10:15-12:00'],
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
      {
        time: TIME_SLOTS['12:15'],
        events: [{ title: 'Developer Survey QA (Air London+NewYork)' }],
      },
      {
        time: TIME_SLOTS['13:00'],
        events: [{ title: 'Lunch' }],
        background: COLORS.LIGHT_YELLOW,
      },
      {
        time: TIME_SLOTS['14:15'],
        heading: HEADINGS.CONTRIBUTED_LECTURE,
        events: [getLecture(IDS.OMNIA)],
      },
      {
        time: TIME_SLOTS['15:00-17:15'],
        heading: HEADINGS.MINIWORKSHOPS,
        events: [
          getLecture(IDS.MACHINE_LEARNING),
          getLecture(IDS.GITINTRO),
          getLecture(IDS.API_WORKSHOP),
          getLecture(IDS.DESIGN_THINKING),
          getLecture(IDS.MODEL_CODE_GAP),
        ],
      },
      {
        time: TIME_SLOTS['17:30'],
        events: [{ title: 'Leisure and activities' }],
      },
      {
        time: TIME_SLOTS['19:00'],
        events: [
          {
            title: 'Dinner and quiz, delicious tapas and drinks (Air London+NewYork)',
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
        events: [{ title: 'Good morning (Air London+NewYork)' }],
        background: COLORS.LIGHT_YELLOW,
      },
      {
        time: TIME_SLOTS['08:45-09:00'],
        events: [{ title: 'Introducing workshops (Air London+NewYork)' }],
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
          { ...getLecture(IDS.DEVELOPING_APIS), part: '1 of 3' },
          { ...getLecture(IDS.PYTHON_TOUR), part: '1 of 2' },
          { ...getLecture(IDS.GPUMAGIC), part: '1 of 1' },
          { ...getLecture(IDS.C_PLUS_PLUS), part: '1 of 2' },
          { ...getLecture(IDS.DESIGN_SPRINT), part: '3 hrs workshop' },
        ],
      },
      {
        time: TIME_SLOTS['13:00'],
        events: [{ title: 'Lunch' }],
        background: COLORS.LIGHT_YELLOW,
      },
      {
        time: TIME_SLOTS['14:15'],
        heading: HEADINGS.WORKSHOPS,
        events: [
          { ...getLecture(IDS.MONOLITH), part: '2 of 2' },
          { ...getLecture(IDS.DEVELOPING_APIS), part: '2 of 2' },
          { ...getLecture(IDS.PYTHON_TOUR), part: '2 of 2' },
          { ...getLecture(IDS.AGILE), part: '1 of 2' },
          { ...getLecture(IDS.C_PLUS_PLUS), part: '2 of 2' },
          { ...getLecture(IDS.DESIGN_SPRINT), part: '3 hrs workshop' },
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
      {
        time: TIME_SLOTS['09:00-12:00'],
        heading: HEADINGS.WORKSHOPS,
        events: [
          { ...getLecture(IDS.MICRO_PYTHON), part: '3 of 3' },
          { ...getLecture(IDS.UNREAL_ENGINE), part: '3 of 3' },
          { ...getLecture(IDS.PYTHON_TOUR), part: '3 of 3' },
          { ...getLecture(IDS.AGILE), part: '2 of 2' },
          {
            ...getLecture(IDS.HACKATHON),
            part: '1 of 1',
            color: '#03D1AB',
            key: 'hackathon green',
          },
          {
            ...getLecture(IDS.HACKATHON),
            part: '1 of 1',
            color: '#EB7B2D',
            key: 'hackathon orange',
          },
        ],
      },
      {
        time: TIME_SLOTS['12:15'],
        events: [
          {
            title: 'DCOE and CIT QA (Air London+NewYork)',
            speaker: 'Moderated by Kristian Flikka',
          },
        ],
      },
      {
        time: TIME_SLOTS['13:00'],
        events: [{ title: 'Lunch' }],
        background: COLORS.LIGHT_YELLOW,
      },
      {
        time: TIME_SLOTS['14:15'],
        events: [{ title: 'Summary (Air London+NewYork)', color: '#ec384a' }],
      },
      {
        time: TIME_SLOTS['15:00'],
        events: [{ title: 'EOC' }],
      },
    ],
  },
];
