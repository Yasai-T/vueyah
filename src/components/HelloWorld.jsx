import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",
  props: {
    msg: String
  },
  render() {
    return (
      <div>hello</div>
    )
  }
})