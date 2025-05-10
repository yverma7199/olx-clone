import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    categoryType: 'For Sale',
    propertyType: '',
    bhk: '',
    bathrooms: '',
    furnishing: '',
    projectStatus: '',
    listedBy: '',
    superBuiltupArea: '',
    carpetArea: '',
    maintenance: '',
    floorNo: '',
    carParking: '',
    facing: '',
    projectName: '',
    adTitle: '',
    description: '',
    price: '',
    state: '',
    city: '',
    images: []
  });

  const [cities, setCities] = useState([]);

  const indianStates = {
    'Andhra Pradesh': ['Hyderabad', 'Amravati', 'Visakhapatnam', 'Vijayawada', 'Warangal'],
    'Arunachal Prodesh': ['Itanagar', 'Pasighat', 'Tawang', 'Ziro', 'Naharlagun'],
    'Assam': ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Tezpur', 'Dispur'],
    'Bihar': ['Patna', 'Gaya', 'Muzaffarpur', 'Bhagalpur', 'Purnia', 'Darbhanga'],
    'Chhattisgarh': ['Raipur', 'Bilaspur', 'Bhupalpally', 'Durg', 'Rajnandgaon'],
    'Delhi': ['New Delhi', 'Noida', 'Gurgaon', 'Faridabad', 'Ghaziabad'],
    'Goa': ['Panaji', 'Mormugao', 'North Goa', 'Vasco da Gama', 'South Goa'],
    'Gujarat': ['Ahmedabad', 'Surat', 'Rajkot', 'Vadodara', 'Gandhinagar'],
    'Haryana': ['Chandigarh', 'Ambala', 'Panchkula', 'Faridabad', 'Gurgaon', 'Hisar'],
    'Himachal Pradesh': ['Shimla', 'Dharamshala', 'Mandi', 'Kangra', 'Bilaspur'],
    'Jammu and Kashmir': ['Srinagar', 'Jammu', 'Anantnag', 'Baramulla', 'Kupwara'],
    'Jharkhand': ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro Steel City'],
    'Karnataka': ['Bengaluru', 'Mysuru', 'Hubball', 'Belagavi', 'Davangere'],
    'Kerala': ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kollam'],
    'Madhya Pradesh': ['Bhopal', 'Indore', 'Gwalior', 'Jabalpur', 'Ujjain'],
    'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad'],
    'Manipur': ['Imphal', 'Bishnupur', 'Thoubal', 'Churachandpur', 'Senapati'],
    'Meghalaya': ['Shillong', 'Tura', 'Jowai', 'Mawsynram', 'Cherrapunji'],
    'Mizoram': ['Aizawl', 'Lunglei', 'Saiha', 'Champhai', 'Kolasib'],
    'Nagaland': ['Kohima', 'Dimapur', 'Mokokchung', 'Mon', 'Tuensang'],
    'Odisha': ['Bhubaneswar', 'Cuttack', 'Puri', 'Rourkela', 'Berhampur'],
    'Punjab': ['Chandigarh', 'Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala'],
    'Rajasthan': ['Jaipur', 'Jodhpur', 'Udaipur', 'Ajmer', 'Kota'],
    'Sikkim': ['Gangtok', 'Mangan', 'Namchi', 'Ravangla', 'Gyalshing'],
    'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Tiruppur'],
    'Telangana': ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Khammam'],
    'Tripura': ['Agartala', 'Udaipur', 'Khowai', 'Kailashahar', 'Belonia'],
    'Uttarakhand': ['Dehradun', 'Haridwar', 'Roorkie', 'Rishikesh', 'Nainital'],
    'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Agra', 'Varanasi', 'Meerut', 'Ghaziabad'],
    'West Bengal': ['Kolkata', 'Siliguri', 'Asansol', 'Durgapur', 'Bardhaman']
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'state') {
      setCities(indianStates[value] || []);
      setFormData(prev => ({ ...prev, city: '' }));
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (formData.images.length + files.length <= 20) {
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, ...files]
      }));
    } else {
      alert('You can upload maximum 20 photos');
    }
  };

  const removeImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const isFormValid = () => {
    return (
      formData.propertyType &&
      formData.bhk &&
      formData.bathrooms &&
      formData.furnishing &&
      formData.projectStatus &&
      formData.listedBy &&
      formData.superBuiltupArea &&
      formData.carpetArea &&
      formData.maintenance &&
      formData.floorNo &&
      formData.adTitle &&
      formData.description &&
      formData.price &&
      formData.state &&
      formData.city &&
      formData.images.length > 0
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log('Form submitted:', formData);
      alert('Your property has been listed successfully!');
    } else {
      alert('Please fill all required fields');
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">List Your Property</h1>
        
        {}
        <div className="mb-8 p-4 bg-blue-50 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">SELECTED CATEGORY: Properties</h2>
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, categoryType: 'For Sale' }))}
              className={`px-4 py-2 rounded-md ${formData.categoryType === 'For Sale' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              For Sale
            </button>
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, categoryType: 'For Rent' }))}
              className={`px-4 py-2 rounded-md ${formData.categoryType === 'For Rent' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              For Rent
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {}
          <h2 className="text-xl font-semibold border-b pb-2">INCLUDE SOME DETAILS</h2>

          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Type*</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {['Flats', 'Apartments', 'Independent', 'Builder Floors', 'Farm House', 'House and Villa'].map(type => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, propertyType: type }))}
                  className={`px-3 py-2 text-sm rounded-md ${formData.propertyType === type ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">BHK*</label>
            <div className="flex space-x-2">
              {['1', '2', '3', '4', '4+'].map(bhk => (
                <button
                  key={bhk}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, bhk }))}
                  className={`px-4 py-2 rounded-md ${formData.bhk === bhk ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                >
                  {bhk}
                </button>
              ))}
            </div>
          </div>
          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms*</label>
            <div className="flex space-x-2">
              {['1', '2', '3', '4', '4+'].map(bath => (
                <button
                  key={bath}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, bathrooms: bath }))}
                  className={`px-4 py-2 rounded-md ${formData.bathrooms === bath ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                >
                  {bath}
                </button>
              ))}
            </div>
          </div>
          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Furnishing*</label>
            <div className="flex space-x-2">
              {['Furnished', 'Semi-Furnished', 'Unfurnished'].map(furnish => (
                <button
                  key={furnish}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, furnishing: furnish }))}
                  className={`px-4 py-2 rounded-md ${formData.furnishing === furnish ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                >
                  {furnish}
                </button>
              ))}
            </div>
          </div>
          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Project Status*</label>
            <div className="flex space-x-2">
              {['New Launch', 'Ready to Move', 'Under Construction'].map(status => (
                <button
                  key={status}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, projectStatus: status }))}
                  className={`px-4 py-2 rounded-md ${formData.projectStatus === status ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Listed By*</label>
            <div className="flex space-x-2">
              {['Builder', 'Dealer', 'Owner'].map(listedBy => (
                <button
                  key={listedBy}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, listedBy }))}
                  className={`px-4 py-2 rounded-md ${formData.listedBy === listedBy ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                >
                  {listedBy}
                </button>
              ))}
            </div>
          </div>
          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Super Builtup Area (sqft)*</label>
            <input
              type="text"
              name="superBuiltupArea"
              value={formData.superBuiltupArea}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*\.?\d*$/.test(value)) {
                  handleChange(e);
                }
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter area in sqft"
              required
            />
          </div>
          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Carpet Area (sqft)*</label>
            <input
              type="text"
              name="carpetArea"
              value={formData.carpetArea}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*\.?\d*$/.test(value)) {
                  handleChange(e);
                }
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter area in sqft"
              required
            />
          </div>
          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Maintenance (Monthly)*</label>
            <input
              type="text"
              name="maintenance"
              value={formData.maintenance}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[\d,]*$/.test(value)) {
                  handleChange(e);
                }
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter maintenance amount"
              required
            />
          </div>
          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Floor No.*</label>
            <input
              type="text"
              name="floorNo"
              value={formData.floorNo}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  handleChange(e);
                }
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter floor number"
              required
            />
          </div>
          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Car Parking</label>
            <div className="flex space-x-2">
              {['0', '1', '2', '3', '4', '5'].map(parking => (
                <button
                  key={parking}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, carParking: parking }))}
                  className={`px-4 py-2 rounded-md ${formData.carParking === parking ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                >
                  {parking}
                </button>
              ))}
            </div>
          </div>
          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Facing</label>
            <select
              name="facing"
              value={formData.facing}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select direction</option>
              {['North', 'South', 'East', 'West', 'North-East', 'North-West', 'South-East', 'South-West'].map(direction => (
                <option key={direction} value={direction}>{direction}</option>
              ))}
            </select>
          </div>
          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Project name</label>
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              maxLength={70}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter project name"
            />
            <p className="text-xs text-gray-500 mt-1">{formData.projectName.length}/70 characters</p>
          </div>
          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ad Title*</label>
            <input
              type="text"
              name="adTitle"
              value={formData.adTitle}
              onChange={handleChange}
              maxLength={70}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Mention the key features of your property"
              required
            />
            <p className="text-xs text-gray-500 mt-1">{formData.adTitle.length}/70 characters</p>
          </div>
          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description*</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              maxLength={5000}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Include condition, features and reason for selling"
              required
            />
            <p className="text-xs text-gray-500 mt-1">{formData.description.length}/5000 characters</p>
          </div>
          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price*</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-700">₹</span>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter price"
                required
              />
            </div>
          </div>
          {}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">State*</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select state</option>
                {Object.keys(indianStates).map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City*</label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                disabled={!formData.state}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                required
              >
                <option value="">Select city</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>
          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload up to 20 Photos*</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {formData.images.map((image, index) => (
                <div key={index} className="relative aspect-square">
                  <img 
                    src={URL.createObjectURL(image)} 
                    alt={`Preview ${index}`} 
                    className="h-full w-full object-cover rounded-md border"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2"
                  >
                    ×
                  </button>
                </div>
              ))}
              {formData.images.length < 20 && (
                <label className="aspect-square flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:border-blue-500 transition-colors">
                  <div className="text-center p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span className="text-xs text-gray-500">Add Photo</span>
                  </div>
                  <input
                    type="file"
                    name="images"
                    onChange={handleImageUpload}
                    multiple
                    accept="image/*"
                    className="hidden"
                  />
                </label>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-1">{formData.images.length}/20 photos uploaded</p>
          </div>
          {}
          <div className="pt-4">
            <button
              type="submit"
              disabled={!isFormValid()}
              className={`w-full py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium ${isFormValid() ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
            >
              POST NOW
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default App;