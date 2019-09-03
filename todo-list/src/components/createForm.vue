<template>
  <div id="addList">
    <input type="text" :value="inputting" id="inputting" @change="handleChange" />
    <button @click="handleAdd">Add</button>
  </div>
</template>

<script>
export default {
  name: "createForm",
  data: function() {
    return {
      inputting: ""
    };
  },
  methods: {
    handleAdd:function() {
        this.$store.commit('addHandle', this.inputting);
      },
    handleChange:function(event) {
        this.inputting = event.target.value;
    }
  }
};
</script>