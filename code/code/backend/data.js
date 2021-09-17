import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Mamun',
            email: 'admin@true.com',
            password: bcrypt.hashSync('1234', 7),
            isAdmin: true,
        },
        {
            name: 'Mursalin',
            email: 'user@true.com',
            password: bcrypt.hashSync('12345', 7),
            isAdmin: false,
        },
    ],
    products: [
        {
            name: 'Stainless Steel',
            category: 'mechanical',
            image: '/images/p1.jpg',
            price: 1250,
            countInStock: 109,
            brand: 'Sky group',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name: 'Mild Steel',
            category: 'mechanical',
            image: '/images/p2.jpg',
            price: 1560,
            countInStock: 19,
            brand: 'Sky group',
            rating: 4.4,
            numReviews: 14,
            description: 'high quality product',
        },
        {
            name: 'Copper',
            category: 'mechanical',
            image: '/images/p3.jpg',
            price: 1320,
            countInStock: 0,
            brand: 'Sky group',
            rating: 4.7,
            numReviews: 19,
            description: 'high quality product',
        },
        {
            name: 'Aluminium',
            category: 'mechanical',
            image: '/images/p4.jpg',
            price: 1440,
            countInStock: 50,
            brand: 'Sky group',
            rating: 4.0,
            numReviews: 16,
            description: 'high quality product',
        },
        {
            name: 'Brass',
            category: 'mechanical',
            image: '/images/p5.jpg',
            price: 1110,
            countInStock: 10,
            brand: 'Sky group',
            rating: 3.5,
            numReviews: 130,
            description: 'high quality product',
        },
        {
            name: 'Plastic',
            category: 'mechanical',
            image: '/images/p6.jpg',
            price: 1770,
            countInStock: 20,
            brand: 'Sky group',
            rating: 4.9,
            numReviews: 150,
            description: 'high quality product',
        },
    ]
}

export default data;