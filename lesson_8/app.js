const $form = document.querySelector("form");
const $urlInput = $form.querySelector("#url");
const $colorInput = $form.querySelector("#qrColor");
const $bgColorInput = $form.querySelector("#qrBgColor");

const $qrBox = document.querySelector(".qr-box");
const $qrUrl = document.querySelector(".word-wrap");

$colorInput.value = "#ffffff";
$bgColorInput.value = "#2c7dfa";

$urlInput.oninput = () => {
  $qrUrl.textContent = $urlInput.value;
  renderQrCode();
};

$colorInput.onchange = () => {
  qrCodeOptions.colorDark = $colorInput.value;
  renderQrCode();
};

$bgColorInput.addEventListener("change", () => {
  qrCodeOptions.colorLight = $bgColorInput.value;
  $qrBox.style.backgroundColor = $bgColorInput.value;
  renderQrCode();
});

$form.onsubmit = (event) => {
  event.preventDefault();
  const $qrCodeImage = $qrBox.querySelector("img");
  const imageUrl = $qrCodeImage.getAttribute("src")
  downloadFile(imageUrl, "my_first_qr_code.png");
};

const qrCodeOptions = {
  colorLight: "#2c7dfa",
  colorDark: "#ffffff",
  width: 250,
  height: 250,
};

function renderQrCode() {
  const url = $urlInput.value;
  $qrBox.innerHTML = "";
  if (!url) return;
  const qrCode = new QRCode($qrBox, qrCodeOptions);
  qrCode.makeCode(url);
}

function downloadFile(url, filename){
    const downloadLink = document.createElement("a");
    downloadLink.setAttribute("href", url);
    downloadLink.setAttribute("download", filename);
    document.body.append(downloadLink);
    downloadLink.click();
    downloadLink.remove();
}


