<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">

        <!-- table -->
        <table>

          <!-- head -->
          <thead>
            <tr>
              <th @click="sort('name')">Name &#8595;</th>
              <th @click="sort('age')">Age &#8595;</th>
              <th @click="sort('gender')">Gender &#8595;</th>
            </tr>
          </thead>

          <!-- body -->
          <tbody>
            <tr v-for="user in usersSort" :key="user.id">
              <td> 
                <img :src="user.img" :alt="user.name">
                <span>{{ user.name }}</span>
              </td>
              <td> {{ user.age }} </td>
              <td> {{ user.gender }} </td>
            </tr>
          </tbody>
        </table>

        <div>
          <p>debug: [ sort: {{currentSort}}, dir: {{currentSortDir}} ]</p>
          <p>page: {{page.current}}, length: {{page.length}}</p>
        </div>

      </div>
    </section>

    <section>
      <div class="container">
        <div class="button-list">
          <div class="btn btnPrimary" @click="prevPage">&#8592;</div>
          <div class="btn btnPrimary" @click="nextPage">&#8594;</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    
    data () {
      return {
        users: [],
        currentSort: 'name',
        currentSortDir: 'asc',
        page: {
          current: 1,
          length: 3
        }
      }
    },
    created() {
      axios
        .get('https://mocki.io/v1/29945632-9da6-47b1-a714-3a3d3125fe17')
          .then(response => {
            this.users = response.data
          })
          .catch(error => {
            console.log(error)
          })


      // Тестовый json api 
      // this.users = [
      //   {
      //     "name": "Alpha",
      //     "age": 19,
      //     "gender":"female",
      //     "img":"https://image.flaticon.com/icons/png/512/168/168734.png"
      //   },
      //   {
      //     "name": "Beta",
      //     "age": 23,
      //     "gender":"male",
      //     "img":"https://image.flaticon.com/icons/png/512/147/147144.png"
      //   },
      //   {
      //     "name": "Gamma",
      //     "age": 26,
      //     "gender":"male",
      //     "img":"https://image.flaticon.com/icons/png/512/168/168726.png"
      //   },
      //   {
      //     "name": "Delta",
      //     "age": 23,
      //     "gender":"female",
      //     "img":"https://image.flaticon.com/icons/png/512/168/168727.png"
      //   },
      //   {
      //     "name": "Epsilon",
      //     "age": 28,
      //     "gender":"female",
      //     "img":"https://image.flaticon.com/icons/png/512/168/168721.png"
      //   },
      //   {
      //     "name": "Fenris",
      //     "age": 21,
      //     "gender":"female",
      //     "img":"https://image.flaticon.com/icons/png/512/168/168734.png"
      //   },
      //   {
      //     "name": "Gorf",
      //     "age": 30,
      //     "gender":"male",
      //     "img":"https://image.flaticon.com/icons/png/512/168/168733.png"
      //   },
      //   {
      //     "name": "Gohan",
      //     "age": 22,
      //     "gender":"male",
      //     "img":"https://image.flaticon.com/icons/png/512/168/168724.png"
      //   },
      //   {
      //     "name": "Gref",
      //     "age": 20,
      //     "gender":"male",
      //     "img":"https://image.flaticon.com/icons/png/512/168/168732.png"
      //   }
      // ]
    },
    computed: {
      usersSort() {
        return this.users.sort((a,b) => {
          let mod = 1
          if (this.currentSortDir === 'desc') mod = -1
          if (a[this.currentSort] < b[this.currentSort]) return -1 * mod
          if (a[this.currentSort] > b[this.currentSort]) return 1 * mod
          return 0
        }).filter((row,index) => {
          let start = (this.page.current-1)*this.page.length
          let end = this.page.current * this.page.length
          if (index >= start && index < end) return true
        })
      }
    },
    methods: {
      sort(e) {
        if (e === this.currentSort) {
          this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc'
        } else {
          this.currentSort = e
        }
      },
      // paginations
      prevPage(){
        if(this.page.current > 1) this.page.current-=1
      },
      nextPage() {
        if( (this.page.current * this.page.length) < this.users.length) this.page.current+=1
      }
    }
  }
</script>

<style lang="scss" scoped>
  img{
    width: 60px;
    height: auto;
    border-radius: 50%;
    margin-right: 20px;
  }

  .button-list{
    width: 100%;
    text-align: center;
  }

  .btn{
    margin: 0 20px;
  }
</style>