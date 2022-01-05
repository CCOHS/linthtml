const { is_tag_node, attribute_value } = require("../../knife/tag_utils");

const RULE_NAME = "aria-valid-role";

/**
 * @param {import('../../parser/index').Node} node
 * @param {*} config
 * @param {*} param2
 */
function lint(node, config, { report }) {
  if (is_tag_node(node) === false) {
    return;
  }

  const validValues = [
    "alert",
    "alertdialog",
    "application",
    "directory",
    "document",
    "feed",
    "grid",
    "gridcell",
    "group",
    "log",
    "marquee",
    "menu",
    "menubar",
    "menuitemcheckbox",
    "menuitemradio",
    "none",
    "note",
    "presentation",
    "scrollbar",
    "search",
    "status",
    "switch",
    "tab",
    "tablist",
    "tabpanel",
    "timer",
    "toolbar",
    "tooltip",
    "tree",
    "treegrid",
    "treeitem"
  ];

  const value = attribute_value(node, "role");
  if (value && !validValues.includes(value.chars)) {
    report({
      code: "E066",
      position: node.open.loc,
      meta: {
        data: {
          value: value.chars
        }
      }
    });
  }
}

module.exports = {
  name: RULE_NAME,
  lint
};
