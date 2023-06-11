<script setup>
import InternshipItem from './Internship.vue'
</script>
<template>
  <Story title="Stages" group="top2" icon="mdi:briefcase-clock">
    <Variant title="UNiFai">
      <InternshipItem
        :city="'Paris'"
        :date-from="'06/01/2020'"
        :date-to="'12/01/2020'"
        :business="{
          name: 'UNiFai',
          team: [
            {
              name: 'Clément Jacquemaire',
              tag: 'principal',
              job: 'Lead développeur frontend Vue JS',
              image:
                'https://media.licdn.com/dms/image/C4D03AQH5GF21U9yYdw/profile-displayphoto-shrink_100_100/0/1637574290083?e=1691625600&v=beta&t=VzhmdOPvHtV6YtVDoJyzL9QCEZVJpkWFKdD931E5hJM',
            },
            {
              name: 'Jesse Creange',
              tag: 'principal',
              job: 'CEO',
              image:
                'https://media.licdn.com/dms/image/C4D03AQEdmojz50qf1w/profile-displayphoto-shrink_100_100/0/1619078766740?e=1691625600&v=beta&t=0Mvy3ShLWJNJ5L4cNHKiEBdI3yqCEn8Hg0ngDNO8kqg',
            },
            {
              name: 'Maximilien Baudry',
              tag: 'principal',
              job: 'Chief science officer & Co-founder',
              image:
                'https://media.licdn.com/dms/image/C4D03AQFsdd9d3GuehA/profile-displayphoto-shrink_100_100/0/1635522264846?e=1691625600&v=beta&t=I1W_5nvNhGA4u9Vx09sYzb-DhGg3evdCvyTJW5wg9eI',
            },
            {
              name: 'Pierre de Sahb',
              tag: 'principal',
              job: 'CTO & Co-founder',
              image:
                'https://media.licdn.com/dms/image/C5603AQFRToTY5_PVTw/profile-displayphoto-shrink_100_100/0/1604928777767?e=1691625600&v=beta&t=dlsoFA9-7zjWuP8WVSW7zx39PAGpUr0GslnPFLSwINg',
            },
            {
              name: 'Mamadou Touré',
              tag: 'stagiaire',
              job: 'Délégué à la protection des données - stagiaire',
              image:
                'https://media.licdn.com/dms/image/C4D03AQEiNxZ7PptxMg/profile-displayphoto-shrink_400_400/0/1606569301103?e=1691625600&v=beta&t=4MGz74KSfGinivHMbhx_BsSHXM00Z1avoiKlQyuBIcU',
            },
            {
              name: 'Emmanuelle Giraud',
              tag: 'principal',
              job: 'CMO',
              image:
                'https://media.licdn.com/dms/image/D4E03AQGlpBVyln7A7w/profile-displayphoto-shrink_100_100/0/1680687021325?e=1691625600&v=beta&t=QviOWo2YqmW-Wp6nzOtqoqOic7RroWIXZxUqurf23aU',
            },
            {
              name: 'Stéphanie LOF',
              tag: 'stagiaire',
              job: 'Community manager - stagiaire',
              image:
                'https://media.licdn.com/dms/image/C4E03AQGU1-u4JooKcg/profile-displayphoto-shrink_100_100/0/1649789396651?e=1691625600&v=beta&t=YngBrS4-uf6WeyiH8TOurNj1e9RFZHxoYHM2eET0mkg',
            },
          ],
          number: 5,
          stack: ['Vue.js', 'Buefy', 'Bulma', 'Nuxt', 'Storybook', 'Figma'],
          logo: 'https://media.licdn.com/dms/image/C560BAQEuNn-gQSqxKg/company-logo_100_100/0/1615819616175?e=1694649600&v=beta&t=KhOZJeRVjvkR44nhH24ihwXHKHugJCin-ApA1qEt0wI',
        }"
      >
        <template #title>
          <h2 class="primaryColor">Développeuse Frontend UI-UX</h2>
          =
        </template>
        <template #activity>
          <span
            >StartUp qui met à disposition la puissance d'algorithmes permettant
            d'unifier des données.</span
          >
        </template>
      </InternshipItem>
    </Variant>
    <Variant title="Quanted Square">
      <InternshipItem
        :city="'Paris'"
        :date-from="'02/01/2019'"
        :date-to="'07/01/2019'"
        :business="{
          name: 'Quanted Square',
          team: [
            {
              name: 'Fabien Ungerer',
              tag: 'principal',
              job: 'Développeur fullstack',
              image:
                'https://media.licdn.com/dms/image/C5603AQHqbHPCBnMDGA/profile-displayphoto-shrink_100_100/0/1517589999672?e=1691625600&v=beta&t=nw22b7p28r3a2PRTH0nMus7hREopy-QfJ1R6XXwIFPc',
            },
            {
              name: 'Julien LERAY',
              tag: 'principal',
              job: 'Développeur fullstack',
              image:
                'https://media.licdn.com/dms/image/C4D03AQGL031_WbXRZw/profile-displayphoto-shrink_100_100/0/1586352222035?e=1691625600&v=beta&t=385FUtXM2Xnr9N2GYKxzjz24cjmcKdH7FEBYeoe5tKY',
            },
          ],
          number: 2,
          stack: [
            'Git',
            'Vue.js',
            'D3.js',
            'Firebase',
            'MongoDB',
            'Nuxt',
            'Vuetify',
          ],
          logo: 'https://media.licdn.com/dms/image/C4D0BAQHkrVHI8zDaPg/company-logo_100_100/0/1557929998057?e=1694649600&v=beta&t=7DZytCHiZuE0BcsSUkifuVBPuW1ok7k79h_8K0QOgiA',
        }"
      >
        <template #title>
          <h2 class="primaryColor">Développeuse full-stack</h2>
        </template>
        <template #activity>
          <span
            >Prestataires qui aident les entreprises/startups/particuliers dans
            la construction de leur solution tech</span
          >
        </template>
      </InternshipItem>
    </Variant>
    <Variant title="test">
      <h4>Test</h4>
    </Variant>
  </Story>
</template>
