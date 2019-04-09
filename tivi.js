const LOG = console.log;

let listChannel = ['kenh1', 'kenh2', 'kenh3', 'kenh4', 'kenh5', 'kenh6', 'kenh7', 'kenh8'];

function Tivi() {
    this.setChannel = function (channel) {
        this.channel = 'kenh1';
    };
    this.getChannel = function () {
        return LOG("Kenh hien tai : ", this.channel);
    };
    this.setVolume = function (volume) {
        this.volume = 20;
    };
    this.getVolume = function () {
        return LOG("Am luong hien tai : ", this.volume);
    }
}

Tivi.prototype.increaseVolume = function () {
    this.volume++;
    LOG("Tang Am luong");
};

Tivi.prototype.reductionVolume = function () {
    this.volume--;
    LOG("Giam Am luong");
};

Tivi.prototype.turnOn = function () {
    this.turn = true;
    LOG('Ti vi da duoc bat');
};
Tivi.prototype.turnOff = function () {
    this.turn = false;
    LOG('Ti vi da duoc tat');
};

Tivi.prototype.changeChannel = function () {
    LOG("Chuyen kenh");
    let rdChannel = listChannel[Math.floor(Math.random() * listChannel.length)];
    this.channel = rdChannel;
};

module.exports = Tivi;
