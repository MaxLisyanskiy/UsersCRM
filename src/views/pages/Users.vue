<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1>Users Page</h1>
        <div class="item__wrapper">
        </div>
      </div>
    </section>
  </div>
</template>

<script>

  export default {
    
    data () {
      return {
        shopList: null
      }
    },
    created() {
      this.shopList = this.$store.getters.getShopList
      console.log(this.shopList)
    }
  }
</script>