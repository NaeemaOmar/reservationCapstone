import { createStore } from 'vuex'
import axios from 'axios'

const baseUrl = "https://reservationcapstone.onrender.com"


export default createStore({
  state: {
    allProductsArray: null
  },
  getters: {
  },
  mutations: {
    getAllProducts(state, value){
      state.allProductsArray = value
    }
  },
  actions: {
    // async getSlots ({commit}) {
    //   try{
    //     let allTheProducts = await axios.get(`${baseUrl}/slots`);
    //     console.log(allTheProducts)
    //     commit('getAllProducts', allTheProducts)
    //   } catch(error){console.log(`the following error was found while trying to fetch the slots in the store: ${error}`)}
    // }

    // Attempting above code w/ a fetch
    async getSlots({commit}){
      try{
        let allTheProducts = await fetch(`${baseUrl}/slots`);
        console.log(allTheProducts)
        commit('getAllProducts', allTheProducts)
      } catch(error){
        console.log(`the following error was found while trying to fetch the slots in the store: ${error}`)
      }
    }
  },
  modules: {
  }
})
