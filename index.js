/**
 * Created by Ran Cohen on 20/07/2015.
 */

var spawn = require("child_process").spawn,proc;

const PLUGIN_NAME = 'node-powershell';

function ps (obj,res){
    var run = obj;

    proc = spawn("powershell.exe",[run]);
    proc.stdin.end();
    proc.unref();

    proc.stdout.setEncoding('utf8');
    proc.stderr.setEncoding('utf8');

    proc.stdout.on("data",function(data){
        //console.log(data);
        res(data);
    });
    proc.stderr.on("data",function(data) {
        //console.log(data);
        res(data)
    });
    proc.stdin.on("data",function(data){
        console.log(data);
        //res(data);
    });

    proc.on('exit',function(){
        console.log("dsad");

    });




}

module.exports = ps;