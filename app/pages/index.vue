<script setup lang="ts">
definePageMeta({
    layout: false,
})
</script>

<template>
    <NuxtLayout name="desktop">
        <template #header> Some header template content. </template>
        <div class="relative section-hero flex justify-between">
            <div
                class="bg-[url('/images/hero-l.png')] bg-[length:650px_750px] bg-no-repeat bg-center h-full w-full flex flex-col justify-center items-center">
                <span class="font-noto text-[30px] font-bold">Welcome to</span>
                <span class="font-adega text-[70px] text-[#B12024] font-bold">Astoria Prima</span>
                <div class="h-[117px] border border-[#B12024] mb-4"></div>
                <div
                    class="w-[115px]  aspect-square border border-[#B12024] rounded-full font-lato flex items-center justify-center ">
                    <p class="w-[94px] text-[18px] text-center ">
                        Scroll to
                        view more
                    </p>
                </div>
                <div class="w-[315px]">
                    <p class="font-nato text-[30px] text-[#B12024] font-semibold">Get to know us</p>
                    <p class="font-lato text-[18px] font-medium text-[#404041]">We craft high-quality cosmetics to
                        enhance your
                        natural beauty, with every detail from formulation to packaging handled with care.</p>
                    <Buttonlink label="Learn More" />
                </div>
            </div>
            <img src="/images/hero-r.png" class="h-full" />

        </div>
        <div class="section-summary">
            <div class=" flex justify-evenly w-full">
                <div class="w-[208px] h-[121px] flex flex-col items-center justify-center gap-[23px]">
                    <img src="/icons/brand.svg" class="h-[72px]" />
                    <span class="font-lato">+1000 Brands</span>
                </div>
                <div class="w-[208px] h-[121px] flex flex-col items-center justify-center gap-[23px]">
                    <img src="/icons/product.svg" class="h-[72px]" />
                    <span class="font-lato">+3000 Products</span>
                </div>
                <div class="w-[208px] h-[121px] flex flex-col items-center justify-center gap-[23px]">
                    <img src="/icons/experiance.svg" class="h-[72px]" />
                    <span class="font-lato">+40 Years Experience</span>
                </div>
            </div>

        </div>
        <div class="section-visi">
            <img src="/images/visi1.png" class="h-[620px]" />
            <span class="font-adega text-[80px] font-bold">Your Idea,</span>
            <span class="font-adega text-[80px] text-[#B12024] font-bold">Our Solution,</span>
        </div>
        <div
            class="section-product bg-[url('/images/bg_red.png')] bg-cover bg-center items-center flex flex-col justify-center">
            <p class="font-lato text-[40px] text-white">Our Product</p>
            <div class="w-[50%] text-center">
                <div class="font-adega text-[80px] text-white ">Decorative</div>
                <div class="font-adega text-[80px] text-white ">Scincare</div>
                <div class="font-adega text-[80px] text-white ">Body Care</div>
                <div class="font-adega text-[80px] text-white ">Hair Care</div>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="flex flex-col bg-sky-500 my-[321px]">
                <div class="flex gap-4">
                    <span class="font-adega text-[62px] font-bold">Our Beauty </span>
                    <span class="font-adega text-[62px] text-[#B12024] font-bold"> Certifications</span>
                </div>
                <div class="flex gap-[103px] mt-[86px]">
                    <img src="/logos/ISO.png" class="w-[118px] h-[118px]" />
                    <img src="/logos/Halal.png" class="w-[68px] h-[123px]" />
                    <img src="/logos/Badan_POM.png" class="w-[125px] h-[113px]" />
                </div>
            </div>
            <div class="flex flex-col w-full">
                <div class="flex gap-4 justify-center mb-[113px]">
                    <span class="font-adega text-[62px] font-bold">Who Trust Our </span>
                    <span class="font-adega text-[62px] text-[#B12024] font-bold"> Expertise</span>
                </div>
                <div class="w-full flex flex-col mb-[113px] ">
                    <div><img src="/images/partner.png" class="ml-52" /></div>
                    <div><img src="/images/partner.png" /></div>
                </div>
            </div>
        </div>

        <div
            class="section-footer  bg-[url('/images/footer_bg.png')] bg-cover bg-center items-center flex justify-center">
            <div class="flex gap-4">
                <div class="flex items-center pr-[143px]">
                    <div>
                        <span class="font-adega text-[70px] text-white ">Get In Touch</span>
                        <button class="bg-white flex items-center p-2 ps-4 gap-2 rounded-full w-fit text-[#B12024]">
                            <span>Say hello</span>
                            <div class=" bg-[#B12024]  rounded-full p-2 h-[40px] w-[40px] flex items-center">
                                <Icon name="tabler:arrow-narrow-right" size="28px" style="color:#FFFFFF" />
                            </div>
                        </button>
                    </div>
                </div>
                <div class="w-px bg-gray-300"></div>
                <div class="flex flex-col gap-8 ps-[143px]">
                    <div class="flex flex-col gap-8">
                        <div class="text-white font-nato">
                            <p class="text-sm mb-2 font-lato">Head Quarter</p>
                            <p class="text-lg ">PT Astoria Prima</p>
                            <p>Jalan Pluit Raya No. 11, Penjaringan</p>
                            <p>Jakarta Utara, Daerah Khusus Ibukota Jakarta 14440</p>
                        </div>
                        <div class="text-white font-nato">
                            <p class="text-sm mb-2 font-lato">Factory</p>
                            <p class="text-lg ">PT Astoria Prima</p>
                            <p>Jl. Cibeunter No. 8, Kp. Cukanggalih, Desa </p>
                            <p>Cukanggalih, Kec. Curug, Tangerang, Banten 15810</p>
                        </div>
                    </div>
                    <div class="text-white flex gap-8">
                        <div>
                            <p class="text-sm mb-2 font-lato">Phone</p>
                            <p class="text-lg ">+62 818.1818.1718</p>
                        </div>
                        <div>
                            <p class="text-sm mb-2 font-lato">Email</p>
                            <p class="text-lg ">cs@astoriaprima.com</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="section-credit bg-[#3C3C3C] font-noto text-[16px] text-white flex justify-center items-center">
            PT. Astoria Prima 2025
        </div>
    </NuxtLayout>
</template>
<style type="text/css">
@keyframes marquee {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

.marquee-content {
    animation: marquee 15s linear infinite;
}
</style>