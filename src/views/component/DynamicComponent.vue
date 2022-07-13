<template>
  <div>
    <select @change="changeComponent1($event)">
      <option value="TestComponent1">TestComponent1</option>
      <option value="TestComponent2">TestComponent2</option>
      <option value="TestComponent3">TestComponent3</option>
      <option value="TestComponent4">TestComponent4</option>
      <option value="TestComponent5">TestComponent5</option>
      <option value="TestComponent6">TestComponent6</option>
    </select>
    <select @change="changeComponent2($event)">
      <option value="TestComponent1">TestComponent1</option>
      <option value="TestComponent2">TestComponent2</option>
      <option value="TestComponent3">TestComponent3</option>
      <option value="TestComponent4">TestComponent4</option>
      <option value="TestComponent5">TestComponent5</option>
      <option value="TestComponent6">TestComponent6</option>
    </select>
    <select @change="changeComponent3($event)">
      <option value="TestComponent1">TestComponent1</option>
      <option value="TestComponent2">TestComponent2</option>
      <option value="TestComponent3">TestComponent3</option>
      <option value="TestComponent4">TestComponent4</option>
      <option value="TestComponent5">TestComponent5</option>
      <option value="TestComponent6">TestComponent6</option>
    </select>
    <select @change="changeComponent4($event)">
      <option value="TestComponent1">TestComponent1</option>
      <option value="TestComponent2">TestComponent2</option>
      <option value="TestComponent3">TestComponent3</option>
      <option value="TestComponent4">TestComponent4</option>
      <option value="TestComponent5">TestComponent5</option>
      <option value="TestComponent6">TestComponent6</option>
    </select>
    <component :is="switchComponent1"></component>
    <component :is="switchComponent2"></component>
    <component :is="switchComponent3"></component>
    <component :is="switchComponent4"></component>
  </div>
</template>

<script>
export default {
  name: "DynamicComponent",
  data() {
    return {
      switchComponent1: "",
      switchComponent2: "",
      switchComponent3: "",
      switchComponent4: "",
    };
  },
  components: {
    TestComponent1: () => import("./TestComponent1.vue"),
    TestComponent2: () => import("./TestComponent2.vue"),
    TestComponent3: () => import("./TestComponent3.vue"),
    TestComponent4: () => import("./TestComponent4.vue"),
    TestComponent5: () => import("./TestComponent5.vue"),
    TestComponent6: () => import("./TestComponent6.vue"),
  },
  methods: {
    changeComponent1: function (e) {
      this.switchComponent1 = e.target.value;
    },
    changeComponent2: function (e) {
      this.switchComponent2 = e.target.value;
    },
    changeComponent3: function (e) {
      this.switchComponent3 = e.target.value;
    },
    changeComponent4: function (e) {
      this.switchComponent4 = e.target.value;
    },
  },
};
</script>
