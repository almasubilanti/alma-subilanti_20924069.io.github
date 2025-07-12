function updateCartCount() {
  let keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];
  let count = keranjang.length;
  const el = document.getElementById('cart-count');
  if (el) {
    el.textContent = count;
    el.style.display = count === 0 ? 'none' : 'inline-block';
  }
}

function tambahKeKeranjang(namaProduk) {
  let keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];
  keranjang.push(namaProduk);
  localStorage.setItem('keranjang', JSON.stringify(keranjang));
  alert(namaProduk + " ditambahkan ke keranjang!");
  updateCartCount();
}

window.onload = updateCartCount;
