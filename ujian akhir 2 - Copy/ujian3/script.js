
function kembali() {
  window.history.back();
}

let jadwal = [
  { halte: "Terminal A", waktu: "08:00" },
  { halte: "Halte B", waktu: "10:00" },
  { halte: "Halte C", waktu: "12:00" },
  { halte: "Halte D", waktu: "15:00" }
];

// ambil status berdasarkan waktu sekarang
function getStatus(waktu) {
  let sekarang = new Date();
  let sekarangMenit = sekarang.getHours() * 60 + sekarang.getMinutes();

  let [jam, menit] = waktu.split(":").map(Number);
  let waktuMenit = jam * 60 + menit;

  if (sekarangMenit < waktuMenit) {
    return { text: "Belum Berangkat", color: "gray" };
  } else if (sekarangMenit >= waktuMenit && sekarangMenit <= waktuMenit + 30) {
    return { text: "Sedang Berjalan", color: "green" };
  } else {
    return { text: "Selesai", color: "red" };
  }
}

// tampilkan jam sekarang
function tampilJam() {
  let now = new Date();
  let jam = now.toLocaleTimeString("id-ID");
  document.getElementById("jam").innerText = "Jam sekarang: " + jam;
}

// render jadwal
function render() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  jadwal.forEach(item => {
    let status = getStatus(item.waktu);

    list.innerHTML += `
      <div class="card">
        <span class="badge" style="background:${status.color}">
          ${status.text}
        </span>

        <div class="title">${item.halte}</div>
        <div>Waktu: ${item.waktu}</div>
      </div>
    `;
  });
}

// update tiap detik
setInterval(() => {
  tampilJam();
  render();
}, 1000);