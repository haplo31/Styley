/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import Qqrequest from '../api/qqrequest/qqrequest.model';
import currentRequest from '../api/currentrequest/currentrequest.model'
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
  //   src : [  "d3180132bce479ded0e6f871489f9eb1.jpg" ]
  //   },function() {
  //     console.log('finished populating qqueries');
  //   }
  // );
});



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
          src : "96705ac558f1d79ccd642414c45536ee.png", 
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