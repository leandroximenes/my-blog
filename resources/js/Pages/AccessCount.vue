<script setup>
const props = defineProps({
  accesses: Array
})

const acc = props.accesses
</script>

<template>
  <div class="flex justify-center">
    <table class="table-default">
      <thead>
        <tr>
          <th>Page</th>
          <th>Access Count</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="access in acc" :key="access.id">
          <td>{{ access.title }}</td>
          <td>{{ access.access_count }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
