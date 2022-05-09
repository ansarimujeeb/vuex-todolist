<template>
    <div>
        Filter Todos
        <section>
            <option value="200">200</option>
            <option value="100">100</option>
            <option value="50">50</option>
            <option value="25">25</option>
            <option value="10">10</option>
            <option value="5">5</option>
        </section>
    </div>
</template>

<script>
export default {
    name: 'FilterTodos',
}
</script>

<style scoped>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>