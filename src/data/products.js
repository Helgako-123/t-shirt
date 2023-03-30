import PropTypes from 'prop-types';

const productsData = [
  {
    id: 1,
    name: 'react',
    title: 'React shirt',
    basePrice: 20,
    colors: ['blue', 'red', 'green'],
    sizes: [
      { name: 'S', additionalPrice: 0 },
      { name: 'M', additionalPrice: 5 },
      { name: 'L', additionalPrice: 6 },
      { name: 'XL', additionalPrice: 8 }
    ]
  },
  {
    id: 2,
    name: 'kodilla',
    title: 'Kodilla shirt',
    basePrice: 25,
    colors: ['white', 'black', 'red'],
    sizes: [
      { name: 'S', additionalPrice: 0 },
      { name: 'M', additionalPrice: 2 },
      { name: 'L', additionalPrice: 3 },
      { name: 'XL', additionalPrice: 4 }
    ]
  }
];

// productsData.propTypes = {
//   title: PropTypes.array.isRequired,
//   basePrice: PropTypes.array.isRequired
// }

export default productsData;