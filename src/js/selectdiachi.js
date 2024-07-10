// // Function to load data from the provided URL
// async function loadDataFromURL(url) {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Có lỗi xảy ra khi tải dữ liệu:", error);
//     return null;
//   }
// }

// // Function to display list of provinces
// async function loadTinh() {
//   const data = await loadDataFromURL("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json");
//   const tinhSelect = document.getElementById("tinhSelect");
//   if (data) {
//     data.forEach((city) => {
//       const option = document.createElement("option");
//       option.value = city.Id;
//       option.textContent = city.Name;
//       tinhSelect.appendChild(option);
//     });
//     tinhSelect.addEventListener("change", () => {
//       const selectedTinhId = tinhSelect.value;
//       loadHuyen(selectedTinhId);
//     });
//   } else {
//     const option = document.createElement("option");
//     option.textContent = "Không tìm thấy dữ liệu.";
//     tinhSelect.appendChild(option);
//   }
// }

// // Function to display list of districts/huyens based on province/tinh id
// async function loadHuyen(selectedTinhId) {
//   const data = await loadDataFromURL("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json");
//   const huyenSelect = document.getElementById("huyenSelect");
//   huyenSelect.innerHTML = ""; // Clear previous options
//   const xaSelect = document.getElementById("xaSelect");
//   xaSelect.innerHTML = ""; // Clear previous options
//   if (data) {
//     const selectedTinh = data.find((city) => city.Id === selectedTinhId);
//     if (selectedTinh) {
//       selectedTinh.Districts.forEach((district) => {
//         const option = document.createElement("option");
//         option.value = district.Id;
//         option.textContent = district.Name;
//         huyenSelect.appendChild(option);
//       });
//       huyenSelect.addEventListener("change", () => {
//         const selectedHuyenId = huyenSelect.value;
//         const selectedHuyen = selectedTinh.Districts.find((district) => district.Id === selectedHuyenId);
//         if (selectedHuyen) {
//           loadXa(selectedHuyen.Wards);
//         }
//       });
//     }
//   } else {
//     const option = document.createElement("option");
//     option.textContent = "Không tìm thấy dữ liệu.";
//     huyenSelect.appendChild(option);
//   }
// }

// // Function to display list of wards/phuong or communes/xa based on district/huyen id and type (default is Phuong)
// function loadXa(wards) {
//   const xaSelect = document.getElementById("xaSelect");
//   xaSelect.innerHTML = ""; // Clear previous options
//   if (wards) {
//     wards.forEach((ward) => {
//       const option = document.createElement("option");
//       option.value = ward.Id;
//       option.textContent = ward.Name;
//       xaSelect.appendChild(option);
//     });
//   } else {
//     const option = document.createElement("option");
//     option.textContent = "Không tìm thấy dữ liệu.";
//     xaSelect.appendChild(option);
//   }
// }

// // Call loadTinh function when the page is loaded
// loadTinh();
