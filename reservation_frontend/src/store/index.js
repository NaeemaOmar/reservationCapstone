import { createStore } from 'vuex'
import axios from 'axios'

const baseUrl = "https://reservationcapstone.onrender.com"


export default createStore({
  state: {
    allProductsArray: null,
    theBookingsArray: null
  },
  getters: {
    getBookingsArray: (state)=>{
      return state.theBookingsArray
    }
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
    // BOOKINGS ACTIONS START HERE
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
    async deleteBooking(context, userID){
      try {
        await axios.delete(`${baseUrl}/bookings/${userID}`)
        console.log("the bookings.delete axios is working")
      } catch (error){console.log(`The following error was found when trying to delete a booking in the store: ${error}`)}
    },
    async editABooking(context, editBooking){
      try {
        console.log(`In the axios.patch, this is the userID: ${editBooking.userID}`)
        await axios.patch(`${baseUrl}/bookings/${editBooking.userID}`, editBooking)
        console.log("the bookings.patch axios is working")
      } catch (error){console.log(`The following error was found when trying to edit a booking in the store: ${error}`)}
    },
    
    // SLOTS ACTIONS START HERE
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
