<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">

        <!-- table -->
        <table>

          <!-- head -->
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>

          <!-- body -->
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td> 
                <img :src="user.img" :alt="user.name">
                <span>{{ user.name }}</span>
              </td>
              <td> {{ user.age }} </td>
              <td> {{ user.gender }} </td>
            </tr>
          </tbody>
        </table>

      </div>
    </section>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    
    data () {
      return {
        users: []
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
</style>