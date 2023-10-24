import { Row, Col } from 'antd';
import React from 'react';

interface Props {
}

const TermComponent: React.FC<Props> = ({ }) => {
 return (
  <div className="flex justify-left min-h-screen bg-gray-100 mt-1">
  <div className="w-full text-black" style={{ marginTop: '24px' }}>
    <section className="gradient-bg grid items-center py-[20px] h-[299px]  ">
      <div className="cirle-bg">
        <div className="bg object-cover"></div>
      </div>
      <div className="container py-12">
        <div className="join-wrap fl-wrap text-white">
          <Row className="w-full flex" justify="space-between" align="middle">
            <Col span={24}  className="flex flex-col space-y-6 ">
              <h3 className="text-4xl font-extrabold">POLICY, TERMS AND CONDITIONS  </h3>
              {/* <p>
                Check out our history, newsroom, and claims information, as well as opportunities
                to become an agent, driver, or employee
              </p> */}

              <div>
        
    <div className='mt-5'>
  
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
    <div className='max-w-6xl py-14 text-gray-500 space-y-6 mx-auto'>
        <h3 className='text-2xl font-bold text-center text-blue-300 py-6'>MOVE TERMS</h3>
        <p className='text-base '>All household relocation are covered under basic valuation policies. Additional coverage is available prior to pick up. packmyload is only responsible for terms in our immediate care, custody and control.</p>
        <p className='text-base '>The following is not included in the Packmyload's Quotation, unless agreed by us in writing prior to the beginning of your move.</p>
        <ul className='font-bold list-decimal ml-6 space-y-2'>
            <li>Dismantle and assemble furniture of any kind , with the exception of certain beds, baby cribs or kitchen tables.</li>    
            <li>Disconnect, re-connect, dismantle or re-assemble appliances, fixtures, things or equipment.</li>   
            <li>Take off or lay fitted floor covering.</li>
            <li>Move or store any items excluded under Clause Excluded items.</li>
        </ul>
        <p className='text-base '>There will be additional charges for services listed above..</p>
    </div>
   </div>
  </div>
 )
};

export default TermComponent;
