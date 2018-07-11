const IPFS = require('ipfs-api');
const ipfs = new IPFS({
    host : 'ipfs.infura.io',
    port : 5001,
    protocol : 'https'
});

ipfs.id().then(function (id) {
    console.log(id);
}).catch(function (err) {
    console.log("Fail", err);
});
