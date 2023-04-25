import React from 'react'
import style from './Header.module.scss'
import { Col, Container, Row } from 'react-bootstrap'

const Header = () => {
    return (
        <div>
            <div className={style.header}>
                <div className='d-flex'>
                    <h1 className={style.review}>2023 Reviews</h1>
                    <h2 className={style.para}>Top Custom Web Design Companies</h2>
                </div>
                <Container>
                    <Row >
                        <Col>
                            <h6>Home &gt; Web Design</h6>
                        </Col>
                        <Col className="text-right">
                            <p>LAST UPDATED APR 11, 2023</p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className={style.description}>

                <p>
                    Choosing a custom web design company takes time, but we can help. We have rounded up the best web design companies that you <br /> can filter by location, budget, reviews and more. Browse our vetted list of top-ranking web designers and web design agencies. Or <br /> view our popular web design packages.
                </p>
            </div>
            <hr style={{ height: '5px', borderWidth: '0', backgroundColor: 'black', color: 'black' }} />


        </div>



    )
}

export default Header