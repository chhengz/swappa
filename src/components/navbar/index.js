// const links = [
//     {label: "Home",          path: "/",              isDropdown: false},
//     {label: "Categories",    path: "/categories",    isDropdown: true},
//     {label: "About",         path: "/about",         isDropdown: false},
//     {label: "Contact",       path: "/contact",       isDropdown: false},
//     {label: "Login",         path: "/login",         isDropdown: false},
//     {label: "Register",      path: "/register",      isDropdown: false},
//     {label: "Sell",          path: "/sell",          isDropdown: false},
// ]




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
        label: "IPhones", path: "/", 
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
        label: "Laptops", path: '/', 
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
        label: "Snekers", path: '/', 
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
        label: "Watchs", path: '/', 
        dropdownLists: [
            { label: 'Apple Watch',         path: ''},
            { label: 'Samsung Smartwatch',  path: ''},
            { label: 'Android Smartwatch',  path: ''},
            { label: 'All Wearables',       path: ''},
        ]
    },
    {
        label: "Tablets", path: '/', 
        dropdownLists: [
            { label: '', path: ''}
        ]
    },
    {
        label: "Video Game", path: '/', 
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
        label: "More", path: '',
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
        label: "Sell", path: '/',
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


export default links