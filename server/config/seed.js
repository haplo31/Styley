/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import Qqrequest from '../api/qqrequest/qqrequest.model';
import currentRequest from '../api/currentrequest/currentrequest.model'
import publicRequest from '../api/publicrequest/publicrequest.model'
import regularRequest from '../api/regularrequest/regularrequest.model'
User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test',
      currentrequests:[],
      type:'customer'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
       currentrequests:[],
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });

regularRequest.find({}).remove(function(){
  regularRequest.create({   owner : "Alfred36", modtype : "creation", addinfos : [  {  color : "red",  type : "Colorize" } ], modinfos : [   {   color : "red",  imgPos : 0,   height : 448,   width : 799,  posLeft : 369,  posTop : 233 } ], src : [  {  num : 0,  src : "example1.jpg" } ]},
                        {   owner : "louloulou", modtype : "creation", addinfos : [   {   color : "blue",   infos : "Only these two buildings",   type : "Custom" } ], modinfos : [   {   color : "blue",   imgPos : 0,   height : 600,   width : 363,  posLeft : 109,  posTop : 223 },   {   color : "blue",   imgPos : 0,   height : 600,   width : 363,  posLeft : 265,  posTop : 373 } ], src : [  {  num : 0,  src : "example12.jpg" } ]},
                        {   owner : "roxxor", modtype : "creation", addinfos : [   {   color : "red",  infos : "Style like that",  type : "Custom" },  {   color : "purple",   infos : "",   type : "Remove" } ], modinfos : [   {  color : "purple",   imgPos : 0,   height : 343,   width : 610,  posLeft : 563,  posTop : 169 },   {   color : "red",  imgPos : 1,   height : 381,   width : 610,  posLeft : 218,  posTop : 97 } ], src : [ {  "num" : 0,  src : "example11.jpg" },   {   num : 1,  src : "example15.jpg" } ]}
)
})
Qqrequest.find({}).remove(function() {
  // Qqrequest.create({
  //   owner : "Test User",
  //   artist : "",
  //   modtype : "remPers",
  //   vote : 0,
  //   quality : "Excellent",
  //   available : true,
  //   price : [  16 ],
  //   rating : [  1 ],
  //   addinfos : [  null ],
  //   modinfos : [   {   "height" : 448,   "width" : 799,  "posLeft" : 371,  "posTop" : 224 },
  //                    {   "height" : 448,   "width" : 799,  "posLeft" : 587,  "posTop" : 268 } ],
  //   src : [  "d3180132bce479ded0e6f871489f9eb1.jpg"] ]
  //   },function() {
  //     console.log('finished populating qqueries');
  //   }
  // );
});
publicRequest.find({}).remove(function(){
  publicRequest.create(
  { src :  ["example1.jpg"], 
    rating : "1",
    quality : "Excellent",
    vote : 1,
    modtype : "remPers",
    artist : "Trodesign",
    owner : "Pedro"},
  { src :  ["example2.jpg"], 
    rating : "1",
    quality : "Good",
    vote : 15,
    modtype : "remPers",
    artist : "Kawai56",
    owner : "Fred"},
  { src :  ["example3.jpg"], 
    rating : "1",
    quality : "Excellent",
    vote : 26,
    modtype : "remPers",
    artist : "Nicole32",
    owner : "Fred"},
  { src :  ["example4.jpg"], 
    rating : "1",
    quality : "Perfect",
    vote : 10,
    modtype : "remPers",
    artist : "Spoon",
    owner : "Michel"},
  { src :  ["example5.jpg"], 
    rating : "1",
    quality : "Good",
    vote : 40,
    modtype : "remPers",
    artist : "Protoshop",
    owner : "Germaine"},
  { src :  ["example6.jpg"], 
    rating : "1",
    quality : "Excellent",
    vote : 12,
    modtype : "remPers",
    artist : "Sketchy",
    owner : "Jean-Louis"},
  { src :  ["example7.jpg"], 
    rating : "1",
    quality : "Good",
    vote : 34,
    modtype : "remPers",
    artist : "Drawgirl",
    owner : "Sarah"},
  { src :  ["example8.jpg"], 
    rating : "1",
    quality : "Excellent",
    vote : 48,
    modtype : "remPers",
    artist : "Arty",
    owner : "barbie74"},
  { src :  ["example9.jpg"], 
    rating : "1",
    quality : "Good",
    vote : 7,
    modtype : "remPers",
    artist : "Creazion",
    owner : "Gandhi"},
  { src :  ["example10.jpg"], 
    rating : "1",
    quality : "Good",
    vote : 16,
    modtype : "remPers",
    artist : "Typo",
    owner : "Claire"},
  { src :  ["example11.jpg"], 
    rating : "1",
    quality : "Good",
    vote : 42,
    modtype : "remPers",
    artist : "Fontys",
    owner : "Marco Polo"},
  { src :  ["example12.jpg"], 
    rating : "1",
    quality : "Perfect",
    vote : 74,
    modtype : "remPers",
    artist : "handy43",
    owner : "Antoine"},
  { src :  ["example13.jpg"], 
    rating : "1",
    quality : "Perfect",
    vote : 21,
    modtype : "remPers",
    artist : "otake",
    owner : "René"},
  { src :  ["example14.jpg"], 
    rating : "1",
    quality : "Perfect",
    vote : 8,
    modtype : "remPers",
    artist : "Fastser",
    owner : "Robert"},
  { src :  ["example15.jpg"], 
    rating : "1",
    quality : "Excellent",
    vote : 33,
    modtype : "remPers",
    artist : "Gimpro",
    owner : "Jean-Patrick"},
  { src :  ["example16.jpg"], 
    rating : "1",
    quality : "Good",
    vote : 17,
    modtype : "remPers",
    artist : "Paintoto",
    owner : "Babar"},
  { src :  ["example17.jpg"], 
    rating : "1",
    quality : "Good",
    vote : 36,
    modtype : "remPers",
    artist : "Mehoui",
    owner : "Tic&Tac"},
  { src :  ["example18.jpg"], 
    rating : "1",
    quality : "Perfect",
    vote : 21,
    modtype : "remPers",
    artist : "DesignerBronze",
    owner : "Gertrude"},
  { src :  ["example19.jpg"], 
    rating : "1",
    quality : "Good",
    vote : 9,
    modtype : "remPers",
    artist : "Ehpif",
    owner : "Bambi"},
  { src :  ["example20.jpg"], 
    rating : "1",
    quality : "Perfect",
    vote : 35,
    modtype : "remPers",
    artist : "TabGraph",
    owner : "User1"},
  { src :  ["example21.jpg"], 
    rating : "1",
    quality : "Perfect",
    vote : 14,
    modtype : "remPers",
    artist : "Creatiks",
    owner : "Che Guevara"},
  { src :  ["example22.jpg"], 
    rating : "1",
    quality : "Good",
    vote : 52,
    modtype : "remPers",
    artist : "Stick52",
    owner : "Luigi"},
  { src :  ["example23.jpg"], 
    rating : "1",
    quality : "Excellent",
    vote : 4,
    modtype : "remPers",
    artist : "DesignerBronze",
    owner : "Nicolas"},
  { src :  ["example24.jpg"], 
    rating : "1",
    quality : "Good",
    vote : 16,
    modtype : "remPers",
    artist : "DesignerBronze",
    owner : "Mario"},
  { src :  ["example25.jpg"], 
    rating : "1",
    quality : "Perfect",
    vote : 18,
    modtype : "remPers",
    artist : "DesignerBronze",
    owner : "Martin"},
  { src :  ["example26.jpg"], 
    rating : "1",
    quality : "Good",
    vote : 11,
    modtype : "remPers",
    artist : "DesignerBronze",
    owner : "Don diego"},
  { src :  ["example27.jpg"], 
    rating : "1",
    quality : "Excellent",
    vote : 23,
    modtype : "remPers",
    artist : "DesignerBronze",
    owner : "Alain"}
  )
})


