const Url = require('../models/Url');
const { generateAlias } = require('../utils/generateShortUrl');

exports.createShortUrl = async (req, res) => {
  const { longUrl, customAlias, topic } = req.body;
  const userId = req.user.id;

  let alias = customAlias || generateAlias();

  const existing = await Url.findOne({ shortUrl: alias });
  if (existing) return res.status(400).json({ message: 'Alias already taken' });

  const shortUrl = `${req.protocol}://${req.get('host')}/${alias}`;

  const url = new Url({ longUrl, shortUrl, customAlias: alias, topic, userId });
  await url.save();

  res.json({ shortUrl, createdAt: url.createdAt });
};