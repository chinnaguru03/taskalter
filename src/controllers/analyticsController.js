const Url = require('../models/Url');
const Analytics = require('../models/Analytics');
const useragent = require('useragent');

exports.redirectUrl = async (req, res) => {
  const { alias } = req.params;
  const url = await Url.findOne({ shortUrl: `${req.protocol}://${req.get('host')}/${alias}` });

  if (!url) return res.status(404).json({ message: 'URL not found' });

  const agent = useragent.parse(req.headers['user-agent']);
  const os = agent.os.toString();
  const device = agent.device.toString();

  const analytics = new Analytics({
    urlId: url._id,
    ip: req.ip,
    userAgent: req.headers['user-agent'],
    os,
    device,
    location: req.headers['x-forwarded-for'] || req.connection.remoteAddress
  });
  await analytics.save();

  res.redirect(url.longUrl);
};