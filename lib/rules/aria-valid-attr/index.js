const { is_tag_node } = require("../../knife/tag_utils");

const RULE_NAME = "aria-valid-attr";

/**
 * @param {import('../../parser/index').Node} node
 * @param {*} config
 * @param {*} param2
 */
function lint(node, config, { report }) {
  if (is_tag_node(node) === false) {
    return;
  }

  const validAttributes = [
    "aria-activedescendant",
    "aria-atomic",
    "aria-busy",
    "aria-controls",
    "aria-describedby",
    "aria-dropeffect",
    "aria-expanded",
    "aria-flowto",
    "aria-grabbed",
    "aria-haspopup",
    "aria-hidden",
    "aria-label",
    "aria-labelledby",
    "aria-level",
    "aria-live",
    "aria-orientation",
    "aria-owns",
    "aria-posinset",
    "aria-pressed",
    "aria-relevant",
    "aria-setsize",
    "aria-sort"
  ];

  node.attributes.forEach(attribute => {
    const name = attribute.name.chars.toLowerCase();
    if (name.startsWith("aria-") && !validAttributes.includes(name)) {
      report({
        code: "E065",
        position: node.open.loc,
        meta: {
          data: {
            attribute: name
          }
        }
      });
    }
  });
}

module.exports = {
  name: RULE_NAME,
  lint
};
