console.log('开始执行start.js');

const cp = require('child_process');
const path = require('path')

async function startProcess(name, execPath) {
    console.log('startProcess', name, execPath);
    cp.fork(path.resolve(execPath), {
        env: {
            STORAGE_PORT: 27017,
            DRIVER_MODULE: '@screeps/driver',
            MODFILE: 'mods.json'
        }
    });
}




startProcess('engine_main',
    path.resolve(path.dirname(require.resolve('@screeps/engine')), 'main.js')
)
