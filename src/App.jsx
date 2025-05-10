import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    subcategory: '',
    condition: 'used',
    brand: '',
    model: '',
    location: '',
    negotiable: true,
    images: []
  })

  const categories = {
    'Electronics': ['Mobile Phones', 'Laptops', 'TVs', 'Cameras'],
    'Vehicles': ['Cars', 'Motorcycles', 'Bicycles', 'Scooters'],
    'Property': ['Apartments', 'Houses', 'Plots', 'Commercial'],
    'Furniture': ['Sofas', 'Beds', 'Wardrobes', 'Tables'],
    'Jobs': ['Full-time', 'Part-time', 'Remote', 'Freelance']
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...files]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Your listing has been submitted successfully!')
  }

  const removeImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Sell Your Item</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title*
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., iPhone 12 128GB - Excellent Condition"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description*
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Include details like condition, age, warranty, accessories, etc."
              required
            />
          </div>

          {/* Category & Subcategory */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Category*
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={(e) => {
                  handleChange(e)
                  setFormData(prev => ({ ...prev, subcategory: '' }))
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select a category</option>
                {Object.keys(categories).map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="subcategory" className="block text-sm font-medium text-gray-700 mb-1">
                Subcategory*
              </label>
              <select
                id="subcategory"
                name="subcategory"
                value={formData.subcategory}
                onChange={handleChange}
                disabled={!formData.category}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                required
              >
                <option value="">Select a subcategory</option>
                {formData.category && categories[formData.category].map(sub => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                Price (₹)*
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 15000"
                required
              />
            </div>

            <div className="flex items-end">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="negotiable"
                  name="negotiable"
                  checked={formData.negotiable}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="negotiable" className="ml-2 block text-sm text-gray-700">
                  Price Negotiable
                </label>
              </div>
            </div>
          </div>

          {/* Brand & Model (conditionally shown) */}
          {(formData.category === 'Electronics' || formData.category === 'Vehicles') && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">
                  Brand
                </label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Apple, Samsung"
                />
              </div>

              <div>
                <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
                  Model
                </label>
                <input
                  type="text"
                  id="model"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., iPhone 12, Galaxy S21"
                />
              </div>
            </div>
          )}

          {/* Condition */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Condition*</label>
            <div className="flex flex-wrap gap-4">
              {['new', 'used', 'refurbished'].map(cond => (
                <div key={cond} className="flex items-center">
                  <input
                    type="radio"
                    id={`condition-${cond}`}
                    name="condition"
                    value={cond}
                    checked={formData.condition === cond}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor={`condition-${cond}`} className="ml-2 block text-sm text-gray-700 capitalize">
                    {cond}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Location*
            </label>
            <select
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select your city</option>
              <option value="mumbai">Mumbai</option>
              <option value="delhi">Delhi</option>
              <option value="bangalore">Bangalore</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="chennai">Chennai</option>
              <option value="kolkata">Kolkata</option>
            </select>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload Images* (Max 6)</label>
            <div className="flex flex-wrap gap-4 mb-4">
              {formData.images.map((image, index) => (
                <div key={index} className="relative">
                  <img 
                    src={URL.createObjectURL(image)} 
                    alt={`Preview ${index}`} 
                    className="h-24 w-24 object-cover rounded-md"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            <input
              type="file"
              id="images"
              name="images"
              onChange={handleImageUpload}
              multiple
              accept="image/*"
              disabled={formData.images.length >= 6}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            <p className="mt-1 text-xs text-gray-500">Upload clear photos of your item (first image will be the cover)</p>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Post Your Ad
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App