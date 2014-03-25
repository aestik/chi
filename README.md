# Gulp task untuk include HTML partials
---

### Tentang Task
---

Contoh ini memperlihatkan bagaimana meng-*include*-kan file `src/partials/header.html`, `src/partials/sidebar.html`, dan `src/partials/footer.html` ke dalam src/index.html dan src/post.html dan memproses hasilnya ke root folder.

development dilakukan di dalam folder src. setiap perubahan pada folder src akan otomatis berubah pada semua file html yang berada di root folder.

gulp task ini menggunakan [gulp-preprocess](https://github.com/jas/gulp-preprocess).

### Usage
---
0. install [nodejs](http://nodejs.org/) untuk yang belum menginstall.
1. Install Gulpjs, untuk yang belum menginstall: [gulp getting started](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#getting-started) atau jalankan perintah ini di cmd/terminal : `npm install gulp -g`
2. Clone atau download repo ini.
3. Navigate ke folder clone/download dari cmd/terminal, ex: `cd chi`
4. Jalankan npm install dari cmd/terminal : `npm install`
5. Jalankan gulp dari cmd/terminal: `gulp`
6. buka index.html dan/atau post.html di browser.
