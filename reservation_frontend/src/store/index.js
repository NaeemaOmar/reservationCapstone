import { createStore } from 'vuex'
import axios from 'axios'

const baseUrl = "https://reservationcapstone.onrender.com"


export default createStore({
  state: {
    allProductsArray: null,
    theBookingsArray: null
  },
  getters: {
  },
  mutations: {
    getAllProducts(state, value){
      state.allProductsArray = value
    },
    setTheBookings(state, value){
      state.theBookingsArray = value
    }
  },
  actions: {
    async getBookings({commit}){
      try{
        let theBookings = await axios.get(`${baseUrl}/bookings`);
        console.log(theBookings.data)
        commit('setTheBookings', theBookings.data)
      } catch(error){console.log(`The following error was found while trying to fetch the bookings: ${error}`)}
    },
    async addBooking(context, newBooking){
      try {
        await axios.post(`${baseUrl}/bookings`, newBooking)
        console.log("the bookings.post axios is working")
      } catch (error){console.log(`The following error was found when trying to add the new booking in the store: ${error}`)}
    },
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
        console.log("the getSLots axios is working")
        let allTheProducts = await axios.get(`${baseUrl}/slots`);
        console.log(allTheProducts.data)
        commit('getAllProducts', allTheProducts.data)
      } catch(error){
        console.log(`the following error was found while trying to fetch the slots in the store: ${error}`)
      }
    }
  },
  modules: {
  }
})
