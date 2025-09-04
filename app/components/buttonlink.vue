<template>
    <div>
        <button class="bg-[#B12024] flex items-center p-2 ps-4 gap-2 rounded-full text-white">
            <span>{{ props.label }}</span>
            <div class="bg-white rounded-full p-2 h-[40px] w-[40px] flex items-center">
                <Icon name="tabler:arrow-narrow-right" size="28px" style="color:#B12024" />
            </div>
        </button>
    </div>
</template>
<script setup>
const variant=ref();
const props = defineProps({
    variant: {
        type: String,
        default:"oke"
    },
    label: {
        type: String,
        default:"oke"
    },
});
</script>