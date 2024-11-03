function asideServise() {
    let serviseclass = document.getElementsByClassName('asideServise')[0];
    if (serviseclass) {
        serviseclass.classList.toggle('asideServiseTop50');
    }
}

let serviseclass = document.getElementsByClassName('asideServise')[0];


let contactclass = document.getElementsByClassName('asideContact')[0];
let asideContact = () => {
    contactclass.classList.toggle('asideServiseTop50')
}
let settingclass = document.getElementsByClassName('asideComponents')[0];
let asideSetting = () => {
    settingclass.classList.toggle('asideServiseTop50')
}


// close
let closeBox = () => {
    serviseclass.classList.remove('asideServiseTop50');
    contactclass.classList.remove('asideServiseTop50')
    settingclass.classList.remove('asideServiseTop50')
}
