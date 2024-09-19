export const hotelStore = {
  rooms: [
    {
      roomId: 1,
      img: 'https://i.pinimg.com/originals/ff/54/89/ff5489f401d008f38a1eb13960075380.png',
      roomType: 'Double room',
      roomTypeId: 1,
      rates: [
        {
          mealPlanId: 1,
          isCancellable: false,
          price: 123.48
        },
        {
          mealPlanId: 1,
          isCancellable: true,
          price: 150.0
        }
      ]
    },
    {
      roomId: 2,
      img: 'https://hotelemile.com/_novaimg/galleria/1532392.jpg',
      roomType: 'Single room',
      roomTypeId: 2,
      rates: [
        {
          mealPlanId: 1,
          isCancellable: false,
          price: 148.25
        },
        {
          mealPlanId: 2,
          isCancellable: false,
          price: 165.38
        }
      ]
    },
    {
      roomId: 3,
      img: 'https://images.homify.com/v1486031095/p/photo/image/1808855/hotel-inglaterra-hotelinglaterra2013_gf_0284.jpg',
      roomType: 'Single and double room',
      roomTypeId: 3,
      rates: [
        {
          mealPlanId: 1,
          isCancellable: false,
          price: 123.48
        },
        {
          mealPlanId: 1,
          isCancellable: true,
          price: 150.0
        }
      ]
    },
    {
      roomId: 4,
      img: 'https://wallpapers.com/images/hd/hotel-room-2048-x-1536-picture-bkrgjbdew9gie43s.jpg',
      roomType: 'Single and double room',
      roomTypeId: 3,
      rates: [
        {
          mealPlanId: 1,
          isCancellable: false,
          price: 148.25
        },
        {
          mealPlanId: 2,
          isCancellable: false,
          price: 165.38
        }
      ]
    }
  ]
}
