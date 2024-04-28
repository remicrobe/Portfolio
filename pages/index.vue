<template>
  <v-row
      data-aos="fade"
      data-aos-once="true"
      data-aos-duration="1000"
  >
    <v-col md="6" cols="12" class="text-center">
      <v-img class="mr-5 ml-5 mt-5" max-height="450" src="/img/remi.png"></v-img>
    </v-col>

    <v-col md="6" cols="12" class="align-center mt-md-15">
      <v-container>
        <span class="ml-8 title">{{ t('welcome') }}</span>

        <div class="ml-8 mr-md-15 mr-8">
          <p v-html="t('mydescription')"></p>
        </div>

        <v-container class="text-center">
          <social-btn :social-network="socialNetwork"></social-btn>
        </v-container>
      </v-container>
    </v-col>
  </v-row>

  <v-row
      data-aos="fade"
      data-aos-once="true"
      data-aos-duration="1000"
      id="about-me"
      :style="'background-color:' + theme.current.value.colors.secondary"

      class="mt-10 pb-15"
  >
    <v-col md="12" cols="12" class="text-center">
      <v-container>
        <span class="title">{{ t('about') }}</span>

        <v-row justify="center">
          <v-divider class="mt-5" length="500"></v-divider>
        </v-row>
      </v-container>
    </v-col>


    <v-col md="6" cols="12">
      <div class="ml-md-16 ml-8 mb-2">
        <span class="subtitle">{{ t('professional') }}</span>
      </div>

      <profesional-time-line :experiences="professionalExperiences"></profesional-time-line>
    </v-col>

    <v-col md="6" cols="12" class="mt-md-0 mt-10">
      <div class="ml-md-16 ml-8 mb-2">
        <span class="subtitle">{{ t('education') }}</span>
      </div>

      <div class="mr-10">
        <educational-time-line :experiences="educationalExperiences"></educational-time-line>
      </div>
    </v-col>


  </v-row>

  <v-row
      data-aos="fade"
      data-aos-once="true"
      data-aos-duration="1000"
      id="skills"
      class="mt-10 mb-10"
  >
    <v-col md="12" cols="12" class="text-center">
      <v-container>
        <span class="title">{{ t('skills') }}</span>

        <v-row justify="center">
          <v-divider class="mt-5" length="500"></v-divider>
        </v-row>
      </v-container>
    </v-col>

    <display-skills :skill="skill" v-for="skill in typeSkills">
    </display-skills>


  </v-row>

  <v-row
      data-aos="fade"
      data-aos-once="true"
      data-aos-duration="1000"
      id="portfolio"
      :style="'background-color:' + theme.current.value.colors.secondary"

      class="mt-10 pb-15"
  >
    <v-col md="12" cols="12" class="text-center">
      <v-container>
        <span class="title">{{ t('portfolio') }}</span>

        <v-row justify="center">
          <v-divider class="mt-5" length="500"></v-divider>
        </v-row>
      </v-container>
    </v-col>

  <display-project v-for="project in projects" :project="project"></display-project>

  </v-row>


</template>

<script setup lang="ts">
import SocialBtn from "~/components/social/social-btn.vue";

const {t, locale} = useI18n({useScope: 'global'})
import AOS from "aos";
import {useTheme} from "vuetify";
import EducationalTimeLine from "~/components/visual/educational-time-line.vue";
import ProfesionalTimeLine from "~/components/visual/profesional-time-line.vue";
import DisplaySkills from "~/components/visual/display-skills.vue";
import DisplayProject from "~/components/visual/display-project.vue";

const theme = useTheme()


useHead({
  title: 'WEIL Rémi - Developer',
  meta: [
    {name: 'description', content: 'A small portfolio of an software engeneer.'}
  ]
})

