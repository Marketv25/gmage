const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Fix nav logo
html = html.replace(/<a href="#"><img src="data:image\/jpeg;base64[^>]+><\/a>/, `<a href="#"><img src="assets/Logo gma Marfil.png" alt="GMA" class="nav-logo-img" style="height:36px;display:block"/></a>`);

// Fix footer logo
html = html.replace(/<div class="footer-logo"><img src="data:image\/jpeg;base64[^>]+><\/div>/, `<div class="footer-logo"><img src="assets/Logo gma Marfil.png" alt="GMA" style="height:28px;opacity:0.35;filter:brightness(2)"/></div>`);

// Fix Joney photo
html = html.replace(/<img src="assets\/joney\.png" alt="Joney Castellanos">/, `<img src="assets/9108d5c0-0de4-45c3-b76a-b17b4aee66fa.jfif" alt="Joney Castellanos">`);

fs.writeFileSync('index.html', html);
