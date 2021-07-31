export default {
  state: {
    shopList: [
      {
        id: 1,
        title: 'Nike Red',
        descr: 'Кроссовки Nike Cosmic Unity (Team) произведены из отходов. Новая модель в свежем стиле обеспечивает высокий возврат энергии во время игры. Элегантные и удобные кроссовки созданы с заботой о природе. Модель минимум на 25% по весу состоит из переработанного сырья. Амортизирующая вставка Air Zoom Strobel частично состоит из переработанных материалов и помогает эффективно вести мяч или выстраивать оборону. Отходы превратились в функциональную баскетбольную модель, которая поможет тебе перевести свою игру на новый уровень и проявить заботу о природе.',
        img: require('../assets/img/1.png'),
        gallery: [
          {name: 'Nike boots First', img: require('../assets/img/1.png')},
          {name: 'Nike boots Second', img: require('../assets/img/2.png')},
          {name: 'Nike boots Third', img: require('../assets/img/3.png')}
        ]
      },
      {
        id: 2,
        title: 'Nike Default',
        descr: 'Кроссовки Nike Cosmic Unity (Team) произведены из отходов. Новая модель в свежем стиле обеспечивает высокий возврат энергии во время игры. Элегантные и удобные кроссовки созданы с заботой о природе. Модель минимум на 25% по весу состоит из переработанного сырья. Амортизирующая вставка Air Zoom Strobel частично состоит из переработанных материалов и помогает эффективно вести мяч или выстраивать оборону. Отходы превратились в функциональную баскетбольную модель, которая поможет тебе перевести свою игру на новый уровень и проявить заботу о природе.',
        img: require('../assets/img/4.png'),
        gallery: [
          {name: 'Nike boots First', img: require('../assets/img/4.png')},
          {name: 'Nike boots Second', img: require('../assets/img/5.png')},
          {name: 'Nike boots Third', img: require('../assets/img/6.png')}
        ]
      },
      {
        id: 3,
        title: 'Nike Green',
        descr: 'Кроссовки Nike Cosmic Unity (Team) произведены из отходов. Новая модель в свежем стиле обеспечивает высокий возврат энергии во время игры. Элегантные и удобные кроссовки созданы с заботой о природе. Модель минимум на 25% по весу состоит из переработанного сырья. Амортизирующая вставка Air Zoom Strobel частично состоит из переработанных материалов и помогает эффективно вести мяч или выстраивать оборону. Отходы превратились в функциональную баскетбольную модель, которая поможет тебе перевести свою игру на новый уровень и проявить заботу о природе.',
        img: require('../assets/img/7.png'),
        gallery: [
          {name: 'Nike boots First', img: require('../assets/img/7.png')},
          {name: 'Nike boots Second', img: require('../assets/img/8.png')},
          {name: 'Nike boots Third', img: require('../assets/img/9.png')}
        ]
      },
      {
        id: 4,
        title: 'Nike Street',
        descr: 'Кроссовки Nike Cosmic Unity (Team) произведены из отходов. Новая модель в свежем стиле обеспечивает высокий возврат энергии во время игры. Элегантные и удобные кроссовки созданы с заботой о природе. Модель минимум на 25% по весу состоит из переработанного сырья. Амортизирующая вставка Air Zoom Strobel частично состоит из переработанных материалов и помогает эффективно вести мяч или выстраивать оборону. Отходы превратились в функциональную баскетбольную модель, которая поможет тебе перевести свою игру на новый уровень и проявить заботу о природе.',
        img: require('../assets/img/10.png'),
        gallery: [
          {name: 'Nike boots First', img: require('../assets/img/11.png')},
          {name: 'Nike boots Second', img: require('../assets/img/12.png')}
        ]
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    getShopList (state) {
      return state.shopList
    },
    getProduct: (state) => (id) => {
      return state.shopList.find(product => product.id == id)
    }
  }
}