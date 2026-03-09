const fs = require('fs');
const path = require('path');

const filesToFix = [
    'src/app/join/[code]/page.tsx',
    'src/app/gallery/[id]/page.tsx'
];

const isRevert = process.argv.includes('--revert');

console.log(`🚀 ${isRevert ? 'Reverting' : 'Preparing'} mobile build configurations...`);

filesToFix.forEach(fileRelPath => {
    const fullPath = path.join(__dirname, '..', fileRelPath);

    if (!fs.existsSync(fullPath)) {
        console.warn(`⚠️ Warning: File not found - ${fullPath}`);
        return;
    }

    try {
        const content = fs.readFileSync(fullPath, 'utf8');
        let updatedContent = content;

        if (isRevert) {
            // Logic: Find the static segments and ensure they are all prefixed with // STATIC_EXPORT
            // This is safer than the previous regex approach
            const lines = content.split('\n');
            const processedLines = lines.map(line => {
                const trimmed = line.trim();
                // If it's one of our target lines and NOT already commented, comment it
                if ((trimmed.startsWith('export const dynamic') ||
                    trimmed.startsWith('export const dynamicParams') ||
                    trimmed.startsWith('export async function generateStaticParams') ||
                    trimmed.startsWith('return [{') ||
                    trimmed === '}') && !line.includes('STATIC_EXPORT') && !trimmed.startsWith('export default') && !trimmed.startsWith('return <')) {

                    // Special check for the closing brace - only if it's the one for generateStaticParams
                    // In our files, the only standalone } is for that function
                    if (trimmed === '}' && lines.indexOf(line) < 5) return line; // Skip if it's likely part of something else early on

                    return `// STATIC_EXPORT ${line}`;
                }
                return line;
            });
            updatedContent = processedLines.join('\n');
        } else {
            // Uncomment everything prefixed with // STATIC_EXPORT
            updatedContent = content.replace(/\/\/ STATIC_EXPORT /g, '');
        }

        if (content !== updatedContent) {
            fs.writeFileSync(fullPath, updatedContent);
            console.log(`✅ ${isRevert ? 'Reverted' : 'Updated'}: ${fileRelPath}`);
        } else {
            console.log(`ℹ️ No changes needed: ${fileRelPath}`);
        }
    } catch (err) {
        console.error(`❌ Error processing ${fileRelPath}:`, err.message);
        process.exit(1);
    }
});

console.log('✨ Preparation complete.');
