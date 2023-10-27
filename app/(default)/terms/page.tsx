import { Row, Col } from 'antd';
import React from 'react';

interface Props {
}

const TermComponent: React.FC<Props> = ({ }) => {
 return (
  <div className="flex justify-left min-h-screen bg-gray-100">
  <div className="w-full text-black" style={{ marginTop: '70px' }}>
    <section className="gradient-bg grid items-center py-[20px] h-[fit-content]]  ">
      <div className="cirle-bg">
        <div className="bg object-cover"></div>
      </div>
      <div className="container py-12 max-w-6xl">
        <div className="join-wrap fl-wrap text-white">
          <Row className="w-full flex" justify="space-between" align="middle">
            <Col span={24}  className="flex flex-col space-y-6 ">
              <h3 className="text-2xl md:text-4xl font-extrabold">POLICY, TERMS AND CONDITIONS  </h3>
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
    <div className='max-w-6xl py-14 text-gray-500 space-y-6 mx-auto px-3 lg:px-0'>
        <h3 className='text-2xl font-bold text-blue-300 py-6'>PLEASE REVIEW OUR TERMS AND CONDITIONS</h3>
        <p className='text-base leading-8'>These conditions explain the rights, obligations, and responsibilities of all parties to this Agreement. Where we use the
word ‘You’ or ‘Your’ it means the Customer: ‘We’, ‘Us’ or ‘Our’ means the Packmyload.com. These terms and conditions can
be varied or amended subject to prior written agreement. In Clauses 7, 8, 9. We recommend You arrange insurance to cover
Your goods or premises. We can arrange insurance for Your benefit upon request. This insurance will be separate from this
contract and subject to the terms and conditions of the policy.</p>
        <ol className='list-decimal px-3'>
          <li className='font-bold underline underline-offset-4'>Our Quotation</li>
            <p className='mt-3 text-[15px]'>1.1 Our quotation, unless otherwise stated, does not include insurance, cancellation/postponement waivers, customs
  duties, port charges including (but not limited to) demurrage, inspections, or any fees, or taxes payable to government
  bodies or agencies.</p>
            <p className='mt-3 text-[15px]'>1.2 Our Quotation is valid for 28 days from the date of issue. Unless already included in Our Quotation, reasonable
additional charges may apply if the work does not commence within twenty-eight days of acceptance:</p>
            <p className='mt-3 text-[15px]'>1.2.1 Our costs change because of economic variables, changes in taxation, freight, fuel or other charges beyond our
control.</p>
            <p className='mt-3 text-[15px]'>1.2.2 Our working hours are Mondays to Friday (08:00 – 18:00 hrs). The work is carried out on a Saturday, Sunday or
public holiday or outside normal hours (08:00 – 18:00hrs) at your reguest.</p>
            <p className='mt-3 text-[15px]'>1.2.3 You are to ensure that the entrance or exit to the premises, stairs, lifts or doorways are adequate for free
movement of the goods without mechanical equipment or structural alteration, or the approach, road or drive is suitable
for our vehicles and/or containers to load and/or unload within 20 metres of the doorway.</p>
            <p className='mt-3 text-[15px]'>1.2.4 if there are delays or events outside Our reasonable control which increase or extend the resources or time allowed
to complete the agreed work, you may agree to pay any reasonable charge arising from this</p>
          <li className='font-bold underline underline-offset-4 mt-4'>Work not included in the quotation</li>
            <p className='mt-3 text-[15px]'>2.1 Unless agreed by us in writing, we will not:</p>
            <p className='mt-3 text-[15px]'>2.1.1 Dismantle or assemble furniture of any kind</p>
            <p className='mt-3 text-[15px]'>2.1.2 Disconnect, re-connect, dismantle or re-assemble appliances, fixtures, fittings or equipment.</p>   
            <p className='mt-3 text-[15px]'>2.1.3 Take up or lay fitted floor coverings.</p>   
            <p className='mt-3 text-[15px]'>2.1.4 Move items to or from a loft, unless properly lit & floored & safe access is provided.</p>   
            <p className='mt-3 text-[15px]'>2.1.5 Move or store & potentially dangerous, damaging or explosive items, including gas bottles, aerosols, paints,
firearms and ammunition.</p>   
            <p className='mt-3 text-[15px]'>2.1.6 Jewellery, watches, trinkets, precious stones or metals, money, deeds, securities, mobile telephones, portable
media and computing devices, stamps, coins, or goods or collections of any similar kind.</p>   
            <p className='mt-3 text-[15px]'>2.1.7 Goods likely to encourage vermin or other pests or to cause infestation or contamination.</p>   
            <p className='mt-3 text-[15px]'>2.1.8 Dismantle or assemble garden furniture and equipment including, but not limited to: server rooms, sheds,
greenhouses, garden shelters, outdoor play equipment, and satellite dishes, or move paving slabs, planters and the like.</p>   
            <p className='mt-3 text-[15px]'>2.2 Our moving staff are not authorised to carry out such work. Should you require such we can provide the same at
an additional cost.</p>   
          <li className='font-bold underline underline-offset-4 mt-4'>Your responsibility</li>
        </ol>
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
