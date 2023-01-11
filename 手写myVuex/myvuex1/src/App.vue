<template>
  <div>
    今年：{{$store.state.age}}岁了！
    <div>
      <button @click="add">过一年</button>
      <br />
      <button @click="deleyAdd">等会过一年</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
     
  },
  methods: {
    add(){
      // this.$store.commit('setAge',1);
    },
    deleyAdd(){
      // this.$store.dispatch('delayAge',1)
    }
  }

}
</script>
