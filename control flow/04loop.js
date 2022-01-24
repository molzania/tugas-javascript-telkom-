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
while (fiftiethPrime == 50) {
    for (let c = 1; c <= 100; c++) {
        let primeCounter = 0;
    
        for (let d = 2; d < c; d++) {
            if (c % d == 0) {
                primeCounter = 1;
                break;
            }
        }
    
        if (c > 1 && primeCounter == 0) {
            console.log(c);
        }
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
    for(o=1, o<=100, 2o-1){
         console.log(o);
         return true;
    };
  } while (o == 50)

  do {
      if()
  }