// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: "Roman",
    lastname: "Rozhchenko",
  },
  position: "Junior Fullstack JS Developer",
  salary: "600$ в місяц",
  address: "Ukraine, Sumy, st. Tarasа Shevchenko",
}

var footer = {
  social: {
 email: {
   text: "dmytro@mail.com",
   href: "mailto:dmytro@mail.com",
 },
 phone: {
   text: "+380670000123",
   href: "tel:+380670000123",
 },
 linkedin: {
   href: "https://www.linkedin.com/in/dmytro-test",
   text: "LinkedIn",
 },
},
}


// ================================================================
// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {title: "Resume | Summary",
    },

    header,

    main: {
      summary: {
        title: "Summary",
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
        work on a new project I learn the domain and try to understand the idea of the project. Good team
        player, every colleague is a friend to me.`,
      },
      experience: {
        title: "Other experience",
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },


    footer,
  })
})

// ================================================================
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/Education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('Education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: "Resume | Education",
          },

    header,

    main: {

      education: [
        {
          name: "Mechanical Engineering College",
          isEnd: false,
        },
        {
          name: "Polytechnic University",
          isEnd: false,
        },
        {name: "Okodemiya of the city economy",
        isEnd: true,
        },
      ],

      certificates: [
        {
          name: "Mechanical Engineering College",
          id: true,
          point: 12, 
      },
      {
        name: "Polytechnic Universitye",
        id: true,
        point: 13,
    },
       {
        name: "Okodemiya of the city economy",
        id: true,
        point: 14,
    }, 
      ],
     
    },
  
    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {title: "Resume | Skills",
    },

    header,

    main: {
      skills: [
        {
          name: "HTML",
          point: 10,
          isTop: true,
        },
        {
          name: "Handlebars",
          point: 9,
          isTop: true,
        },
        {
          name: "VS Code & NPM",
          point: 8,
          isTop: false,
        },
        {
          name: "Git",
          point: 7,
          isTop: false,
        },
        {
          name: "React.js",
           point: 0,
         
        },
        {
          name: "PHP",
           point: null,
        },
      ],
     
      hobbies: [
        {
        name: "English language learning",
        isMain: true,
        },
        {
        name: "Reading books",
        isMain: true,
        },
        {
          name: "Playing guitar",
          isMain: false,
          },
      
      ],
    },

    footer,
  })
})
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: "big",
    
    page: {title: "Resume | Work",
    },

    header,

    main: { 
      works: [
        {
          position: "Junior Fullstack Developer",
          company: {
          name: "IT Brains",
          url: "https://it-brains.com.ua/",
          },
          duration: {
            from: "20.06.2020",
            to: null,
          },
          projectAmount: 3,
          projects: [
            {
              name: "Resume",
              url: "https://resume.com.ua/",
              about: "Strategy description",
              stackAmount: 1,
              awardAmount: 2,
              stacks: [
                {
                name: "React.js",
              },
              {
                name: "HTML / CSS",
              },
              {
                name: "Nodejs",
              },
            ],
            awards: [
              {
                name: "Merited in battle"
              },
              {
                name: "For the liberation of Sumy"
              },
            ],
            },
          ],
        }, 
      ],
    },

    footer,
  })
})
// ================================================================


// Підключаємо роутер до бек-енду
module.exports = router
