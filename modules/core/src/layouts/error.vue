<template>
  <div>
    <h1>Error Page</h1>
  </div>
</template>

<script>
export default {
  name: 'ErrorLayout',
  props: {
    /**
     * Validation error
     */
    error: {
      type: [
        Object,
        Error,
      ],
      required: true,
    },
  },
};
</script>
