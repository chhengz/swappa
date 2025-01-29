import { Link } from "react-router-dom"

const links = [
    {
        id: 1,
        lists: [
            { label: 'Buy', path: '' },
            { label: 'Buyer Guides', path: '' },
            { label: 'Buy Phones', path: '' },
            { label: 'Buy Tablets', path: '' },
            { label: 'Buy MacBooks', path: '' },
            { label: 'Buy Laptops', path: '' },
            { label: 'Buy iPhones', path: '' },
            { label: 'Buy Apple', path: '' },
            { label: 'Unlocked Phones', path: '' },
        ]
    },
    {
        id: 2,
        lists: [
            { label: 'Sneakers', path: '' },
            { label: 'Watches', path: '' },
            { label: 'Cameras + Lenses', path: '' },
            { label: 'Home Tech', path: '' },
            { label: 'AirPods + Audio', path: '' },
            { label: 'Drones + DJI', path: '' },
            { label: 'Fitness + Cycling', path: '' },
            { label: 'Video Games', path: '' },
        ]
    },
    {
        id: 3,
        lists: [
            { label: 'Sell', path: '' },
            { label: 'Trade-In', path: '' },
            { label: 'Sell iPhones', path: '' },
            { label: 'Sell Phone', path: '' },
            { label: 'Sell Tablet', path: '' },
            { label: 'Sell Watch', path: '' },
            { label: 'Sell Laptop', path: '' },
            { label: 'Sell Sneakers', path: '' },
            { label: 'Sell Apple', path: '' },
        ]
    },
    {
        id: 4,
        lists: [
            { label: 'IMEI Check', path: '' },
            { label: 'Best Selling', path: '' },
            { label: 'Download App', path: '' },
            { label: 'Catalog', path: '' },
            { label: 'Carriers', path: '' },
            { label: 'Phone Repair', path: '' },
            { label: 'Swappa vs. eBay', path: '' },
        ]
    },
    {
        id: 5,
        lists: [
            { label: 'Help', path: '' },
            { label: 'FAQs', path: '' },
            { label: 'Search', path: '' },
            { label: 'ADA Accessibility', path: '' },
            { label: 'Sustainability', path: '' },
            { label: 'Prices', path: '' },
            { label: 'Fees', path: '' },
            { label: 'Returns + Refunds', path: '' },
        ]
    },
    {
        id: 6,
        lists: [
            { label: 'About Swappa', path: 'about' },
            { label: 'Blog', path: '' },
            { label: 'Forums', path: '' },
            { label: 'Contact Us', path: '' },
            { label: 'Product Request', path: '' },
            { label: 'Press', path: '' },
            { label: 'Policies', path: '' },
            { label: 'Terms of Use', path: '' },
        ]
    },
]

const Footer = () => {
    return (
        <footer className="navbar navbar-expand-lg bg-success">
            <div className="container gap-3 flex justify-center p-4" style={{ width: 100 + `%` }}>
                <ul className="navbar-nav ">
                    {
                        links.map((list) => (
                            <li key={list.id}>
                                <ul className="">
                                    {
                                        list.lists.map((link) => (
                                            <li key={link.label} className="nav-item">
                                                <Link to={link.path} className="text-white">{link.label}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </footer>
    )
}

export default Footer