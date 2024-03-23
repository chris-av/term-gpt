export const collectSecret = () => {
  const secret = process.env.OPENAI_SECRET;
  if (!secret) {
    throw "env var OPENAI_SECRET not found, please set it in your environment"
  }
  return secret;
}
