const http = require('http');
const https = require('https');
const file = fs.createWriteStream('file.txt');

https.get('https://account.box.com/api/oauth2/authorize?response_type=code&client_id=client_id&redirect_uri=https://app.box.com/notes/142111831061&state=security_token%' + token, function(req,res){
  res.pipe(file);
};

file.on('finish', function() {
  file.close()
}).on('error', function(err) {
  console.log(err);
})
