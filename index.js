export default {
  async fetch(request) {
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Looping Video</title>
        <style>
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden;
            background: black;
          }
          a {
            display: block;
            width: 100%;
            height: 100%;
            cursor: pointer;
          }
          video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            pointer-events: none;
          }
        </style>
      </head>
      <body>
        <a href="https://www.fastbackgroundcheck.com/people/frans-bloom/id/f0842814496902949431" target="_blank" rel="noopener">
          <video autoplay muted loop playsinline>
            <source src="https://github.com/fransbloom/loop/raw/refs/heads/main/loop.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </a>
      </body>
      </html>
    `;
    return new Response(html, {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    });
  }
}
