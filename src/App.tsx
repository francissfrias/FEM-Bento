import stars from '../src/assets/images/illustration-five-stars.webp';
import igImg from '../src/assets/images/illustration-multiple-platforms.webp';
import calenderImg from '../src/assets/images/illustration-consistent-schedule.webp';
import scheduleImg from '../src/assets/images/illustration-schedule-posts.webp';
import fasterAudienceImg from '../src/assets/images/illustration-audience-growth.webp';
import growFollowersImg from '../src/assets/images/illustration-grow-followers.webp';
import writeContentImg from '../src/assets/images/illustration-ai-content.webp';
import createPostImg from '../src/assets/images/illustration-create-post.webp';

const App = () => {
  return (
    <div className='py-8 px-6 flex justify-center items-center bg-[#f6f6f6]'>
      <div className=' grid grid-cols-1 grid-rows-1 gap-7'>
        <div className='bg-primary p-8 rounded-md flex flex-col justify-center items-center text-center'>
          <h1 className='text-white font-md text-4xl mb-6'>
            Social Media <span className='text-secondary '>10x&nbsp;</span>
            <i className='font-mdItalic'>Faster</i>
            <br className='block md:hidden' /> with AI
          </h1>
          <img src={stars} className='w-[60%]  mb-2' />
          <span className='text-primary-foreground font-regular'>
            Over 4,000 5-star reviews
          </span>
        </div>
        <div className='bg-white py-2.5 px-4 rounded-md space-y-2'>
          <img src={igImg} />

          <h1 className='font-regular text-pretty font-bold text-xl tracking-normal leading-[1.15rem]'>
            Manage multiple accounts and platforms.
          </h1>
        </div>
        <div className='relative px-2.5 pr-36 pt-3 bg-secondary rounded-md'>
          <h1 className='font-regular font-bold tracking-tight leading-4 '>
            Maintain a consistent posting schedule.
          </h1>
          <img src={calenderImg} className='mt-3' />
        </div>
        <div className='bg-primary-foreground py-4 px-3 text-center space-y-3 rounded-md'>
          <h1 className='font-regular font-bold text-[1.4rem]'>
            Schedule to social media.
          </h1>
          <img src={scheduleImg} />
          <p className='font-regular text-pretty leading-5'>
            Optimize post timings to publish content at the perfect time for
            your audience.
          </p>
        </div>
        <div className='bg-primary rounded-md px-12 py-6 flex flex-col items-center justify-center text-center'>
          <img src={growFollowersImg} className='mb-8 w-4/5 self-start' />
          <p className='font-md text-white text-2xl text-pretty tracking-tighter leading-5 '>
            Grow followers
            <br className='block md:hidden' /> with non-stop content.
          </p>
        </div>
        <div className='bg-white py-4 px-3 text-left  rounded-md '>
          <h1 className='font-md tracking-tighter text-3xl'>{`>56%`}</h1>
          <p className='font-regular tracking-tight mb-3'>
            faster audience growth
          </p>
          <img src={fasterAudienceImg} className='min-w-20 w-1/2 ' />
        </div>
        <div className='bg-secondary-foreground py-8 px-7 rounded-md flex flex-col '>
          <h1 className='font-regular font-semibold tracking-tighter leading-6 text-3xl mb-6'>
            Create and schedule content{' '}
            <span className='text-primary opacity-80 italic'>quicker.</span>
          </h1>
          <img src={createPostImg} className='w-3/4' />
        </div>
        <div>Write your content using AI.</div>
      </div>
    </div>
  );
};

export default App;
