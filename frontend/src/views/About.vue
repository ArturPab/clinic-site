<template>
  <Management />
  <Certificates />
  <Awards />
</template>

<script>
import Management from '@/components/about-components/Management'
import Certificates from '@/components/about-components/Certificates'
import Awards from '@/components/about-components/Awards'

export default {
  name: "About",
  components: {
    Management,
    Certificates,
    Awards
  }
}
</script>