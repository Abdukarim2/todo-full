<template>
    <router-link :to="'/detail/' + todo.id " class="todo-item">
        <h1>{{todo.title}}</h1>
        <p>
            {{todo.body}}
        </p>
    </router-link>
</template>
<script>
export default {
  name:"TodoItem",
  props:{
    todo:{
        type:Object,
    }
  }
}
</script>
<style>
    .todo-item{
        display: block;
        border: 2px solid rgba(0,0,0,0.5);
        padding: 10px 15px 15px 15px;
        border-radius: 10px;
        cursor: pointer;
        margin-bottom: 15px;
    }
</style>