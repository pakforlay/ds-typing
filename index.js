const dc = require('./discord');
const { sig } = require("./utils/sig");
var baca = require('readline-sync');

(async () => {
    sig();

    var emailDs = baca.question("Email Discord : ");
    var passDs = baca.question("Password Discord : ", { hideEchoBack: true});
    var idServer = baca.question("ID Server Discord : ");
    var idChannel = baca.question("ID Channel Server Discord : ")
    
    await dc.initialize();
    // here is where you enter your email and password
    await dc.login(emailDs, passDs)

    await dc.likeChannelProcess(idServer, idChannel, 1) // 1 = 1 minute

    debugger;

})();