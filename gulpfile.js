
var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require('gulp-sourcemaps');
var browser = require("browser-sync").create();

gulp.task("sass", function(){
    return gulp.src("scss/style.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))
        .pipe(browser.stream());
});

gulp.task("reload", function() {
    browser.reload();
})

gulp.task("serwer", function(){
    browser.init({
        server: "./"
    });
});

gulp.task("watch", ['serwer'],function(){
    gulp.watch(["scss/**/*.scss"], ["sass"]);
    gulp.watch(["*.html", "js/**/*.js"], ["reload"]);
});



// var gulp=require("gulp");//pobiera zainstalowany komponent i przypisuje do zmiennej gulp
// var sass=require("gulp-sass");
// var sourcemaps=require("gulp-sourcemaps");
// var browser=require("browser-sync").create();
//
// // gulp.task("task1",function(){
// //   console.log("zadanie 1");
// // });
//
// gulp.task("sass",function(){
//   return gulp.src("scss/main.scss")
//   .pipe(sourcemaps.init())// inicjujemy pokaze nam w konsoli gdzie w pliku scss a nie css
//   .pipe(sass({outputStyle: 'compressed'}).on("error",sass.logError))//kompilacja ktorej zmiennej, przy bledzie nie zatrzyma działania i wyswietli błąd
//                                                                     //{outputStyle: 'compressed'} kompresuje css
//   .pipe(sourcemaps.write())    //zapisujemy
//   .pipe(gulp.dest("css"))// gdzie ma zapisać
//   .pipe(browser.stream());
// })
//
// gulp.task("reload", function(){// po wprowadzeniu zmian i zapisaniu scss strona sam sie przeladowuje
//   browser.reload();
// })
// gulp.task("serwer", function(){//
//   browser.init({
//     serwer:"./"
//   });
// });
//
// // gulp.task("task2", function(){
// //   console.log("zadanie 2")
// // })
// // gulp.task("watch", function(){
// //   gulp.watch(["*.html", "css/**/*.css"],["task"]);// nasłuchuje i sprawsza czy w pliku html zostaje cos zienione( w podanym pliku, podane zadania)
// //                                                             // wszystkie pliki css w foldesze 1_sass
// // })
//
//
// gulp.task("watch", ['serwer'],function(){
//   gulp.watch(["scss/**/*.scss"],["sass"]);// nasłuchuje i sprawsza wszystkie pliki scss w foldesze 1_sass
//   gulp.watch(["*.html", "js/**/*.js"], ["reload"]);
// });
