<template>
    <div class="detail-container">
        <div class="title">
            <h1>
                {{todo.title}}
            </h1>
        </div>
        <div class="body">
            <p>
                {{todo.body}}
            </p>
        </div>
    </div>
</template>
<script>
import axios from  "axios"
export default {
    data (){
        return {
            todo:{},
        }
    },
    beforeMount (){
        this.getDetail()    
    },
    methods:{
        async getDetail(){
            let id = this.$route.params.id;
            await axios.get(`http://127.168.1:8000/api/get/${id}/`)
            .then( response =>{
                this.todo = response.data[0]
            })
        }
    }
}
</script>
<style>
    .detail-container{
        max-width: 1400px;
        margin-left: auto;
        margin-right: auto;
        padding: 20px 10px;
    } 
    .title{
        font-family:Verdana;
    }  
    .title h1{
        font-size: 60px;
    }
    .body p{
        margin-top: 20px;
        font-size: 30px;
        font-family: Tahoma;
    }
</style>