import { createStore } from 'vuex'
import actions from './actions';
import mutations from './mutations'
// import todos from './moduls/todos';


export default createStore({
  state: {
    navHomeItems:[
      {id:1,name:'link one',router:'/'},
      {id:1,name:'link two',router:'/link2'},
      {id:1,name:'link three',router:'/galleryhome'},
    ],
    menuItems1:[
      {id:1,header:'Course',showLink:true,parts:[
                                  {id:1,name:'course1',router:'/'},
                                  {id:2,name:'course2',router:'/course2'},
                                  {id:3,name:'course3',router:'/course3'},
      ]},
      {id:1,header:'books',showLink:true,parts:[
        {id:1,name:'book1',router:'/book1'},
        {id:2,name:'book2',router:'/book2'},
        {id:3,name:'book3',router:'/book3'},
     ]},
      {id:1,header:'Car',showLink:true,parts:[
        {id:1,name:'Car1',router:'/car1'},
        {id:2,name:'Car2',router:'/car2'},
        {id:3,name:'Car3',router:'/car3'},
     ]},
    ],
    menulink2:[
      {id:1,header:'Computer',showLink:true,parts:[
                                  {id:1,name:'SoftWare',router:'/link2/'},
                                  {id:2,name:'HardWare',router:'/link2/hardware'},
                                  {id:3,name:'network',router:'/link2/network'},
      ]},
      {id:1,header:'Programing',showLink:true,parts:[
        {id:1,name:'C++',router:'/link2/cplus'},
        {id:2,name:'C#',router:'/link2/csharp'},
        {id:3,name:'JS',router:'/link2/js'},
     ]},
      {id:1,header:'Graphic',showLink:true,parts:[
        {id:1,name:'Photoshop',router:'/link2/photoshop'},
        {id:2,name:'AdobXd',router:'/link2/adobxd'},
        {id:3,name:'Illustrator ',router:'/link2/illistrator'},
     ]},
    ],
    menulink3:[
      {id:1,header:'Inherit',showLink:true,parts:[
                                  {id:1,name:'Single',router:'/link2/'},
                                  {id:2,name:'MultiLevel',router:'/link2/hardware'},
                                  {id:3,name:'Hybirid',router:'/link2/network'},
      ]},
      {id:1,header:'Math',showLink:true,parts:[
        {id:1,name:'Pre Mathematics ',router:'/link2/cplus'},
        {id:2,name:'general mathematics',router:'/link2/csharp'},
        {id:3,name:'engineering mathematics',router:'/link2/js'},
     ]},
      {id:1,header:'Sport',showLink:true,parts:[
        {id:1,name:'Football',router:'/link2/photoshop'},
        {id:2,name:'Volleyball',router:'/link2/adobxd'},
        {id:3,name:'basketball ',router:'/link2/illistrator'},
     ]},
    ],
    tableBook1:[
      {id:1,header:'one',title:'title one',bookContent:"content one",completed:true},
      {id:2,header:'two',title:'title twp',bookContent:"content two",completed:true},
      {id:4,header:'three',title:'title four',bookContent:"content three",completed:true},
      {id:5,header:'three',title:'title five',bookContent:"content three",completed:true},
      {id:6,header:'three',title:'title six',bookContent:"content three",completed:true},
      {id:7,header:'three',title:'title seven',bookContent:"content three",completed:true},
      {id:8,header:'three',title:'title three',bookContent:"content three",completed:true},
      {id:9,header:'three',title:'title three',bookContent:"content three",completed:true},
      {id:10,header:'three',title:'title three',bookContent:"content three",completed:true},
      {id:11,header:'three',title:'title three',bookContent:"content three",completed:true},
      {id:12,header:'three',title:'title three',bookContent:"content three",completed:true},
      {id:13,header:'three',title:'title three',bookContent:"content three",completed:true},
      {id:14,header:'three',title:'title three',bookContent:"content three",completed:true},
      {id:15,header:'three',title:'title three',bookContent:"content three",completed:true},
      {id:16,header:'three',title:'title three',bookContent:"content three",completed:true},
      {id:17,header:'three',title:'title three',bookContent:"content three",completed:true},
      {id:18,header:'three',title:'title three',bookContent:"content three",completed:true},
    ],
    tableBook2:[
      {id:1,header:'one',title:'title one',bookContent:"content one",completed:true},
      {id:1,header:'one',title:'title one',bookContent:"content one",completed:true},
      {id:1,header:'one',title:'title one',bookContent:"content one",completed:true},
    ],
    tableBook3:[
      {id:1,title:'title one',body:'this is body one'},
      {id:1,title:'title two',body:'this is body one'},
      {id:1,title:'title three',body:'this is body one'}, 
    ],
    progressItems1:[
      {id:1,nameClass:'progress-bar bg-success',widthProgress:"width:70%",name:'math',pg:"70%"},
      {id:2,nameClass:'progress-bar bg-info',widthProgress:"width:90%",name:'algorithm',pg:"90%"},
      {id:3,nameClass:'progress-bar bg-warning',widthProgress:"width:10%",name:'sport',pg:"10%"},
      {id:4,nameClass:'progress-bar bg-info',widthProgress:"width:70%",name:'language',pg:"70%"},
      {id:5,nameClass:'progress-bar bg-secondary',widthProgress:"width:10%",name:'typing',pg:"10%"},
      {id:6,nameClass:'progress-bar bg-warning',widthProgress:'65%',name:'graphic',pg:"65%"},
      {id:7,nameClass:'progress-bar bg-info',widthProgress:"width:20%",name:'elctronic',pg:"20%"},
      {id:8,nameClass:'progress-bar bg-warning',widthProgress:"width:30%",name:'sale',pg:"30%"},
    ],
    progressItems2:[
      {id:1,nameClass:'progress-bar progress-bar-striped',widthProgress:"width:70%",name:'math',pg:"70%"},
      {id:2,nameClass:'progress-bar  bg-success progress-bar-striped',widthProgress:"width:90%",name:'algorithm',pg:"90%"},
      {id:3,nameClass:'progress-bar bg-info progress-bar-striped',widthProgress:"width:10%",name:'sport',pg:"10%"},
      {id:4,nameClass:'progress-bar bg-info',widthProgress:"width:70%",name:'language',pg:"70%"},
      {id:5,nameClass:'progress-bar bg-secondary',widthProgress:"width:10%",name:'typing',pg:"10%"},
      {id:6,nameClass:'progress-bar bg-warning',widthProgress:'65%',name:'graphic',pg:"65%"},
      {id:7,nameClass:'progress-bar bg-warning progress-bar-striped',widthProgress:"width:20%",name:'elctronic',pg:"20%"},
      {id:8,nameClass:'progress-bar  progress-bar-striped',widthProgress:"width:30%",name:'sale',pg:"30%"},
    ],
    galleryItems:[
      {id:1,name:"PreVious",router:'/galleryhome/'},
      {id:1,name:"1 ",router:'/galleryhome/'},
      // {id:1,name:"gallery one ",router:'/galleryhome/'},
      {id:2,name:"2 ",router:'/galleryhome/gallerytwo'},
      {id:3,name:"3 ",router:'/galleryhome/gallerythree'},
      {id:3,name:"Next ",router:'/galleryhome/gallerythree'},
    ]

    
  },

  getters:{
  },
  actions,
  mutations,
  modules: {
    // todos
  }
})
