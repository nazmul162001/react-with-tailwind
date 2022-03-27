import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
  const pricingOptions = [
    {id:1, name: 'Free', price: 0, benifits: [
      'basic free', 
      'unlimited deals', 
      'localized deals', 
      'fantastic deals', 
      'crazy deals'
    ]},
    {id:2, name: 'Regular', price: 9.99, benifits: [
      'Yearly payment', 
      'unlimited deals', 
      'localized deals', 
      'fantastic deals', 
      'crazy deals'
    ]},
    {id:3, name: 'Premium', price: 19.99, benifits: [
      'lifetime access', 
      'unlimited deals', 
      'localized deals', 
      'fantastic deals', 
      'crazy deals'
    ]}
  ]
  return (
    <div className='bg-indigo-300 p-4 mt-8'>
      <h2 className="text-6xl font-mono text-white">Best deals on the town</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam adipisci illo repellat quia asperiores recusandae, corrupti neque iusto quidem consequuntur nihil voluptas voluptatibus quaerat dolorum eius ipsa aut aperiam. Dicta consequuntur est sapiente corrupti ab quasi veniam accusantium quae nostrum deserunt harum debitis dignissimos nam odit repudiandae, amet quam beatae mollitia alias obcaecati laboriosam illo eveniet! Quae veritatis consequuntur odio fugit corrupti voluptatum voluptas eos culpa. Quo nemo labore mollitia placeat, officia cumque, voluptatum, optio officiis eos atque quidem rerum ipsam aliquid. Aliquam quos at consequuntur saepe, incidunt earum ipsum suscipit porro repellendus eum cumque eligendi ipsam optio ut sed.</p>

      <div className='grid md:grid-cols-3 gap-3 mt-8'>
        {
          pricingOptions.map(option => <PricingOption 
          key = {option.id}
          option = {option}
          />)
        }
      </div>
    </div>
  );
};

export default Pricing;