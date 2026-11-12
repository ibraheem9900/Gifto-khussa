import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const app = express();
const port = process.env.PORT || 3000;
app.disable('x-powered-by');
app.use(express.json({ limit: '1mb' }));
app.get('/health', (_req, res) => res.status(200).json({ ok: true, service: 'gifto-khussa' }));
app.use(express.static(path.join(root, 'dist')));
app.get('/{*splat}', (_req, res) => res.sendFile(path.join(root, 'dist', 'index.html')));
app.listen(port, '0.0.0.0', () => console.log(`Gifto Khussa server listening on ${port}`));
