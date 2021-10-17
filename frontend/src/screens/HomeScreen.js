import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import Meta from '../components/Meta'
import ProductCarousel from '../components/ProductCarousel'
import { listProducts } from '../actions/productActions'

const HomeScreen = ({ match }) => {
  const keyWord = match.params.keyword
  const dispatch = useDispatch()

  const pageNumber = match.params.pageNumber || 1

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyWord, pageNumber))
  }, [dispatch, keyWord, pageNumber])

  return (
    <>
      <Meta />

      {!keyWord ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col sm={12} md={6} lg={4}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyWord ? keyWord : ''}
          />
        </>
      )}
    </>
  )
}

export default HomeScreen
