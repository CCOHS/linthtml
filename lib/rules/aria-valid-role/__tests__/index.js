const { expect } = require("chai");
const linthtml = require("../../../index");

describe("aria-valid-role", function() {
  function createLinter(rules) {
    return linthtml.fromConfig({ rules });
  }

  it("Should not report an error for a role named 'alert'", async function() {
    const linter = createLinter({ "aria-valid-role": true });
    const html = "<div class=\"button\" role=\"alert\"></div>";
    const issues = await linter.lint(html);
    expect(issues).to.have.lengthOf(0);
  });

  it("Should report an error for a role named 'button'", async function() {
    const linter = createLinter({ "aria-valid-role": true });
    const html = "<div class=\"alert\" role=\"button\"></div>";
    const issues = await linter.lint(html);
    expect(issues).to.have.lengthOf(1);
  });
});
