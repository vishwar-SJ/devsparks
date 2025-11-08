const { open } = require('sqlite');
const sqlite3 = require('sqlite3');
const path = require('path');

(async () => {
  try {
    const dbPath = path.join(__dirname, 'database.sqlite');
    const db = await open({ filename: dbPath, driver: sqlite3.Database });

    const users = await db.all('SELECT id, email, created_at FROM users');
    console.log('== Users ==');
    if (users.length === 0) console.log('No users found');
    else console.table(users);

    const profiles = await db.all('SELECT * FROM profiles');
    console.log('\n== Profiles ==');
    if (profiles.length === 0) console.log('No profiles found');
    else console.table(profiles);

    await db.close();
  } catch (err) {
    console.error('Failed to read database:', err);
    process.exit(1);
  }
})();
