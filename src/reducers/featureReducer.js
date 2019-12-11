import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/featureActions';

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

export const featureReducer = (state = initialState, action) => {
  console.log('State and action from featureReducer.js', state, action)
  switch (action.type) {
    case ADD_FEATURE: 
    console.log('are you getting this from Add')
    let carFeatures = state.car.features.map(feature => {
      return feature;
    })
    carFeatures.push(action.payload);
    let newAdditionalFeatures = state.additionalFeatures.filter(feature => feature.id !== action.payload.id);
    return {
      additionalPrice: carFeatures.reduce((total, feature) => {
        return total = total + feature.price;
      }, 0),
      car: {...state.car, features: carFeatures},
      additionalFeatures: newAdditionalFeatures,
    }

    case REMOVE_FEATURE: 
    console.log('are you getting this from remove')
      let removedCarFeatures = state.car.features.filter(feature => feature.id !== action.payload.id);
      let removedAdditionalFeatures = state.additionalFeatures.map(feature => {
        return feature;
      })
      removedAdditionalFeatures.push(action.payload);
      return {
        additionalPrice: removedCarFeatures.reduce((total, feature) => {
          return total = total + feature.price;
        }, 0),
        car: {...state.car, features: removedCarFeatures},
        additionalFeatures: removedAdditionalFeatures,
      }
    
    default: 
    console.log('are you getting this from default')
    return state;
  }
}