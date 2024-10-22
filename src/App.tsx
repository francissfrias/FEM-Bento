import React from 'react';
import stars from '../src/assets/images/illustration-five-stars.webp';

const App = () => {
  return (
    <div className='h-dvh flex justify-center items-center'>
      <div className=' grid grid-cols-1 grid-rows-1'>
        <div className='bg-primary'>
          <h1 className='text-white'>
            Social Media <span className='text-secondary '>10x&nbsp;</span>
            <i className='font-mdItalic'>Faster</i> with AI
          </h1>
          <img src={stars} />
          <span className='text-primary-foreground'>
            Over 4,000 5-star reviews
          </span>
        </div>
        <div>Manage multiple accounts and platforms.</div>
        <div>Maintain a consistent posting schedule.</div>
        <div>
          Schedule to social media.
          <span>
            Optimize post timings to publish content at the perfect time for
            your audience.
          </span>
        </div>
        <div>Grow followers with non-stop content.</div>
        <div>
          <h1>56%</h1>
          <span>faster audience growth</span>
        </div>
        <div>Create and schedule content quicker.</div>
        <div>Write your content using AI.</div>
      </div>
    </div>
  );
};

export default App;
