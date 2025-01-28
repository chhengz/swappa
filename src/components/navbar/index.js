

const links = [
    {
        label: "Apple", path: "/apple", 
        dropdownLists: [
            { label: "iphone",          path: "/apple", },
            { label: "ipad",            path: "/apple", },
            { label: "Apples watch",    path: "/apple", },
            { label: "Airpods",         path: "/apple", },
            { label: "Macbook",         path: "/apple", },
            { label: "iMac",            path: "/apple", },
            { label: "Mac mini",        path: "/apple", },
            { label: "iPod",            path: "/apple", },
            { label: "Apple TV",        path: "/apple", },
            { label: "Vision Pro",      path: "/apple", },
            
        ], 
        
    },
    {
        label: "IPhones", path: "/iphone", 
        dropdownLists: [
            { label: 'Iphone 16 series',    path: '', },
            { label: 'Iphone 15 series',    path: '', },
            { label: 'Iphone 14 series',    path: '', },
            { label: 'Iphone 13 series',    path: '', },
            { label: 'Iphone 12 series',    path: '', },
            { label: 'Iphone Pro series',   path: '', },
            { label: 'Iphone Max series',   path: '', },
            { label: 'Iphone SE series',    path: '', },

            { label: "Buyer's Guid",        path: '', },
            { label: "Sell iPhone",         path: '', },
            { label: "All iPhones",         path: '', },
        ],
        
    },
    {
        label: "Phone", path: '/phone',
        dropdownLists: [
            { label: 'Unlocked',        path: '/phone' },
            { label: 'Apple',        path: '/phone' },
            { label: 'Samsung',        path: '/phone' },
            { label: 'Google',        path: '/phone' },
            { label: 'Verizon',        path: '/phone' },
            { label: 'T-Moblie',        path: '/phone' },
            { label: 'AT&T',        path: '/phone' },
            { label: 'All Phones',        path: '/phone' },
        ]
    },
    {
        label: "Laptops", path: '/labtop', 
        dropdownLists: [
            { label: 'Macbook',         path: '' },
            { label: 'Macbook Pro',     path: '' },
            { label: 'Macbook Air',     path: '' },
            { label: 'Chromebook',      path: '' },
            { label: 'Windows',         path: '' },
            { label: 'MacBook Guide',   path: '' },
            { label: 'All Labtops',     path: '' },
        ],
        
    },
    {
        label: "Snekers", path: '/sneaker', 
        dropdownLists: [
            { label: 'Air Jordan',      path: ''},
            { label: 'Air Max',         path: ''},
            { label: 'Air Max 1',       path: ''},
            { label: 'Jordan 1',        path: ''},
            { label: 'Jordan 4',        path: ''},
            { label: 'Nike Dunks',      path: ''},
            { label: 'All Sneakers',    path: ''},
        ],
    },
    {
        label: "Watchs", path: '/watch', 
        dropdownLists: [
            { label: 'Apple Watch',         path: ''},
            { label: 'Samsung Smartwatch',  path: ''},
            { label: 'Android Smartwatch',  path: ''},
            { label: 'All Wearables',       path: ''},
        ]
    },
    {
        label: "Tablets", path: '/tablet', 
        dropdownLists: [
            { label: 'iPad', path: ''},
            { label: 'Samsung', path: ''},
            { label: 'Windows / Surface', path: ''},
            { label: 'Amazon / Kindle', path: ''},
            { label: 'All Tablets', path: ''},
        ]
    },
    {
        label: "Video Game", path: '/videogame', 
        dropdownLists: [
            { label: 'PlayStation 5',       path: '' },
            { label: 'PlayStation 4',       path: '' },
            { label: 'Xbox Series X',       path: '' },
            { label: 'Nintendo Switch',     path: '' },
            { label: 'Games',               path: '' },
            { label: 'All Gaming',          path: '' },
        ]
    },
    {
        label: "More", path: '/features',
        dropdownLists: [
            { label: 'Audio & AirPods',     path: '' },
            { label: 'Cameras & Lenses',    path: '' },
            { label: 'Computers',           path: '' },
            { label: 'Drones',              path: '' },
            { label: 'Fitness & Cycling',   path: '' },
            { label: 'Home Tech',           path: '' },
        ]
    },
    {
        label: "Sell", path: '/sell',
        dropdownLists: [
            { label: 'iPhone',          path: ''},
            { label: 'Phones',          path: ''},
            { label: 'Laptop',          path: ''},
            { label: 'MacBook',         path: ''},
            { label: 'Watch',           path: ''},
            { label: 'Sneakers',        path: ''},
            { label: 'Audio',           path: ''},
            { label: 'Video Gaming',    path: ''},
            { label: 'Trade-in',        path: ''},
            { label: 'Sell Used Tech',  path: ''},
        ]
    }
]

const navLinks = [
    { label: '1', path: '#', className: 'fa-solid fa-circle-question' },
    { label: '2', path: '#', className: 'fa-solid fa-user' },
    { label: '3', path: '#', className: 'fa-solid fa-cart-shopping' },
  ]

// export default links

export { links, navLinks } 