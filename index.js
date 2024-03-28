import { Viewer } from "@photo-sphere-viewer/core";

let apartments_btn = document.getElementById("apartments_btn");

const galleryPaths = [
  "./images/3d-1.png",
  "./images/3d-2.png",
  "./images/3d-3.png",
  "./images/3d-4.png",
];

const viewer = new Viewer({
  container: document.querySelector("#viewer"),
  panorama: "./images/3d-1.png",
});

function activePhoto(path) {
  viewer.setPanorama(path);
}

function setPhotos() {
  let gallery360 = document.getElementById("gallery360");
  gallery360.innerHTML = "";

  galleryPaths.forEach((path) => {
    let img = document.createElement("img");
    img.src = path;
    img.onclick = () => activePhoto(path);
    gallery360.appendChild(img);
  });
}

apartments_btn.addEventListener("click", () => {
  setPhotos();
});
