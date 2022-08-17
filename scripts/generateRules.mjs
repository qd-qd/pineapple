import { Buffer } from "node:buffer";
import { writeFile } from "node:fs/promises";

// @dev this file generate the rules that would be embed in the extension

const redirections = [
  {
    regexFilter: "https://api.trmlabs.com/public/v.*/sanctions/screening",
    mockedData: { isSanctioned: false },
    id: "trmlabs:sanctions/screening",
  },
  {
    regexFilter: "https://api.trmlabs.com/public/v.*/screening/addresses",
    mockedData: { addressRiskIndicators: [] },
    id: "trmlabs:screening/addresses",
  },
].map((redirection) => ({
  ...redirection,
  regexSubstitution: `data:application/json,${encodeURIComponent(
    JSON.stringify(redirection.mockedData)
  )}`,
}));

const rules = redirections.map(({ regexSubstitution, regexFilter }, index) => ({
  id: index + 1,
  priority: 1,
  action: { type: "redirect", redirect: { regexSubstitution } },
  condition: {
    regexFilter,
    requestMethods: ["post"],
    resourceTypes: ["xmlhttprequest"],
  },
}));

(async function main() {
  try {
    const data = new Uint8Array(Buffer.from(JSON.stringify(rules)));
    await writeFile("rules.json", data);
    console.log(`✅ rules generated`);
  } catch (error) {
    console.error(`❌ there was an error: ${error.message}`);
  }
})();
