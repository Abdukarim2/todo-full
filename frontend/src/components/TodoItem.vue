<template>
    <a class="todo-item">
        <h1>Title</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam est fuga tempora vero deleniti provident, voluptatibus quaerat illo, laborum nostrum odio amet molestias corporis deserunt dolor illum? Earum, numquam libero.
        </p>
    </a>
</template>
<script>
export default {
  name:"TodoItem"  
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