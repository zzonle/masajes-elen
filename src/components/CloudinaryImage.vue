<template>
  <AdvancedImage :cldImg="image" :plugins="plugins" class="img-fluid rounded" />
</template>

<script setup>
import { computed } from 'vue'
import { AdvancedImage, lazyload, responsive } from '@cloudinary/vue'
import { fill } from '@cloudinary/url-gen/actions/resize'
import { cld } from '@/main.js'

const props = defineProps({
  publicId: { type: String, required: true },
  width: { type: Number, default: 400 },
  height: { type: Number, default: 300 },
})

const image = computed(() =>
  cld
    .image(props.publicId)
    .resize(fill().width(props.width).height(props.height))
    .format('auto')
    .quality('auto'),
)

const plugins = [lazyload(), responsive()]
</script>
