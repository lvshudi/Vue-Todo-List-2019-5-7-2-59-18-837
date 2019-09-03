export default{
    strict: true,
    state: {
      // 应用的数据
      test: 'hello vuex',
      todoList: [
        { content: "吃饭饭", status: "active" },
        { content: "睡觉觉", status: "complete" },
        { content: "打豆豆", status: "active" }
      ],
      currentStatus:'all'
    },
    getters: {
        currentFilter : function(state) {
            let currentList = []; 
            for (let index = 0; index < state.todoList.length; index++) {
                const element = state.todoList[index];
                if (element.status === state.currentStatus || state.currentStatus === 'all') {
                    currentList.push(element);
                }
            }
            return currentList;
        }
    },
    mutations: {
        addHandle(state, inputting) {
            var list = {
                content: inputting,
                status:'active'
            }
            state.todoList.push(list)
        },
        plusValue(state, index) {
            state.counters[index].value++;
            state.counterTotal++;
        },
        changeStatus(state, status) {
            state.currentStatus = status;
        }
    }
  }