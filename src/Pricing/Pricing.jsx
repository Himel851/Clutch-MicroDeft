import Image from 'next/image'
import React from 'react'
import pricingImg from '../images/pricingImg.PNG'
import { Container, Table } from 'react-bootstrap'

const Pricing = () => {
    return (
        <div style={{ margin: '7rem auto 0', padding: "0 7%" }}>
            <p className='fs-4'>With the right UX services in place, you can create a seamless user experience and build customer loyalty. Our guide to UX service pricing will provide guidance on the best options to meet your business goals while also staying within budget.</p>
            <p className='fs-5'>User experience has become more relevant over the last few years. Many companies looking to launch web platforms and mobile apps have put a renewed focus on not just how their product looks, but how their target audience feels and uses their digital product.</p>
            <p className='fs-5'>UX and UI services are an element of design that focuses on the user. UX (or user experience) is the process that designers focus on in order to provide a meaningful experience for their users whereas UI (or user interface) design focuses on the looks or style of a digital product. Both of these design types are critical for a successful design experience.</p>

            <Container className="d-flex justify-content-center mt-5" >
                <Image src={pricingImg} alt="Pricing" style={{ width: '100%', height: 'auto' }} />
            </Container>

            <p className='fs-5 mt-5'>As shown in the chart above, the average cost for UX design services on Clutch ranges from a few thousand dollars to several tens of thousands. A lot of this relies on numerous factors, including the scale of the design project, the inclusion of web design and web development support, and the scope of services.</p>
            <p className='fs-5'>For businesses in this digital age, it is safe to assume that UX design services are a key aspect of their business strategy. A great user experience leads to attracting new customers and maintaining customer loyalty. It also helps businesses stand out from their competitors – potential customers are more likely to stick with your website if their user experience is flawless.</p>
            <p className='fs-5'>Superior UX design services ensure that your company’s site or app visitors will enjoy their user-friendly experience with minimal issues. <br /> Explore your options for UX services to make your company a leader in your industry.</p>

            <h3 className='mt-5'>Types of UX/UI Design Services & Hourly Rates</h3>
            <p className='fs-5'>In addition to other web design or web development costs, companies that aim to work with a UX/UI design agency must budget for those specific services and agency fees.</p>
            <p className='fs-5'>This table breaks down the pricing models for different types of UX services that go outside the traditional design work. Learn more about what your business can invest in when it comes to user experience.</p>

            <Table striped bordered hover >
                <thead variant="dark">
                    <tr>
                        <th>Service</th>
                        <th>Description</th>
                        <th>Average Hourly Rate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Usability Testing</td>
                        <td>After design work is finished, your company would want to see how users feel about the product. Usability testing involves real testing with real users to see where they experience confusion, encounter problems, or have no issues.</td>
                        <td>$25 - $49</td>
                    </tr>
                    <tr>
                        <td>User Research</td>
                        <td>User research is used by designers to understand the target personas through investigating their needs, behaviors, and motivations through qualitative and quantitative methods. This can be done through interviews, surveys, and evaluations set up by the agency.</td>
                        <td>$25 - $49</td>
                    </tr>
                    <tr>
                        <td>UX Strategy</td>
                        <td >Before design work can begin, your team of designers need to have a plan. UX strategy involves designing a detailed plan or workflow to scope each area to meet the client’s goal.</td>
                        <td >$25 - $49</td>

                    </tr>
                </tbody>
            </Table>
            <p className='fs-5'>Note: Price ranges above are in U.S. dollars</p>

            <h2 className='mt-5'>What is the Real Cost of Hiring a UX Design Agency?</h2>
            <p className='fs-5'>The average cost of hiring a UX/UI design agency on Clutch is between <b>$25-$49.</b> </p>
            <p className='fs-5'>Beginning a UX design project requires a solid understanding of what your company needs regarding design work. While clients themselves don’t need to be skilled designers, they need to have a general idea of what they’re looking for. Additionally, a successful UX design project relies on the input of target users since all planning directly impacts them.</p>

            <h4>What Services Do UX Design Companies Offer?</h4>
            <p className='fs-5'>User experience designers help with the following in a design process:</p>

            <ui>
                <li>Creation of prototypes and wireframes</li>
                <li>UX research</li>
                <li>Strategic planning & discovery</li>
                <li>User testing & refining</li>
                <li>Designing the final MVP with UI focus</li>
                <li>Assisting with launch if needed</li>
            </ui>
            <p className='fs-5'>Before hiring a UX or UI designer, it’s important to outline your needs, your customer needs, and needs for a design partner. The cost of working with a UX design company depends on various factors like industry experience, location, and more.</p>



        </div>
    )
}

export default Pricing