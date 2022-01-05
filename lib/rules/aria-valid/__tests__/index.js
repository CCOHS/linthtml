const { expect } = require("chai");
const linthtml = require("../../../index");

describe("aria-valid", function() {
  function createLinter(rules) {
    return linthtml.fromConfig({ rules });
  }

  it("Should not report an error for an attribute named 'aria-labelledby'", async function() {
    const linter = createLinter({ "aria-valid": true });
    const html = "<input aria-labelledby=\"foo\">";
    const issues = await linter.lint(html);
    expect(issues).to.have.lengthOf(0);
  });

  it("Should report an error for an attribute named 'aria-labeledby'", async function() {
    const linter = createLinter({ "aria-valid": true });
    const html = "<input aria-labeledby=\"foo\">";
    const issues = await linter.lint(html);
    expect(issues).to.have.lengthOf(1);
  });
});
