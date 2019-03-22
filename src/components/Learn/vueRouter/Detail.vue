<template>
    <div class="detail-box">
        <h2 class="title">
            <i class="color">{{movie['title']}}</i>
            ({{movie['original_title']}})
            ({{movie['year']}})
            <strong>{{movie['rating']['average']}}</strong>
        </h2>
        <div class="content">
            <img :src="movie['images']['small']" />
            <div class="movie-detail">
                <p class="movie-type">类型：
                    <span v-for="type in movie['genres']">{{type}}</span>
                </p>
                <p class="movie-actors">导演：
                    <span v-for="actor in movie['directors']">
                        <img :src="actor['avatars']['small']"/>
                        {{actor['name']}}
                    </span>
                </p>
                <p class="movie-actors">主演：
                    <span v-for="actor in movie['casts']">
                        <img :src="actor['avatars']['small']"/>
                        {{actor['name']}}
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    import movieList from './data'
    console.log(movieList);
    export default {
        data(){
            return {
                movie: {}
            }
        },
        computed: {
            id(){
                return this.$route.params.id;
            }
        },
        watch: {
            id(){
                this.getData();
            }
        },
        created(){
            this.getData();
        },
        methods: {
            getData(){
                let id = this.id;
                let list = movieList['subjects'];
                let item = list.filter((item)=>{
                    return item['id'] === id;
                });
                this.movie = item[0];
            }
        }
    }
</script>
<style scoped>
    @import "router.less";
</style>