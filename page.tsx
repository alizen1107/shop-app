import Image from 'next/image'

const cartItems = [
  {
    id: 1,
    name: 'Akıllı Telefon',
    price: 5999,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop',
  },
  {
    id: 2,
    name: 'Laptop',
    price: 12999,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&h=200&fit=crop',
  },
]

export default function Cart() {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Alışveriş Sepetim</h1>
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center space-x-4">
                  <div className="relative w-20 h-20">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="text-gray-600">{item.price.toLocaleString('tr-TR')} TL</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="w-8 h-8 flex items-center justify-center rounded-full border hover:bg-gray-100 transition-colors">
                    -
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button className="w-8 h-8 flex items-center justify-center rounded-full border hover:bg-gray-100 transition-colors">
                    +
                  </button>
                  <button className="text-red-500 hover:text-red-700 transition-colors">
                    Sil
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center pt-4">
              <div>
                <p className="text-lg font-medium">Toplam</p>
                <p className="text-2xl font-bold">{total.toLocaleString('tr-TR')} TL</p>
              </div>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Ödemeye Geç
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 