const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Create multiple sizes for better compatibility
const sizes = [16, 32, 48, 64, 128, 256];

sizes.forEach(size => {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    
    // Dark background with subtle gradient
    const gradient = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
    gradient.addColorStop(0, '#1A1A1A');
    gradient.addColorStop(1, '#0A0A0A');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
    
    // Add subtle grid pattern for larger sizes
    if (size >= 32) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 1;
        
        const gridSize = Math.max(4, size / 8);
        for (let x = 0; x <= size; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, size);
            ctx.stroke();
        }
        for (let y = 0; y <= size; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(size, y);
            ctx.stroke();
        }
    }
    
    // Central logo - simplified Q letter or dot pattern
    const centerX = size / 2;
    const centerY = size / 2;
    
    if (size >= 32) {
        // Q-like shape for larger icons
        ctx.fillStyle = '#14B8A6';
        ctx.beginPath();
        
        const radius = size * 0.25;
        const strokeWidth = Math.max(2, size * 0.08);
        
        // Outer circle
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Inner circle (hole)
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius - strokeWidth, 0, Math.PI * 2);
        ctx.fill();
        
        // Reset composite operation
        ctx.globalCompositeOperation = 'source-over';
        
        // Small tail for Q
        ctx.fillStyle = '#14B8A6';
        ctx.beginPath();
        ctx.arc(centerX + radius * 0.4, centerY + radius * 0.4, strokeWidth / 2, 0, Math.PI * 2);
        ctx.fill();
    } else {
        // Simple dot for small sizes
        ctx.fillStyle = '#14B8A6';
        ctx.beginPath();
        ctx.arc(centerX, centerY, size * 0.25, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Save as PNG
    const outputPath = path.join(__dirname, '..', 'public', `favicon-${size}x${size}.png`);
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(outputPath, buffer);
    
    console.log(`Favicon ${size}x${size} created successfully`);
});

// Create the main favicon.png (32x32)
const mainFaviconSource = path.join(__dirname, '..', 'public', 'favicon-32x32.png');
const mainFaviconDest = path.join(__dirname, '..', 'public', 'favicon.png');
fs.copyFileSync(mainFaviconSource, mainFaviconDest);

console.log('Main favicon.png created successfully');