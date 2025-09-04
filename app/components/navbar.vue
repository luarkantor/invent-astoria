<template>
  <div class="bg-white/80 backdrop-blur-sm flex  w-[1440px] items-center fixed justify-between top-0 z-50">
    <NuxtLink to="/"><img src="/images/logo_astoria.png" /></NuxtLink>
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
          <NuxtLink to="">FAQ</NuxtLink>
        </li>
      </ul>
    </nav>
    <nav>
      <ul class="font-noto">
        <li>
          <NuxtLink to="/lang"><strong>EN</strong>|ID</NuxtLink>
        </li>
        <li>
          <Buttonlink label="Contact Us" />
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
  padding: 10px;
  transition: color 0.2s ease;
}

nav li a:hover {}

nav li a.router-link-exact-active {
  font-weight: 600;
  background-image: url('/icons/triangle.svg');
  background-repeat: no-repeat;
}

</style>
