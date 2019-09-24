<template>
    <div>
        <button @click="startWork">work</button>
    </div>
</template>
<script>
// import w from './work.js'

export default {
    data() {
        return {
            worker: {}
        }
    },
    created() {
        
    },
    methods: {
        startWork() {
            let worker = new Worker('work.js');
            worker.postMessage('Hello World');
            worker.postMessage({method: 'echo', args: ['Work']});

            worker.onmessage = function(e) {
                console.log('Received message ' + e.data);
                doSomething();
            }
            function doSomething() {
                worker.postMessage('Work done');
            }

        }
    }
}
</script>