User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Designer',
    email: 'des@igner.com',
    password: 'designer',
    type:'artist',
    qqautolog: true,
    currentrequests:[],
    gskills: { addPers: { value: 'Excellent', rating: 0 },
          remPers: { value: 'Excellent', rating: 0 },
          addObj: { value: '0', rating: 0 },
          remObj: { value: '0', rating: 0 },
          enh: { value: '0', rating: 0 },
          incr: { value: '0', rating: 0 } },
  },
  {
    provider: 'local',
    name: 'DesignerBronze',
    email: 'des@igner2.com',
    password: 'designer',
    type:'artist',
    qqautolog: true,
    currentrequests:[],
    gskills: { addPers: { value: '0', rating: 0 },
          remPers: { value: 'Excellent', rating: 1 },
          addObj: { value: '0', rating: 0 },
          remObj: { value: '0', rating: 0 },
          enh: { value: '0', rating: 0 },
          incr: { value: '0', rating: 0 } },
  },
  {
    provider: 'local',
    name: 'DesignerGold',
    email: 'des@igner3.com',
    password: 'designer',
    type:'artist',
    qqautolog: true,
    currentrequests:[],
    gskills: { addPers: { value: '0', rating: 0 },
          remPers: { value: 'Excellent', rating: 3 },
          addObj: { value: '0', rating: 0 },
          remObj: { value: '0', rating: 0 },
          enh: { value: '0', rating: 0 },
          incr: { value: '0', rating: 0 } },
  }, function() {
      console.log('finished populating users');
      currentRequest.find({}).remove(function() {
        currentRequest.createAsync({ 
          src : ["example1.jpg","example2.jpg"], 
          rating : "1", 
          price : "13",
          available : false,
          quality : "Excellent",
          vote : 0,
          modtype : "remPers",
          artist : "DesignerBronze",
          owner : "Test User",
          addinfos : [  null ],
          modinfos : [  {  "posTop" : 392,  "posLeft" : 399,  "width" : 800,  "height" : 590 } ] 
        })
        .then(function (resp){
          console.log(resp)
          User.findOne().where('name').equals('Test User').exec(function (err, user) {
            user.currentrequests.push(resp._id);
            user.save();
          })
          User.findOne().where('name').equals('DesignerBronze').exec(function (err, user) {
            user.currentrequests.push(resp._id);
            user.save();
          })
        })
      })
    }
  );
});