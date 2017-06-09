var fs = require('fs');
var process = require('child_process');

fs.watch('./test1.ts', {
    persistent: true,
    recursive: true
}, function (event, file) {
    console.log('filename: ' + file)
        process.exec('tsc test1.ts', function (err, stdout, stderr) {
            if ( stdout.trim() !== '' )
               console.log(stdout) 
        })
})
