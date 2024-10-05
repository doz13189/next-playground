const jwt = require("jsonwebtoken");
const yargs = require("yargs");

const SECRET_KEY = process.env.JWT_SECRET_KEY;
if (!SECRET_KEY) {
  throw new Error("JWT_SECRET_KEY environment variable is not set");
}

const argv = yargs
  .option("subject", {
    alias: "s",
    description: "Subject of the token (e.g., user ID)",
    type: "string",
    demandOption: true,
  })
  .option("expiry", {
    alias: "e",
    description: "Token expiry in seconds (default is 30 days)",
    type: "number",
    default: 30 * 24 * 60 * 60, // 30 days in seconds
  })
  .help()
  .alias("help", "h").argv;

const payload = {
  iss: "search-the-hero.vercel.app",
  sub: argv.subject,
};

const token = jwt.sign(payload, SECRET_KEY, {
  algorithm: "HS256",
  expiresIn: argv.expiry,
});

console.info("Generated JWT:");
console.info(token);
console.info(
  `Token will expire in ${argv.expiry} seconds (approximately ${
    argv.expiry / (24 * 60 * 60)
  } days)`,
);
