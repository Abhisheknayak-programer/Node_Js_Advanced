import Blockly from "blockly";
import { javascriptGenerator } from "blockly/javascript";
// console.log(Blockly)

Blockly.Blocks["get_string_length"] = {
  init: function () {
    this.appendValueInput("VALUE").setCheck("String").appendField("length of");
    this.setOutput(true, "Number");
    this.setColour(654);
    this.setTooltip("Returns number of letters in the provided text.");
    this.setHelpUrl("http://www.w3schools.com/jsref/jsref_length_string.asp");
  },
};

javascriptGenerator["get_string_length"] = function (block) {
  var argument0 =
    javascriptGenerator.valueToCode(
      block,
      "VALUE",
      javascriptGenerator.ORDER_FUNCTION_CALL
    ) || "''";
  return [argument0 + ".length", javascriptGenerator.ORDER_MEMBER];
};
