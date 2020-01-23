import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",
  data() {
    return {
      input: ""
    };
  },
  methods: {
    keydown(e: KeyboardEvent) {
      console.log(e);
      if (
        e.metaKey ||
        e.altKey ||
        e.ctrlKey ||
        (e.shiftKey && e.key === "Shift")
      ) {
        return;
      }
      switch (e.code) {
        case "Space":
          this.input += " "; // TODO: Space handling
          break;
        case "Enter":
          this.input += "\n";
          break;
        case "Backspace":
          this.input = this.input.slice(0, -1);
          break;
        case "Tab":
          this.input += "    ";
          break;
        default:
          this.input += e.key;
          console.log("input", this.input);
          break;
      }
    }
  },
  render() {
    document.onkeydown = this.keydown;
    return (
      <div>
        <div>Type KeyBoard!!!!!</div>
        <div>{this.input}</div>
      </div>
    );
  }
});
