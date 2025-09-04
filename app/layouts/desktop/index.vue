<template>
  <div>
    <main>
      <div class="relative w-[1440px] m-auto">
        <navbar>
        </navbar>
        <div>
          <slot />
        </div>
      </div>
      
    </main>
  </div>
  <fab style="position:fixed;left:25px;bottom:25px"/>
</template>