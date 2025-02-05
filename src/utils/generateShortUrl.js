async function generateAlias() {
    const { nanoid } = await import('nanoid');
    return nanoid(6);
  }
  
module.exports = { generateAlias };  