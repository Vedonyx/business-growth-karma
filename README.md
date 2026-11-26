# Business Growth Karma

Open `index.html` for the homepage or `4-pillar-access/index.html` for the lesson page. Both pages use the bundled images, fonts, CSS, and JavaScript. Wistia videos, Meta Pixel, and the existing booking links need internet access.

To preview the original URL paths, run `python -m http.server 8080` from this folder and open `http://localhost:8080/`.

On a static host, publish this folder at the site root and configure `404.html` as the custom error page. The legacy URLs have HTML redirect pages. Configure permanent redirects on your host if you also need the original HTTP 308 responses.
