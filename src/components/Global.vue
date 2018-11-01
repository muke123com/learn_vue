<template>

</template>

<script>
    import axios from 'axios';
    let common = {
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
