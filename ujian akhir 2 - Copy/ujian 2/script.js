let data = [];

function tambah() {
  let halte = document.getElementById("halte").value;
  let waktu = document.getElementById("waktu").value;

  if (!halte || !waktu) {
    alert("Isi dulu!");
    return;
  }

  data.push({
    halte,
    waktu,
    status: "Sedang berjalan",
    id: "BUS-" + Math.floor(Math.random() * 1000)
  });

  render();
}


function render() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  data.forEach((item, i) => {
    list.innerHTML += `
      <div class="card">
        <span class="badge">${item.status}</span>

        <div class="title">${item.halte}</div>
        <div class="small">Waktu: ${item.waktu}</div>
        <div class="small">ID: ${item.id}</div>

        <div class="actions">
          <button class="edit" onclick="edit(${i})">Edit</button>
          <button class="delete" onclick="hapus(${i})">Hapus</button>
        </div>
      </div>
    `;
  });
}

function hapus(i) {
  data.splice(i, 1);
  render();
}

function edit(i) {
  let baru = prompt("Edit halte:", data[i].halte);
  if (baru) {
    data[i].halte = baru;
    render();
  }
}