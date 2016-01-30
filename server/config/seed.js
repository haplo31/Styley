/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import Qqrequest from '../api/qqrequest/qqrequest.model';

User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });


Qqrequest.find({}).remove(function() {
  // Qqrequest.create({ 
  // owner : "Test User",
  // artist : "",
  // modtype : "remPers",
  // vote : 0,
  // src : "1452283833465.jpg",
  // quality : "Excellent",
  // available : true,
  // price : [14, 16, 18],
  // rating : [0, 1, 2],
  // modinfos : [{height: 447,width: 798,posLeft: 335,posTop: 165},
  //             {height: 447,width: 798,posLeft: 629,posTop: 193}]
  // },
  // { 
  // owner : "Test User",
  // artist : "",
  // modtype : "remPers",
  // vote : 0,
  // src : "1452283833465.jpg",
  // quality : "Excellent",
  // available : true,
  // price : [18],
  // rating : [2],
  // modinfos : [{height: 447,width: 798,posLeft: 335,posTop: 165},
  //             {height: 447,width: 798,posLeft: 635,posTop: 193}]
  // },function() {
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
    qqautolog: true,
    gskills: { addPers: { value: '0', rating: 0 },
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
    qqautolog: true,
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
    qqautolog: true,
    gskills: { addPers: { value: '0', rating: 0 },
          remPers: { value: 'Excellent', rating: 3 },
          addObj: { value: '0', rating: 0 },
          remObj: { value: '0', rating: 0 },
          enh: { value: '0', rating: 0 },
          incr: { value: '0', rating: 0 } },
  }, function() {
      console.log('finished populating users');
    }
  );
});