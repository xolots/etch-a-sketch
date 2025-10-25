let containerRoot = document.querySelector('.container')
let containerSub = document.querySelector('.container-sub')

let childCon = `
            <div class="child-con">
    </div>
`

// Tambahkan pixel sebanyak 16 kali ke kanan (row)
for (let x = 0; x < 16; x++) {
    containerSub.insertAdjacentHTML('beforeend', childCon)
}

//tambahkan pixel sebanyak 15 kali ke bawah (column)
for (let x = 1; x < 16; x++) {
    containerRoot.insertAdjacentHTML('beforeend', containerSub.outerHTML)
}

// function untuk menambah event ketika pixel di hover
function whenHover(jumlah_pixel) {
    // Select semua container-sub dan semua chold-con
    let containerSubAll = document.querySelectorAll('.container-sub')

    // tambah event listener ketika di hover akan berubah warna yang sudah ditentuukan pake switch statement
    for (let i = 0; i < parseInt(jumlah_pixel); i++) {
        containerSubAll[i].addEventListener('mouseover', (e) => {
            let target = e.target
            if (target.classList.contains('child-con')) {
                let randomNumber = Math.floor(Math.random() * 5)
                let warna = "white"
                switch (randomNumber) {
                    case 0:
                        warna = "red"
                        break
                    case 1:
                        warna = "black"
                        break
                    case 2:
                        warna = "violet"
                        break
                    case 3:
                        warna = "pink"
                        break
                    case 4:
                        warna = "yellow"
                        break
                }

                target.style.backgroundColor = warna;
            }
        })
    }
}
whenHover(16)

// event pada tombol change-pixel
let tombol = document.querySelector('#change-pixel')
tombol.addEventListener('click', () => {
    let howManyPixel = prompt('masukkan angka')
    if (parseInt(howManyPixel) > 100) {
        return alert('Jumlah nya tidak boleh melebihi 100')
    }
    // kosongkan semua child element didalam containerSub dan containerRoot untuk menghapus semua tampilan yang ada sebelumnya
    containerSub.innerHTML = ''
    containerRoot.innerHTML = ''

    for (let x = 0; x < parseInt(howManyPixel); x++) {
        containerSub.insertAdjacentHTML('beforeend', childCon)
    }

    for (let x = 0; x < parseInt(howManyPixel); x++) {
        containerRoot.insertAdjacentHTML('beforeend', containerSub.outerHTML)
    }

    whenHover(howManyPixel)

})