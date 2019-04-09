let Remote = require('./remote');
let Tivi = require('./tivi');

const LOG = console.log;

let remote = new Remote('LG55C8');
let lg55c8 = new Tivi();

remote.turnOnTivi(lg55c8);
//
lg55c8.setChannel('Kenh 1');
lg55c8.setVolume(20);
//
lg55c8.getVolume();
remote.plusVolume(lg55c8);
remote.plusVolume(lg55c8);
lg55c8.getVolume();
//
lg55c8.getChannel();
remote.changeChannel(lg55c8);
lg55c8.getChannel();
//
remote.turnOffTivi(lg55c8);



