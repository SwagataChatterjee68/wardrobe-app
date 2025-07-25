
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Login from '../pages/Login'
import Register from '../pages/Register'
import CreateProduct from '../pages/admin/CreateProduct'
import UpdateProduct from '../pages/admin/UpdateProduct'
import SingleProduct from '../pages/SingleProduct'
import About from '../pages/About'
import UserProfile from '../pages/users/UserProfile'
import PageNotFound from '../pages/PageNotFound'
import { useSelector } from 'react-redux'
import Cart from '../pages/Cart'
import CategorySection from '../pages/Category';
import Shop from '../pages/Shop';


const MainRoute = () => {
    const user = useSelector((state) => state.userReducer.users)

    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Product />} />
                <Route path='/about' element={<About />} />
                <Route path='/*' element={<PageNotFound />} />
                <Route path="/" element={<CategorySection />} />
                <Route path="/shop/:category" element={<Shop />} />
                <Route path='/products/:id' element={<SingleProduct />} />

                {
                    user ?
                        <>
                            <Route path='/products/:id' element={<SingleProduct />} />
                            <Route path='/profile' element={<UserProfile />} />
                            <Route path='/cart' element={<Cart />} />

                        </>
                        :
                        <>
                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={<Register />} />
                        </>
                }
                {
                    user && user.isAdmin &&
                    <>
                        <Route path='/admin/create-product' element={<CreateProduct />} />
                        <Route path='/admin/update-product/:id' element={<UpdateProduct />} />
                        <Route path='/cart' element={<Cart />} />
                    </>


                }

            </Routes>
        </div>
    )
}

export default MainRoute
