const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Create canvas with OG image dimensions (1200x630)
const canvas = createCanvas(1200, 630);
const ctx = canvas.getContext('2d');

// Background gradient
const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
gradient.addColorStop(0, '#0A0A0A');
gradient.addColorStop(0.5, '#1A1A1A');
gradient.addColorStop(1, '#0A0A0A');

ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 1200, 630);

// Grid pattern
ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
ctx.lineWidth = 1;

// Vertical lines
for (let x = 0; x <= 1200; x += 60) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 630);
    ctx.stroke();
}

// Horizontal lines
for (let y = 0; y <= 630; y += 60) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(1200, y);
    ctx.stroke();
}

// Accent dots
const dots = [
    { x: 200, y: 120 },
    { x: 1020, y: 200 },
    { x: 150, y: 480 },
    { x: 980, y: 430 },
    { x: 600, y: 300 }
];

ctx.fillStyle = '#14B8A6';
dots.forEach(dot => {
    ctx.globalAlpha = 0.6;
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, 4, 0, Math.PI * 2);
    ctx.fill();
});

ctx.globalAlpha = 1;

// Title
ctx.fillStyle = '#FAFAFA';
ctx.font = 'bold 72px system-ui, -apple-system, sans-serif';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('Quiet View', 600, 280);

// Subtitle
ctx.fillStyle = '#A1A1AA';
ctx.font = '300 32px system-ui, -apple-system, sans-serif';
ctx.fillText('Watch the world in real-time', 600, 340);

// Tagline
ctx.fillStyle = '#14B8A6';
ctx.font = '400 24px system-ui, -apple-system, sans-serif';
ctx.fillText('Six windows. One quiet world.', 600, 380);

// Save as JPEG
const outputPath = path.join(__dirname, '..', 'public', 'og.jpg');
const buffer = canvas.toBuffer('image/jpeg', { quality: 0.9 });
fs.writeFileSync(outputPath, buffer);

console.log('OG image created successfully at:', outputPath);