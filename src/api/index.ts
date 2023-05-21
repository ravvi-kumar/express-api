import express from 'express';
const router = express.Router();

router.get<{}, {message: string}>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});
router.get('/api', (req, res) => {
  const path = `/api/item/${Math.random().toString().slice(2, 8)}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});
router.get('/api/item/:slug', (req, res) => {
  const {slug} = req.params;
  res.end(`Item: ${slug}`);
});
export default router;
