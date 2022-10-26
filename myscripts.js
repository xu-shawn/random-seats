function Person(name, avatar) {
    this.name = name;
    this.avatar = avatar;
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]
    ];
  }

  return array;
}

var namesold = ["Avery", "Anders", "Theo", "Ronan", "Abi", "Masato", "Max", "Drew", "Jazzy", "Alex", "Ryder", "Lucas", "Maya", "Will", "Lincoln", "Eilot", "Shawn"];
var names = [new Person("Avery","https://lh3.googleusercontent.com/a-/ACNPEu8qa8tWlWfXzDi-02g3zU3f_qFr366--O9xMYsU=s544-p-k-no"), new Person("Anders","https://lh3.googleusercontent.com/a-/ACNPEu8U3h6C_pkNV8KKZgArqIlqM7C8rzCGq99-lgq8=s544-p-k-no"), new Person("Theo","https://lh3.googleusercontent.com/a-/ACNPEu_BYMU97CQYUy3j-uEOdYAdjUopFmJjYbkm6zcI=s544-p-k-no"), new Person("Ronan","https://lh3.googleusercontent.com/a-/ACNPEu83_2bEdjodFgJT75VhG2Uc7aJcC9K4VZatX7kr=s544-p-k-no"), new Person("Abi","https://lh3.googleusercontent.com/a-/ACNPEu8Q0u4zrQvO04oFnTlJxLwG9TFjtyHoE9VwMYzH=s544-p-k-no"), new Person("Masato","https://lh3.googleusercontent.com/a-/ACNPEu-0jMxwe53mWnZABZjBDC6QIOgc-L3pctpn3DK1hg=s544-p-k-no"), new Person("Max","https://lh3.googleusercontent.com/a-/ACNPEu_H0gu_sGAupz0siuwCWyWZvq6zas-GDDHCFAmf=s544-p-k-no"), new Person("Drew","https://lh3.googleusercontent.com/a-/ACNPEu-YknlS9wMs9WULzBpUpQTvVu-l9pR0EvPp_aIRQA=s544-p-k-no"), new Person("Jazzy","https://lh3.googleusercontent.com/a-/ACNPEu9BTLrYk0jmTOaeWd0wTxa-l7bUew1jePz8B429=s544-p-k-no"), new Person("Alex","https://lh3.googleusercontent.com/a-/ACNPEu9rFwlOeTTytQGauVsbOK9Ox3Wd3mVXTk8-guBtpw=s544-p-k-no"), new Person("Ryder","https://lh3.googleusercontent.com/a-/ACNPEu-okOGiNis7J1qL70TuhM0n04_aqt6emi1rRHRPbg=s544-p-k-no"), new Person("Lucas","https://lh3.googleusercontent.com/a-/ACNPEu9Ls5-xe9fi4yUDJKKZTdMjoW5NwCQvopjQyc2OQw=s544-p-k-no"), new Person("Maya","https://lh3.googleusercontent.com/a/ALm5wu2mfyyaW8zVqoLhbYMaNPwLMHlF37Y-Zm_FtI1CMQ0=s544-p-k-no-mo"), new Person("Will","https://lh3.googleusercontent.com/a-/ACNPEu9NRbbJveD-WjatR9GA7rbRpr0i-y9F_lC64_5U=s544-p-k-no"), new Person("Lincoln","https://lh3.googleusercontent.com/a-/ACNPEu_nIDSDcdnAR5quU1Ryz_ne2z6g0nVyV_rRvu1EQw=s544-p-k-no"), new Person("Elliot","https://lh3.googleusercontent.com/a/ALm5wu0lBVQsnDaR_1FXu11Aw_OGucv4v3aucnalpbB3=s544-p-k-no-mo"), new Person("Shawn","https://lh3.googleusercontent.com/cm/AATWAfsBFjeBEjjqG7JGLmxhq96UBXHkhbVO1XdZ7EG-jMDj_DyhKdq7aJw05NjoDwJw=s544-p-k-no")]
shuffle(names);
window.onload = function(){
  for (i = 0; i < names.length; i++) {
    document.getElementById('name' + (i + 1)).innerHTML = "<img src=\"" + names[i].avatar + "\" alt=\"Avatar\" style=\"width:80px;height:80px;\">" + "<h2>" + names[i].name + "</h2>";
  }
}