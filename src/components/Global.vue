<template>

</template>

<script>
    import axios from 'axios';
    let common = {
        niciApi: 'http://115.182.99.148:9999',
        ajax: function (url, data, callback) {
            axios.get(url, {
                params: data
            }).then(function (res) {
                callback(res);
            })
        }
    };

    export default {
        common
    }
</script>
