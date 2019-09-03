<template>
  <div id="app">
    <h2>
      Vue To Do List
      Simple Todo List with adding and filter by diff status.
    </h2>
    <!--引入的组件-->
    <createForm/>

    <div id="list">
      <ul>
        <li v-for="(item,index) in currentFilter" :key="index">
          <input type="checkbox" >
          {{item.content}},{{index}}
        </li>
      </ul>
    </div>
    <div id="filter">
        当前状态：
        <button @click="handlerChange('active')">Active</button>
        <button @click="handlerChange('complete')">Completed</button>
    </div>
    
  </div>
</template>

<script>
import createForm from './components/createForm.vue'

export default {
  name: "app",
  components: {
    createForm
  },
  data: function() {
    return {
      /**
       * 定义了 todo item 中属性为 {content:'吃饭',status:'active'}
       * 定义了 todo 的两种状态 completed、active，默认为 active
       */
      inputting:''
    };
  },
  methods:{
      handlerChange : function(status) {
        this.$store.commit('changeStatus', status);
      },
      
     
  },
  computed:{
       currentFilter: function() {
        return this.$store.getters.currentFilter;
      }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.items {
  list-style: none;
  text-align: left;
  line-height: 30px;
}

.items li.completed {
  text-decoration: line-through;
}

.filter a {
  margin: 0 10px;
  line-height: 30px;
}

.filter a.active {
  color: #f60;
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 3px;
  cursor: pointer;
}
</style>
