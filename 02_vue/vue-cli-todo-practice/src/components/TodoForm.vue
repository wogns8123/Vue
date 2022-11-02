<template>
  <div>
    <input type="text" v-model="todotitle" 
    @keyup.enter="createTodo">
    
  </div>
</template>

<script>
export default {
    name:'TodoForm',
    data: function () {
        return {
            todotitle: null,
        }
    },
    method: {
        createTodo: function () {
            this.$emit('create-todo', this.todoTitle)
            this.todoTitle = null
        }
    }
}
</script>

<style>

</style>