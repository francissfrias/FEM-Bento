import writeContentImg from '../src/assets/images/illustration-ai-content.webp';
import fasterAudienceImg from '../src/assets/images/illustration-audience-growth.webp';
import calenderImg from '../src/assets/images/illustration-consistent-schedule.webp';
import createPostImg from '../src/assets/images/illustration-create-post.webp';
import stars from '../src/assets/images/illustration-five-stars.webp';
import growFollowersImg from '../src/assets/images/illustration-grow-followers.webp';
import igImg from '../src/assets/images/illustration-multiple-platforms.webp';
import scheduleImg from '../src/assets/images/illustration-schedule-posts.webp';

const App = () => {
  return (
    <div className='flex justify-center items-center bg-[#f6f6f6] lg:h-dvh'>
      <div className=' py-8 px-6  grid grid-cols-1 grid-rows-1 gap-8 md:py-2 lg:grid-cols-4 lg:grid-rows-[minmax(0,1fr)_minmax(0,0.2fr)_minmax(0,0.35fr)_minmax(0,0.75fr)] lg:h-full lg:px-40 lg:py-20 lg:overflow-hidden'>
        <div className='bg-primary p-8 rounded-md flex flex-col justify-center items-center text-center overflow-hidden  lg:row-start-1 lg:col-start-2 lg:col-span-2 '>
          <h1 className='text-white font-md text-4xl mb-6 lg:text-6xl lg:mb-6 lg:tracking-tight '>
            Social Media <span className='text-secondary '>10x&nbsp;</span>
            <br className='hidden lg:block' />
            <i className='font-mdItalic'>Faster</i>
            <br className='block lg:hidden' /> with AI
          </h1>
          <img src={stars} className='w-[60%] mb-2 lg:w-[40%]' />
          <span className='text-primary-foreground font-regular'>
            Over 4,000 5-star reviews
          </span>
        </div>

        <div className='bg-white py-2.5 px-4 rounded-md space-y-2 flex flex-col lg:row-start-2 lg:row-span-2 lg:col-start-2 lg:overflow-hidden lg:justify-between'>
          <img src={igImg} className='lg:min-w-[20.5rem] ' />
          <h1 className='font-regular text-pretty font-bold text-xl tracking-normal leading-[1.15rem] lg:text-3xl lg:leading-7 lg:pb-2 '>
            Manage multiple accounts and platforms.
          </h1>
        </div>

        <div className='relative px-2.5 pr-36 pt-3 bg-secondary rounded-md lg:row-start-2 lg:row-span-2 lg:col-start-3 lg:px-6 lg:overflow-hidden lg:pt-6'>
          <h1 className='font-regular font-bold tracking-tight leading-4 lg:text-3xl lg:leading-7'>
            Maintain a consistent posting schedule.
          </h1>
          <img src={calenderImg} className='mt-3' />
        </div>

        <div className='bg-primary-foreground py-4 px-3 text-center space-y-3 rounded-md flex  overflow-hidden lg:col-start-4 lg:row-start-1 lg:row-span-3 lg:text-left  lg:flex-col lg:justify-between lg:py-12 lg:pl-12 '>
          <h1 className='font-regular font-bold text-[1.4rem] lg:text-[1.8rem] lg:leading-8 lg:tracking-tighter '>
            Schedule to social media.
          </h1>
          <img src={scheduleImg} className='lg:min-w-[25rem]' />

          <p className='font-regular text-pretty leading-5'>
            Optimize post timings to publish content at the perfect time for
            your audience.
          </p>
        </div>

        <div className='bg-primary rounded-md px-12 py-6 flex flex-col items-center justify-center text-center overflow-hidden lg:row-start-4 lg:col-start-3 lg:col-span-2 lg:flex-row lg:px-6'>
          <img
            src={growFollowersImg}
            alt='grow followers image'
            className='mb-8 w-4/5 self-start lg:w-[55%]'
          />
          <p className='font-md text-white text-2xl text-left tracking-tighter leading-5 lg:text-[2.2rem] lg:leading-8'>
            Grow followers
            <br className='block' /> with non-stop content.
          </p>
        </div>

        <div className=' bg-white py-4 px-3 text-left rounded-md flex flex-col overflow-hidden lg:row-start-4 lg:col-start-2 lg:p-6'>
          <h1 className='font-md tracking-tighter text-3xl lg:text-6xl lg:mb-1'>{`>56%`}</h1>
          <p className='font-regular tracking-tight mb-3 lg:tracking-normal lg:leading-7'>
            faster audience growth
          </p>
          <img
            src={fasterAudienceImg}
            className='min-w-20 w-1/2 lg:self-start lg:mt-auto  lg:w-3/4'
          />
        </div>

        <div className='bg-secondary-foreground py-8 px-7 rounded-md flex flex-col overflow-hidden lg:row-start-1 lg:row-span-2 lg:col-start-1 lg:justify-center lg:text-left lg:items-start lg:pl-9 lg:pr-10  '>
          <h1 className='font-regular font-semibold tracking-tighter leading-6 text-3xl mb-6 lg:leading-8  lg:text-4xl   '>
            Create and schedule content <br />
            <span className='text-primary opacity-80 italic'>quicker.</span>
          </h1>
          <img src={createPostImg} className='w-3/4 lg:max-w-[15rem]' />
        </div>

        <div className='bg-secondary rounded-md py-6 pl-6 lg:col-start-1 lg:row-start-3 overflow-hidden lg:row-span-full  lg:flex lg:flex-col lg:justify-between'>
          <h1 className='font-regular font-bold text-2xl text-pretty leading-5 mb-6 lg:text-4xl lg:tracking-tighter  '>
            Write your content using AI.
          </h1>
          <img
            src={writeContentImg}
            className='w-3/4 lg:w-full lg:self-center'
          />
        </div>
      </div>
    </div>
  );
};

export default App;
