const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const path = require('path');
const { init } = require('./db');

const PORT = process.env.PORT || 4000;

async function main() {
  const db = await init();
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());

  // Serve scholarship data
  app.get('/api/scholarships', (req, res) => {
    const dataPath = path.join(__dirname, 'data', 'scholarships.json');
    res.sendFile(dataPath);
  });

  // Signup: create user and profile
  app.post('/api/signup', async (req, res) => {
    try {
      const { email, password, name, role } = req.body;
      if (!email || !password) return res.status(400).json({ message: 'Email and password required' });
      const hash = await bcrypt.hash(password, 10);
      const insertUser = await db.run('INSERT INTO users (email, password_hash) VALUES (?, ?)', [email, hash]);
      const userId = insertUser.lastID;
      await db.run('INSERT INTO profiles (user_id, full_name, role) VALUES (?, ?, ?)', [userId, name || null, role || 'student']);
      return res.json({ ok: true, userId });
    } catch (err) {
      console.error(err);
      if (err && err.code === 'SQLITE_CONSTRAINT') {
        return res.status(400).json({ message: 'Email already exists' });
      }
      return res.status(500).json({ message: 'Signup failed' });
    }
  });

  // Login: verify credentials
  app.post('/api/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) return res.status(400).json({ message: 'Email and password required' });
      const user = await db.get('SELECT * FROM users WHERE email = ?', [email]);
      if (!user) return res.status(401).json({ message: 'Invalid credentials' });
      const match = await bcrypt.compare(password, user.password_hash);
      if (!match) return res.status(401).json({ message: 'Invalid credentials' });
      const profile = await db.get('SELECT * FROM profiles WHERE user_id = ?', [user.id]);
      return res.json({ ok: true, user: { id: user.id, email: user.email }, profile });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Login failed' });
    }
  });

  // Simple profile update endpoint
  app.post('/api/profile', async (req, res) => {
    try {
      const { userId, full_name, role, phone, bio, avatar_url } = req.body;
      if (!userId) return res.status(400).json({ message: 'userId required' });
      const existing = await db.get('SELECT * FROM profiles WHERE user_id = ?', [userId]);
      if (existing) {
        await db.run(
          `UPDATE profiles SET full_name = ?, role = ?, phone = ?, bio = ?, avatar_url = ?, updated_at = CURRENT_TIMESTAMP WHERE user_id = ?`,
          [full_name || existing.full_name, role || existing.role, phone || existing.phone, bio || existing.bio, avatar_url || existing.avatar_url, userId]
        );
        return res.json({ ok: true });
      } else {
        await db.run('INSERT INTO profiles (user_id, full_name, role, phone, bio, avatar_url) VALUES (?, ?, ?, ?, ?, ?)', [userId, full_name, role, phone, bio, avatar_url]);
        return res.json({ ok: true });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Profile save failed' });
    }
  });

  // Serve static front-end in production if needed
  app.use(express.static(path.join(__dirname, '..', 'dist')));

  app.listen(PORT, () => {
    console.log(`Local API server running on http://localhost:${PORT}`);
  });
}

main().catch((err) => {
  console.error('Failed to start server', err);
});
