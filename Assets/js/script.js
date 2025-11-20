// IMAGE PREVIEW
function openPreview(src) {
  let previewBox = document.getElementById("preview-box");
  let previewImg = document.getElementById("preview-img");
  if (!previewBox) {
    previewBox = document.createElement("div");
    previewBox.id = "preview-box";
    previewBox.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);display:flex;justify-content:center;align-items:center;z-index:999;cursor:pointer;";
    previewImg = document.createElement("img");
    previewImg.id = "preview-img";
    previewImg.style.cssText = "max-width:90%;max-height:90%;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,0.5);";
    previewBox.appendChild(previewImg);
    previewBox.onclick = () => previewBox.style.display = "none";
    document.body.appendChild(previewBox);
  }
  previewImg.src = src;
  previewBox.style.display = "flex";
}
