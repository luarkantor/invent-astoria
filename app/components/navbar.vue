<template>
  <div class="bg-white/80 backdrop-blur-sm flex  w-[1440px] items-center fixed justify-between top-0 z-50">
    <img src="/images/logo_astoria.png" />
    <nav>
      <ul class="font-noto font-bold">
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/services">Services</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products">Products</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blogs">Blogs</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/career">Career</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/faq">FAQ</NuxtLink>
        </li>
      </ul>
    </nav>
    <nav>
      <ul class="font-noto">
        <li>
          <NuxtLink to="/about">EN|ID</NuxtLink>
        </li>
        <li>
          <button class="bg-[#B12024] flex items-center p-2 ps-4 gap-2 rounded-full text-white">
            <span>Contact us</span>
            <div class="bg-white rounded-full p-2 h-[40px] w-[40px] flex items-center">
              <Icon name="tabler:arrow-narrow-right" size="28px" style="color:#B12024" />
            </div>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>


<style scoped>
nav {
  display: flex;
  height: 100%;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  padding: 1rem 2rem;
  margin: 0;
  align-items: center;
}

nav li a {
  text-decoration: none;
  color: #404041;
  font-weight: 500;
  transition: color 0.2s ease;
}

nav li a:hover {
  color: #0070f3;
}

nav li a.router-link-exact-active {
  color: #0070f3;
}
</style>
