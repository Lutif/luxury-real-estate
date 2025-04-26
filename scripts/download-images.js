import https from 'https';
import fs from 'fs';

// Create directories if they don't exist
const dirs = [
  'public',
  'public/properties',
  'public/testimonials'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Image URLs and their local paths
const images = [
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    path: 'public/hero-bg.jpg',
    params: '?auto=format&fit=crop&w=1920&q=80'
  },
  {
    url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227',
    path: 'public/properties/villa-1.jpg',
    params: '?auto=format&fit=crop&w=800&q=80'
  },
  {
    url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    path: 'public/properties/penthouse-1.jpg',
    params: '?auto=format&fit=crop&w=800&q=80'
  },
  {
    url: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6',
    path: 'public/properties/brownstone-1.jpg',
    params: '?auto=format&fit=crop&w=800&q=80'
  },
  {
    url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    path: 'public/testimonials/sarah.jpg',
    params: '?auto=format&fit=crop&w=200&q=80'
  },
  {
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    path: 'public/testimonials/michael.jpg',
    params: '?auto=format&fit=crop&w=200&q=80'
  },
  {
    url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    path: 'public/testimonials/emily.jpg',
    params: '?auto=format&fit=crop&w=200&q=80'
  }
];

// Download function
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(filepath);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${filepath}`);
          resolve();
        });
      } else {
        reject(`Failed to download ${url}: ${response.statusCode}`);
      }
    }).on('error', (err) => {
      reject(`Error downloading ${url}: ${err.message}`);
    });
  });
}

// Download all images
async function downloadAllImages() {
  for (const image of images) {
    try {
      await downloadImage(image.url + image.params, image.path);
    } catch (error) {
      console.error(error);
    }
  }
  console.log('All downloads completed!');
}

downloadAllImages(); 