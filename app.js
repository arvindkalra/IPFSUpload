const IPFS = require('ipfs-http-client');
const ipfs = new IPFS({
    host : 'ipfs.infura.io',
    port : 5001,
    protocol : 'https'
});
const buffer = require('buffer');

ipfs.id().then(function (id) {
    console.log(id);
}).catch(function (err) {
    console.log("Fail", err);
});

window.addFile = function (reader_result, callback){
    let buf = buffer.Buffer(reader_result);
    ipfs.add(buf, function (err, hash) {
        if(err) throw err;
        if(callback) callback(hash[0].hash);
    })
};
