const kataList = [
    "buku", "pensil", "sekolah", "topi", "sepatu",
    "belajar", "pulpen", "meja", "spidol", "tas", "seragam", "bekal", "jam", "papan", "kertas",
    "handphone", "lampu", "kipas", "jendela", "pintu", "kursi", "komputer",
  ];
  
  let currentWord = "";
  let score = 0;
  let level = 1;
  
  function acakKata(kata) {
    let huruf = kata.split('');
    for (let i = huruf.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [huruf[i], huruf[j]] = [huruf[j], huruf[i]];
    }
    return huruf;
  }
  
  function tampilkanPertanyaan() {
    currentWord = kataList[Math.floor(Math.random() * kataList.length)];
    const shuffled = acakKata(currentWord);
    document.getElementById("letters").innerHTML = shuffled.map(h => `<span>${h}</span>`).join('');
    document.getElementById("answer").value = "";
    document.getElementById("result").innerText = "";
  }
  
  function checkAnswer() {
    const jawaban = document.getElementById("answer").value.toLowerCase();
    if (jawaban === currentWord) {
      score += 10;
      level += 1;
      document.getElementById("result").innerText = "✅ Benar! Naik level!";
      updateStatus();
      setTimeout(tampilkanPertanyaan, 1500);
    } else {
      document.getElementById("result").innerText = "❌ Salah, coba lagi!";
    }
  }
  
  function updateStatus() {
    document.getElementById("score").innerText = score;
    document.getElementById("level").innerText = level;
  }
  
  tampilkanPertanyaan();
  updateStatus();
  
