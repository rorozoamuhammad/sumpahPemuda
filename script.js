const input = document.getElementById('input');
const btn = document.getElementById('kirim');
const isi = document.getElementById('isi');
let arr = [];

btn.addEventListener('click', () => {
    if(input == null) {
        alert('Tidak Boleh Kosong');
    } else {
        let txt = localStorage.getItem('sumpahPemuda');
        if(txt == null) {
            arr = [];
        } else {
            arr = JSON.parse(txt);
        }
        arr.push(input.value);
        input.value = '';
        localStorage.setItem('sumpahPemuda', JSON.stringify(arr));
        tampil();
    }
});

input.addEventListener('keyup', (e) => {
    if(e.keyCode == 13) {
        if(input == null) {
            alert('Tidak Boleh Kosong');
        } else {
            let txt = localStorage.getItem('sumpahPemuda');
            if(txt == null) {
                arr = [];
            } else {
                arr = JSON.parse(txt);
            }
            arr.push(input.value);
            input.value = '';
            localStorage.setItem('sumpahPemuda', JSON.stringify(arr));
            tampil();
        }
    }
});

const tampil = () => {
    let txt = localStorage.getItem("sumpahPemuda");
    if(txt == null) {
        arr = [];
    } else {
        arr = JSON.parse(txt);
    }
    let code = '';
    arr.forEach((list, index) => {
        code += `<div class="kotak">
            <p>${list}</p>
            <button type="button" id="haput" onclick="dlt(${index})">Hapus</button>
        </div>
        `;
    });
    isi.innerHTML = code;
}

const dlt = (inde) => {
    let txt = localStorage.getItem('sumpahPemuda');
    arr = JSON.parse(txt);
    arr.splice(inde, 1);
    localStorage.setItem('sumpahPemuda', JSON.stringify(arr));
    tampil();
}

window.addEventListener('load', () => {
    tampil();
});