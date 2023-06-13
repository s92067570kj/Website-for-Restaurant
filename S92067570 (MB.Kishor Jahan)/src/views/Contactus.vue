<template>
  <div class="container background mb-5" style="min-height: 500px;" >
    <h1 style="font-family: 'Pushster', cursive" id="heading">Need To Visit Restaurant Reminder</h1>
    <!-- input table -->
    <div class="d-flex">
      <input
        v-model="task"
        type="text"
        placeholder="Enter task"
        class="form-control"
      />
      <button @click="submitTask" class="btn btn-warning">Submit</button>
    </div>

    <!-- task Table -->
    <table class="table table-dark mt-5">
      <thead>
        <tr>
          <th scope="col">Task</th>
          <th scope="col">Status</th>
          <th scope="col" class="text-center">#</th>
          <th scope="col" class="text-center">#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <th scope="row">
            <span :class="{'finished': task.status === 'Finished'}">  {{ task.name }} </span>
              </th>
          <td style="width : 120px">
            <span class="pointer"  @click="changeStatus(index)"
            :class="{
                'text-danger' : task.status === 'To-do', 
                'text-warning' : task.status === 'In-progress', 
                'text-success' : task.status === 'Finished', 
                }"
            >
              {{ task.status }}
            </span>
          </td>
          <td>
            <div class="text-center" @click="editTask(index)">
              <span class="fa fa-pen"></span>
            </div>
          </td>
          <td>
            <div class="text-center" @click="deleteTask(index)">
              <span class="fa fa-trash"></span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
#heading {
  margin: 40px 0 40px 0;
}
.pointer {
  cursor: pointer;
}
.pointer:hover {
  color: red;
}
.finished{
    color: red;
    text-decoration: line-through;
}
</style>

<script>
export default {
  name: "todo",
  props: {
    msg: String,
  },

  data() {
    return {
      task: "",
      editedTask: null,
      availableStatuses: ["To-do", "In-progress", "Finished"],

      tasks: [
        {
          name: "Need to go to Appam shop",
          status: "To-do",
        },
        {
          name: "Need to go to Cool Bar",
          status: "In-progress",
        },
      ],
    };
  },
  methods: {
    submitTask() {
      if (this.task.length === 0) return;
      if (this.editedTask === null) {
        this.tasks.push({
          name: this.task,
          status: "To-do",
        });
      } else {
        this.tasks[this.editedTask].name = this.task;
        this.editedTask = null;
      }

      this.task = "";
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    editTask(index) {
      this.task = this.tasks[index].name;
      this.editedTask = index;
    },
    changeStatus(index){
      let newIndex =  this.availableStatuses.indexOf(this.tasks[index].status);
      if(++newIndex > 2) newIndex =2;
      this.tasks[index].status = this.availableStatuses[newIndex];
    }
  },
};
</script>



