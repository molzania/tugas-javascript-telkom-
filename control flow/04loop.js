/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
for (let a = 1; a <= 100; a++) {
    let angka1 = 0;

    for (let b = 2; b < a; b++) {
        if (a % b == 0) {
            angka1 = 1;
            break;
        }
    }

    if (a > 1 && angka1 == 0) {
        console.log(a);
    }
}


/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime;

/// EDIT HERE
while (fiftiethPrime < 230) {
    for(e=1; e<=230; e++) {
        let primeCounter = 0;
        break;
    }
}


/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;

/// EDIT HERE
do { 
 if(n % 1 == 0){
     return true;
 } else {
     return false
 }
 } while (n == 50)

 do { 
    for(n=1, n<=100, 2n-1){
         console.log(n);
         return true;
    }
  } while (n == 50)