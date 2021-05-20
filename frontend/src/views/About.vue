<template>
  <Management :management="management" />
  <Certificates :certificates="certificates"/>
  <Awards :awards="awards"/>
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
  },

  data() {
    return {
      management: [],
      certificates: [],
      awards: []
    }
  },

  async created() {
    this.management = await this.fetchManagementData()
    this.certificates = await this.fetchCertificatesData()
    this.awards = await this.fetchAwardsData()
  },

  methods: {
    async fetchManagementData() {
      const res = await fetch('http://localhost:3000/api/about-us/management', {
      headers: {
          'Content-type': 'application/json',
        }})

      const data = await res.json()

      return data
    },

    async fetchCertificatesData() {
      const res = await fetch('http://localhost:3000/api/about-us/certificates', {
      headers: {
          'Content-type': 'application/json',
        }})

      const data = await res.json()

      return data
    },

    async fetchAwardsData() {
      const res = await fetch('http://localhost:3000/api/about-us/awards', {
        headers: {
          'Content-type': 'application/json',
        }})

        const data = await res.json()

        return data
    },
  },
}
</script>