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
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
          }
          video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            pointer-events: none;
            z-index: 0;
          }
          .overlay {
            position: absolute;
            top: 10%;
            width: 100%;
            text-align: center;
            font-size: 3rem;
            font-weight: bold;
            color: white;
            z-index: 2;
            pointer-events: none;
            text-shadow: 2px 2px 8px black;
          }
          .subtext {
            font-size: 1.2rem;
            font-weight: normal;
            margin-top: 1rem;
          }
          .subtext a {
            color: #ffdf33;
            text-decoration: underline;
            pointer-events: auto;
          }
        </style>
      </head>
      <body>
        <div class="overlay">
          Frans Bloom of Arroyo Grande Hits Women
          <div class="subtext">
            Director of Product Operations at <a href="https://www.sage.com" target="_blank" rel="noopener">Sage</a>
          </div>
        </div>
        <a href="https://www.fastbackgroundcheck.com/people/frans-bloom/id/f0842814496902949431" target="_blank" rel="noopener"></a>
        <video autoplay muted loop playsinline>
          <source src="https://github.com/fransbloom/loop/raw/refs/heads/main/loop.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
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
