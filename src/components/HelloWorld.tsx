import Vue from "vue";
import styled from "vue-styled-components";

const styledDiv = styled.div`
  white-space: pre-wrap;
  text-align: left;
`;

interface Data {
  texts: string[]
  line: number
}

export default Vue.extend({
  name: "HelloWorld",
  data(): Data {
    return {
      texts: [""],
      line: 0
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
          this.texts[this.line] += " "; // TODO: Space handling
          break;
        case "Enter":
          this.line += 1
          this.texts.push('')
          break;
        case "Backspace":
          // this.texts = this.texts.slice(0, -1);
          break;
        case "Tab":
          this.texts[this.line] += "    ";
          break;
        case "ArrowUp":
          this.line !== 0 ? this.line -= 1 : () => ({})
          break;
        default:
          this.texts[this.line] += e.key;
          console.log("texts", this.texts);
          break;
      }
    }
  },
  render() {
    document.onkeydown = this.keydown;
    return (
      <div>
        <div>Type KeyBoard!!!!!</div>
        {this.texts.map((text, index) => <styledDiv key={index}>{index + 1}: {text}</styledDiv>
        )
        }
      </div>
    );
  }
});
