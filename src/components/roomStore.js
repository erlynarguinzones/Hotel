import { defineStore } from 'pinia'

export const useRoomStore = defineStore('roomStore', {
  state: () => ({
    selectedRoomTypeId: null
  }),
  actions: {
    setSelectedRoomType(roomTypeId) {
      console.log('roomTypeId desde roomstore', roomTypeId)
      this.selectedRoomTypeId = roomTypeId
      return this.selectedRoomTypeId
    }
  }
})
