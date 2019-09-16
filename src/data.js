import React from 'react';

const CATEGORIES = {
  KEYNOTE: 'Keynote',
  LANGUAGE: 'Language',
  MINIWORKSHOP: 'Miniworkshop',
  WORKSHOP: 'Workshop',
  LIGHTNING: 'Lightning talks',
  PLENARY: 'Plenary',
  LEISURE: 'Leisure and activities time',
};

const HEADINGS = {
  KEYNOTE: 'Keynote',
  LIGHTNING: 'Lightning',
  LANGUAGES: 'Languages',
  WORKSHOPS: 'Workshops',
  MINIWORKSHOPS: 'Miniworkshops',
  PLENARY: 'Plenary',
};

const SPEAKERS = {
  // keynotes
  SAM_NEWMAN: 'Sam Newman',
  JAMES_LEWIS: 'James Lewis',

  CARSTEN: 'Carsten Falk Hammershøj',

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
  TEAM_ACE: 'Tor-Ivar Hals, Kristina Marie Kjønnås, Katarzyna Wdaniec',

  // miniworkshops
  JORGEN_KVALSVIK: 'Jørgen Kvalsvik',
  TORILL_GABRIELSEN: 'Torill Kjøsnes Gabrielsen',
  MARKUS_DREGI: 'Markus Fanebust Dregi',
  PAAL_GROENAAS_DRANGE: 'Pål Grønås Drange',
  EIRIK_NORDBOE: 'Eirik Nordbø',
  THOMAS_HJELDE_THORESEN: 'Thomas Hjelde Thoresen',
};



const TIME_SLOTS = {
  // named timeslots
  'REGISTRATION': '08:15 — 08:45',
  'WELCOME': '08:45 — 09:00',
  'LIGHTNING': '10:10 — 11:00',
  'LANGUAGE': '13:30 — 16:00',
  'LANGUAGE_SHORT': '13:30 — 15:00',  // only for pgdr open source
  'WORKSHOP_1': '10:15 — 12:30',
  'WORKSHOP_2': '13:30 — 17:00',
  'WORKSHOP_3': '09:00 — 12:00',  // same as MINIWORKSHOP
  'MINIWORKSHOP': '09:00 — 12:00',
  'KEYNOTE_1': '09:00 — 10:00',
  'KEYNOTE_2': '09:00 — 10:00',
  'LUNCH_DAY1': '12:30',
  'LUNCH_DAY2': '12:30',
  'LUNCH_DAY3': '12:15',
  'PLENARY_1_1': '11:30 — 12:30',
  'PLENARY_1_2': '16:15 — 17:15',
  'PLENARY_3_1': '13:15 — 14:15',
  'LEISURE_TIME': '17:30 — 19:00',
  'DINNER': '19:30',
};

const CALENDAR_DATE = {
  TUESDAY: 'Tuesday September 17',
  WEDNESDAY: 'Wednesday September 18',
  THURSDAY: 'Thursday September 19',
};