let socialNetwork = ref([
  {icon: 'mdi-github', link: 'https://github.com/remicrobe', name: 'Github'},
  {icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/remi-weil-a19b3a1b9/', name: 'Linkedin'},
])

let professionalExperiences = [
  {
    title: {
      FR: "Analyste informatique",
      EN: "Computer Analyst"
    },
    company: "CHAUSSEA",
    contractType: {
      FR: "Contrat en alternance",
      EN: "Apprenticeship Contract"
    },
    startDate: "sept. 2023",
    endDate: "aujourd'hui",
    duration: "8 mois",
    location: "Valleroy, Grand Est, France",
    onSite: {
      FR: "Sur site",
      EN: "On site"
    },
    description: {
      FR: "Développement d’outils métier pour Chaussea, en tant qu’Analyste informatique.",
      EN: "Developing business tools for Chaussea as a computer analyst."
    },
    skills: {
      FR: ["Développement web", "Vue JS", "Vuetify", "JavaScript", "ExpressJS", "OracleDB", "SQL"],
      EN: ["Web Development", "Vue JS", "Vuetify", "JavaScript", "ExpressJS", "OracleDB", "SQL"]
    }
  },
  {
    title: {
      FR: "Équipier polyvalent",
      EN: "Versatile Team Member"
    },
    company: "Lidl France",
    contractType: {
      FR: "CDI temps partiel",
      EN: "Part-time Permanent Contract"
    },
    startDate: "août 2023",
    endDate: "aujourd'hui",
    duration: "9 mois",
    location: "France",
    onSite: {
      FR: "Sur site",
      EN: "On site"
    },
    description: {
      FR: "Emploi étudiant",
      EN: "Student job to support my student needs."
    },
    skills: {
      FR: ["Management et gestion d'équipe"],
      EN: ["Management and team management"]
    }
  },
  {
    title: {
      FR: "Agent d’exploitation",
      EN: "Operations Agent"
    },
    company: "INDIGO Group",
    contractType: {
      FR: "CDI temps partiel",
      EN: "Part-time Permanent Contract"
    },
    startDate: "déc. 2021",
    endDate: "août 2023",
    duration: "1 an 9 mois",
    location: "Metz, Grand Est, France",
    onSite: {
      FR: "Sur site",
      EN: "On site"
    },
    description: {
      FR: "Maintenance des équipements de péage en parallèle de mes études.",
      EN: "Maintenance of toll equipment alongside my studies."
    },
    skills: {
      FR: ["Maintenance informatique", "Debugging", "Systèmes embarqués"],
      EN: ["Computer Maintenance", "Debugging", "Embedded Systems"]
    }
  },
  {
    title: {
      FR: "Développeur informatique embarqué",
      EN: "Embedded Software Developer"
    },
    company: "PRODEXYS",
    contractType: {
      FR: "Stage",
      EN: "Internship"
    },
    startDate: "juin 2022",
    endDate: "août 2022",
    duration: "3 mois",
    location: "Ars-sur-Moselle, Grand Est, France",
    onSite: {
      FR: "Sur site",
      EN: "On site"
    },
    description: {
      FR: "Développement d’IHM en Pascal et programmation sur PIC32 pour équipement industriel en C++. (Stage pour valider mon année de BTS)",
      EN: "Development of GUI in Pascal and programming on PIC32 for industrial equipment in C++. (Internship to validate my BTS year)"
    },
    skills: {
      FR: ["Microcontrôleur", "Python", "Delphi", "Liaison série", "Physique appliquée"],
      EN: ["Microcontroller", "Python", "Delphi", "Serial Communication", "Applied Physics"]
    }
  },
  {
    title: {
      FR: "Développeur informatique",
      EN: "Software Developer"
    },
    company: "1 2 3 PC",
    contractType: {
      FR: "Stage",
      EN: "Internship"
    },
    startDate: "déc. 2017",
    endDate: "déc. 2017",
    duration: "1 mois",
    location: "Sainte-Marie-aux-Chênes, Grand Est, France",
    onSite: {
      FR: "Sur site",
      EN: "On site"
    },
    description: {
      FR: "Développement de site web et gestion de bases de données, réparation de téléphone, montage de PC. (Stage de troisième)",
      EN: "Development of websites and database management, phone repair, PC assembly. (Third-year internship)"
    },
    skills: {
      FR: ["Développement de site web et mobile"],
      EN: ["Web and mobile development"]
    }
  }
];

let educationalExperiences = [
  {
    institution: {
      FR: "Metz Numeric School",
      EN: "Metz Numeric School"
    },
    degree: {
      FR: "Bachelor, Programmation / développeur informatique, général",
      EN: "Bachelor, Programming / Software Developer, General"
    },
    startDate: "sept. 2023",
    endDate: "sept. 2024",
    status: {
      FR: "En cours",
      EN: "In Progress"
    },
    description: {
      FR: "Bachelor Développeur Full Stack en 1 an de MNS à Metz. Titre RNCP « Développeur Full stack » Niveau 6 de la nomenclature européenne - Reconnu par l'Etat",
      EN: "Bachelor Full Stack Developer in 1 year at MNS in Metz. RNCP Title 'Full Stack Developer' Level 6 of the European classification - Recognized by the State"
    },
    skills: {
      FR: ["Python (langage de programmation)", "C#", "MySQL", "PHP", "Packet Tracer", "Programmation orientée objet (POO)", "C++"],
      EN: ["Python (programming language)", "C#", "MySQL", "PHP", "Packet Tracer", "Object Oriented Programming (OOP)", "C++"]
    }
  },
  {
    institution: {
      FR: "Lycée Polyvalent Jean Zay",
      EN: "Jean Zay Comprehensive High School"
    },
    degree: {
      FR: "Brevet de technicien supérieur (BTS), BTS Systèmes Numériques",
      EN: "Higher Technician's Certificate (BTS), BTS Digital Systems"
    },
    startDate: "sept. 2021",
    endDate: "juil. 2023",
    status: {
      FR: "Admis avec 17.52",
      EN: "Admitted with 17.52"
    },
    description: {
      FR: "Major de promo",
      EN: "Top of the class"
    },
    skills: {
      FR: ["Programmation logicielle intégrée", "Python (langage de programmation)", "C#", "MySQL", "PHP", "Packet Tracer", "Programmation orientée objet (POO)", "C++"],
      EN: ["Embedded Software Programming", "Python (programming language)", "C#", "MySQL", "PHP", "Packet Tracer", "Object Oriented Programming (OOP)", "C++"]
    }
  },
  {
    institution: {
      FR: "Lycée Polyvalent Louis de Cormontaigne",
      EN: "Louis de Cormontaigne Comprehensive High School"
    },
    degree: {
      FR: "Baccalauréat technologique, STI2D",
      EN: "Technological Baccalaureate, STI2D"
    },
    startDate: "sept. 2017",
    endDate: "juil. 2020",
    status: {
      FR: "Mention assez-bien",
      EN: "Fairly Good Mention"
    },
    description: "",
    skills: {}
  }
]

let typeSkills = [
  {
    type: {
      FR: "Langage de programmation",
      EN: "Programming Language"
    },
    icon: "mdi-code-braces",
    skills: ["C++", "C#", "JavaScript", "TypeScript", "PHP"]
  },
  {
    type: {
      FR: "Technologies web",
      EN: "Web Technologies"
    },
    icon: "mdi-web",
    skills: ["Symfony", "Vue.js", "React", "React Native"]
  },
  {
    type: {
      FR: "Base de données",
      EN: "Database"
    },
    icon: "mdi-database",
    skills: ["MySQL", "Oracle"]
  },
  {
    type: {
      FR: "Gestionnaire de code source",
      EN: "Version Control System"
    },
    icon: "mdi-github",
    skills: ["Git", "Github", "Gitlab"]
  },
  {
    type: {
      FR: "Plateforme de déploiement",
      EN: "Deployment Platform"
    },
    icon: "mdi-server-network",
    skills: ["Auto déploiement Linux", "Digital Ocean", "Heroku"]
  },
  {
    type: {
      FR: "Système d'exploitation",
      EN: "Operating System"
    },
    icon: "mdi-desktop-classic",
    skills: ["Debian", "Windows"]
  }
]

let projects = [
  {
    title: "ACCESSLink",
    description: {
      FR: "Un projet destiné à gérer les entrées sorties des employés d'une société tierce et de pouvoir gérer leurs temps de travail afin de faciliter le travail des RH.",
      EN: "A project aimed at managing the in and out of employees of a third-party company and managing their working hours to facilitate the work of HR."
    },
    img: "access.png",
    link: "https://github.com/remicrobe/ACCESS",
    skills: ["Raspberry", "JS", "Vuetify", "Vue", "Express", "ReactNative", "MySQL"]
  },
  {
    title: "HappyEAT API",
    description: {
      FR: "Projet réalisé en collaboration avec un collègue ayant pour objectif de permettre aux employés d'une entreprise de voter pour le lieu de leur repas.",
      EN: "Project done in collaboration with a colleague with the aim of allowing employees of a company to vote for the place of their meal."
    },
    img: "happy-eat.png",
    link: "https://github.com/remicrobe/HappyEat-API",
    skills: ["Socket", "ExpressJS", "Collaboration", "IOS", "oAuth", "refreshToken"]
  },
  {
    title: "EOLIA",
    description: {
      FR: "Eolia est un projet à but industriel qui vise à étudier les forces aérodynamiques exercées sur un corps dans une soufflerie.",
      EN: "Eolia is an industrial project aimed at studying the aerodynamic forces exerted on a body in a wind tunnel."
    },
    img: "eolia.png",
    link: "https://github.com/remicrobe/AERO-Application",
    skills: ["ESP32", "C++", "C#", "PHP", "JS"]
  },
  {
    title: "Prodexys Updater",
    description: {
      FR: "Un projet visant à mettre à jour des microcontrôleurs en masse dans les trains de la SNCF en utilisant des technologies préexistantes (CAN BUS, RS232) sans compromettre le fonctionnement actuel.",
      EN: "A project aimed at updating microcontrollers in bulk in SNCF trains using pre-existing technologies (CAN BUS, RS232) without compromising current operation."
    },
    img: "sncflogo.jpg",
    doclink: "https://docs.google.com/document/d/1b8pjG4gaxgtI9wzr9Apvqan6qd0uVN0zm320GKXEQcU/edit?usp=sharing",
    skills: ["Delphi", "Python", "Pic32MZ", "C++"]
  },
  {
    title: "Portfolio",
    description: {
      FR: "Un projet visant à démontrer mes capacités à développer un site web et à le mettre en production très rapidement, tout en exposant mes compétences.",
      EN: "A project aimed at demonstrating my ability to develop a website and deploy it very quickly, while showcasing my skills."
    },
    img: "portfolio.png",
    link: "https://github.com/remicrobe/Portfolio",
    skills: ["Github", "CI/CD", "Vue", "Vuetify", "Nuxt"]
  }
]


onMounted(() => {
  AOS.init();
})
</script>

<style scoped>
.title {
  font-size: 28px;
  font-weight: 500;
}

.subtitle {
  font-size: 20px;
  font-weight: 400;
}

p {
  text-align: justify;
  font-weight: 400;
}

.justify {
  text-align: justify;
}

</style>