module.exports = async (pool) => {
    try {
        await pool.query(`
            ALTER TABLE users 
            ADD COLUMN IF NOT EXISTS current_mood VARCHAR(50),
            ADD COLUMN IF NOT EXISTS mood_updated_at TIMESTAMP;
        `);
        console.log('✅ Mood sync fields migration applied');
    } catch (err) {
        console.error('Mood migration failed:', err.message);
    }
};