const CONFERENCE_DAYS = {
  DAY_1: 'Day 1',
  DAY_2: 'Day 2',
  DAY_3: 'Day 3',
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
  ROBOCAR_WORKSHOP: 'robocar_workshop',
  AGILE_WORKSHOP: 'agile_workshop',


  // MINI-WORKSHOPS
  PYTHON_LIBS: 'python_libs',
  GITINTRO: 'gitintro',
  GIS_INTRO: 'gis_intro',
  NLP_OUTSIDE: 'nlp_outside',
  SAVE_THE_DRONE: 'save_the_drone',
  INTRO_CTF: 'intro_ctf',
  MLFLOW: 'mlflow',
  BEYOND_WORKSHOP: 'beyond_workshop',

  // YMSE
  LEISURE_1: 'leisure_1',
  LEISURE_2: 'leisure_2',
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
          'Microservices and Serverless continue to be two of the most hyped terms in our industry. As I’ve explored previously, some of that hype may be justified, but you need to take some time to cut to the heart of what makes them important if you want to get the most out of them. I remain convinced that Serverless technology offers the potential to make teams significantly more productive, but I still find people confused as to what serverless actually is, and whether or not things like Cloud Functions mean we no longer need to worry about microservices.\n\n'+
          'In this talk, I’ll examine who these two ideas can work together, and explore the space of serverless more broadly. Should you be worried about vendor lock-in? Does cloud functions mean you can get rid of your operations department? Or will serverless technology just lead to a terribly confused spaghetti IT landscape? I’ll try to make sense of the hype and help you understand if serverless and microservices are right for you.'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['KEYNOTE_1'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.KEYNOTE,
  },

  // LANGUAGES
  {
    id: IDS.OPENSOURCE,
    title: 'What\'s the deal with open source? (Kiellandsalen)',
    shortTitle: 'Open source (Kiellandsalen)',
    speaker: SPEAKERS.PAAL_GROENAAS_DRANGE,
    description: (
      <p>
        {
          'We\'ll take a look at frequently asked questions around the use of, and development of, Open Source (Free Software).\n'+
            '\n'+
            'What is Open Source?\n'+
            '\n'+
            'Is it Free?\n'+
            '\n'+
            'Why do we invest in giving away software for "free"?\n'+
            '\n'+
            'And what are all these different licenses about?'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['LANGUAGE_SHORT'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    day: CONFERENCE_DAYS.DAY_1,
    category: CATEGORIES.LANGUAGE,
  },
  {
    id: IDS.CSS,
    title: 'Styling components – a CSS crash course (Rederiet 6th floor)',
    shortTitle: 'CSS (Rederiet 6th floor)',
    speaker: SPEAKERS.VICTOR_NYSTAD,
    description: (
      <p>
        {
          'Preparations:\n'+
            'Install\n'+
            ' - Node.js (latest),\n'+
            ' - a Git client,\n'+
            ' - Chrome and \n'+
            ' - VS Code (out-of-the-box without third-party extensions).\n\n'+
            'No prior CSS knowledge required.\n\n'+
            'In this workshop we\'ll go through some fundamental concepts in CSS and look at different strategies for styling components.\n\n\n'+
            '#edc2019-css-workshop at equinor.slack.com'

        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['LANGUAGE'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    day: CONFERENCE_DAYS.DAY_1,
    category: CATEGORIES.LANGUAGE,
  },
  {
    id: IDS.LUA,
    title: 'From Lua with LÖVE (Rederiet 6th floor)',
    shortTitle: 'Lua (Rederiet 6th floor)',
    speaker: SPEAKERS.JUAN_ALAMO,
    description: (
      <p>
        {
'Lua is a powerful, efficient, lightweight, embeddable scripting language. It supports procedural programming, object-oriented programming, functional programming, data-driven programming, and data description.\n\n'+
'Lua is an extension language, so it is meant to extend other software by adding scripts. It is used in Minecraft, in Unity and in realtime integration solutions like Tarantool.\n\n'+
'To get familiar with its powerful realtime scripting we will develop a small controller simulation using the LÖVE framework.\n\n'+
'Visual Studio Code has extensions for Lua, however we will use ZeroBrane Studio (https://studio.zerobrane.com/) since it has a great integration with LÖVE.\n\n'+
'To follow the content an participate, for Windows Equinor machines I recommend\n\n'+
' - download the Windows 32bit zip archive from the ZeroBrane download page (https://studio.zerobrane.com/download?not-this-time) and\n\n'+
' - the 32 or 64 bit zipped archive from the LÖVE download page (https://love2d.org/).\n\n'+
            'For Mac and Linux just use the distribution packages.\n\n\n'+
            '#edc2019-lua at equinor.slack.com'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['LANGUAGE'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    day: CONFERENCE_DAYS.DAY_1,
    category: CATEGORIES.LANGUAGE,
  },
  {
    id: IDS.RADIX,
    title: 'Radix (Kannik)',
    shortTitle: 'Radix (Kannik)',
    speaker: SPEAKERS.KJELL_ERIK_REED_ANDA,
    description: (
      <p>
        {
'The purpose of the workshop is to give a general and hands-on introduction to Radix. We will take a UI-First approach (https://konstantinpavlov.net/blog/2017/03/07/ui-first-development/), where we will start from a web app with mocked data, establish a CI/CD DevOps cycle in Radix, integrate the web app with an API and add authentication using oauth-proxy (https://github.com/pusher/oauth2_proxy). If there is time we\'ll explore monitoring using prometheus and grafana.\n\n'+
'Pre-requisites\n'+
' - Account on github.com\n'+
' - Git installed and working locally against github.com\n'+
' - Docker running locally\n'+
' - Local dev. environment (IDE++)\n'+
' - Node js eco system installed and running (Download Nodejs)\n'+
' - If you dont have everything in place, join the workshop and team up with someone else\n'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['LANGUAGE'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    day: CONFERENCE_DAYS.DAY_1,
    category: CATEGORIES.LANGUAGE,
  },
  {
    id: IDS.PROLOG,
    title: 'Prolog (Kongsgardsstuen)',
    shortTitle: 'Prolog (Kongsgardsstuen)',
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
        time: TIME_SLOTS['LANGUAGE'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    day: CONFERENCE_DAYS.DAY_1,
    category: CATEGORIES.LANGUAGE,
  },
  {
    id: IDS.CLOJURE,
    title: 'Clojure (Kiellandstuen)',
    shortTitle: 'Clojure (Kiellandstuen)',
    speaker: SPEAKERS.JORN_OLMHEIM,
    description: (
        <p>
        {'Learn You a Clojure for Great Good\n\n'}
{<span><tt> (ns clojure-noob.core</tt><br /></span> }
{<span><tt>     (:gen-class))</tt><br /><br /></span> }
{<span><tt> (defn -main</tt><br /></span> }
{<span><tt>     "I don\'t do a whole lot...yet."</tt><br /></span> }
{<span><tt>     [& args]</tt><br /></span> }
{<span><tt>     (println "Hello, World!"))</tt><br /></span> }
        {
          'Clojure is a Lisp running on the JVM. This means that it is a functional, data-oriented language with close interoperability with Java libraries.\n\n'+
            'In this short tutorial you will get to learn the basics of Clojure and get started writing your first Clojure programs. If there is time or you already know the basics, we\'ll move on to building a restful webservice to see how Clojure can help you build powerful applications in a functional style.\n\n'+
            'The tutorial is aimed at anyone who is interested in learning Clojure, and will cater to both newbies and more experienced functional programmers and even seasoned Lispers. In order to get as far as possible in the short time allotted, please make sure you have a current JDK installed as well as Leiningen the Clojure build/project tool. Also have your favourite IDE/text editor ready.\n\n'+
            'If you want to attend please have a look at the getting started guide and have everything up and running on your OS of choice.\n\n'+
            'https://clojure.org/guides/getting_started'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['LANGUAGE'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    day: CONFERENCE_DAYS.DAY_1,
    category: CATEGORIES.LANGUAGE,
  },
  {
    id: IDS.DEEPC,
    title: 'Deep C (Mortepumpen)',
    shortTitle: 'Deep C (Mortepumpen)',
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
        time: TIME_SLOTS['LANGUAGE'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    day: CONFERENCE_DAYS.DAY_1,
    category: CATEGORIES.LANGUAGE,
  },
  {
    id: IDS.DOCKER,
    title: 'Docker (Atlantic hall)',
    shortTitle: 'Docker (Atlantic hall)',
    speaker: SPEAKERS.STIAN_OVREVAGE,
    description: (
      <p>
        {
          'Preparations:\n'+
            ' - Docker installed and working on your machine.\n'+
            ' - Follow the instructions at https://equinor.github.io/edc2019-docker/\n'+
            '\n'+
            'For:\n'+
            ' - People interested in cloud and modern building and deployment practices\n' +
            '\n'+
            'Outcome:\n'+
            ' - To have a basic understanding of the history and benefits of Docker as well as enough practical experience to start using it in simple projects.\n\n\n'+
            '#edc2019-docker at equinor.slack.com'

        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['LANGUAGE'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    day: CONFERENCE_DAYS.DAY_1,
    category: CATEGORIES.LANGUAGE,
  },
  // END OF LANGUAGES



  // MINIWORKSHOP
  {
    id: IDS.GITINTRO,
    title: 'A primer on Git (Kannik)',
    shortTitle: 'Introduction to Git (Kannik)',
    speaker: SPEAKERS.PAAL_GROENAAS_DRANGE,
    description: (
      <p>
        {
          'This is an introduction to version control system and specifically git.\n'+
            '\n'+
            'Prerequisites:\n'+
            ' - Get Elevated Priveleges or at least the Elevated Installer if on Equinor Windows\n'+
            ' - Install Git Bash if you\'re on Windows!\n'+
            ' - Launch the terminal and type git if you\'re on a macOS\n'+
            '\n'+
            'Target audience:\n'+
            ' - People who want to get started with Git and version control, either for configs, source code, or other textual data.\n'+
            ' - Nothing new if you already can do branch and rebase!\n'+
            '\n'+
            'We go through the basics of distributed version control and make and edit/rebase commits, create and merge branches, revert and fix conflicts, and use several remotes.\n'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['MINIWORKSHOP'],
        day: CONFERENCE_DAYS.DAY_3,
        date: CALENDAR_DATE.THURSDAY,
      },
    ],
    day: CONFERENCE_DAYS.DAY_3,
    category: CATEGORIES.MINIWORKSHOP,
  },
  {
    id: IDS.PYTHON_LIBS,
    title: 'How to build Python libraries (Sølvberget)',
    shortTitle: 'Building Python libraries (Sølvberget)',
    speaker: SPEAKERS.JORGEN_KVALSVIK,
    description: (
      <p>
        {
          'Preparations: none strictly necessary, but if you want follow the examples, you must have a working Python installation.\n\n'+
            'Target audience: anyone curious on (advanced) Python development and packaging, or speeding up Python with native code\n\n'+
            'Expect: This is about _building_ (compiling), not code.\n\n'+
            'Python is a pretty good user-facing language, but sometimes things need speeding up, or you need to interact with a C++ library. The first step in this interaction is building it, and it is not necessarily smooth sailing. This workshop goes through the whole process, from an empty directory to a package with C++ code, installable with pip install.'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['MINIWORKSHOP'],
        day: CONFERENCE_DAYS.DAY_3,
        date: CALENDAR_DATE.THURSDAY,
      },
    ],
    day: CONFERENCE_DAYS.DAY_3,
    category: CATEGORIES.MINIWORKSHOP,
  },
  {
    id: IDS.GIS_INTRO,
    title: 'Introduction to MapHub and ArcGIS with Python (Tulsa)',
    shortTitle: 'Introduction to Geo (Tulsa)',
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
        time: TIME_SLOTS['MINIWORKSHOP'],
        day: CONFERENCE_DAYS.DAY_3,
        date: CALENDAR_DATE.THURSDAY,
      },
    ],
    day: CONFERENCE_DAYS.DAY_3,
    category: CATEGORIES.MINIWORKSHOP,
  },
  {
    id: IDS.NLP_OUTSIDE,
    title: 'Language Processing when you are not in academia (Kiellandstuen)',
    shortTitle: 'NLP outside academia (Kiellandstuen)',
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
        time: TIME_SLOTS['MINIWORKSHOP'],
        day: CONFERENCE_DAYS.DAY_3,
        date: CALENDAR_DATE.THURSDAY,
      },
    ],
    day: CONFERENCE_DAYS.DAY_3,
    category: CATEGORIES.MINIWORKSHOP,
  },
  {
    id: IDS.SAVE_THE_DRONE,
    title: 'Saving the drone — An Algorithms and Data Structures recap (Ledaalstuen)',
    shortTitle: 'Saving the drone (Ledaalstuen)',
    speaker: SPEAKERS.MARKUS_DREGI,
    description: (
      <p>
        {
          'Saving the drone — After the SI gathering you casually left your drone in the maze. But what nobody told you is that after dark all the monsters get out.\n\n'+
              'And of course, it turns out that the drone is highly classified Equinor material, so it has be rescued. During this workshop we will rescue your drone utilizing one graph traversal algorithm after the other, with all the tricks your professor never told you.\n\n'+
              'Since it is already dark, we are going in blind, i.e. there will be no simulator. But fear not, you will be enlightened by the end.\n\n'+
               '#edc2019-saved-by-algorithms at equinor.slack.com'


        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['MINIWORKSHOP'],
        day: CONFERENCE_DAYS.DAY_3,
        date: CALENDAR_DATE.THURSDAY,
      },
    ],
    day: CONFERENCE_DAYS.DAY_3,
    category: CATEGORIES.MINIWORKSHOP,
  },
  {
    id: IDS.INTRO_CTF,
    title: 'An introduction to CTFs — an exciting way to gain new knowledge and skills (Valberget)',
    shortTitle: 'Introduction to CTFs (Valberget)',
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
        time: TIME_SLOTS['MINIWORKSHOP'],
        day: CONFERENCE_DAYS.DAY_3,
        date: CALENDAR_DATE.THURSDAY,
      },
    ],
    day: CONFERENCE_DAYS.DAY_3,
    category: CATEGORIES.MINIWORKSHOP,
  },
  {
    id: IDS.MLFLOW,
    title: 'Machine learning — From experiments to production with MLFlow (Horizon)',
    shortTitle: 'To production with MLFlow (Horizon)',
    speaker: SPEAKERS.THOMAS_HJELDE_THORESEN,
    description: (
      <p>
        {
          'The workshop will demonstrate the lifecycle of a machine learning model through the following phases:\n\n'+
            ' - Experimenting and EDA in jupyter notebook.\n'+
            ' - Running structured experiments locally.\n'+
            ' - Running experiments remotely on a Databricks-cluster in Azure.\n'+
            ' - Evaluating results of experiments and choosing a model to deploy.\n'+
            ' - Deploy the selected model to production in Azure.\n'+
            ' - Making requests to the model.\n'+
            '\n'+
            'The workshop will be held on a Windows computer with elevated privileges.\n'+
            '\n'+
            'Recommended prerequisites are Ubuntu (Windows Subsystem for Linux).\n'+
            '\n'+
            'In order to follow all parts of the workshop, access to run jobs on a databricks-cluster (DataplatformDBricksDev) in OMNIA is required. This should be available to all with OMNIA DEVELOPER or OMNIA DATA SCIENTIST roles, which may be requested through AccessIT. This is not a requirement to benefit from the workshop.'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['MINIWORKSHOP'],
        day: CONFERENCE_DAYS.DAY_3,
        date: CALENDAR_DATE.THURSDAY,
      },
    ],
    day: CONFERENCE_DAYS.DAY_3,
    category: CATEGORIES.MINIWORKSHOP,
  },
  {
    id: IDS.BEYOND_WORKSHOP,
    title: 'Beyond Budgeting — Business agility in practice with Bjarte Bogsnes (Atlantic hall)',
    shortTitle: 'Beyond Budgeting — Business agility in practice (Atlantic hall)',
    speaker: SPEAKERS.BJARTE_BOGSNES,
    description: (
      <p>
        {
          'Beyond Budgeting — Business agility in practice\n'+
            '\n'+
            'We know that command & control doesn\'t work well in complex environments. But what is the alternative? Bjarte Bogsnes and Beyond Budgeting is providing answers.\n'+
            '\n'+
            'In this 3 hour workshop you will learn about aspects of the adaptive management model Beyond Budgeting, from background to philosophy to its 12 principles covering leadership and management, and the close relationship between Beyond Budgeting and Agile.\n\n'+
            'Attendees will understand how to trust and empower without losing control, and learn how to redefine performance — with dynamic and relative targets (or no targets at all) and a holistic performance evaluation.\n'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['MINIWORKSHOP'],
        day: CONFERENCE_DAYS.DAY_3,
        date: CALENDAR_DATE.THURSDAY,
      },
    ],
    day: CONFERENCE_DAYS.DAY_3,
    category: CATEGORIES.MINIWORKSHOP,
  },

  // PLENARY DAY 1
  {
    id: IDS.PRODUCT_DEVELOPMENT,
    title: 'Three fish — Pivoting from a "Swiss watch mentality", to becoming a post-digital enterprise',
    shortTitle: 'Three fish (Atlantic Hall)',
    speaker: SPEAKERS.PER_IVAR_SELVAAG,
    description: (
      <p>
        {
          ''
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['PLENARY_1_1'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.PLENARY,
  },

  {
    id: IDS.DESIGN_SYSTEM,
    title: 'TL;DR The Equinor Design System',
    shortTitle: 'Design System (Atlantic Hall)',
    speaker: SPEAKERS.TEAM_EDS,
    description: (
      <p>
        {
          'We will introduce you to the Equinor Design System (EDS). You will learn the benefits of design systems, and how the EDS can help your team to efficiently build consistent user interfaces. This session is for everyone involved in product development with a focus on the developer.\n\n'+
            'https://eds.equinor.com'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['PLENARY_1_2'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.PLENARY,
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
          'Recent research summarised in the book Accelerate points to a set of practices that lead to high software development organisation performance. Simultaneously, research from the Santa Fe institute on Complex Adaptive Systems over the last 20 years seems to point to a grand unified theory of organisational design. So have we cracked it? Do we now have the answer to the question: how do we create and scale high performing software and organisations?\n\n'+
            'In his keynote, James explores this research and takes a look at some of the surprising links between microservices, organisations and evolutionary architecture.'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['KEYNOTE_2'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
    ],
    category: CATEGORIES.KEYNOTE,
  },


  {
    id: IDS.MONOLITH,
    title: 'Monolith to microservices (Atlantic hall)',
    shortTitle: 'Monolith→Microservice (Atlantic hall)',
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
        time: TIME_SLOTS['WORKSHOP_1'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['WORKSHOP_2'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
    ],
    category: CATEGORIES.WORKSHOP,
  },

  {
    id: IDS.DEVELOPING_APIS,
    title: 'Developing APIs (Rederiet 6th floor)',
    subtitle: 'Developing APIs (Rederiet 6th floor)',
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
        time: TIME_SLOTS['WORKSHOP_1'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['WORKSHOP_2'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
    ],
    category: CATEGORIES.WORKSHOP,
  },

  {
    id: IDS.PYTHON_TOUR,
    title: 'A Tour of Python (Sølvberget)',
    shortTitle: 'Introduksjon til Python (Sølvberget)',
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
        time: TIME_SLOTS['WORKSHOP_1'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['WORKSHOP_2'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
    ],
    category: CATEGORIES.WORKSHOP,
  },

  {
    id: IDS.HACK_YOURSELF,
    title: 'Learn to Hack Yourself (Kongsgaardstuen)',
    shortTitle: 'Learn to Hack Yourself (Kongsgaardstuen)',
    speaker: SPEAKERS.TEAM_HACKYOURSELF,
    color: '#367ABD',
    description: (
      <p>
        {
          'Hands-on workshop focusing on web and mobile security, aiming to increase the security awareness for software developers. It looks at security from the attacker\'s perspective and takes them through the steps necessary to exploit vulnerable software on the web.\n\n'+
            'Vulnerabilities like Cross-site Scripting (XSS), SQL Injection, Cross-Site Request Forgery (CSRF) ect. will be covered in this workshop.\n\n'+
            'Partisipants should have the following software installed:\n'+
            ' - Fiddler https://www.telerik.com/fiddler\n'+
            ' - Python 3 https://www.python.org/downloads/\n'+
            ' - Sqlmap http://sqlmap.org/\n'+
            '\n'+
            'Verify sqlmap by running sqlmap.py\n\n'+
            'Target group for workshop is software developers, system administrators and testers.\n\n'+
            'Level: Beginner'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['WORKSHOP_1'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['WORKSHOP_2'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['WORKSHOP_3'],
        day: CONFERENCE_DAYS.DAY_3,
        date: CALENDAR_DATE.THURSDAY,
      },
    ],
    category: CATEGORIES.WORKSHOP,
  },

    {
    id: IDS.ROBOCAR_WORKSHOP,
    title: 'Bring Your Own Project / Robocar league (Antique 2)',
    shortTitle: 'Robocar league, or: BYOP (Antique 2)',
    speaker: SPEAKERS.THORVALD_JOHANNESSEN,
    color: '#367ABD',
    description: (
      <p>
        {
'Spend the time at EDC to start up a new playground project. Software or hardware. By yourself, or together with some colleges. Bring your own, or build something beautiful with the hardware available. Perhaps this is the time to bring your micro-python project from last year back to life?\n\n'+
'Join in and become a founder of the first EDC Robocar league!\n\n'+
'We\'ll provide the parts to build two complete Robocars, using the Donkey car setup. A project suitable for two or three persons pr. car.\n\n'+
'Build it, drive it, and then learn it how to drive itself.\n\n'+
            'This project will require some effort. And we are not by any means confident that we\'ll complete the project during these two days. But what a great start it can be for your new favorite hobby?\n\n\n'+
            '#robocar at equinor.slack.com'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['WORKSHOP_1'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['WORKSHOP_2'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['WORKSHOP_3'],
        day: CONFERENCE_DAYS.DAY_3,
        date: CALENDAR_DATE.THURSDAY,
      },
    ],
    category: CATEGORIES.WORKSHOP,
  },

  {
    id: IDS.KUBERNETES,
    title: 'Kubernetes (Kiellandstuen)',
    shortTitle: 'Kubernetes (Kiellandstuen)',
    speaker: SPEAKERS.TEAM_RADIX,
    color: '#03D1AB',
    description: (
      <p>
        {
          'Kubernetes is an open source container-orchestration system, and is one of the fastest growing open source projects. It supports cloud-native applications by deploying them as microservices, packaging each part into its own container, and dynamically orchestrating those containers to optimise resource utilisation.\n\n'+
            'In this workshop, we will introduce the fundamentals of Kubernetes and get our hands dirty deploying microservices to a Kubernetes cluster\n\n\n'+
            '#edc2019-kubernetes at equinor.slack.com'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['WORKSHOP_1'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['WORKSHOP_2'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
    ],
    category: CATEGORIES.WORKSHOP,
  },

  {
    id: IDS.AGILE_WORKSHOP,
    title: 'Agile Unconference (Kannik)',
    shortTitle: 'Agile Unconference (Kannik)',
    speaker: SPEAKERS.TEAM_ACE,
    color: '#03D1AB',
    description: (
      <p>
        {
'Are you tired of the buzzword “agile”?\n'+
'\n'+
'Is your development team stuck with operational work?\n'+
'\n'+
'Does your product owner suck?\n'+
'\n'+
'Is your leader never available to listen and understand your challenges?\n'+
'\n'+
'Are you tired of wasting time on “organizational hazzle”?\n'+
'\n'+
'\n'+
'\n'+
'Then this is the place for you!\n'+
'\n'+
'\n'+
'The Agile unConference is the place where you bring your burning questions, listen to those of others, participate in discussion sessions and get even smarter than you already are — together!\n'+
'\n'+
'We would like to emphasize the informal exchange of information and ideas between participants.\n'+
'\n'+
'\n'+
'\n'+
'We invite you to join us in conversations on how to:\n'+
'\n'+
'10:15 — 11:15: Re-Write the Agile manifesto\n'+
'\n'+
'11:30 — 12:30: Re-Organize Equinor — for a digital world\n'+
'\n'+
'13:30 — 14:15: Re-Think leadership — lead with|in|tension\n'+
'\n'+
'14:30 — 15:15: Re-Design DevOps\n'+
'\n'+
'15:30 — 16:15: Re-Invent the Product Owner\n'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['WORKSHOP_1'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['WORKSHOP_2'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
    ],
    category: CATEGORIES.WORKSHOP,
  },

  {
    id: IDS.HANDS_ON_OMNIA,
    title: 'Hands On With OMNIA (Valberget)',
    shortTitle: 'Hands on Omnia (Valberget)',
    speaker: SPEAKERS.TEAM_OMNIA,
    color: '#EB7B2D',
    description: (
      <p>
        {
          'Omnia is Equinor\'s new IT platform and will be central to how we develop going forwards. In this workshop we will give a short overview of what Omnia is before focussing on the data platform and the different options available. The hands on tutorial will cover the steps to build an end-to-end data pipeline from data ingestion, storage, compute, API creation and consumption.\n\n'+
            'Target Audience\n\n'+
            '- All developers in Equinor without existing Omnia experience.\n\n'+
            'Preparations\n\n'+
            '- None.\n\n\n'+
          '#edc2019-omnia at equinor.slack.com'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['WORKSHOP_1'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['WORKSHOP_2'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
    ],
    category: CATEGORIES.WORKSHOP,
  },

  {
    id: IDS.GPUMAGIC,
    title: 'GPU Magic with Python (Horizon)',
    shortTitle: 'GPU Magic (Horizon)',
    speaker: SPEAKERS.JULIUS_PARULEK,
    color: '#EE4035',
    description: (
      <p>
        {
            'I welcome all who would like to learn SIMPLE ways to implement even COMPLEX tasks on your TINY graphic cards! We will employ Python — as this language is so nice and simple and yet so powerful. In addition we will be exposed to GPU / Parallel languages (CUDA, OpenCL, etc) — learning to use our brains in parallel fashion too. Magic real-time rendering and 3D visualization tricks should also be revelead!\n\n'+
            '#edc2019-gpu-python at equinor.slack.com'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['WORKSHOP_1'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['WORKSHOP_2'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
    ],
    category: CATEGORIES.WORKSHOP,
  },

  {
    id: IDS.SAP_HACKATHON,
    title: 'Equinor time writing hackathon (Mortepumpen)',
    shortTitle: 'Timewriting hackathon (Mortepumpen)',
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
            'Maybe your solution will be the next Equinor time writing app?\n\n\n'+
            '#edc2019-hackathon-timewriting at equinor.slack.com'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['WORKSHOP_1'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['WORKSHOP_2'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['WORKSHOP_3'],
        day: CONFERENCE_DAYS.DAY_3,
        date: CALENDAR_DATE.THURSDAY,
      },
    ],
    category: CATEGORIES.WORKSHOP,
  },

  {
    id: IDS.ROBOT_COMPETITION,
    title: 'Real robot competition^W hackathon (Antique 1)',
    shortTitle: 'Real robots (Antique 1)',
    speaker: SPEAKERS.TEAM_REAL_ROBOT,
    color: '#f58db6',
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
'On Thursday we will select the best robot teams and have a tournament on the arena.\n\n\n'+
'#ros-game-workshop on equinor.slack.com.'
        }
      </p>
    ),
    timeSlots: [
      {
        time: TIME_SLOTS['WORKSHOP_1'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['WORKSHOP_2'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['WORKSHOP_3'],
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
  title: 'Team work (Rederiet 6th floor)',
  speaker: 'Dregi, Blaafjell Holwech, Wesenberg',
  description: (
      <p>
      {
        'Team work\n'+
          '1. When the One is hit by the bus (Markus Fanebust Dregi)\n'+
          '2. London to Aarhus - Collaborating hands on with the business (Joachim Blaafjell Holwech)\n'+
          '3. Assumptions is the mother of all f**k-ups (Harald Wesenberg)'
      }
    </p>
  ),
    timeSlots: [
      {
        time: TIME_SLOTS['LIGHTNING'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    day: CONFERENCE_DAYS.DAY_1,
    category: CATEGORIES.LIGHTNING,
},

{
  id: IDS.LIGHT_ARCHITECTURE,
  title: 'Architecture (Kongsgaardstuen)',
  speaker: 'Landre, Ølmheim, Eskov, Wivestad',
  description: (
      <p>
      {
        'Architecture\n\n'+
          '1. Domain Driven Design (Einar Landre)\n'+
          '2. What is EITA and why should I care? (Jørn Ølmheim)\n'+
          '3. 3rd party components in software projects (Anton Eskov)\n'+
          '4. Realizing the potential (Bjørn-Ovin Wivestad)'
      }
    </p>
  ),
    timeSlots: [
      {
        time: TIME_SLOTS['LIGHTNING'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    day: CONFERENCE_DAYS.DAY_1,
    category: CATEGORIES.LIGHTNING,
},


{
  id: IDS.LIGHT_CLOUD,
  title: 'Cloud (Mortepumpen)',
  speaker: 'Kragebøl Thomassen, Sogaard, Hansen',
  description: (
      <p>
      {
        'Cloud\n\n'+
          '1. How unit testing enables DevOps for Azure SQL databases (Nikolai Kragebøl Thomassen)\n'+
          '2. Cloud migration - How to fail most spectacular (Anders Sogaard)\n'+
          '3. API Management (Anette Hansen)'
      }
    </p>
  ),
    timeSlots: [
      {
        time: TIME_SLOTS['LIGHTNING'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    day: CONFERENCE_DAYS.DAY_1,
    category: CATEGORIES.LIGHTNING,
},


{
  id: IDS.LIGHT_LANGS_LIBS,
  title: 'Langs & libs (Kiellandstuen)',
  speaker: 'del Alamo, Wiker, Gåsemyr Magnus',
  description: (
      <p>
      {
        'Lightning Langs & libs with Lua, Lisp \'n Luigi:\n\n'+
          '1. Lua (Juan Martorell Gutierrez Del Alamo)\n'+
          '2. Web applications using Lisp (Raymond Wiker)\n'+
          '3. Data processing pipelines with Luigi (Jens Gåsemyr Magnus)'
      }
    </p>
  ),
    timeSlots: [
      {
        time: TIME_SLOTS['LIGHTNING'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    day: CONFERENCE_DAYS.DAY_1,
    category: CATEGORIES.LIGHTNING,
},

{
  id: IDS.LIGHT_ML_DATA_ANALYSIS,
  title: 'ML & Data analysis (Kiellandsalen)',
  speaker: 'Wade, Sundvall Fjermestad, Øren Hauge, del Alamo',
  description: (
      <p>
      {
        'ML & Data analysis\n\n'+
          '1. How to accelerate a geologist (David Wade)\n'+
          '2. ML in Subsurface (Sindre Sundvall Fjermestad)\n'+
          '3. Job shop drill scheduling (Lars Petter Øren Hauge) \n'+
          '4. Azure databricks (Juan Martorell Gutierrez Del Alamo)'
      }
    </p>
  ),
    timeSlots: [
      {
        time: TIME_SLOTS['LIGHTNING'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    day: CONFERENCE_DAYS.DAY_1,
    category: CATEGORIES.LIGHTNING,
},

{
  id: IDS.LIGHT_INFRASTRUCTURE,
  title: 'Infrastructure (Atlantic Hall)',
  speaker: 'Nome, Tjønneland, Reed Anda, Aabakken',
  description: (
      <p>
      {
        'Infrastructure\n\n'+
          '1. SpaceX Starlink — Broadband access everywhere (Jon Ole Nome)\n'+
          '2. 20 thousand leagues under the sea (Espen Alv Tjønneland)\n'+
          '3. Radix (Kjell-Erik Reed Anda)\n'+
          '4. Gaining business insight at the edge of the cloud (Anders Erling Aabakken)'
      }
    </p>
  ),
    timeSlots: [
      {
        time: TIME_SLOTS['LIGHTNING'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    day: CONFERENCE_DAYS.DAY_1,
    category: CATEGORIES.LIGHTNING,
},


{
  id: IDS.LIGHT_SOFTWARE,
  title: 'Software Engineering (Kannik)',
  speaker: 'Maudal, Hollund, Skjørestad',
  description: (
      <p>
      {
        'Software Engineering\n\n'+
          '1. Technical debt is good! (Olve Maudal)\n'+
          '2. FLOSS - Free/Libre Open Source Software (Knut Erik Hollund)\n'+
          '3. Security alerts on github.com (Lars Kåre Skjørestad)'
      }
    </p>
  ),
    timeSlots: [
      {
        time: TIME_SLOTS['LIGHTNING'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    day: CONFERENCE_DAYS.DAY_1,
    category: CATEGORIES.LIGHTNING,
},

  // LEISURE STUFF
  {
  id: IDS.LEISURE_1,
  title: 'Leisure and activities [Football or Crosstraining (30)]',
  speaker: 'Magrete & Lars Kåre',
  description: (
      <p>
      {
'Fotball:\n'+
'\n'+
'Find Magrete or Kirsti!\n'+
'\n'+
'\n'+
'Crosstraining:\n'+
'\n'+
'Timene gjennomføres på SATS St.Olav\n'+
'\n'+
'Link til beskrivelse av Crosstraining: https://www.sats.no/trening/gruppetrening/crosstraining/\n'+
'\n'+
'Praktisk informasjon Crosstraining\n'+
'Produkt: Crosstraining\n'+
'Lokasjon: SATS St.Olav\n'+
'Dato: 17.09.19\n'+
'Dag: Tirsdag\n'+
'Varighet: 17:55 – 18:40\n'+
'\n'+
'\n'+
'Hvis du ikke allerede er medlem i SATS, så oppgir du i resepsjonen at du er fra Equinor, og skal delta på fellestreningstimen. Du vil da bli sluppet gjennom porten. Selv om du ikke er medlem så disponerer du selvfølgelig garderobefasilitetene på senteret i forbindelse med gjennomføringen av timen. Husk treningstøy, håndkle, toalettsaker og hengelås.\n'
      }
    </p>
  ),
    timeSlots: [
      {
        time: TIME_SLOTS['LEISURE_TIME'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    day: CONFERENCE_DAYS.DAY_1,
    category: CATEGORIES.LEISURE,
},

  {
  id: IDS.LEISURE_2,
  title: 'Leisure and activities [Football or Spinning (48)]',
  speaker: 'Magrete & Lars Kåre',
  description: (
      <p>
      {
'Fotball:\n'+
'\n'+
'Find Magrete or Kirsti!\n'+
'\n'+
'\n'+
'Spinning:\n'+
'\n'+
'Timene gjennomføres på SATS St.Olav\n'+
'\n'+
'Under finner dere linker som beskriver disse to timene:\n'+
'\n'+
'Link til beskrivelse av Spinning: https://www.sats.no/trening/gruppetrening/cycling/\n'+
'\n'+
'Praktisk informasjon Spinning\n'+
'\n'+
'Produkt: Spinning\n'+
'Lokasjon: SATS St.Olav\n'+
'Dato: 18.09.19\n'+
'Dag: Onsdag\n'+
'Varighet: 17:45 – 18:30\n'+
'\n'+
'\n'+
'Hvis du ikke allerede er medlem i SATS, så oppgir du i resepsjonen at du er fra Equinor, og skal delta på fellestreningstimen. Du vil da bli sluppet gjennom porten. Selv om du ikke er medlem så disponerer du selvfølgelig garderobefasilitetene på senteret i forbindelse med gjennomføringen av timen. Husk treningstøy, håndkle, toalettsaker og hengelås.\n'
      }
    </p>
  ),
    timeSlots: [
      {
        time: TIME_SLOTS['LEISURE_TIME'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    day: CONFERENCE_DAYS.DAY_1,
    category: CATEGORIES.LEISURE,
},





];

const getLecture = id => events.find(lecture => lecture.id === id);

export const schedule = [
  {
    conferenceDay: CONFERENCE_DAYS.DAY_1,
    calendarDate: CALENDAR_DATE.TUESDAY,
    timeSlots: [
      {
        time: TIME_SLOTS['REGISTRATION'],
        events: [{ title: 'Registration' }],
        background: COLORS.LIGHT_YELLOW,
      },

      {
        time: TIME_SLOTS['WELCOME'],
        events: [{ title: 'Welcome to EDC2019' }],
        background: COLORS.SPRUCE_WOOD,
      },

      {
        time: TIME_SLOTS['KEYNOTE_1'],
        heading: HEADINGS.KEYNOTE,
        events: [getLecture(IDS.KEYNOTE_MICROSERVICES_AND_SERVERLESS)],
      },

      // DEFINITION PROGRAM LIGHTNING TALKS
      {
        time: TIME_SLOTS['LIGHTNING'],
        heading: HEADINGS.LIGHTNING,
        events: [
          getLecture(IDS.LIGHT_LANGS_LIBS),
          getLecture(IDS.LIGHT_TEAM_WORK),
          getLecture(IDS.LIGHT_ARCHITECTURE),
          getLecture(IDS.LIGHT_CLOUD),
          getLecture(IDS.LIGHT_ML_DATA_ANALYSIS),
          getLecture(IDS.LIGHT_INFRASTRUCTURE),
          getLecture(IDS.LIGHT_SOFTWARE),
        ],
      },

      // DEFINITION PROGRAM PLENARY (PER IVAR) before lunch
      {
        time: TIME_SLOTS['PLENARY_1_1'],
        heading: HEADINGS.PLENARY,
        events: [getLecture(IDS.PRODUCT_DEVELOPMENT)],
      },

      {
        time: TIME_SLOTS['LUNCH_DAY1'],
        events: [{ title: 'Lunch' }],
        background: COLORS.LIGHT_YELLOW,
      },



      // DEFINITION PROGRAM LANGUAGES
      {
        time: TIME_SLOTS['LANGUAGE'],
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
        time: TIME_SLOTS['PLENARY_1_2'],
        heading: HEADINGS.PLENARY,
        events: [getLecture(IDS.DESIGN_SYSTEM)],
      },




      // DEFINITION PROGRAM EOD DAY 1
      {
        time: TIME_SLOTS['LEISURE_TIME'],
        events: [getLecture(IDS.LEISURE_1)],
      },
      {
        time: TIME_SLOTS['DINNER'],
        events: [
          {
            title: 'Dinner (Full-course dinner) at Atlantic hall',
          },
        ],
        background: COLORS.LIGHT_YELLOW,
      },
      {
        time: '21:00',
        events: [{ title: 'Meet your colleagues' }],
      },
    ],
  },



  {
    conferenceDay: CONFERENCE_DAYS.DAY_2,
    calendarDate: CALENDAR_DATE.WEDNESDAY,
    timeSlots: [
      {
        time: TIME_SLOTS['WELCOME'],
        events: [{ title: 'Introducing workshops (Atlantic Hall)' }],
        background: COLORS.SPRUCE_WOOD,
      },

      {
        time: TIME_SLOTS['KEYNOTE_2'],
        heading: HEADINGS.KEYNOTE,
        events: [getLecture(IDS.KEYNOTE_EVOLUTIONARY_ARCHITECTURE)],
      },

      {
        time: TIME_SLOTS['WORKSHOP_1'],
        heading: HEADINGS.WORKSHOPS,
        events: [
          { ...getLecture(IDS.MONOLITH), part: '1 of 2' },
          { ...getLecture(IDS.DEVELOPING_APIS), part: '1 of 2' },
          { ...getLecture(IDS.KUBERNETES), part: '1 of 2' },
          { ...getLecture(IDS.GPUMAGIC), part: '1 of 2' },
          { ...getLecture(IDS.SAP_HACKATHON), part: '1 of 3' },
          { ...getLecture(IDS.HANDS_ON_OMNIA), part: '1 of 2' },
          { ...getLecture(IDS.PYTHON_TOUR), part: '1 of 2' },
          { ...getLecture(IDS.HACK_YOURSELF), part: '1 of 3' },
          { ...getLecture(IDS.ROBOT_COMPETITION), part: '1 of 3' },
          { ...getLecture(IDS.ROBOCAR_WORKSHOP), part: '1 of 3' },
          { ...getLecture(IDS.AGILE_WORKSHOP), part: '1 of 2' },
        ],
      },

      {
        time: TIME_SLOTS['LUNCH_DAY2'],
        events: [{ title: 'Lunch' }],
        background: COLORS.LIGHT_YELLOW,
      },

      {
        time: TIME_SLOTS['WORKSHOP_2'],
        heading: HEADINGS.WORKSHOPS,
        events: [
          { ...getLecture(IDS.MONOLITH), part: '2 of 2' },
          { ...getLecture(IDS.DEVELOPING_APIS), part: '2 of 2' },
          { ...getLecture(IDS.KUBERNETES), part: '2 of 2' },
          { ...getLecture(IDS.GPUMAGIC), part: '2 of 2' },
          { ...getLecture(IDS.SAP_HACKATHON), part: '2 of 3' },
          { ...getLecture(IDS.HANDS_ON_OMNIA), part: '2 of 2' },
          { ...getLecture(IDS.PYTHON_TOUR), part: '2 of 2' },
          { ...getLecture(IDS.HACK_YOURSELF), part: '2 of 3' },
          { ...getLecture(IDS.ROBOT_COMPETITION), part: '2 of 3' },
          { ...getLecture(IDS.ROBOCAR_WORKSHOP), part: '2 of 3' },
          { ...getLecture(IDS.AGILE_WORKSHOP), part: '2 of 2' },
        ],
      },

      {
        time: TIME_SLOTS['LEISURE_TIME'],
        events: [getLecture(IDS.LEISURE_2)],
      },

      {
        time: TIME_SLOTS['DINNER'],
        events: [{ title: 'Dinner (Tapas) at Atlantic hall' }],
        background: COLORS.LIGHT_YELLOW,
      },
      {
        time: '21:00',
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
        time: TIME_SLOTS['MINIWORKSHOP'],
        heading: HEADINGS.MINIWORKSHOPS,
        events: [
          getLecture(IDS.PYTHON_LIBS),
          getLecture(IDS.GIS_INTRO),
          getLecture(IDS.GITINTRO),
          getLecture(IDS.NLP_OUTSIDE),
          getLecture(IDS.SAVE_THE_DRONE),
          getLecture(IDS.INTRO_CTF),

          { ...getLecture(IDS.ROBOT_COMPETITION), part: '3 of 3' },
          { ...getLecture(IDS.SAP_HACKATHON), part: '3 of 3' },
          { ...getLecture(IDS.HACK_YOURSELF), part: '3 of 3' },
          { ...getLecture(IDS.ROBOCAR_WORKSHOP), part: '3 of 3' },


          getLecture(IDS.MLFLOW),
          getLecture(IDS.BEYOND_WORKSHOP),
        ],
      },


      {
        time: TIME_SLOTS['LUNCH_DAY3'],
        events: [{ title: 'Lunch' }],
        background: COLORS.LIGHT_YELLOW,
      },


      {
        time: TIME_SLOTS['PLENARY_3_1'],
        events: [
          { title: 'Business agility (Atlantic Hall)',
            color: '#ec384a',
            speaker: SPEAKERS.BJARTE_BOGSNES,
          }
        ],
      },


      {
        time: '14:15',
        events: [
          { title: 'Exiting remarks from the VP IT',
            speaker: SPEAKERS.CARSTEN,
          }
        ],
        background: COLORS.SPRUCE_WOOD,
      },


      {
        time: '14:30',
        events: [{ title: 'Bus to airport 🛫', color: '#ec384a' }],
      },


      {
        time: '15:00',
        events: [{ title: 'EOC' }],
      },




    ],
  },



];
