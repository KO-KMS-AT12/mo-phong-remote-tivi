const LOG = console.log;

function Remote(codeID) {
    this.codeID = codeID;
}

Remote.prototype.changeChannel = function (tivi) {
    tivi.changeChannel();
};

Remote.prototype.plusVolume = function (tivi) {
    tivi.increaseVolume();
};

Remote.prototype.subVolume = function (tivi) {
    tivi.reductionVolume();
};

Remote.prototype.turnOnTivi = function (tivi) {
    tivi.turnOn();
};

Remote.prototype.turnOffTivi = function (tivi) {
    tivi.turnOff();

};

module.exports = Remote;