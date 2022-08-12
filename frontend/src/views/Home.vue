<template>
    <div class="todo-bars">
        <div class="todos">
            <h1>All Todos</h1>
            <div class="todo-items">
                <TodoItem v-for="todo in todos" :todo="todo"></TodoItem>
            </div>
        </div>
        <div class="add-bar">
            <h1>Add Todo+</h1>
            <div class="todo-inputs title-input">
                <input type="text" placeholder="Title" v-model.trim="title">
            </div>
            <div class="todo-inputs about-input">
                <textarea v-model.trim="body"></textarea>
            </div>
            <div class="todo-inputs add-button">
                <button @click="addTodo" v-if="title !== '' && body !== ''">Add+</button>
                <button disabled v-else>Add+</button>
            </div>
        </div>
    </div>
</template>
<script>
import TodoItem from "@/components/TodoItem.vue"
import axios from "axios"
export default {
    data() {
        return {
            todos:[],
            title:"",
            body:""
        }
    },
    beforeMount (){
        this.getTodos()
    },  
    components:{
        TodoItem
    },
    methods:{
        async getTodos(){
            await axios.get("http://127.168.1:8000/api/getall")
            .then(response =>{
                this.todos = response.data
            })
        },
        async addTodo(){
            let data = JSON.stringify({
                title:this.title,
                body:this.body
            }) 
            await axios.post("http://127.0.0.1:8000/api/add", data, {headers:{"Content-type":"application/json"}}) 
            .then( response =>{
                if(response.status == 200){
                    let id = response.data[0].id;
                    this.todos.push({title:this.title, body:this.body, id:id})
                }
            })  
            this.title = ""
            this.body = ""      
        }
    }
}
</script>
<style>
    .todo-bars{
        display: flex;
        max-width: 1400px;
        margin-left: auto;
        margin-right: auto;
        font-family:Tahoma;
        padding: 20px 10px;
    }
    .todo-bars h1{
        margin-bottom: 10px;
    }
    .todos{
        width: calc(100% - 400px);
    }
    .add-bar{
        width: 400px;
        height: 100%;
        position: sticky;
        top: 0;
    }
    .todo-inputs{
        margin-bottom: 20px;
    }
    .todo-inputs input, .todo-inputs textarea,  .todo-inputs button{
        max-width: 100%;
        width: 100%;
        outline: none;
        height: 50px;
        font-size: 25px;
        border:2px solid rgba( 0, 0, 0, 0.5);
        border-radius: 10px;
        padding: 0px 10px;
        cursor: pointer;
    }
    .todo-inputs textarea{
        min-width: 100%;
        padding:10px;
        min-height: 100px;
        max-height: 400px;
    }
    .todo-items{
        padding-right: 20px;
    }
</style>