<template>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
</template>

<script>
export default {
    data: function() {
        return {
            todoItems: []
        }
    },
    created: function(){ 
        if(localStorage.length  > 0) {
            for(var i = 0; i < localStorage.length; i++)
            {
                this.todoItems.push(localStorage.key(i));
            }
        }
    }
}
</script>

<style>

</style>
