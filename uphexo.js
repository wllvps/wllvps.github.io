var process = require('child_process');

process.exec(' hexo clean && hexo g && hexo d && hexo b', function (error, stdout, stderr) {
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});
