// components
import BlogPost from '../components/BlogPost'
import styled from 'styled-components'
export default function Blog() {
    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    return (
        <BlogWrapper>
                <h1 className='text-center'>Eastern Waters Blog</h1>
                <BlogPost title={'Blog Post Title'} date={'March 17th, 2021'} body={lorem}/>
                <BlogPost title={'Blog Post Title'} date={'March 17th, 2021'} body={lorem}/>
        </BlogWrapper>
    )
}

const BlogWrapper = styled.div`

`