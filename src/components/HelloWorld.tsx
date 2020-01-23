import Vue from "vue";
import styled from "vue-styled-components";

const styledDiv = styled.div`
  white-space: pre-wrap;
  text-align: left;
`;

interface Data {
  texts: string[];
  x: number;
  y: number;
}

export default Vue.extend({
  name: "HelloWorld",
  data(): Data {
    return {
      texts: [""],
      x: 0,
      y: 0
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
          this.texts[this.y] += " ";
          console.log(this.texts);
          break;
        case "Enter":
          this.y++;
          this.x = 0;
          this.texts.splice(this.y, 0, "");
          console.log(this.texts);
          break;
        case "Backspace":
          if (this.texts[this.y].split("").length > 0) {
            if (this.x === 0 && this.y > 0) {
              this.texts.splice(
                this.y - 1,
                2,
                this.texts[this.y - 1] + this.texts[this.y]
              );
              this.y > 0 ? (this.y -= 1) : () => ({});
            } else if (this.x > 0) {
              this.texts[this.y] = this.texts[this.y].slice(this.x, -1);
            }
            this.x > 0 ? (this.x -= 1) : () => ({});
          } else if (this.y > 0) {
            this.texts.pop();
            this.y > 0 ? (this.y -= 1) : () => ({});
          }
          console.log(this.texts);
          break;
        case "Tab":
          this.texts[this.y] += "    ";
          console.log(this.texts);
          break;
        case "ArrowUp":
          this.y > 0 ? (this.y -= 1) : () => ({});
          this.x > this.texts[this.y].length
            ? (this.x = this.texts[this.y].length)
            : this.texts[this.y].length;
          break;
        case "ArrowDown":
          this.y >= 0 && this.y < this.texts.length - 1 ? this.y++ : () => ({});
          this.x > this.texts[this.y].length
            ? (this.x = this.texts[this.y].length)
            : this.texts[this.y].length;
          break;
        case "ArrowRight":
          this.x >= 0 && this.x < this.texts[this.y].length
            ? this.x++
            : () => ({});
          break;
        case "ArrowLeft":
          this.x > 0 ? (this.x -= 1) : () => ({});
          break;
        default:
          if (this.texts[this.y].split("").length > 0) {
            const newTextArray = this.texts[this.y].split("");
            newTextArray.splice(this.x, 0, e.key);
            this.texts[this.y] = newTextArray.join("");
          } else {
            this.texts[this.y] += e.key;
          }
          this.x++;
          console.log(this.texts);
          break;
      }
    }
  },
  render() {
    document.onkeydown = this.keydown;
    return (
      <div>
        <div>Type KeyBoard!!!!!</div>
        <div>
          x: {this.x} y: {this.y}
        </div>
        {this.texts.map((text, index) => (
          <styledDiv key={index}>
            {index}: {text}
          </styledDiv>
        ))}
      </div>
    );
  }
});
