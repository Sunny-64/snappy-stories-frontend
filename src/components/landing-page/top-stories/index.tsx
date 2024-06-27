import React from 'react'
import Slider from '../common/Slider'
import StoryCard from './StoryCard'

const BASE_URL = '/assets/landing-page'

const STORIES = [
    {
        img : `/assets/landing-page/book-3.jpg`, 
        title : 'Children of Blood and Bone', 
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ', 
        authorName : 'Tomi Adeyemi', 
        authorImg : '/avatar.jpg', 
        rating : '4.5'
    },
    {
        img : `${BASE_URL}/book-2.jpg`, 
        title : 'Children of Blood and Bone', 
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ', 
        authorName : 'Tomi Adeyemi', 
        authorImg : '/avatar.jpg', 
        rating : '4.5'
    },
    {
        img : `${BASE_URL}/book-1.jpg`, 
        title : 'To kill a Mocking bird', 
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ', 
        authorName : 'Tomi Adeyemi', 
        authorImg : '/avatar.jpg', 
        rating : '4.5'
    },
]

const TopStories = () => {
  return (
    <section id='Top-stories' className='bg-white px-3 xs:px-4 lg:px-8 xl:px-10  py-10'>

        <p className='text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6'>
          Top <span className='text-blue'>Stories</span>
        </p>
        <Slider 
            componentToRender={StoryCard} 
            data={STORIES} 
            slidesPerView={1}        
            pagination={true}
            paginationId={'story-pagination'}
            swiperContainerStyles={'md:px-4 lg:px-32'}
            swiperSlideStyles = {'py-10 px-8'}
        />
    </section>
  )
}

export default TopStories