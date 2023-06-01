import { KROT } from 'captcha-eu-sdk'


KROT.init();
KROT.KROT_HOST="https://captcha-proxy-test.kmm.at"
KROT.publicSecret="rxGjizqyvrcYriWbLrlz-x-726fd58c8fefe9ee67deaec5a4d3c0d500e663d5"

window.addEventListener("CPT_OK", (e) => {
    alert("SUCCESS")
});

var f = document.getElementById("testform")
KROT.interceptForm(f);


