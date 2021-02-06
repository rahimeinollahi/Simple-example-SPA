import { createRouter, createWebHistory } from 'vue-router'

//home 
const Home=import('../views/Home.vue')
//Course
const course1=import('../views/CourseView/Course1.vue')
const course2=import('../views/CourseView/Course2.vue')
const course3=import('../views/CourseView/Course3.vue')

//books
const Book1=import('../views/BookView/Book1.vue')
const Book2=import('../views/BookView/Book2.vue')
const Book3=import('../views/BookView/Book3.vue')

//Car
const Car1=import('../views/CarView/Car1.vue')
const Car2=import('../views/CarView/Car2.vue')
const Car3=import('../views/CarView/Car3.vue')

//Link2
    // link2 part1
    const Link2Home=import('../views/Link2View/Link2Home.vue')
    const SoftWare=import('../views/Link2View/SoftWare.vue')
    const HardWare=import('../views/Link2View/HardWare.vue')
    const Network=import('../views/Link2View/Network.vue')
    
    //link2 part2
    const CPlus=import('../views/Link2View/CPlus.vue')
    const CSharp=import('../views/Link2View/CSharp.vue')
    const JS=import('../views/Link2View/JS.vue')
    
    //link2 part3
    const Photoshop=import('../views/Link2View/Photoshop.vue')
    const AdobXd=import('../views/Link2View/AdobXd.vue')
    const Illistrator=import('../views/Link2View/Illistrator.vue')

//Gallery
 const GalleryHome=import('../views/GalleryView/GalleryHome.vue')
 const GalleryOne=import('../views/GalleryView/GalleryOne.vue')
 const GalleryTwo=import('../views/GalleryView/GalleryTwo.vue')
 const GalleryThree=import('../views/GalleryView/GalleryThree.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{transition:"ts-course"},
    children:[
      {
         path: '',
        name: 'course1',
        component: course1,
        meta:{transition:"ts-course"},
      },
      {
         path: 'course2',
        name: 'course2',
        component: course2,
        meta:{transition:"ts-course"},
      },
      {
        path: 'course3',
       name: 'course3',
       component: course3,
       meta:{transition:"ts-course"},
     },
     {
      path: 'book1',
     name: 'Book1',
     component: Book1,
     meta:{transition:"ts-book"},
   },
   {
    path: 'book2',
   name: 'Book2',
   component: Book2,
   meta:{transition:"ts-book"},
   },
   {
    path: 'book3',
   name: 'Book3',
   component: Book3,
   meta:{transition:"ts-book"},
   },
   {
    path: 'car1',
   name: 'Car1',
   component: Car1,
   meta:{transition:"ts-car"},
   },
   {
    path: 'car2',
   name: 'Car2',
   component: Car2,
   meta:{transition:"ts-car"},
   },
   {
    path: 'car3',
   name: 'Car3',
   component: Car3,
   meta:{transition:"ts-car"},
   },
    ]
  },
  {
    path: '/link2',
    name: 'Link2Home',
    component: Link2Home,
    meta:{transition:"ts-computer"},
    children:[
      {
        path: '',
        name: 'SoftWare',
        component: SoftWare,
        meta:{transition:"ts-computer"},
      },
      {
        path: 'hardware',
        name: 'HardWare',
        component: HardWare,
        meta:{transition:"ts-computer"},
      },
      {
        path: 'network',
        name: 'Network',
        component: Network,
        meta:{transition:"ts-computer"},
      },
      {
        path: 'cplus',
        name: 'CPlus',
        component: CPlus,
        meta:{transition:"ts-program"},
      },
      {
        path: 'csharp',
        name: 'CSharp',
        component: CSharp,
        meta:{transition:"ts-program"},
      },
      {
        path: 'js',
        name: 'JS',
        component: JS,
        meta:{transition:"ts-program"},
      },
      {
        path: 'photoshop',
        name: 'Photoshop',
        component: Photoshop,
        meta:{transition:"ts-graphic"},
      },
      {
        path: 'adobxd',
        name: 'AdobXd',
        component: AdobXd,
        meta:{transition:"ts-graphic"},
      },
      {
        path: 'illistrator',
        name: 'Illistrator',
        component: Illistrator,
        meta:{transition:"ts-graphic"},
      },
    ]
  },
  {
    path: '/galleryhome',
    name: 'GalleryHome',
    component: GalleryHome,
    meta:{transition:"ts-galleryhome"},
    children:[
      {
        path: '',
        name: 'GalleryOne',
        component: GalleryOne,
        meta:{transition:"ts-gallery-home"},
      },
      {
        path: 'gallerytwo',
        name: 'GalleryTwo',
        component: GalleryTwo,
        meta:{transition:"ts-gallerytwo"},
      },
      {
        path: 'gallerythree',
        name: 'GalleryThree',
        component: GalleryThree,
        meta:{transition:"ts-gallerythree"},
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
