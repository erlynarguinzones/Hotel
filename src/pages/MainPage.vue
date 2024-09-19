<template>
  <div>
    <div class="m_2r">
      <label class="title" for="">Room type</label>
      <br />
      <select v-model="selectedRoomType" class="select-filter">
        <option value="all">All</option>
        <option v-for="room in uniqueRoomTypes" :key="room.roomTypeId" :value="room.roomTypeId">
          {{ room.roomType }}
        </option>
      </select>
    </div>
    <div class="main">
      <div v-for="room in filteredRooms" :key="room.roomId" class="room-card">
        <div class="room-info">
          <div>
            <img :src="room.img" alt="Room Image" />
          </div>
          <div class="inf">
            <h2>Room: {{ room.roomType }}</h2>
            <div v-for="rate in room.rates" :key="rate.mealPlanId" class="rate-info">
              <p>Meal Plan ID: {{ rate.mealPlanId }}</p>
              <p>Is Cancellable: {{ rate.isCancellable }}</p>
              <p>Price: ${{ rate.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { hotelStore } from '../components/hotelStore.js'
import { useRoomStore } from '../components/roomStore.js'

export default {
  components: {},
  data() {
    return {
      hotelStore,
      roomStore: useRoomStore(),
      selectedRoomType: 'all'
    }
  },
  computed: {
    uniqueRoomTypes() {
      const roomTypes = this.hotelStore.rooms.map((room) => ({
        roomTypeId: room.roomTypeId,
        roomType: room.roomType
      }))
      return roomTypes.filter(
        (room, index, self) =>
          index ===
          self.findIndex((r) => r.roomTypeId === room.roomTypeId && r.roomType === room.roomType)
      )
    },
    filteredRooms() {
      if (this.selectedRoomType === 'all') {
        return this.hotelStore.rooms
      }
      return this.hotelStore.rooms.filter((room) => room.roomTypeId === this.selectedRoomType)
    }
  },
  methods: {
    searchRoomType() {
      const roomStore = useRoomStore()
      roomStore.setSelectedRoomType(this.selectedRoomType)
    }
  }
}
</script>

<style>
.main {
  display: flex;
  flex-wrap: wrap;
  margin: 2rem;
  background-color: #d2b48c;
}
.title {
  font-weight: bold;
  color: #f4a460;
  font-size: 1.1rem;
}
.m_2r {
  margin: 2rem;
  background-color: #ffdab9;
  padding: 1rem;
  border-radius: 10px;
}

.room-card {
  border: 4px solid #f4a460;
  margin-bottom: 1rem;
  padding: 0px;
  width: 100%;
  border-radius: 25px;
  font-size: 1.2rem;
  background-color: #f4c69d;
}

.room-info {
  display: flex;
  height: 270px;
}

.room-info img {
  width: 266px;
  height: 270px;
  object-fit: cover;
  border-radius: 25px 0px 0px 25px;
}
.room-info .inf {
  padding: 1rem;
}
.room-info .inf h2 {
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 1.5rem;
  color: black;
}
.rate-info {
  margin-bottom: 5px;
}
.select-filter {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  font-size: 16px;
  color: #333;
}

.select-filter:focus {
  border-color: #f4a460;
  outline: none;
  box-shadow: 0 0 8px #f4a460;
}

.select-filter option:checked {
  background-color: #f4a460;
  color: #fff;
}
</style>
