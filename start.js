console.log('开始执行start.js');

const cp = require('child_process');
const path = require('path')

async function startProcess(name, execPath) {
    console.log('startProcess', name, execPath);
    cp.fork(path.resolve(execPath), {
        env: {
            STORAGE_PORT: 27027,
            DRIVER_MODULE: '@screeps/driver',
            MODFILE: 'mods.json',
            STORAGE_HOST: '47.119.16.249',
            runner_threads: 2
        }
    });
}




startProcess('engine_main',
    path.resolve(path.dirname(require.resolve('@screeps/engine')), 'main.js')
)
startProcess('engine_runner',
    path.resolve(path.dirname(require.resolve('@screeps/engine')), 'runner.js')
)

startProcess('engine_processor',
    path.resolve(path.dirname(require.resolve('@screeps/engine')), 'processor.js')
)
