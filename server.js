/**
 * ONE-STOP PERSONALIZED CAREER & EDUCATION ADVISOR
 * Zero-Dependency Local Web Server (server.js)
 * 
 * Runs using standard Node.js without npm install or node_modules!
 */

const net = require('net');
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8'
};

function handleRequest(req, res) {
  // Parse URL pathname
  let reqUrl = req.url.split('?')[0].split('#')[0];
  if (reqUrl === '/' || reqUrl === '') {
    reqUrl = '/index.html';
  }

  let filePath = path.join(ROOT_DIR, reqUrl);

  // If path doesn't have an extension, try appending .html
  if (!path.extname(filePath)) {
    if (fs.existsSync(filePath + '.html')) {
      filePath = filePath + '.html';
    } else if (fs.existsSync(path.join(filePath, 'index.html'))) {
      filePath = path.join(filePath, 'index.html');
    }
  }

  // Security check: ensure within ROOT_DIR
  if (!filePath.startsWith(ROOT_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`
        <!DOCTYPE html>
        <html>
        <head><title>404 - Page Not Found</title><link rel="stylesheet" href="/style.css"></head>
        <body style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;text-align:center;">
          <div class="card" style="padding: 2.5rem; max-width: 480px;">
            <h1 style="font-size: 2.5rem; margin-bottom: 0.5rem; color: #ef4444;">404</h1>
            <p style="margin-bottom: 1.5rem; color: #64748b;">The requested page could not be located.</p>
            <a href="/index.html" class="btn btn-primary">Return to Advisor Home</a>
          </div>
        </body>
        </html>
      `);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Access-Control-Allow-Origin': '*'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
}

// Load SSL PFX certificate if present
const PFX_FILE = path.join(ROOT_DIR, 'server.pfx');
let pfxBuffer = null;
if (fs.existsSync(PFX_FILE)) {
  try {
    pfxBuffer = fs.readFileSync(PFX_FILE);
  } catch (e) {
    console.warn('Could not read server.pfx:', e.message);
  }
}

const httpServer = http.createServer(handleRequest);
let httpsServer = null;

if (pfxBuffer) {
  try {
    httpsServer = https.createServer({ pfx: pfxBuffer, passphrase: 'advisor' }, handleRequest);
    httpsServer.on('tlsClientError', () => {});
  } catch (e) {
    console.warn('Could not initialize TLS listener:', e.message);
  }
}

function startServer(portToTry) {
  if (httpsServer) {
    // Dual Protocol Multiplexer: Seamlessly handles HTTP and HTTPS on the SAME port
    const masterServer = net.createServer((socket) => {
      socket.once('data', (buf) => {
        // If first byte is 22 (0x16), it is a TLS ClientHello packet
        if (buf[0] === 22) {
          httpsServer.emit('connection', socket);
        } else {
          httpServer.emit('connection', socket);
        }
        socket.unshift(buf);
      });
      socket.on('error', () => {});
    });

    masterServer.listen(portToTry, () => {
      printReady(portToTry, true);
    });

    masterServer.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        startServer(portToTry + 1);
      } else {
        console.error('Server failed to start:', err);
      }
    });
  } else {
    httpServer.listen(portToTry, () => {
      printReady(portToTry, false);
    });

    httpServer.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        startServer(portToTry + 1);
      } else {
        console.error('Server failed to start:', err);
      }
    });
  }
}

function printReady(port, hasHttps) {
  const httpUrl = `http://localhost:${port}`;
  const httpsUrl = `https://localhost:${port}`;
  const lanHttp = `http://10.187.26.224:${port}`;

  console.log('\n=============================================================');
  console.log(' 🚀 ONE-STOP PERSONALIZED CAREER & EDUCATION ADVISOR SERVER');
  console.log('=============================================================');
  console.log(' Status: Dual Protocol Server Active & Ready!');
  console.log(` HTTP URL:      ${httpUrl}`);
  if (hasHttps) {
    console.log(` HTTPS URL:     ${httpsUrl} (Auto-TLS Handshake Enabled)`);
  }
  console.log(` LAN / Wi-Fi:   ${lanHttp}`);
  console.log(' SSL Fix:       Zero ERR_SSL_PROTOCOL_ERROR (Handles HTTP & HTTPS)');
  console.log(' Directory:     ' + ROOT_DIR);
  console.log(' Press Ctrl + C to stop the server at any time.');
  console.log('=============================================================\n');

  exec(`start ${httpUrl}`, (err) => {
    if (!err) console.log(`✓ Default browser opened at ${httpUrl}`);
  });
}

startServer(PORT);

