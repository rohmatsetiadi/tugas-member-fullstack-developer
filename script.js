function ubahMode(){
const ubah = document.body;
ubah.classList.toggle("dark");

[].forEach.call(ubah.getElementsByTagName('div'), 
function(el) {
    el.classList.toggle('dark');
});
}