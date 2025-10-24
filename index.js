let containerRoot = document.querySelector('.container')
let containerSub = document.querySelector('.container-sub')

let childCon = `
            <div class="child-con">
    </div>
`

for (let x = 1; x < 17 ; x++) {
    containerSub.insertAdjacentHTML('beforeend', childCon)
}

let childConList = document.querySelectorAll('.child-con')

for (let x = 1; x < 16; x++) {
    containerRoot.insertAdjacentHTML('beforeend', containerSub.outerHTML)
}


let containerSubAll = document.querySelectorAll('.container-sub')
console.log(childCon.length)
for (let i = 0; i < childConList.length + 1; i++){
    containerSubAll[i].addEventListener('mouseover', (e) => {
        let target = e.target
        if(target.classList.contains('child-con')){
            let randomNumber = Math.floor(Math.random() * 5)
            let warna = "white"
            switch (randomNumber){
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
            // console.log(target)
        }
    })
}