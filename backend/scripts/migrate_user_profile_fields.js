module.exports = async (pool) => {
    try {
        await pool.query(`
            ALTER TABLE users 
            ADD COLUMN IF NOT EXISTS gender VARCHAR(50),
            ADD COLUMN IF NOT EXISTS profile_complete BOOLEAN DEFAULT FALSE;
        `);
        console.log('✅ User profile fields migration applied');
    } catch (err) {
        console.error('Migration failed:', err.message);
    }
};
