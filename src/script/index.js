export default async function runScript() {
  const [scriptName, ...args] = process.argv.slice(2);

  try {
    const script = await import(`./${scriptName}.js`);
    const result = await script.default(...args);
    return result;
  } catch (err) {
    console.error('err', err)
    return null;
  }
}

runScript();
